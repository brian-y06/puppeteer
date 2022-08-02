"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[189715],{603905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=l(r),f=o,m=g["".concat(i,".").concat(f)]||g[f]||u[f]||a;return r?n.createElement(m,p(p({ref:t},c),{},{components:r})):n.createElement(m,p({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=g;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,p[1]=s;for(var l=2;l<a;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},594270:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(487462),o=(r(667294),r(603905));const a={sidebar_label:"BrowserContext.pages"},p="BrowserContext.pages() method",s={unversionedId:"api/puppeteer.browsercontext.pages",id:"version-15.5.0/api/puppeteer.browsercontext.pages",title:"BrowserContext.pages() method",description:"An array of all pages inside the browser context.",source:"@site/versioned_docs/version-15.5.0/api/puppeteer.browsercontext.pages.md",sourceDirName:"api",slug:"/api/puppeteer.browsercontext.pages",permalink:"/15.5.0/api/puppeteer.browsercontext.pages",draft:!1,tags:[],version:"15.5.0",frontMatter:{sidebar_label:"BrowserContext.pages"},sidebar:"sidebar",previous:{title:"BrowserContext.overridePermissions",permalink:"/15.5.0/api/puppeteer.browsercontext.overridepermissions"},next:{title:"BrowserContext.targets",permalink:"/15.5.0/api/puppeteer.browsercontext.targets"}},i={},l=[],c={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"browsercontextpages-method"},"BrowserContext.pages() method"),(0,o.kt)("p",null,"An array of all pages inside the browser context."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class BrowserContext {\n  pages(): Promise<Page[]>;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")),(0,o.kt)("p",null,"Promise","<",(0,o.kt)("a",{parentName:"p",href:"/15.5.0/api/puppeteer.page"},"Page"),"[","]",">"),(0,o.kt)("p",null,"Promise which resolves to an array of all open pages. Non visible pages, such as ",(0,o.kt)("inlineCode",{parentName:"p"},'"background_page"'),", will not be listed here. You can find them using ",(0,o.kt)("a",{parentName:"p",href:"/15.5.0/api/puppeteer.target.page"},"the target page"),"."))}u.isMDXComponent=!0}}]);