## CI тесты
[![Build status](https://ci.appveyor.com/api/projects/status/iyie8idx3723k1t8?svg=true)](https://ci.appveyor.com/project/Natasha01013/ajs-hw11-task3-generators)

## Домашнее задание к лекции «Символы, итераторы, генераторы»
### Задача 3. Генераторы (задача со звёздочкой)

#### Легенда
Как вы знаете, объекты, позволяющие организовать итерирование, содержат метод с "именем" `Symbol.iterator`. Напишите функцию `canIterate`, которая определяет, соответствует ли объект протоколу итерирования, возвращая, соответственно, `true/false`.   

Примеры использования:   

```
canIterate(new Map()); // true
canIterate(new Set()); // true
canIterate(null); // false
canIterate(10); // false
canIterate("Netology"); // true
```

#### Описание
В этом задании предполагается, что все персонажи содержат следующий набор полей:

```
const char = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10
}
```