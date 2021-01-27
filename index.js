const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your gitHub username?",
        name: "gitHub",
    },
    {
        type: "input",
        message: "What is your project title?",
        name: "title",
    },
    {
        type: "input",
        message: "Enter a short description of your project (including what, why and how):",
        name: "description",
    },
    {
        type: "input",
        message: "Enter link to the deployed application:",
        name: "link",
    },
    {
        type: "confirm",
        message: "Would you like to include a table of contents?", 
        name: "tableContents",
    },
    {
        type: "input",
        message: "What are (if any) installation requirements for your project?",
        name: "installation",
        default: "N/A",
    },
    {
        type: "input",
        message: "Provide instruction and examples of use for your project:",
        name: "instructions",
        default: "N/A",
    },
    {
        type: "confirm",
        message: "Would you like to add screenshots?",
        name: "screenShots",
    },
    {
        type: "input",
        message: "List collaborators or third-party attribution (if any):",
        name: "collaborators",
        default: "N/A",
    },
    {
        type: "list",
        message: "Select the license:",
        choices: ["None", "MIT License", "Apache 2.0 License", "GNU General Public License v3.0", "Boost Software License 1.0", "BSD 3-Clause License", "CC0", "Eclipse Public License 1.0", "IBM Public License Version 1.0", "ISC License (ISC)", "Mozilla Public License 2.0", "Attribution License (BY)", "The Perl License", "The Unlicense", "WTFPL"],
        name: "license",
        default: "N/A",
    },
    {
        type: "input",
        message: "List badges you would like displayed:",
        name: "badges",
        default: "N/A",
    },
    {
        type: "confirm",
        message: "Would you like to have others contribute to your code?",
        name: "moreCollab",
        default: "Yes",
    },
    {
        type: "confirm",
        message: "Would you like to reference any tests for this project?",
        name: "tests",
        default: "No",
    },
];

inquirer
    .prompt(questions)
    .then((response) => writeToFile("README_1.md", response)); 

//Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generate(data), err => err 
        ? console.error(err) 
        : console.log("Success! Your ReadMe.md is being generated."));
};
