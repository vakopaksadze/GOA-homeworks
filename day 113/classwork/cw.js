//  მოდული არის პატარა კოდი, რომელიც რაღაც საქმეს აკეთებს

//  მოდულის იმპორტი (ჩაშენებული)
const os = require("os");

//  ჩვენი ფუნქციის შექმნა
function sayHello(name) {
  return "Hello " + name;
}

//  export (გატანა)
module.exports = sayHello;

// console არ გვჭირდება import, უკვე არის
console.log("Hello Vako!");

// console.table
console.table([
  { name: "vako", age: 11 },
  { name: "deme", age: 12 }
]);

// process არ გვჭირდება import, უკვე არის
console.log(process.memoryUsage());

// ჩაშენებული მოდულის გამოყენება
console.log("OS:", os.platform());