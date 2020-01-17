import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import { FormattedMessage } from 'umi/locale';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Button, Row } from 'antd';
import { defaultDateRange, defaultMarket, downloadFile } from '../constants';
import FilterForm from '../FilterForm';
import NewAccountLogModal from './NewAccountLogModal';
import NewAccountLogList from './NewAccountLogList';
import styles from '../index.less';

function NewAccountLog({ dispatch, loading, logs, page: current, total }) {
  const [visible, setVisible] = useState(false);
  const [dateRange, setdateRange] = useState([]);
  const [searchParams, setSearchParams] = useState({});

  useEffect(() => {
    initPage();
  }, []);

  async function initPage() {
    const lastTradeDate = await dispatch({
      type: 'global/fetchLastTradeDate',
    });

    const startDate = lastTradeDate ? moment(lastTradeDate) : defaultDateRange[0];
    const endDate = defaultDateRange[1];

    setdateRange([startDate, endDate]);

    dispatch({
      type: 'newAccount/fetch',
      payload: {
        market: defaultMarket,
        startDate,
        endDate,
      },
    });
  }

  function handleParams(type, params) {
    setSearchParams(params);
    dispatch({ type, payload: params });
  }

  function handlePageChange(page, pageSize) {
    dispatch({ type: 'newAccount/fetch', payload: { page, pageSize, ...searchParams } });
  }

  async function handleFilesParse(fileList) {
    return dispatch({
      type: 'newAccount/fetchParseFiles',
      payload: fileList,
    });
  }

  async function handleUpload(fileList, onFile, onFinish) {
    let count = fileList.length;
    // eslint-disable-next-line no-restricted-syntax
    for (const file of fileList) {
      // eslint-disable-next-line no-await-in-loop
      const err = await dispatch({
        type: 'newAccount/importByManual',
        payload: file,
      });
      // eslint-disable-next-line no-await-in-loop
      onFile(err, file);
      if (err) break;
      count -= 1;
    }

    if (count === 0) {
      onFinish();
      // update logs
      dispatch({ type: 'newAccount/fetch', payload: searchParams });
    }
  }

  async function handleDownload(lopImpId) {
    const reportUrl = await dispatch({
      type: 'lop/fetchReportUrl',
      payload: {
        lopImpId,
      },
    });
    if (reportUrl) {
      downloadFile(reportUrl);
    }
  }
  return (
    <PageHeaderWrapper>
      <div className={styles.container}>
        <FilterForm
          formType={2}
          loading={loading}
          onParams={handleParams}
          defaultDateRange={dateRange}
        />
        <NewAccountLogModal
          visible={visible}
          parseLoading={loading['newAccount/fetchParseFiles']}
          onCancel={() => setVisible(false)}
          onUpload={handleUpload}
          onParseFiles={handleFilesParse}
        />
        <div className={styles['list-wrap']}>
          <Row className={styles['btn-group']}>
            <Button type="primary" className={styles['no-margin']} onClick={() => setVisible(true)}>
              <FormattedMessage id="data-import.manual-import" />
            </Button>
          </Row>
          <NewAccountLogList
            page={current}
            total={total}
            dataSource={logs}
            loading={loading}
            onPageChange={handlePageChange}
            onPageSizeChange={handlePageChange}
            onDownload={handleDownload}
          />
        </div>
      </div>
    </PageHeaderWrapper>
  );
}

export default connect(({ loading, newAccount: { logs, page, total } }) => ({
  loading: loading.effects,
  logs,
  page,
  total,
}))(NewAccountLog);
