const db = require('../db/connection')()
const cTable = require('console.table')
const inquirer = require('inquirer')


// Get All Departments
exports.getDepartments = () => {
  
  // Get The Data from Database 
  const sql = `SELECT * FROM department`

  // Inject The Terminal with Data in Table Format
  db.query(sql, (err, data) => {
    if (err) console.log(err.message);
    console.log(cTable.getTable(data));
    db.end();
  })
}

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
      db.end();
    })
  });
}

exports.viewAllRoles = () => {
  //send sql inquery
  const sql = `SELECT * FROM roles`

  db.query(sql, (err, data) => {
    //Handle errors
    if (err) throw err
    //Log data
    console.log(cTable.getTable(data));
    db.end();
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
    console.log(cTable.getTable(data));
    //End connection
    db.end();
  })
}