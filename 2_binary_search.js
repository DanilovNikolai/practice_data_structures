//! Бинарный поиск, сложность О(log2n) - ТОЛЬКО ДЛЯ ОТСОРТИРОВАННЫХ МАССИВОВ!

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let count = 0;

// Через циклы

const binarySearch = (array, item) => {
  let startIndex = 0;
  let endIndex = array.length;
  let middleIndex;
  let found = false;
  let positionIndex;

  while (found === false && startIndex <= endIndex) {
    count++;
    middleIndex = Math.floor((startIndex + endIndex) / 2);
    // console.log(middleIndex);
    if (array[middleIndex] === item) {
      found = true;
      positionIndex = middleIndex;
      return "Найдено число на позиции с индексом " + positionIndex;
    }

    if (item < array[middleIndex]) {
      endIndex = middleIndex - 1;
    } else {
      startIndex = middleIndex + 1;
    }
  }
  return "Число не найдено!";
};

console.log(binarySearch(array, 12));
console.log("Число операций - ", count);

// Через рекурсию

const recursiveBinarySearch = (array, item, startIndex, endIndex) => {
  let middleIndex = Math.floor((startIndex + endIndex) / 2);
  count++;

  if (item === array[middleIndex]) {
    return "Найдено число на позиции с индексом " + middleIndex + " (рекурсия)";
  }

  if (item < array[middleIndex]) {
    return recursiveBinarySearch(array, item, startIndex, middleIndex - 1);
  } else {
    return recursiveBinarySearch(array, item, middleIndex + 1, endIndex);
  }
};

console.log(recursiveBinarySearch(array, 12, 0, array.length));
console.log("Число операций - ", count, "рекурсия");
