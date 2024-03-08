/*! For license information please see 50e4770e.11d53380.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[74308],{57828:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var n=t(85893),s=t(11151);const a={sidebar_label:"Mouse.dragEnter"},o="Mouse.dragEnter() method",d={id:"api/puppeteer.mouse.dragenter",title:"Mouse.dragEnter() method",description:"Dispatches a dragenter event.",source:"@site/versioned_docs/version-22.4.1/api/puppeteer.mouse.dragenter.md",sourceDirName:"api",slug:"/api/puppeteer.mouse.dragenter",permalink:"/api/puppeteer.mouse.dragenter",draft:!1,unlisted:!1,tags:[],version:"22.4.1",frontMatter:{sidebar_label:"Mouse.dragEnter"},sidebar:"api",previous:{title:"Mouse.dragAndDrop",permalink:"/api/puppeteer.mouse.draganddrop"},next:{title:"Mouse.dragOver",permalink:"/api/puppeteer.mouse.dragover"}},i={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function p(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"mousedragenter-method",children:"Mouse.dragEnter() method"}),"\n",(0,n.jsxs)(r.p,{children:["Dispatches a ",(0,n.jsx)(r.code,{children:"dragenter"})," event."]}),"\n",(0,n.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class Mouse {\n  abstract dragEnter(\n    target: Point,\n    data: Protocol.Input.DragData\n  ): Promise<void>;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"target"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/api/puppeteer.point",children:"Point"})}),(0,n.jsxs)(r.td,{children:["point for emitting ",(0,n.jsx)("code",{children:"dragenter"})," event"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"data"}),(0,n.jsx)(r.td,{children:"Protocol.Input.DragData"}),(0,n.jsx)(r.td,{children:"drag data containing items and operations mask"})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:"Promise<void>"})]})}function l(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},75251:(e,r,t)=>{var n=t(67294),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,a={},c=null,p=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(p=r.ref),r)o.call(r,n)&&!i.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:s,type:e,key:c,ref:p,props:a,_owner:d.current}}r.Fragment=a,r.jsx=c,r.jsxs=c},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>d,a:()=>o});var n=t(67294);const s={},a=n.createContext(s);function o(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);