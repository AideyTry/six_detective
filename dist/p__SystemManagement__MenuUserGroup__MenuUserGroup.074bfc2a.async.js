(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[39],{gxSN:function(e,t,a){"use strict";var r=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("14J3");var u=r(a("BMrR"));a("jCWc");var o=r(a("kPKH"));a("+L6B");var l=r(a("2/Rp")),s=r(a("gWZ8"));a("miYZ");var p=r(a("tsqr")),i=r(a("rlhR"));a("y8nQ");var c=r(a("Vl3Y")),d=r(a("2Taf")),f=r(a("vZ4D")),m=r(a("l4Ni")),g=r(a("ujKo")),h=r(a("MhPg"));a("5NDa");var y,v,N,M=r(a("5rEg")),b=n(a("q1tI")),E=a("LLXN"),G=a("MuoO"),C=r(a("zwCN")),S=r(a("HV4n")),I=M.default.TextArea,k=function(e){function t(){var e;return(0,d.default)(this,t),e=(0,m.default)(this,(0,g.default)(t).call(this)),e.state={},e}return(0,h.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.props.groupMenuInfo;return b.default.createElement(b.Fragment,null,b.default.createElement(c.default,null,b.default.createElement(c.default.Item,{label:(0,E.formatMessage)({id:"systemManagement.userMaintenance.menuGroupName"}),labelCol:{span:6},wrapperCol:{span:8}},e("groupName",{rules:[{required:!0,message:"Please input Name of Menu User Group"}],initialValue:t&&t.groupName})(b.default.createElement(M.default,{placeholder:"Please input"}))),b.default.createElement(c.default.Item,{label:(0,E.formatMessage)({id:"systemManagement.userGroup.remark"}),labelCol:{span:6},wrapperCol:{span:8}},e("groupDesc",{rules:[{required:!0,message:"Please input Remark of Menu User Group"}],initialValue:t&&t.groupDesc})(b.default.createElement(I,{rows:4,placeholder:"Please input"})))))}}]),t}(b.Component),U=c.default.create()(k),w=(y=(0,G.connect)(function(e){var t=e.menuUserGroup,a=e.loading;return{loading:a.effects,userGroup:t.saveUser,updateGroup:t.updateData}}),y((N=function(e){function t(e){var a;return(0,d.default)(this,t),a=(0,m.default)(this,(0,g.default)(t).call(this,e)),a.newUserRef=b.default.createRef(),a.onCancel=function(){a.props.onCancel()},a.onSave=function(){var e=a.state.selectedKeys,t=a.props,r=t.dispatch,n=t.updateFlag;a.newUserRef.current.validateFields(function(t,u){if(!t)if(e.length<=0)p.default.warning("Please checked Authorizing access to menus");else{var o=e.map(function(e){return e.substring(0,3)}),l=Object.assign([],e);if(o.forEach(function(e){return l.push(e)}),l=(0,s.default)(new Set(l)),n){var i=a.props.groupMenuInfo,c={operType:"modifyById",groupId:i.groupId,groupName:u.groupName,groupDesc:u.groupDesc,menuIds:l.join(",")};r({type:"menuUserGroup/updateUserGroup",payload:c,callback:function(){a.props.onSave(!0)}})}else{var d={groupName:u.groupName,groupDesc:u.groupDesc,menuIds:l.join(",")};r({type:"menuUserGroup/newUserGroup",payload:d,callback:function(){p.default.success({content:"save success",duration:2}),a.props.onSave(!1)}})}}})},a.getMenuGrops=function(){var e=a.props,t=e.dispatch,r=e.groupMenuInfo,n=(0,i.default)(a),u={operType:"queryById",groupId:r.groupId};t({type:"menuUserGroup/updateUserGroup",payload:u,callback:function(){var e=a.props.updateGroup.map(function(e){return e.menuId});n.setState({selectedKeys:e})}})},a.onChangeMenuUserGroup=function(e){console.log("checkedValues=",e)},a.onChangeAlertUserGroup=function(e){console.log("checkedValues=",e)},a.onSelect=function(e){console.log("value===",e)},a.onCheck=function(e){var t=e;a.setState({selectedKeys:t})},a.onAllChecked=function(e){a.setState({selectedKeys:e})},a.state={selectedKeys:[]},a}return(0,h.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.updateFlag;e&&this.getMenuGrops()}},{key:"render",value:function(){var e=this.props,t=e.menuData,a=e.groupMenuInfo,r=this.state.selectedKeys;return b.default.createElement(b.Fragment,null,b.default.createElement(U,{ref:this.newUserRef,groupMenuInfo:a}),b.default.createElement("ul",{type:"flex",className:C.default.userGroup},b.default.createElement("li",null,b.default.createElement("h3",{className:C.default.groupTitle},"Authorizing access to menus"),b.default.createElement("div",{className:C.default.treeWraper},b.default.createElement(S.default,{all:!0,checkable:!0,onCheck:this.onCheck,treeData:t,checkedKeys:r,treeKey:{currentKey:"menuid",currentName:"menuname",parentKey:"parentmenuid"},onAllChecked:this.onAllChecked,onSelect:this.onSelect})))),b.default.createElement(u.default,{type:"flex",justify:"end",style:{position:"absolute",right:0,bottom:0,width:"100%",padding:"10px 16px",background:"#fff",textAlign:"right"}},b.default.createElement(o.default,null,b.default.createElement(l.default,{onClick:this.onCancel},"CANCEL"),b.default.createElement(l.default,{type:"primary",onClick:this.onSave,style:{marginLeft:"10px"}},"SAVE"))))}}]),t}(b.Component),v=N))||v),D=function(e){var t=e.menu;return{menuData:t.menuData}},x=(0,G.connect)(D)(w);t.default=x},lNWD:function(e,t,a){"use strict";var r=a("tAuX"),n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("14J3");var u=n(a("BMrR"));a("+L6B");var o=n(a("2/Rp"));a("jCWc");var l=n(a("kPKH"));a("y8nQ");var s=n(a("Vl3Y"));a("5NDa");var p=n(a("5rEg")),i=n(a("2Taf")),c=n(a("vZ4D")),d=n(a("l4Ni")),f=n(a("ujKo")),m=n(a("MhPg")),g=r(a("q1tI")),h=a("LLXN"),y=n(a("zwCN")),v=n(a("BN5G")),N=function(e){function t(){var e,a;(0,i.default)(this,t);for(var r=arguments.length,n=new Array(r),u=0;u<r;u++)n[u]=arguments[u];return a=(0,d.default)(this,(e=(0,f.default)(t)).call.apply(e,[this].concat(n))),a.state={},a}return(0,m.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.props.search;return g.default.createElement(s.default,{className:"ant-advanced-search-form search-wraper",layout:"vertical"},g.default.createElement(u.default,{gutter:{xs:0,sm:8,md:10,lg:20,xl:24},align:"bottom",type:"flex"},g.default.createElement(l.default,{xs:24,sm:12,xl:7,xxl:5},g.default.createElement(s.default.Item,{label:(0,h.formatMessage)({id:"systemManagement.userMaintenance.menuGroupName"})},e("groupName",{})(g.default.createElement(p.default,{className:y.default.inputvalue,placeholder:"Please Input ".concat((0,h.formatMessage)({id:"systemManagement.userMaintenance.menuGroupName"}))})))),g.default.createElement(l.default,{xs:24,sm:12,xl:7,xxl:5},g.default.createElement(s.default.Item,{label:(0,h.formatMessage)({id:"systemManagement.userGroup.remark"})},e("groupDesc",{})(g.default.createElement(p.default,{className:y.default.inputvalue,placeholder:"Please Input ".concat((0,h.formatMessage)({id:"systemManagement.userGroup.remark"}))})))),g.default.createElement(l.default,{xs:24,sm:12,xl:7,xxl:5},g.default.createElement(s.default.Item,null,g.default.createElement(o.default,{type:"primary",onClick:t},g.default.createElement(v.default,{type:"iconsousuo",style:{color:"#fff"}}),(0,h.formatMessage)({id:"app.common.search"}))))))}}]),t}(g.Component);t.default=N},x76Q:function(e,t,a){"use strict";var r=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("DjyN");var u=r(a("NUBc"));a("g9YV");var o=r(a("wCAj"));a("+L6B");var l=r(a("2/Rp"));a("2qtc");var s=r(a("kLXV"));a("bbsP");var p=r(a("/wGt")),i=r(a("2Taf")),c=r(a("vZ4D")),d=r(a("l4Ni")),f=r(a("ujKo")),m=r(a("MhPg"));a("y8nQ");var g,h,y,v=r(a("Vl3Y")),N=n(a("q1tI")),M=a("Hx5s"),b=a("LLXN"),E=a("MuoO"),G=r(a("BN5G")),C=r(a("zwCN")),S=r(a("lNWD")),I=r(a("gxSN")),k=v.default.create({})(S.default),U=(g=(0,E.connect)(function(e){var t=e.menuUserGroup,a=e.loading;return{loading:a.effects,menuUserGroup:t.data,updateGroup:t.updateData}}),g((y=function(e){function t(){var e;return(0,i.default)(this,t),e=(0,d.default)(this,(0,f.default)(t).call(this)),e.searchForm=N.default.createRef(),e.newUser=function(){e.setState({modifyVisible:!0,groupTitle:"New User Group",updateFlag:!1,groupMenuInfo:{}})},e.onClose=function(){var t={groupId:void 0,groupName:void 0,groupDesc:void 0};e.setState({modifyVisible:!1,groupMenuInfo:t})},e.onSave=function(t){t||(e.searchForm.current.resetFields(),e.setState({searchGroupName:void 0,searchGroupDesc:void 0})),e.setState({modifyVisible:!1});var a=e.state.page.pageSize,r={pageNumber:1,pageSize:a};e.setState({page:r},function(){e.queryUserList()})},e.updateUser=function(t,a){console.log("res, obj=",t,a);var r={groupId:a.groupId,groupName:a.groupName,groupDesc:a.groupDesc};e.setState({modifyVisible:!0,updateFlag:!0,groupTitle:"Modify User Group",groupMenuInfo:r})},e.deleteUser=function(t,a){console.log("delete====",a);var r={groupId:a.groupId},n=e.props.dispatch,u={operType:"queryUseInGroup",groupId:r.groupId};n({type:"menuUserGroup/updateUserGroup",payload:u,callback:function(){"0"===e.props.updateGroup[0].flag?e.setState({delateTitle:N.default.createElement(N.Fragment,null,N.default.createElement("span",null,"This menu has been authorized to users."),N.default.createElement("br",null),N.default.createElement("span",null,"Please confirm that you want to delete it!"))}):e.setState({delateTitle:"Please confirm that you want to delete this record?"}),e.setState({deleteVisible:!0,groupMenuInfo:r})}})},e.deleteConfirm=function(){var t=e.props.dispatch,a=e.state.groupMenuInfo,r={operType:"deleteById",groupId:a.groupId};t({type:"menuUserGroup/updateUserGroup",payload:r,callback:function(){e.queryUserList(),e.setState({deleteVisible:!1})}})},e.deleteCancel=function(){e.setState({deleteVisible:!1})},e.queryLog=function(){e.searchForm.current.validateFields(function(t,a){console.log("values===",a),e.setState({searchGroupName:a.groupName,searchGroupDesc:a.groupDesc},function(){e.queryUserList()})})},e.pageChange=function(t,a){var r={pageNumber:t,pageSize:a};e.setState({page:r},function(){e.queryUserList()})},e.queryUserList=function(){var t=e.props.dispatch,a=e.state,r=a.searchGroupName,n=a.searchGroupDesc,u={groupName:r,groupDesc:n,pageNumber:e.state.page.pageNumber.toString(),pageSize:e.state.page.pageSize.toString()};t({type:"menuUserGroup/getMenuUserGroup",payload:u})},e.onShowSizeChange=function(t,a){var r={pageNumber:t,pageSize:a};e.setState({page:r},function(){e.queryUserList()})},e.state={modifyVisible:!1,deleteVisible:!1,updateFlag:!1,searchGroupName:void 0,searchGroupDesc:void 0,delateTitle:"Please confirm that you want to delete this record?",groupMenuInfo:{},columns:[{title:(0,b.formatMessage)({id:"app.common.number"}),dataIndex:"index",key:"index",align:"center",minWidth:60,render:function(t,a,r){return N.default.createElement("span",null,(e.state.page.pageNumber-1)*e.state.page.pageSize+r+1)}},{title:(0,b.formatMessage)({id:"systemManagement.userMaintenance.menuGroupName"}),dataIndex:"groupName",key:"groupName"},{title:(0,b.formatMessage)({id:"systemManagement.userGroup.remark"}),dataIndex:"groupDesc",key:"groupDesc"},{title:(0,b.formatMessage)({id:"app.common.operation"}),dataIndex:"operation",key:"operation",align:"center",render:function(t,a){return N.default.createElement("span",{className:C.default.operation},N.default.createElement("a",{href:"#",onClick:function(){return e.updateUser(t,a)}},N.default.createElement(G.default,{type:"icon-edit",className:"operation-icon"})),N.default.createElement("a",{href:"#",onClick:function(){return e.deleteUser(t,a)}},N.default.createElement(G.default,{type:"icon-delete",className:"operation-icon"})))}}],page:{pageNumber:1,pageSize:10}},e}return(0,m.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.queryUserList()}},{key:"render",value:function(){var e=this.props,t=e.loading,a=e.menuUserGroup,r=this.state,n=r.groupTitle,i=r.deleteVisible,c=r.groupMenuInfo,d=r.updateFlag,f=this.state,m=f.columns,g=f.page,h=f.modifyVisible,y=f.delateTitle;return N.default.createElement(M.PageHeaderWrapper,null,N.default.createElement("div",null,N.default.createElement(k,{search:this.queryLog,ref:this.searchForm})),N.default.createElement(p.default,{closable:!1,title:n,width:700,onClose:this.onClose,visible:h},h&&N.default.createElement(I.default,{onCancel:this.onClose,onSave:this.onSave,groupMenuInfo:c,updateFlag:d})),N.default.createElement(s.default,{title:"CONFIRM",visible:i,onOk:this.deleteConfirm,onCancel:this.deleteCancel,cancelText:(0,b.formatMessage)({id:"app.common.cancel"}),okText:(0,b.formatMessage)({id:"app.common.confirm"})},N.default.createElement("span",null,y)),N.default.createElement("div",{className:C.default.content},N.default.createElement("div",{className:C.default.tableTop},N.default.createElement(l.default,{onClick:this.newUser,type:"primary",className:"btn-usual"},"+ New Menu Group")),N.default.createElement(o.default,{loading:t["menuUserGroup/getMenuUserGroup"],dataSource:a.items,columns:m,pagination:!1}),a.items&&a.items.length>0&&N.default.createElement(u.default,{showSizeChanger:!0,current:g.pageNumber,showTotal:function(){return"Total ".concat(a.totalCount," items")},onShowSizeChange:this.onShowSizeChange,onChange:this.pageChange,total:a.totalCount,pageSize:g.pageSize})))}}]),t}(N.Component),h=y))||h),w=U;t.default=w},zwCN:function(e,t,a){e.exports={inputValue:"antd-pro-pages-system-management-menu-user-group-menu-user-group-inputValue",content:"antd-pro-pages-system-management-menu-user-group-menu-user-group-content",tableTop:"antd-pro-pages-system-management-menu-user-group-menu-user-group-tableTop",title:"antd-pro-pages-system-management-menu-user-group-menu-user-group-title",userGroup:"antd-pro-pages-system-management-menu-user-group-menu-user-group-userGroup",groupTitle:"antd-pro-pages-system-management-menu-user-group-menu-user-group-groupTitle",treeWraper:"antd-pro-pages-system-management-menu-user-group-menu-user-group-treeWraper"}}}]);