(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"6BZM":function(e,t,a){e.exports={inputValue:"antd-pro-pages-audit-log-audit-log-inputValue",content:"antd-pro-pages-audit-log-audit-log-content",tableTop:"antd-pro-pages-audit-log-audit-log-tableTop"}},CNgS:function(e,t,a){"use strict";var n=a("tAuX"),o=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+L6B");var d=o(a("2/Rp"));a("14J3");var i=o(a("BMrR"));a("5NDa");var u=o(a("5rEg"));a("jCWc");var r=o(a("kPKH"));a("y8nQ");var l=o(a("Vl3Y")),s=o(a("2Taf")),g=o(a("vZ4D")),m=o(a("l4Ni")),f=o(a("ujKo")),p=o(a("MhPg"));a("OaEy");var c=o(a("2fM7"));a("iQDF");var y=o(a("+eQT")),h=n(a("q1tI")),L=a("LLXN"),v=y.default.RangePicker,M=c.default.Option,N=function(e){function t(){var e,a;(0,s.default)(this,t);for(var n=arguments.length,o=new Array(n),d=0;d<n;d++)o[d]=arguments[d];return a=(0,m.default)(this,(e=(0,f.default)(t)).call.apply(e,[this].concat(o))),a.state={},a}return(0,p.default)(t,e),(0,g.default)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.props,a=t.search,n=t.functionNameOptions;return h.default.createElement(l.default,{className:"ant-advanced-search-form"},h.default.createElement(i.default,{gutter:{xs:24,sm:48,md:144,lg:48,xl:96}},h.default.createElement(r.default,{xs:12,sm:12,lg:8},h.default.createElement(l.default.Item,{label:(0,L.formatMessage)({id:"systemManagement.auditLog.logDate"})},e("logDate",{})(h.default.createElement(v,{format:"YYYY-MM-DD",placeholder:["Start Date","End Date"]})))),h.default.createElement(r.default,{xs:12,sm:12,lg:8},h.default.createElement(l.default.Item,{label:(0,L.formatMessage)({id:"systemManagement.auditLog.updatedBy"})},e("updatedBy",{})(h.default.createElement(u.default,{placeholder:"Please input"})))),h.default.createElement(r.default,{xs:12,sm:12,lg:8},h.default.createElement(l.default.Item,{label:(0,L.formatMessage)({id:"systemManagement.auditLog.functionName"})},e("functionName",{})(h.default.createElement(c.default,{placeholder:"Please Select"},n.map(function(e){return h.default.createElement(M,{key:e.key,value:e.value},e.title)})))))),h.default.createElement("div",{className:"btnArea"},h.default.createElement(d.default,{type:"primary",onClick:a},(0,L.formatMessage)({id:"app.common.search"}))))}}]),t}(h.Component);t.default=N},TbQj:function(e,t,a){"use strict";var n=a("g09b"),o=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("DjyN");var d=n(a("NUBc"));a("g9YV");var i=n(a("wCAj")),u=n(a("2Taf")),r=n(a("vZ4D")),l=n(a("l4Ni")),s=n(a("ujKo")),g=n(a("MhPg"));a("y8nQ");var m,f,p,c=n(a("Vl3Y")),y=o(a("q1tI")),h=a("Hx5s"),L=a("MuoO"),v=a("LLXN"),M=n(a("wd/R")),N=n(a("6BZM")),D=n(a("CNgS")),E=c.default.create({})(D.default),S=(m=(0,L.connect)(function(e){var t=e.auditLog,a=e.loading;return{loading:a.effects,getAuditLogListData:t.data}}),m((p=function(e){function t(){var e,a;(0,u.default)(this,t);for(var n=arguments.length,o=new Array(n),d=0;d<n;d++)o[d]=arguments[d];return a=(0,l.default)(this,(e=(0,s.default)(t)).call.apply(e,[this].concat(o))),a.state={page:{pageNumber:1,pageSize:10},logStartDate:void 0,logEndDate:void 0,functionName:void 0,updatedBy:void 0,functionNameOptions:[{key:"",value:"",title:"All"},{key:"1",value:"1",title:"Name One"},{key:"2",value:"2",title:"Name Two"},{key:"3",value:"3",title:"Name Three"}],columns:[{title:(0,v.formatMessage)({id:"app.common.number"}),dataIndex:"index",key:"index",minWidth:60,render:function(e,t,n){return y.default.createElement("span",null,(a.state.page.pageNumber-1)*a.state.page.pageSize+n+1)}},{title:(0,v.formatMessage)({id:"systemManagement.auditLog.functionName"}),dataIndex:"userName",key:"userName"},{title:(0,v.formatMessage)({id:"systemManagement.auditLog.tableName"}),dataIndex:"formName",key:"formName"},{title:(0,v.formatMessage)({id:"systemManagement.auditLog.BITOCode"}),dataIndex:"biToCode",key:"biToCode"},{title:(0,v.formatMessage)({id:"systemManagement.auditLog.productCode"}),dataIndex:"productCode",key:"productCode"},{title:(0,v.formatMessage)({id:"systemManagement.auditLog.effectiveDate"}),dataIndex:"operateDate",key:"operateDate"},{title:(0,v.formatMessage)({id:"systemManagement.auditLog.fieldUpdated"}),dataIndex:"ipAddress",key:"ipAddress"},{title:(0,v.formatMessage)({id:"systemManagement.auditLog.updateType"}),dataIndex:"ipAddress",key:"ipAddress"},{title:(0,v.formatMessage)({id:"systemManagement.auditLog.logDate"}),dataIndex:"operateTime",key:"operateTime"},{title:(0,v.formatMessage)({id:"systemManagement.auditLog.updatedBy"}),dataIndex:"operateTime",key:"operateTime"},{title:(0,v.formatMessage)({id:"systemManagement.auditLog.before"}),dataIndex:"operateTime",key:"operateTime"},{title:(0,v.formatMessage)({id:"systemManagement.auditLog.after"}),dataIndex:"operateTime",key:"operateTime"}],getAuditLogList:[]},a.auditLogForm=y.default.createRef(),a.getAuditLog=function(){var e=a.state,t=e.logStartDate,n=e.logEndDate,o=e.functionName,d=e.updatedBy,i=e.page,u={pageNumber:i.pageNumber.toString(),pageSize:i.pageSize.toString(),operatorName:o,beginDate:t,endDate:n,updatedBy:d},r=a.props.dispatch;r({type:"auditLog/getAuditLogList",payload:u})},a.pageChange=function(e,t){var n={pageNumber:e,pageSize:t};a.setState({page:n},function(){a.getAuditLog()})},a.changeBeginDate=function(){},a.changeEndDate=function(){},a.queryLog=function(){a.auditLogForm.current.validateFields(function(e,t){if(!e){var n,o,d=t.logDate;d&&d.length>0&&(n=(0,M.default)(d[0]).format("YYYY-MM-DD"),o=(0,M.default)(d[1]).format("YYYY-MM-DD")),a.setState({logStartDate:n,logEndDate:o,functionName:t.functionName,updatedBy:t.updatedBy}),a.getAuditLog()}})},a.operatorReset=function(){a.auditLogForm.current.resetFields()},a}return(0,g.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){this.getAuditLog()}},{key:"render",value:function(){var e=this.props.loading,t=this.state.getAuditLogList,a=this.state,n=a.page,o=a.functionNameOptions;t=this.props.getAuditLogListData.items;var u=this.props.getAuditLogListData&&this.props.getAuditLogListData.totalCount;return y.default.createElement(h.PageHeaderWrapper,null,y.default.createElement(E,{search:this.queryLog,ref:this.auditLogForm,functionNameOptions:o}),y.default.createElement("div",{className:N.default.content},y.default.createElement(i.default,{loading:e["auditLog/getAuditLogList"],dataSource:t,pagination:!1,columns:this.state.columns}),y.default.createElement(d.default,{showSizeChanger:!0,current:n.pageNumber,showTotal:function(){return"Page ".concat(u?n.pageNumber.toString():0," of ").concat(Math.ceil((u||0)/n.pageSize).toString())},onShowSizeChange:this.onShowSizeChange,onChange:this.pageChange,total:u,pageSize:n.pageSize})))}}]),t}(y.Component),f=p))||f),b=S;t.default=b}}]);