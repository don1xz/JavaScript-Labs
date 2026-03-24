function customForEach(array, callback) {
  if (!Array.isArray(array)) {
    throw new TypeError(`Первый аргумент должен быть массивом, получено: ${typeof array}`);
  }

  if (typeof callback !== "function") {
    throw new TypeError(`Второй аргумент должен быть функцией, получено: ${typeof callback}`);
  }

  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

// Пример использования:
const fruits = ["яблоко", "банан", "вишня"];

customForEach(fruits, (element, index, array) => {
  console.log(`[${index}] ${element} (всего: ${array.length})`);
});
/*
[0] яблоко (всего: 3)
[1] банан (всего: 3)
[2] вишня (всего: 3)
*/

// Пример с ошибкой(первый пример должен быть массивом, но я передал объект)
try {
  customForEach({ a: 1, b: 2 }, (el) => console.log(el));
} catch (e) {
  console.log(e.message);
}


// map
function customMap(array, callback) {
  if (!Array.isArray(array)) {
    throw new TypeError(`Первый аргумент должен быть массивом, получено: ${typeof array}`);
  }

  if (typeof callback !== "function") {
    throw new TypeError(`Второй аргумент должен быть функцией, получено: ${typeof callback}`);
  }

  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }

  return result;
}

// Пример использования
const numbers = [1, 2, 3, 4, 5];
const doubled = customMap(numbers, (n) => n * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]
console.log(numbers);  // [1, 2, 3, 4, 5] — оригинал не изменился

// Пример с ошибкой(не функция)
try {
  customMap([1, 2, 3], 42);
} catch (e) {
  console.log(e.message); // Второй аргумент должен быть функцией, получено: number
}

// filter
function customFilter(array, callback) {
  if (!Array.isArray(array)) {
    throw new TypeError(`Первый аргумент должен быть массивом, получено: ${typeof array}`);
  }

  if (typeof callback !== "function") {
    throw new TypeError(`Второй аргумент должен быть функцией, получено: ${typeof callback}`);
  }

  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }

  return result;
}

// Пример использования
const numbers = [1, 2, 3, 4, 5, 6];
const even = customFilter(numbers, (n) => n % 2 === 0);
console.log(even);    // [2, 4, 6]
console.log(numbers); // [1, 2, 3, 4, 5, 6] — оригинал не изменился

// Пример использования с ошибкой(не массив)
try {
  customFilter(123, (el) => el);
} catch (e) {
  console.log(e.message); // Первый аргумент должен быть массивом, получено: number
}

// find
function customFind(array, callback) {
  if (!Array.isArray(array)) {
    throw new TypeError(`Первый аргумент должен быть массивом, получено: ${typeof array}`);
  }

  if (typeof callback !== "function") {
    throw new TypeError(`Второй аргумент должен быть функцией, получено: ${typeof callback}`);
  }

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return array[i];
    }
  }

  return undefined;
}

// Пример использования
const numbers = [1, 3, 4, 6, 7];
const firstEven = customFind(numbers, (n) => n % 2 === 0);
console.log(firstEven); // 4

// Пример использования с ошибкой(элемент не найден)
const result = customFind([1, 2, 3], (n) => n > 100);
console.log(result); // undefined

// some
function customSome(array, callback) {
  if (!Array.isArray(array)) {
    throw new TypeError(`Первый аргумент должен быть массивом, получено: ${typeof array}`);
  }

  if (typeof callback !== "function") {
    throw new TypeError(`Второй аргумент должен быть функцией, получено: ${typeof callback}`);
  }

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return true;
    }
  }

  return false;
}

// Пример использоания
const numbers = [1, 3, 5, 4, 7];
const hasEven = customSome(numbers, (n) => n % 2 === 0);
console.log(hasEven); // true нашёл 4 и остановился, 7 не проверялась

// С ошибкой, все нечётные, результат false
const odds = [1, 3, 5, 7];
const hasEven2 = customSome(odds, (n) => n % 2 === 0);
console.log(hasEven2); // false

// every
function customEvery(array, callback) {
  if (!Array.isArray(array)) {
    throw new TypeError(`Первый аргумент должен быть массивом, получено: ${typeof array}`);
  }

  if (typeof callback !== "function") {
    throw new TypeError(`Второй аргумент должен быть функцией, получено: ${typeof callback}`);
  }

  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i], i, array)) {
      return false;
    }
  }

  return true;
}

// Пример использования(все ли положительные)
const numbers = [1, 2, 3, 4, 5];
const allPositive = customEvery(numbers, (n) => n > 0);
console.log(allPositive); // true
// С ошибкой
const mixed = [2, 4, 5, 8];
const allEven = customEvery(mixed, (n) => n % 2 === 0);
console.log(allEven); // false нашёл 5 и остановился, 8 не проверялась

// reduce
function customReduce(array, callback, initialValue) {
  if (!Array.isArray(array)) {
    throw new TypeError(`Первый аргумент должен быть массивом, получено: ${typeof array}`);
  }

  if (typeof callback !== "function") {
    throw new TypeError(`Второй аргумент должен быть функцией, получено: ${typeof callback}`);
  }

  let accumulator;
  let startIndex;

  if (initialValue !== undefined) {
    accumulator = initialValue;
    startIndex = 0;
  } else {
    accumulator = array[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
}

// Пример (сумма чисел)
const numbers = [1, 2, 3, 4, 5];
const sum = customReduce(numbers, (acc, n) => acc + n, 0);
console.log(sum); // 15

