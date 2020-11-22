const fs = require("fs");
const inquirer = require("inquirer");

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
