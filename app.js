const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


init();

const employees = [];
// This function prompts user questions to create a new employee to add to the team
function addMember() {
    // Base employee questions (name,id,email) and the role of your member
    inquirer.prompt(
        [
            {
                type: 'input',
                name: 'name',
                message: "What is your team member's name?",
            },
            {
                type: 'list',
                name: 'role',
                message: "What is the role of your team member?",
                choices: ['Manager', 'Engineer', 'Intern']
            },
            {
                type: 'input',
                name: 'id',
                message: "What is your team member's id?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is your team member's email address?",
            },
        ])
        // Promise that assigns the role and asks for the employees information 
        .then((data) => {
            let roleInfo = '';
            if (data.role === 'Engineer') {
                roleInfo = 'GitHub username';
            } else if (data.role === 'Manager') {
                roleInfo = 'office number';
            } else {
                roleInfo = 'school name';
            }
            // Second prompt asking for role information and if the user wants to add another member
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'roleInfo',
                    message: `What is your team member's ${roleInfo}?`,
                },
                {
                    type: 'list',
                    name: 'moreMembers',
                    message: 'Would you like to add another member?',
                    choices: ['Yes', 'No'],
                }
            ])
                // This creates a new member of the assigned role with all the input information.
                .then((newMember) => {
                    const name = data.name;
                    const role = data.role;
                    const id = data.id;
                    const email = data.email;
                    const roleInfo = newMember.roleInfo;
                    const moreMembers = newMember.moreMembers;
                    // This creates a new class of the assigned role
                    if (data.role === 'Engineer') {
                        newMember = new Engineer(name,id,email,roleInfo,role);
                    } else if (data.role === 'Manager') {
                        newMember = new Manager(name,id,email,roleInfo,role);
                    } else {
                        newMember = new Intern(name,id,email,roleInfo,role);
                    }

                    employees.push(newMember);
                    

                    if (moreMembers === 'Yes') {
                        addMember();
                    } else {
                        writeToFile(outputPath,render(employees));
                    }
                })
        })
}
// This function writes a file to the out put folder
function writeToFile(outputPath, employees) {
    fs.writeFile(outputPath, employees, (err)=> {
        err ? console.error(err) : console.log('Success!')
    });
}
// This function initializes the program
function init() {
    addMember();
}

