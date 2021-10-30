const db = require('../db/connection')()
const cTable = require('console.table')
const MAINMENU = require('./index')

// Get All Departments
exports.getDepartments = () => {
  
  // Get The Data from Database 
  const sql = `SELECT * FROM department`

  // Inject The Terminal with Data in Table Format
  db.query(sql, (err, data) => {
    if (err) console.log(err.message);
    console.log(cTable.getTable(data));
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
    console.log(cTable.getTable(data));
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
    console.log(cTable.getTable(data));
    //End connection
    MAINMENU.mainMenu();
  })
}