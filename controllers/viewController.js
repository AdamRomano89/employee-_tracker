const db = require('../db/connection')()
const inquirer = require('inquirer')
const MAINMENU = require('./index')
const cTable = require('console.table')

// Get All Departments
exports.getDepartments = () => {
  
  // Get The Data from Database 
  const sql = `SELECT department.id as 'Department ID', department.department_name AS 'Department Name' FROM department`

  // Inject The Terminal with Data in Table Format
  db.query(sql, (err, data) => {
    if (err) console.table(err.message);
    console.table(data)
    MAINMENU.mainMenu();
  })
}

exports.viewAllRoles = () => {
  //send sql inquery
  const sql = `SELECT
  roles.id,
  roles.title AS 'Job Title',
  roles.salary AS 'Salary',
  department.department_name AS 'Department'
  FROM roles INNER JOIN department on roles.department_id=department.id;` 

  db.query(sql, (err, data) => {
    //Handle errors
    if (err) throw err
    //Log data
    console.table(data)
    MAINMENU.mainMenu();
  })
}

exports.viewAllEmployees = () => {
  //Send sql query
  const sql = `SELECT
  employee.id, CONCAT (employee.first_name, " ", employee.last_name) AS 'Employee Name',roles.title AS 'Job Title', department.department_name AS 'Department', roles.salary AS 'Salary', CONCAT(manager.first_name, " " , manager.last_name) AS 'Manager' FROM employee LEFT JOIN roles on employee.role_id=roles.id LEFT JOIN department on roles.department_id= department.id LEFT JOIN employee manager on manager.id = employee.manager_id;`
  //Create connection
  db.query(sql, (err, data) => {
    //Handle errors
    if(err) throw err
    //Return data
    console.table(data)
    //End connection
    MAINMENU.mainMenu();
  })
}

//View employees by manager id
exports.viewEmployeesByManagerId = () => {
  inquirer.prompt([{
    type: "input",
    name: "manager_id",
    message: "Enter the employee manager id"
  }]).then(answeres => {
    if(answeres.manager_id === 0 || answeres.manager_id === ""){
      console.table(`Please enter a valid manager id`);
      return this.viewEmployeesByManagerId();
    }
    //Send sql query
    const sql = `SELECT * FROM employee WHERE manager_id = ?`
    //Create connection
    db.query(sql, [answeres.manager_id], (err, data) => {
      //Handle errors
      if(err) throw err
      //Return data
      console.table(data);
      //End connection
      MAINMENU.mainMenu();
    })
  })
}