import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
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
  const [searchParams, setSearchParams] = useState({
    market: defaultMarket,
    startDate: defaultDateRange[0],
    endDate: defaultDateRange[1],
  });

  useEffect(() => {
    dispatch({
      type: 'newAccount/fetch',
      payload: searchParams,
    });
  }, []);

  function handleParams(type, params) {
    setSearchParams(params);
    dispatch({ type, payload: params });
  }

  function handlePageChange(page, pageSize) {
    dispatch({ type: 'newAccount/reload', payload: { page, pageSize, ...searchParams } });
  }
  async function handleUpload(fileList) {
    const count = fileList.length;
    console.log(count);

    // dispatch({
    //   type: 'newAccount/fileUpload',
    //   payload: {
    //     file,
    //   },
    // });
    // dispatch({ type: 'newAccount/importByManual', payload: params });
    // await dispatch({ type: 'newAccount/importByManual', payload: params });
    // setVisible(false);
  }
  async function handleDownload(lopImpId) {
    const reportUrl = await dispatch({
      type: 'newAccount/fetchReportUrl',
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
        <FilterForm formType={2} loading={loading} onParams={handleParams} />
        <NewAccountLogModal
          visible={visible}
          loading={loading}
          onCancel={() => setVisible(false)}
          onUpload={handleUpload}
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
