const Employee = require('./Employee.js')
// This creates and Engineer class that extends from Employee
class Engineer extends Employee {
    constructor(name,id, email, github) {
        super(name, id, email);
        this.role = role;
        this.github = github;
    }
    // This returns the user selected GitHub username
    getGithub() {
        return this.github;
    }
    // This returns the assigned role of Engineer
    getRole() {
        return 'Engineer';
    }
}
// This allows the class to be exported and used on other files
module.exports = Engineer;
