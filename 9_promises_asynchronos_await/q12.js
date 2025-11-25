function timer(duration, onComplete) {
  setTimeout(() => {
    onComplete(`Timer of ${duration} ms finished`);
  }, duration);
}

function showMessage(message) {
  console.log(message);
}

timer(2000, showMessage);
