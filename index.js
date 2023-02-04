const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./classes/manager')
const Engineer = require('./classes/engineer')
const Intern = require('./classes/intern')


//function that runs through an if statement checking user input to select the correct employee 
function chooseEmployee (employee) {
  if (employee === 'Manager') {
    return managerQuest
  }else if (employee === 'Engineer') {
    return engineerQuest
  }else if (employee === 'Intern') {
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
    const htmlPageContent = generateHTML(answers);
    
    fs.writeFile('index.html', htmlPageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
}
init()