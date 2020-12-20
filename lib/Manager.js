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