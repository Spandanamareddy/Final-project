const mysqlcon = require('../../connection');

function create() {
    let sql = `CREATE TABLE IF NOT EXISTS Register( 
        FirstName varchar(225) primary key, 
        LastName varchar(225), 
        PhoneNumber char(10), 
        Email varchar(225)
        )`;
    mysqlcon.query(sql);
  }


  module.exports = {create};
  