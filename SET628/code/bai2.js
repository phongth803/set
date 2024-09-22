// Nhập một dãy số nguyên dương n (n > 100000) vd 123123123
// a) Tìm và in ra số lớn nhất.
const maxDigit = (number) => {
  if (number >= 1000 || number < 0) {
    return "Số không hợp lệ";
  }
  let max = 0;
  while (number > 0) {
    if (number % 10 > max) {
      max = number % 10;
    }
    number = Math.floor(number / 10);
  }
  return max;
};
// b) Tìm và in ra số lớn thứ hai.
const secondMaxDigit = (number) => {
  if (number >= 100000 || number < 0) {
    return "Số không hợp lệ";
  }
  let max = 0;
  let secondMax = 0;
  while (number > 0) {
    let digit = number % 10;
    if (digit > max) {
      secondMax = max;
      max = digit;
    } else if (digit > secondMax) {
      secondMax = digit;
    }
    number = Math.floor(number / 10);
  }
  return secondMax;
};
// console.log(secondMaxDigit(18912));
// c) Tìm và in ra số nhỏ nhất.
const minDigit = (number) => {
  if (number >= 1000 || number < 0) {
    return "Số không hợp lệ";
  }
  let min = 9;
  while (number > 0) {
    if (number % 10 < min) {
      min = number % 10;
    }
    number = Math.floor(number / 10);
  }
  return min;
};

// d) Tìm và in ra tất cả các số nguyên tố trong dãy.

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

const allPrimeNumber = (number) => {
  if (number >= 100000 || number < 0) {
    return "Số không hợp lệ";
  }
  let result = "";
  while (number > 0) {
    let digit = number % 10;
    if (isPrime(digit)) {
      result += digit + " ";
    }
    number = Math.floor(number / 10);
  }
  return result;
};
console.log(allPrimeNumber(2789));
