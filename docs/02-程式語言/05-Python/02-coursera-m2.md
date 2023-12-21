---
title: Python for everybody - Data Structure
tags: [python, data structure]
---
## 字串 (String)
1. `find`：這可以找出特定字元的位置 (index)。
2. `len`：計算字串的長度。
3. `strip`：去除字串前後的空白。他還有兄弟 `lstrip` 跟 `rstrip`，顧名思義就是只去除左邊或右邊的空白。
4. `lower` 或 `upper`：把字串變成全部小寫或全部大寫。
5. `replace("old", "new")`：用新字元替換舊字元。
6. `startswith` 和 `endswith`：判斷字串是否使用特定的前綴或後綴。

以下為簡單的範例：
```py
text = "X-DSPAM-Confidence:    0.8475"
pos = text.find(' ')
textLen = len(text)
print(pos, textLen)
print(text[pos : textLen].strip())
```

## 文件 (File)
Python 可以讀取文件，以下範例為使用課程提供之純文字文件作範例，如果想自己練習的話，可以自己建一支 txt 檔案。  

1. `open`：開啟一個文件，可以加入第二個參數，比如 `r` 為唯讀、`w` 為編輯 (會從開啟處覆蓋掉舊內容)、`a` 為續寫。
2. `read`：檔案開啟後，逐行讀取檔案。`readline` 也可以讀取整行資料，但他只讀取一行，`read` 是逐行讀完整個檔案。

以下為簡單範例，會逐行印出去除左右空白且轉為大寫的字串：
```py
fname = input("Enter file name: ")
fh = open(fname)
for line in fh:
    lh = line.strip().upper()
    print(lh)
```

## 列表 (List)
用 JavaScript 的思維想就是陣列，基本操作跟字串大差不差，但列表中的元素可以直接修改，字串不行。

1. `lst["start" : "end"]`：索引或裁切，這個同樣適用於字串。
2. `max`、`min`、`sum`：取列表的最大、最小或值得總和。
3. `append`、`insert`：前者為向列表後插入一個元素；後者接受兩個參數，第一個是插入位置，第二個是插入元素。
4. `pop`、`remove`：前者不加參數時會直接從列表後方取出最後一個元素並從原列表中山出該元素，帶參數則是取出指定位置參數；後者會去搜尋整個列表符合參數的部分，但僅會刪除遇到第一個符合的部分。
5. `index`：可以返回元素索引值，也可以用在字串。
6. `lst.sort()` 或 `sorted(lst)`：前者是對原列表做排序，後者是返回一個排序後的列表。
7. `reverse`：反轉列表。

以下為簡單範例，把檔案中的單字逐一送入變成列表：
```py
fh = open('romeo.txt')
lst = list()
for line in fh:
    subLst = line.strip().split()
    for i in range(len(subLst)):
        lst.append(subLst[i])
lst = list(set(lst))
lst.sort()
print(lst)
```

## 字典 (dictionary)
用 JavaScript 的方式講，就是物件，同樣可以用 `{ }` 宣告或是用 `dict()`。

字典有趣的地方是每個元素都由鍵 (key) 與值 (value) 組成，這可以更靈活地去操縱比較複雜的資料。  
可以用 `dic["key"]` 的方式去取出存在某個 key 下面的值來使用，也可以用這個方法來輕鬆新增或修改。接著下面為常用的字典方法。

1. `keys`：返回所有鍵。
2. `values`：返回所有值。
3. `items`：一個一個返回鍵值對。
4. `clear`：清空字典。
5. `get`：獲取指定 key 的值，如果沒有這個 key 就給他默認值 (詳見範例)。
以下為一個簡單的範例，用來找出發信最多的信箱以及其次數：
```py
fh = open('mbox-short.txt')
dic = dict()
maxNum = 0
maxEmail = ''
for line in fh:
    if not line.startswith('From'):
        continue
    elif line.startswith('From:'):
        continue
    else:
        words = line.strip().split()
        dic[words[1]] = dic.get(words[1], 0) + 1
for i in dic:
    if dic[i] > maxNum:
        maxNum = dic[i]
        maxEmail = i
print(maxEmail, maxNum)
```

## 元組 (tuples)
元組最大的特性就是不可修改，這種只能讀而無法修改的特性可以儲存那些怕更動到的資料。字典中的 `items` 方法回傳的 key-value pair 就是元組。

以下為一個簡單的範例，這裡在最後用 `items` 把字典拆成元組並透過 `sorted` 進行排序：
```py
fh = open('mbox-short.txt')
dic = dict()
for line in fh:
    if not line.startswith('From'):
        continue
    elif line.startswith('From:'):
        continue
    else:
        colonIndex = line.index(':')
        hr = line[colonIndex - 2 : colonIndex]
        dic[hr] = dic.get(hr, 0) + 1
ls = sorted(dic.items())
for k, v  in ls:
    print(k, v)
```

## 參考資料
1. [Programming for Everybody](https://www.coursera.org/specializations/python)