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

## 自動佈署
1. GitHub settings > Developer settings > Personal access tokens > Tokens(classic) > Generate new token
2. Select scopes 選 `repo:status` 跟 `public_repo` 權限。
3. 複製好 token。
4. 前往專案 repo > Settings > Secrets > Actions > New repository secret，把剛剛複製的 token 貼上。
5. 前往專案 (vscode)，在根目錄下新增一個 `.github` 資料夾，在裡面再建立一個 `workflows` 資料夾，裡面再建立一個 `deploy.yml` 自動佈署腳本以及一個測試腳本 `test-deploy.yml`。
6. 腳本內容如下：
```js title='deploy.yml'
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - action

permissions:
  contents: write

jobs:
  deploy:
    name: Deploy to GitHub Pages
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: npm

      - name: Install dependencies
        run: npm ci
      - name: Build website
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.DEPLOY_SECRET }}
          publish_dir: ./build
          user_name: github-actions[bot]
          user_email: 41898282+github-actions[bot]@users.noreply.github.com
```
```js title='test-deploy.yml'
name: Test deployment

on:
  pull_request:
    branches:
      - action

jobs:
  test-deploy:
    name: Test deployment
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: npm

      - name: Install dependencies
        run: npm ci
      - name: Test build website
        run: npm run build
```
:::warning
如果一開始在 `docusaurus.config.js` 中有設定 `deploymentBranch`，可以把它刪掉了，因為這裡的自動部屬指令會把打包後的程式碼推到 `gh-pages` 這條分支上。
:::

## giscus 留言板
優點：可以在 GitHub 統一管理留言，而且免費無廣告！  
缺點：要留言要登入 GitHub 帳號。  
[**giscus 文件**](https://giscus.app/zh-TW)

1. 先照 giscus 文件上說的檢查：
    * repo 是否已公開。
    * 是否已在 GitHub 安裝 [giscus](https://github.com/apps/giscus) 應用程式。
    * repo 是否已啟用 Discussions 功能。
2. 回到 [giscus 文件](https://giscus.app/zh-TW)，填入自己 repo 的網址，giscus 會檢查是否滿足上述的條件，都滿足就會開放功能給予選取，之後會自動產生一段 code，大致像這樣：
```html
<script src="https://giscus.app/client.js"
        data-repo="[在此輸入儲存庫名稱]"
        data-repo-id="[在此輸入儲存庫 ID]"
        data-category="[在此輸入分類名稱]"
        data-category-id="[在此輸入分類 ID]"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="zh-TW"
        crossorigin="anonymous"
        async>
</script>
```
:::tip
上面的`在此輸入...`不用真的輸入，在填完 repo 網址後，giscus 會自己產生。
:::
3. 回到專案，先安裝 `giscus/react` 套件：
```bash
npm i @giscus/react
```
4. 在 components 資料下中新增 comment 資料夾，建立 `index.js` 檔案：
```jsx title='/components/comment/index.js'
import Giscus from "@giscus/react";

export default function Comment(){
    return(
        <div style={{paddingTop: 50}}>
            <Giscus
                id="comments"
                repo="[在此輸入儲存庫名稱]"
                repoId="[在此輸入儲存庫 ID]"
                category="Announcements"
                categoryId="[在此輸入分類 ID]"
                mapping="pathname"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="bottom"
                theme="light"
                lang="zh-TW"
                loading="lazy"
                />
        </div>
    )
}
```
### 在部落格文章下添加留言板
1. 以指令在 `/src/theme` 底下產生 BlogPostItem 資料夾。
```bash
npm run swizzle @docusaurus/theme-classic BlogPostItem -- --wrap
```
2. 將 BlogPostItem 的 `index.js` 更改如下：
```jsx
import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import Comment from '../../components/comment';

export default function BlogPostItemWrapper(props) {
  return (
    <>
      <BlogPostItem {...props} />
      <Comment/>
    </>
  );
}
```

### 在 docs 文章下添加留言板
1. 以指令在 `/src/theme` 底下產生 `DocItem` 資料夾跟 `Layout` 資料夾。
```bash
npm run swizzle @docusaurus/theme-classic DocItem/Layout -- --wrap
```
2. 將 /DocItem/Layout 的 `index.js` 更改如下：
```jsx
import React from 'react';
import Layout from '@theme-original/DocItem/Layout';
import Comment from '../../../components/comment';

export default function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props} />
      <Comment />
    </>
  );
}
```