(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{vOpn:function(e,t,a){"use strict";var y=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=y(a("p0pE")),l={namespace:"rulesEngine",state:{ruleData:{actionType:"set",op:"and",children:[{actionType:"atom",op:">=",keyEntity:"memberEntity",keyEntityName:"\u4f1a\u5458",keyField:"age",keyFiledName:"\u5e74\u9f84",keyType:"integer",valueType:"input",value:35},{actionType:"atom",op:"=",keyEntity:"memberEntity",keyEntityName:"\u4f1a\u5458",keyField:"sex",keyFiledName:"\u6027\u522b",keyType:"string",valueType:"select",valueEnum:["\u7537","\u5973"],value:"\u7537"},{actionType:"atom",op:"=",keyEntity:"memberEntity",keyEntityName:"\u4f1a\u5458",keyField:"sex",keyFiledName:"\u6027\u522b",keyType:"string",valueType:"select",valueEnum:["\u7537","\u5973"],value:"\u7537"},{actionType:"atom",op:"=",keyEntity:"memberEntity",keyEntityName:"\u4f1a\u5458",keyField:"sex",keyFiledName:"\u6027\u522b",keyType:"string",valueType:"select",valueEnum:["\u7537","\u5973"],value:"\u7537"},{actionType:"set",op:"or",children:[{actionType:"atom",op:"=",keyEntity:"memberEntity",keyEntityName:"\u4f1a\u5458",keyField:"car",keyFiledName:"\u662f\u5426\u6709\u8f66",keyType:"string",valueType:"input",value:"\u662f"},{actionType:"atom",op:"=",keyEntity:"memberEntity",keyEntityName:"\u4f1a\u5458",keyField:"married",keyFiledName:"\u5a5a\u5426",keyType:"string",valueType:"input",value:"\u662f"}]},{actionType:"atom",op:"=",keyEntity:"memberEntity",keyEntityName:"\u4f1a\u5458",keyField:"sex",keyFiledName:"\u6027\u522b",keyType:"string",valueType:"select",valueEnum:["\u7537","\u5973"],value:"\u7537"}]}},effects:{},reducers:{addNode:function(e,t){var a=t.payload;return a.children.push({actionType:"atom",opType:"judge",op:"=",keyEntity:"memberEntity",keyEntityName:"\u4f1a\u5458",keyField:"car",keyFiledName:"\u8bf7\u9009\u62e9\u7c7b\u578b",keyType:"string",valueType:"select",valueEnum:["\u662f","\u5426"],value:"\u662f"}),(0,i.default)({},e,{ruleData:(0,i.default)({},e.ruleData)})},deleteNode:function(e,t){var a=t.payload;return a.deleteDom.splice(a.place,1),(0,i.default)({},e,{ruleData:(0,i.default)({},e.ruleData)})},selectItem:function(e,t){var a=t.payload;switch(a.chooseType){case a.childData.keyField:var y=a.childData;y.keyFiledName=a.item;break;case a.childData.valueType:var l=a.childData;l.value=a.item;break;default:var n=a.childData;n.op=a.item}return(0,i.default)({},e,{ruleData:(0,i.default)({},e.ruleData)})}}},n=l;t.default=n}}]);