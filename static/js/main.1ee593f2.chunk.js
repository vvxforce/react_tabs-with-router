(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(28)},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),m=a.n(r),l=a(7),o=a(5),i=function(){return c.a.createElement("h1",{className:"header"},"Home page")},s=function(e){var t=e.tabs,a=e.match;return c.a.createElement("section",null,c.a.createElement("ul",null,t.map(function(e){var t=e.title,n=e.id;return c.a.createElement(l.b,{to:"".concat(a.path,"/").concat(n),key:n,className:"tabs-item",activeClassName:"tabs-item_active",exact:!0},t)})),c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"".concat(a.path,"/:currentTabId"),render:function(e){var a=e.match.params;return c.a.createElement("p",{className:"content"},(t.find(function(e){return e.id===a.currentTabId})||{}).content)}})))},u=(a(27),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),b=function(e){var t=e.match;return c.a.createElement(s,{tabs:u,match:t})},p=function(){return c.a.createElement(l.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(l.b,{to:"/",exact:!0,className:"nav-item",activeClassName:"nav-item_active"},"Home"),c.a.createElement(l.b,{to:"/tabs",exact:!0,className:"nav-item",activeClassName:"nav-item_active"},"Tabs"),c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/",exact:!0,component:i}),c.a.createElement(o.a,{path:"/tabs",component:b}))))};m.a.render(c.a.createElement(p,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.1ee593f2.chunk.js.map