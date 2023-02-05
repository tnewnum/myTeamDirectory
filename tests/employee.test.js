const Employee = require('../classes/employee.js');

describe('Employee', () => {
it('creates Employee with the provided name, id, and email', () => {
const employee = new Employee('Tommy', '88', 'no email brah');
expect(employee.name).toBe('Tommy');
expect(employee.id).toBe('88');
expect(employee.email).toBe('no email brah');
});
});