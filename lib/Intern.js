// Employee Class with contructor
class Employee {
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // This function returns user selected name
    getName() {
        return this.name;
    }
    // This function returns the user selected id
    getId() {
        return this.id;
    }
    // This function returns the user selected email address
    getEmail() {
        return this.email;
    }
    // This functions returns the Employee as the assigned role
    getRole() {
        return 'Employee';
    }
}
// This creates a class of Intern that extends from Employee
class Intern extends Employee {
    constructor(name,id,email,school) {
        super(name,id,email);
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