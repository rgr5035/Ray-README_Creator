//VARIABLE DECLARATIONS
const fs = require("fs");
const inquirer = require("inquirer");


//array of questions that are prompted to user once node index.js is run
inquirer 
    .prompt ([
        {
           type: "input",
           message: "What is the title of your project?",
           name: "title", 
        },
        {
            type: "input",
            message: "What is the description of your project?",
            name: "description", 
         },
         {
            type: "input",
            message: "Please enter the installation instructions of your project.",
            name: "installation", 
         },
         {
            type: "input",
            message: "Please enter usage information.",
            name: "usage", 
         },
         {
            type: "input",
            message: "Please choose the license for the project.",
            name: "license",
            choices: ["MIT", "Apache 2.0", "GNU GPLv3"],
         },
         {
            type: "input",
            message: "Please enter contribution guidelines for your project.",
            name: "contributions", 
         },
         {
            type: "input",
            message: "Please enter test instructions for your project.",
            name: "tests", 
         },
         {
            type: "input",
            message: "What is your GitHub username?",
            name: "github", 
         },
         {
            type: "input",
            message: "What is your email address?",
            name: "email", 
         }, 
    ])

//function to run different license badges based on user choice
.then((data) => {
    switch (data.license) {
      case "MIT": {
        licenseImage =
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        // console.log(licenseImage);
        break;
      }
      case "Apache 2.0": {
        licenseImage =
          "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        // console.log(licenseImage);
        break;
      }
      case "GNU GPLv3": {
        licenseImage =
          "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        // console.log(licenseImage);
        break;
      }
      default:
        break;
    }
    
    //generates the markdown text of user's prompted answers
    fs.writeFile(
        "README.md",
        "# " +
          `${data.title}\n\n` +
          licenseImage +
          "\n\n" +
          "## Description\n\n" +
          `${data.description}\n\n` +
          "## Table of Contents\n\n" +
          "* [Installation](#installation)\n" +
          "* [Usage](#usage)\n" +
          "* [Credits](#credits)\n" +
          "* [Contributing](#contributing)\n" +
          "* [Tests](#tests)\n" +
          "* [License](#license)\n" +
          "* [Questions](#questions)\n\n" +
          "## Installation\n\n" +
          `${data.installation}\n\n` +
          "## Usage\n\n" +
          `${data.usage}\n\n` +
          "## Credits\n\n" +
          `${data.credits}\n\n` +
          "## Contributing\n\n" +
          `${data.contributions}\n\n` +
          "## Tests\n\n" +
          `${data.tests}\n\n` +
          "## License\n\n" +
          "This project is " +
          `${data.license}` +
          " licensed.\n\n" +
          "## Questions\n\n" +
          "For more information about this application, or if you have any additional questions, do not hesitate to reach out to me via GitHub or E-mail.\n\n" +
          "- [Github](https://www.github.com/" +
          `${data.github})\n` +
          "- [Email](mailto:" +
          `${data.email}` +
          ")\n",
        (err) =>
          err
            ? console.log(err)
            : console.log("README successfully created!")
      );
      
    });


