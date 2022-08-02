"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[414944],{603905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(667294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=p,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function m(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=r.length,a=new Array(o);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:p,a[1]=i;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},888318:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(487462),p=(r(667294),r(603905));const o={sidebar_label:"PuppeteerNode.product"},a="PuppeteerNode.product property",i={unversionedId:"api/puppeteer.puppeteernode.product",id:"version-15.5.0/api/puppeteer.puppeteernode.product",title:"PuppeteerNode.product property",description:'The name of the browser that is under automation ("chrome" or "firefox")',source:"@site/versioned_docs/version-15.5.0/api/puppeteer.puppeteernode.product.md",sourceDirName:"api",slug:"/api/puppeteer.puppeteernode.product",permalink:"/15.5.0/api/puppeteer.puppeteernode.product",draft:!1,tags:[],version:"15.5.0",frontMatter:{sidebar_label:"PuppeteerNode.product"},sidebar:"sidebar",previous:{title:"PuppeteerNode.launch",permalink:"/15.5.0/api/puppeteer.puppeteernode.launch"},next:{title:"PuppeteerNodeLaunchOptions",permalink:"/15.5.0/api/puppeteer.puppeteernodelaunchoptions"}},u={},c=[{value:"Remarks",id:"remarks",level:2}],l={toc:c};function s(e){let{components:t,...r}=e;return(0,p.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"puppeteernodeproduct-property"},"PuppeteerNode.product property"),(0,p.kt)("p",null,"The name of the browser that is under automation (",(0,p.kt)("inlineCode",{parentName:"p"},'"chrome"')," or ",(0,p.kt)("inlineCode",{parentName:"p"},'"firefox"'),")"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Signature:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"class PuppeteerNode {\n  get product(): string;\n}\n")),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"The product is set by the ",(0,p.kt)("inlineCode",{parentName:"p"},"PUPPETEER_PRODUCT")," environment variable or the ",(0,p.kt)("inlineCode",{parentName:"p"},"product")," option in ",(0,p.kt)("inlineCode",{parentName:"p"},"puppeteer.launch([options])")," and defaults to ",(0,p.kt)("inlineCode",{parentName:"p"},"chrome"),". Firefox support is experimental."))}s.isMDXComponent=!0}}]);