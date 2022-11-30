const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  database: "37apps",
  user: "root",
  password: "Kumar@337",
});

module.exports = pool.promise();
