"use strict";(self.webpackChunkcode_fictionist=self.webpackChunkcode_fictionist||[]).push([[6596],{7679:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=t(5893),o=t(1151);const s={title:"\u4e0a\u50b3\u8cc7\u6599\u986f\u793a\u9032\u5ea6",tags:["HTML","javascript","axios","input","drag"]},a=void 0,l={id:"\u7b46\u8a18\u672c/\u7d9c\u5408\u7b46\u8a18/axios-upload",title:"\u4e0a\u50b3\u8cc7\u6599\u986f\u793a\u9032\u5ea6",description:"Drag & Drop api \u5c1a\u5f85\u4e86\u89e3",source:"@site/docs/04-\u7b46\u8a18\u672c/01-\u7d9c\u5408\u7b46\u8a18/axios-upload.md",sourceDirName:"04-\u7b46\u8a18\u672c/01-\u7d9c\u5408\u7b46\u8a18",slug:"/\u7b46\u8a18\u672c/\u7d9c\u5408\u7b46\u8a18/axios-upload",permalink:"/docs/\u7b46\u8a18\u672c/\u7d9c\u5408\u7b46\u8a18/axios-upload",draft:!1,unlisted:!1,tags:[{label:"HTML",permalink:"/docs/tags/html"},{label:"javascript",permalink:"/docs/tags/javascript"},{label:"axios",permalink:"/docs/tags/axios"},{label:"input",permalink:"/docs/tags/input"},{label:"drag",permalink:"/docs/tags/drag"}],version:"current",frontMatter:{title:"\u4e0a\u50b3\u8cc7\u6599\u986f\u793a\u9032\u5ea6",tags:["HTML","javascript","axios","input","drag"]},sidebar:"tutorialSidebar",previous:{title:"\u5efa\u7acb docusaurus \u74b0\u5883",permalink:"/docs/\u958b\u767c\u65e5\u8a8c/CodeFictionist/install"},next:{title:"PWA \u57fa\u672c\u6982\u5ff5",permalink:"/docs/\u7b46\u8a18\u672c/PWA/basic-pwa"}},i={},d=[{value:"\u529f\u80fd\u8207\u89e3\u6790",id:"\u529f\u80fd\u8207\u89e3\u6790",level:2},{value:"\u4ee5 vue3 \u5be6\u4f5c",id:"\u4ee5-vue3-\u5be6\u4f5c",level:2},{value:"\u5be6\u4f5c\u6bcf\u500b\u6a94\u6848\u90fd\u6709\u7368\u7acb\u9032\u5ea6\u986f\u793a",id:"\u5be6\u4f5c\u6bcf\u500b\u6a94\u6848\u90fd\u6709\u7368\u7acb\u9032\u5ea6\u986f\u793a",level:2},{value:"\u62d6\u66f3\u5f0f\u4e0a\u50b3\u8cc7\u6599",id:"\u62d6\u66f3\u5f0f\u4e0a\u50b3\u8cc7\u6599",level:2},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:2}];function p(n){const e={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"Drag & Drop api \u5c1a\u5f85\u4e86\u89e3"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u529f\u80fd\u8207\u89e3\u6790",children:"\u529f\u80fd\u8207\u89e3\u6790"}),"\n",(0,r.jsxs)(e.p,{children:["\u5728\u4e0d\u4f7f\u7528\u5176\u4ed6\u5c08\u9580\u5957\u4ef6\u4e0b\uff0c\u70ba\u4e0a\u50b3\u6a94\u6848\u6dfb\u52a0\u4e0a\u50b3\u9032\u5ea6\u986f\u793a\u3002",(0,r.jsx)(e.br,{}),"\n","\u89e3\u6cd5\u53ef\u4ee5\u4f7f\u7528 axios \u5957\u4ef6\u5167\u90e8\u7684 ",(0,r.jsx)(e.code,{children:"onUploadProgress"})," \u4f86\u76f4\u63a5\u8655\u7406\u4e0a\u50b3\u9032\u5ea6\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u4ee5-vue3-\u5be6\u4f5c",children:"\u4ee5 vue3 \u5be6\u4f5c"}),"\n",(0,r.jsx)(e.admonition,{type:"info",children:(0,r.jsxs)(e.p,{children:["\u5be6\u4f5c\u5957\u7528\u7684 api \u70ba ",(0,r.jsx)(e.a,{href:"https://httpbin.org/",children:"httpbin.org"}),"\uff0c\u53ef\u4ee5\u63a5\u53d7 POST \u8acb\u6c42\u4f46\u4e0d\u6703\u5be6\u969b\u5132\u5b58\u6a94\u6848\u3002"]})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"<script setup>\nimport axios from 'axios';\nimport { reactive } from 'vue';\n\nconst state = reactive({\n  file: null,\n  progress: 0,\n})\n\nconst handleFileChange = (event) => {\n  state.file = event.target.files[0];\n}\n\nconst uploadFile = () => {\n  if (!state.file) {\n    console.log('no file')\n    return\n  }\n\n  const formData = new FormData()\n  formData.append('file', state.file)\n\n  axios.post('https://httpbin.org/post', formData, {\n    onUploadProgress: (progressEvent) => {\n      state.progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);\n      console.log(state.progress)\n    },\n  })\n  .then((response) => {\n    console.log('success');\n  })\n  .catch((error) => {\n    console.error(error);\n  })\n}\n<\/script>\n\n<template>\n    <div>\n      <input type=\"file\" @change=\"handleFileChange\" multiple/>\n      <button @click=\"uploadFile\">\u4e0a\u50b3\u6a94\u6848</button>\n      <div>\n        \u4e0a\u50b3\u9032\u5ea6: {{ state.progress }}%\n      </div>\n    </div>\n</template>\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u5efa\u7acb\u5e7e\u500b\u5927\u5bb9\u91cf\u6a94\u6848\u4f86\u5be6\u969b\u6e2c\u8a66\u4e0a\u50b3\u9032\u5ea6\u7684\u986f\u793a\uff0c\u4e0b\u8ff0\u5c31\u662f\u5efa\u7acb\u4e00\u500b\u53eb largefile \u7684 50 mb \u6a94\u6848\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"dd if=/dev/zero of=largefile bs=1M count=50\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u5be6\u4f5c\u6bcf\u500b\u6a94\u6848\u90fd\u6709\u7368\u7acb\u9032\u5ea6\u986f\u793a",children:"\u5be6\u4f5c\u6bcf\u500b\u6a94\u6848\u90fd\u6709\u7368\u7acb\u9032\u5ea6\u986f\u793a"}),"\n",(0,r.jsxs)(e.p,{children:["\u56e0\u70ba axios \u7684 onUploadProgress \u986f\u793a\u7684\u662f\u6574\u500b",(0,r.jsx)(e.code,{children:"\u5168\u90e8\u7684\u4e0a\u50b3\u9032\u5ea6"}),"\uff0c\u5982\u679c\u4eca\u5929\u662f\u8981\u4e00\u6b21\u4e0a\u50b3\u591a\u500b\u6a94\u6848\uff0c\u4f46\u8981\u6bcf\u500b\u6a94\u6848\u6709\u7368\u7acb\u7684\u9032\u5ea6\u986f\u793a (\u53ef\u80fd\u65b9\u4fbf\u505a\u9032\u5ea6\u689d\u4e4b\u985e\u7684) \u6703\u9700\u8981\u5206\u958b\u5c0d\u6bcf\u4e00\u500b\u6a94\u6848\u505a\u4e00\u6b21 POST\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u5be6\u969b\u4e0a\u6d41\u7a0b\u5982\u4e0b\uff1a"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u4f7f\u7528\u8005\u4e00\u6b21\u50b3\u5165\u591a\u500b\u6a94\u6848\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u524d\u7aef\u5c07\u63a5\u6536\u5230\u7684\u8cc7\u6599 (\u542b\u591a\u500b\u6a94\u6848) \u62c6\u6210\u4e00\u4efd\u4e00\u4efd\u5b58\u5165\u9663\u5217\u4e4b\u4e2d\uff0c\u4e26\u8ce6\u4e88\u4ed6\u5011\u6bcf\u500b\u4e00\u500b\u7368\u81ea\u7684\u9032\u5ea6\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"<script setup>\nimport axios from 'axios';\nimport { reactive } from 'vue';\n\nconst state = reactive({\n  files: [],\n  uploading: false,\n})\n\n// \u7576\u9078\u64c7\u6a94\u6848\u767c\u751f\u8b8a\u5316\u6642\uff0c\u89f8\u767c\u9019\u500b\u51fd\u5f0f\nconst handleFileChange = (event) => {\n  // \u4f7f\u7528 Array.from \u5c07 FileList \u8f49\u63db\u70ba\u9663\u5217\uff0c\u518d\u5c07\u6bcf\u500b\u6a94\u6848\u5305\u88dd\u6210\u5305\u542b\u9032\u5ea6\u7684\u7269\u4ef6\n  state.files = Array.from(event.target.files).map((file) => ({\n    file,\n    progress: 0,\n  }))\n}\n\n// \u7576\u6309\u4e0b\u4e0a\u50b3\u6309\u9215\u6642\uff0c\u89f8\u767c\u9019\u500b\u51fd\u5f0f\nconst uploadFile = async (fileObj) => {\n  // \u5275\u5efa FormData \u7269\u4ef6\uff0c\u7528\u65bc\u5c07\u6a94\u6848\u8cc7\u6599\u5305\u88dd\u6210\u8868\u55ae\u683c\u5f0f\n  const formData = new FormData()\n  formData.append('file', fileObj.file)\n\n  try {\n    const response = await axios.post('https://httpbin.org/post', formData, {\n      onUploadProgress: (progressEvent) => {\n        fileObj.progress = Math.round((progressEvent.loaded * 100) / progressEvent.total)\n      },\n    })\n  } catch (error) {\n    console.error('\u6a94\u6848\u4e0a\u50b3\u5931\u6557\uff1a', error)\n  }\n};\n\n// \u7576\u6309\u4e0b\u4e0a\u50b3\u6309\u9215\u6642\u89f8\u767c\uff0c\u958b\u59cb\u4e0a\u50b3\u6240\u6709\u6a94\u6848\nconst uploadFiles = () => {\n  // \u8a2d\u7f6e\u4e0a\u50b3\u4e2d\u7684\u72c0\u614b\n  state.uploading = true\n\n  // \u4f7f\u7528 Promise.all\uff0c\u4e26\u70ba\u6bcf\u500b\u6a94\u6848\u5275\u5efa\u4e00\u500b\u4e0a\u50b3\u8acb\u6c42\uff0c\u9019\u6a23\u5b83\u5011\u53ef\u4ee5\u540c\u6642\u9032\u884c\n  const uploadPromises = state.files.map(uploadFile)\n\n  Promise.all(uploadPromises)\n  .then(() => {\n    console.log('\u6240\u6709\u6a94\u6848\u4e0a\u50b3\u5b8c\u6210')\n  })\n  .catch((error) => {\n    console.error('\u6709\u6a94\u6848\u4e0a\u50b3\u5931\u6557\uff1a', error)\n  })\n  .finally(() => {\n    state.uploading = false\n  })\n}\n<\/script>\n\n<template>\n  <div>\n    <input type=\"file\" multiple @change=\"handleFileChange\" />\n    <button @click=\"uploadFiles\">\u4e0a\u50b3\u6a94\u6848</button>\n    <div v-if=\"uploading\">\n      <div v-for=\"(file, index) in files\" :key=\"index\">\n        {{ file.file.name }} \u4e0a\u50b3\u9032\u5ea6: {{ file.progress }}%\n      </div>\n    </div>\n  </div>\n</template>\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u62d6\u66f3\u5f0f\u4e0a\u50b3\u8cc7\u6599",children:"\u62d6\u66f3\u5f0f\u4e0a\u50b3\u8cc7\u6599"}),"\n",(0,r.jsxs)(e.p,{children:["\u62d6\u66f3\u5f0f\u4e0a\u50b3\u4e0d\u7528\u4f7f\u7528\u5230 HTML \u7684 ",(0,r.jsx)(e.code,{children:"<input>"}),"\uff0c\u800c\u662f\u8981\u6539\u7528 HTML5 \u63d0\u4f9b\u7684 drag \u8ddf drop api\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"<script setup>\nimport axios from 'axios';\nimport { reactive } from 'vue';\n\nconst state = reactive({\n    files: [],\n    uploading: false,\n})\n\nconst uploadFile = async (fileObj) => {\n    const formData = new FormData()\n    formData.append('file', fileObj.file)\n\n    try {\n    const response = await axios.post('https://httpbin.org/post', formData, {\n        onUploadProgress: (progressEvent) => {\n        fileObj.progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);\n        },\n    })\n\n    console.log(response.data);\n    } catch (error) {\n    console.error('\u6a94\u6848\u4e0a\u50b3\u5931\u6557\uff1a', error);\n    }\n}\n\nconst uploadFiles = () => {\n    state.uploading = true\n\n    const uploadPromises = state.files.map(uploadFile)\n\n    Promise.all(uploadPromises)\n    .then(() => {\n        console.log('\u6240\u6709\u6a94\u6848\u4e0a\u50b3\u5b8c\u6210')\n    })\n    .catch((error) => {\n        console.error('\u6709\u6a94\u6848\u4e0a\u50b3\u5931\u6557\uff1a', error)\n    })\n    .finally(() => {\n        state.uploading = false\n    })\n}\n\n// drag\nconst handleDragEnter = (event) => {\n    event.stopPropagation()\n    event.preventDefault()\n    state.isDragOver = true\n};\n\nconst handleDragOver = (event) => {\n    event.stopPropagation()\n    event.preventDefault()\n    state.isDragOver = true\n    console.log('drag over')\n};\n\nconst handleDragLeave = (event) => {\n    event.stopPropagation()\n    event.preventDefault()\n    state.isDragOver = false\n    console.log('drag leave')\n};\n\nconst handleDrop = (event) => {\n    event.stopPropagation()\n    event.preventDefault()\n    state.isDragOver = false\n\n    const files = Array.from(event.dataTransfer.files).map((file) => ({\n    file,\n    progress: 0,\n    }));\n\n    // \u5c07\u6587\u4ef6\u6dfb\u52a0\u5230 state.files \u4e2d\n    state.files = files\n}\n<\/script>\n\n<template>\n    <div>\n      <div\n        @dragenter.prevent=\"handleDragEnter\"\n        @dragover.prevent=\"handleDragOver\"\n        @dragleave.prevent=\"handleDragLeave\"\n        @drop.prevent=\"handleDrop\"\n        class=\"drop-area\"\n        :class=\"{ 'drag-over': state.isDragOver }\"\n        >\n        \u5c07\u6a94\u6848\u62d6\u62c9\u5230\u9019\u88e1\u9032\u884c\u4e0a\u50b3\n      </div>\n      <p v-if=\"state.files.length > 0\">\n        {{ state.files.length > 1 ? '\u5df2\u9078\u64c7 ' + state.files.length + ' \u500b\u6a94\u6848' : '\u5df2\u9078\u64c7 1 \u500b\u6a94\u6848' }}\n      </p>\n      <p v-else>\n        \u672a\u9078\u64c7\u4efb\u4f55\u6a94\u6848\n      </p>\n      <button @click=\"uploadFiles\">\u4e0a\u50b3\u6a94\u6848</button>\n      <div v-if=\"state.uploading\">\n        <div v-for=\"(file, index) in state.files\" :key=\"index\">\n          {{ file.name }} \u4e0a\u50b3\u9032\u5ea6: {{ file.progress }}%\n        </div>\n      </div>\n    </div>\n</template>\n\n<style scoped>\n.drop-area {\n  border: 2px dashed #ccc;\n  padding: 20px;\n  text-align: center;\n}\n\n.drag-over {\n  border-color: #2196F3;\n  background-color: #E3F2FD;\n}\n</style>\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u53c3\u8003\u8cc7\u6599",children:"\u53c3\u8003\u8cc7\u6599"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://blog.csdn.net/qq_41915137/article/details/132607010",children:"\u4f7f\u7528Axios\u4e2d\u7684onUploadProgress\u5b9e\u73b0\u663e\u793a\u6587\u4ef6\u4e0a\u4f20\u8fdb\u5ea6"})}),"\n"]})]})}function c(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(p,{...n})}):p(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>l,a:()=>a});var r=t(7294);const o={},s=r.createContext(o);function a(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:a(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);