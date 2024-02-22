//! Set - множество, массив, который хранит в себе только уникальные значения
//! Map - похож на объект, только ключом может быть любой тип данных, добавлять / извлекать данные можно за константное время

// Map
const map = new Map();
const objKey = { id: 5 };
map.set(objKey, "Nikolai Danilov");

console.log(map.get(objKey));

// Set
const set = new Set();

set.add(5);
set.add(7);
set.add(5);
set.add(5);
set.add(3);
set.add(5);
set.add(2);
set.add(5);

console.log(set);
