// ===========================
// 2) სინქრონული vs ასინქრონული
// ===========================

// სინქრონული: კოდი მიდის რიგრიგობით, სანამ ერთს არ გააკეთებს, შემდეგს არ დაიწყებს
console.log("Synchronous 1");
console.log("Synchronous 2");

// ასინქრონული: კოდი პარალელურად მუშაობს, პროცესის მოლოდინში სხვა საქმეს აკეთებს
console.log("Start async");
setTimeout(() => {
    console.log("Async finished after 2 sec");
}, 2000);
console.log("Still running while waiting...");


// ===========================
// 3) var, let, const
// ===========================

// var – ძველი ტიპის ცვლადი, შეიძლება ხელახლა გამოცხადება
var userName = "Vako";

// let – ბლოკ-სკოპი, შეიძლება მხოლოდ მნიშვნელობის შეცვლა
let age = 16;

// const – მუდმივი მნიშვნელობაა, ვერ შევცვლით
const country = "Georgia";

// const-ს ვერ ვცვლით, რადგან ის არის მუდმივად განსაზღვრული მნიშვნელობა
console.log(My name is ${userName}, I am ${age}, I live in ${country});


// ===========================
// 4) getProducts + async/await + DOM render
// ===========================

// async — ფუნქცია ხდება ასინქრონული
// await — ელოდება სანამ promise შესრულდება (მაგ: fetch დაიტვირთება)
async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products"); 
    const data = await response.json(); // JSON-ის მოლოდინი

    renderProducts(data);
}

function renderProducts(products) {
    const container = document.createElement("div");
    container.id = "products";
    document.body.appendChild(container);

    products.forEach(item => {
        const box = document.createElement("div");
        box.style.border = "1px solid #ccc";
        box.style.margin = "10px";
        box.style.padding = "10px";

        box.innerHTML = `
            <h3>${item.title}</h3>
            <p>Category: ${item.category}</p>
            <img src="${item.image}" width="100">
        `;

        container.appendChild(box);
    });
}

getProducts();


// ===========================
// 5) for in — ობიექტზე გადასვლა
// ===========================

// for in – გამოიყენება ობიექტის key-ებზე გადასასვლელად
const user = {name: "Luka", level: 5, score: 190};

for (let key in user) {
    console.log(${key}: ${user[key]});
}


// ===========================
// 6) for of — მასივზე გადასვლა
// ===========================

// for in – key-ებს აბრუნებს (ობიექტებში)
// for of – პირდაპირ მნიშვნელობებს აბრუნებს (მასივებში საუკეთესოა)
const nums = [5, 10, 15, 20];

for (let number of nums) {
    console.log(number);
}


// ===========================
// 7) ჩვეულებრივი ფუნქცია vs arrow function
// ===========================

// ჩვეულებრივი function
function greet(name) {
    return Hello, ${name};
}

// arrow function – მოკლე, eventListener-ებში და მარტივ ფუნქციებში ყველაზე მოსახერხებელი
const goodbye = (name) => Goodbye, ${name};

console.log(greet("Nika"));
console.log(goodbye("Luka"));


// ===========================
// 😎 saveUser / loadUser — localStorage + arrow functions
// ===========================

// arrow function-ები საუკეთესოა მოკლე და ერთხელ გამოსაყენებელ ფუნქციებში
const saveUser = () => {
    const input = document.getElementById("userInput").value;
    localStorage.setItem("username", input); // მნიშვნელობის შენახვა
};

const loadUser = () => {
    const saved = localStorage.getItem("username"); // ამოღება
    document.getElementById("result").innerText = saved;
};

// HTML (სალაგებლად):
// <input id="userInput" placeholder="Enter name">
// <button onclick="saveUser()">Save</button>
// <button onclick="loadUser()">Load</button>
// <h2 id="result"></h2>