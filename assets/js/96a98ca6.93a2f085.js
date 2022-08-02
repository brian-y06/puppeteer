"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[419377],{603905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(667294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(t),f=o,d=m["".concat(u,".").concat(f)]||m[f]||s[f]||a;return t?n.createElement(d,p(p({ref:r},c),{},{components:t})):n.createElement(d,p({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=m;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var l=2;l<a;l++)p[l]=t[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},10269:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>p,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=t(487462),o=(t(667294),t(603905));const a={sidebar_label:"TimeoutError"},p="TimeoutError class",i={unversionedId:"api/puppeteer.timeouterror",id:"version-15.5.0/api/puppeteer.timeouterror",title:"TimeoutError class",description:"TimeoutError is emitted whenever certain operations are terminated due to timeout.",source:"@site/versioned_docs/version-15.5.0/api/puppeteer.timeouterror.md",sourceDirName:"api",slug:"/api/puppeteer.timeouterror",permalink:"/15.5.0/api/puppeteer.timeouterror",draft:!1,tags:[],version:"15.5.0",frontMatter:{sidebar_label:"TimeoutError"},sidebar:"sidebar",previous:{title:"TargetFilterCallback",permalink:"/15.5.0/api/puppeteer.targetfiltercallback"},next:{title:"Touchscreen",permalink:"/15.5.0/api/puppeteer.touchscreen"}},u={},l=[{value:"Remarks",id:"remarks",level:2}],c={toc:l};function s(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"timeouterror-class"},"TimeoutError class"),(0,o.kt)("p",null,"TimeoutError is emitted whenever certain operations are terminated due to timeout."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class TimeoutError extends CustomError\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Extends:")," ",(0,o.kt)("a",{parentName:"p",href:"/15.5.0/api/puppeteer.customerror"},"CustomError")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"Example operations are ",(0,o.kt)("a",{parentName:"p",href:"/15.5.0/api/puppeteer.page.waitforselector"},"page.waitForSelector")," or ",(0,o.kt)("a",{parentName:"p",href:"/15.5.0/api/puppeteer.puppeteernode.launch"},"puppeteer.launch"),"."))}s.isMDXComponent=!0}}]);