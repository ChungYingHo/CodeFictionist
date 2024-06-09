---
title: SQL 基礎語法-2
tags: [sql]
---
## JOIN
已知在 orders 資料表裡記錄了每個飲料品項的販賣情況，但這個資料表中只記錄了飲料的 drinks_id，並沒有飲料的詳細名稱，詳細名稱是記錄在 drinks 資料表裡面，所以會需要用 `JOIN` 來幫忙兩個資料表做連結。

### INNER JOIN
查尋兩邊資料表都有的資料，比方說，現在要把 orders 的 drinks_id 對回 drinks 的 id 來找出飲料名稱：
```sql
SELECT orders.`drinks_id`, orders.`amounts`, drinks.`name`
FROM drinks
JOIN orders
ON drinks.`id` = orders.`drinks_id`;
```
`JOIN` 的重點在於：  
1. `SELECT`，反正查詢一定要有 `SELECT`。
2. `FROM` 是原本的資料表。
3. `JOIN` 是要加入查詢的資料表。
4. `ON` 則是參考點。

### LEFT JOIN 和 RIGHT JOIN
`INNER JOIN` 只列出了兩邊資料相符的部分，但如果今天想把參考點對應不到的資料也一併呈現呢？比方說還是想列出所有飲料名稱怎麼辦，那就是使用 `LEFT JOIN` 和 `RIGHT JOIN`。
:::tip
`LEFT` 指的是 `FROM` 後面的資料表，`RIGHT` 指的是 `JOIN` 後面的資料表
:::
```sql
-- LEFT JOIN
SELECT orders.`drinks_id`, orders.`amounts`, drinks.`name`
FROM drinks
LEFT JOIN orders
ON drinks.`id` = orders.`drinks_id`;

-- RIGHT JOIN
SELECT orders.`drinks_id`, orders.`amounts`, drinks.`name`
FROM orders
RIGHT JOIN drinks
ON drinks.`id` = orders.`drinks_id`;
```

### SELF JOIN
通常用在同一張資料表做比較的狀況。比方說，在 drinks 中找比冰咖啡便宜的飲料：
```sql
SELECT d1.`name`, d2.`name` AS `cheaper_name`, d2.price
FROM drinks AS d1
JOIN drinks AS d2
ON d1.price > d2.price
WHERE d1.`name` = '冰咖啡';
```

### 綜合練習
1. 哪項飲料銷售量最高？
```sql
SELECT drinks.`name`, SUM(orders.`amounts`) AS `total`
FROM drinks
JOIN orders
ON drinks.`id` = orders.`drinks_id`
GROUP BY orders.`drinks_id`
ORDER BY `total` DESC
LIMIT 1;
```
2. 誰是購買額最高的顧客？
```sql
SELECT customers.`name`, SUM(orders.`amounts` * drinks.`price`) AS `revenue`
FROM orders
JOIN customers
ON customers.`id` = orders.`customers_id` 
JOIN drinks
ON drinks.`id` = orders.`drinks_id`
GROUP BY customers.`id`
ORDER BY `revenue` DESC
LIMIT 1;
```

## SQL Transaction (交易)
SQL 作為操縱資料的語言，有時難免會遇到複數資料操縱必須全部執行完成，否則乾脆不要執行的時候，比如說：轉帳時 A、B 帳戶的資料。

若是今天 A 轉了錢給 B，那他們的帳戶金額資料勢必得更新。但當 A 更新完後，程式突然崩潰了，B 沒更新到帳戶資料，這樣算有入帳還是沒入帳？所以會需要交易來幫助管理需要全部執行完畢的步驟來避免這種情形。

交易的基本原則就是：
1. SQL 指令執行皆正確，則執行 `COMMIT` 完成異動，相關資料表更動。
2. SQL 指令執行出任何一個錯，則執行 'ROLLBACK` 取消異動。
```sql title='轉帳範例'
BEGIN TRANSACTION;

UPDATE Accounts
SET Balance = Balance - 100
WHERE AccountID = 1;

UPDATE Accounts
SET Balance = Balance + 100
WHERE AccountID = 2;

-- 提交事務
COMMIT;
```

## 參考資料
1. [Database Transaction & ACID](https://oldmo860617.medium.com/database-transaction-acid-156a3b75845e)