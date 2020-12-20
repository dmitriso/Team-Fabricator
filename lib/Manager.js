const Employee = require('./Employee.js')
// This creates a class of Manager that extends fromm Employee
class Manager extends Employee {
    constructor(name,id,email,officeNumber) {
        super(name,id,email);
        this.officeNumber = officeNumber;
    }
    // This returns the user selected office number
    getOfficeNumber() {
        return this.officeNumber;
    }
    // Thi returns the assigned role of Manager
    getRole() {
        return 'Manager';
    }
}
// This allows the class to be exported and used on other files
module.exports = Manager;