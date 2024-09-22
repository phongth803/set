// Nhập một mảng 2 chiều số nguyên:
// a) Tìm số lớn nhất trong mảng.
const maxOfArray = (arr) => {
  if (arr.length === 0) {
    return "Invalid input";
  }
  let max = arr[0][0];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > max) {
        max = arr[i][j];
      }
    }
  }
  return max;
};
console.log(
  maxOfArray([
    [1, 2, 3],
    [4, 5, 6],
  ])
); // 6
// b) Tìm số nhỏ nhất trong mảng.
const minOfArray = (arr) => {
  let min = arr[0][0];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] < min) {
        min = arr[i][j];
      }
    }
  }
  return min;
};

console.log(
  minOfArray([
    [1, 2, 3],
    [4, 5, 6],
  ])
); // 1
// c) Tính tổng các phần tử trên hàng hoặc cột thứ k.
const sumOfRowOrColumn = (arr, k, isRow) => {
  let sum = 0;
  if (isRow) {
    for (let j = 0; j < arr[k].length; j++) {
      sum += arr[k][j];
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i][k];
    }
  }
  return sum;
};
// d) Tìm và in ra tất cả các số nguyên tố trong mảng.

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  if (number % 2 === 0) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const findAllPrimes = (arr) => {
  if (arr.length === 0) {
    return "Invalid input";
  }
  let primes = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (isPrime(arr[i][j])) {
        primes.push(arr[i][j]);
      }
    }
  }
  return primes;
};

console.log(
  findAllPrimes([
    [1, 2, 3],
    [4, 5, 6],
  ])
); // [2, 3, 5]
