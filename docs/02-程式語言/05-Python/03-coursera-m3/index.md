---
title: py4e - Access Web Data
tags: [python]
---
## Regular Expressions
1. `re.search`：返回第一個找到的項目。相當於 `re.find`。
2. `re.finadall`：搜索所有匹配的項目。
```py
import re
fh = open('regex_sum_1927563.txt')
content = fh.read()
regFh = re.findall('[0-9]+', content)
nums = 0
for i in regFh:
    nums += int(i)
print(nums)
```
:::tip
|RegEx|解釋|
|---|---|
|`a`|匹配字符串中的 "a"。|
|`^a`|匹配以 "a" 開頭項目。|
|`b$`|匹配以字母 "b" 結尾的字串。|
|`.`|匹配任何單個字符，如字串 "abc" 可以用 `a.c` 匹配整個字串。|
|`+`|表示前面的規則可以重複一次或多次，如 `a+` 將匹配 "a"、"aa"、"aaa" 等。|
|`+?`|非貪婪匹配，會將匹配的字符限制在最小可能的範圍，如 `a+?` 匹配 "aaa" 會只返回 "a"。|
|`*`|表示前面的規則可以重複 `0` 次或多次，用法跟 `+` 相同。|
|`*?`|非貪婪匹配。|
|`\s`|匹配空白字串，如 `^\s+` 可以匹配以空白開頭的字串。|
|`\S`|匹配非空白字串。|
|`[abc]`|匹配群組內任一字符。|
|`[^abc]`|匹配群組以外的字符。|
|`()`|分組，如 `(abc)+` 將匹配連續出現的 "abcabc"。|
:::

## Sockets
```py
import socket
# 創建 socket
mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# 連結伺服器與端口
mysock.connect(('data.pr4e.org', 80))
cmd = 'GET http://data.pr4e.org/intro-short.txt HTTP/1.0\r\n\r\n'.encode()
mysock.send(cmd)

while True:
    # 每次接收最多 512 個字節的數據
    data = mysock.recv(512)
    if len(data) < 1:
        break
    print(data.decode(),end='')

mysock.close()
```
下圖為 `Python for everybody` 課程影片截圖，用繪圖的方式方常快速理解 socket 和上述程式碼在網路溝通中扮演的角色。

![](./socket01.png "Socket work (Picture from video of Python for everybody)")

## Unicode
### ASCII
早期常用的字符編碼方式，以 128 個數字聯繫了 26 個大寫字母、26 個小寫字母、10 個數字、標點符號、控制字符等。每個字符都有一個唯一的 7 位二進制編碼，這樣的設計使得 ASCII 字符可以直接映射到一個字節（byte，8 位）的二進制數據中。

![](./ASCII.png)

:::tip
這也說明了為什麼 `print('H' < 'h')` 會得到 `True`，因為代表 h 的數字是 104，大於 H 的 72。
```py
print(ord('H'))
# 72
```
:::

### Unicode
解決 ASCII 無法儲存其他語系字符的問題。`UTF-8` 是現在常用的編碼方式。  
下圖解釋了為何上述程式碼需要進行 `encode` 和 `decode`。

![](./unicode.png)