"use strict";(self.webpackChunkcode_fictionist=self.webpackChunkcode_fictionist||[]).push([[2760],{77853:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"tech_articles/dev-note/api/api_basic_method","title":"API - \u56db\u7a2e\u4e32 API \u65b9\u5f0f","description":"\u7bc4\u4f8b API \u8207\u524d\u7f6e\u4f5c\u696d","source":"@site/docs/tech_articles/06-dev-note/01-api/01-api_basic_method.mdx","sourceDirName":"tech_articles/06-dev-note/01-api","slug":"/tech_articles/dev-note/api/api_basic_method","permalink":"/docs/tech_articles/dev-note/api/api_basic_method","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"javascript","permalink":"/docs/tags/javascript"},{"inline":true,"label":"api","permalink":"/docs/tags/api"}],"version":"current","sidebarPosition":1,"frontMatter":{"title":"API - \u56db\u7a2e\u4e32 API \u65b9\u5f0f","tags":["javascript","api"]},"sidebar":"programSidebar","previous":{"title":"518 - Coin Change (\u52d5\u614b\u898f\u5283)","permalink":"/docs/tech_articles/algorithm/LeetCode/coin-change"},"next":{"title":"API - Axios","permalink":"/docs/tech_articles/dev-note/api/axios"}}');var r=i(74848),t=i(28453);const a={title:"API - \u56db\u7a2e\u4e32 API \u65b9\u5f0f",tags:["javascript","api"]},c=void 0,l={},o=[{value:"\u7bc4\u4f8b API \u8207\u524d\u7f6e\u4f5c\u696d",id:"\u7bc4\u4f8b-api-\u8207\u524d\u7f6e\u4f5c\u696d",level:2},{value:"Ajax",id:"ajax",level:2},{value:"jQuery Ajax",id:"jquery-ajax",level:2},{value:"Fetch API",id:"fetch-api",level:2},{value:"Axios",id:"axios",level:2},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:2}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u7bc4\u4f8b-api-\u8207\u524d\u7f6e\u4f5c\u696d",children:"\u7bc4\u4f8b API \u8207\u524d\u7f6e\u4f5c\u696d"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://randomuser.me/",children:"RANDOM USER GENERATOR"})}),"\n",(0,r.jsx)(n.li,{children:"\u57fa\u672c\u67b6\u69cb\uff1a"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",metastring:"title='HTML'",children:"<div class=\"container\">\n        <button id='find'>Random User</button>\n        <div id='show'></div>\n</div>\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:"title='JavaScript'",children:"// JavaScript\nconst find = document.querySelector(\"#find\")\nconst show = document.querySelector(\"#show\")\nlet apiUrl = 'https://randomuser.me/api/'\n\nlet name = ''\nlet img = ''\nlet email = ''\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"ajax",children:"Ajax"}),"\n",(0,r.jsxs)(n.p,{children:["\u5168\u540d ",(0,r.jsx)(n.code,{children:"Asynchronous JavaScript and XML"}),"\uff0c\u662f\u6700\u65e9\u6700\u65e9\u4e32\u63a5 API \u7684\u65b9\u6cd5\uff0c\u800c Ajax \u7684\u51fa\u73fe\u958b\u59cb\u8b93\u7db2\u9801\u5be6\u73fe\u975e\u540c\u6b65\u8acb\u6c42\uff0c\u53ef\u4ee5\u8aaa\u73fe\u5728\u7684 API \u4e32\u63a5\u65b9\u6cd5\u90fd\u5960\u57fa\u5728 Ajax \u4e0a\u3002\u4f46\u5b83\u4e5f\u56e0\u70ba\u662f\u6700\u8001\u7684\uff0c\u6240\u4ee5\u76f8\u5c0d\u4e5f\u662f\u6700\u8907\u96dc\u7684\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5177\u9ad4\u6b65\u9a5f\u6709\u56db\u500b\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u5efa\u7acb XMLHttpRequest \u7269\u4ef6\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u958b\u555f\u4e00\u500b\u8acb\u6c42\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u9001\u51fa\u8acb\u6c42\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u62ff\u5230\u56de\u61c9\u5f8c\u9700\u8981\u700f\u89bd\u5668\u505a\u4ec0\u9ebc\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:"title='AJAX'",children:"const ajaxFunc = ()=>{\n    // \u4ee5 XMLHttpRequest \u7269\u4ef6\u7684\u65b9\u6cd5\u6293\u53d6\u8cc7\u6599\n    xhr = new XMLHttpRequest()\n    // \u958b\u555f\u4e00\u500b\u8acb\u6c42\uff0c\u9019\u88e1\u4f7f\u7528 GET\uff0ctrue \u70ba\u975e\u540c\u6b65\u7684\u610f\u601d\n    xhr.open('GET',apiUrl, true)\n    // \u9001\u51fa\u8acb\u6c42\n    xhr.send()\n\n    xhr.onload = function () {\n        if(xhr.status === 200){\n            let data = JSON.parse(this.responseText)\n            console.log(data)\n            let user = data.results[0]\n            name = `${user.name.first} ${user.name.last}`\n            img = user.picture.large\n            email = user.email\n            show.innerHTML = `<h3>${name}</h3>\n                <img src=${img}>\n                <p>${email}</p>`\n        }else{\n            console.error(error)\n        }\n    }\n}\n\nfind.addEventListener('click',()=>{\n    ajaxFunc()\n})\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["\u5728 ",(0,r.jsx)(n.code,{children:"onload"})," \u7684\u90e8\u5206\uff0c\u4ed4\u7d30\u89c0\u5bdf ",(0,r.jsx)(n.code,{children:"console.log(data)"})," \u7684\u5167\u5bb9\u8ddf RANDOM USER GENERATOR \u7db2\u7ad9\u4e2d\u4ecb\u7d39\u7684\u4e00\u4e0d\u4e00\u6a23\u3002"]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"jquery-ajax",children:"jQuery Ajax"}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528 jQuery \u51fd\u5f0f\u5eab\u63d0\u4f9b\u7684 Ajax \u65b9\u6cd5\uff0c\u5b83\u7c21\u5316\u4e86\u975e\u540c\u6b65\u8acb\u6c42\u7684\u7a0b\u5f0f\u78bc\u3002\u4f46\u56e0\u70ba\u5b83\u5fc5\u9808\u4f7f\u7528\u5230 jQuery\uff0c\u6240\u4ee5\u5fc5\u9808\u5148\u628a\u5b83\u8f09\u5165\u5230\u5c08\u6848\u4e2d\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",metastring:"title='HTML'",children:'<script src="https://code.jquery.com/jquery-3.6.0.min.js"><\/script>\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:"title='JavaScript-jQuery AJAX'",children:"const jAjaxFunc = ()=>{\n    $.ajax({\n        url: apiUrl,\n        type: 'GET',\n        dataType: 'json',\n        success: function (data) {\n            let user = data.results[0]\n            name = `${user.name.first} ${user.name.last}`\n            img = user.picture.large\n            email = user.email\n\n            show.innerHTML =\n                `<h3>${name}</h3>\n                <img src=${img}>\n                <p>${email}</p>`\n        },\n        error: function (error) {\n            console.error(error)\n        }\n    })\n}\n\nfind.addEventListener('click', ()=>{\n    jAjaxFunc()\n})\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u5230\u4f7f\u7528 jQuery Ajax \u5fc5\u9808\u63d0\u4f9b\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"url\uff1a\u6211\u8981\u5411\u8ab0\u8acb\u6c42\u3002"}),"\n",(0,r.jsx)(n.li,{children:"type\uff1a\u8acb\u6c42\u65b9\u6cd5\u3002"}),"\n",(0,r.jsx)(n.li,{children:"dataType\uff1a\u8acb\u6c42\u8cc7\u6599\u985e\u578b\u3002"}),"\n",(0,r.jsx)(n.li,{children:"success\uff1a\u8acb\u6c42\u8cc7\u6599\u6210\u529f\u6642\u8a72\u5e79\u561b\u3002"}),"\n",(0,r.jsx)(n.li,{children:"error\uff1a\u8acb\u6c42\u8cc7\u6599\u5931\u6557\u6642\u8a72\u5e79\u561b\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"fetch-api",children:"Fetch API"}),"\n",(0,r.jsx)(n.p,{children:"\u4f5c\u70ba\u76f8\u5c0d\u5e74\u8f15\u7684 API \u4e32\u63a5\u65b9\u6cd5\uff0c\u5b83\u662f\u57fa\u65bc Promise \u8a9e\u6cd5\u7684 API \u4e32\u63a5\u65b9\u5f0f\uff0c\u8b8a\u5f97\u66f4\u7c21\u6f54\u3001\u66f4\u597d\u8b80\u4e86\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:"title='Fetch'",children:"const fetchFunc = ()=>{\n    fetch(apiUrl)\n    .then(response => response.json())\n    .then(data =>{\n        console.log(data)\n        let user = data.results[0]\n        name = `${user.name.first} ${user.name.last}`\n        img = user.picture.large\n        email = user.email\n\n        show.innerHTML = `\n            <h3>${name}</h3>\n            <img src=${img}>\n            <p>${email}</p>`\n    })\n    .catch(error => console.log(error))\n}\n\nfind.addEventListener('click', ()=>{\n    fetchFunc()\n})\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"axios",children:"Axios"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["Fetch API \u6703\u9700\u8981\u6211\u5011\u624b\u52d5\u9032\u884c JSON \u89e3\u6790\uff0c\u6240\u4ee5\u9700\u8981 ",(0,r.jsx)(n.code,{children:"response.json()"}),"\uff0c\u800c Axios \u6703\u76f4\u63a5\u5e6b\u6211\u5011\u89e3\u6790 JSON\u3002",(0,r.jsx)(n.br,{}),"\n","\u540c\u6642 Axios \u9810\u8a2d\u4e5f\u6703\u81ea\u52d5\u8655\u7406\u6240\u6709\u7684 HTTP \u72c0\u614b\uff0c\u5305\u62ec\u932f\u8aa4\u7684\u72c0\u614b\uff0c\u6240\u4ee5\u5e73\u5fc3\u800c\u8ad6\uff0cAxios \u9084\u662f\u63d0\u4f9b\u4e86\u6bd4\u8f03\u591a\u7684\u4fbf\u5229\u529f\u80fd\u3002"]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:"title='Axios'",children:"const axiosFunc = ()=>{\n    axios\n    .get(apiUrl)\n    .then((response) => {\n        console.log(response.data)\n        let user = response.data.results[0];\n        name = `${user.name.first} ${user.name.last}`;\n        img = user.picture.large;\n        email = user.email;\n        show.innerHTML =\n            `<h3>${name}</h3>\n            <img src=${img}>\n            <p>${email}</p>`;\n    })\n    .catch((error) => console.log(error));\n}\n\nfind.addEventListener('click', ()=>{\n    axiosFunc()\n})\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsxs)(n.em,{children:["\u95dc\u65bc\u4e0d\u628a ",(0,r.jsx)(n.code,{children:"show.innerHTML"})," \u5beb\u5728\u4e8b\u4ef6\u76e3\u807d\u5668\u88e1\uff0c\u800c\u662f\u5beb\u5728 API \u7684\u4e32\u63a5\u51fd\u5f0f\u4e2d\u9019\u4ef6\u4e8b"]}),"*"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// \u539f\u672c\u7684\u5beb\u6cd5\n\u200bfind.addEventListener('click', ()=>{\n    axiosFunc()\n})\n\n// \u66f4\u6539\u5f8c\u7684\u5beb\u6cd5\nfind.addEventListener('click', ()=>{\n    axiosFunc()\n    show.innerHTML =\n            `<h3>${name}</h3>            \n             <img src=${img}>            \n             <p>${email}</p>`\n})\n"})}),(0,r.jsxs)(n.p,{children:["\u4f7f\u7528\u4e0b\u9762\u66f4\u6539\u5f8c\u7684\u5beb\u6cd5\uff0c\u6703\u767c\u73fe\u5728\u7b2c\u4e00\u6b21\u9ede\u64ca\u6309\u9215\u6642\u4e26\u6c92\u6709\u756b\u9762\u8dd1\u51fa\u4f86\uff0c\u4f46\u7b2c\u4e8c\u6b21\u4e4b\u5f8c\u7684\u9ede\u64ca\u5c31\u6709\u4e86\uff0c\u70ba\u4ec0\u9ebc\uff1f",(0,r.jsx)(n.br,{}),"\n","\u5176\u5be6\u9019\u88e1\u8ddf\u975e\u540c\u6b65\u6a5f\u5236\u6709\u95dc\uff0c\u4e0b\u9762\u66f4\u6539\u5f8c\u7684\u5beb\u6cd5\u7576\u6211\u5011\u9ede\u64ca\u6309\u9215\u6642\u7684\u78ba\u6703\u5148\u89f8\u767c ",(0,r.jsx)(n.code,{children:"axiosFunc"}),"\uff0c\u4f46\u662f\u8981\u6ce8\u610f\uff0c",(0,r.jsx)(n.code,{children:"axiosFunc"})," \u5e36\u8457\u7684\u5be6\u969b\u4e0a\u662f\u4e00\u500b",(0,r.jsx)(n.code,{children:"\u975e\u540c\u6b65"}),"\u8acb\u6c42\uff0c\u6240\u4ee5\u4ed6\u4e0d\u6703\u53bb\u963b\u585e\u5f8c\u7e8c\u7a0b\u5f0f\u78bc\u7684\u57f7\u884c\uff0c\u6240\u4ee5\u7576 ",(0,r.jsx)(n.code,{children:"show.innerHTML"})," \u57f7\u884c\u6642\uff0cname\u3001img\u3001email \u5be6\u969b\u4e0a\u662f\u9084\u6c92\u88ab\u8ce6\u503c\u7684\u3002"]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u53c3\u8003\u8cc7\u6599",children:"\u53c3\u8003\u8cc7\u6599"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://ithelp.ithome.com.tw/articles/10222165",children:"JavaScript \u521d\u5fc3\u8005\u7b46\u8a18: AJAX - \u5f9e\u9060\u7aef\u5373\u6642\u6488\u53d6\u8cc7\u6599"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://ithelp.ithome.com.tw/articles/10251803",children:"Ajax - \u4ee5 GET \u65b9\u6cd5\u4e32\u63a5 API \u8cc7\u6599 ( \u4ee5 JSON \u70ba\u4f8b )"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://ithelp.ithome.com.tw/articles/10226692",children:"\u4f7f\u7528 jQuery\u7684 $.Ajax() \u6280\u8853\u548c\u4ecb\u63a5api\u5427!"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/axios/axios#example",children:"axios"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>c});var s=i(96540);const r={},t=s.createContext(r);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);