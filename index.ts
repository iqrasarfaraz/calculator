#! /usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstNumber" },
  { message: "enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: [
      "Addition",
      "Subtraction",
      "Multiplication",
      "Division",
      "Percentage",
      "Modules",
      "Exponent",
    ],
  },
]);

//Conditional Statement

if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else if (answer.operator === "Percentage") {
  console.log((answer.firstNumber / answer.secondNumber) * 100, "%");
} else if (answer.operator === "Modules") {
  console.log(answer.firstNumber % answer.secondNumber);
} else if (answer.operator === "Exponent") {
  console.log(answer.firstNumber ** answer.secondNumber);
}
console.log("pleace select valid operator")
