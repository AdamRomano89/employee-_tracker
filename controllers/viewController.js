const db = require('../db/connection')()
const cTable = require('console.table')
const inquirer = require('inquirer')
const MAINMENU = require('./index')

// Get All Departments
exports.getDepartments = () => {
  
  // Get The Data from Database 
  const sql = `SELECT * FROM department`

  // Inject The Terminal with Data in Table Format
  db.query(sql, (err, data) => {
    if (err) console.table(err.message);
    console.table(data)
    MAINMENU.mainMenu();
  })
}

exports.viewAllRoles = () => {
  //send sql inquery
  const sql = `SELECT * FROM roles`

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
  const sql = `SELECT * FROM employee`
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