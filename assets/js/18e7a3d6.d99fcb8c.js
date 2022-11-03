"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8],{4852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(9231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,m=p["".concat(d,".").concat(h)]||p[h]||l[h]||i;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=p;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7554:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=n(7626),o=(n(9231),n(4852));const i={title:"Upgrading DID Session"},s=void 0,a={unversionedId:"guides/upgrading-did-session",id:"guides/upgrading-did-session",title:"Upgrading DID Session",description:"Upgrading from did-session@0.x.x to did-session@1.x.x",source:"@site/docs/guides/upgrading-did-session.md",sourceDirName:"guides",slug:"/guides/upgrading-did-session",permalink:"/docs/guides/upgrading-did-session",draft:!1,tags:[],version:"current",frontMatter:{title:"Upgrading DID Session"},sidebar:"docs",previous:{title:"Add Support for a Blockchain",permalink:"/docs/guides/add-chain-support"}},d={},u=[{value:"Upgrading from <code>did-session@0.x.x</code> to <code>did-session@1.x.x</code>",id:"upgrading-from-did-session0xx-to-did-session1xx",level:2}],c={toc:u};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"upgrading-from-did-session0xx-to-did-session1xx"},"Upgrading from ",(0,o.kt)("inlineCode",{parentName:"h2"},"did-session@0.x.x")," to ",(0,o.kt)("inlineCode",{parentName:"h2"},"did-session@1.x.x")),(0,o.kt)("p",null,"AuthProviders change to AuthMethod interfaces. Similarly you can import the auth libraries you need. How you configure and manage\nthese AuthMethods may differ, but each will return an AuthMethod function to be used with did-session."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Before with v0.x.x\n//...\nimport { EthereumAuthProvider } from '@ceramicnetwork/blockchain-utils-linking'\n \nconst ethProvider = // import/get your web3 eth provider\nconst addresses = await ethProvider.request({ method: 'eth_requestAccounts' })\nconst authProvider = new EthereumAuthProvider(ethProvider, addresses[0])\nconst session = new DIDSession({ authProvider })\nconst did = await session.authorize()\n\n// Now did-session@1.0.0\n...\nimport { EthereumWebAuth, getAccountId } from '@didtools/pkh-ethereum'\n \nconst ethProvider = // import/get your web3 eth provider\nconst addresses = await ethProvider.request({ method: 'eth_requestAccounts' })\nconst accountId = await getAccountId(ethProvider, addresses[0])\nconst authMethod = await EthereumWebAuth.getAuthMethod(ethProvider, accountId)\nconst session = await DIDSession.authorize(authMethod, { resources: [...]})\nconst did = session.did\n")),(0,o.kt)("h1",{id:"upgrading-from-glazeddid-session-to-did-session"},"Upgrading From ",(0,o.kt)("inlineCode",{parentName:"h1"},"@glazed/did-session")," to ",(0,o.kt)("inlineCode",{parentName:"h1"},"did-session")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"authorize")," changes to a static method which returns a did-session instance and ",(0,o.kt)("inlineCode",{parentName:"p"},"getDID()")," becomes a ",(0,o.kt)("inlineCode",{parentName:"p"},"did")," getter. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Before @glazed/did-session\nconst session = new DIDSession({ authProvider })\nconst did = await session.authorize()\n\n// Now did-session\nconst session = await DIDSession.authorize(authProvider, { resources: [...]})\nconst did = session.did\n")),(0,o.kt)("p",null,"Requesting resources are required now when authorizing, before wildcard (access all) was the default. You can continue to use\nwildcard by passing the following ",(0,o.kt)("em",{parentName:"p"}," below. Wildcard is typically only used with ",(0,o.kt)("inlineCode",{parentName:"em"},"@glazed")," libraries and/or tile documents and\nit is best to switch over when possible, as the wildcard option may be ")," deprecated in the future. When using with\ncomposites/models you should request the minimum needed resources instead."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const session = await DIDSession.authorize(authProvider, { resources: [`ceramic://*`]})\nconst did = session.did\n")))}l.isMDXComponent=!0}}]);