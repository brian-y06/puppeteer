"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[163628],{603905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,b=d["".concat(i,".").concat(m)]||d[m]||s[m]||p;return r?n.createElement(b,l(l({ref:t},c),{},{components:r})):n.createElement(b,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,l=new Array(p);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<p;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},964937:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>p,metadata:()=>o,toc:()=>u});var n=r(487462),a=(r(667294),r(603905));const p={sidebar_label:"PuppeteerNode.executablePath"},l="PuppeteerNode.executablePath() method",o={unversionedId:"api/puppeteer.puppeteernode.executablepath",id:"version-15.5.0/api/puppeteer.puppeteernode.executablepath",title:"PuppeteerNode.executablePath() method",description:"Signature:",source:"@site/versioned_docs/version-15.5.0/api/puppeteer.puppeteernode.executablepath.md",sourceDirName:"api",slug:"/api/puppeteer.puppeteernode.executablepath",permalink:"/15.5.0/api/puppeteer.puppeteernode.executablepath",draft:!1,tags:[],version:"15.5.0",frontMatter:{sidebar_label:"PuppeteerNode.executablePath"},sidebar:"sidebar",previous:{title:"PuppeteerNode.defaultArgs",permalink:"/15.5.0/api/puppeteer.puppeteernode.defaultargs"},next:{title:"PuppeteerNode.launch",permalink:"/15.5.0/api/puppeteer.puppeteernode.launch"}},i={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],c={toc:u};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"puppeteernodeexecutablepath-method"},"PuppeteerNode.executablePath() method"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class PuppeteerNode {\n  executablePath(channel?: string): string;\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"channel"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"string"),(0,a.kt)("p",null,"A path where Puppeteer expects to find the bundled browser. The browser binary might not be there if the download was skipped with the ",(0,a.kt)("inlineCode",{parentName:"p"},"PUPPETEER_SKIP_DOWNLOAD")," environment variable."),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"*","*","NOTE","*","*"," ",(0,a.kt)("inlineCode",{parentName:"p"},"puppeteer.executablePath()")," is affected by the ",(0,a.kt)("inlineCode",{parentName:"p"},"PUPPETEER_EXECUTABLE_PATH")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"PUPPETEER_CHROMIUM_REVISION")," environment variables."))}s.isMDXComponent=!0}}]);