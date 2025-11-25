const prompt = require("readline-sync");

let seconds = parseInt(prompt.question("Enter seconds to countdown: "));
let stopNow = false;

console.log("Press 's' anytime to stop countdown.");

// Check user input after a small delay
setTimeout(() => {
  const key = prompt.question("Waiting... press 's' to stop: ");
  if (key.toLowerCase() === "s") {
    stopNow = true;
  }
}, 2000);

const timer = setInterval(() => {
  if (stopNow) {
    console.log("Countdown Stopped by User!");
    clearInterval(timer);
    return;
  }

  console.log("Time left:", seconds);

  seconds--;

  if (seconds < 0) {
    clearInterval(timer);
    console.log("Countdown Complete!");
  }
}, 1000);
