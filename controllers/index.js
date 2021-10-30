const figlet = require('figlet');
const inquirer = require('inquirer');
const db = require('../db/connection');
const Department = require('./departmentController');

// Simple Welcome Message Function
welcomeMessage = () => {
  console.log("Welcome to");
  console.log(figlet.textSync("Employee Manager"));
};

// Exported Application Starting Function
exports.startApp = () => {
  //Welcome message
  welcomeMessage();
  
  // Fire The First Question
  inquirer.prompt([
      {
        type: 'list',
        name: 'firstQuestion',
        message: `What would you like to do today? Please select from the following options`,
        choices: [`View all departments`, `View all roles`, `View all employees`, `Add a department`, `Add an employee`, `Update an employee role`]
      }
    ])
    .then((answers) => {
      answers.firstQuestion === "View all departments" ? Department.getDepartments() :
      answers.firstQuestion === "View all roles" ?  Department.viewAllRoles():
      answers.firstQuestion === "View all employees" ? Department.viewAllEmployees() :
      answers.firstQuestion === "Add a department" ? Department.addDepartment() :
      answers.firstQuestion === "Add an employee" ? console.log(`Add an employee`) :
      answers.firstQuestion === "Update an employee role" ? console.log(`Update an employee role`):
      console.log(`You have to select an option!`);
    });
}