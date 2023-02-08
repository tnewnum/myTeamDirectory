//test to make sure the Intern class is working as expected 
const Employee = require('../classes/employee.js');
const Intern = require('../classes/intern.js')



describe('Intern', () => {
    it('creates Employee with the provided name, id, and email', () => {
        const employee = new Intern('Sally', '77', 'none@none.com');
        expect(employee.name).toBe('Sally');
        expect(employee.id).toBe('77');
        expect(employee.email).toBe('none@none.com');
    });
});