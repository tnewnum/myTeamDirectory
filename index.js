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




const generateHTML = ({ name, id, email, officeNumber, github, school }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>myTeamDirectory</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">My office  ${location}.</p>
    <h3 <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">LinkedIn: ${linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

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