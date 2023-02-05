const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./classes/employee.js');
const Manager = require('./classes/manager.js');
const Engineer = require('./classes/engineer.js');
const Intern = require('./classes/intern.js');

const myTeam = [];

const managerQuest = [
  {
    type: 'input',
    name: 'name',
    message: `What is the Manager's name?`,
  },
  {
    type: 'input',
    name: 'id',
    message: `What is the Manager's employee id?`,
  },
  {
    type: 'input',
    name: 'email',
    message: `What is the Manager's email?`,
  },
  {
    type: 'input',
    name: 'office',
    message: `What is the Manager's office number?`,
  },
];

const nextEmplQuest = [
  {
    type: 'list',
    name: 'menu',
    message: 'Would you like to add another employee?',
    choices: ['Engineer', 'Intern', 'Finished Building Team']  
  }
]

const engineerQuest = [    
  {
    type: 'input',
    name: 'name',
    message: `What is the engineer's name?`,
  },
  {
    type: 'input',
    name: 'id',
    message: `What is the engineer's employee id?`,
  },
  {
    type: 'input',
    name: 'email',
    message: `What is the engineer's email?`,
  },
  {
    type: 'input',
    name: 'github',
    message: `What is the engineer's Github username?`,
  },    
];

const internQuest = [
  {
    type: 'input',
    name: 'name',
    message: `What is the intern's name?`,
  },
  {
    type: 'input',
    name: 'id',
    message: `What is the intern's employee id?`,
  },
  {
    type: 'input',
    name: 'email',
    message: `What is the intern's email?`,
  },
  {
    type: 'input',
    name: 'school',
    message: `What is the intern's School?`,
  },  
];




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