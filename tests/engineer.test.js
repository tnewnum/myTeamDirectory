//test to make sure the Engineer class is working as expected 
const Employee = require('../classes/employee.js');
const Engineer = require('../classes/engineer.js')



describe('Engineer', () => {
    it('creates Employee with the provided name, id, and email', () => {
        const employee = new Engineer('Billy', '99', 'text me fool');
        expect(employee.name).toBe('Billy');
        expect(employee.id).toBe('99');
        expect(employee.email).toBe('text me fool');
    });
});