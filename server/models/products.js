const mysqlcon = require('../../connection');

function create() {
    let sql = `CREATE TABLE IF NOT EXISTS products(
        product_id int(10) primary key,
        product_name varchar(66), 
        price int(10)
        )`;
    mysqlcon.query(sql);
  }

function add() {
    mysqlcon.query('select * from products', function (err, result) {
        if(result.length === 0){ 
            let sqlrun = `insert into products values
            (1, 'Fresh Orange', 4.99), 
            (2, 'Onion', 7.99), 
            (3, 'Meat', 10.99), 
            (4, 'Cabbage', 12.99), 
            (5, 'Potatoes', 14.99)`;
            mysqlcon.query(sqlrun, (err, result) => {
                if(err) throw err;
            });
}
});
}  


  module.exports = {create, add};
  