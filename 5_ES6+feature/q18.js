// ----------- a) Scoping Output & Explanation -----------

if (true) {
  let x = 10;
  var y = 20;
}

console.log("Output of y:", y);   // 20
try {
  console.log("Output of x:", x);
} catch (err) {
  console.log("Error accessing x:", err.message);
}




// ----------- b) Optional Chaining Access -----------

const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

console.log(profile?.user?.details?.email);  
console.log(profile?.user?.details?.phone);  


// ----------- c) Optional Chaining Preventing Runtime Error -----------

const student = {
  name: "Ravi",
  marks: {
    math: 90
  }
};



console.log(student?.marks?.science?.score);  

