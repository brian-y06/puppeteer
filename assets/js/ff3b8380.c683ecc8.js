/*! For license information please see ff3b8380.c683ecc8.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2632],{42200:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>a,contentTitle:()=>p,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=s(85893),n=s(11151);const i={sidebar_label:"Browser"},p="Browser class",o={id:"api/puppeteer.browser",title:"Browser class",description:"Browser represents a browser instance that is either:",source:"@site/versioned_docs/version-22.4.1/api/puppeteer.browser.md",sourceDirName:"api",slug:"/api/puppeteer.browser",permalink:"/api/puppeteer.browser",draft:!1,unlisted:!1,tags:[],version:"22.4.1",frontMatter:{sidebar_label:"Browser"},sidebar:"api",previous:{title:"Puppeteer.unregisterCustomQueryHandler",permalink:"/api/puppeteer.puppeteer.unregistercustomqueryhandler"},next:{title:"Browser.browserContexts",permalink:"/api/puppeteer.browser.browsercontexts"}},a={},c=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"browser-class",children:"Browser class"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/api/puppeteer.browser",children:"Browser"})," represents a browser instance that is either:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["connected to via ",(0,t.jsx)(r.a,{href:"/api/puppeteer.puppeteer.connect",children:"Puppeteer.connect()"})," or - launched by ",(0,t.jsx)(r.a,{href:"/api/puppeteer.puppeteernode.launch",children:"PuppeteerNode.launch()"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/api/puppeteer.browser",children:"Browser"})," ",(0,t.jsx)(r.a,{href:"/api/puppeteer.eventemitter",children:"emits"})," various events which are documented in the ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browserevent",children:"BrowserEvent"})," enum."]}),"\n",(0,t.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export declare abstract class Browser extends EventEmitter<BrowserEvents>\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Extends:"})," ",(0,t.jsx)(r.a,{href:"/api/puppeteer.eventemitter",children:"EventEmitter"}),"<",(0,t.jsx)(r.a,{href:"/api/puppeteer.browserevents",children:"BrowserEvents"}),">"]}),"\n",(0,t.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(r.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,t.jsx)(r.code,{children:"Browser"})," class."]}),"\n",(0,t.jsx)(r.h2,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsxs)(r.p,{children:["Using a ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser",children:"Browser"})," to create a ",(0,t.jsx)(r.a,{href:"/api/puppeteer.page",children:"Page"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch();\nconst page = await browser.newPage();\nawait page.goto('https://example.com');\nawait browser.close();\n"})}),"\n",(0,t.jsx)(r.h2,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsxs)(r.p,{children:["Disconnecting from and reconnecting to a ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser",children:"Browser"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch();\n// Store the endpoint to be able to reconnect to the browser.\nconst browserWSEndpoint = browser.wsEndpoint();\n// Disconnect puppeteer from the browser.\nawait browser.disconnect();\n\n// Use the endpoint to reestablish a connection\nconst browser2 = await puppeteer.connect({browserWSEndpoint});\n// Close the browser.\nawait browser2.close();\n"})}),"\n",(0,t.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Property"}),(0,t.jsx)(r.th,{children:"Modifiers"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"connected"}),(0,t.jsx)(r.td,{children:(0,t.jsx)("code",{children:"readonly"})}),(0,t.jsx)(r.td,{children:"boolean"}),(0,t.jsxs)(r.td,{children:["Whether Puppeteer is connected to this ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser",children:"browser"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"debugInfo"}),(0,t.jsx)(r.td,{children:(0,t.jsx)("code",{children:"readonly"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/api/puppeteer.debuginfo",children:"DebugInfo"})}),(0,t.jsx)(r.td,{children:"Get debug information from Puppeteer."})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Method"}),(0,t.jsx)(r.th,{children:"Modifiers"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.browsercontexts",children:"browserContexts()"})}),(0,t.jsx)(r.td,{}),(0,t.jsxs)(r.td,{children:[(0,t.jsxs)("p",{children:["Gets a list of open ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser contexts"}),"."]}),(0,t.jsxs)("p",{children:["In a newly-created ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser",children:"browser"}),", this will return a single instance of ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"BrowserContext"}),"."]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.close",children:"close()"})}),(0,t.jsx)(r.td,{}),(0,t.jsxs)(r.td,{children:["Closes this ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser",children:"browser"})," and all associated ",(0,t.jsx)(r.a,{href:"/api/puppeteer.page",children:"pages"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.createbrowsercontext",children:"createBrowserContext(options)"})}),(0,t.jsx)(r.td,{}),(0,t.jsxs)(r.td,{children:[(0,t.jsxs)("p",{children:["Creates a new ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser context"}),"."]}),(0,t.jsxs)("p",{children:["This won't share cookies/cache with other ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser contexts"}),"."]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.defaultbrowsercontext",children:"defaultBrowserContext()"})}),(0,t.jsx)(r.td,{}),(0,t.jsxs)(r.td,{children:["Gets the default ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser context"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.disconnect",children:"disconnect()"})}),(0,t.jsx)(r.td,{}),(0,t.jsxs)(r.td,{children:["Disconnects Puppeteer from this ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser",children:"browser"}),", but leaves the process running."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.isconnected",children:"isConnected()"})}),(0,t.jsx)(r.td,{}),(0,t.jsxs)(r.td,{children:["Whether Puppeteer is connected to this ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser",children:"browser"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.newpage",children:"newPage()"})}),(0,t.jsx)(r.td,{}),(0,t.jsxs)(r.td,{children:["Creates a new ",(0,t.jsx)(r.a,{href:"/api/puppeteer.page",children:"page"})," in the ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.defaultbrowsercontext",children:"default browser context"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.pages",children:"pages()"})}),(0,t.jsx)(r.td,{}),(0,t.jsxs)(r.td,{children:[(0,t.jsxs)("p",{children:["Gets a list of all open ",(0,t.jsx)(r.a,{href:"/api/puppeteer.page",children:"pages"})," inside this ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser",children:"Browser"}),"."]}),(0,t.jsxs)("p",{children:["If there ar multiple ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser contexts"}),", this returns all ",(0,t.jsx)(r.a,{href:"/api/puppeteer.page",children:"pages"})," in all ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser contexts"}),"."]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.process",children:"process()"})}),(0,t.jsx)(r.td,{}),(0,t.jsxs)(r.td,{children:["Gets the associated ",(0,t.jsx)(r.a,{href:"https://nodejs.org/api/child_process.html#class-childprocess",children:"ChildProcess"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.target",children:"target()"})}),(0,t.jsx)(r.td,{}),(0,t.jsxs)(r.td,{children:["Gets the ",(0,t.jsx)(r.a,{href:"/api/puppeteer.target",children:"target"})," associated with the ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.defaultbrowsercontext",children:"default browser context"}),")."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.targets",children:"targets()"})}),(0,t.jsx)(r.td,{}),(0,t.jsxs)(r.td,{children:[(0,t.jsxs)("p",{children:["Gets all active ",(0,t.jsx)(r.a,{href:"/api/puppeteer.target",children:"targets"}),"."]}),(0,t.jsxs)("p",{children:["In case of multiple ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser contexts"}),", this returns all ",(0,t.jsx)(r.a,{href:"/api/puppeteer.target",children:"targets"})," in all ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser contexts"}),"."]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.useragent",children:"userAgent()"})}),(0,t.jsx)(r.td,{}),(0,t.jsxs)(r.td,{children:[(0,t.jsxs)("p",{children:["Gets this ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser",children:"browser's"})," original user agent."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)(r.a,{href:"/api/puppeteer.page",children:"Pages"})," can override the user agent with ",(0,t.jsx)(r.a,{href:"/api/puppeteer.page.setuseragent",children:"Page.setUserAgent()"}),"."]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.version",children:"version()"})}),(0,t.jsx)(r.td,{}),(0,t.jsxs)(r.td,{children:[(0,t.jsxs)("p",{children:["Gets a string representing this ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser",children:"browser's"})," name and version."]}),(0,t.jsxs)("p",{children:["For headless browser, this is similar to ",(0,t.jsx)("code",{children:'"HeadlessChrome/61.0.3153.0"'}),". For non-headless or new-headless, this is similar to ",(0,t.jsx)("code",{children:'"Chrome/61.0.3153.0"'}),". For Firefox, it is similar to ",(0,t.jsx)("code",{children:'"Firefox/116.0a1"'}),"."]}),(0,t.jsxs)("p",{children:["The format of ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.version",children:"Browser.version()"})," might change with future releases of browsers."]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.waitfortarget",children:"waitForTarget(predicate, options)"})}),(0,t.jsx)(r.td,{}),(0,t.jsxs)(r.td,{children:[(0,t.jsxs)("p",{children:["Waits until a ",(0,t.jsx)(r.a,{href:"/api/puppeteer.target",children:"target"})," matching the given ",(0,t.jsx)("code",{children:"predicate"})," appears and returns it."]}),(0,t.jsxs)("p",{children:["This will look all open ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser contexts"}),"."]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.wsendpoint",children:"wsEndpoint()"})}),(0,t.jsx)(r.td,{}),(0,t.jsxs)(r.td,{children:[(0,t.jsxs)("p",{children:["Gets the WebSocket URL to connect to this ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser",children:"browser"}),"."]}),(0,t.jsxs)("p",{children:["This is usually used with ",(0,t.jsx)(r.a,{href:"/api/puppeteer.puppeteer.connect",children:"Puppeteer.connect()"}),"."]}),(0,t.jsxs)("p",{children:["You can find the debugger URL (",(0,t.jsx)("code",{children:"webSocketDebuggerUrl"}),") from ",(0,t.jsx)("code",{children:(0,t.jsx)(r.a,{href:"http://HOST:PORT/json/version",children:"http://HOST:PORT/json/version"})}),"."]}),(0,t.jsxs)("p",{children:["See ",(0,t.jsx)(r.a,{href:"https://chromedevtools.github.io/devtools-protocol/#how-do-i-access-the-browser-target",children:"browser endpoint"})," for more information."]})]})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},75251:(e,r,s)=>{var t=s(67294),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,s){var t,i={},c=null,d=null;for(t in void 0!==s&&(c=""+s),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(d=r.ref),r)p.call(r,t)&&!a.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:n,type:e,key:c,ref:d,props:i,_owner:o.current}}r.Fragment=i,r.jsx=c,r.jsxs=c},85893:(e,r,s)=>{e.exports=s(75251)},11151:(e,r,s)=>{s.d(r,{Z:()=>o,a:()=>p});var t=s(67294);const n={},i=t.createContext(n);function p(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:p(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);