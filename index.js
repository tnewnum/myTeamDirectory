const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./classes/manager.js')
const Engineer = require('./classes/engineer.js')
const Intern = require('./classes/intern.js')


//function that runs through an if statement checking user input to select the correct employee 
let chooseEmployee = function(answers) {
  if (answers === 'Manager') {
    return managerQuest
  }else if (answers === 'Engineer') {
    return engineerQuest
  }else if (answers === 'Intern') {
    return internQuest
  }
}; 



function init() {
  inquirer
  .prompt ([
    {
      type: "list",
      message: 'What Employee would you like to include?',
      name: 'employee',
      choices: ['Manager', 'Engineer', 'Intern'],
    },       
  ])
  
  .then((answers) => {

    chooseEmployee()

    const htmlPageContent = generateHTML(answers);
    
    fs.writeFile('index.html', htmlPageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
}
init()