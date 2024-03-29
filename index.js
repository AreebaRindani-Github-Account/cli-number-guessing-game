#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWellcome to CodeWithAreeba - CLI Number Guessing Game\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessingNumber",
        type: "number",
        message: "Enter your guess number(Number Limit from 1 to 5):",
    },
]);
if (answer.userGuessingNumber === randomNumber) {
    console.log("congratulation ! You guess a correct number.");
}
else {
    console.log("Sorry, you guess a wrong number");
}
