"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[772514],{603905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>b});var n=t(667294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),i=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=i(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,p=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=i(t),b=o,d=f["".concat(c,".").concat(b)]||f[b]||u[b]||p;return t?n.createElement(d,s(s({ref:r},l),{},{components:t})):n.createElement(d,s({ref:r},l))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var p=t.length,s=new Array(p);s[0]=f;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var i=2;i<p;i++)s[i]=t[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},250860:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>p,metadata:()=>a,toc:()=>i});var n=t(487462),o=(t(667294),t(603905));const p={sidebar_label:"Browser.process"},s="Browser.process() method",a={unversionedId:"api/puppeteer.browser.process",id:"version-15.5.0/api/puppeteer.browser.process",title:"Browser.process() method",description:"The spawned browser process. Returns null if the browser instance was created with Puppeteer.connect().",source:"@site/versioned_docs/version-15.5.0/api/puppeteer.browser.process.md",sourceDirName:"api",slug:"/api/puppeteer.browser.process",permalink:"/15.5.0/api/puppeteer.browser.process",draft:!1,tags:[],version:"15.5.0",frontMatter:{sidebar_label:"Browser.process"},sidebar:"sidebar",previous:{title:"Browser.pages",permalink:"/15.5.0/api/puppeteer.browser.pages"},next:{title:"Browser.target",permalink:"/15.5.0/api/puppeteer.browser.target"}},c={},i=[],l={toc:i};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"browserprocess-method"},"Browser.process() method"),(0,o.kt)("p",null,"The spawned browser process. Returns ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," if the browser instance was created with ",(0,o.kt)("a",{parentName:"p",href:"/15.5.0/api/puppeteer.puppeteer.connect"},"Puppeteer.connect()"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class Browser {\n  process(): ChildProcess | null;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")),(0,o.kt)("p",null,"ChildProcess ","|"," null"))}u.isMDXComponent=!0}}]);