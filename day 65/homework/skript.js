// 2) Laptop Object
// ობიექტი — მონაცემების (property) და ქცევების (method) ერთობლიობაა
let laptop = {
    brand: "Dell",     // property - აღწერს laptop-ის ბრენდს
    RAM: "16GB",       // property - აღწერს მეხსიერებას
    price: 2000,       // property - აღწერს ფასს
    turnOn: function(){ // method - ქცევა, რომელიც laptop-ს შეუძლია
        console.log("Laptop is on");
    }
};

// ღილაკზე დაჭერისას გამოიძახება laptop.turnOn()
document.getElementById("laptopBtn").addEventListener("click", function(){
    laptop.turnOn();
});


// 2) Change Background Function
function changeBackground(){
    // div-ის ფონის ფერი იცვლება lightblue-დან yellow-ზე
    document.getElementById("box").style.backgroundColor = "yellow";
}

// ღილაკზე დაჭერისას გამოიძახება changeBackground()
document.getElementById("bgBtn").addEventListener("click", changeBackground);


// 3) Check Birth Year Function
function checkBirthYear(){
    let year = document.getElementById("yearInput").value; // მომხმარებლის დაბადების წელი
    let currentYear = new Date().getFullYear();           // მიმდინარე წელი
    let age = currentYear - year;                        // ასაკის გამოთვლა

    if(age < 18){
        document.getElementById("ageMsg").innerText = "Minor";
    } else {
        document.getElementById("ageMsg").innerText = "Adult";
    }
}

// ღილაკზე დაჭერისას გამოიძახება checkBirthYear()
document.getElementById("yearBtn").addEventListener("click", checkBirthYear);


// 4) Teacher Object
let teacher = {
    name: "Nino",        // property - სახელი
    subject: "Math",     // property - საგანი
    experience: 10,      // property - გამოცდილება
    greet: function(){   // method - ქცევა
        alert("Hello, I teach " + this.subject);
    }
};

// ღილაკზე დაჭერისას გამოიძახება greet()
document.getElementById("greetBtn").addEventListener("click", function(){
    teacher.greet();
});