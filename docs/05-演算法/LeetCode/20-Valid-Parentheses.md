---
title: Valid Parentheses (Stack)
sidebar_position: 1
---
## 題目要求
>**Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.**

合格字串要求：  
1. 左括號要有匹配的右括號，如：`( )[ ]{ }`。
2. 左括號必須以正確的順序關閉，比如 `({ )}` 就是以不正確順序閉合的字串，但是如果是 `({ })` 就是合格的字串。

僅滿足上述要求可使用雙重迴圈：  
```ts
function isValid(s: string): boolean {
    // 三種情況: '{}', '{[]}', '{}[]'
    const open = ['(', '[', '{']
    const close = [')', ']', '}']

    // 評斷用的數字
    let count = 0
    let count2 = 0

    // 當陣列元素只有一個直接為 false
    s.length < 2 && false
    // 處理 '{[]}' 的情況
    for(let i = 0; i < s.length/2; i++){
        const index = open.indexOf(s[i])
        if(s[s.length - i -1] === close[index]){
            count += 1
        }
    }
    // 處理 '{}[]' 的情況
    for(let i = 0; i < s.length; i += 2){
        const index = open.indexOf(s[i])
        if(s[i + 1] === close[index]){
            count2 += 1
        }
    }

    // 評估
    if(count === s.length/2 || count2 === s.length/2){
        return true
    }else{
        return false
    }
}
```

以上程式通過部了第 79 個測試 `(([]){})` ，。上面的程式會給出 `false` 的答案，但預期其實是 `true`，這是因為少考慮了綜合第一個與第二個條件的第三條件。

## 換個思維思考
條件滿足：
1. 遇到左括號，預期會有一個匹配的右括號。
2. 遇到第二個左括號，要預期當第二個左括號有閉合的右括號後再往後找匹配第一個左括號的右括號。

關於第二點，`後遇到，先匹配`的情況與資料結構之一的堆疊`後進先出 (LIFO)`的概念相同，故可以使用堆疊的概念解題：
```ts
function isValid(s: string): boolean {
    const pairs = { '(': ')', '[': ']', '{': '}' }
    let stack: string[] = []

    if(s.length < 2){
        return false
    }
    
    for(let i of s){
        if(i in pairs){
            stack.push(i)
        }else{
            let lastOpen = stack.pop()
            if(pairs[lastOpen] !== i){
                return false
            }
        }
    }

    return stack.length === 0
}
```
上面的關鍵點在於 `for` 迴圈和裡面的 `if-else` 判別式。當遍歷字串時遇到左括號時就把它推入堆疊中 (`if` 區塊中做的事)；當遇到右括號時 (`else` 區塊中做的事)，就把最新存到堆疊裡的左括號取出來做比對，如果比對錯誤就直接給出 `false` 回傳。最後，如果堆疊的長度為 `0`，就表示所有左括號都成功得到匹配，所以返回 `true`。