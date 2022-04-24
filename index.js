// Required Packages for this Application

const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js')


console.log('You have now begun the README Generator')
console.log('Please answer the following questions in order to generate a high quality README File.')

//an array of questions for user input
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
        name: 'description',
        message: 'Please provide a one sentence desripton of your project.',
    },
    // Installation Instructions
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project.',
    },
    // Usage Information 
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide any usage information for your project.',
    },
    //Contribution Guidelines
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide contribution guidelines for your project.',
    },
    //Test Instructions
    {
        type: 'input',
        name: 'tests',
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
        name: 'username',
        message: 'Please provide your GitHub Username.',
    },
    // Email Address
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.',
    },
    // Website URL
    {
        type: 'input',
        name: 'url',
        message: 'Please provide your deployed application URL.',
    },
    // REPO URL
    {
        type: 'input',
        name: 'repo',
        message: 'Please provide your GitHub Repo URL.',
    },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success! Your README.md file has been generated")
    });
}
const writeFileAsync = util.promisify(writeToFile)
// function to initialize app
async function init() {
    try {

        // Prompt Inquirer questions
        const data = await inquirer.prompt(questions);
        console.log("Your responses: ", data);
        console.log("Thank you for your responses! Fetching your GitHub data next...");

        // Pass Inquirer userResponses and GitHub userInfo to generateMarkdown
        console.log("Generating your README next...")
        const markdown = generateMarkdown(data);
        console.log(markdown);
    
        // Write markdown to file
        await writeFileAsync('ExampleREADME.md', markdown);

    } catch (error) {
        console.log(error);
    }
}

// Function call to initialize app
init();

