(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{XpTT:function(e,a,t){"use strict";var n=t("g09b");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t("p0pE"));t("miYZ");var l=n(t("tsqr")),s=n(t("d6i3")),c=n(t("ywRk")),o=c.default.getModelList,d=c.default.getModelImage,u=c.default.createModel,p=c.default.deleteModel,f=c.default.importModel,i=c.default.exportModel,m=c.default.deployModel,b={namespace:"approvalDesign",state:{data:[],modelImage:"",chooseModelId:""},effects:{modelListDatas:s.default.mark(function e(a,t){var n,r,l,c,d,u;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,l=a.callback2,c=t.call,d=t.put,e.next=4,c(o,{param:n});case 4:if(u=e.sent,"1"!==u.bcjson.flag){e.next=11;break}if(!u.bcjson.items){e.next=11;break}return e.next=9,d({type:"setDatas",payload:u.bcjson.items});case 9:r(u.bcjson.items&&u.bcjson.items[0]&&u.bcjson.items[0].id),l&&l();case 11:case"end":return e.stop()}},e)}),modelImageDatas:s.default.mark(function e(a,t){var n,r,l,c;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=t.call,l=t.put,e.next=4,r(d,{param:n});case 4:if(c=e.sent,"1"!==c.bcjson.flag){e.next=11;break}if(!c.bcjson.items){e.next=9;break}return e.next=9,l({type:"setImageDatas",payload:c.bcjson.items});case 9:e.next=13;break;case 11:return e.next=13,l({type:"setImageDatas",payload:""});case 13:case"end":return e.stop()}},e)}),createModel:s.default.mark(function e(a,t){var n,r,c,o;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,c=t.call,e.next=4,c(u,{param:n});case 4:o=e.sent,"1"===o.bcjson.flag?(l.default.success("\u65b0\u589e\u6210\u529f"),r("1","10")):l.default.error("\u65b0\u589e\u5931\u8d25");case 6:case"end":return e.stop()}},e)}),deleteModel:s.default.mark(function e(a,t){var n,r,c,o;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,c=t.call,e.next=4,c(p,{param:n});case 4:o=e.sent,"1"===o.bcjson.flag?(l.default.success("\u5220\u9664\u6210\u529f"),r("1","10")):l.default.error("\u5220\u9664\u5931\u8d25");case 6:case"end":return e.stop()}},e)}),importModel:s.default.mark(function e(a,t){var n,r,c,o;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,c=t.call,e.next=4,c(f,{param:n});case 4:o=e.sent,"1"===o.bcjson.flag?(l.default.success("\u5bfc\u5165\u6210\u529f"),r("1","10")):l.default.error("\u5bfc\u5165\u5931\u8d25");case 6:case"end":return e.stop()}},e)}),exportModel:s.default.mark(function e(a,t){var n,r,l,c;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,l=t.call,e.next=4,l(i,{param:n});case 4:c=e.sent,"1"===c.bcjson.flag&&r(c.bcjson.items);case 6:case"end":return e.stop()}},e)}),deployModel:s.default.mark(function e(a,t){var n,r,c;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=t.call,e.next=4,r(m,{param:n});case 4:c=e.sent,"1"===c.bcjson.flag?l.default.success("\u90e8\u7f72\u6210\u529f"):l.default.error("\u90e8\u7f72\u5931\u8d25");case 6:case"end":return e.stop()}},e)})},reducers:{setDatas:function(e,a){return(0,r.default)({},e,{data:a.payload,chooseModelId:a.payload&&a.payload[0]&&a.payload[0].id})},changeModelId:function(e,a){return(0,r.default)({},e,{chooseModelId:a.payload.chooseModelId})},setImageDatas:function(e,a){return(0,r.default)({},e,{modelImage:a.payload})}}};a.default=b}}]);