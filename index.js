// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    // Project name
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You need to enter a title to continue!');
                return false;
            }
        }
    },
    // Description of the project
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project.',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else{
                console.log('You need to provide the project description!');
                return false;
            }
        }
    },
    // Installation Instructions
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else{
                console.log('You need to provide installation info to continue!');
                return false;
            }
        }
    },
    // Usage Information
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?',
        validate: userInput => {
            if (userInput) {
                return true;
            } else{
                console.log('You need to provide information on how to use the project!');
                return false;
            }
        }
    },
    // Contribution Guidelines
    {
        type: 'input',
        name: 'contribution',
        message: 'How should people contribute to this project?',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else{
                console.log('You need to provide information on how to contribute to the project!');
                return false;
            }
        }
    },
    // Test Intructions
    {
        type: 'input',
        name: 'testing',
        message: 'How do you test this project?',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else{
                console.log('You need to need to describe how to test the project!');
                return false;
            }
        }
    },
    // License Options 
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license for your project',
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and-Distribution', 'None'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else{
                console.log('You must pick a license for the project!');
                return false;
            }
        }
    },
    // Github Username
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github Username',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else{
                console.log('Please enter your Github username!');
                return false;
            }
        }
    },
    // Email Address
    {
        type: 'input',
        name: 'email',
        message: 'Would you like to include your email?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
            console.log('Success! Information transferred to the README!')
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput){
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();