// Nhập một mảng 1 chiều số nguyên n:
// a) Tìm vị trí của số lớn nhất. 
const indexOfMax = (arr) => {
    if (arr.length === 0) {
        return "Invalid input";
    }
    let max = arr[0];
    let index = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            index = i;
        }
    }
    return index;
}
// b) Tìm vị trí của số nhỏ nhất. 
const indexOfMin = (arr) => {
    if (arr.length === 0) {
        return "Invalid input";
    }
    let min = arr[0];
    let index = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            index = i;
        }
    }
    return index;
}
console.log(indexOfMin([1, 2, 3, 4, 5])); // 0

// c) Tìm và in ra tổng các phần tử trong mảng.
const sumOfArray = (arr) => {
    if (arr.length === 0) {
        return "Invalid input";
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumOfArray([1, 2, 3, 4, 5])); // 15