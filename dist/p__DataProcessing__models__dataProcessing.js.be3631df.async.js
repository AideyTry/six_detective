(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{vEQl:function(e,a,t){"use strict";var n=t("g09b");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t("p0pE")),s=n(t("d6i3")),c=n(t("ywRk")),o=c.default.getSystemCode,u={namespace:"dataProcessing",state:{data:[],itemData:[]},effects:{getDataProcessing:s.default.mark(function e(a,t){var n,r,c,u,d;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,c=t.call,u=t.put,e.next=4,c(o,{param:n});case 4:if(d=e.sent,"1"!==d.bcjson.flag){e.next=12;break}if(!d.bcjson.items){e.next=9;break}return e.next=9,u({type:"getDatas",payload:d.bcjson});case 9:r(),e.next=13;break;case 12:throw new Error(d.bcjson.msg);case 13:case"end":return e.stop()}},e)}),getDataProcessingItem:s.default.mark(function e(a,t){var n,r,c,u;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=t.call,c=t.put,e.next=4,r(o,{param:n});case 4:if(u=e.sent,"1"!==u.bcjson.flag){e.next=11;break}if(!u.bcjson.items){e.next=9;break}return e.next=9,c({type:"getItemDatas",payload:u.bcjson});case 9:e.next=12;break;case 11:throw new Error(u.bcjson.msg);case 12:case"end":return e.stop()}},e)})},reducers:{getDatas:function(e,a){return(0,r.default)({},e,{data:a.payload})},getItemDatas:function(e,a){return(0,r.default)({},e,{itemData:a.payload})}}},d=u;a.default=d}}]);