(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{2445:function(e,t,n){"use strict";var r=n(0),a=n(9);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(n(5)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=u?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(r,l,o):r[l]=e[l]}r.default=e,n&&n.set(e,r);return r}(n(1)),o=n(26),c=n(6),i=r(n(281));function f(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var s=(0,l.lazy)((function(){return Promise.all([n.e(1),n.e(2)]).then(n.t.bind(null,2519,7))})),d=(0,l.lazy)((function(){return n.e(0).then(n.t.bind(null,2443,7))})),p=function(e){var t=(0,o.useRouteMatch)().url,n=(0,o.useParams)().slug;return l.default.createElement(l.Suspense,{fallback:l.default.createElement(c.LoadingIndicatorPage,null)},l.default.createElement(o.Switch,null,l.default.createElement(o.Route,{path:"".concat(t,"/ctm-configurations/edit-settings/:type"),render:function(t){return l.default.createElement(c.CheckPagePermissions,{permissions:i.default.singleTypesConfigurations},l.default.createElement(d,(0,u.default)({},e,t,{slug:n})))}}),l.default.createElement(o.Route,{path:"".concat(t),render:function(t){return l.default.createElement(s,(0,u.default)({},e,t,{slug:n}))}})))};t.default=p}}]);