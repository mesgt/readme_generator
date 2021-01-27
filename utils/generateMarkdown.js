let tableOfContents = hasTable => {
  if (hasTable) {
    return `## Table of Contents

* [Description](#Description) 
* [Links](#Links)
* [Installation](#Installation)
* [Usage](#Usage)
* [Credits](#Credits)
* [License](#License)
* [Badges](#Badges)
`    
  }
    return "";
};

let screenShots = hasScreenshots => {
  if (hasScreenshots) {
    return `<img src=",/assets/image/YOUR_FILE_NAME.png" alt="description" width="300" />;`;
  }
  return "";
};

let contributorCovenant = "https://www.contributor-covenant.org/version/2/0/code_of_conduct/";

let likeHelp = willWorkWithOthers => {
  if (willWorkWithOthers) {
    return `## Contributing

I would like to welcome you to work with me on improving this project. Feel free to contact me on gitHub or submit a pull request.

Please note that this project is released with a Contributor Code of Conduct. 
By participating in this project you agree to abide by its terms. 

If you are interested in collaborating with me on this project, please visit (${contributorCovenant}) to review the latest version of Contributor Covenant. In Node.js, please run the following command "npm install -g covgen" and "covgen '<your_email_address>'". If you have npm 5.x installed you can run npx covgen <your_email_address> instead of installing globally.

`
  };
  return "";
};

let doTests = qualityWork => {
  if (qualityWork) {
    return `## Tests

* Example Workflow:

* Environment Variables:

* Inputs:

* Outputs:
`
  };
  return "";
};

// Generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}

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

${likeHelp(data.moreCollab)}

${doTests(data.tests)}
`
};

module.exports = generateMarkdown;