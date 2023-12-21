---
title: Array (陣列) 基礎操作
tags: [javascript, array]
---
## 先創個陣列
```js
let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
```

## 新增元素
1. `push`：往陣列後加元素
```js
numbers.push(9, 10)
console.log(numbers) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```
2. `unshift`：往陣列前方加元素
```js
numbers.unshift(-1, 0)
console.log(numbers) // [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8]
```
3. `[]`：直接指定元素添加或更改位置
```js
numbers[5] = 'six'
console.log(numbers) // [1, 2, 3, 4, 5, 'six', 7, 8]
```

## 刪除
1. `pop`：刪除陣列後方一個元素並回傳刪掉的值
```js
const removeNum = numbers.pop()
console.log(removeNum)  // 8
console.log(numbers) // [1, 2, 3, 4, 5, 6, 7]
```
2. `shift`：刪除陣列前方一個元素並回傳刪掉的值
```js
const removeNum = numbers.shift()
console.log(removeNum)  // 1
console.log(numbers) // [2, 3, 4, 5, 6, 7, 8]
```
3. `delete`：刪除陣列指定位置元素，但不影響陣列長度
```js
delete numbers[5]
console.log(numbers) // [1, 2, 3, 4, 5, <empty>, 7, 8]
```

## 裁切
1. `splice(start, delete, insert)`：對原陣列直接做裁切並傳回裁切的部分。接受三個參數，第一個是要刪除或插入的`索引位置`；第二個是`刪除的元素數`，0 是不刪除只插入，不填是刪除索引位置後所有元素；第三個是要`插入的值`。
```js
const spliceValue = numbers.splice(5, 2, 'six', 'seven')
console.log(spliceValue) //[6, 7]
console.log(numbers) // [1, 2, 3, 4, 5, 'six', 'seven', 8]
```
2. `slice(start, end)`：不修改原陣列，而是會回傳新陣列 (原陣列中的一部分)。接受兩個參數，第一個是`開始的位置`；第二個是`結束的位置`，不代入參數就會提取到最後一筆資料，代入負數表示提取到倒數第幾個資料；都不帶參數會複製一個完整陣列。
```js
const newNumbers = numbers.slice(2, 5)
console.log(newNumbers) // [3, 4, 5]
```
3. `copyWithin(index, start, end)`：會修改原陣列的操作方式。語法內容是把 start 到 end 位置中的內容複製下來，然後從 index 的位置貼上覆蓋原本的內容。
```js
numbers.copyWithin(1, 5, 8)
console.log(newNumbers) // [1, 6, 7, 8, 5, 6, 7, 8]
```

## 排序
1. `sort`：會操作原陣列。參數可以接受自己寫的函式，也建議自己簡短寫一個函式，因為不帶參數的 sort 表現有點一言難盡...。
```js
// 先創個混亂排序陣列
let newNumbers = [10, 5, 8, 2, 4, 1, 0]

// 單純用 sort() 不帶參數
newNumbers.sort()
console.log(newNumbers) //[0, 1, 10, 2, 4, 5, 8]

// 寫個函式代入參數
const Sorting = (a, b)=>{
  if(a > b){
    return 1
  }else if(a < b){
    return -1
  }else{
    return 0
  }
}
newNumbers.sort(Sorting)
console.log(newNumbers) //[0, 1, 2, 4, 5, 8, 10]
```
2. `reverse`：將陣列倒轉
```js
numbers.reverse()
console.log(numbers) // [8, 7, 6, 5, 4, 3, 2, 1]
```

## 篩選與搜尋
1. `filter`，會回傳一個符合條件的新陣列。接受一個 callback 函式做為參數，該函式又接受三個參數：`item`, `index`, `array`。
    * item：正在被處理的元素
    * index：當前元素的索引位置
    * array：正在遍歷的陣列
