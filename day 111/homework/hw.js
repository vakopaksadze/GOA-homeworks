
//3) მონაცემთა ბაზების ტიპები და შედარება

//მონაცემთა ბაზა (Database) არის სისტემა, სადაც ინახება ინფორმაცია.

//ძირითადად არსებობს ორი ტიპი:

//1) SQL (Relational Database)
//მონაცემები ინახება ცხრილებში (tables).

//მაგალითები:
//MySQL
//PostgreSQL
//SQL Server

//მაგალითი:

id | name | age
1  | Nika | 20
2  | Luka | 22

//2) NoSQL Database
//მონაცემები ინახება დოკუმენტების ან სხვა მოქნილი სტრუქტურით.

//მაგალითები:
//MongoDB
//Firebase
//Redis

//მაგალითი:

//{
// "name": "Nika",
// "age": 20
//}

შედარება:

SQL
//- ცხრილები
//- მკაცრი სტრუქტურა

NoSQL
//- მოქნილი სტრუქტურა
//////- კარგი დიდი მონაცემებისთვის

//ნახაზი:

//        Database
//        /     \
 //     SQL    NoSQL
  //   /  \      |
 // MySQL Post  MongoDB


//-----------------------------------

//4) Backend

//Backend არის ვებსაიტის ის ნაწილი, რომელიც მუშაობს სერვერზე და მომხმარებელი პირდაპირ ვერ ხედავს.

//Backend-ის მთავარი ნაწილებია:

//Server  
//პროგრამა, რომელიც იღებს request-ს და აბრუნებს response-ს.

//Database  
//ადგილი სადაც ინახება მონაცემები (users, products და სხვ.).

//API  
//სისტემა, რომლის საშუალებით Frontend უკავშირდება Backend-ს.

//Backend Stack-ის მაგალითები:

//MERN  
//=MongoDB + Express + React + Node.js

//LAMP  
//Linux + Apache + MySQL + PHP


//-----------------------------------

//5) Node.js

//Node.js არის გარემო, რომელიც საშუალებას გვაძლევს JavaScript გავუშვათ სერვერზე.

//გაშვება ტერმინალში:

//node file_name.js

//Node.js კოდის მაგალითი:

```javascript
const os = require("os")

console.log("Node.js started")

console.log("Platform:", process.platform)
console.log("Node version:", process.version)

console.log("CPU count:", os.cpus().length)

console.log("Home directory:", os.homedir())

console.log("Process ID:", process.pid)

console.log("Memory usage:", process.memoryUsage())

console.log("Uptime:", process.uptime())

console.log("Environment:", process.env)

console.log("OS type:", os.type())

console.log("Free memory:", os.freemem())

console.log("Total memory:", os.totalmem())

console.log("Node.js finished")