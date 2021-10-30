const db = require('../db/connection')()
const cTable = require('console.table')
const inquirer = require('inquirer')
const MAINMENU = require('.')


//Add a department
exports.addDepartment = () => {

  // Get The User Inputes
  inquirer.prompt([{
    type: 'input',
    name: 'userInput',
    message: 'What the name of the department?'
  }]).then(answers => {
    if(answers.userInput === 0 || answers.userInput === "") {
      console.log("Please enter a valid department name!");
      return this.addDepartment();
    }
    const sql = `INSERT INTO department (department_name) VALUES (?)`
    db.query(sql, [answers.userInput], (err, data) => {
      if (err) console.log(err.message);
      // initiate response table
      console.log(cTable.getTable(`You have added ${data.affectedRows} department`));
      MAINMENU.mainMenu();
    })
  });
}

//Add an employee
exports.addEmployee = () => {
  inquirer.prompt([
    {
    type: "input",
    name: "first_name",
    message: "Enter the employee first name"
  },
  {
    type: "input",
    name: "last_name",
    message: "Enter the employee last name"
  },
  {
    type: "input",
    name: "role_id",
    message: "Enter the role id"
  },
  {
    type: "input",
    name: "manager_id",
    message: "Enter the manager id"
  }
  //Handling incoming data
]).then(response => {
  //Handle sql query
  const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`
  //Validation
  if(response.first_name === 0 || response.last_name === 0 || response.role_id === 0 || response.manager_id === 0 || 
    response.first_name === "" || response.last_name === "" || response.role_id === "" || response.manager_id === ""){
    console.log(`You must enter a valid values`)
    return this.addEmployee()
  }
  //Send sql query
  db.query(sql, [response.first_name, response.last_name, response.role_id, response.manager_id], (err, data) => {
    if(err) throw err
    console.log(cTable.getTable(`You have added ${data.affectedRows} employee`));
    MAINMENU.mainMenu();
  })
})
}

exports.updateRole  = () => {
  //Capture user input
  inquirer.prompt([
    {
    type: "input",
    name: "employee_id",
    message: "What's the employee id?"
  },
  {
    type: "input",
    name: "new_role_id",
    message: "Enter the new employee role id.",
  }
]).then(answers => {
  const sql = `UPDATE employee SET role_id = ? WHERE id = ?`
  if (answers.new_role_id === 0 || answers.new_role_id === "" || answers.employee_id === 0 || answers.employee_id ==="") {
    console.log(`You must enter a valid input`);
    return this.updateRole()
  }
  //Send query statement
  db.query(sql,[answers.new_role_id, answers.employee_id],(err, data) => {
    if (err) throw err
    console.log(cTable.getTable(`You have ${data.affectedRows} employee role`));
    MAINMENU.mainMenu();
  })
})
}