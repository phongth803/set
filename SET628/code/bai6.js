// Nhập một số nguyên dương n:
// a) Tính và in ra giai thừa của n.
const factorial = (number) => {
  if (number < 0) {
    return "Invalid input";
  }
  if (number === 0) {
    return 1;
  }
  return number * factorial(number - 1);
};
console.log(factorial(7));

// b) Tính và in ra tổng các chữ số của n.
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