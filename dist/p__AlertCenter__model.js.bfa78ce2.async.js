(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{kE4S:function(e,t,r){"use strict";var a=r("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.getAlerts=i,t.getAlertItems=f,t.getAlertComments=w,t.getAlertLogs=h,t.setAlertComment=y,t.claimAlert=I,t.getAssignUsers=_,t.assignAlertItem=b,t.closeAlert=C,t.exportAlert=E,t.default=void 0,r("miYZ");var n=a(r("tsqr")),s=a(r("Y/ft")),u=a(r("d6i3")),l=a(r("p0pE")),c=a(r("1l/V")),o=r("jveU");function i(){return p.apply(this,arguments)}function p(){return p=(0,c.default)(u.default.mark(function e(){var t,r,a,n,s,l,c,i,p,f=arguments;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=f.length>0&&void 0!==f[0]?f[0]:{},r=t.page,a=void 0===r?1:r,n=t.pageSize,s=void 0===n?10:n,l=t.sort,c=t.currentColumn,i=t.conditions,p=t.dataTable,e.abrupt("return",(0,o.request)("get_table_page_list",{data:{sort:l,currentColumn:c,conditions:i&&JSON.stringify(i),pageNumber:a.toString(),pageSize:s.toString(),dataTable:p}}));case 2:case"end":return e.stop()}},e)})),p.apply(this,arguments)}function f(e){return d.apply(this,arguments)}function d(){return d=(0,c.default)(u.default.mark(function e(t){var r,a;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.alertId,a=t.alertTypeId,e.abrupt("return",(0,o.request)("get_alert_item_list",{data:{alertTypeId:a,alertId:r}}));case 2:case"end":return e.stop()}},e)})),d.apply(this,arguments)}function w(e){return m.apply(this,arguments)}function m(){return m=(0,c.default)(u.default.mark(function e(t){var r;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.alertId,e.abrupt("return",(0,o.request)("get_alert_comment_list",{data:{alertId:r}}));case 2:case"end":return e.stop()}},e)})),m.apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return v=(0,c.default)(u.default.mark(function e(t){var r,a,n,s,l;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.alertId,a=t.page,n=void 0===a?1:a,s=t.pageSize,l=void 0===s?10:s,e.abrupt("return",(0,o.request)("get_alert_log_list",{data:{alertId:r,pageNumber:n.toString(),pageSize:l.toString()}}));case 2:case"end":return e.stop()}},e)})),v.apply(this,arguments)}function y(e){return x.apply(this,arguments)}function x(){return x=(0,c.default)(u.default.mark(function e(t){var r,a,n,s;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.alertId,a=t.content,n=t.fileList,s=void 0===n?[]:n,e.abrupt("return",(0,o.request)("set_alert_comment",{data:{alertId:r,commentContent:a,fileList:s.toString()}}));case 2:case"end":return e.stop()}},e)})),x.apply(this,arguments)}function I(e){return g.apply(this,arguments)}function g(){return g=(0,c.default)(u.default.mark(function e(t){var r,a;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.alertIds,a=t.isCoverClaim,e.abrupt("return",(0,o.request)("set_alert_claim",{data:{alertIds:r.join(","),isCoverClaim:a.toString()}}));case 2:case"end":return e.stop()}},e)})),g.apply(this,arguments)}function _(e){return k.apply(this,arguments)}function k(){return k=(0,c.default)(u.default.mark(function e(t){var r;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.alertItemIds,e.abrupt("return",(0,o.request)("get_user_list_by_process_instance_step",{data:{alertItemIds:r.join(",")}}));case 2:case"end":return e.stop()}},e)})),k.apply(this,arguments)}function b(e){return T.apply(this,arguments)}function T(){return T=(0,c.default)(u.default.mark(function e(t){var r,a;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.taskIds,a=t.userId,e.abrupt("return",(0,o.request)("set_alert_item_owner",{data:{taskIds:r.join(","),userId:a}}));case 2:case"end":return e.stop()}},e)})),T.apply(this,arguments)}function C(e){return A.apply(this,arguments)}function A(){return A=(0,c.default)(u.default.mark(function e(t){var r,a;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.alertIds,a=void 0===r?[]:r,e.abrupt("return",(0,o.request)("set_alert_close",{data:{alertIds:a.join(",")}}));case 2:case"end":return e.stop()}},e)})),A.apply(this,arguments)}function E(e){return S.apply(this,arguments)}function S(){return S=(0,c.default)(u.default.mark(function e(t){var r;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.fileType,e.abrupt("return",(0,o.request)("set_data_file_export",{data:{apiName:"bayconnect.superlop.get_alert_center_page_list",apiVersion:"v2.0",fileType:r}}));case 2:case"end":return e.stop()}},e)})),S.apply(this,arguments)}var L={namespace:"alertCenter",state:{infos:[],infoTotal:0,alerts:[],alertTotal:0,alertItems:[],comments:[],logs:[],users:[],claimInfos:[]},reducers:{save:function(e,t){var r=t.payload,a=r.alerts,n=r.alertTotal;return(0,l.default)({},e,{alerts:a,alertTotal:n})},saveInfos:function(e,t){var r=t.payload,a=r.infos,n=r.infoTotal;return(0,l.default)({},e,{infos:a,infoTotal:n})},saveAlertItems:function(e,t){var r=t.payload;return(0,l.default)({},e,{alertItems:r.alertItems})},saveComments:function(e,t){var r=t.payload,a=r.comments;return(0,l.default)({},e,{comments:a})},saveLogs:function(e,t){var r=t.payload;return(0,l.default)({},e,{logs:r.logs})},saveUsers:function(e,t){var r=t.payload;return(0,l.default)({},e,{users:r.users})},reclaim:function(e,t){var r=t.payload;return(0,l.default)({},e,{claimInfos:r.claimInfos})}},effects:{fetch:u.default.mark(function e(t,r){var a,n,s,c,o,p,f;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,n=r.call,s=r.put,e.next=4,n(i,(0,l.default)({},a,{dataTable:"SLOP_BIZ.V_ALERT_CENTER"}));case 4:if(c=e.sent,o=c.items,p=c.totalCount,f=c.err,!f){e.next=10;break}throw new Error(f);case 10:return e.next=12,s({type:"save",payload:{alerts:o,alertTotal:p}});case 12:case"end":return e.stop()}},e)}),fetchInfos:u.default.mark(function e(t,r){var a,n,s,c,o,p,f;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,n=r.call,s=r.put,e.next=4,n(i,(0,l.default)({},a,{dataTable:"SLOP_BIZ.V_INFO"}));case 4:if(c=e.sent,o=c.items,p=c.totalCount,f=c.err,!f){e.next=10;break}throw new Error(f);case 10:return e.next=12,s({type:"saveInfos",payload:{infos:o,infoTotal:p}});case 12:case"end":return e.stop()}},e)}),fetchAlertItems:u.default.mark(function e(t,r){var a,n,s,l,c,o;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,n=r.call,s=r.put,e.next=4,n(f,a);case 4:if(l=e.sent,c=l.items,o=l.err,!o){e.next=9;break}throw new Error(o);case 9:return e.next=11,s({type:"saveAlertItems",payload:{alertItems:c}});case 11:case"end":return e.stop()}},e)}),fetchComments:u.default.mark(function e(t,r){var a,n,s,l,c,o,i;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,n=r.call,s=r.put,l=a.alertId,e.next=5,n(w,{alertId:l});case 5:if(c=e.sent,o=c.items,i=c.err,!i){e.next=10;break}throw new Error(i);case 10:return e.next=12,s({type:"saveComments",payload:{comments:o}});case 12:case"end":return e.stop()}},e)}),fetchLogs:u.default.mark(function e(t,r){var a,n,s,l,c,o,i;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,n=r.call,s=r.put,l=a.alertId,e.next=5,n(h,{alertId:l});case 5:if(c=e.sent,o=c.items,i=c.err,!i){e.next=10;break}throw new Error(i);case 10:return e.next=12,s({type:"saveLogs",payload:{logs:o}});case 12:case"end":return e.stop()}},e)}),fetchAssignUsers:u.default.mark(function e(t,r){var a,n,s,l,c,o;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,n=r.call,s=r.put,e.next=4,n(_,a);case 4:if(l=e.sent,c=l.items,o=l.err,!o){e.next=9;break}throw new Error(o);case 9:return e.next=11,s({type:"saveUsers",payload:{users:c}});case 11:case"end":return e.stop()}},e)}),assignTask:u.default.mark(function e(t,r){var a,l,c,o,i,p,f,d,w;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,l=r.call,c=r.put,o=a.alertId,i=a.alertTypeId,p=(0,s.default)(a,["alertId","alertTypeId"]),e.next=5,l(b,p);case 5:if(f=e.sent,d=f.msg,w=f.err,!w){e.next=10;break}throw new Error(w);case 10:return e.next=12,c({type:"fetch"});case 12:return e.next=14,c({type:"fetchAlertItems",payload:{alertTypeId:i,alertId:o}});case 14:n.default.success(d);case 15:case"end":return e.stop()}},e)}),postComment:u.default.mark(function e(t,r){var a,n,s,l,c,o,i,p;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,n=r.call,s=r.put,l=a.alertId,c=a.content,o=a.fileList,e.next=5,n(y,{alertId:l,content:c,fileList:o});case 5:if(i=e.sent,p=i.err,!p){e.next=9;break}throw new Error(p);case 9:return e.next=11,s({type:"fetchComments",payload:{alertId:l}});case 11:return e.next=13,s({type:"fetchLogs",payload:{alertId:l}});case 13:case"end":return e.stop()}},e)}),claim:u.default.mark(function e(t,r){var a,s,l,c,o,i,p;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,s=r.call,l=r.put,e.next=4,s(I,a);case 4:if(c=e.sent,o=c.err,i=c.msg,p=c.items,!o){e.next=10;break}throw new Error(o);case 10:if(!(p&&p.length>0)){e.next=15;break}return e.next=13,l({type:"reclaim",payload:{claimInfos:p}});case 13:e.next=18;break;case 15:return e.next=17,l({type:"fetch"});case 17:n.default.success(i);case 18:case"end":return e.stop()}},e)}),close:u.default.mark(function e(t,r){var a,n,s,l,c;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,n=r.call,s=r.put,e.next=4,n(C,a);case 4:if(l=e.sent,c=l.err,!c){e.next=8;break}throw new Error(c);case 8:return e.next=10,s({type:"fetch"});case 10:case"end":return e.stop()}},e)}),export:u.default.mark(function e(t,r){var a,n,s,l;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,n=r.call,e.next=4,n(E,a);case 4:if(s=e.sent,l=s.err,!l){e.next=8;break}throw new Error(l);case 8:case"end":return e.stop()}},e)})}};t.default=L}}]);