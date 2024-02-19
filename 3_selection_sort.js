//! Сортировка выбором, сложность O(1/2*n^2) = O(n^2)

const array = [
  1, 4, 3, 10, -13, 66, 1, 42, 7, -5, 14, 18, 11, 5, 1, 99, 13, -5, 3, -1, 0,
  23, 35, 26, 6, 11, 2,
];
let count = 0;

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
      count++;
    }
    let temp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = temp;
  }

  return "Отсортированный массив: " + array;
};

console.log(selectionSort(array));
console.log("Число операций - ", count);
console.log("Длина массива - ", array.length);
