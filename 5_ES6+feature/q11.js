
function multiply(a, b) {
  return a * b;
}


const multiplyArrow = (a = 1, b = 1) => {
  return a * b;
};


console.log(multiplyArrow(3, 4)); 
console.log(multiplyArrow());     
console.log(multiplyArrow(5));    