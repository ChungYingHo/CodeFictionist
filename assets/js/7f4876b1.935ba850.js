"use strict";(self.webpackChunkcode_fictionist=self.webpackChunkcode_fictionist||[]).push([[6403],{18372:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var t=i(85893),s=i(11151);const r={title:"Advanced TypeScript",tags:["typescript"]},c=void 0,l={id:"\u7a0b\u5f0f\u8a9e\u8a00/TypeScript/advanced-TS",title:"Advanced TypeScript",description:"\u578b\u5225\u5225\u540d",source:"@site/docs/\u7a0b\u5f0f\u8a9e\u8a00/TypeScript/02-advanced-TS.mdx",sourceDirName:"\u7a0b\u5f0f\u8a9e\u8a00/TypeScript",slug:"/\u7a0b\u5f0f\u8a9e\u8a00/TypeScript/advanced-TS",permalink:"/docs/\u7a0b\u5f0f\u8a9e\u8a00/TypeScript/advanced-TS",draft:!1,unlisted:!1,tags:[{label:"typescript",permalink:"/docs/tags/typescript"}],version:"current",sidebarPosition:2,frontMatter:{title:"Advanced TypeScript",tags:["typescript"]},sidebar:"programSidebar",previous:{title:"Basic TypeScript",permalink:"/docs/\u7a0b\u5f0f\u8a9e\u8a00/TypeScript/basic-TS"},next:{title:"SQL \u57fa\u790e\u8a9e\u6cd5-1",permalink:"/docs/\u7a0b\u5f0f\u8a9e\u8a00/SQL/basic-sql"}},d={},o=[{value:"\u578b\u5225\u5225\u540d",id:"\u578b\u5225\u5225\u540d",level:2},{value:"\u5b57\u4e32\u5b57\u9762\u91cf\u578b\u5225 (String Literal)",id:"\u5b57\u4e32\u5b57\u9762\u91cf\u578b\u5225-string-literal",level:2},{value:"\u5143\u7d44 (tuple)",id:"\u5143\u7d44-tuple",level:2},{value:"\u5217\u8209 (enum)",id:"\u5217\u8209-enum",level:2},{value:"\u6cdb\u578b (Generics)",id:"\u6cdb\u578b-generics",level:2},{value:"\u88dc\u5145 tsconfig.json",id:"\u88dc\u5145-tsconfigjson",level:2},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:2}];function a(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u578b\u5225\u5225\u540d",children:"\u578b\u5225\u5225\u540d"}),"\n",(0,t.jsx)(n.p,{children:"\u51fd\u5f0f\u7684\u51fa\u73fe\u662f\u70ba\u4e86\u628a\u5e38\u7528\u7684\u908f\u8f2f\u5305\u5728\u4e00\u8d77\u4ee5\u7c21\u5316\u7a0b\u5f0f\u78bc\u589e\u52a0\u7dad\u8b77\u8207\u53ef\u8b80\u6027\u3002\u578b\u5225\u7684\u5225\u540d\u4e5f\u662f\u76f8\u540c\u7684\u9053\u7406\uff0c\u5c07\u5e38\u7528\u7684\u578b\u5225\u7d44\u5408\u5ba3\u544a\u6210\u5225\u540d\u4f86\u7c21\u5316\u7a0b\u5f0f\u78bc\u3002\u4f8b\u5982\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:"title='\u672a\u7528\u578b\u5225\u5225\u540d\u524d'",children:"const addNum = (x: number, y: number): number =>{\n  return x + y\n}\n\nconst minusNum = (x: number, y: number): number =>{\n  return x - y\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5169\u500b\u51fd\u5f0f\u90fd\u9700\u8981\u70ba\u53c3\u6578\u548c\u56de\u50b3\u503c\u6307\u5b9a\u540c\u6a23\u7684\u578b\u5225\uff0c\u90a3\u9019\u6642\u5c31\u53ef\u4ee5\u628a\u76f8\u540c\u7684\u5167\u5bb9\u62bd\u51fa\u4f86\u900f\u904e ",(0,t.jsx)(n.code,{children:"type"})," \u4f86\u5b9a\u7fa9\u5225\u540d\uff0c\u4e26\u628a\u9019\u500b\u5225\u540d\u4f5c\u70ba\u578b\u5225\u7d66\u8a3b\u8a18\u5728\u51fd\u5f0f\u4e0b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type NumType = (x: number, y: number)=> number\n\nconst addNum: NumType = (x, y) =>{\n  return x + y\n}\n\nconst minusNum: NumType = (x, y) =>{\n  return x - y\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5b57\u4e32\u5b57\u9762\u91cf\u578b\u5225-string-literal",children:"\u5b57\u4e32\u5b57\u9762\u91cf\u578b\u5225 (String Literal)"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e5f\u662f\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"type"})," \u505a\u5b9a\u7fa9\uff0c\u6240\u4ee5\u8acb\u628a\u5b83\u8ddf\u578b\u5225\u5225\u540d\u4e00\u8d77\u770b\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u5b57\u4e32\u5b57\u9762\u91cf\u578b\u5225\u540d\u5b57\u5f88\u9577\uff0c\u5b83\u53ef\u4ee5\u8b93\u6211\u5011\u81ea\u5df1\u5b9a\u7fa9\u4e00\u7d44\u5b57\u4e32\u503c\uff0c\u800c\u9019\u7d44\u5b57\u4e32\u503c\u53ef\u4ee5\u505a\u70ba\u578b\u5225\u8a3b\u8a18\u5728\u8b8a\u6578\u5e95\u4e0b\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u50cf\u4e0b\u9762\u4f8b\u5b50\uff0c\u7576 heading \u8b8a\u6578\u578b\u5225\u8a3b\u8a18\u70ba Direction \u9019\u500b\u5b57\u4e32\u5b57\u9762\u91cf\u578b\u5225\uff0c\u90a3\u5b83\u5167\u90e8\u6240\u5e36\u7684\u503c\u5c31\u5fc5\u9808\u6eff\u8db3 Direction \u5b9a\u7fa9\u7684\u5167\u5bb9\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'type Direction = "north" | "south" | "east" | "west";\n\nlet heading: Direction;\n\nheading = "north"; // \u6b63\u78ba\nheading = "east";  // \u6b63\u78ba\nheading = "up";    // \u932f\u8aa4\uff0c\u56e0\u70ba "up" \u4e0d\u662f\u5408\u6cd5\u7684\u503c\n'})}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.p,{children:"\u5b57\u4e32\u5b57\u9762\u91cf\u578b\u5225\u5c0d\u4ee5\u4e0b\u60c5\u6cc1\u7279\u5225\u6709\u7528\uff1a"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u60f3\u9650\u5236\u8b8a\u6578\u3001\u51fd\u5f0f\u53c3\u6578\u6216\u7269\u4ef6\u5c6c\u6027\u53ea\u80fd\u63a5\u53d7\u7279\u5b9a\u5b57\u4e32\u503c\u6642\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u56e0\u70ba\u53ef\u4ee5\u9810\u671f\u53ef\u80fd\u7684\u503c\u662f\u54ea\u4e9b\uff0c\u6240\u4ee5\u63d0\u9ad8\u4e86\u7a0b\u5f0f\u78bc\u53ef\u8b80\u6027\u3002"}),"\n"]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u5143\u7d44-tuple",children:"\u5143\u7d44 (tuple)"}),"\n",(0,t.jsx)(n.p,{children:"\u4ed6\u9577\u5f97\u5f88\u50cf\u9663\u5217\uff0c\u4f46\u6bd4\u9663\u5217\u56b4\u82db\u8a31\u591a\u3002\u5143\u7d44\u4e00\u65e6\u5b9a\u7fa9\u4e0b\u53bb\uff0c\u5b83\u6bcf\u500b index \u8a72\u653e\u4ec0\u9ebc\u578b\u5225\u8cc7\u6599\u4ee5\u53ca\u6709\u591a\u5c11 index \u90fd\u5fc5\u9808\u5b8c\u5168\u7b26\u5408\u5b9a\u7fa9\u3002\u8209\u4f8b\u4f86\u8aaa\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"let arr: [string, number, string]\n\narr = ['hello', 100, 'world']\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e00\u65e6\u5b9a\u7fa9\u4e86\u5143\u7d44\uff0c\u5f8c\u9762\u8ce6\u503c\u6642\u5c31\u8a72\u6eff\u8db3\u5143\u7d44\u5167\u5b9a\u7fa9\u7684\u578b\u5225\u4ee5\u53ca\u6578\u91cf\u3002",(0,t.jsx)(n.br,{}),"\n","\u6240\u4ee5\u8aaa\u5143\u7d44\u5728\u9700\u8981\u4fdd\u6301\u7279\u5b9a\u9806\u5e8f\u548c\u578b\u5225\u7684\u60c5\u5883\u4e0b\u975e\u5e38\u6709\u7528\u3002\u6bd4\u65b9\u8aaa\uff0c\u62ff\u4f86\u5b58\u6bcf\u500b\u5546\u54c1\u7684\u7684\u540d\u7a31\u3001\u50f9\u683c\u3001\u8cfc\u8cb7\u6578\u91cf\uff0c\u7528\u9019\u6a23\u4e00\u7d44\u5143\u7d44\u70ba\u57fa\u790e\u5efa\u7acb\u4e00\u500b\u8cfc\u7269\u8eca\u51fd\u5f0f\u5167\u5bb9\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'// \u5efa\u7acb\u4e00\u500b\u5143\u7d44\u7528\u4f86\u5b58\u5546\u54c1\u540d\u7a31\u3001\u6578\u91cf\u4ee5\u53ca\u50f9\u683c\ntype CartItem = [string, number, number]\n\n// \u5275\u5efa\u8cfc\u7269\u8eca\nfunction createShoppingCart(): {\n    // \u56de\u50b3\u5167\u5bb9\u578b\u5225\u5ba3\u544a\n    items: CartItem[],\n    addItem: (item: CartItem) => void,\n    calculateTotal: () => number\n} {\n    const items: CartItem[] = [];\n\n    // \u6dfb\u52a0\u8cfc\u7269\u8eca\u9805\u76ee\n    function addItem(item: CartItem): void {\n      items.push(item);\n    }\n\n    // \u8a08\u7b97\u7e3d\u50f9\n    function calculateTotal(): number {\n      return items.reduce((total, [_, price, quantity]) => total + price * quantity, 0);\n    }\n\n    return { items, addItem, calculateTotal };\n  }\n\n  // \u4f7f\u7528\u8cfc\u7269\u8eca\nconst shoppingCart = createShoppingCart();\n\n// \u6dfb\u52a0\u4e00\u4e9b\u9805\u76ee\u5230\u8cfc\u7269\u8eca\nshoppingCart.addItem(["Laptop", 1000, 2]);\nshoppingCart.addItem(["Mouse", 20, 3]);\nshoppingCart.addItem(["Keyboard", 50, 1]);\n\n// \u8a08\u7b97\u4e26\u8f38\u51fa\u7e3d\u50f9\nconst totalPrice = shoppingCart.calculateTotal();\nconsole.log(`Total Price: $${totalPrice}`);\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u5217\u8209-enum",children:"\u5217\u8209 (enum)"}),"\n",(0,t.jsx)(n.p,{children:"\u70ba\u62bd\u8c61\u7684\u6578\u5b57\u8ce6\u4e88\u6709\u610f\u7fa9\u7684\u540d\u5b57\uff0c\u4f86\u63d0\u9ad8\u7a0b\u5f0f\u78bc\u7684\u53ef\u8b80\u6027\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8209\u4f8b\u4f86\u8aaa\uff0c\u8981\u8868\u793a\u661f\u671f\u5e7e\uff0c\u53ef\u80fd\u6703\u7528\u6578\u5b57\uff0c\u6bd4\u5982 1 \u4ee3\u8868\u661f\u671f\u4e00\uff0c2 \u4ee3\u8868\u661f\u671f\u4e8c\uff0c\u4ee5\u6b64\u985e\u63a8\u3002\u4f46\u662f\u55ae\u7d14\u7528\u6578\u5b57\u5beb\u5c0d\u65bc\u95b1\u8b80\u7a0b\u5f0f\u78bc\u7684\u4eba\u4f86\u8aaa\u53ef\u80fd\u4e0d\u592a\u76f4\u89c0\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5f9e Sun \u958b\u59cb\uff0c\u9019\u4e9b",(0,t.jsx)(n.code,{children:"\u540d\u5b57"}),"\u6703\u4f9d\u5e8f\u88ab\u8ce6\u503c 0-7\uff0c\u63db\u53e5\u8a71\u8aaa\uff0c\u6211\u5011\u6b63\u5728\u7528\u6709\u610f\u7fa9\u7684\u540d\u5b57\u4f86\u8868\u793a\u4e00\u7d44\u56fa\u5b9a\u7684\u503c\u3002\u73fe\u5728\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"Day.Monday"})," \u4f86\u8868\u793a\u661f\u671f\u4e00\uff0c\u800c\u4e0d\u662f\u4f7f\u7528\u4e0d\u76f4\u89c0\u7684\u6578\u5b57\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6cdb\u578b-generics",children:"\u6cdb\u578b (Generics)"}),"\n",(0,t.jsx)(n.p,{children:"\u6cdb\u578b\u8aaa\u767d\u8a71\u4e00\u9ede\u6709\u4e9b\u628a\u578b\u5225\u7576\u8b8a\u6578\u7528\uff0c\u7a0d\u5fae\u5f62\u8c61\u4e00\u9ede\u5f62\u5bb9\u53ef\u4ee5\u628a\u5b83\u60f3\u50cf\u6210\u4e00\u500b\u9748\u6d3b\u7684\u5bb9\u5668\uff0c\u5141\u8a31\u6211\u5011\u4f7f\u7528\u4e0d\u540c\u7684\u578b\u5225\uff0c\u800c\u4e0d\u5931\u53bb\u578b\u5225\u5b89\u5168\u6027\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u6bd4\u5982\u6709\u4e00\u500b\u51fd\u5f0f\uff0c\u5e0c\u671b\u50b3\u5165\u53c3\u6578\u662f ",(0,t.jsx)(n.code,{children:"string"})," \u6642\u56de\u50b3\u4e5f\u662f ",(0,t.jsx)(n.code,{children:"string"}),"\uff0c\u5c31\u53ef\u4ee5\u5229\u7528\u6cdb\u578b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'function myFunc<T>(value: T): T {\n  return value;\n}\n\nlet result = myFunc("Hello, TypeScript!");\nconsole.log(result); // "Hello, TypeScript!"\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u4e0a\u9762\u767c\u751f\u4e86\u4ec0\u9ebc\u4e8b\u5462\uff1f"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:'"Hello, TypeScript!" \u4f5c\u70ba\u53c3\u6578\u50b3\u5165\u51fd\u5f0f\u3002'}),"\n",(0,t.jsxs)(n.li,{children:['"Hello, TypeScript!" \u578b\u5225\u63a8\u8ad6\u70ba ',(0,t.jsx)(n.code,{children:"string"}),"\uff0c",(0,t.jsx)(n.code,{children:"T"})," \u56e0\u6b64\u8868\u793a\u578b\u5225\u70ba ",(0,t.jsx)(n.code,{children:"string"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:["\u4e0d\u904e\u5176\u5be6\u8ac7\u5230\u6cdb\u578b\uff0c\u5c31\u6703\u4e0d\u7531\u81ea\u4e3b\u60f3\u5230",(0,t.jsx)(n.code,{children:"\u806f\u5408\u578b\u5225"}),"\u548c",(0,t.jsx)(n.code,{children:"\u904e\u8f09"}),"\uff0c\u540c\u6a23\u90fd\u662f\u70ba\u4e86\u8655\u7406\u591a\u578b\u5225\u4ee3\u5165\u7684\u60c5\u5f62\u3002\u5be6\u969b\u4e0a\u5728\u4e00\u4e9b\u60c5\u6cc1\u4e0b\uff0c\u4e09\u8005\u9054\u6210\u7684\u529f\u80fd\u662f\u4e00\u6a23\u7684\uff0c\u5dee\u5225\u5728\u65bc\u8a9e\u6cd5\u3002\u81f3\u65bc\u5177\u9ad4\u5dee\u7570\u5927\u81f4\u4e0a\u662f\uff1a"]}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u6cdb\u578b\u76f8\u5c0d\u9748\u6d3b\u8207\u901a\u7528\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u806f\u5408\u578b\u5225+\u578b\u5225\u65b7\u8a00\u901a\u5e38\u7528\u65bc\u8655\u7406\u660e\u78ba\u7684\u578b\u5225\u8f49\u63db\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u904e\u8f09\u5247\u7528\u65bc\u63d0\u4f9b\u4e0d\u540c\u8f38\u5165\u7684\u7279\u5b9a\u8655\u7406\u908f\u8f2f\u3002"}),"\n"]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.h2,{id:"\u88dc\u5145-tsconfigjson",children:"\u88dc\u5145 tsconfig.json"}),(0,t.jsxs)(n.p,{children:["\u524d\u9762\u5df2\u7d93\u5148\u5168\u5c40\u5b89\u88dd\u904e TypeScript \u4e86\uff0c\u4e26\u4e14\u65b0\u589e\u4e86 hello.ts \u6a94\u6848\u4f86\u7df4\u7fd2 TS \u8a9e\u6cd5\u4e26\u900f\u904e ",(0,t.jsx)(n.code,{children:"tsc hello.js"})," \u4f86\u7de8\u8b6f TS \u6a94\u6848\u3002"]}),(0,t.jsxs)(n.p,{children:["\u4f46\u5728\u5be6\u52d9\u4e0a\u8981\u958b\u59cb\u5beb TS \u524d\u6703\u5148\u5728\u4e00\u500b ",(0,t.jsx)(n.code,{children:"tsconfig.json"})," \u7684\u6a94\u6848\u4e2d\u505a\u7de8\u8b6f\u8a2d\u5b9a\uff0c\u524d\u9762\u53ea\u662f\u70ba\u4e86\u5feb\u901f\u7df4\u7fd2 TS \u8a9e\u6cd5\u6240\u4ee5\u5148\u8df3\u904e\u9019\u90e8\u5206\u3002"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"tsc --init\n"})}),(0,t.jsxs)(n.p,{children:["\u57f7\u884c\u5b8c\u7562\uff0c",(0,t.jsx)(n.code,{children:"tsconfig.json"})," \u6703\u51fa\u73fe\u5728\u5c08\u6848\u8cc7\u6599\u4e2d\u3002"]}),(0,t.jsx)(n.p,{children:"\u6253\u958b\u8a2d\u5b9a\u6a94\uff0c\u5148\u628a\u90a3\u4e9b\u6797\u6797\u7e3d\u7e3d\u7684\u8a3b\u89e3\u62ff\u6389\uff0c\u6703\u770b\u5230 TS \u7684\u9810\u8a2d\u662f\u9019\u6a23\uff1a"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:"title='tsconfig.json'",children:'{\n  "compilerOptions": {\n    "target": "es2016",\n    "module": "commonjs",\n    "esModuleInterop": true,\n    "forceConsistentCasingInFileNames": true,\n    "strict": true,\n    "skipLibCheck": true\n  }\n}\n'})}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"target"}),"\uff1a\u6307\u5b9a\u7de8\u8b6f\u751f\u6210\u7684 JavaScript \u7684\u7248\u672c\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"module"}),"\uff1a\u6307\u5b9a\u4e86\u751f\u6210\u6a21\u7d44\u7684\u683c\u5f0f\u3002CommonJS \u662f Node.js \u4e2d\u5e38\u898b\u7684\u6a21\u7d44\u7cfb\u7d71\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"esModuleInterop"}),"\uff1a\u5141\u8a31 TypeScript \u5c0d CommonJS \u6a21\u7d44\u9032\u884c\u66f4\u597d\u7684\u4ea4\u4e92\u64cd\u4f5c\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"forceConsistentCasingInFileNames"}),"\uff1aTypeScript \u5c07\u56b4\u683c\u6aa2\u67e5\u6587\u4ef6\u540d\u7684\u5927\u5c0f\u5beb\u4e00\u81f4\u6027\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"strict"}),"\uff1a\u555f\u7528\u6240\u6709\u7684\u56b4\u683c\u985e\u578b\u6aa2\u67e5\u9078\u9805"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"skipLibCheck"}),"\uff1a\u8df3\u904e\u5c0d\u5ba3\u544a\u6587\u4ef6 (\u7b2c\u4e09\u65b9\u5957\u4ef6) \u7684\u6aa2\u67e5\u3002"]}),"\n"]}),(0,t.jsx)(n.p,{children:"\u57fa\u672c\u4e0a\u53ea\u7528\u9810\u8a2d\u8a2d\u5b9a TS \u4e5f\u80fd\u52d5\uff0c\u4f46\u53ef\u4ee5\u5ba2\u88fd\u5316\u8b93 TS \u66f4\u65b9\u4fbf\uff0c\u800c\u90a3\u4e00\u5927\u5305\u8a3b\u89e3\u5c31\u662f TS \u5141\u8a31\u81ea\u5df1\u8abf\u6574\u7684\u8a2d\u5b9a\u5167\u5bb9\u3002"}),(0,t.jsxs)(n.p,{children:["\u6700\u5f8c\u8aaa\u4e00\u4e0b\u81ea\u52d5\u7de8\u8b6f\u3002\u7576\u6211\u5728\u5b78 TS \u6bcf\u6b21\u5728\u90a3\u908a ",(0,t.jsx)(n.code,{children:"tsc hello.ts"})," \u6642\u90fd\u5728\u60f3\uff0cSCSS \u6709\u81ea\u52d5\u6aa2\u6e2c\u7de8\u8b6f\u7684\u529f\u80fd\uff0cTS \u6709\u6c92\u6709\uff1f",(0,t.jsx)(n.br,{}),"\n","\u9084\u771f\u7684\u6709\uff0c\u5728\u7d42\u7aef\u6a5f\u8f38\u5165 ",(0,t.jsx)(n.code,{children:"tsc --watch"})," \u5c31\u53ef\u4ee5\u8b93 TS \u6bcf\u6b21\u5728\u5132\u5b58\u6a94\u6848\u6642\u5c31\u81ea\u52d5\u7de8\u8b6f\u3002\u800c\u50cf\u6211\u4e00\u6a23 VScode \u8a2d\u5b9a\u6bcf\u6b21\u8b8a\u52d5\u90fd\u81ea\u52d5\u5132\u5b58\u7684\u4eba\uff0c\u9019\u5c31\u7b49\u540c\u7121\u6642\u7121\u523b\u90fd\u5728\u81ea\u52d5\u7de8\u8b6f\u4e86\u3002"]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u53c3\u8003\u8cc7\u6599",children:"\u53c3\u8003\u8cc7\u6599"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://willh.gitbook.io/typescript-tutorial/",children:"TypeScript \u65b0\u624b\u6307\u5357"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://ithelp.ithome.com.tw/articles/10221546",children:"\u3010Day 12\u3011TypeScript \u8cc7\u6599\u578b\u5225 - \u5143\u7d44(Tuple) & \u5217\u8209(Enum)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://blog.anna-yufeng.com/typescript-week2-day1-type-aliases-string-literal-types",children:"\u7b2c\u4e8c\u9031\u7b2c\u4e00\u5929\uff1a\u578b\u5225\u5225\u540d\u8207\u5b57\u4e32\u5b57\u9762\u91cf\u578b\u5225"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://medium.com/enjoy-life-enjoy-coding/typescript-%E5%96%84%E7%94%A8-enum-%E6%8F%90%E9%AB%98%E7%A8%8B%E5%BC%8F%E7%9A%84%E5%8F%AF%E8%AE%80%E6%80%A7-%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95-feat-javascript-b20d6bbbfe00",children:"TypeScript | \u5584\u7528 Enum \u63d0\u9ad8\u7a0b\u5f0f\u7684\u53ef\u8b80\u6027 - \u57fa\u672c\u7528\u6cd5 feat. JavaScript"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>c});var t=i(67294);const s={},r=t.createContext(s);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);