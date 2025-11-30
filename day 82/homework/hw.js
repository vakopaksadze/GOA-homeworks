// ---------------------------------------
// 1) map, filter, forEach, reduce ახსნა
// ---------------------------------------

// map → აბრუნებს ახალ მასივს გარდაქმული ელემენტებით
const nums = [1, 2, 3];
const mapped = nums.map(num => num * 2); 
// [2, 4, 6]

// filter → აბრუნებს ახალ მასივს მხოლოდ იმ ელემენტებით,
// რომლებიც აკმაყოფილებენ პირობას (true)
const filtered = nums.filter(num => num > 1);
// [2, 3]

// forEach → ასრულებს მოქმედებას თითოეულ ელემენტზე,
// მაგრამ არაფერს არ აბრუნებს
nums.forEach(n => console.log(n));
// 1 2 3

// reduce → ამცირებს მთელ მასივს ერთ მნიშვნელობამდე
const total = nums.reduce((acc, val) => acc + val, 0);
// 6



// ---------------------------------------
// 2) Spread ოპერატორი ობიექტებზე
// ---------------------------------------
const user = {
  name: "Vako",
  age: 16
};

const details = {
  city: "Tbilisi",
  country: "Georgia"
};

// Spread (...) შლის ობიექტის ველებს და აერთიანებს ახალში
const fullUser = {
  ...user,
  ...details
};

console.log(fullUser);
// {name: "Vako", age: 16, city: "Tbilisi", country: "Georgia"}



// ---------------------------------------
// 3) rest ოპერატორი — sumAll ფუნქცია
// ---------------------------------------

// rest (...nums) — აგროვებს ყველა არგუმენტს მასივად
function sumAll(...nums) {
  let sum = 0;
  nums.forEach(n => sum += n);
  return sum;
}

console.log(sumAll(1, 2, 3)); // 6
console.log(sumAll(10, 20));  // 30
console.log(sumAll(5, 5, 5)); // 15



// ---------------------------------------
// 4) Account კლასი
// ---------------------------------------
class Account {
  static count = 0; // ითვლის რამდენი ობიექტი შეიქმნა

  #password; // პირადი ველი

  constructor(firstname, lastname, password) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.#password = password;

    Account.objectCount(); // ახალი ობიექტის შექმნისას იზრდება
  }

  // Getter → გვაძლევს წვდომას password-ის კითხვაზე
  get password() {
    return this.#password;
  }

  // Setter → გვაძლევს password-ის შეცვლის საშუალებას
  set password(newPass) {
    this.#password = newPass;
  }

  // static მეთოდი → ეკუთვნის კლასს და არა ობიექტს
  static objectCount() {
    Account.count++;
  }

  // პირადი მეთოდი (მხოლოდ კლასის შიგნით)
  #secretInfo() {
    return "Private info";
  }

  showSecret() {
    return this.#secretInfo(); 
    // ჩვეულებრივი მეთოდი იძახებს პირადს
  }
}

const acc1 = new Account("Vako", "Paksadze", "1234");
const acc2 = new Account("Nika", "GG", "5555");

console.log(Account.count); // 2
console.log(acc1.password); // 1234
acc1.password = "0000";
console.log(acc1.password); // 0000



// ---------------------------------------
// 5) manualMap და map მაგალითი
// ---------------------------------------
const myArr = ["AB", "CD", "ED"];

// map → callback იღებს 3 პარამეტრს: value, index, array
const newArr = myArr.map((value, index, arr) => {
  return value + "#" + index;
});

console.log(newArr); 
// ["AB#0", "CD#1", "ED#2"]


// manualMap რეალიზაცია
function manualMap(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    // callback(value, index, array)
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

const manualRes = manualMap(myArr, (value, index, arr) => {
  return value + "#" + index;
});

console.log(manualRes);
// ["AB#0", "CD#1", "ED#2"]