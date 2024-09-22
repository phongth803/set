// Nhập một chuỗi ký tự:
// a) Đếm số nguyên âm. 
const countVowels = (string) => {
    if(typeof string !== "string") {
      return "Input is not a string";
    }
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u") {
        count++;
      }
    }
    return count;
}


// b) Đếm số lần xuất hiện của một ký tự. 
const countChar = (string, char) => { 
    if(typeof string !== "string") {
      return "Input is not a string";
    }
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === char) {
        count++;
      }
    }
    return count;
}


// c) Tìm ký tự xuất hiện nhiều nhất.
const mostFrequentChar = (string) => { 
    if(typeof string !== "string") {
      return "Input is not a string";
    }
    let charMap = {};
    let maxChar = "";
    let maxCount = 0;
    for (let i = 0; i < string.length; i++) {
      let char = string[i];
      if (charMap[char]) {
        charMap[char]++;
      } else {
        charMap[char] = 1;
      }
      if (charMap[char] > maxCount) {
        maxChar = char;
        maxCount = charMap[char];
      }
    }
    return maxChar;
}