import React, { Component, Fragment } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Form, Button, Modal, Table, Drawer, Pagination } from 'antd';
import { connect } from 'dva';
import { formatMessage } from 'umi/locale';
import IconFont from '@/components/IconFont';

// import TableHeader from '@/components/TableHeader';
import styles from './CodeMaintenance.less';
// import { thisExpression } from '@babel/types';
import SearchForm from './components/SearchForm';
import ModifyCode from './components/ModifyCode';

const NewSearchForm = Form.create({})(SearchForm);

@connect(({ codeList, loading }) => ({
  loading: loading.effects,
  getCodeListData: codeList.data,
  getCodeItemListData: codeList.itemData,
}))
class CodeMaintenance extends Component {
  searchForm = React.createRef();

  state = {
    codeVisible: false,
    deleteCodeItemVisible: false,
    editIconActive: false,
    deleteIconActive: false,
    activeIndex: undefined,
    codeName: '',
    // eslint-disable-next-line react/no-unused-state
    itemNameValue: '',
    columns: [
      {
        title: formatMessage({ id: 'app.common.number' }),
        dataIndex: 'index',
        key: 'index',
        align: 'center',
        render: (res, recode, index) => (
          <span>
            {(this.state.itemPage.pageNumber - 1) * this.state.itemPage.pageSize + index + 1}
          </span>
        ),
      },
      {
        title: formatMessage({ id: 'systemManagement.codeMaintenance.subitemId' }),
        dataIndex: 'subitemId',
        key: 'subitemId',
        align: 'center',
      },
      {
        title: formatMessage({ id: 'systemManagement.codeMaintenance.subitemName' }),
        dataIndex: 'subitemName',
        key: 'subitemName',
        align: 'center',
      },
      {
        title: formatMessage({ id: 'systemManagement.codeMaintenance.sequence' }),
        dataIndex: 'sequence',
        key: 'sequence',
        align: 'center',
      },
      {
        title: formatMessage({ id: 'app.common.operation' }),
        dataIndex: 'operation',
        key: 'operation',
        align: 'center',
        render: (res, recode, index, active) => (
          <span className={styles.operation}>
            <a
              href="#"
              onClick={() => {
                this.updateCode(res, recode, index, active);
              }}
              onMouseEnter={() => this.editMouseEnter(index)}
              onMouseLeave={this.editMouseLeave}
            >
              <IconFont
                type={
                  this.state.editIconActive && this.state.activeIndex === index
                    ? 'icon-edit-hover'
                    : 'icon-edit'
                }
                className={styles['btn-icon']}
              />
            </a>
            <span className="interval-padding"></span>
            <a
              href="#"
              onClick={() => {
                this.deleteCodeItem(res, recode);
              }}
              onMouseEnter={() => this.deleteMouseEnter(index)}
              onMouseLeave={this.deleteMouseLeave}
            >
              <IconFont
                type={
                  this.state.deleteIconActive && this.state.activeIndex === index
                    ? 'icon-delete-hover'
                    : 'icon-delete'
                }
                className={styles['btn-icon']}
              />
            </a>
          </span>
        ),
      },
    ],
    // eslint-disable-next-line key-spacing
    codeColumns: [
      {
        title: formatMessage({ id: 'app.common.number' }),
        dataIndex: 'index',
        key: 'index',
        align: 'center',
        render: (res, recode, index) => (
          <span>{(this.state.page.pageNumber - 1) * this.state.page.pageSize + index + 1}</span>
        ),
      },
      {
        title: formatMessage({ id: 'systemManagement.codeMaintenance.codeID' }),
        dataIndex: 'codeId',
        key: 'codeId',
        align: 'center',
      },
      {
        title: formatMessage({ id: 'systemManagement.codeMaintenance.codeName' }),
        dataIndex: 'codeName',
        key: 'codeName',
        align: 'center',
      },
    ],
    page: {
      pageNumber: 1,
      pageSize: 10,
    },
    modifyFlag: false,
    codeId: '',
    itemPage: {
      pageNumber: '1',
      pageSize: '10',
    },
    updateCodeItemParams: {
      codeId: '',
      subitemId: '',
      subitem: '',
      subitemName: '',
      sequence: '',
    },
  };

  codeFormRef = React.createRef();

  componentDidMount() {
    this.queryCodeList();
  }

