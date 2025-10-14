// ობიექტის კონსტრუქტორი - ქმნის ობიექტის შაბლონს
function Task(title, desc, state, deadline) {
  this.title = title;      // სათაური (property)
  this.desc = desc;        // აღწერა (property)
  this.state = state;      // სტატუსი (property)
  this.deadline = deadline; // ბოლო ვადა (property)

  // მეთოდი - ფუნქცია ობიექტში
  this.complete = function() {
    this.state = "completed"; // სტატუსს ცვლის დასრულებულად
    console.log(${this.title} დასრულდა ✅);
  };
}

// სამი ობიექტის შექმნა
const task1 = new Task("დავალება 1", "HTML სწავლა", "active", "2025-10-20");
const task2 = new Task("დავალება 2", "CSS პროექტი", "pending", "2025-10-25");
const task3 = new Task("დავალება 3", "JS პრაქტიკა", "active", "2025-10-30");

// თითოეულზე complete მეთოდის გამოძახება
task1.complete();
task2.complete();
task3.complete();

// საბოლოოდ ყველა ობიექტის გამოტანა
console.log(task1);
console.log(task2);
console.log(task3);
