"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[374661],{603905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=c(n),y=o,f=d["".concat(l,".").concat(y)]||d[y]||u[y]||i;return n?r.createElement(f,p(p({ref:t},s),{},{components:n})):r.createElement(f,p({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,p=new Array(i);p[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,p[1]=a;for(var c=2;c<i;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5931:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(487462),o=(n(667294),n(603905));const i={sidebar_label:"ClickOptions.delay"},p="ClickOptions.delay property",a={unversionedId:"api/puppeteer.clickoptions.delay",id:"version-15.5.0/api/puppeteer.clickoptions.delay",title:"ClickOptions.delay property",description:"Time to wait between mousedown and mouseup in milliseconds.",source:"@site/versioned_docs/version-15.5.0/api/puppeteer.clickoptions.delay.md",sourceDirName:"api",slug:"/api/puppeteer.clickoptions.delay",permalink:"/15.5.0/api/puppeteer.clickoptions.delay",draft:!1,tags:[],version:"15.5.0",frontMatter:{sidebar_label:"ClickOptions.delay"},sidebar:"sidebar",previous:{title:"ClickOptions.clickCount",permalink:"/15.5.0/api/puppeteer.clickoptions.clickcount"},next:{title:"ClickOptions.offset",permalink:"/15.5.0/api/puppeteer.clickoptions.offset"}},l={},c=[],s={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"clickoptionsdelay-property"},"ClickOptions.delay property"),(0,o.kt)("p",null,"Time to wait between ",(0,o.kt)("inlineCode",{parentName:"p"},"mousedown")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"mouseup")," in milliseconds."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ClickOptions {\n  delay?: number;\n}\n")))}u.isMDXComponent=!0}}]);