require('dotenv').config();
const mysql2 = require('mysql2');

const con = mysql2.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PSWD,
  database: process.env.MYSQL_DB
});

const query = (sql, binding) => {
  return new Promise((resolve, reject) => {
    con.query(sql, binding, (err, result, fields) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

const createQuery = "CREATE DATABASE IF NOT EXISTS ecom_spandana;";
con.query(createQuery);

module.exports = { con, query };
