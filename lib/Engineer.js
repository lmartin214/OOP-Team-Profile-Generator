// import employee class
const Employee = require("./Employee")

// Engineer Class w/ imported class 
class Engineer extends Employee {
    constructor(name, id, email, GitHub) {
        super(name, id, email,);
        this.GitHub = GitHub;
    }
// method(s)
    getGitHub() {
    return this.GitHub
    }
    
    getRole() {
    return "Engineer";
    }
}

module.exports = Engineer;