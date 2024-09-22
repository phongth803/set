// Nhập một số nguyên dương n (n<1000)
// a) Tính và in ra tổng từ 1 đến n.
const total = (number) => {
  if (number >= 1000 || number < 0) {
    return "Số không hợp lệ";
  }
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  return sum;
};
// console.log(total(10));

// b) Tính tổng các ước số của n.
const sumOfDivisor = (number) => {
  if (number >= 1000 || number < 0) {
    return "Số không hợp lệ";
  }
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  return sum;
};
// console.log(sumOfDivisor(10));

// c) Tính tổng các chữ số của n.
const totalOfDigits = (number) => {
  if (number >= 1000 || number < 0) {
    return "Số không hợp lệ";
  }
  let sum = 0;
  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  return sum;
};
// console.log(totalOfDigits(123));
// d) Tìm chữ số lớn nhất của n.
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
// console.log(maxDigit(283));
