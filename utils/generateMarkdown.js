// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}
  //switch statement. link it
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}
let tableOfContents = hasTable => {
  if(hasTable) {
    return `
    ## Table of Contents
    * [Description](#Description) 
    * [Links](#Links)
    * [Installation](#Installation)
    * [Usage](#Usage)
    * [Credits](#Credits)
    * [License](#License)
    * [Badges](#Badges)
    * [Contributing](#Contributing)`;
  }
    return "";
};






// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `
# ${data.title}

## Description 
${data.description}

## Links 
Published site: ${data.link} 

${tableOfContents(data.tableContents)}

## Installation
${data.installation}

## Usage
${data.instructions}

//ADD SCREENSHOT FUNCTION

## Credits
${data.collaborators}

## License
${data.license}

## Badges
${data.badges}

## Contributing
${data.moreCollab}
`

};

module.exports = generateMarkdown;

