
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


// This allows the class to be exported and used on other files
module.exports = Employee;