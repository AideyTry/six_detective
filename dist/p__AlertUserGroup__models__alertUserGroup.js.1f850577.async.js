(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"5EuZ":function(e,a,t){"use strict";var r=t("g09b");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t("p0pE")),s=r(t("d6i3")),u=r(t("ywRk")),c=u.default.getAlertUserGroup,l=u.default.newAlertUser,p=u.default.updateAlertUser,d={namespace:"alertUserGroup",state:{data:[],saveUser:{},updateData:{}},effects:{getAlertUserGroup:s.default.mark(function e(a,t){var r,n,u,l;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=t.call,u=t.put,e.next=4,n(c,{param:r});case 4:if(l=e.sent,"1"!==l.bcjson.flag){e.next=9;break}if(!l.bcjson.items){e.next=9;break}return e.next=9,u({type:"getDatas",payload:l.bcjson});case 9:case"end":return e.stop()}},e)}),newAlertUser:s.default.mark(function e(a,t){var r,n,u,c,p;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=a.callback,u=t.call,c=t.put,e.next=4,u(l,{param:r});case 4:if(p=e.sent,"1"!==p.bcjson.flag){e.next=9;break}return e.next=8,c({type:"save",payload:p.bcjson.items});case 8:n();case 9:case"end":return e.stop()}},e)}),updateUserAlert:s.default.mark(function e(a,t){var r,n,u,c,l;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=a.callback,u=t.call,c=t.put,e.next=4,u(p,{param:r});case 4:if(l=e.sent,"1"!==l.bcjson.flag&&l.bcjson.flag){e.next=9;break}return e.next=8,c({type:"update",payload:l.bcjson.items});case 8:n();case 9:case"end":return e.stop()}},e)})},reducers:{getDatas:function(e,a){return(0,n.default)({},e,{data:a.payload})},save:function(e,a){return(0,n.default)({},e,{saveUser:a.payload})},update:function(e,a){return(0,n.default)({},e,{updateData:a.payload})}}},o=d;a.default=o}}]);