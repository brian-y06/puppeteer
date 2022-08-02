"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[466711],{603905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(k,l(l({ref:t},s),{},{components:r})):n.createElement(k,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},846117:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(487462),a=(r(667294),r(603905));const i={sidebar_label:"Frame.click"},l="Frame.click() method",o={unversionedId:"api/puppeteer.frame.click",id:"version-15.5.0/api/puppeteer.frame.click",title:"Frame.click() method",description:"This method clicks the first element found that matches selector.",source:"@site/versioned_docs/version-15.5.0/api/puppeteer.frame.click.md",sourceDirName:"api",slug:"/api/puppeteer.frame.click",permalink:"/15.5.0/api/puppeteer.frame.click",draft:!1,tags:[],version:"15.5.0",frontMatter:{sidebar_label:"Frame.click"},sidebar:"sidebar",previous:{title:"Frame.childFrames",permalink:"/15.5.0/api/puppeteer.frame.childframes"},next:{title:"Frame.content",permalink:"/15.5.0/api/puppeteer.frame.content"}},p={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],s={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"frameclick-method"},"Frame.click() method"),(0,a.kt)("p",null,"This method clicks the first element found that matches ",(0,a.kt)("inlineCode",{parentName:"p"},"selector"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Frame {\n  click(\n    selector: string,\n    options?: {\n      delay?: number;\n      button?: MouseButton;\n      clickCount?: number;\n    }\n  ): Promise<void>;\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"selector"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"the selector to search for to click. If there are multiple elements, the first will be clicked.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},"{ delay?: number; button?: ",(0,a.kt)("a",{parentName:"td",href:"/15.5.0/api/puppeteer.mousebutton"},"MouseButton"),"; clickCount?: number; }"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<","void",">"),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"This method scrolls the element into view if needed, and then uses ",(0,a.kt)("a",{parentName:"p",href:"/15.5.0/api/puppeteer.page.mouse"},"Page.mouse")," to click in the center of the element. If there's no element matching ",(0,a.kt)("inlineCode",{parentName:"p"},"selector"),", the method throws an error."),(0,a.kt)("p",null,"Bear in mind that if ",(0,a.kt)("inlineCode",{parentName:"p"},"click()")," triggers a navigation event and there's a separate ",(0,a.kt)("inlineCode",{parentName:"p"},"page.waitForNavigation()")," promise to be resolved, you may end up with a race condition that yields unexpected results. The correct pattern for click and wait for navigation is the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const [response] = await Promise.all([\n  page.waitForNavigation(waitOptions),\n  frame.click(selector, clickOptions),\n]);\n")))}m.isMDXComponent=!0}}]);