(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"2Cab":function(e,t,a){"use strict";var l=a("tAuX"),r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var n=r(a("qIgq")),u=l(a("q1tI")),d=a("Hx5s"),o=r(a("c2Ae")),c=r(a("ifr9")),i=r(a("mR9m"));function s(){var e=(0,u.useState)(null),t=(0,n.default)(e,2),a=t[0],l=t[1],r=(0,u.useState)("all"),s=(0,n.default)(r,2),f=s[0],p=s[1];return u.default.createElement(d.PageHeaderWrapper,null,u.default.createElement("div",{className:i.default["list-container"]},u.default.createElement(c.default,{getTask:function(e){return l(e)},setCurrentTaskType:function(e){return p(e)}}),a&&u.default.createElement(o.default,{task:a,currentTaskType:f})))}},"9ICW":function(e,t,a){"use strict";var l=a("tAuX"),r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("qIgq"));a("7Kak");var u=r(a("9yH6"));a("y8nQ");var d=r(a("Vl3Y"));a("OaEy");var o=r(a("2fM7"));a("5NDa");var c=r(a("5rEg")),i=l(a("q1tI")),s=c.default.TextArea,f=o.default.Option;function p(e){var t=e.detailData,a=e.getFieldDecorator,l=e.isShowForm;return i.default.createElement(i.default.Fragment,null,i.default.createElement(d.default.Item,{label:"Market",labelCol:{span:9},wrapperCol:{span:12}},a("market",{initialValue:t.market})(i.default.createElement(c.default,{disabled:!0}))),i.default.createElement(d.default.Item,{label:"EP Code",labelCol:{span:9},wrapperCol:{span:12}},a("epCode",{initialValue:t.epCode})(i.default.createElement(c.default,{disabled:!0}))),i.default.createElement(d.default.Item,{label:"EP Name",labelCol:{span:9},wrapperCol:{span:12}},a("epName",{rules:[{required:!!l,message:"Please input epName!"}],initialValue:t.epName})(i.default.createElement(c.default,{disabled:!l}))))}function m(e){var t=e.detailData,a=e.getFieldDecorator,l=e.setRadioCurrentValue,r=e.radioPdValue,n=e.setRadioPdValue,s=e.isShowForm;return i.default.createElement(i.default.Fragment,null,i.default.createElement(d.default.Item,{label:"Market",labelCol:{span:9},wrapperCol:{span:12}},a("market",{initialValue:t.market})(i.default.createElement(c.default,{disabled:!0}))),i.default.createElement(d.default.Item,{label:"HKEX DCASS Code",labelCol:{span:9},wrapperCol:{span:12}},a("HKEX DCASS Code",{initialValue:t.hkexDcassCode})(i.default.createElement(c.default,{disabled:!0}))),i.default.createElement(d.default.Item,{label:"Is CA Code ?",labelCol:{span:9},wrapperCol:{span:12}},a("isCaCode",{rules:[{required:!!s}],initialValue:t.isCaCode})(s?i.default.createElement(u.default.Group,{onChange:function(e){return l(e.target.value)}},i.default.createElement(u.default,{style:{display:"inline"},value:"Yes"},"yes"),i.default.createElement(u.default,{style:{display:"inline"},value:"No"},"no")):i.default.createElement(c.default,{disabled:!0}))),i.default.createElement(d.default.Item,{label:"Product code",labelCol:{span:9},wrapperCol:{span:12}},a("Product code",{initialValue:t.productCode})(i.default.createElement(c.default,{disabled:!0}))),i.default.createElement(d.default.Item,{label:"Product Description",labelCol:{span:9},wrapperCol:{span:12}},a("productDesc",{rules:[{required:!!s,message:"Please input Product Description!"}],initialValue:t.productDesc})(i.default.createElement(c.default,{disabled:!s}))),i.default.createElement(d.default.Item,{label:"Product Category",labelCol:{span:9},wrapperCol:{span:12}},a("productCategory",{rules:[{required:!!s,message:"Please select your Product Category!"}],initialValue:t.productCategory})(s?i.default.createElement(o.default,null,t.productCategoryInit.split(",").map(function(e){return i.default.createElement(f,{value:e,key:e},e)})):i.default.createElement(c.default,{disabled:!0}))),i.default.createElement(d.default.Item,{label:"Futures or Option",labelCol:{span:9},wrapperCol:{span:12}},a("contractNature",{rules:[{required:!!s,message:"Please select Futures or Option!"}],initialValue:t.contractNature})(s?i.default.createElement(o.default,null,t.contractNatureInit.split(",").map(function(e){return i.default.createElement(f,{value:e,key:e},e)})):i.default.createElement(c.default,{disabled:!0}))),i.default.createElement(d.default.Item,{label:"Product Group",labelCol:{span:9},wrapperCol:{span:12}},a("productGroup",{rules:[{required:!!s,message:"Please select Product Group!"}],initialValue:t.productGroup})(s?i.default.createElement(o.default,null,t.productGroupInit.split(",").map(function(e){return i.default.createElement(f,{value:e,key:e},e)})):i.default.createElement(c.default,{disabled:!0}))),i.default.createElement(d.default.Item,{label:"Template Code(Last Trade Day)",labelCol:{span:9},wrapperCol:{span:12}},a("ltdTmplCode",{rules:[{required:!!s,message:"Please select Template Code(Last Trade Day)"}],initialValue:t.ltdTmplCode})(s?i.default.createElement(o.default,null,t.ltdTmplCodeInit.split(",").map(function(e){return i.default.createElement(f,{value:e,key:e},e)})):i.default.createElement(c.default,{disabled:!0}))),i.default.createElement(d.default.Item,{label:"Template Code(Position Limit)",labelCol:{span:9},wrapperCol:{span:12}},a("plTmplCode",{rules:[{required:!!s,message:"Please select Template Code(Position Limit)!"}],initialValue:t.plTmplCode})(s?i.default.createElement(o.default,null,t.plTmplCodeInit.split(",").map(function(e){return i.default.createElement(f,{value:e,key:e},e)})):i.default.createElement(c.default,{disabled:!0}))),i.default.createElement(d.default.Item,{label:"Template Code(Reportable Limit)",labelCol:{span:9},wrapperCol:{span:12}},a("rlTmplCode",{rules:[{required:!!s,message:"Please select Template Code(Reportable Limit)!"}],initialValue:t.rlTmplCode})(s?i.default.createElement(o.default,null,t.rlTmplCodeInit.split(",").map(function(e){return i.default.createElement(f,{value:e,key:e},e)})):i.default.createElement(c.default,{disabled:!0}))),i.default.createElement(d.default.Item,{label:"Is Calculate PD ?",labelCol:{span:9},wrapperCol:{span:12}},a("isCalculatePd",{rules:[{required:!!s}],initialValue:t.isCalculatePd})(s?i.default.createElement(u.default.Group,{onChange:function(e){return n(e.target.value)},disabled:!s},i.default.createElement(u.default,{style:{display:"inline"},value:"Yes"},"yes"),i.default.createElement(u.default,{style:{display:"inline"},value:"No"},"no")):i.default.createElement(c.default,{disabled:!0}))),"Yes"===r?i.default.createElement(i.default.Fragment,null,i.default.createElement(d.default.Item,{label:"Size Factor for Calculate PD",labelCol:{span:9},wrapperCol:{span:12}},a("sizeFactor",{rules:[{required:!!s,message:"Please input Size Factor for Calculate PD!"}],initialValue:t.sizeFactor})(i.default.createElement(c.default,{type:"number",disabled:!s}))),i.default.createElement(d.default.Item,{label:"Weighting Factor for Calculate PD",labelCol:{span:9},wrapperCol:{span:12}},a("weightFactor",{rules:[{required:!!s,message:"Please input Weighting Factor for Calculate PD!"}],initialValue:t.weightFactor})(i.default.createElement(c.default,{type:"number",disabled:!s})))):null)}function C(e){var t=e.detailData,a=e.getFieldDecorator,l=e.setRadioCurrentValue,r=e.isShowForm;return i.default.createElement(i.default.Fragment,null,i.default.createElement(d.default.Item,{label:"Market",labelCol:{span:9},wrapperCol:{span:12}},a("market",{initialValue:t.market})(i.default.createElement(c.default,{disabled:!0}))),i.default.createElement(d.default.Item,{label:"HKEX DCASS Code",labelCol:{span:9},wrapperCol:{span:12}},a("hkexDcassCode",{initialValue:t.hkexDcassCode})(i.default.createElement(c.default,{disabled:!0}))),i.default.createElement(d.default.Item,{label:"Is CA Code ?",labelCol:{span:9},wrapperCol:{span:12}},a("isCaCode",{initialValue:t.isCaCode})(r?i.default.createElement(u.default.Group,{onChange:function(e){return l(e.target.value)}},i.default.createElement(u.default,{style:{display:"inline"},value:"Yes"},"yes"),i.default.createElement(u.default,{style:{display:"inline"},value:"No"},"no")):i.default.createElement(c.default,{disabled:!0}))),i.default.createElement(d.default.Item,{label:"Original Product code",labelCol:{span:9},wrapperCol:{span:12}},a("originalProductCode",{initialValue:t.originalProductCode})(i.default.createElement(c.default,{disabled:!0}))),i.default.createElement(d.default.Item,{label:"Effective Date",labelCol:{span:9},wrapperCol:{span:12}},a("effectiveDate",{initialValue:t.effectiveDate})(i.default.createElement(c.default,{disabled:!0}))),i.default.createElement(d.default.Item,{label:"Expiry Date\xa0",labelCol:{span:9},wrapperCol:{span:12}},a("expiryDate",{initialValue:t.expiryDate})(i.default.createElement(c.default,{disabled:!0}))),i.default.createElement(d.default.Item,{label:"Remark\xa0",labelCol:{span:9},wrapperCol:{span:12}},a("remark",{rules:[{required:!!r,message:"Please input Remark!"}],initialValue:t.remark})(r?i.default.createElement(s,null):i.default.createElement(c.default,{disabled:!0}))))}function g(e){var t=e.form,a=e.detailItem,l=e.task,r=t.getFieldDecorator,u=(0,i.useState)("No"),o=(0,n.default)(u,2),c=o[0],s=o[1],f=(0,i.useState)("Yes"),g=(0,n.default)(f,2),E=g[0],v=g[1],y=l&&a&&a[0]||{},b=y&&y.alertType,h=y&&y.isStarter;return console.log("alertType----\x3e",b,y,h),(0,i.useEffect)(function(){s(y.isCaCode)},[y.isCaCode]),(0,i.useEffect)(function(){v(y.isCalculatePd)},[y.isCalculatePd]),i.default.createElement(i.default.Fragment,null,y&&i.default.createElement(d.default,null,"301"===b&&i.default.createElement(p,{detailData:y,getFieldDecorator:r,isShowForm:h}),"302"===b&&("No"===c?i.default.createElement(m,{detailData:y,getFieldDecorator:r,setRadioCurrentValue:s,radioPdValue:E,setRadioPdValue:v,isShowForm:h}):i.default.createElement(C,{detailData:y,getFieldDecorator:r,setRadioCurrentValue:s,isShowForm:h})),"303"===b&&("Yes"===c?i.default.createElement(C,{detailData:y,getFieldDecorator:r,setRadioCurrentValue:s,isShowForm:h}):i.default.createElement(m,{detailData:y,getFieldDecorator:r,setRadioCurrentValue:s,radioPdValue:E,setRadioPdValue:v,isShowForm:h}))))}var E=d.default.create()(g);t.default=E},BCHC:function(e,t,a){"use strict";var l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=C,a("Q9mQ");var r=l(a("diRs"));a("14J3");var n=l(a("BMrR"));a("jCWc");var u=l(a("kPKH"));a("tU7J");var d=l(a("wFql")),o=l(a("q1tI")),c=a("LLXN"),i=l(a("wd/R")),s=l(a("BN5G")),f=d.default.Paragraph,p=d.default.Text;function m(e){var t=e.attachments;return o.default.createElement(r.default,{placement:"bottomRight",title:o.default.createElement(c.FormattedMessage,{id:"alert-center.attachement-list"}),content:o.default.createElement(n.default,{style:{padding:"6px 14px",width:240,maxHeight:150,overflowY:"auto"}},t.map(function(e,t){var a=e.name,l=e.url;return o.default.createElement(u.default,{key:l},o.default.createElement(p,{ellipsis:!0,style:{width:"100%"},title:a},o.default.createElement("a",{download:!0,href:"/download?filePath=".concat(l),style:{marginBottom:20}},t+1,". ",a)))}))},o.default.createElement(s.default,{type:"iconbiezhen"}),t.length)}function C(e){var t=e.comment,a=t.id,l=t.commentTime,r=t.commentContent,d=t.commentUserName,c=t.attachment,s=c?c.split(","):[],p=(0,i.default)(l).format("DD-MMM-YYYY HH:mm:ss");return s=s.map(function(e){var t=e.split("/"),a=t.slice(-1)[0];return{name:a,url:e}}),o.default.createElement("li",{key:a},o.default.createElement(n.default,null,o.default.createElement(u.default,{span:18,style:{color:"#0D87D4"}},p),o.default.createElement(u.default,{span:5,offset:1,align:"right"},s.length>0&&o.default.createElement(m,{attachments:s}))),o.default.createElement(n.default,null,o.default.createElement(f,{ellipsis:{rows:3,expandable:!0}},r,"(",d,")")))}},GybK:function(e,t,a){"use strict";var l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.ConfirmModel=u,a("2qtc");var r=l(a("kLXV")),n=l(a("q1tI"));function u(e){var t=e.title,a=e.confirmVisible,l=e.comfirm,u=e.content,d=e.closeModel;return n.default.createElement(r.default,{title:t,visible:a,onOk:l,onCancel:d},n.default.createElement("p",null,u))}},MAxD:function(e,t,a){"use strict";var l=a("tAuX"),r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=s,a("Q9mQ");var n=r(a("diRs"));a("+L6B");var u=r(a("2/Rp")),d=r(a("qIgq")),o=l(a("q1tI")),c=r(a("H7wn")),i=a("pAS7");function s(e){var t=e.postComment,a=(0,o.useState)(!1),l=(0,d.default)(a,2),r=l[0],s=l[1];function f(e){s(!1),t(e)}return o.default.createElement(n.default,{visible:r,placement:"topRight",trigger:"click",content:o.default.createElement("ul",{className:c.default.phase},i.PHASES.map(function(e,t){return o.default.createElement("li",{key:e,onClick:function(){return f(e)}},t+1,". ",e)}))},o.default.createElement(u.default,{type:"primary",onClick:function(){return s(!0)}},"Phase"))}},Qmke:function(e,t,a){"use strict";var l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r=l(a("q1tI")),n=a("LLXN"),u=l(a("BN5G")),d=l(a("mR9m"));function o(e){var t=e.attachments,a=e.onRemove,l=e.onRemoveAll;return r.default.createElement("div",{className:d.default["up-attachments"]},r.default.createElement("div",{className:d.default["file-desc"]},r.default.createElement("span",null,(0,n.formatMessage)({id:"alert-center.attachment-des"},{count:t.length,size:(t.reduce(function(e,t){return e+t.size},0)/1024).toFixed(2)})),r.default.createElement("span",{onClick:l},(0,n.formatMessage)({id:"alert-center.delete-all"}))),r.default.createElement("ul",null,t.map(function(e){return r.default.createElement("li",{key:e.uid},r.default.createElement("span",{className:d.default["icon-btns"]},r.default.createElement("a",{download:!0,href:"/download?filePath=".concat(e.url)},r.default.createElement(u.default,{type:"icondownload",className:d.default.icon})),r.default.createElement(u.default,{type:"icondelete",className:d.default.icon,onClick:function(){return a(e)}})),r.default.createElement("span",null,e.name))})))}},c2Ae:function(e,t,a){"use strict";var l=a("tAuX"),r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("DZo9");var n=r(a("8z0m"));a("T2oS");var u=r(a("W9HT"));a("jCWc");var d=r(a("kPKH"));a("bbsP");var o=r(a("/wGt"));a("+L6B");var c=r(a("2/Rp"));a("7Kak");var i=r(a("9yH6")),s=r(a("p0pE")),f=r(a("gWZ8")),p=r(a("qIgq"));a("14J3");var m=r(a("BMrR"));a("R9oj");var C=r(a("ECub"));a("5NDa");var g=r(a("5rEg"));a("Znn+");var E=r(a("ZTPi")),v=l(a("q1tI")),y=a("MuoO"),b=r(a("BN5G")),h=a("GybK"),k=r(a("mR9m")),w=r(a("MAxD")),T=r(a("Qmke")),S=r(a("BCHC")),P=r(a("vzoP")),x=r(a("9ICW")),I=E.default.TabPane,D=g.default.TextArea;function N(e){var t=e.className,a=void 0===t?"":t,l=e.style,r=void 0===l?{}:l;return v.default.createElement(m.default,{className:a,style:r,type:"flex",align:"middle",justify:"center"},v.default.createElement(C.default,null))}function F(e){var t=e.dispatch,a=e.loading,l=e.task,r=e.detailItems,C=e.nextUsers,g=e.taskHistoryList,y=e.logList,F=e.currentTaskType,A=(0,v.useState)(!1),R=(0,p.default)(A,2),M=R[0],V=R[1],L=(0,v.useState)(!1),q=(0,p.default)(L,2),G=q[0],H=q[1],O=(0,v.useState)(""),j=(0,p.default)(O,2),Y=j[0],_=j[1],z=(0,v.useState)(""),B=(0,p.default)(z,2),K=B[0],U=B[1],W=(0,v.useState)(""),X=(0,p.default)(W,2),J=X[0],Q=X[1],Z=(0,v.useState)(!1),$=(0,p.default)(Z,2),ee=$[0],te=$[1],ae=(0,v.useState)(!1),le=(0,p.default)(ae,2),re=le[0],ne=le[1],ue=(0,v.useState)([]),de=(0,p.default)(ue,2),oe=de[0],ce=de[1],ie=(0,v.useState)(!0),se=(0,p.default)(ie,2),fe=se[0],pe=se[1],me=v.default.createRef(),Ce=function(e){return e/1024/1024<5};function ge(e){if(U(e),"reject"!==e){if("submit"===e){var t=!0;if(me.current.validateFields(function(e){t=!e}),!t)return}console.log("(nextUsers.length---\x3e",C),C.length<1?Ee(e):H(!0)}else te(!0)}function Ee(e){var a={},n=!0,u={taskCode:l.taskCode.toString(),type:e,userId:Y.toString(),comment:J,attachment:oe.map(function(e){return e.url}).join(",")};"submit"===e&&me.current.validateFields(function(e,t){var l=r[0].alertType;n=!e,e||("301"===l?a={epName:t.epName}:"302"===l?a="No"===t.isCaCode?{isCaCode:t.isCaCode,productDesc:t.productDesc,productCategory:t.productCategory,contractNature:t.contractNature,productGroup:t.productGroup,ltdTmplCode:t.ltdTmplCode,plTmplCode:t.plTmplCode,rlTmplCode:t.rlTmplCode,pdCalculateFlag:t.isCalculatePd,sizeFactor:"Yes"===t.isCalculatePd?t.sizeFactor.toString():"",weightFactor:"Yes"===t.isCalculatePd?t.weightFactor.toString():""}:{isCaCode:t.isCaCode,remark:t.remark}:"303"===l&&(a="Yes"===t.isCaCode?{isCaCode:t.isCaCode,remark:t.remark}:{isCaCode:t.isCaCode,productDesc:t.productDesc,productCategory:t.productCategory,contractNature:t.contractNature,productGroup:t.productGroup,ltdTmplCode:t.ltdTmplCode,plTmplCode:t.plTmplCode,rlTmplCode:t.rlTmplCode,pdCalculateFlag:t.isCalculatePd,sizeFactor:"Yes"===t.isCalculatePd?t.sizeFactor.toString():"",weightFactor:"Yes"===t.isCalculatePd?t.weightFactor.toString():""}),Object.assign(u,a),console.log("Received values of form: ",t,a,u))}),"reject"===e&&te(!1),n&&t({type:"approvalCenter/approveAndReject",payload:u,callback:function(){t({type:"approvalCenter/fetch",payload:{type:F}}),ce([])}}),H(!1)}function ve(){console.log("comment----",J),t({type:"approvalCenter/setTaskWithdraw",payload:{taskCode:l.taskCode,comment:J},callback:function(){t({type:"approvalCenter/fetch",payload:{type:F,taskCode:l.taskCode}})}}),ne(!1)}function ye(){var e={},a=!0,n={taskCode:l.taskCode.toString()};me.current.validateFields(function(t,l){var u=r[0].alertType;a=!t,t||("301"===u?e={epName:l.epName}:"302"===u?e="No"===l.isCaCode?{isCaCode:l.isCaCode,productDesc:l.productDesc,productCategory:l.productCategory,contractNature:l.contractNature,productGroup:l.productGroup,ltdTmplCode:l.ltdTmplCode,plTmplCode:l.plTmplCode,rlTmplCode:l.rlTmplCode,pdCalculateFlag:l.isCalculatePd,sizeFactor:"Yes"===l.isCalculatePd?l.sizeFactor.toString():"",weightFactor:"Yes"===l.isCalculatePd?l.weightFactor.toString():""}:{isCaCode:l.isCaCode,remark:l.remark}:"303"===u&&(e="Yes"===l.isCaCode?{isCaCode:l.isCaCode,remark:l.remark}:{isCaCode:l.isCaCode,productDesc:l.productDesc,productCategory:l.productCategory,contractNature:l.contractNature,productGroup:l.productGroup,ltdTmplCode:l.ltdTmplCode,plTmplCode:l.plTmplCode,rlTmplCode:l.rlTmplCode,pdCalculateFlag:l.isCalculatePd,sizeFactor:"Yes"===l.isCalculatePd?l.sizeFactor.toString():"",weightFactor:"Yes"===l.isCalculatePd?l.weightFactor.toString():""}),Object.assign(n,e),console.log("Received values of form: ",l,e,n))}),a&&t({type:"approvalCenter/saveTask",payload:n})}function be(e){var t=(0,f.default)(e.fileList);t=t.slice(-5),t=t.map(function(e){var t=e.response||{},a=t.bcjson,l=a||{},r=l.flag,n=l.items,u=void 0===n?{}:n;return"1"===r&&u?(0,s.default)({url:u.relativeUrl},e):e}),console.log("fileList---\x3e",t),ce(t)}function he(e){ce(oe.filter(function(t){return t.uid!==e.uid}))}return(0,v.useEffect)(function(){l&&t({type:"approvalCenter/fetchTaskDetail",payload:{taskCode:l.taskCode}})},[l]),(0,v.useEffect)(function(){var e=localStorage.getItem("loginName"),t=r&&r[0]&&r[0].ownerId;pe(t===e)},[r]),(0,v.useEffect)(function(){l&&"his"!==F&&t({type:"approvalCenter/featchTaskGroup",payload:{taskCode:l.taskCode}})},[l]),(0,v.useEffect)(function(){l&&t({type:"approvalCenter/getApprovalTaskHistory",payload:{taskCode:l.taskCode}})},[l]),v.default.createElement(v.default.Fragment,null,v.default.createElement(h.ConfirmModel,{title:"CONFIRM",content:"Do you comfirm to reject this task?",closeModel:function(){return te(!1)},confirmVisible:ee,comfirm:function(){return Ee(K)}}),v.default.createElement(h.ConfirmModel,{title:"CONFIRM",content:"Do you comfirm to withdraw this task?",closeModel:function(){return ne(!1)},confirmVisible:re,comfirm:ve}),v.default.createElement(m.default,{className:k.default["detail-container"],gutter:16},v.default.createElement(d.default,{span:16,className:M?k.default.fullscreen:""},v.default.createElement(E.default,{hideAdd:!0,className:k.default["detail-des"],defaultActiveKey:"1",tabBarExtraContent:v.default.createElement(b.default,{type:M?"iconfullscreen-exit":"iconfull-screen",className:k.default["fullscreen-icon"],onClick:function(){return V(!M)}})},v.default.createElement(I,{className:k.default["tab-content"],closable:!1,tab:"Task Detail",key:""},v.default.createElement(x.default,{ref:me,saveTask:ye,detailItem:r,task:l}),v.default.createElement(o.default,{title:"Assign to",width:500,visible:G,onClose:function(){return H(!1)},bodyStyle:{paddingBottom:80}},v.default.createElement(i.default.Group,{options:C,onChange:function(e){return _(e.target.value)},value:Y}),v.default.createElement("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right"}},v.default.createElement(c.default,{onClick:function(){return Ee(K)},type:"primary"},"Save"),v.default.createElement(c.default,{onClick:function(){return H(!1)},style:{marginRight:12}},"Cancel")))))),v.default.createElement(d.default,{span:8},v.default.createElement(E.default,{defaultActiveKey:"1",className:k.default["detail-comment"]},v.default.createElement(I,{tab:"Approval History",key:"1"},v.default.createElement(u.default,{spinning:a["approvalCenter/getApprovalTaskHistory"]},g.length>0?v.default.createElement("ul",{className:k.default["comment-list"]},g.map(function(e){return v.default.createElement(S.default,{comment:e,key:e.id})})):v.default.createElement(N,{className:k.default["comment-list"]})),"his"!==F&&fe?v.default.createElement("div",{className:k.default["comment-box"]},v.default.createElement(D,{placeholder:"COMMENT",className:k.default.txt,value:J,onChange:function(e){var t=e.target.value;return Q(t)}}),v.default.createElement(m.default,{className:k.default["comment-commit"],type:"flex",align:"middle",justify:"space-between"},v.default.createElement(d.default,{span:4},v.default.createElement(w.default,{postComment:function(e){return Q("".concat(J).concat(e," "))}})),v.default.createElement(d.default,{span:20,align:"right"},v.default.createElement(b.default,{type:"iconicon_withdraw1",onClick:function(){return ne(!0)},className:k.default["btn-icon"],style:{marginRight:"8px"}}),v.default.createElement(n.default,{action:"/upload?fileClass=WORKFLOW",showUploadList:!1,beforeUpload:function(e){return Ce(e.size)},fileList:oe,onChange:be},v.default.createElement(b.default,{type:"iconbiezhen",style:{cursor:"pointer",marginRight:4},title:"please select a file"}),oe.length>0&&oe.length),r[0]&&r[0].isStarter?v.default.createElement(v.default.Fragment,null,v.default.createElement(c.default,{type:"primary",onClick:ye},"Save"),v.default.createElement(c.default,{type:"primary",onClick:function(){return ge("submit")}},"Submit")):v.default.createElement(v.default.Fragment,null,v.default.createElement(c.default,{type:"primary",onClick:function(){return ge("reject")}},"Reject"),v.default.createElement(c.default,{type:"primary",onClick:function(){return ge("pass")}},"Approve")))),!!oe.length&&v.default.createElement(T.default,{attachments:oe,onRemove:he,onRemoveAll:function(){return ce([])}})):null),v.default.createElement(I,{tab:"Task Lifecycle",key:"2"},v.default.createElement(u.default,{spinning:a["approvalCenter/getApprovalTaskHistory"]},v.default.createElement("div",{style:{height:370,overflowY:"auto",padding:"0 18px"}},y.length>0?y.map(function(e){return v.default.createElement(P.default,{log:e,key:e.id})}):v.default.createElement(N,{className:k.default["comment-list"],style:{height:370}}))))))))}var A=(0,y.connect)(function(e){var t=e.loading,a=e.approvalCenter,l=a.detailItems,r=a.userList,n=a.taskHistoryList,u=a.logList,d=a.nextUsers;return{detailItems:l,userList:r,taskHistoryList:n,logList:u,nextUsers:d,loading:t.effects}})(F);t.default=A},ifr9:function(e,t,a){"use strict";var l=a("tAuX"),r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.DEFAULT_PAGE_SIZE=t.DEFAULT_PAGE=void 0;var n=r(a("d6i3"));a("bbsP");var u=r(a("/wGt"));a("+L6B");var d=r(a("2/Rp")),o=r(a("1l/V")),c=r(a("qIgq"));a("14J3");var i=r(a("BMrR"));a("jCWc");var s=r(a("kPKH"));a("7Kak");var f=r(a("9yH6"));a("5NDa");var p=r(a("5rEg"));a("g9YV");var m=r(a("wCAj")),C=l(a("q1tI")),g=a("MuoO"),E=a("LLXN"),v=r(a("usdK")),y=r(a("wd/R")),b=a("8Br5"),h=r(a("BN5G")),k=a("GybK"),w=a("+n12"),T=r(a("mR9m")),S=r(a("H7wn")),P=m.default.Column,x=p.default.Search,I=1;t.DEFAULT_PAGE=I;var D=10;function N(e){var t=e.changeTab,a=e.selectedCurrentTask;return C.default.createElement(i.default,{className:T.default.btns,style:{marginBottom:"15px"}},C.default.createElement(s.default,{span:12},C.default.createElement(f.default.Group,{key:a,defaultValue:a,buttonStyle:"solid",onChange:function(e){return t(e.target.value)}},C.default.createElement(f.default.Button,{value:"all"},"All Tasks"),C.default.createElement(f.default.Button,{value:"my"},"My Tasks"),C.default.createElement(f.default.Button,{value:"his"},"History"))))}function F(e){var t=e.selectedKeys,a=e.selectedCurrentTask,l=e.searchTask,r=e.checkOwner,n=e.checkAssign,u=e.urlTaskCode,d=e.exportAlert;return C.default.createElement(i.default,{className:S.default.btns},C.default.createElement(s.default,{span:12},"his"!==a&&C.default.createElement(C.default.Fragment,null,C.default.createElement("button",{type:"button",disabled:!t.length,onClick:function(){return r(t)}},C.default.createElement(h.default,{type:"iconqizhi",className:S.default["btn-icon"]}),C.default.createElement(E.FormattedMessage,{id:"alert-center.claim"})),C.default.createElement("button",{type:"button",disabled:!t.length,onClick:function(){return n(t)}},C.default.createElement(h.default,{type:"iconicon_assign-copy",className:S.default["btn-icon"]}),"Assign")),C.default.createElement("button",{type:"button",disabled:!t.length,onClick:d},C.default.createElement(h.default,{type:"iconexport",className:S.default["btn-icon"]}),C.default.createElement(E.FormattedMessage,{id:"alert-center.export"}))),C.default.createElement(s.default,{span:6},C.default.createElement(x,{key:u,placeholder:"search",defaultValue:u,onSearch:function(e){return l(a,e)},style:{width:264,height:36}})))}function A(e){var t=e.dispatch,a=e.loading,l=e.tasks,r=e.currentUsers,s=e.total,p=e.getTask,g=e.setCurrentTaskType,S=(0,C.useState)([]),x=(0,c.default)(S,2),I=x[0],D=x[1],A=(0,C.useState)("my"),R=(0,c.default)(A,2),M=R[0],V=R[1],L=(0,C.useState)("1"),q=(0,c.default)(L,2),G=q[0],H=q[1],O=(0,C.useState)("1"),j=(0,c.default)(O,2),Y=j[0],_=j[1],z=(0,C.useState)(!1),B=(0,c.default)(z,2),K=B[0],U=B[1],W=(0,C.useState)(""),X=(0,c.default)(W,2),J=X[0],Q=X[1],Z=(0,C.useState)(!1),$=(0,c.default)(Z,2),ee=$[0],te=$[1],ae=(0,C.useState)(""),le=(0,c.default)(ae,2),re=le[0],ne=le[1],ue=(0,C.useState)(""),de=(0,c.default)(ue,2),oe=de[0],ce=de[1],ie=(0,C.useState)(""),se=(0,c.default)(ie,2),fe=se[0],pe=se[1],me=(0,C.useState)(!1),Ce=(0,c.default)(me,2),ge=Ce[0],Ee=Ce[1],ve=(0,w.GetQueryString)("taskCode"),ye=(0,w.GetQueryString)("isEnd");function be(e){return he.apply(this,arguments)}function he(){return he=(0,o.default)(n.default.mark(function e(a){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t({type:"approvalCenter/fetchJudgeDetail",payload:{taskCode:a},callback:function(e){e[0].ownerId?(Ee(!1),ne(a),ce("This task has been claimed by [".concat(e[0].ownerId,"]\n          Do you confirm to re-claim?")),te(!0)):Te(a)}});case 2:case"end":return e.stop()}},e)})),he.apply(this,arguments)}function ke(e){return we.apply(this,arguments)}function we(){return we=(0,o.default)(n.default.mark(function e(a){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t({type:"approvalCenter/fetchJudgeDetail",payload:{taskCode:a},callback:function(e){var t=e.find(function(e){return e.ownerId});t?(Ee(!0),ce("some alerts has been claimed,\n      Do you confirm to re-claim?"),te(!0)):Te(a)}});case 2:case"end":return e.stop()}},e)})),we.apply(this,arguments)}function Te(e){t({type:"approvalCenter/claim",payload:{taskCode:e},callback:function(){te(!1),t({type:"approvalCenter/fetch",payload:{type:M}})}})}function Se(e){return Pe.apply(this,arguments)}function Pe(){return Pe=(0,o.default)(n.default.mark(function e(a){var l;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return l=localStorage.getItem("loginName"),e.next=3,t({type:"approvalCenter/fetchJudgeDetail",payload:{taskCode:a},callback:function(e){var t=e.find(function(e){return e.ownerId!==l});if(t)throw new Error("Can't assign task without claim!");U(!0)}});case 3:case"end":return e.stop()}},e)})),Pe.apply(this,arguments)}function xe(e){U(!1),t({type:"approvalCenter/setTaskAssign",payload:{taskCode:e,userId:J},callback:function(){Q(""),t({type:"approvalCenter/fetch",payload:{type:M}})}})}function Ie(e,a){t({type:"approvalCenter/fetch",payload:{taskCode:a,type:e}})}return(0,C.useEffect)(function(){pe(ve),ye&&V("his"),v.default.push({pathname:"/homepage/Approval-Process-Center"}),t({type:"approvalCenter/fetch",payload:{type:ye?"his":M,taskCode:ve}})},[]),(0,C.useEffect)(function(){if(l&&l.length>0){var e=(0,c.default)(l,1),t=e[0];p(t),_(t),g(M)}else p(!1)},[l]),C.default.createElement("div",{className:T.default.list},C.default.createElement(k.ConfirmModel,{title:"CONFIRM",content:oe,closeModel:function(){return te(!1)},confirmVisible:ee,comfirm:function(){return Te(ge?I:re)}}),C.default.createElement(u.default,{title:"Assign to",width:500,visible:K,onClose:function(){return U(!1)},bodyStyle:{paddingBottom:80}},C.default.createElement(f.default.Group,{options:r,onChange:function(e){return Q(e.target.value)},value:J}),C.default.createElement("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right"}},C.default.createElement(d.default,{onClick:function(){return xe(I)},type:"primary"},"Save"),C.default.createElement(d.default,{onClick:function(){return U(!1)},style:{marginRight:12}},"Cancel"))),C.default.createElement(N,{changeTab:function(e){pe(""),D([]),V(e),g(e),t({type:"approvalCenter/fetch",payload:{type:e}})},selectedCurrentTask:M}),C.default.createElement(F,{selectedKeys:I,selectedCurrentTask:M,searchTask:Ie,claimOk:Te,checkOwner:ke,setTaskAssign:xe,checkAssign:Se,setVisible:U,urlTaskCode:fe}),C.default.createElement(m.default,{border:!0,dataSource:l,rowKey:"taskCode",loading:a["approvalCenter/fetch"],rowClassName:function(e){return e.taskCode===Y.taskCode?"active":""},rowSelection:{selectedRowKeys:I,onChange:function(e){D(e)}},pagination:{total:s,showSizeChanger:!0,showTotal:function(e){return"Page ".concat(G," of ").concat(Math.ceil(e/10).toString())},onChange:function(e,a){H(e),t({type:"approvalCenter/fetch",payload:{page:e,pageSize:a,type:M}})},onShowSizeChange:function(e,a){H(e),t({type:"approvalCenter/fetch",payload:{page:e,pageSize:a,type:M}})}},onRow:function(e){return{onClick:function(){p(e),_(e)}}}},C.default.createElement(P,{align:"center",dataIndex:"taskCode",title:"TASK CODE"}),C.default.createElement(P,{align:"center",dataIndex:"classification",title:"CLASSIFICATION"}),C.default.createElement(P,{align:"center",dataIndex:"submitterName",title:"SUBMITTER NAME"}),C.default.createElement(P,{align:"center",dataIndex:"details",title:"DETAILS"}),C.default.createElement(P,{align:"center",dataIndex:"updateDate",title:"UPDATE DATE",render:function(e,t){return(0,y.default)(t.updateDate).format(b.timestampFormat)}}),C.default.createElement(P,{dataIndex:"owner",title:"OWNER"}),C.default.createElement(P,{align:"center",dataIndex:"statusDesc",title:"STATUS"}),"his"!==M?C.default.createElement(P,{align:"center",dataIndex:"action",title:C.default.createElement(E.FormattedMessage,{id:"alert-center.actions"}),render:function(e,t){return C.default.createElement(i.default,{className:T.default.btns},C.default.createElement(h.default,{type:"iconqizhi",className:T.default.icon,title:(0,E.formatMessage)({id:"alert-center.claim"}),onClick:function(){be([t.taskCode])}}))}}):null))}t.DEFAULT_PAGE_SIZE=D;var R=(0,g.connect)(function(e){var t=e.loading,a=e.approvalCenter,l=a.tasks,r=a.currentUsers,n=a.page,u=a.total;return{tasks:l,page:n,total:u,currentUsers:r,loading:t.effects}})(A);t.default=R},mR9m:function(e,t,a){e.exports={"list-container":"antd-pro-pages-approval-process-center-index-list-container",list:"antd-pro-pages-approval-process-center-index-list",btns:"antd-pro-pages-approval-process-center-index-btns","btn-icon":"antd-pro-pages-approval-process-center-index-btn-icon",icon:"antd-pro-pages-approval-process-center-index-icon","detail-container":"antd-pro-pages-approval-process-center-index-detail-container","tab-content":"antd-pro-pages-approval-process-center-index-tab-content",fullscreen:"antd-pro-pages-approval-process-center-index-fullscreen",ListBox:"antd-pro-pages-approval-process-center-index-ListBox",ListItem:"antd-pro-pages-approval-process-center-index-ListItem","detail-des":"antd-pro-pages-approval-process-center-index-detail-des","fullscreen-icon":"antd-pro-pages-approval-process-center-index-fullscreen-icon","detail-comment":"antd-pro-pages-approval-process-center-index-detail-comment","comment-list":"antd-pro-pages-approval-process-center-index-comment-list","loading-more":"antd-pro-pages-approval-process-center-index-loading-more","comment-box":"antd-pro-pages-approval-process-center-index-comment-box",txt:"antd-pro-pages-approval-process-center-index-txt","comment-commit":"antd-pro-pages-approval-process-center-index-comment-commit","up-attachments":"antd-pro-pages-approval-process-center-index-up-attachments","file-desc":"antd-pro-pages-approval-process-center-index-file-desc"}},pAS7:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PHASES=void 0;var l=["All the data is problematic.","Data correct,can be turned off.","Remember to download all the attachments.","Statistics are collected every Friday.","Emai me before you turn off alert."];t.PHASES=l},vzoP:function(e,t,a){"use strict";var l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=i,a("14J3");var r=l(a("BMrR"));a("jCWc");var n=l(a("kPKH"));a("tU7J");var u=l(a("wFql")),d=l(a("q1tI")),o=l(a("wd/R")),c=u.default.Paragraph;function i(e){var t=e.log,a=t.operateTime,l=t.operateMsg,u=(0,o.default)(a).format("DD-MMM-YYYY HH:mm:ss");return d.default.createElement(r.default,null,d.default.createElement(n.default,{span:11},u),d.default.createElement(n.default,{span:12,offset:1},d.default.createElement(c,{ellipsis:{rows:3,expandable:!0}},l)))}}}]);