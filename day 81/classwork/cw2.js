
function myFunc(first, ...others) {
    console.log("First argument:", first);
    console.log("Other arguments:", others);
}


myFunc(10, 20, 30, 40, "GOA");


const middleNumbers = [4, 5, 6];


const allNums = [1, 2, 3, ...middleNumbers, 7, 8, 9];

console.log("All numbers:", allNums);
// შედეგი → [1,2,3,4,5,6,7,8,9]