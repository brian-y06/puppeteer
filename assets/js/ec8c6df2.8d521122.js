"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[883567],{603905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(667294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,o=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=u(r),m=p,d=f["".concat(i,".").concat(m)]||f[m]||c[m]||o;return r?n.createElement(d,s(s({ref:t},l),{},{components:r})):n.createElement(d,s({ref:t},l))}));function m(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=r.length,s=new Array(o);s[0]=f;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:p,s[1]=a;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},885880:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var n=r(487462),p=(r(667294),r(603905));const o={sidebar_label:"HTTPRequest.response"},s="HTTPRequest.response() method",a={unversionedId:"api/puppeteer.httprequest.response",id:"version-15.5.0/api/puppeteer.httprequest.response",title:"HTTPRequest.response() method",description:"Signature:",source:"@site/versioned_docs/version-15.5.0/api/puppeteer.httprequest.response.md",sourceDirName:"api",slug:"/api/puppeteer.httprequest.response",permalink:"/15.5.0/api/puppeteer.httprequest.response",draft:!1,tags:[],version:"15.5.0",frontMatter:{sidebar_label:"HTTPRequest.response"},sidebar:"sidebar",previous:{title:"HTTPRequest.respond",permalink:"/15.5.0/api/puppeteer.httprequest.respond"},next:{title:"HTTPRequest.responseForRequest",permalink:"/15.5.0/api/puppeteer.httprequest.responseforrequest"}},i={},u=[],l={toc:u};function c(e){let{components:t,...r}=e;return(0,p.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"httprequestresponse-method"},"HTTPRequest.response() method"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Signature:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"class HTTPRequest {\n  response(): HTTPResponse | null;\n}\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/15.5.0/api/puppeteer.httpresponse"},"HTTPResponse")," ","|"," null"),(0,p.kt)("p",null,"A matching ",(0,p.kt)("inlineCode",{parentName:"p"},"HTTPResponse")," object, or null if the response has not been received yet."))}c.isMDXComponent=!0}}]);