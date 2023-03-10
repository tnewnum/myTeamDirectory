///requires the class of Employee, so that we can super it and then add the github 
const Employee = require('./employee.js')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }

    getRole(){
      return 'Engineer'
    }
}

module.exports = Engineer;