"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[25279],{603905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(667294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},b=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=u(t),f=o,m=b["".concat(l,".").concat(f)]||b[f]||s[f]||a;return t?n.createElement(m,p(p({ref:r},c),{},{components:t})):n.createElement(m,p({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=b;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var u=2;u<a;u++)p[u]=t[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},947597:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>p,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=t(487462),o=(t(667294),t(603905));const a={sidebar_label:"WebWorker.url"},p="WebWorker.url() method",i={unversionedId:"api/puppeteer.webworker.url",id:"version-16.0.0/api/puppeteer.webworker.url",title:"WebWorker.url() method",description:"Signature:",source:"@site/versioned_docs/version-16.0.0/api/puppeteer.webworker.url.md",sourceDirName:"api",slug:"/api/puppeteer.webworker.url",permalink:"/api/puppeteer.webworker.url",draft:!1,tags:[],version:"16.0.0",frontMatter:{sidebar_label:"WebWorker.url"},sidebar:"sidebar",previous:{title:"WebWorker.executionContext",permalink:"/api/puppeteer.webworker.executioncontext"},next:{title:"clearCustomQueryHandlers",permalink:"/api/puppeteer.clearcustomqueryhandlers"}},l={},u=[],c={toc:u};function s(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"webworkerurl-method"},"WebWorker.url() method"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class WebWorker {\n  url(): string;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")),(0,o.kt)("p",null,"string"),(0,o.kt)("p",null,"The URL of this web worker."))}s.isMDXComponent=!0}}]);