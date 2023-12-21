---
title: 建立 docusaurus 環境
tags: [blog, docusaurus]
---
## 建立 dosaurus 環境
```bash
npx create-docusaurus@latest my-website classic
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