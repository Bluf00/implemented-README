// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
const { type } = require('os');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project',

  }
,
{
  type: 'input',
  name: 'description',
  message: 'description of the project'

},

{
  type: 'input',
  name: 'installation',
  message: 'describe the instilation process'

},
{
type: 'input',
name: 'usage',
message:'describe the usage of said application'

},

{
  type: 'input',
  name: 'contributing',
  message: 'What are the contribution guidelines?',
},
{
  type: 'input',
  name: 'tests',
  message: 'What are the test instructions?',
},
{
  type: 'input',
  name: 'github',
  message: 'Enter your GitHub username:',
},
{
  type: 'input',
  name: 'email',
  message: 'Enter your email address:',
},
];

// Create a function to write README file
function writeToFile(fileName, data) {
const readmeContent = `
# ${data.title}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, you can reach me at [${data.email}](mailto:${data.email}).
You can also find more of my work at [${data.github}](https://github.com/${data.github}).
`;

fs.writeFile(fileName, readmeContent, (err) =>
  err ? console.error(err) : console.log('README.md created successfully!')
);
}

// Create a function to initialize app
function init() {
inquirer.prompt(questions).then((answers) => {
  writeToFile('README.md', answers);
});
}

// Function call to initialize app
init();






