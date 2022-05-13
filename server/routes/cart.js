const mysqlcon = require('../../connection');

module.exports = function(app) {
    var date_ob = new Date();
    //------------cart----------
app.get('/cart', (req, res) => {
    if(thisuser !== '*') {
        var sql='SELECT * FROM cart WHERE UserId = "' + thisuser + '"';
    mysqlcon.query(sql, (err, data) => {
        res.render('cart', {data: data});      
    });
    }
    else
    res.redirect('/login');
});

//-------------cart delete--------
app.get('/cart/:id', (req, res) => {
    hid = req.params.id;

    mysqlcon.query('delete from cart where product_id = "' + hid + '" and UserId = "' + thisuser + '" LIMIT 1', (err, res) => {
        if(err) throw error;
    })

    res.redirect('/cart');
});

//-----------add to cart-------------
app.get('/cart/:id/:pname', (req, res) => {
    if(thisuser !== '*'){
        var data = {
            product_id: req.params.id,
            UserId: thisuser,
            cart_time: date_ob.getDate(),
            product_name: req.params.pname
        };

        var sql = 'INSERT into cart SET ? ';
        mysqlcon.query(sql, data, (err, result) => {
            if(err) throw err;
        });

        res.redirect('/cart');
    }
    else
    res.redirect('/login');
});

}