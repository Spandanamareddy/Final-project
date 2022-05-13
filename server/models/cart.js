const mysqlcon = require('../../connection');

function create() {
    let sql = `CREATE TABLE IF NOT EXISTS cart( 
        product_id int(10), 
        foreign key(product_id) references products(product_id),
        product_name varchar(62),
        UserId varchar(225), 
        foreign key(UserId) references Login(UserId),
        cart_time varchar(255))`;
    mysqlcon.query(sql);
  }


  module.exports = {create};
  