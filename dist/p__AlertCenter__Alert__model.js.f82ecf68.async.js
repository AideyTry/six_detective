(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"35+Y":function(e,t,r){"use strict";var a=r("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.getAlerts=i,t.getAlertItems=o,t.claimAlert=f,t.default=void 0;var n=a(r("d6i3"));r("miYZ");var u=a(r("tsqr")),l=a(r("p0pE")),s=a(r("1l/V")),c=r("jveU");function i(e){return p.apply(this,arguments)}function p(){return p=(0,s.default)(n.default.mark(function e(t){var r,a,u,l;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.page,a=void 0===r?1:r,u=t.pageSize,l=void 0===u?10:u,e.abrupt("return",(0,c.request)("get_alert_center_page_list",{data:{pageNumber:a.toString(),pageSize:l.toString()}}));case 2:case"end":return e.stop()}},e)})),p.apply(this,arguments)}function o(e){return d.apply(this,arguments)}function d(){return d=(0,s.default)(n.default.mark(function e(t){var r;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.alertType,e.abrupt("return",(0,c.request)("get_alert_item_list",{data:{mappingId:r}}));case 2:case"end":return e.stop()}},e)})),d.apply(this,arguments)}function f(e){return w.apply(this,arguments)}function w(){return w=(0,s.default)(n.default.mark(function e(t){var r;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.alertIds,e.abrupt("return",(0,c.request)("set_alert_claim",{data:{alertIds:r.join(",")}}));case 2:case"end":return e.stop()}},e)})),w.apply(this,arguments)}var m={namespace:"alertCenter",state:{alerts:[],alertItems:[],total:0,alertOwner:""},reducers:{save:function(e,t){var r=t.payload,a=r.alerts,n=r.page,u=r.total;return(0,l.default)({},e,{alerts:a,page:n,total:u})},claimOk:function(e,t){var r=t.payload,a=localStorage.getItem("loginName")||"",n=r.alertIds,s=e.alerts.map(function(e){return n.includes(e.alertId)?(0,l.default)({},e,{owner:a}):e});return u.default.success("claim success"),(0,l.default)({},e,{alerts:s})}},effects:{fetch:n.default.mark(function e(t,r){var a,u,l,s,c,p,o,d,f,w;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,u=r.call,l=r.put,s=a||{},c=s.current,p=s.pageSize,e.next=5,u(i,{current:c,pageSize:p});case 5:if(o=e.sent,d=o.items,f=o.totalCount,w=o.err,!w){e.next=11;break}throw new Error(w);case 11:return e.next=13,l({type:"save",payload:{alerts:d,page:c,total:f}});case 13:case"end":return e.stop()}},e)}),fetchAlertItems:n.default.mark(function e(t,r){var a,u,l,s,c,i,p,d;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,u=r.call,l=r.put,s=a||{},c=s.alertType,e.next=5,u(o,{alertType:c});case 5:if(i=e.sent,p=i.items,d=i.err,!d){e.next=10;break}throw new Error(d);case 10:return e.next=12,l({type:"save",payload:{alertItems:p}});case 12:case"end":return e.stop()}},e)}),claim:n.default.mark(function e(t,r){var a,u,l,s,c,i,p;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,u=r.call,l=r.put,s=a||[],c=s.alertIds,e.next=5,u(f,{alertIds:c});case 5:if(i=e.sent,p=i.err,!p){e.next=9;break}throw new Error(p);case 9:return e.next=11,l({type:"claimOk",payload:{alertIds:c}});case 11:case"end":return e.stop()}},e)})}};t.default=m}}]);