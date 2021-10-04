// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const license = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your full name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the Title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please enter a short description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Are there any notes about installation for your project?',
        name: 'installNotes',
    },
    {
        type: 'input',
        message: 'What do users need to do to start the program?',
        name: 'usageNotes',
    },
    {
        type: 'input',
        message: 'What is your GH username?',
        name: 'gitHubUser',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'checkbox',
        message: 'What type of license would you like to use with this project?',
        name: 'license',
        default: [""],
        choices: [
            "MIT",
            "GNU",
            "ISC",
        ]
    },
];

// TODO: Create a function to write README file
function writeToFile(fileContent) {
    fs.writeFile("README.md", fileContent, (err)=> {
        if (err){
            console.log("ERROR", err)
        } else {
            console.log("Success)");
        };
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions).then((response)=> {
            console.log(response);
            const fileContent = license(response);
        writeToFile(fileContent)
        });
}

// Function call to initialize app
init();
