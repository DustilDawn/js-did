"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[137],{4852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var s=n(9231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=s.createContext({}),l=function(e){var t=s.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return s.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,h=p["".concat(d,".").concat(m)]||p[m]||u[m]||i;return n?s.createElement(h,r(r({ref:t},c),{},{components:n})):s.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var l=2;l<i;l++)r[l]=n[l];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5974:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=n(2203),a=(n(9231),n(4852));const i={id:"did_session",title:"Module: did-session",custom_edit_url:null},r=void 0,o={unversionedId:"api/modules/did_session",id:"api/modules/did_session",title:"Module: did-session",description:"Manages user account and DID in web based environments.",source:"@site/docs/api/modules/did_session.md",sourceDirName:"api/modules",slug:"/api/modules/did_session",permalink:"/docs/api/modules/did_session",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"did_session",title:"Module: did-session",custom_edit_url:null},sidebar:"api",previous:{title:"Class: DID",permalink:"/docs/api/classes/dids.DID"},next:{title:"Class: DIDSession",permalink:"/docs/api/classes/did_session.DIDSession"}},d={},l=[{value:"Purpose",id:"purpose",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Typical usage pattern",id:"typical-usage-pattern",level:2},{value:"Upgrading from <code>@glazed/did-session</code> to <code>did-session</code>",id:"upgrading-from-glazeddid-session-to-did-session",level:2},{value:"Upgrading from <code>did-session@0.x.x</code> to <code>did-session@1.x.x</code>",id:"upgrading-from-did-session0xx-to-did-session1xx",level:2},{value:"Classes",id:"classes",level:2},{value:"Type Aliases",id:"type-aliases",level:2},{value:"SessionParams",id:"sessionparams",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Functions",id:"functions",level:2},{value:"createDIDCacao",id:"createdidcacao",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"createDIDKey",id:"createdidkey",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Manages user account and DID in web based environments."),(0,a.kt)("h2",{id:"purpose"},"Purpose"),(0,a.kt)("p",null,"Manages, creates and authorizes a DID session key for a user. Returns an authenticated DIDs instance\nto be used in other Ceramic libraries. Supports did:pkh for blockchain accounts with Sign-In with\nEthereum and CACAO for authorization."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install did-session\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Authorize and use DIDs where needed. Import the AuthMethod you need, Ethereum accounts used here for example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { DIDSession } from 'did-session'\nimport { EthereumWebAuth, getAccountId } from '@didtools/pkh-ethereum'\n\nconst ethProvider = // import/get your web3 eth provider\nconst addresses = await ethProvider.enable()\nconst accountId = await getAccountId(ethProvider, addresses[0])\nconst authMethod = EthereumWebAuth.getAuthMethod(provider, accountId)\n\nconst session = await DIDSession.authorize(authProvider, { resources: [...]})\n\n// Uses DIDs in ceramic & glaze libraries, ie\nconst ceramic = new CeramicClient()\nceramic.did = session.did\n\n// pass ceramic instance where needed\n\n")),(0,a.kt)("p",null,"You can serialize a session to store for later and then re-initialize. Currently sessions are valid\nfor 1 day by default."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Create session as above, store for later\nconst session = await DIDSession.authorize(authMethod, { resources: [...]})\nconst sessionString = session.serialize()\n\n// write/save session string where you want (ie localstorage)\n// ...\n\n// Later re initialize session\nconst session2 = await DIDSession.fromSession(sessionString)\nconst ceramic = new CeramicClient()\nceramic.did = session2.did\n")),(0,a.kt)("p",null,"Additional helper functions are available to help you manage a session lifecycle and the user experience."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Check if authorized or created from existing session string\ndidsession.hasSession\n\n// Check if session expired\ndidsession.isExpired\n\n// Get resources session is authorized for\ndidsession.authorizations\n\n// Check number of seconds till expiration, may want to re auth user at a time before expiration\ndidsession.expiresInSecs\n")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"The resources your app needs to write access to must be passed during authorization. Resources are an array\nof Model Stream Ids or Streams Ids. Typically you * will just pass resources from ",(0,a.kt)("inlineCode",{parentName:"p"},"@composedb")," libraries as\nyou will already manage your Composites and Models there. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { ComposeClient } from '@composedb/client'\n\n//... Reference above and `@composedb` docs for additional configuration here\n\nconst client = new ComposeClient({ceramic, definition})\nconst resources = client.resources\nconst session = await DIDSession.authorize(authMethod, { resources })\nclient.setDID(session.did)\n")),(0,a.kt)("p",null,"By default a session will expire in 1 day. You can change this time by passing the ",(0,a.kt)("inlineCode",{parentName:"p"},"expiresInSecs")," option to\nindicate how many seconds from the current time you want this session to expire."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const oneWeek = 60 * 60 * 24 * 7\nconst session = await DIDSession.authorize(authMethod, { resources: [...], expiresInSecs: oneWeek })\n")),(0,a.kt)("p",null,"A domain/app name is used when making requests, by default in a browser based environment the library will use\nthe domain name of your app. If you are using the library in a non web based environment you will need to pass\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"domain")," option otherwise an error will thrown."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const session = await DIDSession.authorize(authMethod, { resources: [...], domain: 'YourAppName' })\n")),(0,a.kt)("h2",{id:"typical-usage-pattern"},"Typical usage pattern"),(0,a.kt)("p",null,"A typical pattern is to store a serialized session in local storage and load on use if available. Then\ncheck that a session is still valid before making writes."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Warning:")," LocalStorage is used for illustrative purposes here and may not be best for your app, as\nthere is a number of known issues with storing secret material in browser storage. The session string\nallows anyone with access to that string to make writes for that user for the time and resources that\nsession is valid for. How that session string is stored and managed is the responsibility of the application."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { DIDSession } from 'did-session'\nimport type { AuthMethod } from '@didtools/cacao'\nimport { EthereumWebAuth, getAccountId } from '@didtools/pkh-ethereum'\n\nconst ethProvider = // import/get your web3 eth provider\nconst addresses = await ethProvider.enable()\nconst accountId = await getAccountId(ethProvider, addresses[0])\nconst authMethod = EthereumWebAuth.getAuthMethod(provider, accountId)\n\nconst loadSession = async(authMethod: AuthMethod):Promise<DIDSession> => {\n  const sessionStr = localStorage.getItem('didsession')\n  let session\n\n  if (sessionStr) {\n    session = await DIDSession.fromSession(sessionStr)\n  }\n\n  if (!session || (session.hasSession && session.isExpired)) {\n    session = await DIDSession.authorize(authProvider, { resources: [...]})\n    localStorage.setItem('didsession', session.serialize())\n  }\n\n  return session\n}\n\nconst session = await loadSession(authMethod)\nconst ceramic = new CeramicClient()\nceramic.did = session.did\n\n// pass ceramic instance where needed, ie glaze\n// ...\n\n// before ceramic writes, check if session is still valid, if expired, create new\nif (session.isExpired) {\n  const session = loadSession(authProvider)\n  ceramic.did = session.did\n}\n\n// continue to write\n")),(0,a.kt)("h2",{id:"upgrading-from-glazeddid-session-to-did-session"},"Upgrading from ",(0,a.kt)("inlineCode",{parentName:"h2"},"@glazed/did-session")," to ",(0,a.kt)("inlineCode",{parentName:"h2"},"did-session")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"authorize")," changes to a static method which returns a did-session instance and ",(0,a.kt)("inlineCode",{parentName:"p"},"getDID()")," becomes a ",(0,a.kt)("inlineCode",{parentName:"p"},"did")," getter. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Before @glazed/did-session\nconst session = new DIDSession({ authProvider })\nconst did = await session.authorize()\n\n// Now did-session\nconst session = await DIDSession.authorize(authMethod, { resources: [...]})\nconst did = session.did\n")),(0,a.kt)("p",null,"Requesting resources are required now when authorizing, before wildcard (access all) was the default. You can continue to use\nwildcard by passing the following ",(0,a.kt)("em",{parentName:"p"}," below. Wildcard is typically only used with ",(0,a.kt)("inlineCode",{parentName:"em"},"@glazed")," libraries and/or tile documents and\nit is best to switch over when possible, as the wildcard option may be ")," deprecated in the future. When using with\ncomposites/models you should request the minimum needed resources instead."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const session = await DIDSession.authorize(authMethod, { resources: [`ceramic://*`]})\nconst did = session.did\n")),(0,a.kt)("h2",{id:"upgrading-from-did-session0xx-to-did-session1xx"},"Upgrading from ",(0,a.kt)("inlineCode",{parentName:"h2"},"did-session@0.x.x")," to ",(0,a.kt)("inlineCode",{parentName:"h2"},"did-session@1.x.x")),(0,a.kt)("p",null,"AuthProviders change to AuthMethod interfaces. Similarly you can import the auth libraries you need. How you configure and manage\nthese AuthMethods may differ, but each will return an AuthMethod function to be used with did-session."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Before with v0.x.x\n...\nimport { EthereumAuthProvider } from '@ceramicnetwork/blockchain-utils-linking'\n\nconst ethProvider = // import/get your web3 eth provider\nconst addresses = await ethProvider.enable()\nconst authProvider = new EthereumAuthProvider(ethProvider, addresses[0])\nconst session = new DIDSession({ authProvider })\nconst did = await session.authorize()\n\n// Now did-session@1.0.0\n...\nimport { EthereumWebAuth, getAccountId } from '@didtools/pkh-ethereum'\n\nconst ethProvider = // import/get your web3 eth provider\nconst addresses = await ethProvider.enable()\nconst accountId = await getAccountId(ethProvider, addresses[0])\nconst authMethod = EthereumWebAuth.getAuthMethod(provider, accountId)\nconst session = await DIDSession.authorize(authMethod, { resources: [...]})\nconst did = session.did\n")),(0,a.kt)("h2",{id:"classes"},"Classes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/classes/did_session.DIDSession"},"DIDSession"))),(0,a.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,a.kt)("h3",{id:"sessionparams"},"SessionParams"),(0,a.kt)("p",null,"\u01ac ",(0,a.kt)("strong",{parentName:"p"},"SessionParams"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"cacao")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Cacao"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"did")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"DID"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"keySeed")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Uint8Array"))))),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"createdidcacao"},"createDIDCacao"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"createDIDCacao"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"didKey"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"cacao"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"DID"),">"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"didKey")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"DID"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"cacao")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Cacao"))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"DID"),">"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"createdidkey"},"createDIDKey"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"createDIDKey"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"seed?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"DID"),">"),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"seed?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Uint8Array"))))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"DID"),">"))}u.isMDXComponent=!0}}]);