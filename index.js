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

inquirer
    .prompt([
        {
            type: "input",
            message: questions[0],
            name: "title",
        },
        {
            type: "input",
            message: questions[1],
            name: "description",
        },
        {
            type: "input",
            message: questions[2],
            name: "link",
        },
        {
            type: "input",
            message: questions[3],
            name: "tableContents",
        },
        {
            type: "input",
            message: questions[4],
            name: "installation",
        },
        {
            type: "input",
            message: questions[5],
            name: "instructions",
        },
        {
            type: "input",
            message: questions[6],
            name: "screenShots",
        },
        {
            type: "input",
            message: questions[7],
            name: "collaborators",
        },
        {
            type: "input",
            message: questions[8],
            name: "license",
        },
        {
            type: "input",
            message: questions[9],
            name: "badges",
        },
        {
            type: "input",
            message: questions[10],
            name: "moreCollab",
        },
        {
            type: "input",
            message: questions[11],
            name: "tests",
        },
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, 
        err => err ? console.error(error) : console.log("Success! Your ReadMe.md is being generated."));
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
