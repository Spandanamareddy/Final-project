const mysqlcon = require('../../connection');

function create() {
    let sql = `CREATE TABLE IF NOT EXISTS Login( 
        UserId varchar(225) primary key, 
        password varchar(225)
        )`;
    mysqlcon.query(sql);
  }


  module.exports = {create};
  