const loading = setInterval(function () {
    console.log("Loading...");
}, 1000);

setTimeout(function () {
    clearInterval(loading);
    console.log("Loaded successfully!");
}, 5000);
