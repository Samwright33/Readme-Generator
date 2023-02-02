// Packages needed for application functionality 
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user to answer
const questions = [
    {
        type: 'input',
        message: 'What would you like the title of the Readme to be called?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Write a description of the project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Provide installation instructions.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Describe how to use the application.',
        name: 'usage',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license',
        choices: ['MIT', 'CC-0', 'GNU', 'GPL'],
        default: [0],
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Selecting a license is required');
                return false; 
            }
        }
    },
    {
        type: 'input',
        message: 'Provide guidelines for user contributions.',
        name: 'Contributing',
    },
    {
        type: 'input',
        message: 'How did you test the application?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your LinkedIn username?',
        name: 'linkedInUser',
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'gitHubUser',
    },
];


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// const writeToFile = data => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile('./Develop/README.md', data, err => {
//             if (err) {
//                 reject (err);
//                 return;
//             }
//             resolve({
//                 ok: true
//             })
//         })
//     })
// }

const writeToFile = data => {
    fs.writeToFile('README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("success")
        }
    })
}; 


// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
.then(userInput => {
    return generateMarkdown(userInput);
})

.then(readmeContent => {
    return writeToFile(readmeContent);
})

.catch(err => {
    console.log(err);
});