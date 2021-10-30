const mysql = require('mysql2');

module.exports = () => {
  return mysql.createConnection(
    {
      host: process.env.DATABASE_HOST,
      //Your MySql username,
      user: process.env.DATABASE_USER,
      //You MySQL password,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME
    },
  );
};
