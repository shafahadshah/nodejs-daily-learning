// hello-cli.js
// This script prints a greeting message and displays command-line arguments

console.log("Hello from Node.js CLI!");

// Access command-line arguments
const args = process.argv.slice(2); // remove first two default args (node and script path)

if(args.length > 0){
    console.log("You passed these arguments:", args.join(", "));
} else {
    console.log("No arguments were passed. Try: node hello-cli.js arg1 arg2");
}

