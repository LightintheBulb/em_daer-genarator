// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "legalName",
        message: "Enter your First and Last Name?"
    },
    {
        type: "input",
        name: "title",
        message: "Enter the title of this project?",
    },
    {
        type: "input",
        name: "description",
        message: "Describe the purpose of this project?",
    },
    {
        type: "input",
        name: "screenshots",
        message: "If applicable, enter url to Screenshots or Videos?",
    },
    {
        type: "input",
        name: "link",
        message: "If applicable, enter Link to Deployed project?",
    },
    {
        type: "input",
        name: "features",
        message: "List Feature currently available in this project.",
    },
    {
        type: 'checkbox',
        message: 'What languages were used to initial create this project?',
        name: 'languages',
        choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
      },
    {
        type: "input",
        name: "installation",
        message: "Enter Applications/Packages needed for project to function.",
    },
    {
        type: "input",
        name: "contributors",
        message: "If applicable, list the following individual that contributed to this project including yourself.",
    },
    {
        type: "list",
        name: "license",
        message: "Select the license used on this project",
        choices: ["MIT", "GPLv2", "Apache", "ISC", "Other", "NONE"]
    },
    // {
    //     type: "input",
    //     name: "title",
    //     message: "What's the title of this project?",
    // },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log('README Has Successfully Been Generated!')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (response) {
        console.log(response)
        writeToFile('README.md', response);
    });
}

// Function call to initialize app
init();
