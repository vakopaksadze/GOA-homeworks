// =============================
// 2) პრიმიტიული და კომპლექსური ტიპები, Stack & Heap
// =============================

// პრიმიტიული ტიპები ინახავენ პირდაპირ მნიშვნელობას (stack მეხსიერებაში)
let a = 10;
let b = a;
b = 20;
console.log("a =", a, "b =", b); // a = 10, b = 20

// კომპლექსური ტიპები ინახავენ ბმულს heap მეხსიერებაში
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log("arr1 =", arr1, "arr2 =", arr2); // ორივე შეიცვალა

/*
Stack (სწრაფი მეხსიერება)
---------------------
a = 10
b = 20
arr1 -> 📍0x001

Heap (დიდი მეხსიერება)
---------------------
📍0x001 -> [1, 2, 3, 4]
*/


// =============================
// 3) push, pop, unshift, shift, slice, splice
// =============================

// push() - ამატებს ელემენტს ბოლოში
let nums1 = [1, 2, 3];
nums1.push(4);
console.log(nums1); // [1, 2, 3, 4]

let names1 = ["Vako", "Nika"];
names1.push("Luka");
console.log(names1); // ["Vako", "Nika", "Luka"]


// pop() - შლის ბოლო ელემენტს
let arr3 = [10, 20, 30];
arr3.pop();
console.log(arr3); // [10, 20]

let fruits1 = ["apple", "banana"];
fruits1.pop();
console.log(fruits1); // ["apple"]


// unshift() - ამატებს დასაწყისში
let nums2 = [2, 3];
nums2.unshift(1);
console.log(nums2); // [1, 2, 3]

let days1 = ["Tue", "Wed"];
days1.unshift("Mon");
console.log(days1); // ["Mon", "Tue", "Wed"]


// shift() - შლის პირველ ელემენტს
let numbers1 = [5, 6, 7];
numbers1.shift();
console.log(numbers1); // [6, 7]

let queue1 = ["A", "B", "C"];
queue1.shift();
console.log(queue1); // ["B", "C"]


// slice() - აბრუნებს სიის ნაწილს (არ ცვლის ორიგინალს)
let arr4 = [1, 2, 3, 4, 5];
let part1 = arr4.slice(1, 4);
console.log(part1); // [2, 3, 4]

let names2 = ["Vako", "Nika", "Gio", "Luka"];
console.log(names2.slice(0, 2)); // ["Vako", "Nika"]


// splice() - შლის ან ამატებს ელემენტებს ორიგინალ მასივში
let arr5 = [1, 2, 3, 4];
arr5.splice(1, 2); // შლის 2 ელემენტს ინდექსიდან 1
console.log(arr5); // [1, 4]

let nums3 = [10, 20, 30];
nums3.splice(1, 0, 15); // ჩასვამს 15-ს ინდექსზე 1
console.log(nums3); // [10, 15, 20, 30]


// =============================
// 4) indexOf, lastIndexOf, includes
// =============================

// indexOf() - აბრუნებს პირველი ემთხვევის ინდექსს
let arr6 = [1, 2, 3, 2];
console.log(arr6.indexOf(2)); // 1

let names3 = ["Gio", "Nika", "Gio"];
console.log(names3.indexOf("Gio")); // 0


// lastIndexOf() - აბრუნებს ბოლო ემთხვევის ინდექსს
let arr7 = [1, 2, 3, 2];
console.log(arr7.lastIndexOf(2)); // 3

let names4 = ["Gio", "Nika", "Gio"];
console.log(names4.lastIndexOf("Gio")); // 2


// includes() - ამოწმებს არის თუ არა ელემენტი სიაში (true/false)
let arr8 = [1, 2, 3];
console.log(arr8.includes(2)); // true

let fruits2 = ["apple", "banana"];
console.log(fruits2.includes("orange")); // false


// =============================
// 5) manualIndexOf ფუნქცია
// =============================
function manualIndexOf(value, list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === value) {
      return i; // თუ ვიპოვეთ ელემენტი
    }
  }
  return -1; // თუ ვერ ვიპოვეთ
}

console.log(manualIndexOf(3, [1, 2, 3, 4])); // 2
console.log(manualIndexOf("a", ["b", "c"])); // -1


// =============================
// 6) manualReverse ფუნქცია
// =============================
function manualReverse(list) {
  let reversed = [];
  for (let i = list.length - 1; i >= 0; i--) {
    reversed.push(list[i]);
  }
  return reversed;
}

console.log(manualReverse([1, 2, 3])); // [3, 2, 1]


// =============================
// 7) manualSlice ფუნქცია
// =============================
function manualSlice(arr, start, end) {
  let result = [];
  for (let i = start; i < end; i++) {
    result.push(arr[i]);
  }
  return result;
}

console.log(manualSlice([10, 20, 30, 40, 50], 1, 4)); // [20, 30, 40]