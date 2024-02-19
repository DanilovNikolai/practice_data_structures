//! Сортировка пузырьком, сложность О(n^2)

const array = [
  1, 4, 3, 10, -13, 66, 1, 42, 7, -5, 14, 18, 11, 5, 1, 99, 13, -5, 3, -1, 0,
  23, 35, 26, 6, 11, 2,
];
let count = 0;

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] > array[j]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
      count++;
    }
  }
  return "Отсортированный массив: " + array;
};

console.log(bubbleSort(array));
console.log("Число операций - ", count);
console.log("Длина массива - ", array.length);
