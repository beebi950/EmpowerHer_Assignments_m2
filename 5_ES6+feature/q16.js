// a) Arrow function to check even number
const isEven = n => n % 2 === 0;

console.log(isEven(4)); // true
console.log(isEven(7)); // false


// b) Rewrite using ternary operator
const marks = 40;
const result = marks >= 35 ? "Pass" : "Fail";

console.log(result);


// c) Arrow function greet using ternary operator
const greet = name => `Hello, ${name ? name : "Guest"}`;

console.log(greet("Rahul"));   // Hello, Rahul
console.log(greet());          // Hello, Guest
