// 2) ქალაქის prompt
function getCity() {
  let city = prompt("Enter your city");
  document.getElementById("cityOut").textContent = city;
}
document.getElementById("cityBtn").addEventListener("click", getCity);

// 3) რიცხვის გაორმაგება
function doubleNumber() {
  let num = document.getElementById("numInput").value;
  let doubled = num * 2;
  document.getElementById("numOut").textContent = doubled;
}
document.getElementById("doubleBtn").addEventListener("click", doubleNumber);

// 4) ორი რიცხვის შედარება
function compareNumbers() {
  let first = Number(prompt("Enter first number"));
  let second = Number(prompt("Enter second number"));
  let result = "";

  if (first > second) {
    result = first + " is greater";
  } else if (second > first) {
    result = second + " is greater";
  } else {
    result = "Numbers are equal";
  }

  document.getElementById("compOut").textContent = result;
}
document.getElementById("compBtn").addEventListener("click", compareNumbers);

// 5) სიტყვის სიგრძე
function checkLength() {
  let word = document.getElementById("wordInput").value;
  let length = word.length;
  document.getElementById("wordOut").textContent = "Length: " + length;
}
document.getElementById("lengthBtn").addEventListener("click", checkLength);

// 6) ორი რიცხვის ჯამი
function calculateSum() {
  let a = Number(prompt("Enter first number"));
  let b = Number(prompt("Enter second number"));
  let sum = a + b;
  document.getElementById("calcOut").textContent = "Sum: " + sum;
}
document.getElementById("calcBtn").addEventListener("click", calculateSum);