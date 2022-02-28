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
      console.log(teamArray);
    });
}

createManager();
