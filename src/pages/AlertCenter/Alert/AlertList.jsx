import React, { useState, useEffect } from 'react';
import Link from 'umi/link';
import { connect } from 'dva';
import moment from 'moment';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { Table, Row, Col, Button, Modal, Icon } from 'antd';
import IconFont from '@/components/IconFont';
import { dateFormat, timestampFormat } from '@/pages/DataImportLog/constants';
import ColumnTitle from '../ColumnTitle';
import styles from '../index.less';

const { Column } = Table;

export const DEFAULT_PAGE = 1;
export const DEFAULT_PAGE_SIZE = 10;

function ClaimModal({ visible, onCancel, onOk, loading, content }) {
  return (
    <Modal
      title="CONFIRM"
      visible={visible}
      closable={false}
      onCancel={onCancel}
      onOk={onOk}
      confirmLoading={loading}
    >
      <div style={{ textAlign: 'center' }}>
        {content}
        <div>Do you confirm to re-claim?</div>
      </div>
    </Modal>
  );
}

function CloseModal({ visible, onCancel, loading, onOk, content }) {
  return (
    <Modal
      title="CONFIRM"
      visible={visible}
      closable={false}
      onCancel={onCancel}
      onOk={onOk}
      confirmLoading={loading}
    >
      <div style={{ textAlign: 'center' }}>{content}</div>
    </Modal>
  );
}

function Title({ dispatch, loading, filterItems, tableColumn, id }) {
  function handleFilterItems() {
    dispatch({
      type: 'global/fetchTableFilterItems',
      payload: {
        tableName: 'slop_biz.v_alert_center',
        tableColumn,
      },
    });
  }

  async function handleCommit(condition) {
    dispatch({
      type: 'alertCenter/fetch',
      payload: {
        currentColumn: tableColumn,
        conditions: [condition],
      },
    });
  }
  return (
    <ColumnTitle
      isNum={tableColumn === 'itemsTotal'}
      tableColumn={tableColumn}
      loading={loading}
      filterItems={filterItems}
      getFilterItems={handleFilterItems}
      handleCommit={handleCommit}
    >
      <FormattedMessage id={`alert-center.${id}`} />
    </ColumnTitle>
  );
}

const WrapTitle = connect(({ loading, global: { filterItems } }) => ({
  loading: loading.effects['global/fetchTableFilterItems'],
  filterItems,
}))(Title);

function AlertBtn({ disabled, loading, claimAlert, closeAlert, exportAlert }) {
  return (
    <Row className={styles.btns}>
      <Col span={18}>
        <Button
          type="primary"
          disabled={disabled}
          onClick={claimAlert}
          loading={loading['alertCenter/claim']}
        >
          <IconFont type="iconqizhi" className={styles['btn-icon']} />
          <FormattedMessage id="alert-center.claim" />
        </Button>
        <Button disabled={disabled} onClick={closeAlert} loading={loading['alertCenter/close']}>
          <IconFont type="iconclose" className={styles['btn-icon']} />
          <FormattedMessage id="alert-center.close" />
        </Button>
        <Button disabled={disabled} onClick={exportAlert} loading={loading['alertCenter/claim']}>
          <IconFont type="iconbatch-export" className={styles['btn-icon']} />
          <FormattedMessage id="alert-center.export" />
        </Button>
      </Col>
      <Col span={6} align="right">
        <Button type="link">
          <Link to="/homepage/information">INFORMATION</Link>
        </Button>
      </Col>
    </Row>
  );
}

