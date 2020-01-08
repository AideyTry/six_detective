import React, { useState, useEffect } from 'react';
import { Input, Form, Radio, Select, List, Table } from 'antd';
import moment from 'moment';

import styles from '../index.less';

const { TextArea } = Input;
const { Option } = Select;
const { Column } = Table;

function NewEP({ detailData, oldValueList, isShowForm, getFieldDecorator }) {
  return (
    <div className={styles.ListBox}>
      <List key="NewEP" split={false}>
        <List.Item>
          <div className={styles.ListItem}>
            <p></p>
            <p>New INFO</p>
            <p>Old INFO</p>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.ListItem}>
            <p>Market</p>
            <p>{detailData.market}</p>
            <p>{oldValueList.market}</p>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.ListItem}>
            <p>EP Code</p>
            <p>{detailData.epCode}</p>
            <p>{oldValueList.epCode}</p>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.ListItem}>
            <div>
              <Form.Item label="EP Name">
                {getFieldDecorator('epName', {
                  rules: [{ required: !!isShowForm, message: 'Please input epName!' }],
                  initialValue: detailData.epName,
                })(<Input disabled={!isShowForm} />)}
              </Form.Item>
            </div>
            <p>{oldValueList.epName}</p>
          </div>
        </List.Item>
      </List>
    </div>
  );
}
function NewProduct({
  detailData,
  oldValueList,
  getFieldDecorator,
  setRadioCurrentValue,
  radioPdValue,
  setRadioPdValue,
  isShowForm,
}) {
  return (
    <div className={styles.ListBox}>
      <List key="NewProduct" split={false}>
        <List.Item>
          <div className={styles.ListItem}>
            <p></p>
            <p>New INFO</p>
            <p>Old INFO</p>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.ListItem}>
            <p>Market</p>
            <p>{detailData.market}</p>
            <p>{oldValueList.market}</p>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.ListItem}>
            <p>HKEX DCASS Code</p>
            <p>{detailData.hkexDcassCode}</p>
            <p>{oldValueList.hkexDcassCode}</p>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.ListItem}>
            <div>
              <Form.Item label="Is CA Code ?">
                {getFieldDecorator('isCaCode', {
                  rules: [{ required: !!isShowForm }],
                  initialValue: detailData.isCaCode,
                })(
                  isShowForm ? (
                    <Radio.Group onChange={e => setRadioCurrentValue(e.target.value)}>
                      <Radio style={{ display: 'inline' }} value="Yes">
                        yes
                      </Radio>
                      <Radio style={{ display: 'inline' }} value="No">
                        no
                      </Radio>
                    </Radio.Group>
                  ) : (
                    <Input disabled />
                  ),
                )}
              </Form.Item>
            </div>
            <p>{oldValueList.isCaCode}</p>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.ListItem}>
            <p>Product code</p>
            <p>{detailData.productCode}</p>
            <p>{oldValueList.productCode}</p>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.ListItem}>
            <div>
              <Form.Item label="Product Description">
                {getFieldDecorator('productDesc', {
                  rules: [{ required: !!isShowForm, message: 'Please input Product Description!' }],
                  initialValue: detailData.productDesc,
                })(<Input disabled={!isShowForm} />)}
              </Form.Item>
            </div>
            <p>{oldValueList.productDesc}</p>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.ListItem}>
            <div>
              <Form.Item label="Product Category" labelCol={{ span: 9 }} wrapperCol={{ span: 12 }}>
                {getFieldDecorator('productCategory', {
                  rules: [
                    { required: !!isShowForm, message: 'Please select your Product Category!' },
                  ],
                  initialValue: detailData.productCategory,
                })(
                  isShowForm ? (
                    <Select>
                      {detailData.productCategoryInit.split(',').map(item => (
                        <Option value={item} key={item}>
                          {item}
                        </Option>
                      ))}
                    </Select>
                  ) : (
                    <Input disabled />
                  ),
                )}
              </Form.Item>
            </div>
            <p>{oldValueList.productCategory}</p>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.ListItem}>
            <div>
              <Form.Item label="Futures or Option" labelCol={{ span: 9 }} wrapperCol={{ span: 12 }}>
                {getFieldDecorator('contractNature', {
                  rules: [{ required: !!isShowForm, message: 'Please select Futures or Option!' }],
                  initialValue: detailData.contractNature,
                })(
                  isShowForm ? (
                    <Select>
                      {detailData.contractNatureInit.split(',').map(item => (
                        <Option value={item} key={item}>
                          {item}
                        </Option>
                      ))}
                    </Select>
                  ) : (
                    <Input disabled />
                  ),
                )}
              </Form.Item>
            </div>
            <p>{oldValueList.contractNature}</p>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.ListItem}>
            <div>
              <Form.Item label="Product Group">
                {getFieldDecorator('productGroup', {
                  rules: [{ required: !!isShowForm, message: 'Please select Product Group!' }],
                  initialValue: detailData.productGroup,
                })(
                  isShowForm ? (
                    <Select>
                      {detailData.productGroupInit.split(',').map(item => (
                        <Option value={item} key={item}>
                          {item}
                        </Option>
                      ))}
                    </Select>
                  ) : (
                    <Input disabled />
                  ),
                )}
              </Form.Item>
            </div>
            <p>{oldValueList.productGroup}</p>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.ListItem}>
            <div>
              <Form.Item
                label="Template Code(Last Trade Day)"
                labelCol={{ span: 9 }}
                wrapperCol={{ span: 12 }}
              >
                {getFieldDecorator('ltdTmplCode', {
                  rules: [
                    {
                      required: !!isShowForm,
                      message: 'Please select Template Code(Last Trade Day)',
                    },
                  ],
                  initialValue: detailData.ltdTmplCode,
                })(
                  isShowForm ? (
                    <Select>
                      {detailData.ltdTmplCodeInit.split(',').map(item => (
                        <Option value={item} key={item}>
                          {item}
                        </Option>
                      ))}
                    </Select>
                  ) : (
                    <Input disabled />
                  ),
                )}
              </Form.Item>
            </div>
            <p>{oldValueList.ltdTmplCode}</p>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.ListItem}>
            <div>
              <Form.Item
                label="Template Code(Position Limit)"
                labelCol={{ span: 9 }}
                wrapperCol={{ span: 12 }}
              >
                {getFieldDecorator('plTmplCode', {
                  rules: [
                    {
                      required: !!isShowForm,
                      message: 'Please select Template Code(Position Limit)!',
                    },
                  ],
                  initialValue: detailData.plTmplCode,
                })(
                  isShowForm ? (
                    <Select>
                      {detailData.plTmplCodeInit.split(',').map(item => (
                        <Option value={item} key={item}>
                          {item}
                        </Option>
                      ))}
                    </Select>
                  ) : (
                    <Input disabled />
                  ),
                )}
              </Form.Item>
            </div>
            <p>{oldValueList.plTmplCode}</p>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.ListItem}>
            <div>
              <Form.Item
                label="Template Code(Reportable Limit)"
                labelCol={{ span: 9 }}
                wrapperCol={{ span: 12 }}
              >
                {getFieldDecorator('rlTmplCode', {
                  rules: [
                    {
                      required: !!isShowForm,
                      message: 'Please select Template Code(Reportable Limit)!',
                    },
                  ],
                  initialValue: detailData.rlTmplCode,
                })(
                  isShowForm ? (
                    <Select>
                      {detailData.rlTmplCodeInit.split(',').map(item => (
                        <Option value={item} key={item}>
                          {item}
                        </Option>
                      ))}
                    </Select>
                  ) : (
                    <Input disabled />
                  ),
                )}
              </Form.Item>
            </div>
            <p>{oldValueList.rlTmplCode}</p>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.ListItem}>
            <div>
              <Form.Item label="Is Calculate PD ?" labelCol={{ span: 9 }} wrapperCol={{ span: 12 }}>
                {getFieldDecorator('isCalculatePd', {
                  rules: [{ required: !!isShowForm }],
                  initialValue: detailData.isCalculatePd,
                })(
                  isShowForm ? (
                    <Radio.Group
                      onChange={e => setRadioPdValue(e.target.value)}
                      disabled={!isShowForm}
                    >
                      <Radio style={{ display: 'inline' }} value="Yes">
                        yes
                      </Radio>
                      <Radio style={{ display: 'inline' }} value="No">
                        no
                      </Radio>
                    </Radio.Group>
                  ) : (
                    <Input disabled />
                  ),
                )}
              </Form.Item>
            </div>
            <p>{oldValueList.isCalculatePd}</p>
          </div>
        </List.Item>
        {radioPdValue === 'Yes' ? (
          <>
            <List.Item>
              <div className={styles.ListItem}>
                <div>
                  <Form.Item
                    label="Size Factor for Calculate PD"
                    labelCol={{ span: 9 }}
                    wrapperCol={{ span: 12 }}
                  >
                    {getFieldDecorator('sizeFactor', {
                      rules: [
                        {
                          required: !!isShowForm,
                          message: 'Please input Size Factor for Calculate PD!',
                        },
                      ],
                      initialValue: detailData.sizeFactor,
                    })(<Input type="number" disabled={!isShowForm} />)}
                  </Form.Item>
                </div>
                <p>{oldValueList.sizeFactor}</p>
              </div>
            </List.Item>
            <List.Item>
              <div className={styles.ListItem}>
                <div>
                  <Form.Item
                    label="Weighting Factor for Calculate PD"
                    labelCol={{ span: 9 }}
                    wrapperCol={{ span: 12 }}
                  >
                    {getFieldDecorator('weightFactor', {
                      rules: [
                        {
                          required: !!isShowForm,
                          message: 'Please input Weighting Factor for Calculate PD!',
                        },
                      ],
                      initialValue: detailData.weightFactor,
                    })(<Input type="number" disabled={!isShowForm} />)}
                  </Form.Item>
                </div>
                <p>{oldValueList.weightFactor}</p>
              </div>
            </List.Item>
          </>
        ) : null}
      </List>
    </div>
  );
}
function CaCode({ detailData, oldValueList, getFieldDecorator, setRadioCurrentValue, isShowForm }) {
  return (
    <div className={styles.ListBox}>
      <List key="CaCode" split={false}>
        <List.Item>
          <div className={styles.ListItem}>
            <p></p>
            <p>New INFO</p>
            <p>Old INFO</p>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.ListItem}>
            <p>Market</p>
            <p>{detailData.market}</p>
            <p>{oldValueList.market}</p>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.ListItem}>
            <p>HKEX DCASS Code</p>
            <p>{detailData.hkexDcassCode}</p>
            <p>{oldValueList.hkexDcassCode}</p>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.ListItem}>
            <div>
              <Form.Item label="Is CA Code ?">
                {getFieldDecorator('isCaCode', {
                  rules: [{ required: !!isShowForm }],
                  initialValue: detailData.isCaCode,
                })(
                  isShowForm ? (
                    <Radio.Group onChange={e => setRadioCurrentValue(e.target.value)}>
                      <Radio style={{ display: 'inline' }} value="Yes">
                        yes
                      </Radio>
                      <Radio style={{ display: 'inline' }} value="No">
                        no
                      </Radio>
                    </Radio.Group>
                  ) : (
                    <Input disabled />
                  ),
                )}
              </Form.Item>
            </div>
            <p>{oldValueList.isCaCode}</p>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.ListItem}>
            <p>Original Product code</p>
            <p>{detailData.originalProductCode}</p>
            <p>{oldValueList.originalProductCode}</p>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.ListItem}>
            <p>Effective Date</p>
            <p>
              {detailData.effectiveDate &&
                moment(detailData.effectiveDate).format('DD-MMM-YYYY HH:mm:ss')}
            </p>
            <p>{oldValueList.effectiveDate}</p>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.ListItem}>
            <p>Expiry Date</p>
            <p>
              {detailData.expiryDate &&
                moment(detailData.expiryDate).format('DD-MMM-YYYY HH:mm:ss')}
            </p>
            <p>{oldValueList.expiryDate}</p>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.ListItem}>
            <div>
              <Form.Item label="Remark">
                {getFieldDecorator('remark', {
                  rules: [{ required: !!isShowForm, message: 'Please input Remark!' }],
                  initialValue: detailData.remark,
                })(isShowForm ? <TextArea /> : <Input disabled />)}
              </Form.Item>
            </div>
            <p>{oldValueList.remark}</p>
          </div>
        </List.Item>
      </List>
    </div>
  );
}

