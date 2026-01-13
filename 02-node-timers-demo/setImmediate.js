console.log("Start");

setImmediate(() => {
  console.log("setImmediate executed");
});

setTimeout(() => {
  console.log("setTimeout executed");
}, 0);

console.log("End");
