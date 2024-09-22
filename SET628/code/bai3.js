// Nhập một số nguyên dương n:
// a) Kiểm tra n có phải là số nguyên tố.
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

// b) Kiểm tra n có phải là số hoàn hảo.
const isPerfectNumber = (number) => {
  if (number < 1) {
    return false;
  }
  let sumOfDivisor = 0;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      sumOfDivisor += i;
    }
  }
  return sumOfDivisor === number;
};
// console.log(isPerfectNumber(28));

// c) Kiểm tra n có phải là số chính phương.

const isSquareNumber = (number) => {
  return Math.sqrt(number) % 1 === 0;
};
// d) In ra tất cả các số nguyên tố nhỏ hơn hoặc bằng n.
const primeNumber = (number) => {
  if (number < 2) {
    return "no prime number below 2";
  }
  let result = "";
  for (let i = 2; i <= number; i++) {
    if (isPrime(i)) {
      result += i + " ";
    }
  }
  return result;
};
console.log(primeNumber(100));
