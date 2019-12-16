import React, { Component } from 'react';
import { Form, Button, Input, Row, Col, DatePicker, Select } from 'antd';
import { formatMessage } from 'umi/locale';

const { RangePicker } = DatePicker;
const { Option } = Select;

export default class SearchForm extends Component {
  state = {};

  render() {
    const { getFieldDecorator } = this.props.form;
    const { search, functionNameOptions } = this.props;
    return (
      <Form className="ant-advanced-search-form">
        <Row gutter={{ xs: 24, sm: 48, md: 144, lg: 48, xl: 96 }}>
          <Col xs={12} sm={12} lg={8}>
            <Form.Item label={formatMessage({ id: 'systemManagement.auditLog.logDate' })}>
              {getFieldDecorator('logDate', {})(
                <RangePicker format="YYYY-MM-DD" placeholder={['Start Date', 'End Date']} />,
              )}
            </Form.Item>
          </Col>
          <Col xs={12} sm={12} lg={8}>
            <Form.Item label={formatMessage({ id: 'systemManagement.auditLog.updatedBy' })}>
              {getFieldDecorator('updatedBy', {})(<Input placeholder="Please input" />)}
            </Form.Item>
          </Col>
          <Col xs={12} sm={12} lg={8}>
            <Form.Item label={formatMessage({ id: 'systemManagement.auditLog.functionName' })}>
              {getFieldDecorator('functionName', {})(
                <Select placeholder="Please Select">
                  {functionNameOptions.map(item => (
                    <Option key={item.key} value={item.value}>
                      {item.title}
                    </Option>
                  ))}
                </Select>,
              )}
            </Form.Item>
          </Col>
        </Row>
        <div className="btnArea">
          <Button type="primary" onClick={search}>
            {formatMessage({ id: 'app.common.search' })}
          </Button>
        </div>
      </Form>
    );
  }
}