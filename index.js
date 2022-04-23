// Required Packages for this Application

const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')
console.log('You have now begun the README Generator')
console.log('Please answer the following questions in order to generate a high quality README File.')

// TODO: Create an array of questions for user input
const questions = [
    // Project Name 
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',

    },
    // Project Description 
    {
        type: 'input',
        name: 'Description',
        message: 'Please provide a one sentence desripton of your project.',
    },
    // Installation Instructions
    {
        type: 'input',
        name: 'Installation',
        message: 'Please provide installation instructions for your project.',
    },
    // Usage Information 
    {
        type: 'input',
        name: 'Usage',
        message: 'Please provide any usage information for your project.',
    },
    //Contribution Guidelines
    {
        type: 'input',
        name: 'Contributing',
        message: 'Please provide contribution guidelines for your project.',
    },
    //Test Instructions
    {
        type: 'input',
        name: 'Tests',
        message: 'Please provide test instructions for your project.',
    },
    // Choose a license 
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project:',
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Mozilla",
            "MIT",
        ]
    },
    //GitHub Username
    {
        type: 'input',
        name: 'Questions',
        message: 'Please provide your GitHub Username.',
    },
    // Email Address
    {
        type: 'input',
        name: 'Questions',
        message: 'Please provide your email address.',
    },
    // Website URL
    {
        type: 'input',
        name: 'Questions',
        message: 'Please provide your deployed application URL.',
    },
    // REPO URL
    {
        type: 'input',
        name: 'Questions',
        message: 'Please provide your GitHub Repo URL.',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

validate: user_Input => {
    if (user_Input){
        return true;
    }else {
        console.log('Please enter a title to continue!');
        return false;
    }
}