  editMouseEnter = index => {
    this.setState({
      editIconActive: true,
      activeIndex: index,
    });
  };

  editMouseLeave = () => {
    this.setState({
      editIconActive: false,
    });
  };

  deleteMouseEnter = index => {
    this.setState({
      deleteIconActive: true,
      activeIndex: index,
    });
  };

  deleteMouseLeave = () => {
    this.setState({
      deleteIconActive: false,
    });
  };

  addCode = () => {
    this.setState({ codeVisible: true, modifyFlag: false });
  };

  codeConfirm = () => {
    const updateCodeItemParams = {
      codeId: '',
      subitemId: '',
      subitem: '',
      subitemName: '',
      sequence: '',
    };
    this.setState({ codeVisible: false, updateCodeItemParams }, () => {
      this.queryCodeItemList();
    });
  };

  codeCancel = () => {
    const updateCodeItemParams = {
      codeId: '',
      subitemId: '',
      subitem: '',
      subitemName: '',
      sequence: '',
    };

    this.setState({ codeVisible: false, updateCodeItemParams });
  };

  updateCode = (res, recode) => {
    const { codeId } = this.state;
    const newUpdateCodeItemParams = {
      codeId,
      subitemId: recode.subitemId,
      subitem: recode.subitem,
      subitemName: recode.subitemName,
      sequence: recode.sequence,
    };
    this.setState({
      codeVisible: true,
      modifyFlag: true,
      updateCodeItemParams: newUpdateCodeItemParams,
    });
  };

  // 删除
  deleteCodeItem = (res, recode) => {
    const updateCodeItemParams = {
      subitemId: recode.subitemId,
      subitem: recode.subitem,
    };
    this.setState({
      deleteCodeItemVisible: true,
      updateCodeItemParams,
    });
  };

  deleteCodeItemConfirm = () => {
    const { dispatch } = this.props;
    const params = {
      operType: 'subitemDeleteBycodeId',
      codeId: this.state.codeId,
      subitem: this.state.updateCodeItemParams.subitem,
    };
    dispatch({
      type: 'codeList/deleteCodeItem',
      payload: params,
      callback: () => {
        this.queryCodeItemList();
        this.setState({
          deleteCodeItemVisible: false,
        });
      },
    });
  };

  deleteCodeItemCancel = () => {
    this.setState({
      deleteCodeItemVisible: false,
    });
  };

  queryCodeList = () => {
    const { dispatch } = this.props;
    const { page, codeName } = this.state;
    const params = {
      pageNumber: page.pageNumber.toString(),
      pageSize: page.pageSize.toString(),
      operType: 'codeQuery',
      codeName,
    };
    dispatch({
      type: 'codeList/getCodeList',
      payload: params,
      callback: () => {
        this.setState(
          {
            codeId:
              this.props.getCodeListData.items[0] && this.props.getCodeListData.items[0].codeId,
          },
          () => {
            this.queryCodeItemList();
          },
        );
      },
    });
  };