function NewAccound({
  detailData,
  isShowForm,
  getFieldDecorator,
  onChangeConfirmedToValue,
  onChangeConfirmedBiValue,
}) {
  return (
    <div className={styles.ListBox}>
      <List key="NewAccound" split={false}>
        <List.Item>
          <div className={styles.ListItem}>
            <p>Market</p>
            <p>{detailData.market}</p>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.ListItem}>
            <p>Submitter Code</p>
            <p>{detailData.submitterCode}</p>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.ListItem}>
            <p>Submitter Name</p>
            <p>{detailData.submitterName}</p>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.ListItem}>
            <p>EP/TO Code </p>
            <p>{detailData.epToCode}</p>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.ListItem}>
            <p>LOP Account No</p>
            <p>{detailData.lopAccountNo}</p>
          </div>
        </List.Item>

        <List.Item>
          <div className={styles.ListItem}>
            <p>Previous BI Code</p>
            <p>{detailData.previousBiCode}</p>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.ListItem}>
            <p>Previous BI Name</p>
            <p>{detailData.previousBiName}</p>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.ListItem}>
            <p>Previous TO Code</p>
            <p>{detailData.previousToCode}</p>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.ListItem}>
            <p>Previous TO Name</p>
            <p>{detailData.previousToName}</p>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.ListItem}>
            <p>Report History</p>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.reportHistory}>
            <Table
              bordered
              dataSource={detailData.reportHistory}
              rowKey="reportHistory"
              pagination={false}
            >
              <Column align="center" dataIndex="reportedTime" title="Reported Time" />
              <Column
                align="center"
                dataIndex="reportedAccountName"
                title="Reported Account Name"
              />
              <Column align="center" dataIndex="reportedBiName" title="Reported BI Name" />
              <Column align="center" dataIndex="reportedToName" title="Reported TO Name" />
            </Table>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.ListItem}>
            <p>Received Answer</p>
            <p>{detailData.receivedAnswer}</p>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.ListItem}>
            <p>Answer History</p>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.reportHistory}>
            <Table
              bordered
              dataSource={detailData.answerHistory}
              rowKey="answerHistory"
              pagination={false}
            >
              <Column align="center" dataIndex="answeredTime" title="Answered Time" />
              <Column align="center" dataIndex="answeredFullBIName" title="Answered Full BI Name" />
              <Column align="center" dataIndex="answeredCategory" title="Answered Category" />
              <Column align="center" dataIndex="matchedBICode" title="Matched BI Code" />
              <Column align="center" dataIndex="matchedOmnCode" title="Matched OMN Code" />
              <Column align="center" dataIndex="answeredFullTOName" title="Answered Full TO Name" />
              <Column align="center" dataIndex="matchedTO" title="Matched TO" />
            </Table>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.ListItem}>
            <div>
              <Form.Item label="Confirmed BI">
                {getFieldDecorator('confirmBiCode', {
                  rules: [{ required: true, message: 'Confirmed BI is missing' }],
                  initialValue: detailData.confirmBiCode,
                })(
                  isShowForm ? (
                    <Select
                      onChange={(value, name) => onChangeConfirmedBiValue(value, name)}
                      optionLabelProp="value"
                    >
                      {detailData.biCategoryList.map(item => (
                        <Option
                          value={item.confirmBiCode}
                          label={item.confirmBiName}
                          key={item.confirmBiCategory}
                        >
                          <p style={{ float: 'left' }}>{item.confirmBiCode}</p>
                          <p style={{ float: 'right' }}>{item.confirmBiName}</p>
                        </Option>
                      ))}
                    </Select>
                  ) : (
                    <Input disabled />
                  ),
                )}
              </Form.Item>
            </div>
            <Form.Item label="">
              {getFieldDecorator('confirmBiName', {
                rules: [{ required: !!isShowForm, message: 'Confirmed BI is missing' }],
                initialValue: detailData.confirmBiName,
              })(<Input style={{ width: '200px', marginLeft: '20px' }} disabled={!isShowForm} />)}
            </Form.Item>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.ListItem}>
            <div>
              <Form.Item label="Confirmed TO">
                {getFieldDecorator('confirmToCode', {
                  rules: [{ required: true, message: 'Confirmed TO is missing' }],
                  initialValue: detailData.confirmToCode,
                })(
                  isShowForm ? (
                    <Select
                      onChange={(value, name) => onChangeConfirmedToValue(value, name)}
                      optionLabelProp="value"
                    >
                      {detailData.toCategoryList &&
                        detailData.toCategoryList.map(item => (
                          <Option
                            value={item.confirmToCode}
                            label={item.confirmToName}
                            key={item.confirmToCategory}
                          >
                            <span style={{ float: 'left' }}>{item.confirmToCode}</span>
                            <span style={{ float: 'right' }}>{item.confirmToName}</span>
                          </Option>
                        ))}
                    </Select>
                  ) : (
                    <Input disabled />
                  ),
                )}
              </Form.Item>
            </div>
            <Form.Item label="">
              {getFieldDecorator('confirmToName', {
                rules: [{ required: !!isShowForm, message: 'Confirmed TO is missing' }],
                initialValue: detailData.confirmToName,
              })(<Input style={{ width: '200px', marginLeft: '20px' }} disabled={!isShowForm} />)}
            </Form.Item>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.ListItem}>
            <div>
              <Form.Item label="Report Any Position">
                {getFieldDecorator('reportAnyPosition', {
                  rules: [{ required: !!isShowForm, message: 'Report Any Position is missing' }],
                  initialValue: detailData.reportAnyPosition,
                })(
                  isShowForm ? (
                    <Radio.Group>
                      <Radio style={{ display: 'inline' }} value="Yes">
                        yes
                      </Radio>
                      <Radio style={{ display: 'inline' }} value="No">
                        no
                      </Radio>
                    </Radio.Group>
                  ) : (
                    <Input disabled />
                  ),
                )}
              </Form.Item>
            </div>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.ListItem}>
            <div>
              <Form.Item label="Watch">
                {getFieldDecorator('watch', {
                  rules: [{ required: !!isShowForm, message: 'Watch is missing' }],
                  initialValue: detailData.watch,
                })(
                  isShowForm ? (
                    <Radio.Group>
                      <Radio style={{ display: 'inline' }} value="Yes">
                        yes
                      </Radio>
                      <Radio style={{ display: 'inline' }} value="No">
                        no
                      </Radio>
                    </Radio.Group>
                  ) : (
                    <Input disabled />
                  ),
                )}
              </Form.Item>
            </div>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.ListItem}>
            <div>
              <Form.Item label="Remark">
                {getFieldDecorator('remark', {
                  rules: [{ required: !!isShowForm, message: 'remark is missing' }],
                  initialValue: detailData.remark,
                })(<TextArea disabled={!isShowForm} autoSize={{ minRows: 1 }} />)}
              </Form.Item>
            </div>
          </div>
        </List.Item>
      </List>
    </div>
  );
}

