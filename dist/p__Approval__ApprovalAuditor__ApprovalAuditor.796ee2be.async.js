(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"97vF":function(e,t,a){"use strict";var o=a("g09b"),i=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("bbsP");var r=o(a("/wGt"));a("+L6B");var n=o(a("2/Rp"));a("sRBo");var s,d,l,p=o(a("kaz8")),u=o(a("d6i3")),c=o(a("1l/V")),f=o(a("2Taf")),v=o(a("vZ4D")),h=o(a("l4Ni")),g=o(a("ujKo")),y=o(a("MhPg")),m=i(a("q1tI")),D=a("Hx5s"),x=a("MuoO"),A=o(a("YOzA")),w=o(a("FS8v")),b=(s=(0,x.connect)(function(e){var t=e.ApprovalAuditor;return{deployedModelDatas:t.deployedModelDatas,processDefinitionId:t.processDefinitionId,groupList:t.GroupList,checkboxData:t.checkboxData}}),s((l=function(e){function t(){var e,a;(0,f.default)(this,t);for(var o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];return a=(0,h.default)(this,(e=(0,g.default)(t)).call.apply(e,[this].concat(i))),a.state={visible:!1,stepId:"",checkedValues:[]},a.showDrawer=function(){var e=(0,c.default)(u.default.mark(function e(t,o){return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.getAuditorData(t,o);case 2:a.setState({visible:!0,stepId:o});case 3:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a.saveConfig=function(e){var t=a.props.dispatch;t({type:"ApprovalAuditor/saveConfigDatas",payload:e})},a.onSave=function(){var e=a.state,t=e.checkedValues,o=e.stepId,i=[];i.push({stepId:o,auditIds:t.join(),auditType:"0"});var r={processUuid:a.props.processDefinitionId,auditInfo:JSON.stringify(i)};console.log("param---\x3e",r),a.saveConfig(r)},a.getQueryMenu=(0,c.default)(u.default.mark(function e(){var t;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=a.props.dispatch,e.next=3,t({type:"ApprovalAuditor/getQueryMenuDatas",payload:{}});case 3:case"end":return e.stop()}},e)})),a.getAuditorData=function(e,t){var o=a.props.dispatch;o({type:"ApprovalAuditor/getAuditorlistDatas",payload:{processUuid:e,stepId:t}})},a.deployedModelList=function(e){var t=a.props.dispatch;t({type:"ApprovalAuditor/deployedModelListDatas",payload:e})},a.chooseTab=function(e){e!==a.props.processDefinitionId&&a.changeProcessDefinitionId(e)},a.changeProcessDefinitionId=function(e){var t=a.props.dispatch;t({type:"ApprovalAuditor/chooseProcessDefinitionId",payload:{processDefinitionId:e}})},a.onClose=function(){a.setState({visible:!1})},a.selectAuditor=function(e){console.log("checkedValues----\x3e",e),a.setState({checkedValues:e})},a}return(0,y.default)(t,e),(0,v.default)(t,[{key:"componentDidMount",value:function(){var e=this;this.deployedModelList({pageNumber:"1",pageSize:"10"}),this.getQueryMenu(),window.showAudit=function(t,a){e.showDrawer(t,a)}}},{key:"render",value:function(){var e=this.props,t=e.deployedModelDatas,a=e.processDefinitionId,o=e.checkboxData;console.log("checkboxData---",o);var i="/process/diagram-viewer/index.html?isClick=1&processDefinitionId=".concat(a);return m.default.createElement(m.Fragment,null,m.default.createElement(D.PageHeaderWrapper,null,m.default.createElement("div",{className:w.default.approvalAuditor},m.default.createElement("div",{className:w.default.contentBox},m.default.createElement("div",{className:w.default.leftBox},m.default.createElement(A.default,{listData:t,chooseId:a,currentId:"processDefinitionId",chooseTab:this.chooseTab,title:"\u5df2\u90e8\u7f72\u6a21\u578b\u5217\u8868"})),m.default.createElement("div",{className:w.default.rightBox},m.default.createElement("iframe",{title:"diagram",width:"100%",height:"300px",src:i})),m.default.createElement(r.default,{title:"Auditor",width:500,onClose:this.onClose,visible:this.state.visible,bodyStyle:{paddingBottom:80}},m.default.createElement(p.default.Group,{options:o,onChange:this.selectAuditor}),m.default.createElement("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right"}},m.default.createElement(n.default,{onClick:this.onClose,style:{marginRight:8}},"Cancel"),m.default.createElement(n.default,{onClick:this.onSave,type:"primary"},"Save")))))))}}]),t}(m.PureComponent),d=l))||d),I=b;t.default=I},FS8v:function(e,t,a){e.exports={approvalAuditor:"antd-pro-pages-approval-approval-auditor-approval-auditor-approvalAuditor",contentBox:"antd-pro-pages-approval-approval-auditor-approval-auditor-contentBox",leftBox:"antd-pro-pages-approval-approval-auditor-approval-auditor-leftBox",rightBox:"antd-pro-pages-approval-approval-auditor-approval-auditor-rightBox"}}}]);