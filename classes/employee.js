//sets class of Employee to be used to extend other classes 

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

module.exports = Employee;