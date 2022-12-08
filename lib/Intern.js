// import employee class
const Employee = require("./Employee")

// Intern Class w/ imported class 
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email,); 
        this.school = school;
    }
// method(s)
    getSchool() {
    return this.school;
    }

    getRole() {
    return "Intern";
    }
}

module.exports = Intern;