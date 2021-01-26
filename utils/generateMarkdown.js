// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //switch statement. link it
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  `# ${response.title}
         
  ## Description 
  ${response.description}
  
  ## Links 
  Published site: ${response.link}` 
 if (tableContents==="no") {
     console.log("You chose to not include a Table of Contents");
 }
 else {
     `## Table of Contents

     ## Installation
     ${installation}

     ## Usage
     ${instructions}`
     if (screenShots==="no") {
         console.log("You chose to not include screenshots");
     }
     else {
         `**Screenshots: <img src="assets/image/fileName.png" alt="#" width="300" /> 
         
         ## Credits
         ${collaborators}
         
         ## License
         ${license}
         
         ## Badges
         ${badges}
         
         ## Contributing
         ${moreCollab}
         

`;
}

module.exports = generateMarkdown;
