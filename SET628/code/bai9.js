// Nhập một chuỗi ký tự hoặc dãy số:
// a) Tìm dãy con tăng/giảm dài nhất
const longestSubstring = (string) => {
  if (typeof string !== "string") {
    return "Input is not a string";
  }
  let longest = "";
  let longestIncreasing = "";
  let longestDecreasing = "";
  let increasing = "";
  let decreasing = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] < string[i + 1]) {
      increasing += string[i];
      if (increasing.length > longestIncreasing.length) {
        longestIncreasing = increasing;
      }
      decreasing = "";
    } else {
      decreasing += string[i];
      if (decreasing.length > longestDecreasing.length) {
        longestDecreasing = decreasing;
      }
      increasing = "";
    }
  }
  if (longestIncreasing.length > longestDecreasing.length) {
    longest = longestIncreasing;
  } else {
    longest = longestDecreasing;
  }
  return longest;
};
console.log(longestSubstring("abcdeefghijklmnopqrstuv"));
console.log(longestSubstring("dba"));

// b) Sắp xếp ký tự theo thứ tự tăng/giảm và in ra.
const sortString = (string, order) => {
    if (typeof string !== "string") {
        return "Input is not a string";
    }
    let arr = [];
    for (let i = 0; i < string.length; i++) {
        arr.push(string[i]);
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if ((order === "asc" && arr[j] > arr[j + 1]) || (order === "desc" && arr[j] < arr[j + 1])) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    let sortedString = "";
    for (let i = 0; i < arr.length; i++) {
        sortedString += arr[i];
    }
    return sortedString;
};
console.log(sortString("dcba", "asc")); // Output: "abcd"
console.log(sortString("dcba", "desc")); // Output: "dcba"
console.log(sortString("dcba", "desc")); // Output: "dcba"
