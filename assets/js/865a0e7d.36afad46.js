"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[171580],{603905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},614452:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(487462),a=(r(667294),r(603905));const o={sidebar_label:"BrowserContext.waitForTarget"},i="BrowserContext.waitForTarget() method",p={unversionedId:"api/puppeteer.browsercontext.waitfortarget",id:"version-15.5.0/api/puppeteer.browsercontext.waitfortarget",title:"BrowserContext.waitForTarget() method",description:"This searches for a target in this specific browser context.",source:"@site/versioned_docs/version-15.5.0/api/puppeteer.browsercontext.waitfortarget.md",sourceDirName:"api",slug:"/api/puppeteer.browsercontext.waitfortarget",permalink:"/15.5.0/api/puppeteer.browsercontext.waitfortarget",draft:!1,tags:[],version:"15.5.0",frontMatter:{sidebar_label:"BrowserContext.waitForTarget"},sidebar:"sidebar",previous:{title:"BrowserContext.targets",permalink:"/15.5.0/api/puppeteer.browsercontext.targets"},next:{title:"BrowserContextEmittedEvents",permalink:"/15.5.0/api/puppeteer.browsercontextemittedevents"}},l={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"browsercontextwaitfortarget-method"},"BrowserContext.waitForTarget() method"),(0,a.kt)("p",null,"This searches for a target in this specific browser context."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class BrowserContext {\n  waitForTarget(\n    predicate: (x: Target) => boolean | Promise<boolean>,\n    options?: {\n      timeout?: number;\n    }\n  ): Promise<Target>;\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"predicate"),(0,a.kt)("td",{parentName:"tr",align:null},"(x: ",(0,a.kt)("a",{parentName:"td",href:"/15.5.0/api/puppeteer.target"},"Target"),") =",">"," boolean ","|"," Promise","<","boolean",">"),(0,a.kt)("td",{parentName:"tr",align:null},"A function to be run for every target")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},"{ timeout?: number; }"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," An object of options. Accepts a timout, which is the maximum wait time in milliseconds. Pass ",(0,a.kt)("code",null,"0")," to disable the timeout. Defaults to 30 seconds.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<",(0,a.kt)("a",{parentName:"p",href:"/15.5.0/api/puppeteer.target"},"Target"),">"),(0,a.kt)("p",null,"Promise which resolves to the first target found that matches the ",(0,a.kt)("inlineCode",{parentName:"p"},"predicate")," function."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"An example of finding a target for a page opened via ",(0,a.kt)("inlineCode",{parentName:"p"},"window.open"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"await page.evaluate(() => window.open('https://www.example.com/'));\nconst newWindowTarget = await browserContext.waitForTarget(\n  target => target.url() === 'https://www.example.com/'\n);\n")))}u.isMDXComponent=!0}}]);