function AlertList({ dispatch, loading, alerts, total, claimInfos, getAlert }) {
  const [alert, setAlert] = useState({});
  const [claimVisible, setClaimVisible] = useState(false);
  const [claimContent, setClaimContent] = useState('');
  const [closeVisible, setCloseVisible] = useState(false);
  const [closeContent, setCloseContent] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);
  const [isBatchAction, setBatchAction] = useState(false);

  useEffect(() => {
    dispatch({
      type: 'alertCenter/fetch',
    });
  }, []);

  useEffect(() => {
    if (alerts && alerts.length > 0) {
      const [firstAlert] = alerts;
      if (alerts.some(item => item.alertId === alert.alertId)) {
        getAlert(alert);
        setAlert(alert);
      } else {
        // default alert
        getAlert(firstAlert);
        setAlert(firstAlert);
      }
    }
  }, [alerts]);

  // check latest claim state
  useEffect(() => {
    const localUserName = localStorage.getItem('loginName');
    claimInfos.forEach(item => {
      if (item.userName !== localUserName) {
        setClaimVisible(true);
      }
    });
  }, [claimInfos]);

  function handlePageChange(page, pageSize) {
    dispatch({
      type: 'alertCenter/fetch',
      payload: {
        page,
        pageSize,
      },
    });
  }

  function claimAlert(record) {
    if (record) {
      setAlert(record);
      setBatchAction(false);
      if (record.userName) {
        setClaimVisible(true);
        setClaimContent(<div>this alert has been claimed by {record.userName}</div>);
      } else {
        dispatch({
          type: 'alertCenter/claim',
          payload: {
            alertIds: [record.alertId],
            isCoverClaim: 0,
          },
        });
      }
    } else {
      const findAlert = selectedRows.find(item => item.userName);
      if (findAlert && findAlert.userName) {
        setClaimVisible(true);
        setBatchAction(true);
        setClaimContent(<div>some alerts has been claimed</div>);
      } else {
        dispatch({
          type: 'alertCenter/claim',
          payload: {
            alertIds: selectedRows.map(item => item.alertId),
            isCoverClaim: 0,
          },
        });
      }
    }
  }

  async function handleReClaim() {
    const curAlertId = alert.alertId;
    await dispatch({
      type: 'alertCenter/claim',
      payload: {
        alertIds: !isBatchAction ? [curAlertId] : selectedRows.map(item => item.alertId),
        isCoverClaim: 1,
      },
    });
    setClaimVisible(false);
  }

  function showCloseModal(record) {
    setCloseVisible(true);
    if (record) {
      setAlert(record);
      setBatchAction(false);
      setCloseContent(
        <>
          <div>Do you confirm to close this alert?</div>
          <div>(AlertId: {record.alertId})</div>
        </>,
      );
    } else {
      setBatchAction(true);
      setCloseContent('Do you confirm to close these alerts?');
    }
  }

  async function closeAlert() {
    const curAlertId = alert.alertId;
    await dispatch({
      type: 'alertCenter/close',
      payload: {
        alertIds: !isBatchAction ? [curAlertId] : selectedRows.map(item => item.alertId),
      },
    });
    setCloseVisible(false);
  }

  return (
    <div className={styles.list}>
      <AlertBtn
        loading={loading}
        disabled={!selectedRows.length}
        claimAlert={() => claimAlert()}
        closeAlert={() => showCloseModal()}
      />
      <ClaimModal
        visible={claimVisible}
        content={claimContent}
        onCancel={() => setClaimVisible(false)}
        onOk={handleReClaim}
        loading={loading['alertCenter/claim']}
      />
      <CloseModal
        visible={closeVisible}
        onCancel={() => setCloseVisible(false)}
        onOk={closeAlert}
        content={closeContent}
        loading={loading['alertCenter/close']}
      />
      <Table
        border
        dataSource={alerts}
        rowKey="alertId"
        loading={loading['alertCenter/fetch']}
        rowClassName={record => (record.alertId === alert.alertId ? 'active' : '')}
        rowSelection={{
          getCheckboxProps: record => ({
            disabled: +record.alertStatus === 1,
          }),
          onChange(selectedRowKeys, sRows) {
            setSelectedRows(sRows);
          },
        }}
        pagination={{
          total,
          showSizeChanger: true,
          showTotal(count) {
            return `Total ${count} items`;
          },
          onChange: (page, pageSize) => handlePageChange(page, pageSize),
          onShowSizeChange: (page, pageSize) => handlePageChange(page, pageSize),
        }}
        onRow={record => ({
          onClick(e) {
            if (!e.target.className) {
              getAlert(record);
              setAlert(record);
            }
          },
        })}
      >
        <Column
          align="center"
          dataIndex="alertId"
          title={<WrapTitle tableColumn="alertId" id="alert-id" />}
        />
        <Column
          width="15%"
          align="center"
          dataIndex="alertType"
          title={<WrapTitle tableColumn="alertType" id="alert-type" />}
        />
        <Column
          align="center"
          dataIndex="tradeDate"
          title={<WrapTitle tableColumn="tradeDate" id="trade-date" />}
          render={(text, record) => moment(record.tradeDate).format(dateFormat)}
        />
        <Column
          align="center"
          dataIndex="alertTime"
          title={<WrapTitle tableColumn="alertTime" id="alert-timestamp" />}
          render={(text, record) => moment(record.alertTime).format(timestampFormat)}
        />
        <Column
          align="center"
          dataIndex="itemsTotal"
          title={<WrapTitle tableColumn="itemsTotal" id="items-total" />}
          render={(text, record) => +record.itemsTotal}
        />
        <Column
          align="center"
          dataIndex="userName"
          title={<FormattedMessage id="alert-center.owner" />}
        />
        <Column
          align="center"
          dataIndex="alertStatusDesc"
          title={<FormattedMessage id="alert-center.status" />}
        />
        <Column
          align="center"
          width="8%"
          dataIndex="action"
          className="action"
          title={<FormattedMessage id="alert-center.actions" />}
          render={(text, record) => (
            <Row type="flex" justify="space-around" align="middle" className={styles['icon-btns']}>
              {loading['alertCenter/claim'] && alert.alertId === record.alertId ? (
                <Icon type="loading" />
              ) : (
                <button
                  type="button"
                  disabled={+record.alertStatus === 1}
                  title={formatMessage({ id: 'alert-center.claim' })}
                  onClick={() => claimAlert(record)}
                >
                  <IconFont type="iconqizhi" className={styles.icon} />
                </button>
              )}
              {/* never can close by manual */}
              {+record.isClosedManually === 1 && (
                <button
                  type="button"
                  disabled={+record.alertStatus === 1}
                  title={formatMessage({ id: 'alert-center.close' })}
                  onClick={() => showCloseModal(record)}
                >
                  <IconFont type="iconclose" className={styles.icon} />
                </button>
              )}
            </Row>
          )}
        />
      </Table>
    </div>
  );
}

const mapStateToProps = ({
  loading,
  alertCenter: { alerts, alertItems, page, total, claimInfos },
}) => ({
  alerts,
  page,
  total,
  alertItems,
  claimInfos,
  loading: loading.effects,
});
export default connect(mapStateToProps)(AlertList);
