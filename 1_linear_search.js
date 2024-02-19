//!Линейный поиск, сложность О(n)

const array = [1, 4, 3, 10, 66, 42, 7, 14, 18, 5, 99, 13];
let count = 0;

const linearSearch = (array, item) => {
  for (let i = 0; i < array.length; i++) {
    count++;
    if (array[i] === item) {
      return "Найдено число на позиции с индексом " + i;
    }
  }
  return "Число не найдено!";
};

console.log(linearSearch(array, 42));
console.log("Число операций - ", count);