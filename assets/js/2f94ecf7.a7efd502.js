"use strict";(self.webpackChunkcode_fictionist=self.webpackChunkcode_fictionist||[]).push([[7223],{55839:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=t(85893),a=t(11151);const i={title:"\u5b98\u65b9\u6559\u5b78 - layouts\u3001pages",tags:["react","next","route","layout","page"]},o=void 0,r={id:"\u7b46\u8a18\u672c/React/Next/next-route",title:"\u5b98\u65b9\u6559\u5b78 - layouts\u3001pages",description:"Layouts \u8207 pages",source:"@site/docs/\u7b46\u8a18\u672c/React/Next/03-next-route.mdx",sourceDirName:"\u7b46\u8a18\u672c/React/Next",slug:"/\u7b46\u8a18\u672c/React/Next/next-route",permalink:"/docs/\u7b46\u8a18\u672c/React/Next/next-route",draft:!1,unlisted:!1,tags:[{label:"react",permalink:"/docs/tags/react"},{label:"next",permalink:"/docs/tags/next"},{label:"route",permalink:"/docs/tags/route"},{label:"layout",permalink:"/docs/tags/layout"},{label:"page",permalink:"/docs/tags/page"}],version:"current",sidebarPosition:3,frontMatter:{title:"\u5b98\u65b9\u6559\u5b78 - layouts\u3001pages",tags:["react","next","route","layout","page"]},sidebar:"programSidebar",previous:{title:"\u5b98\u65b9\u6559\u5b78 - style",permalink:"/docs/\u7b46\u8a18\u672c/React/Next/next-style"},next:{title:"\u5b98\u65b9\u6559\u5b78 - deploy, database",permalink:"/docs/\u7b46\u8a18\u672c/React/Next/next-database"}},l={},d=[{value:"Layouts \u8207 pages",id:"layouts-\u8207-pages",level:2},{value:"\u5de2\u72c0\u8def\u7531",id:"\u5de2\u72c0\u8def\u7531",level:3},{value:"\u65b0\u589e\u4e00\u500b\u9801\u9762",id:"\u65b0\u589e\u4e00\u500b\u9801\u9762",level:3},{value:"\u65b0\u589e\u4e00\u500b layout",id:"\u65b0\u589e\u4e00\u500b-layout",level:3},{value:"Root layout",id:"root-layout",level:3},{value:"\u8def\u7531\u5c0e\u822a",id:"\u8def\u7531\u5c0e\u822a",level:2},{value:"<code>&lt;Link&gt;</code> \u5143\u4ef6",id:"link-\u5143\u4ef6",level:3},{value:"\u986f\u793a active links (<code>usePathname()</code>)",id:"\u986f\u793a-active-links-usepathname",level:3}];function c(e){const n={admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"layouts-\u8207-pages",children:"Layouts \u8207 pages"}),"\n",(0,s.jsx)(n.h3,{id:"\u5de2\u72c0\u8def\u7531",children:"\u5de2\u72c0\u8def\u7531"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"---| app/\n------| /app/dashboard/\n---------| /app/dashboard/invoices\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6bcf\u500b ",(0,s.jsx)(n.strong,{children:"page.tsx"})," \u90fd\u4ee3\u8868\u4e00\u500b\u9801\u9762\uff0c\u5982 ",(0,s.jsx)(n.strong,{children:"/app/page.tsx"})," \u4ee3\u8868\u4e3b\u9801\uff0c\u5c0d\u61c9\u7684\u8def\u7531\u662f ",(0,s.jsx)(n.strong,{children:"/"}),"\u3002",(0,s.jsx)(n.br,{}),"\n","\u540c\u7406\uff0c\u5728 ",(0,s.jsx)(n.strong,{children:"dashboard"})," \u8cc7\u6599\u593e\u4e2d\u4e5f\u5efa\u7acb\u4e00\u500b ",(0,s.jsx)(n.strong,{children:"page.tsx"}),"\uff0c\u5c31\u53ef\u4ee5\u5f62\u6210\u8def\u7531 ",(0,s.jsx)(n.strong,{children:"/dashboard"}),"\u3002",(0,s.jsx)(n.br,{}),"\n","\u5728 ",(0,s.jsx)(n.strong,{children:"invoices"})," \u4e2d\u53c8\u5efa\u7acb\u4e00\u500b ",(0,s.jsx)(n.strong,{children:"page.tsx"})," \u5c31\u6703\u5f62\u6210\u5de2\u72c0\u8def\u7531 ",(0,s.jsx)(n.strong,{children:"/dashboard/invoices"}),"\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u65b0\u589e\u4e00\u500b\u9801\u9762",children:"\u65b0\u589e\u4e00\u500b\u9801\u9762"}),"\n",(0,s.jsxs)(n.p,{children:["\u5be6\u4f5c\u5728 ",(0,s.jsx)(n.strong,{children:"/app"})," \u4e0b\u9762\u65b0\u589e\u4e00\u500b\u8cc7\u6599\u593e ",(0,s.jsx)(n.strong,{children:"dashboard"})," \u4e26\u5728\u5176\u4e2d\u65b0\u589e ",(0,s.jsx)(n.strong,{children:"page.tsx"}),"\uff0c\u9019\u6a23\u5c31\u53ef\u4ee5\u5f62\u6210 ",(0,s.jsx)(n.strong,{children:"/dashboard"})," \u9019\u500b\u8def\u7531\u8207\u9801\u9762\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:"title='/app/dashboard/page.tsx'",children:"export default function Page() {\n  return <p>Dashboard Page</p>;\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u65b0\u589e\u4e00\u500b-layout",children:"\u65b0\u589e\u4e00\u500b layout"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"---| app/\n------| /app/dashboard/\n---------| /app/dashboard/invoices\n---------| /app/dashboard/customers\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f9d\u5b98\u65b9\u7bc4\u4f8b\uff0c\u82e5\u5728 ",(0,s.jsx)(n.strong,{children:"dashboard"})," \u65b0\u589e\u4e00\u500b ",(0,s.jsx)(n.strong,{children:"layout.tsx"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:"title='/app/dashboard/layout.tsx'",children:'import SideNav from \'@/app/ui/dashboard/sidenav\';\n \nexport default function Layout({ children }: { children: React.ReactNode }) {\n  return (\n    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">\n      <div className="w-full flex-none md:w-64">\n        <SideNav />\n      </div>\n      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>\n    </div>\n  );\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5247\u6b64\u4f48\u5c40\u5957\u7528\u5230 ",(0,s.jsx)(n.strong,{children:"dashboard"})," \u5f80\u4e0b\u5c64\u6b21\u7684\u9801\u9762\u8207\u4f48\u5c40\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(45532).Z+"",width:"967",height:"466"})}),"\n",(0,s.jsx)(n.h3,{id:"root-layout",children:"Root layout"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u6700\u4e0a\u5c64\u7684 lauout\uff0c\u4e5f\u5c31\u662f ",(0,s.jsx)(n.strong,{children:"/app/layout.tsx"}),"\uff0c\u53c8\u53eb\u505a root layout\uff0c\u4ed6\u662f\u4e00\u500b",(0,s.jsx)(n.strong,{children:"\u5fc5\u9808"}),"\u5f97\u5b58\u5728\u7684\u4f48\u5c40\uff0c\u7528\u4f86\u8abf\u6574 ",(0,s.jsx)(n.code,{children:"<html>"})," \u8ddf ",(0,s.jsx)(n.code,{children:"<body>"}),"\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:"title='/app/layout.tsx'",children:"import '@/app/ui/global.css';\nimport { inter } from '@/app/ui/fonts';\n \nexport default function RootLayout({\n  children,\n}: {\n  children: React.ReactNode;\n}) {\n  return (\n    <html lang=\"en\">\n      <body className={`${inter.className} antialiased`}>{children}</body>\n    </html>\n  );\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u8def\u7531\u5c0e\u822a",children:"\u8def\u7531\u5c0e\u822a"}),"\n",(0,s.jsxs)(n.h3,{id:"link-\u5143\u4ef6",children:[(0,s.jsx)(n.code,{children:"<Link>"})," \u5143\u4ef6"]}),"\n",(0,s.jsxs)(n.p,{children:["Next \u63d0\u4f9b ",(0,s.jsx)(n.code,{children:"<Link>"})," \u5143\u4ef6\u4f86\u53d6\u4ee3 ",(0,s.jsx)(n.code,{children:"<a>"})," \u5728\u5ba2\u6236\u7aef\u505a\u8def\u7531\u5c0e\u822a\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:"title='/app/ui/dashboard/nav-links.tsx'",children:'import {\n  UserGroupIcon,\n  HomeIcon,\n  DocumentDuplicateIcon,\n} from \'@heroicons/react/24/outline\';\n// highlight-next-line\nimport Link from \'next/link\';\n \n// ...\n \nexport default function NavLinks() {\n  return (\n    <>\n      {links.map((link) => {\n        const LinkIcon = link.icon;\n        return (\n            {/* highlight-start */}\n          <Link\n            key={link.name}\n            href={link.href}\n            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"\n          >\n            <LinkIcon className="w-6" />\n            <p className="hidden md:block">{link.name}</p>\n          </Link>\n          {/* highlight-end */}\n        );\n      })}\n    </>\n  );\n}\n'})}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:"\u6211\u89ba\u5f97\u5b98\u65b9\u8aaa\u7684\u9019\u4e00\u6bb5\u975e\u5e38\u6709\u8da3\uff1a"}),(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Furthermore, in production, whenever ",(0,s.jsx)(n.code,{children:"<Link>"})," components appear in the browser's viewport, Next.js automatically prefetches the code for the linked route in the background. By the time the user clicks the link, the code for the destination page will already be loaded in the background, and this is what makes the page transition near-instant!"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.h3,{id:"\u986f\u793a-active-links-usepathname",children:["\u986f\u793a active links (",(0,s.jsx)(n.code,{children:"usePathname()"}),")"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u9700\u6c42\u5728\u756b\u9762\u4e0a\u986f\u793a\u7576\u524d\u8def\u7531\uff0c\u6216\u9700\u6c42\u7576\u524d\u8def\u7531\u505a\u4e00\u4e9b\u4e8b\u60c5 (\u6bd4\u5982\u4e0b\u5224\u5225\u5f0f)\uff0c\u53ef\u4ee5\u4f7f\u7528 Next \u63d0\u4f9b\u7684 ",(0,s.jsx)(n.code,{children:"usePathname()"})," hook\u3002",(0,s.jsx)(n.br,{}),"\n","\u4f46\u56e0\u70ba ",(0,s.jsx)(n.code,{children:"usePathname()"})," \u662f\u500b hook\uff0c\u56e0\u6b64\u5fc5\u9808\u5728\u5143\u4ef6\u524d\u9762\u52a0\u4e0a ",(0,s.jsx)(n.strong,{children:"'use client'"})," \u5ba3\u544a\u5b83\u662f\u500b ",(0,s.jsx)(n.strong,{children:"client component"})," (Next \u9810\u8a2d\u662f server component)\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u4f9d\u5b98\u65b9\u7bc4\u4f8b\uff0c\u5c31\u662f\u4f9d\u7167\u73fe\u5728\u6240\u5728\u8def\u7531\u4f86\u6539\u8b8a\u756b\u9762\u7684\u984f\u8272\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:"title='/app/ui/dashboard/nav-links.tsx'",children:"// highlight-next-line\n'use client';\n\nimport {\n  UserGroupIcon,\n  HomeIcon,\n  InboxIcon,\n} from '@heroicons/react/24/outline';\nimport Link from 'next/link';\n// highlight-start\nimport { usePathname } from 'next/navigation';\nimport clsx from 'clsx';\n// highlight-end\n\nexport default function NavLinks() {\n    // highlight-next-line\n  const pathname = usePathname();\n \n  return (\n    <>\n      {links.map((link) => {\n        const LinkIcon = link.icon;\n        return (\n          <Link\n            key={link.name}\n            href={link.href}\n            {/* highlight-start */}\n            className={clsx(\n              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',\n              {\n                'bg-sky-100 text-blue-600': pathname === link.href,\n              },\n            )}\n            {/* highlight-end */}\n          >\n            <LinkIcon className=\"w-6\" />\n            <p className=\"hidden md:block\">{link.name}</p>\n          </Link>\n        );\n      })}\n    </>\n  );\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(90329).Z+"",width:"487",height:"350"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},45532:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/07-route-5ffa8f5f22106f5315b3b3867fd52615.png"},90329:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/08-active-route-10830961f191b1126cf238a79fb9ba54.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var s=t(67294);const a={},i=s.createContext(a);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);