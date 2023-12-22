---
title: 建立 docusaurus 環境
tags: [blog, docusaurus]
---
## 建立 dosaurus 環境
```bash
npx create-docusaurus@latest my-website classic
```

## 設定 docusaurus.config.js
```js
const config = {
  // 通常會設置為 GitHub page 的網址
  url: 'https://chungyingho.github.io',
  // 會設置為 GitHub 的專案名稱
  baseUrl: '/CodeFictionist/',
  // 部屬的分支
  deploymentBranch: 'deployment',
  // 在 GitHub 上的用戶名
  organizationName: 'chungyingho',
  // 通常是 repo 的名稱
  projectName: 'CodeFictionist', 
}
```

## GitHub page 佈署
1. 先把程式碼打包成可以佈署的形式
```bash
npm build
```
2. 佈署
```bash
GIT_USER=chungyingho npm run deploy
```

## 自定義域名
1. 前往溝買網址的網站，比如 Ganti.net，設置 `A紀錄`與 `CNAME`。
    * `A 紀錄`：GitHub 的 IP，有四個可以選填 - `185.199.108.153`、`185.199.109.153`、`185.199.110.153`、`185.199.111.153`。
    * `CNAME`：找到 `www` 的 `CNAME`，將值設為 `＠`。
2. 先在 GitHub 上設置自定義域名，需等待一段時間。
3. 在專案中的 `static` 資料夾新增一個 `CNAME` 檔案，填入自己的域名。(對，就這麼簡單，檔案名就是 CNAME)
4. 更改 docusaurus.config.js
```js
const config = {
  // 直接抄 GitHub page 上給的網址
  url: 'https://codefictionist.com/',
  baseUrl: '/',
}
```
5. 打包、佈署。