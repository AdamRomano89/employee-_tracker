const figlet = require('figlet');
const inquirer = require('inquirer');
const VIEW = require('./viewController');
const EDIT = require('./editController');

// Simple Welcome Message Function
welcomeMessage = () => {
  console.log("Welcome to");
  console.log(figlet.textSync("Employee Manager"));
  console.log("An app to track your employees information");
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
        choices: [`View all departments`, `View all roles`, `View all employees`, `Add a department`, `Add an employee`, `Update an employee role`, `Exit`]
      }
    ])
    .then((answers) => {
      answers.firstQuestion === "View all departments" ? VIEW.getDepartments() :
      answers.firstQuestion === "View all roles" ?  VIEW.viewAllRoles():
      answers.firstQuestion === "View all employees" ? VIEW.viewAllEmployees() :
      answers.firstQuestion === "Add a department" ? EDIT.addDepartment() :
      answers.firstQuestion === "Add an employee" ? EDIT.addEmployee() :
      answers.firstQuestion === "Update an employee role" ? EDIT.updateRole():
      exitApp();
    });
}

//Back to main menu
exports.mainMenu = () => {
  inquirer.prompt([{
    type: "list",
    name: "goBack",
    message: "What would you like to do next?",
    choices: [`Go back to the main menu`, `Exit`]
  }]).then((answers) => {
    answers.goBack === "Go back to the main menu" ? this.startApp(): exitApp();
  })
}

//Exit application
exitApp = () => {
  console.log(`Thanks for using the app! See you later.`);
  process.exit(1)
}

