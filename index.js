// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// const generate = require("./utils/generateMarkdown");
// const { lookup } = require("dns");

// TODO: Create an array of questions for user input
const questions = [
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
        type: "input",
        message: "Would you like to include a table of contents? (yes/no)",
        name: "tableContents",
    },
    {
        type: "input",
        message: "What are (if any) installation requirements for your project?",
        name: "installation",
    },
    {
        type: "input",
        message: "Provide instruction and examples of use:",
        name: "instructions",
    },
    {
        type: "input",
        message: "Would you like to add screenshots? (yes/no)",
        name: "screenShots",
    },
    {
        type: "input",
        message: "List collaborators or third-party attribution (if any):",
        name: "collaborators",
    },
    {
        type: "input",
        message: "List the license:",
        name: "license",
    },
    {
        type: "input",
        message: "List badges you would like displayed:",
        name: "badges",
    },
    {
        type: "input",
        message: "List guidelines for how you would like to have others contribute to your code:",
        name: "moreCollab",
    },
    {
        type: "input",
        message: "Would you like to reference any tests for this project? (yes/no)",
        name: "tests",
    },
];

inquirer
    .prompt(questions).then(response => console.log(response));
        

        //     }
        // }
    // });
        // console.log(response));

// TODO: Create a function to write README file
// function writeToFile(readMe) {
//     fs.writeFile("readMe.md", html, 
//         err => err ? console.error(err) : 
//         console.log("Success! Your ReadMe.md is being generated."));
// }

// writeToFile()
// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
