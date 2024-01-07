---
title: py4e - Using Databases
tags: [python]
---
## Object-oriented programming
OOP 中有幾個基礎的定義：  
1. `class`：定義了一個物件，相當於定義了一個藍圖。
2. `method` (or `message`)：定義了使用資料的方法。
3. `attribute` (or `field`)：定義資料的形式。
4. `object`：透過 `class` 定義出來的實例，也就是一張包含資料與方法的藍圖。

```py title='Simple OOP example'
# Animal 是一張藍圖
class Animal:
    x = 0

    def sumAnimals(self):
        self.x = self.x + 1
        print('There are',self.x, 'animals')

# 用 Animal 這張藍圖建立一個實例並存進一個變數中
dog = Animal()
dog.sumAnimals() # There are 1 animals
dog.sumAnimals() # There are 2 animals
dog.sumAnimals() # There are 3 animals
```
:::tip
可以用 `type()` 查看物件原型。  
可以用 `dir()` 查看屬性與方法。
```py
print(type(dog)) # <class '__main__.Animal'>
print(dir(dog))
```
:::
:::warning
定義物件時，函式的第一個參數都要代入 `self`，表示可以透過這個物件來引用這個方法。
:::

OOP 三大特性：
1. 封裝 (Encapsulation)：將物件內部的資料與方法隱藏起來，使用者只能透過物件提供的介面去取得內部的內容。
2. 繼承 (Inheritance)：父類別通常是概括式的物件，子類別可以繼承父類別的所有內容並自行添加一些細節，比如 `狗 (父類別)` 和 `柴犬 (子類別)`。
3. 多型 (Polymorphism)：指的是同樣的操作，針對不一樣的物件會有不一樣的結果。

```py
class Car:
    wheels = 4
    def highSpeed(self, speed):
        print('Max high speed:', speed, 'km')
    def country(self):
        print('No country')

# 繼承
class Bugatti(Car):
    system = '4matic'
    def country(self):
        print('France')

class Porche(Car):
    system = '2matic'
    def country(self):
        print('Germany')

chiron = Bugatti()
taycan = Porche()
chiron.highSpeed(289) # Max high speed: 289 km
taycan.highSpeed(266) # Max high speed: 266 km

# 多型
def showCountry(car):
    car.country()
showCountry(chiron) # France
showCountry(taycan) # Germany
```

## 參考資料
1. [Programming for Everybody](https://www.coursera.org/specializations/python)
2. [物件導向(Object Oriented Programming)概念](https://totoroliu.medium.com/%E7%89%A9%E4%BB%B6%E5%B0%8E%E5%90%91-object-oriented-programming-%E6%A6%82%E5%BF%B5-5f205d437fd6)