```js
const filterNum = numbers.filter((item)=>{
  return item > 5
})
console.log(filterNum) // [6, 7, 8]
```
2. `find`：跟filter類似，但返回的是符合後方條件的第一個值。現在代入跟上面filter一樣的條件
```js
const findNum = numbers.find((item)=>{
  return item > 5
})
console.log(findNum) // 6
```
3. `indexOf`：查詢某元素的陣列索引位置。帶兩個參數，第一個是`查尋的元素`，第二個是要`開始查詢的位置`。
```js
const index = numbers.indexOf(6)
console.log(index)  // 5
```
4. `includes`：查詢陣列中是否帶有某元素。所帶參數跟indexOf一樣
```js
console.log(numbers.includes(6)) // true
```

## 迭代
1. `forEach`：可以看做是陣列的迴圈，不會修改原陣列也不會回傳任何值，就僅僅是依開發者想要對陣列中的元素做什麼操作
```js
let doubleNumbers = []

numbers.forEach((number)=>{
  let newNum = number * 2
  return doubleNumbers.push(newNum)
})

console.log(doubleNumbers) // [2, 4, 6, 8, 10, 12, 14, 16]
```
2. `map`：跟`forEach`不一樣，它會回傳一個新陣列。上述的內容改成map會變這樣
```js
const doubleNumbers = numbers.map((number)=>{
  return number * 2
})

console.log(doubleNumbers) // [2, 4, 6, 8, 10, 12, 14, 16]
```
3. `reduce`：陣列計算。它接受兩個參數，一個是 callback function，一個是預設值。
    * callback function 可以帶的參數：
        * accumulator：目前計算後的值。
        * currentValue：正在處理的元素。
        * currentIndex：當前元素的索引位置。
        * array：當前操作的陣列。
    * initialValue：預設值，不提供會默認第一個元素的值為預設值。
```js
const sum = numbers.reduce((x, y)=>{
  return x + y
})

console.log(sum) // 36
```
4. `every`：用來檢查陣列中的元素是否都滿足特定條件，如果只想要部分滿足可以改成 `some`。
```js
console.log(numbers.every(number => number > 6)) // false，不是每個數字都大於6
console.log(numbers.some(number => number > 6)) // true，有一些數字大於6
```

## 刪除重複
先來建立一個有重複數字的陣列。
```js
let numbers = [1, 2, 3, 4, 4, 4, 5, 6, 7, 8, 8, 8]
```
1. `filter`：
```js
const newNumbers = numbers.filter((item, index)=>{
  return numbers.indexOf(item) === index
})

console.log(newNumbers) // [1, 2, 3, 4, 5, 6, 7, 8]
```
2. `set`：快速解決重複的方法，對原陣列直接執行操作不產生新陣列
```js
numbers = [...new Set(numbers)]

console.log(numbers) // [1, 2, 3, 4, 5, 6, 7, 8]
```
:::info
推薦使用 `set` 來刪除重複
:::

## 合併
1. `concat`：坦白說，也可以用 `+` 號
```js
let secondNumbers = [9, 10, 11]

let newNumbers = numbers.concat(secondNumbers)

console.log(newNumbers) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
```

## 陣列轉字串
1. `join`：裡面帶分隔符，不指定會以逗號隔開
```js
let string = numbers.join()
console.log(string) // 1,2,3,4,5,6,7,8

let string = numbers.join('')
console.log(string) // 12345678

let string = numbers.join(' ') // 帶空格
console.log(string) // 1 2 3 4 5 6 7 8 
```

## 參考資料
1. [實用 Array 陣列操作大全](https://hackmd.io/@Calon/By3akyNOt#forEach)
2. [JS Array 刪除重複元素的三種方式](https://gotraveltoworld.medium.com/js-array-%E5%88%AA%E9%99%A4%E9%87%8D%E8%A4%87%E5%85%83%E7%B4%A0%E7%9A%84%E4%B8%89%E7%A8%AE%E6%96%B9%E5%BC%8F-c79be2d270e6)
3. JavaScript 大全 (第七版) / David Flanagan / 歐萊禮出版