  itemNameChange = e => {
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      itemNameValue: e.target.value,
    });
  };

  queryCode = () => {
    this.searchForm.current.validateFields((err, values) => {
      if (err) {
        return;
      }
      this.setState(
        {
          codeName: values.codeName,
        },
        () => {
          this.queryCodeList();
        },
      );
    });
  };

  onShowSizeChange = (current, pageSize) => {
    const page = {
      pageNumber: current,
      pageSize,
    };
    this.setState(
      {
        page,
      },
      () => {
        this.queryCodeList();
      },
    );
  };

  onShowItemSizeChange = (current, pageSize) => {
    const itemPage = {
      pageNumber: current,
      pageSize,
    };
    this.setState(
      {
        itemPage,
      },
      () => {
        this.queryCodeItemList();
      },
    );
  };

  connectCodeList = record => {
    this.setState(
      {
        codeId: record.codeId,
      },
      () => {
        this.queryCodeItemList();
      },
    );
  };

  // 字典子项)
  queryCodeItemList = () => {
    const { dispatch } = this.props;
    const params = {
      operType: 'subitemQueryBycodeId',
      pageNumber: `${this.state.itemPage.pageNumber}` || '1',
      pageSize: `${this.state.itemPage.pageSize}` || '10',
      codeId: `${this.state.codeId}`,
    };
    dispatch({
      type: 'codeList/getCodeItemList',
      payload: params,
    });
  };

  pageChange = (pageNumber, pageSize) => {
    const page = {
      pageNumber,
      pageSize,
    };

    this.setState(
      {
        page,
      },
      () => {
        this.queryCodeList();
      },
    );
  };

  pageItemChange = (pageNumber, pageSize) => {
    const itemPage = {
      pageNumber,
      pageSize,
    };

    this.setState(
      {
        itemPage,
      },
      () => {
        this.queryCodeItemList();
      },
    );
  };

  render() {
    const { loading, getCodeListData, getCodeItemListData } = this.props;
    const totalCount = getCodeListData && getCodeListData.totalCount;
    const totalCountItem = getCodeItemListData && getCodeItemListData.totalCount;
    const { page, itemPage, updateCodeItemParams, modifyFlag } = this.state;

    const codeListData = getCodeListData && getCodeListData.items;
    const codeItemListData = getCodeItemListData && getCodeItemListData.items;

    return (
      <PageHeaderWrapper>
        <Fragment>
          <div>
            <div>
              <NewSearchForm search={this.queryCode} ref={this.searchForm}></NewSearchForm>
            </div>
            <div className={styles.content}>
              <Table
                loading={loading['codeList/getCodeList']}
                dataSource={codeListData}
                columns={this.state.codeColumns}
                pagination={false}
                onRow={record => ({
                  onClick: () => {
                    this.connectCodeList(record);
                  }, // 点击行
                })}
              ></Table>
              {codeListData && codeListData.length > 0 && (
                <Pagination
                  showSizeChanger
                  current={page.pageNumber}
                  showTotal={() =>
                    `Page ${(totalCount || 0) && page.pageNumber} of ${Math.ceil(
                      (totalCount || 0) / page.pageSize,
                    ).toString()}`
                  }
                  onShowSizeChange={this.onShowSizeChange}
                  onChange={this.pageChange}
                  total={totalCount}
                  pageSize={page.pageSize}
                />
              )}
            </div>
          </div>
          <div>
            <div>
              <Drawer
                closable={false}
                title={modifyFlag ? 'Modify Subiem' : 'Add Subitem'}
                width={700}
                onClose={this.codeCancel}
                visible={this.state.codeVisible}
              >
                {this.state.codeVisible && (
                  <ModifyCode
                    modifyFlag={modifyFlag}
                    codeId={this.state.codeId}
                    updateCodeItemParams={updateCodeItemParams}
                    onCancel={this.codeCancel}
                    onSave={this.codeConfirm}
                  ></ModifyCode>
                )}
              </Drawer>
              {/* 删除 */}
              <Modal
                title={formatMessage({ id: 'app.common.confirm' })}
                visible={this.state.deleteCodeItemVisible}
                onOk={this.deleteCodeItemConfirm}
                onCancel={this.deleteCodeItemCancel}
                cancelText={formatMessage({ id: 'app.common.cancel' })}
                okText={formatMessage({ id: 'app.common.confirm' })}
              >
                <div>
                  <span>Please confirm that you want to delete this record?</span>
                </div>
              </Modal>
            </div>
            <div className={styles.content} style={{ paddingTop: '0px' }}>
              <div className={styles.tableTop}>
                <Button onClick={this.addCode} type="primary" className="btn_usual">
                  + Add Subitem
                </Button>
              </div>
              <Table
                loading={loading['codeList/getCodeItemList']}
                dataSource={codeItemListData}
                pagination={false}
                columns={this.state.columns}
              ></Table>
              {codeItemListData && codeItemListData.length > 0 && (
                <Pagination
                  showSizeChanger
                  current={itemPage.pageNumber}
                  showTotal={() =>
                    `Page ${(totalCountItem || 0) && itemPage.pageNumber} of ${Math.ceil(
                      (totalCountItem || 0) / itemPage.pageSize,
                    ).toString()}`
                  }
                  onShowSizeChange={this.onShowItemSizeChange}
                  onChange={this.pageItemChange}
                  total={totalCountItem}
                  pageSize={itemPage.pageSize}
                />
              )}
            </div>
          </div>
        </Fragment>
      </PageHeaderWrapper>
    );
  }
}

export default CodeMaintenance;