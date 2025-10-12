// 2) შექმენით ფუნქცია რომელსაც გადაეცემა 2 რიცხვი (start, end)
function getNumbers(start, end) {
    let numbers = [];
    for (let i = start; i <= end; i++) {
        numbers.push(i);
    }
    return numbers; // აბრუნებს მასივს
}

let numArray = getNumbers(3, 10);
console.log("რიცხვების სია:", numArray);


// 3) ფუნქცია რომელიც გამოთვლის საშუალოს
function calculateAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

let avg = calculateAverage(numArray);
console.log("საშუალო:", avg);


// 4) even_sum ფუნქცია — ლუწი რიცხვების ჯამი 0-იდან border-მდე
function even_sum(border) {
    let sum = 0;
    for (let i = 0; i <= border; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log("ლუწი რიცხვების ჯამი:", even_sum(10));


// 5) for ციკლი — 20-იდან 0-ის ჩათვლით ყველა რიცხვი
for (let i = 20; i >= 0; i--) {
    console.log(i);
}


// 6) for ციკლი — 0-იდან 10-მდე ლუწი რიცხვები (if-ის გარეშე)
for (let i = 0; i <= 10; i += 2) {
    console.log("ლუწი:", i);
}


// 7) while ციკლი — 1-იდან 50-მდე რიცხვები
let count = 1;
while (count <= 50) {
    console.log(count);
    count++;
}


// 😎 while ციკლი — შეჩერდება როცა მომხმარებელი შეიყვანს "stop"
let input;
while (input !== "stop") {
    input = prompt("შეიყვანე ტექსტი (ან აკრიფე 'stop' გასაჩერებლად):");
}
console.log("ციკლი შეჩერდა.");


// 9) for ციკლი — 1-იდან 100-მდე ყველა რიცხვის ჯამი
let total = 0;
for (let i = 1; i <= 100; i++) {
    total += i;
}
console.log("1-იდან 100-მდე ჯამი:", total);