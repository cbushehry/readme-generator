const fs = require('fs');                        // file system handling
const inquirer = require('inquirer');           // prompt generator
const generateReadMe =  require('./src/readme-template.js'); 
const {writeFile} = require('./utils/generate-readme-md.js');




// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'gitHubUser',
            message: 'Please enter your GitHub username',
        },
        {
            type: 'input',
            name: 'emailAddress',
            message: 'Please enter your email address',
        },
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is your project Title?  e.g Professional README.md generator (Required)',
            validate: projectTitleInput => {
              if (projectTitleInput) {
                return true;
              } else {
                console.log('Please enter your Project Title');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'desc',
            message: 'What is your project description (Required)',
            validate: descInput => {
              if (descInput) {
                return true;
              } else {
                console.log('Please enter your Project Description');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'webAddress',
            message: 'Please enter your deployed application URL if available',
          },
          {
            type: 'input',
            name: 'featuresGif',
            message: 'Please include a gif video (use name of gif) showcasing all your features if applicable? e.g new-feature',
          },
          {
            type: 'input',
            name: 'credits',
            message: 'Include credits if applicable'
          },
          {
            type: 'checkbox',
            name: 'licenses',
            message: 'What kind of license should your project have? (Check all that apply)',
            //choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
            choices: ['afl-3.0', 'apache-2.0', 'artistic-2.0', 'bsl-1.0', 'bsd-2-clause', 'bsd-3-clause', 'bsd-3-clause-clear', 'cc', 'cc0-1.0', 'cc-by-4.0', 'cc-by-sa-4.0', 'wtfpl', 'ecl-2.0', 'epl-1.0', 'epl-2.0', 'eupl-1.1', 'agpl-3.0', 'gpl', 'gpl-2.0', 'gpl-3.0', 'lgpl', 'lgpl-2.1', 'lgpl-3.0', 'isc', 'lppl-1.3c', 'ms-pl', 'mit', 'mpl-2.0', 'osl-3.0', 'postgresql', 'ofl-1.1', 'ncsa', 'unlicense', 'zlib']
          },
          {
            type: 'input',
            name: 'commandInstall',
            message: 'What command should be run to install dependencies?'
          },
          {
            type: 'input',
            name: 'commandTest',
            message: 'What command should be run to run tests (output will be console.log)?'
          },
          {
            type: 'input',
            name: 'contrDesc',
            message: 'What does the user need to know about contributing to the repo?'
          }
    ]);
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
