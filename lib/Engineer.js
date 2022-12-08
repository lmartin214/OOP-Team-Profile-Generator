// import employee class
const Employee = require("./Employee")

// Engineer Class w/ imported class 
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email,);
        this.github = github;
    }
// method(s)
    getGitHub() {
    return this.github
    }
    
    getRole() {
    return "Engineer";
    }
}

module.exports = Engineer;