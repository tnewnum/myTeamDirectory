const Employee = require('./employee.js')

//manager - name, emoloyee id, email address, office number 
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
       super(name, id, email)
        this.officeNumber = officeNumber
    }

    getRole() {
      return 'Manager'
    }
}

module.exports = Manager;


    
