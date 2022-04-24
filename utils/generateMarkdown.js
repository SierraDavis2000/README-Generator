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

    ## Description
    ${data.description}

    ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
   
    
    A deployed version can be viewed here: (${data.url})
    Please view the GitHub Repo here: (${data.repo})

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
  ## Installation <a name="installation"></a>
    ${data.installation}

 ## Usage <a name="usage"></a>
    ${data.usage}

 ## Contributing Guidelines <a name="contributing"></a>
    ${data.contributing}

 ## Tests <a name="tests"></a>
    ${data.tests}
  
  
  ## License <a name="license"></a>
    ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
    
    This application is covered by the ${data.license} license.

 ## Please Contact for Further Questions <a name="questions"></a>
   
    Find me on GitHub: [${data.username}](https://github.com/${data.username})
    
    Email me with any questions: ${data.email}
  `;
}

module.exports = generateMarkdown;
