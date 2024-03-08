/*! For license information please see 1b6e5621.93d70d3a.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[25591],{6342:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var n=s(85893),t=s(11151);const i={sidebar_label:"API"},l="@puppeteer/browsers",o={id:"browsers-api/index",title:"@puppeteer/browsers",description:"Manage and launch browsers/drivers from a CLI or programmatically.",source:"@site/versioned_docs/version-22.4.1/browsers-api/index.md",sourceDirName:"browsers-api",slug:"/browsers-api/",permalink:"/browsers-api/",draft:!1,unlisted:!1,tags:[],version:"22.4.1",frontMatter:{sidebar_label:"API"},sidebar:"browsersApi",next:{title:"launch",permalink:"/browsers-api/browsers.launch"}},d={},a=[{value:"CLI",id:"cli",level:2},{value:"Known limitations",id:"known-limitations",level:2},{value:"API",id:"api",level:2},{value:"Classes",id:"classes",level:2},{value:"Enumerations",id:"enumerations",level:2},{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"puppeteerbrowsers",children:"@puppeteer/browsers"}),"\n",(0,n.jsx)(r.p,{children:"Manage and launch browsers/drivers from a CLI or programmatically."}),"\n",(0,n.jsx)(r.h2,{id:"cli",children:"CLI"}),"\n",(0,n.jsxs)(r.p,{children:["Use ",(0,n.jsx)(r.code,{children:"npx"})," to run the CLI:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"npx @puppeteer/browsers --help\n"})}),"\n",(0,n.jsx)(r.p,{children:"CLI help will provide all documentation you need to use the CLI."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"npx @puppeteer/browsers --help # help for all commands\nnpx @puppeteer/browsers install --help # help for the install command\nnpx @puppeteer/browsers launch --help # help for the launch command\n"})}),"\n",(0,n.jsx)(r.h2,{id:"known-limitations",children:"Known limitations"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["We support installing and running Firefox, Chrome and Chromium. The ",(0,n.jsx)(r.code,{children:"latest"}),", ",(0,n.jsx)(r.code,{children:"beta"}),", ",(0,n.jsx)(r.code,{children:"dev"}),", ",(0,n.jsx)(r.code,{children:"canary"}),", ",(0,n.jsx)(r.code,{children:"stable"})," keywords are only supported for the install command. For the ",(0,n.jsx)(r.code,{children:"launch"})," command you need to specify an exact build ID. The build ID is provided by the ",(0,n.jsx)(r.code,{children:"install"})," command (see ",(0,n.jsx)(r.code,{children:"npx @puppeteer/browsers install --help"})," for the format)."]}),"\n",(0,n.jsx)(r.li,{children:"Launching the system browsers is only possible for Chrome/Chromium."}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"api",children:"API"}),"\n",(0,n.jsxs)(r.p,{children:["The programmatic API allows installing and launching browsers from your code. See the ",(0,n.jsx)(r.code,{children:"test"})," folder for examples on how to use the ",(0,n.jsx)(r.code,{children:"install"}),", ",(0,n.jsx)(r.code,{children:"canInstall"}),", ",(0,n.jsx)(r.code,{children:"launch"}),", ",(0,n.jsx)(r.code,{children:"computeExecutablePath"}),", ",(0,n.jsx)(r.code,{children:"computeSystemExecutablePath"})," and other methods."]}),"\n",(0,n.jsx)(r.h2,{id:"classes",children:"Classes"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Class"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/browsers-api/browsers.cli",children:"CLI"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/browsers-api/browsers.installedbrowser",children:"InstalledBrowser"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/browsers-api/browsers.process",children:"Process"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/browsers-api/browsers.timeouterror",children:"TimeoutError"})}),(0,n.jsx)(r.td,{})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"enumerations",children:"Enumerations"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Enumeration"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/browsers-api/browsers.browser",children:"Browser"})}),(0,n.jsx)(r.td,{children:"Supported browsers."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/browsers-api/browsers.browserplatform",children:"BrowserPlatform"})}),(0,n.jsx)(r.td,{children:"Platform names used to identify a OS platform x architecture combination in the way that is relevant for the browser download."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/browsers-api/browsers.chromereleasechannel",children:"ChromeReleaseChannel"})}),(0,n.jsx)(r.td,{})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"functions",children:"Functions"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Function"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/browsers-api/browsers.candownload",children:"canDownload(options)"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/browsers-api/browsers.computeexecutablepath",children:"computeExecutablePath(options)"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/browsers-api/browsers.computesystemexecutablepath",children:"computeSystemExecutablePath(options)"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/browsers-api/browsers.createprofile",children:"createProfile(browser, opts)"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/browsers-api/browsers.detectbrowserplatform",children:"detectBrowserPlatform()"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/browsers-api/browsers.getinstalledbrowsers",children:"getInstalledBrowsers(options)"})}),(0,n.jsx)(r.td,{children:"Returns metadata about browsers installed in the cache directory."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/browsers-api/browsers.getversioncomparator",children:"getVersionComparator(browser)"})}),(0,n.jsx)(r.td,{children:"Returns a version comparator for the given browser that can be used to sort browser versions."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/browsers-api/browsers.install",children:"install(options)"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/browsers-api/browsers.install_1",children:"install(options)"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/browsers-api/browsers.launch",children:"launch(opts)"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/browsers-api/browsers.makeprogresscallback",children:"makeProgressCallback(browser, buildId)"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/browsers-api/browsers.resolvebuildid",children:"resolveBuildId(browser, platform, tag)"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/browsers-api/browsers.uninstall",children:"uninstall(options)"})}),(0,n.jsx)(r.td,{})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"interfaces",children:"Interfaces"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Interface"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/browsers-api/browsers.getinstalledbrowsersoptions",children:"GetInstalledBrowsersOptions"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/browsers-api/browsers.installoptions",children:"InstallOptions"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/browsers-api/browsers.launchoptions",children:"LaunchOptions"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/browsers-api/browsers.options",children:"Options"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/browsers-api/browsers.profileoptions",children:"ProfileOptions"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/browsers-api/browsers.systemoptions",children:"SystemOptions"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/browsers-api/browsers.uninstalloptions",children:"UninstallOptions"})}),(0,n.jsx)(r.td,{})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"variables",children:"Variables"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Variable"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/browsers-api/browsers.cdp_websocket_endpoint_regex",children:"CDP_WEBSOCKET_ENDPOINT_REGEX"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/browsers-api/browsers.webdriver_bidi_websocket_endpoint_regex",children:"WEBDRIVER_BIDI_WEBSOCKET_ENDPOINT_REGEX"})}),(0,n.jsx)(r.td,{})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},75251:(e,r,s)=>{var n=s(67294),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,s){var n,i={},a=null,c=null;for(n in void 0!==s&&(a=""+s),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(c=r.ref),r)l.call(r,n)&&!d.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:t,type:e,key:a,ref:c,props:i,_owner:o.current}}r.Fragment=i,r.jsx=a,r.jsxs=a},85893:(e,r,s)=>{e.exports=s(75251)},11151:(e,r,s)=>{s.d(r,{Z:()=>o,a:()=>l});var n=s(67294);const t={},i=n.createContext(t);function l(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);