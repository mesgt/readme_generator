// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    "What is your project title?",
    "Enter a short description of your project (what, why and how):",
    "Enter link to the deployed application:",
    "Would you like to include a table of contents? (yes/no)", //add condition for if 1)yes- include a list with links to these sections; 2)no is selected, do not display this heading.
    "What are (if any) installation requirements for your project?",
    "Provide instruction and examples of use:",
    "Would you like to add screenshots? (yes/no)", //add condition for if 1)yes- display screenshot instructions 2)no is selected- don't display instructions.
    "List collaborators or third-party attribution (if any):",
    "List the license:",
    "List badges you would like displayed:",
    "Would you like to have others contribute to your code?",
    "Would you like to reference any tests for this project?"
];

// TODO: Create a function to write README file
// function writeToFile('ReadMe.md', data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
