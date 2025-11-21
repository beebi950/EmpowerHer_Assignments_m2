// a) Template Literals
const username = "Beebi";
const course = "Web Development";
console.log(`Hello ${username}, welcome to the ${course} course!`);


// b) Shorthand Object Syntax
const name = "Sam";
const age = 21;
const student = {
  name,
  age,
  greet() {
    console.log("Hello");
  }
};

student.greet();


// c) Arrow Function Shorthand
const getFullName = (first, last) => `${first} ${last}`;

console.log(getFullName("Rahul", "Sharma"));
