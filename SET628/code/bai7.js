// Nhập một số nguyên dương n, in ra n số đầu tiên của dãy Fibonacci.
const fibonacci = (number) => {
    if (number < 0) {
      return "Invalid input";
    }
    if (number === 0) {
      return 0;
    }
    if (number === 1) {
      return 1;
    }
    let fib = [0, 1];
    for (let i = 2; i < number; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
};
console.log(fibonacci(10)); 