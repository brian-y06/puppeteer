"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[516806],{603905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(667294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),g=u(t),f=o,b=g["".concat(i,".").concat(f)]||g[f]||c[f]||a;return t?n.createElement(b,s(s({ref:r},l),{},{components:t})):n.createElement(b,s({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=g;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,s[1]=p;for(var u=2;u<a;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},842843:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var n=t(487462),o=(t(667294),t(603905));const a={sidebar_label:"Browser.userAgent"},s="Browser.userAgent() method",p={unversionedId:"api/puppeteer.browser.useragent",id:"version-16.0.0/api/puppeteer.browser.useragent",title:"Browser.userAgent() method",description:"The browser's original user agent. Pages can override the browser user agent with Page.setUserAgent().",source:"@site/versioned_docs/version-16.0.0/api/puppeteer.browser.useragent.md",sourceDirName:"api",slug:"/api/puppeteer.browser.useragent",permalink:"/api/puppeteer.browser.useragent",draft:!1,tags:[],version:"16.0.0",frontMatter:{sidebar_label:"Browser.userAgent"},sidebar:"sidebar",previous:{title:"Browser.targets",permalink:"/api/puppeteer.browser.targets"},next:{title:"Browser.version",permalink:"/api/puppeteer.browser.version"}},i={},u=[],l={toc:u};function c(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"browseruseragent-method"},"Browser.userAgent() method"),(0,o.kt)("p",null,"The browser's original user agent. Pages can override the browser user agent with ",(0,o.kt)("a",{parentName:"p",href:"/api/puppeteer.page.setuseragent"},"Page.setUserAgent()"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class Browser {\n  userAgent(): Promise<string>;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")),(0,o.kt)("p",null,"Promise","<","string",">"))}c.isMDXComponent=!0}}]);