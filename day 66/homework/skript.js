// 2) Laptop ობიექტი
let laptop = {
  brand: "Dell",     // property → ინახავს ინფორმაციას (ბრენდი)
  RAM: "16GB",       // property → ინახავს ინფორმაციას (RAM)
  price: 1200,       // property → ინახავს ინფორმაციას (ფასი)

  // method → ფუნქცია, რომელიც ეკუთვნის ობიექტს
  turnOn: function() {
    console.log("Laptop is on");
  }
};

// HTML ღილაკზე დაჭერისას გამოიძახება laptop.turnOn()
document.getElementById("laptopBtn").onclick = function() {
  laptop.turnOn();
};


// 2) ფონის შეცვლა div-ზე
function changeBackground() {
  document.getElementById("box").style.backgroundColor = "yellow";
}

document.getElementById("bgBtn").onclick = changeBackground;


// 3) ასაკის შემოწმება
function checkBirthYear() {
  let year = document.getElementById("yearInput").value;
  let currentYear = new Date().getFullYear();
  let age = currentYear - year;

  if (age < 18) {
    document.getElementById("ageMsg").textContent = "Minor";
  } else {
    document.getElementById("ageMsg").textContent = "Adult";
  }
}

document.getElementById("yearBtn").onclick = checkBirthYear;


// 4) Teacher ობიექტი
let teacher = {
  name: "Mariam",       // property → მასწავლებლის სახელი
  subject: "Math",      // property → საგანი
  experience: 5,        // property → გამოცდილება წლებად

  // method → ობიექტის ფუნქცია
  greet: function() {
    alert("Hello, I teach " + this.subject);
  }
};

// HTML ღილაკზე დაჭერისას გამოიძახება teacher.greet()
document.getElementById("greetBtn").onclick = function() {
  teacher.greet();
};