// imported class to test
const Manager = require("../lib/Manager")

// testing for object created with expected properties to find
test('creates an Manager object', () => { 
    const manager = new Manager('Lamar', 1, 'lmartin@test.com', 321);
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});
// /testing for method with expected office number property
test('gets office number of Manager', () => { 
    const manager = new Manager('Lamar', 1, 'lmartin@test.com', 321);
    expect(manager.getofficeNumber()).toEqual(expect.any(Number));
}); 

//testing for method with expected role property
test('gets role of Manager', () => { 
    const manager = new Manager('Lamar', 1, 'lmartin@test.com', 321);
    expect(manager.getRole()).toEqual("Manager");
}); 