//manager - name, emoloyee id, email address, office number 
class Manager {
    constructor(name, id, email, office) {
        this.name = name
        this.id = id
        this.email = email
        this.office = office
    }
}

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
      name: 'github',
      message: `What is the Manager's office number?`,
    },
    
];