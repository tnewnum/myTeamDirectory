//engineer- name, employee id, email, github username
class Engineer {
    constructor(name, id, email, github) {
        this.name = name
        this.id = id
        this.email = email
        this.github = github
    }
}

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