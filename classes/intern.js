//intern - name, employee id, eamil, school
class Intern {
    constructor(name, id, email, school) {
        this.name = name
        this.id = id
        this.email = email
        this.school = school
    }
}

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