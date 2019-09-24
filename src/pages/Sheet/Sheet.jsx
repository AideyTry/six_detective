import React, { PureComponent, Fragment } from 'react';
import { Button, Select, Dropdown, Menu } from 'antd';
import { SketchPicker } from 'react-color';
import SpreadSheet from '@/components/SpreadSheet';
import styles from './Sheet.less';

const { Option } = Select;
const { SubMenu } = Menu;
const fontFamily = [
  { fontFamily: 'Arial' },
  { fontFamily: '宋体' },
  { fontFamily: '楷体' },
  { fontFamily: '仿宋' },
  { fontFamily: '微软雅黑' },
];
const fontSize = [
  { fontSize: '8' },
  { fontSize: '9' },
  { fontSize: '10' },
  { fontSize: '11' },
  { fontSize: '12' },
  { fontSize: '14' },
  { fontSize: '15' },
  { fontSize: '16' },
  { fontSize: '18' },
  { fontSize: '24' },
  { fontSize: '36' },
  { fontSize: '48' },
];
const borderMode = [
  {
    key: '全边框',
    value: 'all',
  },
  {
    key: '内边框',
    value: 'inside',
  },
  {
    key: '内水平边框',
    value: 'horizontal',
  },
  {
    key: '内垂直边框',
    value: 'vertical',
  },
  {
    key: '外边框',
    value: 'outside',
  },
  {
    key: '左边框',
    value: 'left',
  },
  {
    key: '上边框',
    value: 'top',
  },
  {
    key: '右边框',
    value: 'right',
  },
  {
    key: '下边框',
    value: 'bottom',
  },
  {
    key: '无边框',
    value: 'none',
  },
];

const borderLine = [
  {
    key: '细实线',
    value: 'thin',
  },
  {
    key: '加粗实线',
    value: 'medium',
  },
  {
    key: '粗实线',
    value: 'thick',
  },
  {
    key: '虚线',
    value: 'dashed',
  },
  {
    key: '点虚线',
    value: 'dotted',
  },
];

@SpreadSheet.createSpreadSheet
class Sheet extends PureComponent {
  state = {
    cellStyle: {},
    fontColor: '#000',
    bgColor: '#fff',
    borderColor: '#000',
    visible: false,
    borderStyle: 'thin',
  };

  spreadSheetRef = React.createRef();

  componentDidMount() {
    const { setCellCallback } = this.props;
    setCellCallback(cellStyle => {
      this.setState({
        cellStyle,
      });
    });
  }

  setCellStyle = (property, value) => {
    const { setCellStyle, getCellStyle } = this.props;
    const result = getCellStyle(property);
    if (result === value) {
      setCellStyle(property, false);
    } else {
      setCellStyle(property, value);
    }
  };

