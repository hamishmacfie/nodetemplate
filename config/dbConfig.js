const mysql = require("mysql");

const dbConn = mysql.createConnection({
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DATABASE,
});

dbConn.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("Database connected .....");
  }
});

module.exports = dbConn;
