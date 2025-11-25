// 2) user ობიექტი დინამიკური property-ით
const field = "username";

const user = {
  [field]: "vako123",
  email: "vako@gmail.com",
  score: 10,
  increaseScore(amount) {
    this.score += amount;
  }
};

user.increaseScore(5);


// 3) object destructuring + არარსებული ველი
const person = {
  firstName: "Vako",
  lastName: "Paksadze",
  age: 17
};

const { firstName, age, height } = person;
console.log(height); // undefined


// 4) array destructuring + rest
const passwords = ["pass1", "pass2", "pass3"];
const [p1, p2, p3] = passwords;

passwords.push("pass4");
const [a, b, ...rest] = passwords;


// 5) calcSum(first, ...numbers)
function calcSum(first, ...numbers) {
  const sum = numbers.reduce((a, b) => a + b, 0);
  console.log("First:", first, "Sum:", sum);
}
calcSum(10, 20, 30, 40);


// 6) spread vs direct
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];
const direct = [arr1, arr2];


// 7) BankAccount class
class BankAccount {
  static accountsCount = 0;

  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
    BankAccount.accountsCount++;
  }

  deposit(amount) {
    this.balance += amount;
  }

  static getAccountsCount() {
    return BankAccount.accountsCount;
  }
}

const acc1 = new BankAccount("Vako", 100);
const acc2 = new BankAccount("Nika", 200);


// 😎 class User getter password
class UserPass {
  constructor(password) {
    this._password = password;
  }

  get password() {
    return this._password;
  }
}


// 9) Animal → Dog override
class Animal {
  sound() {
    console.log("Unknown sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Bark!");
  }
}


// 10) Cat extends Animal + color + super()
class Animal2 {
  constructor(name) {
    this.name = name;
  }
}

class Cat extends Animal2 {
  constructor(name, color) {
    super(name);
    this.color = color;
  }
}


// 11) SmartAnimal extends Animal
class SmartAnimal extends Animal {
  constructor(intelligenceLevel) {
    super();
    this.intelligenceLevel = intelligenceLevel;
  }

  describe() {
    console.log("IQ:", this.intelligenceLevel);
  }
}


// 12) ElectricCar extends Car override
class Car {
  displayInfo() {
    console.log("This is a car");
  }
}

class ElectricCar extends Car {
  constructor(batteryLevel) {
    super();
    this.batteryLevel = batteryLevel;
  }

  displayInfo() {
    console.log("Battery:", this.batteryLevel + "%");
  }
}


// 13) AdvancedTriangle extends Triangle
class Triangle {
  constructor(a, b, c) {
    this.a = a; this.b = b; this.c = c;
  }
}

class AdvancedTriangle extends Triangle {
  perimeter() {
    return this.a + this.b + this.c;
  }
}


// 14) SmartWashingMachine extends WashingMachine
class WashingMachine {
  start() {
    console.log("Washing...");
  }
}

class SmartWashingMachine extends WashingMachine {
  quickWash() {
    console.log("Quick wash started!");
  }
}


// 15) GamePlayer extends Player
class Player {
  constructor(name) {
    this.name = name;
  }
}

class GamePlayer extends Player {
  static playersCount = 0;

  constructor(name, level) {
    super(name);
    this.level = level;
    GamePlayer.playersCount++;
  }

  static resetPlayers() {
    GamePlayer.playersCount = 0;
  }
}


// 16) SpeedBike extends Bike
class Bike {
  constructor(speed) {
    this.speed = speed;
  }
}

class SpeedBike extends Bike {
  increaseSpeed(amount) {
    this.speed += amount;
  }
}


// 17) RankedStudent extends Student
class Student {
  constructor(name) {
    this.name = name;
  }
}

class RankedStudent extends Student {
  constructor(name, rank) {
    super(name);
    this.rank = rank;
  }

  static sortStudents(students) {
    return students.sort((a, b) => a.rank - b.rank);
  }
}


// 18) nested destructuring school
const school = {
  director: {
    firstName: "Giorgi",
    lastName: "Zedginidze"
  }
};

const {
  director: { firstName: dName, lastName: dLast }
} = school;


// 19) movie rest operator
const movie = {
  title: "Inception",
  year: 2010,
  country: "USA",
  genre: "Sci-Fi"
};

const { year, country, ...details } = movie;


// 20) car copy with spread
const car = {
  brand: "BMW",
  model: "X5",
  year: 2020
};

const carCopy = { ...car, model: "M5" };


// 21) Account class + form simulation
class Account {
  constructor(name, surname, email, password, city) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
    this.city = city;
  }

  printDetails() {
    console.log(${this.name} ${this.surname} (${this.email}) - ${this.city});
  }
}

const accounts = [];

accounts.push(
  new Account("Vako", "Paksadze", "vako@mail.com", "1234", "Tbilisi")
);


// 22) User Registration სისტემა
class RegUser {
  static count = 0;

  #age;

  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age; 
    RegUser.count++;
  }

  set age(value) {
    if (value < 0 || value > 120) {
      throw new Error(" ასაკი არასწორადაა შეყვანილი!");
    }
    this.#age = value;
  }

  get age() {
    return this.#age;
  }

  static totalRegistered() {
    return RegUser.count;
  }
}
