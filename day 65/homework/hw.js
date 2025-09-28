/*
 ობიექტი (Object)
- ობიექტი არის მონაცემთა სტრუქტურა, სადაც ინახება ერთმანეთთან დაკავშირებული ინფორმაცია (properties) და ფუნქციები (methods).
- ობიექტი იქმნება ფიგურული ფრჩხილებით {}.
- რეალური სამყაროს საგნების გამოსახატად ვიყენებთ (მაგ: მებრძოლი, პროდუქტი, პიროვნება).

 document ობიექტი
- document არის სპეციალური ობიექტი JavaScript-ში, რომელიც წარმოადგენს მთელ HTML გვერდს.
- მისი საშუალებით შეგვიძლია მივწვდეთ HTML ელემენტებს, შევცვალოთ ტექსტი, სტილები,
  დავამატოთ ან წავშალოთ ელემენტები.
- მოკლედ, document გვაძლევს საშუალებას ვიმუშაოთ ჩვენს ვებსაიტზე დინამიურად.
*/


// მებრძოლის ობიექტი
let fighter = {
    name: "Connor",
    age: 30,
    style: "MMA",
    // მეთოდი -> მოქმედება
    fight: function() {
        console.log(this.name + " is fighting in " + this.style);
    }
};

// პროდუქტის ობიექტი
let product = {
    title: "Laptop",
    price: 1200,
    inStock: true,
    // მეთოდი
    showInfo: function() {
        console.log(this.title + " costs $" + this.price);
    }
};

// პიროვნების ობიექტი
let person = {
    firstName: "Nika",
    lastName: "Beridze",
    age: 20,
    // მეთოდი
    greet: function() {
        console.log("Hello, my name is " + this.firstName + " " + this.lastName);
    }
};

// მეთოდების გამოძახება
fighter.fight();
product.showInfo();
person.greet();
