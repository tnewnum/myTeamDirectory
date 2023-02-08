//requires employee class then we extend it to include school

const Employee = require('./employee.js')

class Intern extends Employee {
    constructor(name, id, email, school) {
       super(name, id, email)
        this.school = school
    }

    getRole() {
      return "Intern"
    }
}

module.exports = Intern;