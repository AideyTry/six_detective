(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"35+Y":function(e,t,r){"use strict";var a=r("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.getAlerts=i,t.getAlertItems=d,t.getAlertComments=m,t.getAlertLogs=h,t.setAlertComment=y,t.claimAlert=g,t.closeAlert=k,t.getUsers=_,t.default=void 0;var n=a(r("d6i3"));r("miYZ");var s=a(r("tsqr")),u=a(r("p0pE")),l=a(r("1l/V")),c=r("jveU"),o=r("jz0T");function i(e){return p.apply(this,arguments)}function p(){return p=(0,l.default)(n.default.mark(function e(t){var r,a,s,u;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.page,a=void 0===r?1:r,s=t.pageSize,u=void 0===s?10:s,e.abrupt("return",(0,c.request)("get_alert_center_page_list",{data:{pageNumber:a.toString(),pageSize:u.toString()}}));case 2:case"end":return e.stop()}},e)})),p.apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return f=(0,l.default)(n.default.mark(function e(t){var r,a;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.alertId,a=t.alertTypeId,e.abrupt("return",(0,c.request)("get_alert_item_list",{data:{alertTypeId:a,alertId:r}}));case 2:case"end":return e.stop()}},e)})),f.apply(this,arguments)}function m(e){return w.apply(this,arguments)}function w(){return w=(0,l.default)(n.default.mark(function e(t){var r;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.alertId,e.abrupt("return",(0,c.request)("get_alert_comment_list",{data:{alertId:r}}));case 2:case"end":return e.stop()}},e)})),w.apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return v=(0,l.default)(n.default.mark(function e(t){var r,a,s,u,l;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.alertId,a=t.page,s=void 0===a?1:a,u=t.pageSize,l=void 0===u?10:u,e.abrupt("return",(0,c.request)("get_alert_log_list",{data:{alertId:r,pageNumber:s.toString(),pageSize:l.toString()}}));case 2:case"end":return e.stop()}},e)})),v.apply(this,arguments)}function y(e){return x.apply(this,arguments)}function x(){return x=(0,l.default)(n.default.mark(function e(t){var r,a;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.alertId,a=t.content,e.abrupt("return",(0,c.request)("set_alert_comment",{data:{alertId:r,commentContent:a}}));case 2:case"end":return e.stop()}},e)})),x.apply(this,arguments)}function g(e){return I.apply(this,arguments)}function I(){return I=(0,l.default)(n.default.mark(function e(t){var r;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.alertIds,e.abrupt("return",(0,c.request)("set_alert_claim",{data:{alertIds:r.join(",")}}));case 2:case"end":return e.stop()}},e)})),I.apply(this,arguments)}function k(e){return b.apply(this,arguments)}function b(){return b=(0,l.default)(n.default.mark(function e(t){var r;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.alertIds,e.abrupt("return",(0,c.request)("set_alert_close",{data:{alertIds:r.join(",")}}));case 2:case"end":return e.stop()}},e)})),b.apply(this,arguments)}function _(){return S.apply(this,arguments)}function S(){return S=(0,l.default)(n.default.mark(function e(){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)("get_user_list_information",{data:{operType:"queryByAlertRoleId"}}));case 1:case"end":return e.stop()}},e)})),S.apply(this,arguments)}var A={namespace:"alertCenter",state:{alerts:[],alertItems:[],total:0,alertItemsTotal:0,comments:[],alertCommentsTotal:0,logs:[],users:[]},reducers:{save:function(e,t){var r=t.payload,a=r.alerts,n=r.page,s=r.total,l=a.map(function(e){return(0,u.default)({},e,{alertStatus:o.ALERT_STATUS[e.alertStatus]})});return(0,u.default)({},e,{alerts:l,page:n,total:s})},saveAlertItems:function(e,t){var r=t.payload;return(0,u.default)({},e,{alertItems:r.alertItems})},saveComments:function(e,t){var r=t.payload,a=r.comments;return(0,u.default)({},e,{comments:a})},saveLogs:function(e,t){var r=t.payload;return(0,u.default)({},e,{logs:r.logs})},saveUsers:function(e,t){var r=t.payload;return(0,u.default)({},e,{users:r.users})},closeFail:function(e,t){var r=t.payload,a=r.msg;return s.default.warn(a),e},claimOk:function(e,t){var r=t.payload,a=r.alertIds,n=r.userName,l=e.alerts.map(function(e){return a.includes(e.alertId)?(0,u.default)({},e,{userName:n}):e});return s.default.success("claim success"),(0,u.default)({},e,{alerts:l})}},effects:{fetch:n.default.mark(function e(t,r){var a,s,u,l,c,o,p,d,f,m;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,s=r.call,u=r.put,l=a||{},c=l.current,o=l.pageSize,e.next=5,s(i,{current:c,pageSize:o});case 5:if(p=e.sent,d=p.items,f=p.totalCount,m=p.err,!m){e.next=11;break}throw new Error(m);case 11:return e.next=13,u({type:"save",payload:{alerts:d,page:c,total:f}});case 13:case"end":return e.stop()}},e)}),fetchAlertItems:n.default.mark(function e(t,r){var a,s,u,l,c,o,i,p,f;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,s=r.call,u=r.put,l=a||{},c=l.alertTypeId,o=l.alertId,e.next=5,s(d,{alertTypeId:c,alertId:o});case 5:if(i=e.sent,p=i.items,f=i.err,!f){e.next=10;break}throw new Error(f);case 10:return e.next=12,u({type:"saveAlertItems",payload:{alertItems:p}});case 12:case"end":return e.stop()}},e)}),fetchComments:n.default.mark(function e(t,r){var a,s,u,l,c,o,i;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,s=r.call,u=r.put,l=a.alertId,e.next=5,s(m,{alertId:l});case 5:if(c=e.sent,o=c.items,i=c.err,!i){e.next=10;break}throw new Error(i);case 10:return e.next=12,u({type:"saveComments",payload:{comments:o}});case 12:case"end":return e.stop()}},e)}),fetchLogs:n.default.mark(function e(t,r){var a,s,u,l,c,o,i;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,s=r.call,u=r.put,l=a.alertId,e.next=5,s(h,{alertId:l});case 5:if(c=e.sent,o=c.items,i=c.err,!i){e.next=10;break}throw new Error(i);case 10:return e.next=12,u({type:"saveLogs",payload:{logs:o}});case 12:case"end":return e.stop()}},e)}),fetchUsers:n.default.mark(function e(t,r){var a,s,u,l,c,o;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,s=r.call,u=r.put,e.next=4,s(_,a);case 4:if(l=e.sent,c=l.items,o=l.err,!o){e.next=9;break}throw new Error(o);case 9:return e.next=11,u({type:"saveUsers",payload:{users:c}});case 11:case"end":return e.stop()}},e)}),postComment:n.default.mark(function e(t,r){var a,s,u,l,c,o,i;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,s=r.call,u=r.put,l=a.alertId,c=a.content,e.next=5,s(y,{alertId:l,content:c});case 5:if(o=e.sent,i=o.err,!i){e.next=9;break}throw new Error(i);case 9:return e.next=11,u({type:"fetchComments",payload:{alertId:l}});case 11:case"end":return e.stop()}},e)}),claim:n.default.mark(function e(t,r){var a,s,u,l,c,o,i,p;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,s=r.call,u=r.put,l=a||[],c=l.alertIds,e.next=5,s(g,{alertIds:c});case 5:if(o=e.sent,i=o.err,p=o.items,!i&&p&&p.length){e.next=10;break}throw new Error(i);case 10:return e.next=12,u({type:"claimOk",payload:{alertIds:c,userName:p[0].bcLoginUserName}});case 12:case"end":return e.stop()}},e)}),close:n.default.mark(function e(t,r){var a,s,u,l,c,o,i,p,d;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,s=r.call,u=r.put,l=a||[],c=l.alertIds,e.next=5,s(k,{alertIds:c});case 5:if(o=e.sent,i=o.err,p=o.msg,d=o.items,!i){e.next=11;break}throw new Error(i);case 11:if(!p){e.next=16;break}return e.next=14,u({type:"closeFail",payload:{msg:p}});case 14:e.next=19;break;case 16:if(!d){e.next=19;break}return e.next=19,u({type:"fetch"});case 19:case"end":return e.stop()}},e)})}};t.default=A}}]);