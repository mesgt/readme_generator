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
  if (hasTable) {
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

let screenShots = hasScreenshots => {
  if (hasScreenshots) {
    return `
    <img src=",/assets/image/YOUR_FILE_NAME.png" alt="description" width="300" />;`;
  }
  return "";
};

let likeHelp = willWorkWithOthers => {
  if (willWorkWithOthers) {
    return `
    I would like to welcome you to work with me on improving this project. 
    Please note that this project is released with a Contributor Code of Conduct. 
    By participating in this project you agree to abide by its terms. 
    
    If you are interested in collaborating with me on this project, please visit https://www.contributor-covenant.org/ 
    to review the most up to date Contributor Covenant. In Node.js, please run the following command 
    "npm install -g covgen" and "covgen '<your_email_address>'". If you have npm 5.x installed you can run 
    npx covgen <your_email_address> instead of installing globally.
    `
  };
  return "";
}





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

${screenShots(data.screenShots)}

## Credits
${data.collaborators}

## License
${data.license}

## Badges
${data.badges}

## Contributing
${likeHelp(data.moreCollab)}
`
};

module.exports = generateMarkdown;

