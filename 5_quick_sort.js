//! Быстрая сортировка (сортировка Хоара), сложность О(log2n^2)

const array = [
  1, 4, 3, 10, -13, 66, 1, 42, 7, -5, 14, 18, 11, 5, 1, 99, 13, -5, 3, -1, 0,
  23, 35, 26, 6, 11, 2,
];
let count = 0;

const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];
  let less = [];
  let greater = [];

  for (let i = 0; i < array.length; i++) {
    count++;
    if (i === pivotIndex) {
      continue;
    }

    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
};

console.log(quickSort(array));
console.log("Число операций - ", count);
console.log("Длина массива - ", array.length);
