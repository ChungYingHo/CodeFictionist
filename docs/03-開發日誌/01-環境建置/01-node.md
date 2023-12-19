---
title: Node.js 安裝與基礎操作
---
## Node.js 簡介
Node.js 是一個 JavaScript 的執行環境，讓 JavaScript 可以跳脫瀏覽器而在電腦上執行，達到構建前、後端的應用。

## Node Version Manager - Windows
Windows 系統的 nvm 點[這裡](https://github.com/coreybutler/nvm-windows/releases)找到最新版本的 `nvm-setup.zip`。注意安裝路徑下不能出現中文或空白。

## Node Version Manager - Mac
Mac 要安裝 Xcode Cli 才能安裝 nvm。
1. 先確認是否已經有 Xcode Cli。
```bash
xcode-select -p
```
2. 如果沒有，則安裝：
```bash
xcode-select --install
```
3. 安裝 nvm：
```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```
4. 重新開啟終端機，執行 `command -v nvm` 確認是否正確安裝。
:::tip
可以到[這裡](https://github.com/nvm-sh/nvm)看官網指令
:::

## nvm 安裝之後
接著按照下列步驟：
```bash title="terminal"
# 確定 nvm 是否正確安裝
nvm version

# ​查看nvm上有哪些版本的 Node.js 可以安裝
nvm list available

# 安裝你要的 Node.js 版本
nvm install 14.16.0

# 如果你有其他版本的 Node.js，想用其他版本的，輸入：
​nvm use 14.16.0

# 查看 Node.js 是否正確安裝
node -v​
```

## 用 Node.js 執行 JavaScript
打開終端機，輸入 `node`，即可在終端機執行 JavaScript 的環境。如果要離開，輸入 `.exit` 或按兩次 `ctrl + c` 即可。  
若要執行 JavaScript 檔案：`node index.js`。

## 建立 Node.js 伺服器
```js title="index.js"
// 載入 HTTP 模組
​const http = require('http')

// 定義和伺服器有關的變數​
const hostname = 'localhost'
const port = 3000

// 設定回應的 HTTP 狀態碼、內容類型，並把回應的訊息傳送給瀏覽器
const server = http.createServer((req, res) => {
    // 設定回應的 HTTP 狀態碼
    res.statusCode = 200
    // 設定回應的內容類型
    res.setHeader('Content-Type', 'text/plain')
    // 把回應傳送給瀏覽器
    res.end('This is my first server created in Node.js')
})

// 啟動並監聽伺服器​
server.listen(port, hostname, () => {
    console.log(`The server is listening on http://${hostname}:${port}`)
})
```
```powershell title="terminal"
node index.js
```
:::warning
每次更新程式碼，都會需要先 `ctrl + c` 停掉伺服器然後重新進入一次才會畫面更新
:::