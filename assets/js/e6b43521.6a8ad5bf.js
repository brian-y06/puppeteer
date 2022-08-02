"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[472049],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(r),d=a,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(f,p(p({ref:t},u),{},{components:r})):n.createElement(f,p({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},215660:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(487462),a=(r(667294),r(603905));const o={sidebar_label:"Frame.goto"},p="Frame.goto() method",i={unversionedId:"api/puppeteer.frame.goto",id:"version-15.5.0/api/puppeteer.frame.goto",title:"Frame.goto() method",description:"Signature:",source:"@site/versioned_docs/version-15.5.0/api/puppeteer.frame.goto.md",sourceDirName:"api",slug:"/api/puppeteer.frame.goto",permalink:"/15.5.0/api/puppeteer.frame.goto",draft:!1,tags:[],version:"15.5.0",frontMatter:{sidebar_label:"Frame.goto"},sidebar:"sidebar",previous:{title:"Frame.focus",permalink:"/15.5.0/api/puppeteer.frame.focus"},next:{title:"Frame.hover",permalink:"/15.5.0/api/puppeteer.frame.hover"}},l={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],u={toc:s};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"framegoto-method"},"Frame.goto() method"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Frame {\n  goto(\n    url: string,\n    options?: {\n      referer?: string;\n      timeout?: number;\n      waitUntil?: PuppeteerLifeCycleEvent | PuppeteerLifeCycleEvent[];\n    }\n  ): Promise<HTTPResponse | null>;\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"url"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"the URL to navigate the frame to. This should include the scheme, e.g. ",(0,a.kt)("code",null,"https://"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},"{ referer?: string; timeout?: number; waitUntil?: ",(0,a.kt)("a",{parentName:"td",href:"/15.5.0/api/puppeteer.puppeteerlifecycleevent"},"PuppeteerLifeCycleEvent")," ","|"," ",(0,a.kt)("a",{parentName:"td",href:"/15.5.0/api/puppeteer.puppeteerlifecycleevent"},"PuppeteerLifeCycleEvent"),"[","]","; }"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," navigation options. ",(0,a.kt)("code",null,"waitUntil")," is useful to define when the navigation should be considered successful - see the docs for ",(0,a.kt)("a",{parentName:"td",href:"/15.5.0/api/puppeteer.puppeteerlifecycleevent"},"PuppeteerLifeCycleEvent")," for more details.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<",(0,a.kt)("a",{parentName:"p",href:"/15.5.0/api/puppeteer.httpresponse"},"HTTPResponse")," ","|"," null",">"),(0,a.kt)("p",null,"A promise which resolves to the main resource response. In case of multiple redirects, the navigation will resolve with the response of the last redirect."),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"frame.goto")," will throw an error if: - there's an SSL error (e.g. in case of self-signed certificates)."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"target URL is invalid.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"the ",(0,a.kt)("inlineCode",{parentName:"p"},"timeout")," is exceeded during navigation.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"the remote server does not respond or is unreachable.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"the main resource failed to load."))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"frame.goto"),' will not throw an error when any valid HTTP status code is returned by the remote server, including 404 "Not Found" and 500 "Internal Server Error". The status code for such responses can be retrieved by calling ',(0,a.kt)("a",{parentName:"p",href:"/15.5.0/api/puppeteer.httpresponse.status"},"HTTPResponse.status()"),"."),(0,a.kt)("p",null,"NOTE: ",(0,a.kt)("inlineCode",{parentName:"p"},"frame.goto")," either throws an error or returns a main resource response. The only exceptions are navigation to ",(0,a.kt)("inlineCode",{parentName:"p"},"about:blank")," or navigation to the same URL with a different hash, which would succeed and return ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,a.kt)("p",null,"NOTE: Headless mode doesn't support navigation to a PDF document. See the ",(0,a.kt)("a",{parentName:"p",href:"https://bugs.chromium.org/p/chromium/issues/detail?id=761295"},"upstream issue"),"."))}m.isMDXComponent=!0}}]);