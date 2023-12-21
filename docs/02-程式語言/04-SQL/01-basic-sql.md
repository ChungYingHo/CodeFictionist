---
title: SQL 基礎語法-1
tags: [sql]
---
## SQL 練習網站
1. [MySQL Online](https://paiza.io/en/projects/new?language=mysql)
2. [SQLZoo](https://sqlzoo.net/wiki/SQL_Tutorial)

## 建立資料庫
1. 建立資料庫，關鍵字是 `CREATE`。
2. 設定字元集。
3. 定序，即決定了字元該如何被排序。
```sql
CREATE DATABASE myDatabase
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;
```

## 建立資料表
建立一個資料表，必須要規範：  
1. 欄位名稱。
2. 資料型態。
3. 必填與否。
4. 預設值。
5. 哪個欄位要做為主鍵。
```sql title='Sample'
CREATE TABLE [table_name](
  [column1_name] [data_type] [not_null] [default],
  [column2_name] [data_type] [not_null] [default],
  [column3_name] [data_type] [not_null] [default],
  PRIMARY KEY ([column_name])
);
```
:::tip
可以用 [Online SQL Generator](https://wtools.io/generate-sql-create-table) 來產生 code
:::
先簡單創一個飲料表單：
```sql title='drinks'
CREATE TABLE `drinks` (
  `id`    int(11)      unsigned NOT NULL AUTO_INCREMENT,
  `name`  varchar(20)           NOT NULL,
  `price` int(11)      unsigned NOT NULL,
  `cost`  int(11)      unsigned NOT NULL,
  PRIMARY KEY (`id`)
);
```
`int` 指的是存入整數，`varchar` 是存入字母、數字、特殊符號等文本數據，`unsigned` 是指只能存入非負整數，`NOT NULL` 表示必填。

## SQL 的 CRUD
### 新增資料
新增資料會用到 `INSERT INTO` 指定要新增資料的資料表及欄位，並透過 `VALUES` 賦值。
```sql
INSERT INTO `drinks` (`name`, `price`, `cost`)
VALUES ('阿華田', 65, 20),
('百香紅茶', 45, 10),
('四季春茶', 25, 5),
('愛玉冰茶', 50, 7),
('冰咖啡', 70, 30);
```

### 查詢資料
查詢資料是用 `SELECT` 撈資料。
```sql
SELECT * FROM `drinks`;
```

### 修改資料
使用 `UPDATE` 來更新資料，並透過 `WHERE` 來限制指令的作用對象。
```sql
UPDATE `drinks`
SET `price` = 90
WHERE `name` = '冰咖啡';
```

### 刪除資料
使用 `DELETE` 的方法叫做硬刪除，是真的直接把資料從資料表中抹去，所以比較重要的資料會使用軟刪除。
:::note
待補充軟刪除部分
:::
```sql
DELETE FROM `drinks`
WHERE `name` = '阿華田';
```

## SQL 運算子
### 前置準備，先準備一組 SQL 資料
```sql title='customers'
CREATE TABLE `customers` (
	`id` INT unsigned NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(20) NOT NULL,
	`phone` VARCHAR(20) NOT NULL,
	`birth` DATE NOT NULL,
	PRIMARY KEY (`id`)
);

INSERT INTO `customers`(`name`, `phone`, `birth`)
VALUES ('Johny', '0980123123', '1997-04-22'),
('Wendy', '0919456456', '1999-07-07');

SELECT * FROM `customers`;
```
```sql title='orders'
CREATE TABLE `orders` (
    `id` INT unsigned NOT NULL AUTO_INCREMENT,
    `drinks_id` INT(11) unsigned NOT NULL,
    `customers_id` INT(11) unsigned NOT NULL,
    `amounts` INT(11) unsigned NOT NULL,
    `create_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
);

INSERT INTO `orders`(`drinks_id`, `customers_id`, `amounts`)
VALUES (1, 2, 4),
(2, 2, 3),
(3, 2, 9),
(3, 1, 2);

SELECT * FROM `orders`;
```

### 運算子有哪些？
1. 計算運算子：`+`、`-`、`*`、`/`、`%`
2. 比較運算子：`=`、`<>` (不等於)、`>`、`<`、`>=`、`<=`
3. 邏輯運算子： `AND`、`OR`、`BETWEEN`、`LIKE`

### 運算子實戰
假設現在飲料店要因應活動，全體品項要打 8 折，第一個直覺應該是用 `UPDATE` 把價格全部改掉：
```sql title='ver.update'
UPDATE `drinks`
SET `price` = `price` * 0.8;
```
但這樣事直接對資料做更改，並不是最佳解。最好的選擇是多創一個欄位來記錄折扣價格：
```sql title='best solution'
SELECT `name`, `price`, (`price` * 0.8) AS `discount_price`
FROM `drinks`;
```

### 運算子實戰 - 條件限制
只有單價 30 以上的才可以打8折，使用 `WHERE` 配合運算子：
```sql
SELECT `name`, `price`, (`price` * 0.8) AS `discount_price`
FROM `drinks`
WHERE `price` >= 30;
```
雙條件：50 以上不打折。
```sql
// 寫法1
SELECT `name`, `price`, (`price` * 0.8) AS `discount_price`
FROM `drinks`
WHERE `price` >= 30 AND `price` <= 50;

// 寫法2
SELECT `name`, `price`, (`price` * 0.8) AS `discount_price`
FROM `drinks`
WHERE `price` BETWEEN 30 AND 50;
```

### 運算子實戰 - 關鍵字搜尋
名字帶`茶`的飲料才打8折，使用 `WHERE` 配合運算子 `LIKE`：
```sql
SELECT `name`, `price`, (`price` * 0.8) AS `discount_price`
FROM `drinks`
WHERE `name` LIKE '%茶%';
```
:::tip
`%茶%` 表示要找前面有任意字元的茶和後面有任意字元的茶。同理，我們要找以茶開頭的飲料可以寫 `茶%`。
:::

## SQL 內建的函式
### SUM
今天一共賣了幾杯飲料？
```sql
SELECT SUM(`amounts`) AS `total_sold`
FROM `orders`;
```

### AVG
一單平均賣幾杯？
```sql
SELECT AVG(`amounts`) AS `average_sold`
FROM `orders`;
```

### GROUP BY
每個飲料品項總共賣多少杯？
```sql
SELECT `drinks_id`, SUM(`amounts`) as total_sold
FROM `orders`
GROUP BY `drinks_id`;
```

### COUNT
今天各種飲料項目的熱門程度 (出現次數)？
```sql
SELECT `drinks_id`, COUNT(`amounts`) as num_of_orders
FROM `orders`
GROUP BY `drinks_id`;
```

### HAVING
銷售量超過10的的飲料項目？
:::danger
直覺會使用 `WHERE`，但儲存總量的 `total_sold` 欄位是用函式建的， `WHERE` 無法篩選
:::
```sql
SELECT `drinks_id`, SUM(`amounts`) as total_sold
FROM `orders`
GROUP BY `drinks_id`
HAVING `total_sold` > 10;
```