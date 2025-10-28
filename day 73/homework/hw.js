// 📚 ისწავლეთ ახალი სიტყვები:
// interval - დროის მონაკვეთი
// timeout - დროის ამოწურვა


// ✅ 2) თარიღის ობიექტი
let date = new Date(2024, 11, 25);
// თვეები იწყება 0-დან, ამიტომ დეკემბერი არის 11.
// ეს ფორმა (year, month, day) უფრო ზუსტია, ვიდრე string-ის გადაცემა ("2024-12-25").

console.log("Year:", date.getFullYear()); // 2024
console.log("Month:", date.getMonth());   // 11 (დეკემბერი)
console.log("Day:", date.getDate());      // 25
console.log("Weekday:", date.getDay());   // 3 -> ოთხშაბათი (0=კვირა, 6=შაბათი)


// ✅ 3) setInterval - აჩვენოს ამჟამინდელი დრო ყოველ წამში
// setInterval იმეორებს მოქმედებას ყოველ მითითებულ დროში (მილიწამებში)
setInterval(() => {
  console.log("Current time:", new Date());
}, 1000); // 1000ms = 1 წამი


// ✅ 4) Countdown ტაიმერი
let time = 10;

let countdown = setInterval(() => {
  console.log("Time:", time);
  time--; // ყოველ წამში იკლებს ერთით

  if (time < 0) {
    clearInterval(countdown); // აჩერებს ინტერვალს
    console.log("Time up"); // როცა time გახდება 0 ან ნაკლები
  }
}, 1000);


// ✅ 5) setTimeout მაგალითი
// setTimeout გამოიძახებს ფუნქციას მხოლოდ ერთხელ მითითებული დროის შემდეგ
setTimeout(() => {
  console.log("1 second passed");
}, 1000);

// 📌 განსხვავება:
// setTimeout — შესრულდება ერთხელ მითითებული დროის შემდეგ
// setInterval — განმეორდება ყოველ მითითებულ დროში


// ✅ 6) ინტერვალი რომელიც ყოველ წუთში ზრდის time-ს ერთით
let minutes = 0;

let minuteInterval = setInterval(() => {
  minutes++;
  console.log("Current minutes:", minutes);

  if (minutes === 34) {
    clearInterval(minuteInterval); // აჩერებს ინტერვალს
    console.log("Time up");
  }
}, 60000); // 60000 მილიწამი = 1 წუთი

// 📌 clearInterval აჩერებს setInterval-ს
// პირობას if(minutes === 34) ვამოწმებთ, რომ ტაიმერი გაჩერდეს როცა მიაღწევს 34-ს