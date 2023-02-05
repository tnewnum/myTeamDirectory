module.exports = { 

//questions for the Manager 
managerQuest: [
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
  ],
  
  //a questiont to see what the next employee should be or if finished with team
nextEmplQuest: [
    {
      type: 'list',
      name: 'menu',
      message: 'Would you like to add another employee?',
      choices: ['Engineer', 'Intern', 'Finished Building Team']  
    }
  ],
  
  //questions for the Engineer 
engineerQuest: [    
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
  ],
  
  //questions for the intern 
internQuest: [
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
  ]

};