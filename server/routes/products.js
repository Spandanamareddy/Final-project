const mysqlcon = require('../../connection');

module.exports = function(app) {

//------products---
app.get('/products', (req, res) => {
    if(thisuser !== '*'){
    var sql="SELECT * FROM products";
    mysqlcon.query(sql, (err, data) => {
        res.render('products', {data: data});      
    });
    }
    else
    res.redirect('/login');
});

}