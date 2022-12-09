// imported class to test
const Intern = require("../lib/Intern")

// testing for object created with expected properties to find
test('creates an Intern object', () => { 
    const intern = new Intern('Lamar', 1, 'lmartin@test.com', 'UCB');
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

//testing for method with expected school property 
test('gets intern school', () => { 
    const intern = new Intern('Lamar', 1, 'lmartin@test.com', 'lmartin214', 'UCB');
    expect(intern.getSchool()).toEqual(expect.any(String));
});

//testing for method with expected role property
test('gets role of Intern', () => { 
    const intern = new Intern('Lamar', 1, 'lmartin@test.com', 'lmartin214', 'UCB');
    expect(intern.getRole()).toEqual("Intern");
}); 