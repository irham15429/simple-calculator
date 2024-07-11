#! /usr/bin/env node
//shabang

import inquirer from "inquirer";

const Answer = await inquirer.prompt([
  {
    message: "enter first number",
    type: "number",
    name: "firstnumber",
  },
  { message: "enter second number", type: "number", name: "secondnumber" },
  {
    message: "select one of the operator to perform operation",
    type: "list",
    name: "operators",
    choices: ["addition", "subtraction", "multiplication", "division",],
  },
]);

console.log(Answer);

// conditional statement
if (Answer.operators === "addition") {
  console.log(Answer.firstnumber + Answer.secondnumber);
} else if (Answer.operators === "subtraction") {
  console.log(Answer.firstnumber - Answer.secondnumber);
} else if(Answer.operators === "multiplication") {
  console.log(Answer.firstnumber * Answer.secondnumber);
} else if(Answer.operators === "division") {
  console.log(Answer.firstnumber / Answer.secondnumber);
} else {
  console.log("please select valid operator")
}