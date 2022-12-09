// imported class to test
const Engineer = require("../lib/Engineer")

// testing for object created with expected properties to find
test('creates an Engineer object', () => { 
    const engineer = new Engineer('Lamar', 1, 'lmartin@test.com', 'lmartin214');
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.GitHub).toEqual(expect.any(String));
});

//testing for method with expected name property 
test('gets engineer GitHub Username', () => { 
    const engineer = new Engineer('Lamar', 1, 'lmartin@test.com', 'lmartin214')
    expect(engineer.getGitHub()).toEqual(expect.any(String));
})

//testing for method with expected role property
test('gets role of Engineer', () => { 
    const engineer = new Engineer('Lamar', 1, 'lmartin@test.com', 'lmartin214');
    expect(engineer.getRole()).toEqual("Engineer");
}); 