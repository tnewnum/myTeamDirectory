const Employee = require('./employee.js')

//manager - name, emoloyee id, email address, office number 
class Manager extends Employee {
    constructor(name, id, email, officeNum) {
       super(name, id, email)
        this.officeNum = officeNum
    }

    getRole() {
      return 'Manger'
    }
}

module.exports = Manager;


    
