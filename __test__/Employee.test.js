// imported class to test
const Employee = require("../lib/Employee")
// testing for object created with expected properties to find
test('creates an employee object', () => { 
    const employee = new Employee('Lamar', 1, 'lmartin@test.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

//testing for method with expected name property 
test('gets employee name', () => { 
    const employee = new Employee('Lamar', 1, 'lmartin@test.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

//testing for method with expected Id property
test('gets employee ID', () => { // acquires id from getId() 
    const employee = new Employee('Lamar', 1, 'lmartin@test.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});

//testing for method with expected Email property
test('gets employee email', () => { 
    const employee = new Employee('Lamar', 1, 'lmartin@test.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

//testing for method with expected role property
test('gets role of employee', () => { 
    const employee = new Employee('Lamar', 1, 'lmartin@test.com');
    expect(employee.getRole()).toEqual("Employee");
}); 