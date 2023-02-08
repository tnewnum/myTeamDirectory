//test to make sure the Manager class is working as expected 
const Employee = require('../classes/employee.js');
const Manager = require('../classes/manager')



describe('Manager', () => {
    it('creates Employee with the provided name, id, and email', () => {
        const employee = new Manager('Forest Gump', '67', 'boxofchocolates@none.com');
        expect(employee.name).toBe('Forest Gump');
        expect(employee.id).toBe('67');
        expect(employee.email).toBe('boxofchocolates@none.com');
    });
});