// import employee class
const Employee = require("./Employee")

// Manager Class w/ imported class 
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email,);
        this.officeNumber = officeNumber;
    }
// method(s)
    getofficeNumber() {
    return this.officeNumber;
}
    getRole() {
    return "Manager";
    }
}

module.exports = Manager;