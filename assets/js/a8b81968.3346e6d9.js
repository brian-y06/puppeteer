"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[577771],{603905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(667294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),i=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=i(r),d=n,m=g["".concat(s,".").concat(d)]||g[d]||u[d]||o;return r?a.createElement(m,p(p({ref:t},c),{},{components:r})):a.createElement(m,p({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,p[1]=l;for(var i=2;i<o;i++)p[i]=r[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},155715:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=r(487462),n=(r(667294),r(603905));const o={sidebar_label:"Coverage"},p="Coverage class",l={unversionedId:"api/puppeteer.coverage",id:"version-15.5.0/api/puppeteer.coverage",title:"Coverage class",description:"The Coverage class provides methods to gathers information about parts of JavaScript and CSS that were used by the page.",source:"@site/versioned_docs/version-15.5.0/api/puppeteer.coverage.md",sourceDirName:"api",slug:"/api/puppeteer.coverage",permalink:"/15.5.0/api/puppeteer.coverage",draft:!1,tags:[],version:"15.5.0",frontMatter:{sidebar_label:"Coverage"},sidebar:"sidebar",previous:{title:"ContinueRequestOverrides.url",permalink:"/15.5.0/api/puppeteer.continuerequestoverrides.url"},next:{title:"Coverage.(constructor)",permalink:"/15.5.0/api/puppeteer.coverage._constructor_"}},s={},i=[{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}],c={toc:i};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"coverage-class"},"Coverage class"),(0,n.kt)("p",null,"The Coverage class provides methods to gathers information about parts of JavaScript and CSS that were used by the page."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class Coverage\n")),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"To output coverage in a form consumable by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/istanbuljs"},"Istanbul"),", see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/istanbuljs/puppeteer-to-istanbul"},"puppeteer-to-istanbul"),"."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"An example of using JavaScript and CSS coverage to get percentage of initially executed code:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"// Enable both JavaScript and CSS coverage\nawait Promise.all([\n  page.coverage.startJSCoverage(),\n  page.coverage.startCSSCoverage(),\n]);\n// Navigate to page\nawait page.goto('https://example.com');\n// Disable both JavaScript and CSS coverage\nconst [jsCoverage, cssCoverage] = await Promise.all([\n  page.coverage.stopJSCoverage(),\n  page.coverage.stopCSSCoverage(),\n]);\nlet totalBytes = 0;\nlet usedBytes = 0;\nconst coverage = [...jsCoverage, ...cssCoverage];\nfor (const entry of coverage) {\n  totalBytes += entry.text.length;\n  for (const range of entry.ranges) usedBytes += range.end - range.start - 1;\n}\nconsole.log(`Bytes used: ${(usedBytes / totalBytes) * 100}%`);\n")),(0,n.kt)("h2",{id:"constructors"},"Constructors"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,n.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/15.5.0/api/puppeteer.coverage._constructor_"},"(constructor)(client)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Constructs a new instance of the ",(0,n.kt)("code",null,"Coverage")," class")))),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Method"),(0,n.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/15.5.0/api/puppeteer.coverage.startcsscoverage"},"startCSSCoverage(options)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/15.5.0/api/puppeteer.coverage.startjscoverage"},"startJSCoverage(options)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/15.5.0/api/puppeteer.coverage.stopcsscoverage"},"stopCSSCoverage()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/15.5.0/api/puppeteer.coverage.stopjscoverage"},"stopJSCoverage()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);