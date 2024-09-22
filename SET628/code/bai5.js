// Nhập một mảng số nguyên, sắp xếp và in ra.
const sortArray = (array) => {
    if(!Array.isArray(array)) {
        return "Invalid input";
    }

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

console.log(sortArray([1, 3, 2, 5, 4]));