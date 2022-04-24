// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

    ${data.description}

    ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
   
    
    [A deployed version can be viewed here:](${data.url})
    [Please view the GitHub Repo here:](${data.repo})

  ---
  ## Contents 
  1. [Description] (#description)
  2. [Installation] (#installation)
  3. [Usage] (#usage)
  4. [Contributing] (#contributing)
  5. [Tests] (#tests)
  6. [License] (#license)
  7. [Questions] (#questions)

  ---
  ## Installation
    ${data.installation}

 ## Usage
    ${data.usage}

 ## Contributing Guidelines
    ${data.contributing}

 ## Tests
    ${data.tests}
  
  
  ## License
    ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
    <br />
    This application is covered by the ${data.license} license.

 ## Please Contact for Further Questions
    <br />
    :octocat: Find me on GitHub: [${data.username}](https://github.com/${data.username})<br />
    <br />
    Email me with any questions: ${data.email}<br /><br />
  `;
}

module.exports = generateMarkdown;
