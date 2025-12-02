// 2) studentsMap
const studentsMap = new Map();
studentsMap.set("Giorgi", 85);
studentsMap.set("Nika", 92);
studentsMap.set("Ana", 78);
studentsMap.set("Luka", 88);
studentsMap.set("Mariam", 95);

console.log(studentsMap.get("Nika"));        
console.log(studentsMap.has("Ana"));        

studentsMap.delete("Luka");
console.log(studentsMap);


// 3) mySet
const mySet = new Set([1,2,2,3,4,4,5]);
mySet.add(10);
mySet.delete(2);
console.log("Final size:", mySet.size);


// 4) productPrices Map
const productPrices = new Map([
    ["Bread", 3],
    ["Milk", 4],
    ["Cheese", 8]
]);

for (let [product, price] of productPrices) {
    console.log(product, price);
}

let oldPrice = productPrices.get("Cheese");
productPrices.set("Cheese", oldPrice * 1.20);

console.log(productPrices);


// 5) users Map
const users = new Map();
users.set(1, "Giorgi");
users.set(2, "Lika");
users.set(3, "Saba");
users.set(4, "Nana");

console.log([...users.keys()]);
console.log([...users.values()]);
console.log([...users.entries()]);


// 6) numSet უნიკალური რიცხვების ჯამი
const numSet = new Set([1,2,2,3,4,4,5,6]);

let acc = 0;
for (let num of numSet) {
    acc += num;
}
console.log("Sum:", acc);


// 7) promise weatherIsGood
const weatherIsGood = true;

const checkWeather = new Promise((resolve, reject) => {
    // pending = ლოდინის მდგომარეობა სანამ outcome დადგინდება
    setTimeout(() => {
        if (weatherIsGood) {
            resolve("ამინდი კარგია, გასეირნება შემიძლია");
        } else {
            reject("ამინდი ცუდია, ვერ გავდივარ");
        }
    }, 2000);
});

checkWeather
    .then(msg => console.log(msg))
    .catch(err => console.log(err));


// 😎 fetch + პირველი 5 title
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json()) 
    // response.json() — აბრუნებს რეალურ JS ობიექტად გადაკეთებულ JSON-ს
    .then(data => {
        data.slice(0,5).forEach(post => console.log(post.title));
    })
    .catch(err => console.log(err));


// 9) simulateLoading Promise
const simulateLoading = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("მონაცემები ჩაიტვირთა");
    }, 1500);
});

simulateLoading
    .then(msg => console.log(msg))
    .catch(err => console.log(err));

// რეალურ ცხოვრებაში ვიყენებთ დატვირთვის სიმულაციას:
// ● API-ს ლოდინის ჩვენება
// ● Spinner-ები, Loader-ები
// ● ტესტირება როცა სერვერი არ მუშაობს