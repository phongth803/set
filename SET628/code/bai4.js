// Nhập một chuỗi ký tự:
// a)    Đảo ngược chuỗi.
const reverseString = (str) => {
  if(typeof str !== "string") {
    return "Input is not a string";
  }
  let reversedStr = ""; 
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
};
// console.log(reverseString("hello"));

// b)    Xóa khoảng trắng trong chuỗi.
const removeSpace = (str) => {
  if(typeof str !== "string") {
    return "Input is not a string";
  }
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      result += str[i];
    }
  }
  return result;
};
console.log(removeSpace("hello world"));
// c)    Kiểm tra chuỗi đối xứng.
const isSymmetric = (str) => {
  if(typeof str !== "string") {
    return "Input is not a string";
  }
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
console.log(isSymmetric("abccba"));
// d)    Tìm dãy con đối xứng dài nhất.
const longestSymmetricSubstring = (string) => {
  if(typeof string !== "string") {
    return "Input is not a string";
  }
  let longest = "";
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      let subString = string.slice(i, j);
      if (isSymmetric(subString) && subString.length > longest.length) {
        longest = subString;
      }
    }
  }
  return longest;
}