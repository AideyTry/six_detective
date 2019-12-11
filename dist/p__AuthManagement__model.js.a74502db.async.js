(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{ErrW:function(e,t,r){"use strict";var a=r("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r("d6i3")),u=a(r("p0pE")),s=a(r("jveU")),l=r("+n12"),c={namespace:"auth",state:{orgs:[],employees:[],departments:[],roleGroups:[],publicMenus:[],checkedRoleMenus:[]},reducers:{getOrgs:function(e,t){var r=t.payload;return(0,u.default)({},e,{orgs:(0,l.formatTree)(r)})},getDepartments:function(e,t){var r=t.payload;return(0,u.default)({},e,{departments:r})},getEmployees:function(e,t){var r=t.payload;return(0,u.default)({},e,{employees:r})},getRoleGroups:function(e,t){var r=t.payload;return(0,u.default)({},e,{roleGroups:r})},getPublicMenus:function(e,t){var r=t.payload;return(0,u.default)({},e,{publicMenus:(0,l.formatTree)(r,"menuId","parentMenuId")})},getCheckedRoleMenus:function(e,t){var r=t.payload;return(0,u.default)({},e,{checkedRoleMenus:r.map(function(e){return e.menuId})})}},effects:{queryRoleGroups:n.default.mark(function e(t,r){var a,u,l,c,p;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.params,u=r.call,l=r.put,e.next=4,u((0,s.default)("get_role_group_query"),a);case 4:return c=e.sent,p=c.items,e.next=8,l({type:"getRoleGroups",payload:p});case 8:case"end":return e.stop()}},e)}),queryPublicMenus:n.default.mark(function e(t,r){var a,u,l,c,p;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.params,u=r.call,l=r.put,e.next=4,u((0,s.default)("get_public_menu_info"),a);case 4:return c=e.sent,p=c.items,e.next=8,l({type:"getPublicMenus",payload:p});case 8:case"end":return e.stop()}},e)}),setRoleMenu:n.default.mark(function e(t,r){var a,u,l,c;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.params,u=r.call,e.next=4,u((0,s.default)("set_role_menu_update"),a);case 4:l=e.sent,c=l.items,console.log(c);case 7:case"end":return e.stop()}},e)}),queryRoleMenus:n.default.mark(function e(t,r){var a,u,l,c;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=r.call,u=r.put,e.next=3,a((0,s.default)("get_acl_menu"),t.params);case 3:return l=e.sent,c=l.items,e.next=7,u({type:"getRoleMenus",payload:c});case 7:case"end":return e.stop()}},e)}),queryRoleMenusById:n.default.mark(function e(t,r){var a,u,l,c;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=r.call,u=r.put,e.next=3,a((0,s.default)("get_role_menu_info"),t.params);case 3:return l=e.sent,c=l.items,e.next=7,u({type:"getCheckedRoleMenus",payload:c});case 7:case"end":return e.stop()}},e)}),queryOrgs:n.default.mark(function e(t,r){var a,u,l,c;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=r.call,u=r.put,e.next=3,a((0,s.default)("get_departments_info"),t.params);case 3:if(l=e.sent,c=l.items,!(c&&c.length>0)){e.next=8;break}return e.next=8,u({type:"getOrgs",payload:c});case 8:case"end":return e.stop()}},e)}),queryDepartments:n.default.mark(function e(t,r){var a,u,l,c;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=r.call,u=r.put,e.next=3,a((0,s.default)("get_department"),t.params);case 3:if(l=e.sent,c=l.items,!(c.length>0)){e.next=9;break}return e.next=9,u({type:"getDepartments",payload:c[0].menu||[]});case 9:case"end":return e.stop()}},e)}),addDepartment:n.default.mark(function e(t,r){var a,u,l;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=r.call,e.next=3,a((0,s.default)("set_department_add"),t.params);case 3:if(u=e.sent,l=u.msg,!l){e.next=7;break}return e.abrupt("return",Promise.reject(l));case 7:return e.abrupt("return",void 0);case 8:case"end":return e.stop()}},e)}),updateDepartment:n.default.mark(function e(t,r){var a;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=r.call,e.next=3,a((0,s.default)("set_department_update"),t.params);case 3:case"end":return e.stop()}},e)}),delDepartment:n.default.mark(function e(t,r){var a,u,l;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=r.call,e.next=3,a((0,s.default)("set_department_delete"),t.params);case 3:if(u=e.sent,l=u.msg,!l){e.next=7;break}return e.abrupt("return",Promise.reject(l));case 7:return e.abrupt("return",void 0);case 8:case"end":return e.stop()}},e)}),queryEmployees:n.default.mark(function e(t,r){var a,u,l,c,p;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.params,u=r.call,l=r.put,e.next=4,u((0,s.default)("get_user_list_impl"),a);case 4:return c=e.sent,p=c.items,e.next=8,l({type:"getEmployees",payload:p});case 8:case"end":return e.stop()}},e)})}};t.default=c}}]);