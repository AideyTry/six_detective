(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"2n1B":function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Pwec");var r=n(a("CtXQ"));a("lUTK");var o=n(a("BvKs")),l=a("Y2fQ"),u=n(a("q1tI")),s=n(a("TSYQ")),c=n(a("6Wvd")),i=n(a("Kkfi")),d=function(e){var t=e.className,a=(0,l.getLocale)(),n=function(e){var t=e.key;return(0,l.setLocale)(t,!1)},d=["zh-CN","zh-TW","en-US","pt-BR"],f={"zh-CN":"\u7b80\u4f53\u4e2d\u6587","zh-TW":"\u7e41\u4f53\u4e2d\u6587","en-US":"English","pt-BR":"Portugu\xeas"},m={"zh-CN":"\ud83c\udde8\ud83c\uddf3","zh-TW":"\ud83c\udded\ud83c\uddf0","en-US":"\ud83c\uddec\ud83c\udde7","pt-BR":"\ud83c\udde7\ud83c\uddf7"},p=u.default.createElement(o.default,{className:i.default.menu,selectedKeys:[a],onClick:n},d.map(function(e){return u.default.createElement(o.default.Item,{key:e},u.default.createElement("span",{role:"img","aria-label":f[e]},m[e])," ",f[e])}));return u.default.createElement(c.default,{overlay:p,placement:"bottomRight"},u.default.createElement("span",{className:(0,s.default)(i.default.dropDown,t)},u.default.createElement(r.default,{type:"global",title:(0,l.formatMessage)({id:"navBar.lang"})})))},f=d;t.default=f},"57a1":function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("q1tI")),o=a("MuoO"),l=n(a("kaFD")),u=n(a("2n1B")),s=n(a("h3zL")),c=function(e){var t=e.theme,a=e.layout,n=s.default.right;return"dark"===t&&"topmenu"===a&&(n="".concat(s.default.right,"  ").concat(s.default.dark)),r.default.createElement("div",{className:n},r.default.createElement(l.default,null),r.default.createElement(u.default,{className:s.default.action}))},i=(0,o.connect)(function(e){var t=e.settings;return{theme:t.navTheme,layout:t.layout}})(c);t.default=i},"6Wvd":function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("qVdP");var r=n(a("jsC+")),o=n(a("jehZ")),l=n(a("Y/ft")),u=n(a("q1tI")),s=n(a("TSYQ")),c=n(a("QyDn")),i=function(e){var t=e.overlayClassName,a=(0,l.default)(e,["overlayClassName"]);return u.default.createElement(r.default,(0,o.default)({overlayClassName:(0,s.default)(c.default.container,t)},a))},d=i;t.default=d},Awhp:function(e,t,a){"use strict";a.r(t);a("cIOH"),a("PQMj")},DE5q:function(e,t,a){e.exports={menu:"antd-pro-components-customize-select-lang-index-menu",dropDown:"antd-pro-components-customize-select-lang-index-dropDown"}},Kkfi:function(e,t,a){e.exports={dropDown:"antd-pro-components-select-lang-index-dropDown"}},KrTs:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a("17x9"),o=a("MFj2"),l=a("BGR+"),u=a("TSYQ"),s=a.n(u),c=a("VCL8"),i=a("H84U");function d(e){return d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},f.apply(this,arguments)}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,t,a){return t&&p(e.prototype,t),a&&p(e,a),e}function b(e,t){return!t||"object"!==d(t)&&"function"!==typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}function N(e,t){return N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},N(e,t)}function E(e){return e?e.toString().split("").reverse().map(function(e){var t=Number(e);return isNaN(t)?e:t}):[]}function C(e){for(var t=[],a=0;a<30;a++){var r=e===a?"current":"";t.push(n["createElement"]("p",{key:a.toString(),className:r},a%10))}return t}var w=function(e){function t(e){var a;return m(this,t),a=b(this,v(t).call(this,e)),a.onAnimated=function(){var e=a.props.onAnimated;e&&e()},a.renderScrollNumber=function(e){var t=e.getPrefixCls,r=a.props,o=r.prefixCls,u=r.className,c=r.style,i=r.title,d=r.component,m=void 0===d?"sup":d,p=r.displayComponent,g=Object(l["default"])(a.props,["count","onAnimated","component","prefixCls","displayComponent"]),b=t("scroll-number",o),y=f(f({},g),{className:s()(b,u),title:i});return c&&c.borderColor&&(y.style=f(f({},c),{boxShadow:"0 0 0 1px ".concat(c.borderColor," inset")})),p?n["cloneElement"](p,{className:s()("".concat(b,"-custom-component"),p.props&&p.props.className)}):n["createElement"](m,y,a.renderNumberElement(b))},a.state={animateStarted:!0,count:e.count},a}return h(t,e),g(t,[{key:"componentDidUpdate",value:function(e,t){this.lastCount=t.count;var a=this.state.animateStarted;a&&this.setState(function(e,t){return{animateStarted:!1,count:t.count}},this.onAnimated)}},{key:"getPositionByNum",value:function(e,t){var a=this.state.count,n=Math.abs(Number(a)),r=Math.abs(Number(this.lastCount)),o=Math.abs(E(this.state.count)[t]),l=Math.abs(E(this.lastCount)[t]);return this.state.animateStarted?10+e:n>r?o>=l?10+e:20+e:o<=l?10+e:e}},{key:"renderCurrentNumber",value:function(e,t,a){if("number"===typeof t){var r=this.getPositionByNum(t,a),o=this.state.animateStarted||void 0===E(this.lastCount)[a];return n["createElement"]("span",{className:"".concat(e,"-only"),style:{transition:o?"none":void 0,msTransform:"translateY(".concat(100*-r,"%)"),WebkitTransform:"translateY(".concat(100*-r,"%)"),transform:"translateY(".concat(100*-r,"%)")},key:a},C(r))}return n["createElement"]("span",{key:"symbol",className:"".concat(e,"-symbol")},t)}},{key:"renderNumberElement",value:function(e){var t=this,a=this.state.count;return a&&Number(a)%1===0?E(a).map(function(a,n){return t.renderCurrentNumber(e,a,n)}).reverse():a}},{key:"render",value:function(){return n["createElement"](i["a"],null,this.renderScrollNumber)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"count"in e?t.count===e.count?null:{animateStarted:!0}:null}}]),t}(n["Component"]);w.defaultProps={count:null,onAnimated:function(){}},Object(c["polyfill"])(w);var k=w,O=a("09Wf");function S(e){return S="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},j.apply(this,arguments)}function I(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function R(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function M(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function x(e,t,a){return t&&M(e.prototype,t),a&&M(e,a),e}function T(e,t){return!t||"object"!==S(t)&&"function"!==typeof t?A(e):t}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}function Q(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}function B(e,t){return B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},B(e,t)}a.d(t,"default",function(){return Z});var D=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};function z(e){return-1!==O["a"].indexOf(e)}var Z=function(e){function t(){var e;return R(this,t),e=T(this,U(t).apply(this,arguments)),e.renderBadge=function(t){var a,r=t.getPrefixCls,u=e.props,c=u.prefixCls,i=u.scrollNumberPrefixCls,d=u.children,f=u.status,m=u.text,p=u.color,g=D(u,["prefixCls","scrollNumberPrefixCls","children","status","text","color"]),b=["count","showZero","overflowCount","className","style","dot","offset","title"],y=r("badge",c),v=r("scroll-number",i),h=e.renderBadgeNumber(y,v),N=e.renderStatusText(y),E=s()((a={},I(a,"".concat(y,"-status-dot"),e.hasStatus()),I(a,"".concat(y,"-status-").concat(f),!!f),I(a,"".concat(y,"-status-").concat(p),z(p)),a)),C={};if(p&&!z(p)&&(C.background=p),!d&&e.hasStatus()){var w=e.getStyleWithOffset(),k=w&&w.color;return n["createElement"]("span",j({},Object(l["default"])(g,b),{className:e.getBadgeClassName(y),style:w}),n["createElement"]("span",{className:E,style:C}),n["createElement"]("span",{style:{color:k},className:"".concat(y,"-status-text")},m))}return n["createElement"]("span",j({},Object(l["default"])(g,b),{className:e.getBadgeClassName(y)}),d,n["createElement"](o["a"],{component:"",showProp:"data-show",transitionName:d?"".concat(y,"-zoom"):"",transitionAppear:!0},h),N)},e}return Q(t,e),x(t,[{key:"getNumberedDispayCount",value:function(){var e=this.props,t=e.count,a=e.overflowCount,n=t>a?"".concat(a,"+"):t;return n}},{key:"getDispayCount",value:function(){var e=this.isDot();return e?"":this.getNumberedDispayCount()}},{key:"getScrollNumberTitle",value:function(){var e=this.props,t=e.title,a=e.count;return t||("string"===typeof a||"number"===typeof a?a:void 0)}},{key:"getStyleWithOffset",value:function(){var e=this.props,t=e.offset,a=e.style;return t?j({right:-parseInt(t[0],10),marginTop:t[1]},a):a}},{key:"getBadgeClassName",value:function(e){var t,a=this.props,n=a.className,r=a.children;return s()(n,e,(t={},I(t,"".concat(e,"-status"),this.hasStatus()),I(t,"".concat(e,"-not-a-wrapper"),!r),t))}},{key:"hasStatus",value:function(){var e=this.props,t=e.status,a=e.color;return!!t||!!a}},{key:"isZero",value:function(){var e=this.getNumberedDispayCount();return"0"===e||0===e}},{key:"isDot",value:function(){var e=this.props.dot,t=this.isZero();return e&&!t||this.hasStatus()}},{key:"isHidden",value:function(){var e=this.props.showZero,t=this.getDispayCount(),a=this.isZero(),n=this.isDot(),r=null===t||void 0===t||""===t;return(r||a&&!e)&&!n}},{key:"renderStatusText",value:function(e){var t=this.props.text,a=this.isHidden();return a||!t?null:n["createElement"]("span",{className:"".concat(e,"-status-text")},t)}},{key:"renderDispayComponent",value:function(){var e=this.props.count,t=e;if(t&&"object"===S(t))return n["cloneElement"](t,{style:j(j({},this.getStyleWithOffset()),t.props&&t.props.style)})}},{key:"renderBadgeNumber",value:function(e,t){var a,r=this.props,o=r.status,l=r.count,u=this.getDispayCount(),c=this.isDot(),i=this.isHidden(),d=s()((a={},I(a,"".concat(e,"-dot"),c),I(a,"".concat(e,"-count"),!c),I(a,"".concat(e,"-multiple-words"),!c&&l&&l.toString&&l.toString().length>1),I(a,"".concat(e,"-status-").concat(o),this.hasStatus()),a));return i?null:n["createElement"](k,{prefixCls:t,"data-show":!i,className:d,count:u,displayComponent:this.renderDispayComponent(),title:this.getScrollNumberTitle(),style:this.getStyleWithOffset(),key:"scrollNumber"})}},{key:"render",value:function(){return n["createElement"](i["a"],null,this.renderBadge)}}]),t}(n["Component"]);Z.defaultProps={count:null,showZero:!1,dot:!1,overflowCount:99},Z.propTypes={count:r["node"],showZero:r["bool"],dot:r["bool"],overflowCount:r["number"]}},NWkj:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("qVdP");var r=n(a("jsC+")),o=n(a("jehZ")),l=n(a("Y/ft")),u=n(a("q1tI")),s=n(a("TSYQ")),c=n(a("nLcc")),i=function(e){var t=e.overlayClassName,a=(0,l.default)(e,["overlayClassName"]);return u.default.createElement(r.default,(0,o.default)({overlayClassName:(0,s.default)(c.default.container,t)},a))},d=i;t.default=d},ODYL:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Pwec");var r=n(a("CtXQ"));a("lUTK");var o=n(a("BvKs")),l=a("Y2fQ"),u=n(a("q1tI")),s=n(a("TSYQ")),c=n(a("NWkj")),i=n(a("DE5q")),d=function(e){var t=e.className,a=(0,l.getLocale)(),n=function(e){var t=e.key;return(0,l.setLocale)(t)},d=["zh-CN","zh-TW","en-US","pt-BR"],f={"zh-CN":"\u7b80\u4f53\u4e2d\u6587","zh-TW":"\u7e41\u4f53\u4e2d\u6587","en-US":"English","pt-BR":"Portugu\xeas"},m={"zh-CN":"\ud83c\udde8\ud83c\uddf3","zh-TW":"\ud83c\udded\ud83c\uddf0","en-US":"\ud83c\uddfa\ud83c\uddf8","pt-BR":"\ud83c\udde7\ud83c\uddf7"},p=u.default.createElement(o.default,{className:i.default.menu,selectedKeys:[a],onClick:n},d.map(function(e){return u.default.createElement(o.default.Item,{key:e},u.default.createElement("span",{role:"img","aria-label":f[e]},m[e])," ",f[e])}));return u.default.createElement(c.default,{overlay:p,placement:"bottomRight"},u.default.createElement("span",{className:(0,s.default)(i.default.dropDown,t)},u.default.createElement(r.default,{type:"global",title:(0,l.formatMessage)({id:"navBar.lang"})})))},f=d;t.default=f},PQMj:function(e,t,a){e.exports={"ant-badge":"ant-badge","ant-badge-count":"ant-badge-count","ant-badge-multiple-words":"ant-badge-multiple-words","ant-badge-dot":"ant-badge-dot","ant-scroll-number-custom-component":"ant-scroll-number-custom-component","ant-badge-status":"ant-badge-status","ant-badge-status-dot":"ant-badge-status-dot","ant-badge-status-success":"ant-badge-status-success","ant-badge-status-processing":"ant-badge-status-processing",antStatusProcessing:"antStatusProcessing","ant-badge-status-default":"ant-badge-status-default","ant-badge-status-error":"ant-badge-status-error","ant-badge-status-warning":"ant-badge-status-warning","ant-badge-status-pink":"ant-badge-status-pink","ant-badge-status-magenta":"ant-badge-status-magenta","ant-badge-status-red":"ant-badge-status-red","ant-badge-status-volcano":"ant-badge-status-volcano","ant-badge-status-orange":"ant-badge-status-orange","ant-badge-status-yellow":"ant-badge-status-yellow","ant-badge-status-gold":"ant-badge-status-gold","ant-badge-status-cyan":"ant-badge-status-cyan","ant-badge-status-lime":"ant-badge-status-lime","ant-badge-status-green":"ant-badge-status-green","ant-badge-status-blue":"ant-badge-status-blue","ant-badge-status-geekblue":"ant-badge-status-geekblue","ant-badge-status-purple":"ant-badge-status-purple","ant-badge-status-text":"ant-badge-status-text","ant-badge-zoom-appear":"ant-badge-zoom-appear","ant-badge-zoom-enter":"ant-badge-zoom-enter",antZoomBadgeIn:"antZoomBadgeIn","ant-badge-zoom-leave":"ant-badge-zoom-leave",antZoomBadgeOut:"antZoomBadgeOut","ant-badge-not-a-wrapper":"ant-badge-not-a-wrapper","ant-scroll-number":"ant-scroll-number","ant-scroll-number-only":"ant-scroll-number-only","ant-scroll-number-symbol":"ant-scroll-number-symbol"}},QyDn:function(e,t,a){e.exports={container:"antd-pro-components-header-dropdown-index-container"}},W660:function(e,t,a){e.exports={footerRender:"antd-pro-layouts-basic-layout-footerRender",headerRender:"antd-pro-layouts-basic-layout-headerRender",left:"antd-pro-layouts-basic-layout-left",collapsed:"antd-pro-layouts-basic-layout-collapsed",right:"antd-pro-layouts-basic-layout-right",info:"antd-pro-layouts-basic-layout-info",bell:"antd-pro-layouts-basic-layout-bell",user:"antd-pro-layouts-basic-layout-user",avatar:"antd-pro-layouts-basic-layout-avatar",username:"antd-pro-layouts-basic-layout-username",popover:"antd-pro-layouts-basic-layout-popover",popoverHeader:"antd-pro-layouts-basic-layout-popoverHeader",popoverContent:"antd-pro-layouts-basic-layout-popoverContent",imgBox:"antd-pro-layouts-basic-layout-imgBox",popoverFooter:"antd-pro-layouts-basic-layout-popoverFooter"}},h3zL:function(e,t,a){e.exports={logo:"antd-pro-components-global-header-index-logo",trigger:"antd-pro-components-global-header-index-trigger",dark:"antd-pro-components-global-header-index-dark",right:"antd-pro-components-global-header-index-right",search:"antd-pro-components-global-header-index-search",account:"antd-pro-components-global-header-index-account",avatar:"antd-pro-components-global-header-index-avatar",action:"antd-pro-components-global-header-index-action",name:"antd-pro-components-global-header-index-name"}},kaFD:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("T2oS");var r=n(a("W9HT"));a("Telt");var o=n(a("Tckk"));a("lUTK");var l=n(a("BvKs"));a("Pwec");var u=n(a("CtXQ")),s=n(a("2Taf")),c=n(a("vZ4D")),i=n(a("l4Ni")),d=n(a("ujKo")),f=n(a("MhPg")),m=a("Y2fQ"),p=n(a("q1tI")),g=a("MuoO"),b=n(a("usdK")),y=n(a("6Wvd")),v=n(a("h3zL")),h=function(e){function t(){var e,a;(0,s.default)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a=(0,i.default)(this,(e=(0,d.default)(t)).call.apply(e,[this].concat(r))),a.onMenuClick=function(e){var t=e.key;if("logout"!==t)b.default.push("/account/".concat(t));else{var n=a.props.dispatch;n&&n({type:"login/logout"})}},a}return(0,f.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props.currentUser,t=void 0===e?{}:e;t.name=localStorage.getItem("currentUser")?localStorage.getItem("currentUser"):"";var a=p.default.createElement(l.default,{className:v.default.menu,selectedKeys:[],onClick:this.onMenuClick},p.default.createElement(l.default.Item,{key:"center"},p.default.createElement(u.default,{type:"user"}),p.default.createElement(m.FormattedMessage,{id:"menu.account.center",defaultMessage:"account center"})),p.default.createElement(l.default.Item,{key:"settings"},p.default.createElement(u.default,{type:"setting"}),p.default.createElement(m.FormattedMessage,{id:"menu.account.settings",defaultMessage:"account settings"})),p.default.createElement(l.default.Divider,null),p.default.createElement(l.default.Item,{key:"logout"},p.default.createElement(u.default,{type:"logout"}),p.default.createElement(m.FormattedMessage,{id:"menu.account.logout",defaultMessage:"logout"})));return t&&t.name?p.default.createElement(y.default,{overlay:a},p.default.createElement("span",{className:"".concat(v.default.action," ").concat(v.default.account)},p.default.createElement(o.default,{size:"small",className:v.default.avatar,src:t.avatar,alt:"avatar"}),p.default.createElement("span",{className:v.default.name},t.name))):p.default.createElement(r.default,{size:"small",style:{marginLeft:8,marginRight:8}})}}]),t}(p.default.Component),N=(0,g.connect)(function(e){var t=e.user;return{currentUser:t.currentUser}})(h);t.default=N},maEh:function(e,t,a){"use strict";var n=a("tAuX"),r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a("jehZ")),l=r(a("gWZ8"));a("Q9mQ");var u=r(a("diRs"));a("Awhp");var s=r(a("KrTs"));a("Pwec");var c=r(a("CtXQ")),i=r(a("qIgq")),d=r(a("p0pE")),f=r(a("Hx5s")),m=n(a("q1tI")),p=r(a("mOP9")),g=a("MuoO"),b=a("Y2fQ"),y=a("LLXN"),v=r(a("ODYL")),h=r(a("HZnN")),N=r(a("57a1")),E=r(a("zwU1")),C=r(a("yFqQ")),w=r(a("W660"));a("Uisd");var k=r(a("BN5G")),O=a("+n12"),S=function(e){return e.map(function(e){var t=(0,d.default)({},e,{children:e.children?S(e.children):[]});return h.default.check(e.authority,t,null)})},j=function(){return m.default.createElement("footer",{className:w.default.footerRender},m.default.createElement("img",{src:a("zwU1"),alt:"HKEX"}),m.default.createElement("div",null,"@ 2019 Hong Kong Exchanges and Clearing Limited. All rights reserved"))},I=function(e){var t=e.dispatch,a=e.children,n=e.settings,r=e.collapsed,d=e.menuData,g=(0,m.useState)([]),h=(0,i.default)(g,2),I=h[0],R=h[1];(0,m.useEffect)(function(){(0,y.setLocale)("en-US"),t&&(t({type:"menu/getMenuData"}),t({type:"login/getLoginStatus",payload:{}}),O.isProOrDev||setInterval(function(){t({type:"login/getLoginStatus",payload:{}})},25e3))},[]);var M=function(){return t&&t({type:"global/changeLayoutCollapsed",payload:!r})},x=function(){return m.default.createElement("div",{className:w.default.popover},m.default.createElement("div",{className:w.default.popoverHeader},m.default.createElement("p",null,"Surveillacnce Dep."),m.default.createElement("p",null,"thomaschow@hkex.com")),m.default.createElement("div",{className:w.default.popoverContent},m.default.createElement("div",{className:w.default.left},m.default.createElement("div",{className:w.default.imgBox}),m.default.createElement("span",null,"Profile")),m.default.createElement("div",{className:w.default.right},m.default.createElement("div",{className:w.default.imgBox}),m.default.createElement("span",null,"Setting"))),m.default.createElement("div",{className:w.default.popoverFooter},m.default.createElement("a",{onClick:function(){t&&t({type:"login/logout"})}},"Sign Out")))},T=function(){return"/"===window.location.pathname?m.default.createElement("div",{className:w.default.headerRender,style:{position:"absolute",border:"none"}},m.default.createElement("div",{className:w.default.left,style:{border:"none"}},m.default.createElement(c.default,{className:w.default.collapsed,type:r?"menu-unfold":"menu-fold",onClick:function(){return M()}}))):m.default.createElement("div",{className:w.default.headerRender},m.default.createElement("div",{className:w.default.left},m.default.createElement(c.default,{className:w.default.collapsed,type:r?"menu-unfold":"menu-fold",onClick:function(){return M()}})),m.default.createElement("div",{className:w.default.right},m.default.createElement("div",{className:w.default.info},m.default.createElement(s.default,{dot:!0},m.default.createElement(k.default,{type:"icon-xiaoxi",className:w.default.bell}))),m.default.createElement("div",{className:w.default.user},m.default.createElement(k.default,{type:"icon-usercircle",className:w.default.avatar}),m.default.createElement(v.default,null),m.default.createElement("span",{title:"Thomas Chow",className:w.default.username},window.localStorage.loginName),m.default.createElement(u.default,{placement:"bottomRight",content:x(),trigger:"click",overlayClassName:"userinfo"},m.default.createElement(c.default,{type:"caret-down"})))))};return m.default.createElement(f.default,(0,o.default)({iconfontUrl:"http://".concat(window.location.host,"/iconfont.js"),siderWidth:250,logo:r?C.default:E.default,headerRender:T,menuHeaderRender:function(e){return m.default.createElement("a",null,e)},onCollapse:M,menuItemRender:function(e,t){return e.isUrl||e.children?t:e.iframeUrl?m.default.createElement(p.default,{to:{pathname:e.path,query:{iframeUrl:e.iframeUrl}}},t):m.default.createElement(p.default,{to:e.path},t)},breadcrumbRender:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[{path:"/",breadcrumbName:(0,b.formatMessage)({id:"menu.home",defaultMessage:"Home"})}].concat((0,l.default)(e))},itemRender:function(e,t,a,n){var r=0===a.indexOf(e);return r?m.default.createElement(p.default,{to:n.join("/")},e.breadcrumbName):m.default.createElement("span",null,e.breadcrumbName)},footerRender:j,menuDataRender:function(){return S(d)},formatMessage:b.formatMessage,rightContentRender:function(e){return m.default.createElement(N.default,e)}},e,n,{menuProps:{openKeys:I,onOpenChange:function(e){R(e)}}}),a)},R=(0,g.connect)(function(e){var t=e.global,a=e.settings,n=e.menu;return{collapsed:t.collapsed,settings:a,menuData:n.menuData}})(I);t.default=R},nLcc:function(e,t,a){e.exports={container:"antd-pro-components-customize-heder-dropdown-index-container"}},yFqQ:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAgCAYAAAB3j6rJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0MxNjM0RUVDOTczMTFFOUIyMzlCQ0Q5NjVGMTFFRUEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0MxNjM0RURDOTczMTFFOUIyMzlCQ0Q5NjVGMTFFRUEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0U0MkZFN0VFNTNBMTFFNzg5RTVEQ0UwN0JBMTk2ODQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6N0U0MkZFN0ZFNTNBMTFFNzg5RTVEQ0UwN0JBMTk2ODQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7EawOkAAAGA0lEQVR42syX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"},zwU1:function(e,t,a){e.exports=a.p+"static/logo.a36066ba.png"}}]);