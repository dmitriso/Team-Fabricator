const Employee = require('./Employee.js')
// This creates a class of Intern that extends from Employee
class Intern extends Employee {
    constructor(name,id,email,school,role) {
        super(name,id,email);
        this.role = role;
        this.school = school;
    }
    // This returns the user selected school that was attended
    getSchool() {
        return this.school;
    }
    // This returns the assigned role of Intern
    getRole() {
        return 'Intern';
    }
}
// This allows the class to be exported and used on other files
module.exports = Intern;