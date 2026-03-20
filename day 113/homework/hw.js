// =========================
// 2) რა არის Node REPL
// =========================

// Node REPL ნიშნავს:
// Read → Evaluate → Print → Loop

// მარტივად:
// შენ წერ კოდს → Node ასრულებს → გაჩვენებს შედეგს → ისევ გელოდება

// იყენება სწრაფი ტესტებისთვის:
// terminal-ში დაწერე: node
// და შეგიძლია პირდაპირ ცადო კოდი

/*
ნახაზი (REPL):

   INPUT
    ↓
 EVALUATION
    ↓
   OUTPUT
    ↓
   LOOP (მეორდება)
*/


// =========================
// 3) Core Modules ახსნა
// =========================

// console → კონსოლში გამოტანა
// process → პროგრამის ინფორმაცია (არგუმენტები, env)
// os → ოპერაციული სისტემის ინფორმაცია
// util → დამხმარე ფუნქციები

const os = require("os");
const util = require("util");


// =========================
// 4) მთავარი პროგრამა (50+ ხაზი)
// =========================

// console გამოყენება
console.log("Hello from Node.js!");
console.warn("ეს არის გაფრთხილება!");
console.error("ეს არის შეცდომა!");

// process.argv გამოყენება
console.log("Command line arguments:");
console.log(process.argv);

// OS ინფორმაცია
console.log("OS platform:", os.platform());
console.log("CPU architecture:", os.arch());
console.log("Free memory:", os.freemem());
console.log("Total memory:", os.totalmem());

// util.format გამოყენება
const name = "Vako";
const age = 15;
const formatted = util.format("My name is %s and I am %d years old", name, age);
console.log(formatted);

// util.inspect გამოყენება
const obj = { a: 1, b: { c: 2 } };
console.log(util.inspect(obj, { depth: null }));


// =========================
// 5) Console methods
// =========================

console.log("log example");
console.error("error example");
console.warn("warn example");

console.table([
  { name: "Vako", age: 15 },
  { name: "Gio", age: 16 }
]);

console.time("timer");
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("timer");


// =========================
// 6) Process module example
// =========================

console.log("Arguments:", process.argv);
console.log("Environment variables:", process.env.PATH);

// process.exit (არ ვასრულებთ რეალურად აქ რომ კოდი არ გაჩერდეს)
// process.exit(0);


// =========================
// 7) OS module example
// =========================

console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("CPUs:", os.cpus().length);
console.log("Free Memory:", os.freemem());
console.log("Total Memory:", os.totalmem());


// =========================
// 😎 Util module example
// =========================

// format
console.log(util.format("Number: %d, String: %s", 10, "hello"));

// inspect
console.log(util.inspect({ x: 10, y: { z: 20 } }, { depth: null }));

// callbackify
const asyncFunc = async () => {
  return "Async result";
};

const callbackFunc = util.callbackify(asyncFunc);

callbackFunc((err, result) => {
  console.log("Callback result:", result);
});


// =========================
// 9) Combined example
// =========================

// არგუმენტების ანალიზი
const args = process.argv.slice(2);

console.log("User arguments:", args);

// სისტემის ინფორმაცია
const systemInfo = {
  platform: os.platform(),
  memory: os.freemem(),
};

console.log("System Info:", util.inspect(systemInfo));

// ლოგის ფორმატირება
console.log(util.format("Platform is %s", systemInfo.platform));


// =========================
// 10) Review
// =========================

// Node.js არის გარემო, სადაც JavaScript მუშაობს server-ზე

// მთავარი შესაძლებლობები:
// - server შექმნა
// - file system-თან მუშაობა
// - API-ების შექმნა

// Core modules გამოყენება:
// console → debug
// process → არგუმენტები და env
// os → სისტემის ინფორმაცია
// util → helper ფუნქციები

// გამოყენება რეალურ ცხოვრებაში:
// - CLI tools
// - backend server
// - automation scripts