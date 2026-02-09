const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "number",
      name: "age",
      message: "How old are you?"
    }
  ])
  .then(answers => {
    console.log(`Welcome ${answers.name}`);
    console.log(`Age: ${answers.age}`);
  });