function DetailForm({ form, task, detailItem, saveConfirmToCategory, saveConfirmBiCategory }) {
  const { getFieldDecorator } = form;
  const [radioCurrentValue, setRadioCurrentValue] = useState('No');
  const [radioPdValue, setRadioPdValue] = useState('Yes');
  // const task = true;
  // const detailItem = [
  //   {
  //     newValue: {
  //       previousBiCode: 'UNC_00345',
  //       confirmToCode: null,
  //       previousBiName: 'BPSS OMNIBUS ACC HKCC',
  //       previousToName: null,
  //       lopAccountNo: 'Z_BPSS SG',
  //       previousToCode: null,
  //       toCategoryList: [
  //         {
  //           confirmToCode: 'NULL8',
  //           confirmToName: 'NULL',
  //           confirmToCategory: '888',
  //         },
  //         {
  //           confirmToCode: 'jay',
  //           confirmToName: 'kebi',
  //           confirmToCategory: '999',
  //         },
  //       ],
  //       answerHistory: [],
  //       reportHistory: [
  //         {
  //           reportedTime: 1578143715844,
  //           reportedAccountName: 'BPSS OMNIBUS ACC HKCC',
  //           reportedBiName: 'BPSS OMNIBUS ACC HKCC',
  //           reportedToName: null,
  //         },
  //       ],
  //       market: 'HKFE',
  //       confirmBiCode: null,
  //       epToCode: 'BNP',
  //       confirmBiName: null,
  //       confirmToName: null,
  //       biCategoryList: [
  //         {
  //           confirmBiCode: 'kaxi',
  //           confirmBiName: 'ouwen',
  //           confirmBiCategory: '111',
  //         },
  //         {
  //           confirmBiCode: 'kd',
  //           confirmBiName: 'james',
  //           confirmBiCategory: '333',
  //         },
  //       ],
  //       submitterName: 'BNP Paribas Securities (Asia) Ltd',
  //       submitterCode: '00BNP',
  //       receivedAnswer: 'Unreceived Yet',
  //     },
  //     alertType: '322',
  //     isEditing: true,
  //     isStarter: false,
  //     oldValue: {},
  //     ownerId: null,
  //   },
  // ];
  const detailData = task ? (detailItem && detailItem[0]) || {} : {};
  const detailList = task ? (detailItem && detailItem[0] && detailItem[0].newValue) || {} : {};
  const oldValueList = task ? (detailItem && detailItem[0] && detailItem[0].oldValue) || {} : {};
  const alertType = detailData && detailData.alertType;

  const isShowForm = detailData && detailData.isStarter;
  const isEditing = detailData && detailData.isEditing;
  // const isEditing = true;
  console.log('alertType---->', alertType, detailList, isShowForm);
  useEffect(() => {
    setRadioCurrentValue(detailList.isCaCode);
  }, [detailList.isCaCode]);
  useEffect(() => {
    setRadioPdValue(detailList.isCalculatePd);
  }, [detailList.isCalculatePd]);

  function onChangeConfirmedToValue(value, name) {
    form.setFieldsValue({
      confirmToName: name.props.label,
    });
    saveConfirmToCategory(name.key);
  }
  function onChangeConfirmedBiValue(value, name) {
    form.setFieldsValue({
      confirmBiName: name.props.label,
    });
    saveConfirmBiCategory(name.key);
  }

  return (
    <>
      {detailList && (
        <Form>
          {alertType === '301' && (
            <NewEP
              detailData={detailList}
              oldValueList={oldValueList}
              getFieldDecorator={getFieldDecorator}
              isShowForm={isEditing}
            />
          )}
          {alertType === '302' &&
            (radioCurrentValue === 'No' ? (
              <NewProduct
                detailData={detailList}
                oldValueList={oldValueList}
                getFieldDecorator={getFieldDecorator}
                setRadioCurrentValue={setRadioCurrentValue}
                radioPdValue={radioPdValue}
                setRadioPdValue={setRadioPdValue}
                isShowForm={isEditing}
              />
            ) : (
              <CaCode
                detailData={detailList}
                oldValueList={oldValueList}
                getFieldDecorator={getFieldDecorator}
                setRadioCurrentValue={setRadioCurrentValue}
                isShowForm={isEditing}
              />
            ))}
          {alertType === '303' &&
            (radioCurrentValue === 'Yes' ? (
              <CaCode
                detailData={detailList}
                oldValueList={oldValueList}
                getFieldDecorator={getFieldDecorator}
                setRadioCurrentValue={setRadioCurrentValue}
                isShowForm={isEditing}
              />
            ) : (
              <NewProduct
                detailData={detailList}
                oldValueList={oldValueList}
                getFieldDecorator={getFieldDecorator}
                setRadioCurrentValue={setRadioCurrentValue}
                radioPdValue={radioPdValue}
                setRadioPdValue={setRadioPdValue}
                isShowForm={isEditing}
              />
            ))}
          {alertType === '321' ||
          alertType === '322' ||
          alertType === '323' ||
          alertType === '324' ? (
            <NewAccound
              detailData={detailList}
              getFieldDecorator={getFieldDecorator}
              onChangeConfirmedToValue={onChangeConfirmedToValue}
              onChangeConfirmedBiValue={onChangeConfirmedBiValue}
              isShowForm={isEditing}
            />
          ) : null}
          {/* <NewAccound
            detailData={detailList}
            getFieldDecorator={getFieldDecorator}
            isShowForm={isEditing}
          /> */}
        </Form>
      )}
    </>
  );
}

export default Form.create()(DetailForm);
