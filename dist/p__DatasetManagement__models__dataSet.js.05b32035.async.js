(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[38],{"ab+t":function(e,a,t){"use strict";var r=t("g09b");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t("p0pE"));t("miYZ");var s=r(t("tsqr")),l=r(t("d6i3")),c=r(t("ywRk")),u=c.default.getClassifyTree,o=c.default.getDataSet,d=c.default.setSqlClassify,f=c.default.deleteSqlClassify,i=c.default.getMetadataTablePerform,p=c.default.operateDataSet,y={namespace:"dataSet",state:{classifyTreeData:[],dataSetData:[],column:[],tableData:[],activeTree:""},effects:{getClassifyTree:l.default.mark(function e(a,t){var r,n,s,c,o;return l.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=a.callback,s=t.call,c=t.put,e.next=4,s(u,{param:r});case 4:if(o=e.sent,"1"!==o.bcjson.flag){e.next=12;break}return e.next=8,c({type:"setClassifyTreeData",payload:o.bcjson.items});case 8:if(!o.bcjson.items[0]){e.next=12;break}return e.next=11,c({type:"getDataSet",payload:{taskId:o.bcjson.items[0].classId,isShare:0}});case 11:n&&n(o);case 12:case"end":return e.stop()}},e)}),operateClassifyTree:l.default.mark(function e(a,t){var r,n,s,c;return l.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=t.call,s=t.put,e.next=4,n(d,{param:r});case 4:if(c=e.sent,"1"!==c.bcjson.flag){e.next=8;break}return e.next=8,s({type:"getClassifyTree",payload:{}});case 8:case"end":return e.stop()}},e)}),deleteClassifyTree:l.default.mark(function e(a,t){var r,n,s,c;return l.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=t.call,s=t.put,e.next=4,n(f,{param:r});case 4:if(c=e.sent,"1"!==c.bcjson.flag){e.next=8;break}return e.next=8,s({type:"getClassifyTree",payload:{}});case 8:case"end":return e.stop()}},e)}),getDataSet:l.default.mark(function e(a,t){var r,n,s,c;return l.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=t.call,s=t.put,e.next=4,n(o,{param:r});case 4:if(c=e.sent,"1"!==c.bcjson.flag){e.next=8;break}return e.next=8,s({type:"saveDataSetData",payload:c.bcjson.items});case 8:case"end":return e.stop()}},e)}),getMetadataTablePerform:l.default.mark(function e(a,t){var r,n,s,c,u,o,d;return l.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=a.callback,s=t.call,c=t.put,e.next=4,s(i,{param:r});case 4:if(u=e.sent,!u||"1"!==u.bcjson.flag){e.next=14;break}return o=u.bcjson.items[0]?u.bcjson.items[0]:{},d=Object.keys(o).map(function(e){return{value:e,type:isNaN(o[e])?"dimension":"measure"}}),e.next=10,c({type:"changeColumn",payload:d});case 10:return e.next=12,c({type:"addMetadataTablePerform",payload:u.bcjson.items});case 12:e.next=16;break;case 14:return e.next=16,c({type:"addMetadataTablePerform",payload:[]});case 16:n&&n();case 17:case"end":return e.stop()}},e)}),operateDataSet:l.default.mark(function e(a,t){var r,n,c,u,o,d;return l.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=t.call,c=t.put,u=t.select,e.next=4,u(function(e){var a=e.dataSet;return a.activeTree});case 4:return o=e.sent,e.next=7,n(p,{param:r});case 7:if(d=e.sent,!d||"1"!==d.bcjson.flag){e.next=13;break}return e.next=11,c({type:"getDataSet",payload:{taskId:o,isShare:0}});case 11:e.next=14;break;case 13:s.default.error(d.bcjson.msg);case 14:case"end":return e.stop()}},e)})},reducers:{setClassifyTreeData:function(e,a){return(0,n.default)({},e,{classifyTreeData:a.payload})},saveDataSetData:function(e,a){return(0,n.default)({},e,{dataSetData:a.payload})},changeColumn:function(e,a){return(0,n.default)({},e,{column:a.payload})},addMetadataTablePerform:function(e,a){return(0,n.default)({},e,{tableData:a.payload})},setActiveTree:function(e,a){return(0,n.default)({},e,{activeTree:a.payload})}}};a.default=y}}]);