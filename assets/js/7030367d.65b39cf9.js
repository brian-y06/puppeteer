"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[601627],{603905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var a=r(667294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),d=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(r),u=n,f=c["".concat(i,".").concat(u)]||c[u]||m[u]||p;return r?a.createElement(f,l(l({ref:t},s),{},{components:r})):a.createElement(f,l({ref:t},s))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,l=new Array(p);l[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var d=2;d<p;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},614773:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>o,toc:()=>d});var a=r(487462),n=(r(667294),r(603905));const p={sidebar_label:"Frame.addStyleTag"},l="Frame.addStyleTag() method",o={unversionedId:"api/puppeteer.frame.addstyletag",id:"version-16.0.0/api/puppeteer.frame.addstyletag",title:"Frame.addStyleTag() method",description:"Adds a ` tag into the page with the desired url or a ` tag with the content.",source:"@site/versioned_docs/version-16.0.0/api/puppeteer.frame.addstyletag.md",sourceDirName:"api",slug:"/api/puppeteer.frame.addstyletag",permalink:"/api/puppeteer.frame.addstyletag",draft:!1,tags:[],version:"16.0.0",frontMatter:{sidebar_label:"Frame.addStyleTag"},sidebar:"sidebar",previous:{title:"Frame.addScriptTag",permalink:"/api/puppeteer.frame.addscripttag"},next:{title:"Frame.childFrames",permalink:"/api/puppeteer.frame.childframes"}},i={},d=[{value:"Parameters",id:"parameters",level:2}],s={toc:d};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"frameaddstyletag-method"},"Frame.addStyleTag() method"),(0,n.kt)("p",null,"Adds a ",(0,n.kt)("inlineCode",{parentName:"p"},'<link rel="stylesheet">')," tag into the page with the desired url or a ",(0,n.kt)("inlineCode",{parentName:"p"},'<style type="text/css">')," tag with the content."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"class Frame {\n  addStyleTag(options: FrameAddStyleTagOptions): Promise<ElementHandle<Node>>;\n}\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"options"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.frameaddstyletagoptions"},"FrameAddStyleTagOptions")),(0,n.kt)("td",{parentName:"tr",align:null},"configure the CSS to add to the page.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",{parentName:"p",href:"/api/puppeteer.elementhandle"},"ElementHandle"),"<","Node",">",">"),(0,n.kt)("p",null,"a promise that resolves to the added tag when the stylesheets's ",(0,n.kt)("inlineCode",{parentName:"p"},"onload")," event fires or when the CSS content was injected into the frame."))}m.isMDXComponent=!0}}]);