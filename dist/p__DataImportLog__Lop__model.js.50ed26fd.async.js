(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{vAYa:function(e,t,r){"use strict";var a=r("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.getLogs=c,t.postManual=d,t.postAuto=w,t.getReportUrl=v,t.default=t.pageSelector=void 0;var n=a(r("Y/ft"));r("miYZ");var u=a(r("tsqr")),o=a(r("d6i3")),p=a(r("p0pE")),s=a(r("1l/V")),l=r("jveU");function c(){return i.apply(this,arguments)}function i(){return i=(0,s.default)(o.default.mark(function e(){var t,r,a,u,s,c,i=arguments;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:{},r=t.page,a=void 0===r?1:r,u=t.pageSize,s=void 0===u?10:u,c=(0,n.default)(t,["page","pageSize"]),e.abrupt("return",(0,l.request)("get_lop_proc_progress_list_page",{data:(0,p.default)({pageNumber:a.toString(),pageSize:s.toString()},c)}));case 3:case"end":return e.stop()}},e)})),i.apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return f=(0,s.default)(o.default.mark(function e(t){return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("set_lop_report_manual_import",{data:t}));case 1:case"end":return e.stop()}},e)})),f.apply(this,arguments)}function w(e){return h.apply(this,arguments)}function h(){return h=(0,s.default)(o.default.mark(function e(t){return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("set_lop_report_auto_import",{data:t}));case 1:case"end":return e.stop()}},e)})),h.apply(this,arguments)}function v(e){return y.apply(this,arguments)}function y(){return y=(0,s.default)(o.default.mark(function e(t){var r;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.lopImpId,e.abrupt("return",(0,l.request)("set_lop_report_download",{data:{lopImpId:r.toString()}}));case 2:case"end":return e.stop()}},e)})),y.apply(this,arguments)}var g=function(e){var t=e.lop;return t.page};t.pageSelector=g;var x={namespace:"lop",state:{logs:[],total:0,reportUrl:""},reducers:{save:function(e,t){var r=t.payload,a=r.logs,n=r.total;return(0,p.default)({},e,{logs:a,total:n})},saveReportUrl:function(e,t){var r=t.payload,a=r.reportUrl;return(0,p.default)({},e,{reportUrl:a})}},effects:{fetch:o.default.mark(function e(t,r){var a,n,u,p,s,l,i;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,n=r.call,u=r.put,e.next=4,n(c,a);case 4:if(p=e.sent,s=p.items,l=p.totalCount,i=p.err,!i){e.next=10;break}throw new Error(i);case 10:return e.next=12,u({type:"save",payload:{logs:s,total:l}});case 12:case"end":return e.stop()}},e)}),importByManual:o.default.mark(function e(t,r){var a,n,p,s,l;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,n=r.call,p=r.put,e.next=4,n(d,a);case 4:if(s=e.sent,l=s.err,!l){e.next=8;break}throw new Error(l);case 8:return u.default.success("upload success"),e.next=11,p({type:"reload"});case 11:case"end":return e.stop()}},e)}),importByAuto:o.default.mark(function e(t,r){var a,n,p,s,l;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,n=r.call,p=r.put,e.next=4,n(w,a);case 4:if(s=e.sent,l=s.err,!l){e.next=8;break}throw new Error(l);case 8:return u.default.success("upload success"),e.next=11,p({type:"reload"});case 11:case"end":return e.stop()}},e)}),fetchReportUrl:o.default.mark(function e(t,r){var a,n,u,p,s,l;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,n=r.call,u=r.put,console.log(a),e.next=5,n(v,a);case 5:if(p=e.sent,s=p.err,l=p.items,!s){e.next=10;break}throw new Error(s);case 10:return e.next=12,u({type:"saveReportUrl",payload:{reportUrl:l}});case 12:case"end":return e.stop()}},e)}),reload:o.default.mark(function e(t,r){var a,n;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,n=r.put,e.next=4,n({type:"fetch",payload:a});case 4:case"end":return e.stop()}},e)})}};t.default=x}}]);