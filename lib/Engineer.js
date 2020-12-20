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
// This creates and Engineer class that extends from Employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
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
