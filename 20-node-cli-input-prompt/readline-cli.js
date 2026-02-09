const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your name: ", name => {
  rl.question("Enter your age: ", age => {
    console.log(`Hello ${name}, you are ${age} years old.`);
    rl.close();
  });
});

rl.on("close", () => {
  console.log("CLI session ended");
});
