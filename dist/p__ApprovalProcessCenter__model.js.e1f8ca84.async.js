(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{dQiY:function(e,t,a){"use strict";var r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.getApprovalTaskList=p,t.getTaskDetail=l,t.claimTask=f,t.setTaskSave=w,t.setTaskSubmit=v,t.approveAndReject=y,t.setTaskWithdraw=g,t.setTaskAssign=_,t.getTaskGroup=I,t.getUserList=S,t.getUserListByUserId=q,t.default=void 0,a("miYZ");var s=r(a("tsqr")),n=r(a("d6i3")),u=r(a("p0pE")),c=r(a("1l/V")),i=a("jveU");function p(e){return o.apply(this,arguments)}function o(){return o=(0,c.default)(n.default.mark(function e(t){var a,r,s,u,c,p;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.page,r=void 0===a?1:a,s=t.pageSize,u=void 0===s?10:s,c=t.taskCode,p=t.type,e.abrupt("return",(0,i.request)("get_approval_task_list_page",{data:{pageNumber:r.toString(),pageSize:u.toString(),taskCode:c?c.toString():"",type:p}}));case 2:case"end":return e.stop()}},e)})),o.apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return d=(0,c.default)(n.default.mark(function e(t){var a;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.taskCode,e.abrupt("return",(0,i.request)("get_approval_task_detail",{data:{taskCode:a.toString()}}));case 2:case"end":return e.stop()}},e)})),d.apply(this,arguments)}function f(e){return k.apply(this,arguments)}function k(){return k=(0,c.default)(n.default.mark(function e(t){var a;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.taskCode,e.abrupt("return",(0,i.request)("set_task_claim",{data:{taskCode:a.join(",")}}));case 2:case"end":return e.stop()}},e)})),k.apply(this,arguments)}function w(e){return h.apply(this,arguments)}function h(){return h=(0,c.default)(n.default.mark(function e(t){var a,r;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.taskCode,r=t.epCname,e.abrupt("return",(0,i.request)("set_approval_task_data_save",{data:{taskCode:a.toString(),epCname:r}}));case 2:case"end":return e.stop()}},e)})),h.apply(this,arguments)}function v(e){return m.apply(this,arguments)}function m(){return m=(0,c.default)(n.default.mark(function e(t){var a,r,s;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.taskCode,r=t.userId,s=t.epCname,e.abrupt("return",(0,i.request)("set_task_submit",{data:{taskCode:a.toString(),userId:r.toString(),epCname:s}}));case 2:case"end":return e.stop()}},e)})),m.apply(this,arguments)}function y(e){return C.apply(this,arguments)}function C(){return C=(0,c.default)(n.default.mark(function e(t){var a,r,s,u;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.taskCode,r=t.userId,s=t.type,u=t.epCname,e.abrupt("return",(0,i.request)("set_task_approve_and_reject",{data:{taskCode:a.toString(),userId:r.toString(),type:s,epCname:u}}));case 2:case"end":return e.stop()}},e)})),C.apply(this,arguments)}function g(e){return x.apply(this,arguments)}function x(){return x=(0,c.default)(n.default.mark(function e(t){var a,r;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.taskCode,r=t.comment,e.abrupt("return",(0,i.request)("set_task_withdraw",{data:{taskCode:a.toString(),comment:r}}));case 2:case"end":return e.stop()}},e)})),x.apply(this,arguments)}function _(e){return b.apply(this,arguments)}function b(){return b=(0,c.default)(n.default.mark(function e(t){var a,r;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.taskCode,r=t.userId,e.abrupt("return",(0,i.request)("set_task_assign",{data:{taskCode:a.toString(),userId:r.toString()}}));case 2:case"end":return e.stop()}},e)})),b.apply(this,arguments)}function I(e){return T.apply(this,arguments)}function T(){return T=(0,c.default)(n.default.mark(function e(t){var a;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.taskCode,e.abrupt("return",(0,i.request)("get_approval_task_node_group",{data:{taskCode:a.toString()}}));case 2:case"end":return e.stop()}},e)})),T.apply(this,arguments)}function S(e){return L.apply(this,arguments)}function L(){return L=(0,c.default)(n.default.mark(function e(t){var a,r;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.operType,r=t.groupId,e.abrupt("return",(0,i.request)("get_user_list_information",{data:{operType:a,groupId:r}}));case 2:case"end":return e.stop()}},e)})),L.apply(this,arguments)}function q(){return G.apply(this,arguments)}function G(){return G=(0,c.default)(n.default.mark(function e(){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)("get_user_list_by_user_id",{data:{}}));case 1:case"end":return e.stop()}},e)})),G.apply(this,arguments)}var U={namespace:"approvalCenter",state:{tasks:[],alertItems:[],detailItems:{},total:0,alertOwner:"",userList:[],submitRadioList:[],taskGroup:""},reducers:{save:function(e,t){var a=t.payload,r=a.tasks,s=a.page,n=a.total;return(0,u.default)({},e,{tasks:r,page:s,total:n})},saveDetail:function(e,t){var a=t.payload,r=a.detailItems;return(0,u.default)({},e,{detailItems:r})},saveTaskGroup:function(e,t){var a=t.payload,r=a.taskGroup;return(0,u.default)({},e,{taskGroup:r})},saveUserList:function(e,t){var a=t.payload,r=a.userList,s=r.map(function(e){return{label:e.userName,value:e.userId}});return(0,u.default)({},e,{userList:r,submitRadioList:s})}},effects:{fetch:n.default.mark(function e(t,a){var r,s,u,c,i,o,l,d,f,k,w,h;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,s=a.call,u=a.put,c=r||{},i=c.page,o=c.pageSize,l=c.taskCode,d=c.type,e.next=5,s(p,{page:i,pageSize:o,taskCode:l,type:d});case 5:if(f=e.sent,k=f.items,w=f.totalCount,h=f.err,!h){e.next=11;break}throw new Error(h);case 11:return e.next=13,u({type:"save",payload:{tasks:k,page:i,total:w}});case 13:case"end":return e.stop()}},e)}),fetchTaskDetail:n.default.mark(function e(t,a){var r,s,u,c,i,p,o,d;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,s=a.call,u=a.put,c=r||{},i=c.taskCode,e.next=5,s(l,{taskCode:i});case 5:if(p=e.sent,o=p.items,d=p.err,!d){e.next=10;break}throw new Error(d);case 10:return e.next=12,u({type:"saveDetail",payload:{detailItems:o}});case 12:case"end":return e.stop()}},e)}),claim:n.default.mark(function e(t,a){var r,u,c,i,p,o,l;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,u=t.callback,c=a.call,i=r||[],p=i.taskCode,e.next=5,c(f,{taskCode:p});case 5:o=e.sent,l=o.err,l?s.default.error("claim failure"):(s.default.success("claim success"),u());case 8:case"end":return e.stop()}},e)}),saveTask:n.default.mark(function e(t,a){var r,u,c,i,p,o,l;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,u=a.call,c=r||[],i=c.taskCode,p=c.epCname,e.next=5,u(w,{taskCode:i,epCname:p});case 5:o=e.sent,l=o.err,l?s.default.error("save failure"):s.default.success("save success");case 8:case"end":return e.stop()}},e)}),submitTask:n.default.mark(function e(t,a){var r,u,c,i,p,o,l,d;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,u=a.call,c=r||[],i=c.taskCode,p=c.userId,o=c.epCname,e.next=5,u(v,{taskCode:i,userId:p,epCname:o});case 5:l=e.sent,d=l.err,d?s.default.error("submit failure"):s.default.success("submit success");case 8:case"end":return e.stop()}},e)}),approveAndReject:n.default.mark(function e(t,a){var r,u,c,i,p,o,l,d,f,k;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,u=t.callback,c=a.call,i=r||[],p=i.taskCode,o=i.userId,l=i.type,d=i.epCname,e.next=5,c(y,{taskCode:p,userId:o,type:l,epCname:d});case 5:f=e.sent,k=f.err,k?s.default.error("failure"):(s.default.success("success"),u());case 8:case"end":return e.stop()}},e)}),setTaskWithdraw:n.default.mark(function e(t,a){var r,u,c,i,p,o,l,d;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,u=t.callback,c=a.call,i=r||[],p=i.taskCode,o=i.comment,e.next=5,c(g,{taskCode:p,comment:o});case 5:l=e.sent,d=l.err,d?s.default.error("Withdraw failure"):(s.default.success("Withdraw success"),u());case 8:case"end":return e.stop()}},e)}),setTaskAssign:n.default.mark(function e(t,a){var r,u,c,i,p,o,l;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,u=a.call,c=r||[],i=c.taskCode,p=c.userId,e.next=5,u(_,{taskCode:i,userId:p});case 5:o=e.sent,l=o.err,l?s.default.error("Assign failure"):s.default.success("Assign success");case 8:case"end":return e.stop()}},e)}),featchTaskGroup:n.default.mark(function e(t,a){var r,u,c,i,p,o,l,d;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,u=a.call,c=a.put,i=r||[],p=i.taskCode,e.next=5,u(I,{taskCode:p});case 5:return o=e.sent,l=o.items,d=o.err,d&&s.default.error("getTaskGroup failure"),e.next=11,c({type:"saveTaskGroup",payload:{taskGroup:l}});case 11:case"end":return e.stop()}},e)}),fetchUserList:n.default.mark(function e(t,a){var r,s,u,c,i,p,o,l,d;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,s=a.call,u=a.put,c=r||[],i=c.operType,p=c.groupId,e.next=5,s(S,{operType:i,groupId:p});case 5:if(o=e.sent,l=o.items,d=o.err,!d){e.next=10;break}return e.abrupt("return");case 10:return e.next=12,u({type:"saveUserList",payload:{userList:l}});case 12:case"end":return e.stop()}},e)}),getUserListByUserId:n.default.mark(function e(t,a){var r,s,u,c;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.payload,r=a.call,e.next=4,r(q);case 4:s=e.sent,u=s.items,c=s.err,c||console.log("items---\x3e",u);case 8:case"end":return e.stop()}},e)})}};t.default=U}}]);