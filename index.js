const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const teamArray = [];

function createManager() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?",
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the manager's employee id?",
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the manager's email?",
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number?",
      },
    ])
    .then((managerInput) => {
      const name = managerInput.name;
      const id = managerInput.id;
      const email = managerInput.email;
      const officeNumber = managerInput.officeNumber;

      const manager = new Manager(name, id, email, officeNumber);
      teamArray.push(manager);

      createTeam();
    });
}

function createTeam() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'role',
        message: "What is this employee's role?",
        choices: ['Engineer', 'Intern'],
      },
      {
        type: 'input',
        name: 'name',
        message: "What is this employee's name?",
      },
      {
        type: 'input',
        name: 'id',
        message: "What is this employee's id?",
      },
      {
        type: 'input',
        name: 'email',
        message: "What is this employee's email?",
      },
      {
        type: 'input',
        name: 'github',
        message: "What is this employee's GitHub username?",
        when: (input) => input.role === 'Engineer',
      },
      {
        type: 'input',
        name: 'school',
        message: "What is this employee's school?",
        when: (input) => input.role === 'Intern',
      },
      {
        type: 'confirm',
        name: 'addMore',
        message: 'Would you like to add another employee?',
      },
    ])
    .then((employeeInput) => {
      const name = employeeInput.name;
      const id = employeeInput.id;
      const email = employeeInput.email;
      const github = employeeInput.github;
      const school = employeeInput.school;

      if (employeeInput.role === 'Engineer') {
        const engineer = new Engineer(name, id, email, github);
        teamArray.push(engineer);
      }

      if (employeeInput.role === 'Intern') {
        const intern = new Intern(name, id, email, school);
        teamArray.push(intern);
      }

      if (employeeInput.addMore) {
        createTeam();
      } else {
        console.log(teamArray);
      }
    });
}

function initApp() {
  createManager();
}

initApp();
