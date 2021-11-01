require('dotenv').config();
const {startApp} = require('./controllers');
const figlet = require('figlet');


//Simple welcome message!
welcomeMessage = () => {
  console.log("Welcome to");
  console.log(figlet.textSync("Employee Manager"));
  console.log("An app to track your employees information");
};

//Welcome message start
welcomeMessage();

//Start application function
startApp();
