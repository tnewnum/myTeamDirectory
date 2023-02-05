//requiring other files to be used 
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./classes/manager.js');
const Engineer = require('./classes/engineer.js');
const Intern = require('./classes/intern.js');
const generateHTML = require('./html/htmlTemplate.js')

//imports questions from questions.js
// import { managerQuest, nextEmplQuest, engineerQuest, internQuest } from './classes/questions.js';

const allQuestions = require('./classes/questions.js')
const {managerQuest, nextEmplQuest, engineerQuest, internQuest} = allQuestions

//setting up an empty array to push my team to, to be used later 
const myTeam = [];

//the 3 functions below gather the "answers" from the questions (per position) and pushes them to myTeam array
function createManager(answers) {
  const manager = new Manager(answers.name, answers.id, answers.email, answers.office)
  console.log(manager)
  myTeam.push(manager);
}

function createEngineer(answers) {
  const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
  myTeam.push(engineer)
}

function createIntern(answer) {
  const intern = new Intern(answer.name, answer.id, answer.email, answer.school)
  myTeam.push(intern)
}

//function that can be called to prompt the user of the engineer based questions
function engineerQuestions(engineerQuest) {
  inquirer
  .prompt(engineerQuest)
  .then((answers) => {
    createEngineer(answers);
    nextQuestion()
  })
};

//function that can be called to prompt the user of the intern based questions
function internQuestions(internQuest) {
  inquirer
  .prompt(internQuest)
  .then((answers) => {
    createIntern(answers)
    nextQuestion();
  })
};

//function to determine if another employee needs to be added or if complete with team 
function nextQuestion() {
  inquirer
  .prompt(nextEmplQuest)
  .then(result => {
    if (result.menu === 'Engineer') {
      engineerQuestions(engineerQuest)
    } else if (result.menu === 'Intern') {
      internQuestions(internQuest)
    } else if (result.menu === 'Finished Building Team') {
      console.log('Team Directory Finished!')

      console.log(myTeam)
      const htmlPageContent = generateHTML(myTeam)
      
      fs.writeFile('newIndex.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!'))

    }
  })
}

//overall funcation to get the process started
function init() {
  inquirer
  .prompt(managerQuest)
  .then((answers) => {
    createManager(answers)
    nextQuestion()
  })
};
init()
