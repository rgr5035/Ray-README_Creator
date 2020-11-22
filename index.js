const fs = require("fs");
const inquirer = require("inquirer");

inquirer 
    .prompt ([
        {
           type: "input",
           message: "What is the title of your project?",
           name: "title", 
        }
        {
            type: "input",
            message: "What is the description of your project?",
            name: "description", 
         }
    ])
