const [, , op, a, b] = process.argv;

const x = Number(a);
const y = Number(b);

if (!op || isNaN(x) || isNaN(y)) {
  console.log("Usage: node calculator.js add|sub|mul|div 5 3");
  process.exit(1);
}

let result;
switch (op) {
  case "add": result = x + y; break;
  case "sub": result = x - y; break;
  case "mul": result = x * y; break;
  case "div": result = y !== 0 ? x / y : "Cannot divide by zero"; break;
  default: result = "Invalid operation";
}

console.log("Result:", result);
