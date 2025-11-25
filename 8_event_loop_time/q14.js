console.log("Begin");

setTimeout(() => {
    console.log("Timeout Task");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise Task");
});

console.log("End");


// Synchronous logs ("Begin" and "End") run first.
// Then the microtask (Promise) runs.
// Finally, the macrotask (setTimeout) runs.