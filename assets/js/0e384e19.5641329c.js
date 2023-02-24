"use strict";(self.webpackChunkwrn_echarts=self.webpackChunkwrn_echarts||[]).push([[671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:1},o="Introduction",s={unversionedId:"intro",id:"intro",title:"Introduction",description:"WRN ECharts project is an open-source library for creating interactive charts in React Native applications. With a user-friendly design and simple API, developers can create a wide range of customizable charts.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/react-native-echarts/docs/intro",draft:!1,editUrl:"https://github.com/wuba/react-native-echarts/tree/docs/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/react-native-echarts/docs/getting-started/installation"}},c={},l=[{value:"Features",id:"features",level:2},{value:"Awesome Cases",id:"awesome-cases",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"WRN ECharts project is an open-source library for creating interactive charts in React Native applications. With a user-friendly design and simple API, developers can create a wide range of customizable charts. "),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83c\udfa8 ",(0,n.kt)("strong",{parentName:"li"},"Built with ",(0,n.kt)("a",{parentName:"strong",href:"https://github.com/apache/echarts"},"Apache ECharts")),", offering customization options to represent complex data visually. The usage is almost identical to ECharts."),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udcf1 ",(0,n.kt)("strong",{parentName:"li"},"Designed for ",(0,n.kt)("a",{parentName:"strong",href:"https://reactnative.dev/"},"React Native")),", delivering chart visualization directly in the app for a seamless experience."),(0,n.kt)("li",{parentName:"ul"},"\ud83d\ude80 Allows developers to ",(0,n.kt)("strong",{parentName:"li"},"reuse their code with the web"),", offering increased flexibility and cost-efficiency."),(0,n.kt)("li",{parentName:"ul"},"\u2728 Offers the choice of ",(0,n.kt)("strong",{parentName:"li"},"using either ",(0,n.kt)("a",{parentName:"strong",href:"https://github.com/shopify/react-native-skia"},"Skia")," or ",(0,n.kt)("a",{parentName:"strong",href:"https://github.com/software-mansion/react-native-svg"},"SVG"))," as the rendering library, providing greater flexibility in choosing the best option for a particular use case."),(0,n.kt)("li",{parentName:"ul"},"\ud83e\udd33 ",(0,n.kt)("strong",{parentName:"li"},"Supports mobile-specific operations")," such as zooming, providing a more intuitive and interactive user experience for chart visualization on mobile devices.")),(0,n.kt)("h2",{id:"awesome-cases"},"Awesome Cases"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Taro Playground App is a cross-platform application developed using Taro, to help developers develop and debug Taro applications. It contains most of the examples of WRN ECharts, You can ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/wuba/taro-playground/releases"},"download and install the app")," for preview.")),(0,n.kt)("p",null,"If you have other examples, please edit this page."))}d.isMDXComponent=!0}}]);