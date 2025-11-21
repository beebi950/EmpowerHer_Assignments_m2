// -----------------------------------------
// 1. Template Literals + Expressions
// -----------------------------------------

console.log(`5 + 7 = ${5 + 7}`);

const multiLine = `This is line 1
This is line 2
This is line 3`;
console.log(multiLine);

const firstName = "John";
const lastName = "Doe";
console.log(`Full Name: ${firstName} ${lastName}`);

console.log();

// -----------------------------------------
// 2. Arrow Functions & this
// -----------------------------------------

const square = n => n * n;

const obj = {
  value: 50,
  test: () => console.log(this.value)
};
obj.test();

const newObj = {
  value: 50,
  test() {
    console.log(this.value);
  }
};
newObj.test();
console.log();

// -----------------------------------------
// 3. Rest, Spread & Copying Objects
// -----------------------------------------

const product = { name: "Pen", price: 10 };
const copyProduct = { ...product };
console.log(copyProduct);

const a1 = { x: 1 };
const b1 = { y: 2 };
const mergedAB = { ...a1, ...b1 };
console.log(mergedAB);

const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(10, 25, 3));
console.log();

// -----------------------------------------
// 4. Destructuring & Optional Chaining
// -----------------------------------------

const arr = [10, 20, 30];
const [a, b] = arr;
console.log(a, b);

const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand);

const info = {};
console.log(info?.data?.value);
console.log();

// -----------------------------------------
// 5. Scoping (let/var/const)
// -----------------------------------------

for (var i = 0; i < 3; i++) {}
console.log(i);

for (let j = 0; j < 3; j++) {}
try {
  console.log(j);
} catch {
  console.log("j is not defined");
}
console.log();

// -----------------------------------------
// 6. Ternary Operator – Practice
// -----------------------------------------

let kmph = 70;
let speed = kmph > 60 ? "Fast" : "Normal";
console.log(speed);

let age = 17;
console.log(age >= 18 ? "Adult" : "Minor");

let number = -5;
console.log(number > 0 ? "Positive" : number === 0 ? "Zero" : "Negative");
console.log();

// -----------------------------------------
// 7. Spread, Rest & Arrays
// -----------------------------------------

const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log(newNums);

const arrA = ["x", "y"];
const arrB = ["z"];
console.log([...arrA, ...arrB]);

const printNames = (...names) => names;
console.log(printNames("A", "B", "C"));
console.log();

// -----------------------------------------
// 8. Object Destructuring & Shorthand
// -----------------------------------------

const user = { id: 101, status: "active" };
const { id, status } = user;
console.log(id, status);

const uid = 101;
const role = "admin";
const user2 = { uid, role };
console.log(user2);

const name = "Ravi";
const score = 95;
const student = {
  name,
  score,
  show() {
    console.log(`${name} scored ${score}`);
  }
};
student.show();
console.log();

// -----------------------------------------
// 9. Template Literals (More Practice)
// -----------------------------------------

console.log(`Today's Date: ${new Date().toDateString()}`);

console.log(`Hello John, your score is 85/100`);
console.log();

// -----------------------------------------
// 10. Arrow Function Shorthands
// -----------------------------------------

const add = (x, y) => x + y;
console.log(add(5, 10));

const isAdult = age => age >= 18;
console.log(isAdult(20));

const double = n => n * 2;
console.log(double(8));
console.log();

// -----------------------------------------
// 11. Spread Operator (Arrays & Objects)
// -----------------------------------------

const arrClone = [...nums];
console.log(arrClone);

const newArr = [100, ...nums];
console.log(newArr);

const obj1 = { a: 1, b: 2 };
const objMerged = { ...obj1, b: 99, c: 4 };
console.log(objMerged);
console.log();

// -----------------------------------------
// 12. Optional Chaining (More Practice)
// -----------------------------------------

const userX = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};

console.log(userX?.address?.city);
console.log(userX?.job?.title);

const example = { data: null };
console.log(example?.data?.value);
