---
title: docusaurus 使用手冊
tags: [blog, docusaurus]
---
## markdown 學習資源
1. [Markdown文件](https://markdown.tw/)
2. [Docusaurus 官方教學](https://docusaurus.io/zh-CN/docs/markdown-features)
3. [markdown 表情符號](https://gist.github.com/rxaviers/7360908)
4. [markdown 程式碼區塊支援語言表](https://prismjs.com/#supported-languages)

## markdown 使用圖表
:::info
[Mermaid 官方文件](https://mermaid.js.org/intro/)  
[VScode 插件](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid)
:::
1. 先安裝 `@docusaurus/theme-mermaid`
```bash
npm install --save @docusaurus/theme-mermaid
```
2. 設定 `docusaurus.config.js`
```js
export default {
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};
```