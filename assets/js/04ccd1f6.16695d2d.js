"use strict";(self.webpackChunkcode_fictionist=self.webpackChunkcode_fictionist||[]).push([[6996],{35853:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"tech_articles/dev-note/comprehensive_notes/PWA/pwa-nuxt","title":"PWA - Nuxt3 PWA","description":"manifest.json","source":"@site/docs/tech_articles/06-dev-note/comprehensive_notes/02-PWA/02-pwa-nuxt.mdx","sourceDirName":"tech_articles/06-dev-note/comprehensive_notes/02-PWA","slug":"/tech_articles/dev-note/comprehensive_notes/PWA/pwa-nuxt","permalink":"/docs/tech_articles/dev-note/comprehensive_notes/PWA/pwa-nuxt","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"pwa","permalink":"/docs/tags/pwa"},{"inline":true,"label":"nuxt3","permalink":"/docs/tags/nuxt-3"}],"version":"current","sidebarPosition":2,"frontMatter":{"title":"PWA - Nuxt3 PWA","tags":["pwa","nuxt3"]},"sidebar":"programSidebar","previous":{"title":"PWA - \u57fa\u672c\u6982\u5ff5","permalink":"/docs/tech_articles/dev-note/comprehensive_notes/PWA/basic-pwa"},"next":{"title":"Browser - \u95dc\u9589\u6642\u7684\u4e8b\u4ef6\u8655\u7406","permalink":"/docs/tech_articles/dev-note/comprehensive_notes/browser/browser-unload"}}');var i=t(74848),r=t(28453);const o={title:"PWA - Nuxt3 PWA",tags:["pwa","nuxt3"]},a=void 0,c={},l=[{value:"manifest.json",id:"manifestjson",level:2},{value:"Workbox",id:"workbox",level:2},{value:"\u5728 Nuxt3 \u5c08\u6848\u4e2d\u5be6\u4f5c PWA",id:"\u5728-nuxt3-\u5c08\u6848\u4e2d\u5be6\u4f5c-pwa",level:2},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:2}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"manifestjson",children:"manifest.json"}),"\n",(0,i.jsxs)(n.p,{children:["\u57fa\u672c\u4e0a ",(0,i.jsx)(n.code,{children:"manifest.json"})," \u5c31\u662f\u63d0\u4f9b\u61c9\u7528\u7a0b\u5f0f\u7684\u76f8\u95dc\u8cc7\u8a0a\uff0c\u8af8\u5982\uff1a"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"name: \u61c9\u7528\u7a0b\u5f0f\u540d\u7a31\u3002"}),"\n",(0,i.jsx)(n.li,{children:"short_name: \u61c9\u7528\u7a0b\u5f0f\u7c21\u5beb\u3002"}),"\n",(0,i.jsx)(n.li,{children:"description: \u61c9\u7528\u7a0b\u5f0f\u63cf\u8ff0\u3002"}),"\n",(0,i.jsx)(n.li,{children:"theme_color: \u61c9\u7528\u7a0b\u5f0f\u4e3b\u8272\u8abf\u3002"}),"\n",(0,i.jsx)(n.li,{children:"background_color: \u555f\u52d5\u756b\u9762\u80cc\u666f\u8272\u3002"}),"\n",(0,i.jsxs)(n.li,{children:["icons: \u61c9\u7528\u7a0b\u5f0f\u7684\u5716\u793a\u3002\n\u4e0a\u6709\u8a31\u591a\u8a2d\u5b9a\u672a\u5217\u51fa\uff0c\u53ef\u4ee5\u53c3\u8003 ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/zh-TW/docs/Web/Manifest",children:"MDN"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"workbox",children:"Workbox"}),"\n",(0,i.jsxs)(n.p,{children:["\u524d\u7bc7\u6587\u7ae0\u6709\u8b1b\u5230 service worker \u662f PWA \u6280\u8853\u7684\u6838\u5fc3\u67b6\u69cb\uff0c\u800c workbox \u5c31\u662f Google \u63d0\u4f9b\u62ff\u4f86\u7c21\u5316\u4f7f\u7528 service worker \u7684\u5de5\u5177\u7bb1\u3002",(0,i.jsx)(n.br,{}),"\n","\u901a\u5e38\u4f86\u8aaa\uff0c\u539f\u751f\u5beb PWA \u7684\u65b9\u5f0f (\u4e0d\u4f7f\u7528\u4efb\u4f55\u5957\u4ef6) \u662f\u5efa\u7acb\u4e00\u500b ",(0,i.jsx)(n.code,{children:"sw.js"}),"\uff0c\u4e26\u5728\u88e1\u9762\u64b0\u5beb\u5305\u62ec\u7de9\u5b58\u7b56\u7565\u3001\u96e2\u7dda\u652f\u63f4\u3001\u63a8\u9001\u901a\u77e5\u7b49\u76f8\u95dc\u8a2d\u5b9a\u3002"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"\u5728-nuxt3-\u5c08\u6848\u4e2d\u5be6\u4f5c-pwa",children:"\u5728 Nuxt3 \u5c08\u6848\u4e2d\u5be6\u4f5c PWA"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://chungyingho.github.io/Nuxt3-PWA-Map/",children:"Demo \u7db2\u7ad9"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{src:t(66821).A+"",width:"619",height:"939"})]})}),"\n",(0,i.jsxs)(n.p,{children:["Nuxt3 \u5b98\u65b9\u6709\u63a8\u85a6\u4f7f\u7528\u7684 PWA \u5957\u4ef6\uff0c\u6545\u9019\u88e1\u662f\u4f7f\u7528\u5957\u4ef6 ",(0,i.jsx)(n.a,{href:"https://vite-pwa-org.netlify.app/frameworks/nuxt",children:"vite-pwa-nuxt"})," \u7684\u505a\u6cd5\u3002"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5b89\u88dd ",(0,i.jsx)(n.a,{href:"https://vite-pwa-org.netlify.app/frameworks/nuxt",children:"vite-pwa-nuxt"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install -D @vite-pwa/nuxt\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["\u524d\u5f80 ",(0,i.jsx)(n.code,{children:"nuxt.config.ts"})," \u9032\u884c\u8a2d\u5b9a"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export default defineNuxtConfig({\n  modules: ['@vite-pwa/nuxt'],\n  pwa: {\n    /* your pwa options */\n  }\n})\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["\u73fe\u5728\u958b\u59cb\u64b0\u5beb\u525b\u525b ",(0,i.jsx)(n.code,{children:"nuxt.config.ts"})," \u5167 pwa \u7684\u5167\u5bb9"]}),"\n"]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"nuxt.config.ts"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"pwa: {\n    // \u6307\u5b9a PWA \u7684\u7bc4\u570d\u548c\u57fa\u672c\u8def\u5f91\n    scope: '/',\n    base: '/',\n    // \u63a7\u5236 PWA \u7684\u5b89\u88dd\u548c\u8a3b\u518a\u884c\u70ba\n    injectRegister: 'auto',\n    registerType: 'autoUpdate',\n    // Web Manifest \u7684\u914d\u7f6e\uff0c\u5305\u62ec\u61c9\u7528\u7a0b\u5f0f\u7684\u540d\u7a31\u3001\u5716\u6a19\u3001\u984f\u8272\u7b49\n    manifest: {\n      name: 'World Map',\n      short_name: 'World Map',\n      description: 'World Map made with openlayers',\n      theme_color: \"#1867c0\",\n      background_color: \"#1867c0\",\n      icons: [\n        {\n          src: 'street-map.png',\n          sizes: '512x512',\n          type: 'image/png',\n          purpose: 'any'\n        }\n      ],\n    },\n    // \u76ee\u7684\u662f\u5c07 Web Manifest \u7684\u8a3b\u518a\u63a7\u5236\u4ea4\u7d66\u958b\u767c\u8005\uff0c\u800c\u4e0d\u662f\u7531 PWA \u63d2\u4ef6\u81ea\u52d5\u8655\u7406\n    registerWebManifestInRouteRules: true,\n    // \u751f\u6210 Service Worker \u7684\u5eab\uff0c\u9019\u88e1\u6307\u5b9a\u4e86\u4e00\u4e9b\u95dc\u65bc Service Worker \u884c\u70ba\u7684\u914d\u7f6e\uff0c\u4f8b\u5982\u5feb\u53d6\u7b56\u7565\u548c\u7db2\u8def\u8acb\u6c42\u7684\u8655\u7406\n    workbox: {\n      // \u6307\u5b9a\u7576\u4f7f\u7528\u8005\u5728\u96e2\u7dda\u72c0\u614b\u4e0b\u8a2a\u554f\u4e0d\u5728 cache \u4e2d\u7684\u9801\u9762\u6642\u7684\u56de\u9000\u7b56\u7565\n      navigateFallback: undefined,\n      // Service Worker \u555f\u52d5\u6642\u6e05\u7406\u820a\u7684\u5feb\u53d6\u3002\u9019\u6709\u52a9\u65bc\u78ba\u4fdd\u7528\u6236\u59cb\u7d42\u7372\u53d6\u5230\u6700\u65b0\u7248\u672c\u7684\u61c9\u7528\u7a0b\u5f0f\u5167\u5bb9\u3002\n      cleanupOutdatedCaches: true,\n      // \u5b9a\u7fa9\u4e86\u9700\u8981\u88ab\u7de9\u5b58\u7684\u6a94\u6848\u6a21\u5f0f\u3002\n      globPatterns: ['**/*.{json,ico,svg,ttf,woff,css,scss,js,html,txt,jpg,png,woff2,mjs,otf,ani,vue}'],\n      // \u5b9a\u7fa9\u4e86\u904b\u884c\u6642\u5feb\u53d6\u7684\u898f\u5247\n      runtimeCaching: [\n        // \u7576\u6709\u8207\u6839\u8def\u5f91\u5339\u914d\u7684\u8acb\u6c42\u6642\uff0cService Worker \u6703\u512a\u5148\u4f7f\u7528\u7db2\u8def\u8acb\u6c42\uff0c\u5982\u679c\u7db2\u8def\u8acb\u6c42\u5931\u6557\uff0c\u5247\u4f7f\u7528\u7de9\u5b58\u7684\u8cc7\u6e90\n        {\n          urlPattern: \"/\",\n          handler: 'NetworkFirst',\n        },\n      ],\n    },\n    // \u5ba2\u6236\u7aef\u914d\u7f6e\n    client: {\n      // \u662f\u5426\u7981\u7528\u5b89\u88dd\u63d0\u793a\n      installPrompt: false,\n      // Service Worker \u5468\u671f\u6027\u6aa2\u67e5\u66f4\u65b0\u7684\u6642\u9593 (\u79d2)\n      periodicSyncForUpdates: 20,\n    },\n    // \u958b\u767c\u7aef\u914d\u7f6e\n    devOptions: {\n      // \u6b64\u9078\u9805\u555f\u7528\u6216\u7981\u7528 PWA \u958b\u767c\u9078\u9805\n      enabled: true,\n      // \u63a7\u5236\u662f\u5426\u6291\u5236 PWA \u958b\u767c\u904e\u7a0b\u4e2d\u751f\u6210\u7684\u8b66\u544a\u6d88\u606f\n      suppressWarnings: false,\n      // \u5b9a\u7fa9\u7576\u4f7f\u7528\u8005\u8a2a\u554f\u672a\u7de9\u5b58\u9801\u9762\u6642\u5c0e\u5411\u7684 URL\n      navigateFallback: 'index.html',\n      type: 'module',\n    }\n}\n"})})]}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["\u5728 ",(0,i.jsx)(n.code,{children:"app.vue"})," \u4e2d\u4f7f\u7528\u5957\u4ef6\u63d0\u4f9b\u7684 functional component ",(0,i.jsx)(n.code,{children:"NuxtPwaManifest "}),"\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"<template>\n  <NuxtPwaManifest />\n  <NuxtPage />\n</template>\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["\u82e5\u8981\u90e8\u5c6c\u4e0a\u7dda\uff0c\u8981\u6ce8\u610f\u4fee\u6b63 ",(0,i.jsx)(n.code,{children:"scope"}),", ",(0,i.jsx)(n.code,{children:"base"}),", ",(0,i.jsx)(n.code,{children:"urlPattern"}),"\u3002"]})}),"\n",(0,i.jsx)(n.h2,{id:"\u53c3\u8003\u8cc7\u6599",children:"\u53c3\u8003\u8cc7\u6599"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.geoglify.com/blog/how-to-turn-nuxt-app-into-pwa/",children:"How to turn your Nuxt GeoApplication into a PWA"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://medium.com/front-end-augustus-study-notes/pwa-minifest-6943b5fc65a9",children:"\u4f7f\u7528 Manifest \u5275\u5efa\u4f60\u7684 PWA \u2014 \u57fa\u790e Progressive Web App \u6559\u5b78"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},66821:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/simple-map-598798325dc31408ceb8126d7e423a43.jpg"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);