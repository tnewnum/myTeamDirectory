const Employee = require('./employee.js')



//engineer- name, employee id, email, github username
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }

    getRold(){
      return 'Engineer'
    }
}

module.exports = Engineer;