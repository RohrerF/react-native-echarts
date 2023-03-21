"use strict";(self.webpackChunkreact_native_echarts=self.webpackChunkreact_native_echarts||[]).push([[1954],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(h,s(s({ref:t},p),{},{components:r})):n.createElement(h,s({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},648:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:3},s="\u5199\u4e00\u4e2a\u7b80\u5355\u7684\u6298\u7ebf\u56fe",o={unversionedId:"getting-started/write-a-simple-line-chart",id:"getting-started/write-a-simple-line-chart",title:"\u5199\u4e00\u4e2a\u7b80\u5355\u7684\u6298\u7ebf\u56fe",description:"\u63a5\u4e0b\u6765\u8ba9\u6211\u4eec\u8bd5\u7740\u753b\u4e00\u4e0b\u6700\u57fa\u672c\u7684\u56fe -- \u57fa\u672c\u6298\u7ebf\u56fe\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/getting-started/write-a-simple-line-chart.md",sourceDirName:"getting-started",slug:"/getting-started/write-a-simple-line-chart",permalink:"/react-native-echarts/zh-Hans/docs/getting-started/write-a-simple-line-chart",draft:!1,editUrl:"https://github.com/wuba/react-native-echarts/tree/docs/i18n/zh-Hans/docusaurus-plugin-content-docs/current/getting-started/write-a-simple-line-chart.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u8fd0\u884c\u793a\u4f8b",permalink:"/react-native-echarts/zh-Hans/docs/getting-started/run-example"},next:{title:"\u5199\u4e00\u4e2a\u52a8\u6001\u53d8\u5316\u7684\u56fe\u8868",permalink:"/react-native-echarts/zh-Hans/docs/getting-started/write-a-dynamic-data-chart"}},c={},l=[],p={toc:l},u="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5199\u4e00\u4e2a\u7b80\u5355\u7684\u6298\u7ebf\u56fe"},"\u5199\u4e00\u4e2a\u7b80\u5355\u7684\u6298\u7ebf\u56fe"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u8ba9\u6211\u4eec\u8bd5\u7740\u753b\u4e00\u4e0b\u6700\u57fa\u672c\u7684\u56fe -- \u57fa\u672c\u6298\u7ebf\u56fe\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u770b\u770b\u5b83\u5728\u6d4f\u89c8\u5668\u4e2d\u7684\u6837\u5b50\uff0c\u4f60\u53ef\u4ee5\u8bbf\u95ee ",(0,a.kt)("a",{parentName:"p",href:"https://echarts.apache.org/examples/en/editor.html?c=line-simple"},"echarts \u7f16\u8f91\u5668"),"\uff0c\u5e76\u5c1d\u8bd5\u4fee\u6539\u914d\u7f6e\uff0c\u770b\u770b\u6709\u4ec0\u4e48\u53d8\u5316\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5bfc\u5165 echarts\u3001@wuba/react-native-echarts\u3001react\u3002\u8fd9\u91cc\u6211\u53ea\u5bfc\u5165\u4e86 SkiaChart \u548c SVGRenderer\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { useRef, useEffect } from 'react';\nimport * as echarts from 'echarts/core';\nimport { LineChart } from 'echarts/charts';\nimport { GridComponent } from 'echarts/components';\nimport { SVGRenderer, SkiaChart } from '@wuba/react-native-echarts';\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528 echarts.use \u6765\u6ce8\u518c\u6e32\u67d3\u5668\u548c\u56fe\u8868\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"echarts.use([SVGRenderer, LineChart, GridComponent]);\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u4e3a SkiaChart \u7ec4\u4ef6\u521b\u5efa\u4e00\u4e2a Ref\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"export default function App() {\n  const skiaRef = useRef<any>(null);\n  return <SkiaChart ref={skiaRef} />;\n}\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u7f16\u5199\u56fe\u8868\u7684\u9009\u9879\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const option = {\n  xAxis: {\n    type: 'category',\n    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],\n  },\n  yAxis: {\n    type: 'value',\n  },\n  series: [\n    {\n      data: [150, 230, 224, 218, 135, 147, 260],\n      type: 'line',\n    },\n  ],\n};\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a\u56fe\u8868\u5b9e\u4f8b\u5e76\u8bbe\u7f6e\u9009\u9879\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"let chart = echarts.init(skiaRef.current, 'light', {\n  renderer: 'svg',\n  width: 400,\n  height: 400,\n});\nchart.setOption(option);\n")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528 useEffect \u6765\u786e\u4fdd\u56fe\u8868\u53ea\u88ab\u521d\u59cb\u5316\u4e00\u6b21\u3002\u5e76\u5728\u7ec4\u4ef6\u5378\u8f7d\u65f6\u91ca\u653e\u56fe\u8868\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"useEffect(() => {\n  return () => chart?.dispose();\n}, []);\n")),(0,a.kt)("p",null,"\u8fd9\u5c31\u662f\u4e86! \u8fd9\u91cc\u662f\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { useRef, useEffect } from 'react';\nimport * as echarts from 'echarts/core';\nimport { LineChart } from 'echarts/charts';\nimport { GridComponent } from 'echarts/components';\nimport { SVGRenderer, SkiaChart } from '@wuba/react-native-echarts';\n\necharts.use([SVGRenderer, LineChart, GridComponent]);\n\nexport default function App() {\n  const skiaRef = useRef<any>(null);\n  useEffect(() => {\n    const option = {\n      xAxis: {\n        type: 'category',\n        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],\n      },\n      yAxis: {\n        type: 'value',\n      },\n      series: [\n        {\n          data: [150, 230, 224, 218, 135, 147, 260],\n          type: 'line',\n        },\n      ],\n    };\n    let chart: any;\n    if (skiaRef.current) {\n      chart = echarts.init(skiaRef.current, 'light', {\n        renderer: 'svg',\n        width: 400,\n        height: 400,\n      });\n      chart.setOption(option);\n    }\n    return () => chart?.dispose();\n  }, []);\n\n  return <SkiaChart ref={skiaRef} />;\n}\n")),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u770b\u5230\u4ee5\u4e0b\u753b\u9762\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"iOS"),(0,a.kt)("th",{parentName:"tr",align:null},"Android"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"ios",src:r(9230).Z,width:"1290",height:"2796"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"android",src:r(3865).Z,width:"1080",height:"2340"}))))),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u4f7f\u7528 react-native-svg\uff0c\u53ea\u9700\u5c06 SkiaChart \u66ff\u6362\u4e3a SvgChart\u3002"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u4f60\u53ef\u4ee5\u4ece ",(0,a.kt)("a",{parentName:"p",href:"https://echarts.apache.org/examples/zh/index.html"},"echarts \u793a\u4f8b")," \u4e2d\u627e\u5230\u66f4\u591a\u5728 @wuba/react-native-echarts \u4e2d\u4f7f\u7528\u7684\u914d\u7f6e\u3002"))}m.isMDXComponent=!0},3865:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/android-line-0da6020c8b1255532a9c4fb2162adf7e.jpg"},9230:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ios-line-e54ad9fb3f2ce1a2e2a1237c0adbca45.png"}}]);