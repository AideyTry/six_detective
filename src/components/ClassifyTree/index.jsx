/*
 * @Description: This is a classify tree public module.
 * @Author: dailinbo
 * @Date: 2019-11-11 13:20:11
 * @LastEditors: dailinbo
 * @LastEditTime: 2019-11-20 17:08:09
 * @Attributes:
 *  参数                    说明                                   类型                           默认值
 *  treeData                treeNodes数据                          Array
 *  treeKey                 包含当前节点id、名称和父节点id,          Object{currentKey:string,
 *                          用于处理数据                            currentName:string,parentKey:string}
 * @Events:
 *  事件名                  说明                  参数
 *  handleAddTree           添加tree节点          function(nodeTree) nodeTree的当前节点及子节点数据
 *  handleModifyTree        修改当前tree          function(nodeTree)
 *  handleDeleteTree        删除当前tree          function(nodeTree)
 *  onSelect                点击树节点触发         function(key) key为当前树节点对应id
 */
import React, { Component, Fragment } from 'react';
import { Tree, Input, Icon } from 'antd';

import styles from './index.less';
import { formatTree } from '@/utils/utils';

const { TreeNode } = Tree;
const { Search } = Input;

const dataList = [];
let searchValue = '';

const getParentKey = (currentKey, tree, treeKey) => {
  let parentKey;
  for (let i = 0; i < tree.length; i += 1) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some(item => item[`${treeKey.currentKey}`] === currentKey)) {
        parentKey = node[`${treeKey.currentKey}`];
      } else if (getParentKey(currentKey, node.children, treeKey)) {
        parentKey = getParentKey(currentKey, node.children, treeKey);
      }
    }
  }
  return parentKey;
};

class HoverText extends Component {
  state = {};

  addTree = (e, treeNode) => {
    e.stopPropagation();
    this.props.handleAddTree(true, treeNode);
  };

  modifyTree = (e, treeNode) => {
    e.stopPropagation();
    this.props.handleModifyTree(true, treeNode);
  };

  deleteTree = (e, treeNode) => {
    e.stopPropagation();
    this.props.handleDeleteTree(true, treeNode);
  };

  render() {
    const { nodeKeys } = this.props;
    return (
      <Fragment>
        <span className={styles.hoverText}>
          <Icon type="plus-circle" onClick={e => this.addTree(e, nodeKeys)} />
          <Icon type="edit" onClick={e => this.modifyTree(e, nodeKeys)} />
          <Icon type="minus-circle" onClick={e => this.deleteTree(e, nodeKeys)} />
        </span>
      </Fragment>
    );
  }
}

class TitleMessage extends Component {
  state = {
    operaterTree: false,
  };

  onMouseEnter = () => {
    this.setState({
      operaterTree: true,
    });
  };

  onMouseLeave = () => {
    this.setState({
      operaterTree: false,
    });
  };

  render() {
    const { title, nodeKeys, handleAddTree, handleModifyTree, handleDeleteTree } = this.props;
    const { operaterTree } = this.state;
    return (
      <Fragment>
        <div
          className={styles.titleWraper}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          <span>{title}</span>
          {operaterTree && (
            <HoverText
              nodeKeys={nodeKeys}
              handleAddTree={handleAddTree}
              handleModifyTree={handleModifyTree}
              handleDeleteTree={handleDeleteTree}
            />
          )}
        </div>
      </Fragment>
    );
  }
}

function loop(orgsTree, treeKey, handleAddTree, handleModifyTree, handleDeleteTree) {
  return (
    orgsTree &&
    orgsTree.map(item => {
      const { children } = item;
      const currentKey = item[`${treeKey.currentKey}`];
      const currentName = item[`${treeKey.currentName}`];
      const parentKey = item[`${treeKey.parentKey}`];
      let index = -1;
      if (searchValue) {
        index = currentName.indexOf(searchValue);
      }
      let lineTitle = '';
      lineTitle = `<span>${currentName.replace(
        searchValue,
        `<span style='color:#f00'>${searchValue}</span>`,
      )}</span>`;

      if (lineTitle) {
        // eslint-disable-next-line react/no-danger
        lineTitle = <div dangerouslySetInnerHTML={{ __html: lineTitle }} />;
      }
      const showTitle = index > -1 ? lineTitle : currentName;
      if (children && showTitle) {
        return (
          <TreeNode
            key={currentKey}
            title={
              <TitleMessage
                title={showTitle}
                nodeKeys={item}
                handleAddTree={handleAddTree}
                handleModifyTree={handleModifyTree}
                handleDeleteTree={handleDeleteTree}
              />
            }
            parentId={parentKey}
          >
            {loop(children, treeKey, handleAddTree, handleModifyTree)}
          </TreeNode>
        );
      }
      return (
        <TreeNode
          key={currentKey}
          title={
            <TitleMessage
              title={currentName}
              nodeKeys={item}
              handleAddTree={handleAddTree}
              handleModifyTree={handleModifyTree}
              handleDeleteTree={handleDeleteTree}
            />
          }
          parentId={parentKey}
        />
      );
    })
  );
}

class ClassifyTree extends Component {
  state = {
    menuList: [],
    initData: [],
    expandedKeys: [],
    autoExpandParent: true,
  };

  static getDerivedStateFromProps(props) {
    let items = props.treeData;
    items = items && formatTree(items, props.treeKey.currentKey, props.treeKey.parentKey);
    return {
      initData: items,
      menuList: items,
    };
  }

  onExpand = expandedKeys => {
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  };

  generateList = (data, treeKey) => {
    for (let i = 0; i < data.length; i += 1) {
      const node = data[i];
      const currentKey = node[`${treeKey.currentKey}`];
      const currentName = node[`${treeKey.currentName}`];
      const parentKey = node[`${treeKey.parentKey}`];
      const obj = {};
      obj[`${treeKey.currentKey}`] = currentKey;
      obj[`${treeKey.currentName}`] = currentName;
      obj[`${treeKey.parentKey}`] = parentKey;
      dataList.push(obj);
      if (node.children) {
        this.generateList(node.children, treeKey);
      }
    }
  };

  onSearch = (value, treeKey) => {
    searchValue = value;
    const { initData } = this.state;
    if (!value) {
      this.setState({
        autoExpandParent: false,
      });
      return;
    }
    const expandedKeys = dataList.map(item => {
      if (item[`${treeKey.currentName}`].indexOf(value) > -1) {
        return getParentKey(item[`${treeKey.currentKey}`], initData, treeKey);
      }
      return null;
    });

    this.setState({
      expandedKeys,
      autoExpandParent: true,
    });
  };

  onSelect = selectedKeys => {
    const key = selectedKeys[0];
    this.props.onSelect(key);
  };

  render() {
    const { expandedKeys, autoExpandParent, menuList } = this.state;
    const { handleAddTree, handleModifyTree, handleDeleteTree, treeKey } = this.props;
    if (menuList) {
      this.generateList(menuList, treeKey);
    }
    return (
      <div>
        <Search
          style={{ marginBottom: 8 }}
          placeholder="Search"
          onSearch={value => this.onSearch(value, treeKey)}
        />
        <Tree
          showLine
          onExpand={this.onExpand}
          onSelect={this.onSelect}
          expandedKeys={expandedKeys}
          autoExpandParent={autoExpandParent}
        >
          {loop(menuList, treeKey, handleAddTree, handleModifyTree, handleDeleteTree)}
        </Tree>
      </div>
    );
  }
}

export default ClassifyTree;