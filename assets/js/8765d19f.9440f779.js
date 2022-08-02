"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[574725],{603905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=d(a),c=r,k=s["".concat(o,".").concat(c)]||s[c]||u[c]||l;return a?n.createElement(k,p(p({ref:t},m),{},{components:a})):n.createElement(k,p({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var d=2;d<l;d++)p[d]=a[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},365874:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(487462),r=(a(667294),a(603905));const l={sidebar_label:"PageEmittedEvents"},p="PageEmittedEvents enum",i={unversionedId:"api/puppeteer.pageemittedevents",id:"version-16.0.0/api/puppeteer.pageemittedevents",title:"PageEmittedEvents enum",description:"All the events that a page instance may emit.",source:"@site/versioned_docs/version-16.0.0/api/puppeteer.pageemittedevents.md",sourceDirName:"api",slug:"/api/puppeteer.pageemittedevents",permalink:"/api/puppeteer.pageemittedevents",draft:!1,tags:[],version:"16.0.0",frontMatter:{sidebar_label:"PageEmittedEvents"},sidebar:"sidebar",previous:{title:"Page.workers",permalink:"/api/puppeteer.page.workers"},next:{title:"PageEventObject",permalink:"/api/puppeteer.pageeventobject"}},o={},d=[{value:"Enumeration Members",id:"enumeration-members",level:2}],m={toc:d};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pageemittedevents-enum"},"PageEmittedEvents enum"),(0,r.kt)("p",null,"All the events that a page instance may emit."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare const enum PageEmittedEvents\n")),(0,r.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Member"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Close"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,'"',"close",'"')),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when the page closes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Console"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,'"',"console",'"')),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when JavaScript within the page calls one of console API methods, e.g. ",(0,r.kt)("code",null,"console.log")," or ",(0,r.kt)("code",null,"console.dir"),". Also emitted if the page throws an error or a warning.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dialog"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,'"',"dialog",'"')),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when a JavaScript dialog appears, such as ",(0,r.kt)("code",null,"alert"),", ",(0,r.kt)("code",null,"prompt"),", ",(0,r.kt)("code",null,"confirm")," or ",(0,r.kt)("code",null,"beforeunload"),". Puppeteer can respond to the dialog via ",(0,r.kt)("a",{parentName:"td",href:"/api/puppeteer.dialog.accept"},"Dialog.accept()")," or ",(0,r.kt)("a",{parentName:"td",href:"/api/puppeteer.dialog.dismiss"},"Dialog.dismiss()"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DOMContentLoaded"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,'"',"domcontentloaded",'"')),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when the JavaScript ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded"},"DOMContentLoaded")," event is dispatched.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Error"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,'"',"error",'"')),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when the page crashes. Will contain an ",(0,r.kt)("code",null,"Error"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FrameAttached"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,'"',"frameattached",'"')),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when a frame is attached. Will contain a ",(0,r.kt)("a",{parentName:"td",href:"/api/puppeteer.frame"},"Frame"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FrameDetached"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,'"',"framedetached",'"')),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when a frame is detached. Will contain a ",(0,r.kt)("a",{parentName:"td",href:"/api/puppeteer.frame"},"Frame"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FrameNavigated"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,'"',"framenavigated",'"')),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when a frame is navigated to a new URL. Will contain a ",(0,r.kt)("a",{parentName:"td",href:"/api/puppeteer.frame"},"Frame"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Load"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,'"',"load",'"')),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when the JavaScript ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/Events/load"},"load")," event is dispatched.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Metrics"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,'"',"metrics",'"')),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when the JavaScript code makes a call to ",(0,r.kt)("code",null,"console.timeStamp"),". For the list of metrics see ",(0,r.kt)("a",{parentName:"td",href:"/api/puppeteer.page.metrics"},"page.metrics"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PageError"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,'"',"pageerror",'"')),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when an uncaught exception happens within the page. Contains an ",(0,r.kt)("code",null,"Error"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Popup"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,'"',"popup",'"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"Emitted when the page opens a new tab or window."),(0,r.kt)("p",null,"Contains a ",(0,r.kt)("a",{parentName:"td",href:"/api/puppeteer.page"},"Page")," corresponding to the popup window."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Request"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,'"',"request",'"')),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when a page issues a request and contains a ",(0,r.kt)("a",{parentName:"td",href:"/api/puppeteer.httprequest"},"HTTPRequest"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RequestFailed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,'"',"requestfailed",'"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"Emitted when a request fails, for example by timing out."),(0,r.kt)("p",null,"Contains a ",(0,r.kt)("a",{parentName:"td",href:"/api/puppeteer.httprequest"},"HTTPRequest"),"."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RequestFinished"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,'"',"requestfinished",'"')),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when a request finishes successfully. Contains a ",(0,r.kt)("a",{parentName:"td",href:"/api/puppeteer.httprequest"},"HTTPRequest"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RequestServedFromCache"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,'"',"requestservedfromcache",'"')),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when a request ended up loading from cache. Contains a ",(0,r.kt)("a",{parentName:"td",href:"/api/puppeteer.httprequest"},"HTTPRequest"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Response"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,'"',"response",'"')),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when a response is received. Contains a ",(0,r.kt)("a",{parentName:"td",href:"/api/puppeteer.httpresponse"},"HTTPResponse"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WorkerCreated"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,'"',"workercreated",'"')),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when a dedicated ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"},"WebWorker")," is spawned by the page.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WorkerDestroyed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,'"',"workerdestroyed",'"')),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when a dedicated ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"},"WebWorker")," is destroyed by the page.")))))}u.isMDXComponent=!0}}]);