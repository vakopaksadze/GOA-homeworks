// ---------------- MAP ----------------
const myMap = new Map([
    ["name", "Vako"],
    ["age", 16],
    ["city", "Tbilisi"],
    ["academy", "GOA"],
    ["level", 82]
]);

myMap.set("language", "JS");
console.log(myMap.has("age"));
console.log(myMap.get("city"));
myMap.delete("level");
console.log([...myMap.keys()]);
console.log([...myMap.values()]);
console.log([...myMap.entries()]);
// myMap.clear();

// Python comparison:
// Map ჰგავს Python-ის dict-ს, რადგან ორივე key/value წყვილებს ინახავს.


// ---------------- SET ----------------
const mySet = new Set([10, 20, 30, 40, 50]);

mySet.add(60);
console.log(mySet.has(30));
mySet.delete(20);
console.log(mySet.size);
console.log([...mySet.values()]);
// mySet.clear();

// Python comparison:
// Set ჰგავს Python-ის set-ს — უნიკალურ ელემენტებს ინახავს და იგივე მოქმედებები აქვს.