"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[587009],{603905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(667294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),p=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(a.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,m=d["".concat(a,".").concat(f)]||d[f]||u[f]||s;return t?n.createElement(m,c(c({ref:r},l),{},{components:t})):n.createElement(m,c({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,c=new Array(s);c[0]=d;var i={};for(var a in r)hasOwnProperty.call(r,a)&&(i[a]=r[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<s;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},531568:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=t(487462),o=(t(667294),t(603905));const s={sidebar_label:"Browser.disconnect"},c="Browser.disconnect() method",i={unversionedId:"api/puppeteer.browser.disconnect",id:"version-15.5.0/api/puppeteer.browser.disconnect",title:"Browser.disconnect() method",description:"Disconnects Puppeteer from the browser, but leaves the Chromium process running. After calling disconnect, the Browser object is considered disposed and cannot be used anymore.",source:"@site/versioned_docs/version-15.5.0/api/puppeteer.browser.disconnect.md",sourceDirName:"api",slug:"/api/puppeteer.browser.disconnect",permalink:"/15.5.0/api/puppeteer.browser.disconnect",draft:!1,tags:[],version:"15.5.0",frontMatter:{sidebar_label:"Browser.disconnect"},sidebar:"sidebar",previous:{title:"Browser.defaultBrowserContext",permalink:"/15.5.0/api/puppeteer.browser.defaultbrowsercontext"},next:{title:"Browser.isConnected",permalink:"/15.5.0/api/puppeteer.browser.isconnected"}},a={},p=[],l={toc:p};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"browserdisconnect-method"},"Browser.disconnect() method"),(0,o.kt)("p",null,"Disconnects Puppeteer from the browser, but leaves the Chromium process running. After calling ",(0,o.kt)("inlineCode",{parentName:"p"},"disconnect"),", the ",(0,o.kt)("a",{parentName:"p",href:"/15.5.0/api/puppeteer.browser"},"Browser")," object is considered disposed and cannot be used anymore."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class Browser {\n  disconnect(): void;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")),(0,o.kt)("p",null,"void"))}u.isMDXComponent=!0}}]);