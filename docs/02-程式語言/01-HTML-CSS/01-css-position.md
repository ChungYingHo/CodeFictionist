---
title: CSS-position
---
## position: relative
`relative` 的效果在尚未設定 top, bottom, left, right 時看起來是跟 `static` 差不多的，但也就是剛剛提到的 `relative` 可以透過設定 top, bottom, left, right 來相對地調整其原先的位置。

## position: absolute
:::info
`relative` 定位參照的是原先自己的位置，`absolute` 參照的則是父層的位置。
:::
`absolute` 把父層作為參照基準是有規則的：
>父層的 position 不得為 `static`。

也就是說一但父層的 position 我們沒有專門去設定，仍然維持為 `static` 的狀態，那 position 設定為 `absolute` 的元素就不會拿它當參照點，而是會往外去找 position 不是 `static` 的層當參照點，這也是為什麼很多時候一把元素設為 `absolute`，版面就飛走的原因。

## position: fixed
可以把它想像成有一根圖釘把一個元素一直釘在你的視窗上，無論如何滾動你的視窗，它依然都在那個位置，比如說現在部落格最上層的那個功能列。

固定在視窗的意思就是它的參照基準是`視窗`。依然可以透過 top, bottom, left, right 來決定該元素要被`釘`在視窗的哪個位置。

## position: sticky
很類似 `fixed` 的屬性，但它跟 `fixed` 不一樣的地方是它一開始不會出現，要一直捲動到這個元素超過畫面時，`sticky` 才會作用把這個元素固定在畫面的某處。
:::info
記得設定 top 那些屬性，不然會跑版。
:::

## 參考資料
1. [關於 position 屬性](https://zh-tw.learnlayout.com/position.html)
2. [[CSS] 當畫面捲動到超過畫面時讓元素固定在頁面某處- position: sticky](https://tools.wingzero.tw/article/sn/251)