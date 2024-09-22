// Nhập hai số nguyên dương a và b:
// a) Tìm ước chung lớn nhất. 
const greatestCommonDivisor = (a, b) => {
    if (a < 0 || b < 0) {
        return "Invalid input";
    }
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
console.log(greatestCommonDivisor(12, 18)); // 6

// b) Tìm bội chung nhỏ nhất.
const leastCommonMultiple = (a, b) => {
    if (a < 0 || b < 0) {
        return "Invalid input";
    }
    return a * b / greatestCommonDivisor(a, b);
}

console.log(leastCommonMultiple(12, 18)); // 36





