function Task(title, desc, state, deadline) {
    this.title = title;
    this.desc = desc;
    this.state = state;
    this.deadline = deadline;

    this.complete = function() {
        this.state = "დასრულებული";
        console.log(დავალება დასრულდა);
    };
}

let task1 = new Task("ვარჯიში", "გავაკეთო 20 არწივი", "მიმდინარე", "07.10.2025");
let task2 = new Task("სწავლა", "დავამთავრო JavaScript-ის თემა", "მიმდინარე", "10.10.2025");
let task3 = new Task("დასვენება", "გავისეირნო პარკში", "გეგმაშია", "09.10.2025");

task1.complete();
task2.complete();
task3.complete();

console.log(task1);
console.log(task2);
console.log(task3);