  render() {
    const { setCellStyle } = this;
    const { fontColor, bgColor, cellStyle, borderColor, borderStyle, visible } = this.state;
    return (
      <Fragment>
        <Button
          className={styles.marginRight5}
          onClick={() => {
            setCellStyle('font-bold', true);
          }}
        >
          加粗
        </Button>

        <Button
          className={styles.marginRight5}
          onClick={() => {
            setCellStyle('font-italic', true);
          }}
        >
          斜体
        </Button>

        <Select
          className={styles.marginRight5}
          placeholder="请选择"
          onChange={value => {
            setCellStyle('font-name', value);
          }}
          style={{ width: 100 }}
        >
          {fontFamily.map(item => (
            <Option key={item.fontFamily} value={item.fontFamily}>
              {item.fontFamily}
            </Option>
          ))}
        </Select>

        <Select
          className={styles.marginRight5}
          placeholder="请选择"
          onChange={value => {
            setCellStyle('font-size', value);
          }}
          style={{ width: 100 }}
        >
          {fontSize.map(item => (
            <Option key={item.fontSize} value={item.fontSize}>
              {item.fontSize}
            </Option>
          ))}
        </Select>

        <Button
          className={styles.marginRight5}
          onClick={() => {
            setCellStyle('underline', true);
          }}
        >
          下划线
        </Button>

        <Button
          className={styles.marginRight5}
          onClick={() => {
            setCellStyle('strike', true);
          }}
        >
          删除线
        </Button>

        <Dropdown
          className={styles.marginRight5}
          trigger={['click']}
          overlay={
            <SketchPicker
              color={fontColor}
              onChange={value => {
                this.setState({
                  fontColor: value.hex,
                });
                setCellStyle('color', value.hex);
              }}
            />
          }
          placement="bottomLeft"
        >
          <Button style={{ color: fontColor }}>字体颜色</Button>
        </Dropdown>

        <Dropdown
          className={styles.marginRight5}
          trigger={['click']}
          overlay={
            <SketchPicker
              color={bgColor}
              onChange={value => {
                this.setState({
                  bgColor: value.hex,
                });
                setCellStyle('bgcolor', value.hex);
              }}
            />
          }
          placement="bottomLeft"
        >
          <Button style={{ backgroundColor: bgColor }}>填充颜色</Button>
        </Dropdown>

        <Select
          className={styles.marginRight5}
          placeholder="水平对齐方式"
          onChange={value => {
            setCellStyle('align', value);
          }}
          // value="left"
          style={{ width: 140 }}
        >
          <Option value="left">左对齐</Option>
          <Option value="center">居中对齐</Option>
          <Option value="right">右对齐</Option>
        </Select>

        <Select
          className={styles.marginRight5}
          placeholder="垂直对齐方式"
          onChange={value => {
            setCellStyle('valign', value);
          }}
          // value="middle"
          style={{ width: 140 }}
        >
          <Option value="top">顶部对齐</Option>
          <Option value="middle">居中对齐</Option>
          <Option value="bottom">底部对齐</Option>
        </Select>

        <Button
          className={styles.marginRight5}
          onClick={() => {
            setCellStyle('textwrap', true);
          }}
        >
          自动换行
        </Button>

        <Button
          className={styles.marginRight5}
          onClick={() => {
            setCellStyle('merge', true);
          }}
        >
          合并单元格
        </Button>

        {/* <Select
          className={styles.marginRight5}
          placeholder="边框"
          onChange={value => {
            setCellStyle('border', { mode: value });
          }}
          // value="left"
          style={{ width: 140 }}
        >
          <Option value="all">全边框</Option>
          <Option value="inside">内边框</Option>
          <Option value="horizontal">内水平边框</Option>
          <Option value="vertical">内垂直边框</Option>
          <Option value="outside">外边框</Option>
          <Option value="left">左边框</Option>
          <Option value="top">上边框</Option>
          <Option value="right">右边框</Option>
          <Option value="bottom">下边框</Option>
          <Option value="none">无边框</Option>
        </Select> */}

        <Dropdown
          className={styles.marginRight5}
          // trigger={['click']}
          visible={visible}
          overlay={() => (
            <Menu>
              {borderMode.map(item => (
                <Menu.Item
                  onClick={() => {
                    this.setState({
                      visible: !visible,
                    });
                    setCellStyle('border', {
                      mode: item.value,
                      color: borderColor,
                      style: borderStyle,
                    });
                  }}
                >
                  {item.key}
                </Menu.Item>
              ))}
              <SubMenu title="边框颜色">
                <Menu.Item>
                  <SketchPicker
                    color={borderColor}
                    onChange={value => {
                      this.setState({
                        borderColor: value.hex,
                      });
                    }}
                    onClick={e => {
                      e.stopPropagation();
                    }}
                  />
                </Menu.Item>
              </SubMenu>
              <SubMenu title="边框样式">
                {borderLine.map(item => (
                  <Menu.Item
                    onClick={() => {
                      this.setState({
                        borderStyle: item.value,
                      });
                    }}
                  >
                    {item.key}
                  </Menu.Item>
                ))}
              </SubMenu>
            </Menu>
          )}
          placement="bottomLeft"
        >
          <Button
            onClick={() => {
              this.setState({
                visible: !visible,
              });
            }}
          >
            边框
          </Button>
        </Dropdown>

        <Button
          className={styles.marginRight5}
          onClick={() => {
            setCellStyle('read-only', true);
          }}
        >
          只读
        </Button>

        <SpreadSheet />
      </Fragment>
    );
  }
}

export default Sheet;