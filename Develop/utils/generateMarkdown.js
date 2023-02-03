// Packages needed for application functionality 
const inquirer = require('inquirer');
const fs = require('fs');

// Returns a license badge
function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
  }
  }

function renderLicenseLink(license) {}


// function to generate markdown for README and added README template
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents 
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributiing)
* [Tests](#tests)
* [Questions](#questions)

## Description
${data.descriton}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
Submit any questions here
Email: ${data.email}
GitHub: https://github.com/${data.github}
`;
}
// exports the module 
module.exports = generateMarkdown;
