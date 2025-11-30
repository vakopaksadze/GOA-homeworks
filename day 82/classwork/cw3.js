// --- Manual Map ---
function manualMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

// --- Manual Filter ---
function manualFilter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}


// --- ტესტირება ---
const numbers = [1, 2, 3, 4, 5];

// test manualMap - რიცხვების კვადრატები
const squares = manualMap(numbers, (num) => num * num);
console.log("manualMap squares:", squares);

// test manualMap - ყველა რიცხვს +10
const plusTen = manualMap(numbers, num => num + 10);
console.log("manualMap +10:", plusTen);

// test manualFilter - ლუწები
const evens = manualFilter(numbers, num => num % 2 === 0);
console.log("manualFilter evens:", evens);

// test manualFilter - 3-ზე მეტი რიცხვები
const greaterThanThree = manualFilter(numbers, num => num > 3);
console.log("manualFilter >3:", greaterThanThree);

