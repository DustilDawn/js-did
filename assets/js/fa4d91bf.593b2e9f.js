"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[930],{4852:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>c});var n=t(9231);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=n.createContext({}),i=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=i(e.components);return n.createElement(p.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=i(t),c=l,b=m["".concat(p,".").concat(c)]||m[c]||d[c]||r;return t?n.createElement(b,o(o({ref:a},u),{},{components:t})):n.createElement(b,o({ref:a},u))}));function c(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=m;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var i=2;i<r;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1459:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>g,contentTitle:()=>y,default:()=>w,frontMatter:()=>h,metadata:()=>f,toc:()=>T});var n=t(2203),l=t(9231),r=t(4852),o=t(9841),s=t(7060),p=t(3825),i=t(4812),u=t(2006);const d="tabList_J1bR",m="tabItem_lwZo";function c(e){var a;const{lazy:t,block:r,defaultValue:s,values:c,groupId:b,className:v}=e,k=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=c??k.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),y=(0,p.l)(h,((e,a)=>e.value===a.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===s?s:s??(null==(a=k.find((e=>e.props.default)))?void 0:a.props.value)??k[0].props.value;if(null!==f&&!h.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:T}=(0,i.U)(),[N,w]=(0,l.useState)(f),x=[],{blockElementScrollPositionUntilNextRender:I}=(0,u.o5)();if(null!=b){const e=g[b];null!=e&&e!==N&&h.some((a=>a.value===e))&&w(e)}const O=e=>{const a=e.currentTarget,t=x.indexOf(a),n=h[t].value;n!==N&&(I(a),w(n),null!=b&&T(b,String(n)))},E=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=x.indexOf(e.currentTarget)+1;t=x[a]??x[0];break}case"ArrowLeft":{const a=x.indexOf(e.currentTarget)-1;t=x[a]??x[x.length-1];break}}null==(a=t)||a.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},v)},h.map((e=>{let{value:a,label:t,attributes:r}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===a?0:-1,"aria-selected":N===a,key:a,ref:e=>x.push(e),onKeyDown:E,onFocus:O,onClick:O},r,{className:(0,o.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":N===a})}),t??a)}))),t?(0,l.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==N})))))}function b(e){const a=(0,s.Z)();return l.createElement(c,(0,n.Z)({key:String(a)},e))}const v="tabItem_bDAQ";function k(e){let{children:a,hidden:t,className:n}=e;return l.createElement("div",{role:"tabpanel",className:(0,o.Z)(v,n),hidden:t},a)}const h={},y="Installation",f={unversionedId:"installation",id:"installation",title:"Installation",description:"did-session",source:"@site/docs/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Welcome to Decentralized Identifiers",permalink:"/docs/introduction"},next:{title:"Authorization",permalink:"/docs/authorization"}},g={},T=[{value:"did-session",id:"did-session",level:3},{value:"@didtools/pkh-ethereum",id:"didtoolspkh-ethereum",level:3},{value:"@didtools/pkh-solana",id:"didtoolspkh-solana",level:3},{value:"dids",id:"dids",level:3}],N={toc:T};function w(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},N,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("h3",{id:"did-session"},"did-session"),(0,r.kt)("p",null,"We encourage you to use ",(0,r.kt)("inlineCode",{parentName:"p"},"did-sessions")," to manage all your DID-related needs:"),(0,r.kt)(b,{defaultValue:"pnpm",groupId:"package-manager",values:[{label:"pnpm",value:"pnpm"},{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(k,{value:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add did-session\n"))),(0,r.kt)(k,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install did-session\n"))),(0,r.kt)(k,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add did-session\n")))),(0,r.kt)("h3",{id:"didtoolspkh-ethereum"},"@didtools/pkh-ethereum"),(0,r.kt)("p",null,"Add if you want to use did:pkh Ethereum accounts with ",(0,r.kt)("inlineCode",{parentName:"p"},"did-session"),". "),(0,r.kt)(b,{defaultValue:"pnpm",groupId:"package-manager",values:[{label:"pnpm",value:"pnpm"},{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(k,{value:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add @didtools/pkh-ethereum\n"))),(0,r.kt)(k,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @didtools/pkh-ethereum\n"))),(0,r.kt)(k,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @didtools/pkh-ethereum\n")))),(0,r.kt)("h3",{id:"didtoolspkh-solana"},"@didtools/pkh-solana"),(0,r.kt)("p",null,"Add if you want to use did:pkh Solana accounts with ",(0,r.kt)("inlineCode",{parentName:"p"},"did-session"),". "),(0,r.kt)(b,{defaultValue:"pnpm",groupId:"package-manager",values:[{label:"pnpm",value:"pnpm"},{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(k,{value:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add @didtools/pkh-solana\n"))),(0,r.kt)(k,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @didtools/pkh-solana\n"))),(0,r.kt)(k,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @didtools/pkh-solana\n")))),(0,r.kt)("h3",{id:"dids"},"dids"),(0,r.kt)("p",null,"You can also just use ",(0,r.kt)("inlineCode",{parentName:"p"},"dids"),", if you want to manage a DID at a lower level or access additional functionality. "),(0,r.kt)(b,{defaultValue:"pnpm",groupId:"package-manager",values:[{label:"pnpm",value:"pnpm"},{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(k,{value:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add dids\n"))),(0,r.kt)(k,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install dids\n"))),(0,r.kt)(k,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add dids\n")))))}w.isMDXComponent=!0}}]);