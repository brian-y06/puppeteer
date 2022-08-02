"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[130355],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||p;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,i=new Array(p);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<p;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},87502:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>p,metadata:()=>o,toc:()=>l});var n=r(487462),a=(r(667294),r(603905));const p={sidebar_label:"Page.setRequestInterception"},i="Page.setRequestInterception() method",o={unversionedId:"api/puppeteer.page.setrequestinterception",id:"version-15.5.0/api/puppeteer.page.setrequestinterception",title:"Page.setRequestInterception() method",description:"Signature:",source:"@site/versioned_docs/version-15.5.0/api/puppeteer.page.setrequestinterception.md",sourceDirName:"api",slug:"/api/puppeteer.page.setrequestinterception",permalink:"/15.5.0/api/puppeteer.page.setrequestinterception",draft:!1,tags:[],version:"15.5.0",frontMatter:{sidebar_label:"Page.setRequestInterception"},sidebar:"sidebar",previous:{title:"Page.setOfflineMode",permalink:"/15.5.0/api/puppeteer.page.setofflinemode"},next:{title:"Page.setUserAgent",permalink:"/15.5.0/api/puppeteer.page.setuseragent"}},s={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}],u={toc:l};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pagesetrequestinterception-method"},"Page.setRequestInterception() method"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Page {\n  setRequestInterception(value: boolean): Promise<void>;\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"value"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether to enable request interception.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<","void",">"),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"Activating request interception enables ",(0,a.kt)("a",{parentName:"p",href:"/15.5.0/api/puppeteer.httprequest.abort"},"HTTPRequest.abort()"),", ",(0,a.kt)("a",{parentName:"p",href:"/15.5.0/api/puppeteer.httprequest.continue"},"HTTPRequest.continue()")," and ",(0,a.kt)("a",{parentName:"p",href:"/15.5.0/api/puppeteer.httprequest.respond"},"HTTPRequest.respond()")," methods. This provides the capability to modify network requests that are made by a page."),(0,a.kt)("p",null,"Once request interception is enabled, every request will stall unless it's continued, responded or aborted; or completed using the browser cache."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"An example of a na\xefve request interceptor that aborts all image requests:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const puppeteer = require('puppeteer');\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.setRequestInterception(true);\n  page.on('request', interceptedRequest => {\n    if (\n      interceptedRequest.url().endsWith('.png') ||\n      interceptedRequest.url().endsWith('.jpg')\n    )\n      interceptedRequest.abort();\n    else interceptedRequest.continue();\n  });\n  await page.goto('https://example.com');\n  await browser.close();\n})();\n")),(0,a.kt)("p",null,"NOTE: Enabling request interception disables page caching."))}c.isMDXComponent=!0}}]);