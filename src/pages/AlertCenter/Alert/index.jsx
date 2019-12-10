import React, { useState } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import AlertDetail from './AlertDetail';
import AlertList from './AlertList';
import styles from '../index.less';

export default function() {
  const [alert, setAlert] = useState(null);

  return (
    <PageHeaderWrapper>
      <div className={styles['list-container']}>
        <AlertList getAlert={item => setAlert(item)} />
        {alert && <AlertDetail alert={alert} />}
      </div>
    </PageHeaderWrapper>
  );
}
