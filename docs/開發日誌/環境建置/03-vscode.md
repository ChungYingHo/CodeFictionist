---
title: VScode 安裝與環境建置
tags: [初始環境建立, vscode]
---
## 安裝 Visual Studio Code
[VScode 下載](https://code.visualstudio.com/)  
下載完後執行安裝檔，照著裡面的操作一路推過去即可。

## 更改終端機預設
預設是 `PowerShell`，個人偏好 `Git Bash`，可以在 VScode 左下角找到設定 (齒輪標記) 進行預設更改。  

在搜尋欄輸入 `terminal default`，沒意外可以看到 `Terminal › Integrated › Default Profile: Windows` 的選項，改成 Git Bash 即可。

## 自動儲存
設定 > 經常使用的 > Files: Auto save > afterDelay

## 單擊文件開啟新分頁 (預設情況下單擊會覆蓋)
在 `settins.json` 添加：`"workbench.editor.enablePreview": false`。


## 安裝插件
可以安裝一下 VScode 插件幫忙作業。  
1. [Chinese (Traditional) Language Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hant)：把 VScode 變中文。
2. [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)：一鍵執行程式碼。
3. [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)：可以快速幫助修改 HTML tag。
4. [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)：自動完成 npm 套件引入。
5. [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)：檢查拼字錯誤。
6. [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server)：實時預覽功能。
7. [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass)：自動編譯 Sass/Scss。
8. [Trailing Spaces](https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces)：捕捉並顯示程式碼中的空格。
9. [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)：讓註解變得鮮明易於辨識。
10. [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)：在寫 CSS 的色碼時可以直接看到顏色。
11. [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)：為專案中的檔案加上鮮明的圖示。
12. [Markdown Preview Mermaid Support](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid)：可以在 markdown 上畫美麗的圖表。

接下來四個是隨著程式語言或開發框架不同而需要安裝的：  
1. [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python)：可以在 VScode 上寫 Python。
2. [Pylance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance)：提供更好的對 Python 語言的支援，但要先安裝 `Python` 插件。
3. [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)：用 vue 開發時強力推薦。
4. [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)：讓 TypeScript 更好地支援 vue。