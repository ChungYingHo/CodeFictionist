"use strict";(self.webpackChunkcode_fictionist=self.webpackChunkcode_fictionist||[]).push([[9221],{1915:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>a});var s=l(5893),i=l(1151);const r={title:"\u95dc\u9589\u700f\u89bd\u5668\u6642\u89f8\u767c\u8b66\u544a",tags:["javascript","beforeunload"]},o=void 0,t={id:"\u7b46\u8a18\u672c/\u7d9c\u5408\u7b46\u8a18/browser-unload/index",title:"\u95dc\u9589\u700f\u89bd\u5668\u6642\u89f8\u767c\u8b66\u544a",description:"\u529f\u80fd\u8981\u6c42",source:"@site/docs/04-\u7b46\u8a18\u672c/01-\u7d9c\u5408\u7b46\u8a18/browser-unload/index.md",sourceDirName:"04-\u7b46\u8a18\u672c/01-\u7d9c\u5408\u7b46\u8a18/browser-unload",slug:"/\u7b46\u8a18\u672c/\u7d9c\u5408\u7b46\u8a18/browser-unload/",permalink:"/docs/\u7b46\u8a18\u672c/\u7d9c\u5408\u7b46\u8a18/browser-unload/",draft:!1,unlisted:!1,tags:[{label:"javascript",permalink:"/docs/tags/javascript"},{label:"beforeunload",permalink:"/docs/tags/beforeunload"}],version:"current",frontMatter:{title:"\u95dc\u9589\u700f\u89bd\u5668\u6642\u89f8\u767c\u8b66\u544a",tags:["javascript","beforeunload"]},sidebar:"tutorialSidebar",previous:{title:"\u4e0a\u50b3\u76e3\u807d\u9032\u5ea6 (without axios)",permalink:"/docs/\u7b46\u8a18\u672c/\u7d9c\u5408\u7b46\u8a18/rs-upload"},next:{title:"PWA \u57fa\u672c\u6982\u5ff5",permalink:"/docs/\u7b46\u8a18\u672c/PWA/basic-pwa"}},c={},a=[{value:"\u529f\u80fd\u8981\u6c42",id:"\u529f\u80fd\u8981\u6c42",level:2},{value:"\u95dc\u65bc\u7db2\u9801\u751f\u547d\u9031\u671f",id:"\u95dc\u65bc\u7db2\u9801\u751f\u547d\u9031\u671f",level:2},{value:"vue \u7684\u751f\u547d\u9031\u671f",id:"vue-\u7684\u751f\u547d\u9031\u671f",level:2},{value:"\u5be6\u4f5c\u5f48\u51fa\u8996\u7a97",id:"\u5be6\u4f5c\u5f48\u51fa\u8996\u7a97",level:2},{value:"\u5be6\u4f5c\u6e05\u7a7a localstorage",id:"\u5be6\u4f5c\u6e05\u7a7a-localstorage",level:2},{value:"\u5be6\u4f5c\u6253 API",id:"\u5be6\u4f5c\u6253-api",level:2},{value:"\u53c3\u8003\u8cc7\u6e90",id:"\u53c3\u8003\u8cc7\u6e90",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u529f\u80fd\u8981\u6c42",children:"\u529f\u80fd\u8981\u6c42"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u4f7f\u7528\u8005\u96e2\u958b\u700f\u89bd\u5668\u8df3\u51fa\u5f48\u51fa\u8996\u7a97\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u4f7f\u7528\u8005\u96e2\u958b\u700f\u89bd\u5668\u6e05\u7a7a localstorage\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u4f7f\u7528\u8005\u96e2\u958b\u700f\u89bd\u5668\u6642\u6253 API\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u95dc\u65bc\u7db2\u9801\u751f\u547d\u9031\u671f",children:"\u95dc\u65bc\u7db2\u9801\u751f\u547d\u9031\u671f"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u7db2\u9801\u8f09\u5165\u6642\u6709\u5e7e\u500b\u91cd\u8981\u7684\u4e8b\u4ef6\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"DOMContentLoaded"}),"\uff1aDOM \u8b80\u53d6\u89e3\u6790\u5f8c\u5c31\u89f8\u767c\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"load"}),"\uff1a\u6240\u6709\u8cc7\u6e90\u90fd\u8f09\u5165\u5f8c\u89f8\u767c\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"beforeunload"}),"\uff1a\u7db2\u9801\u5378\u8f09\u524d\u89f8\u767c\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"unload"}),"\uff1a\u7db2\u9801\u5378\u8f09\u5f8c\u89f8\u767c\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6545\u4ee5\u4e0a\u6240\u6709\u529f\u80fd\u90fd\u5fc5\u9808\u5728",(0,s.jsx)(n.code,{children:"\u7db2\u9801\u5378\u8f09\u524d"}),"\u89f8\u767c\uff0c\u56e0\u6b64\u5fc5\u9808\u4f7f\u7528",(0,s.jsx)(n.code,{children:"beforeunload"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"vue-\u7684\u751f\u547d\u9031\u671f",children:"vue \u7684\u751f\u547d\u9031\u671f"}),"\n",(0,s.jsx)(n.p,{children:"\u56e0\u70ba\u9019\u6b21\u5be6\u4f5c\u662f\u4ee5 vue3 \u57f7\u884c (\u914d\u5408\u516c\u53f8\u5c08\u6848)\uff0c\u6240\u4ee5\u64cd\u4f5c\u4e0a\u5fc5\u9808\u914d\u5408 vue \u7d44\u4ef6\u7684\u751f\u547d\u9031\u671f API\u3002"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"onMounted"}),"\uff1a\u7d44\u4ef6\u639b\u8f09\u5b8c\u6210\u5f8c\u57f7\u884c\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"onBeforeUnmount"}),"\uff1a\u7d44\u4ef6\u5378\u8f09\u524d\u57f7\u884c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5be6\u4f5c\u5f48\u51fa\u8996\u7a97",children:"\u5be6\u4f5c\u5f48\u51fa\u8996\u7a97"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"function handleReset(event){\n  // \u89f8\u767c\u5f48\u8df3\u8996\u7a97\n  event.preventDefault()\n  // \u652f\u63f4\u820a\u5f0f\u700f\u89bd\u5668\n  event.returnValue = ''\n}\n\n// \u7d44\u4ef6\u639b\u8f09\u6642\u958b\u59cb\u76e3\u807d\u4e8b\u4ef6\nonMounted(()=>{\n  window.addEventListener('beforeunload', handleReset)\n})\n// \u7d44\u4ef6\u5378\u8f09\u524d\u79fb\u9664\u76e3\u807d\u4e8b\u4ef6\nonBeforeUnmount(()=>{\n  window.removeEventListener('beforeunload', handleReset)\n})\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["\u95dc\u65bc\u5f48\u8df3\u8996\u7a97\u89f8\u767c\uff0c\u5982\u679c\u4eca\u5929\u4f7f\u7528\u8005\u6c92\u6709\u5c0d\u7db2\u9801\u9032\u884c\u4e92\u52d5\uff0c\u6bd4\u5982\u53ea\u662f\u6253\u958b\u4e00\u500b\u5370\u6709",(0,s.jsx)(n.code,{children:"Hello, world!"}),"\u5b57\u4e32\u7684\u7db2\u9801\uff0c\u90a3\u96e2\u958b\u6216\u91cd\u6574\u7db2\u9801\u6642\u4e26\u4e0d\u6703\u89f8\u767c\u3002"]})}),"\n",(0,s.jsx)(n.h2,{id:"\u5be6\u4f5c\u6e05\u7a7a-localstorage",children:"\u5be6\u4f5c\u6e05\u7a7a localstorage"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:['\u5148\u624b\u52d5\u5728\u52a0\u5165\u4e00\u7d44 key-value ("a":"b") \u5728 localstorage \u4e2d\u3002\n',(0,s.jsx)(n.img,{src:l(7213).Z+"",width:"1314",height:"313"})]}),"\n",(0,s.jsx)(n.li,{children:"\u5be6\u969b\u95dc\u9589\u7db2\u9801\u5f8c\u518d\u6253\u958b\uff0c\u89c0\u5bdf localstorage \u4e2d\u662f\u5426\u4ecd\u5b58\u6709\u9019\u7b46\u6578\u64da (\u7406\u8ad6\u4e0a\u8981\u6709)\u3002"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"handleReset"})," \u51fd\u5f0f\u52a0\u5165\u4e0b\u8ff0\u9019\u6bb5\uff1a"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"function handleReset(event){\n  event.preventDefault()\n  event.returnValue = ''\n  // \u52a0\u5165\u9019\u884c\n  localStorage.removeItem('a')\n}\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"\u518d\u6b21\u95dc\u9589\u7db2\u9801\u5f8c\u4e26\u518d\u6b21\u9032\u5165\uff0c\u89c0\u5bdf localstorage \u662f\u5426\u5df2\u88ab\u6e05\u7a7a\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5be6\u4f5c\u6253-api",children:"\u5be6\u4f5c\u6253 API"}),"\n",(0,s.jsx)(n.p,{children:"\u9019\u88e1\u4f7f\u7528 API \u53ef\u4ee5\u96a8\u610f\u6e2c\u8a66\u4f7f\u7528\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"let apiUrl = 'https://randomuser.me/api/'\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u5148\u5b9a\u7fa9\u597d\u6253 API \u7684\u975e\u540c\u6b65\u8655\u7406\u4e8b\u4ef6\uff1a"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const fetchFunc = ()=>{\n    fetch(apiUrl)\n    .then(response => response.json())\n    .then(data =>{\n        let user = data.results[0]\n        let email = user.email\n        localStorage.setItem('email', email)\n        console.log('API request successful:', email)\n    })\n    .catch(error => console.log(error))\n}\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"handleReset"})," \u51fd\u5f0f\u52a0\u5165\u4e0b\u8ff0\u9019\u6bb5\uff1a"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"function handleReset(event){\n  event.preventDefault()\n  event.returnValue = ''\n  localStorage.removeItem('a')\n  // \u52a0\u5165\u9019\u884c\n  fetchFunc()\n}\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["\u5be6\u969b\u95dc\u9589\u7db2\u9801\u5f8c\u518d\u9032\u5165\uff0c\u89c0\u5bdf localstorage \u662f\u5426\u6709\u5b58\u5165\u4e00\u7d44 email\u3002\n",(0,s.jsx)(n.img,{src:l(1520).Z+"",width:"1308",height:"298"})]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["MDN \u63d0\u793a ",(0,s.jsx)(n.code,{children:"beforeunload"})," \u4e0d\u4e00\u5b9a\u6703\u88ab\u5075\u6e2c\u5230\uff0c\u5efa\u8b70\u6539\u7528 ",(0,s.jsx)(n.code,{children:"visibilitychange"})]})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c3\u8003\u8cc7\u6e90",children:"\u53c3\u8003\u8cc7\u6e90"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://cloud.tencent.com/developer/article/1730838",children:"\u5728\u9875\u9762\u79bb\u5f00\u524d\u63d0\u9192\u4f60\u7684beforeunload\u4e8b\u4ef6"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.vue-js.com/topic/5f97d70496b2cb0032c3860a",children:"Vue\u8e29\u5751\u4e4b\u65c5\uff08\u4e8c\uff09\u2014\u2014 \u76d1\u542c\u9875\u9762\u5237\u65b0\u548c\u5173\u95ed__Vue.js"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://cn.vuejs.org/api/composition-api-lifecycle.html#onbeforeunmount",children:"\u7ec4\u5408\u5f0f API\uff1a\u751f\u547d\u5468\u671f\u94a9\u5b50"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://ithelp.ithome.com.tw/articles/10197335?sc=iThelpR",children:"\u91cd\u65b0\u8a8d\u8b58 JavaScript \u756a\u5916\u7bc7 (6) - \u7db2\u9801\u7684\u751f\u547d\u9031\u671f"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event#syntax",children:"Window: beforeunload event"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1520:(e,n,l)=>{l.d(n,{Z:()=>s});const s=l.p+"assets/images/localstorage-email-f1a61ac593c24c0edf48eaf130335c7e.jpg"},7213:(e,n,l)=>{l.d(n,{Z:()=>s});const s=l.p+"assets/images/localstorage-set-a977490fbd86429b900135f4c6c5f9ad.jpg"},1151:(e,n,l)=>{l.d(n,{Z:()=>t,a:()=>o});var s=l(7294);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);