const mysqlcon = require('../../connection');

module.exports = function(app) {

//---------------REGISTER-----------------------

app.get('/', (req, res) => {
    res.render('register');
  });

  app.get('/register', (req, res) => {
    res.render('register');
  });

  app.get('/login', (req, res) => {
    res.render('login');
  });

app.post('/register', (req, res, next) => {

    var data = {
        FirstName: req.body.FirstName,
        LastName: req.body.LastName, 
        PhoneNumber: req.body.PhoneNumber,
        Email: req.body.Email
    };

    var logdata = {
        UserId: req.body.UserId,
        password: req.body.password
    };

    mysqlcon.query('SELECT FirstName FROM Register WHERE FirstName ="' + data.FirstName +'"', function (err, result) {
        if (err) throw err;
        console.log(result.length);
        if(result.length > 0){  
            res.send('FirstName exists');
        } else {
            mysqlcon.query('SELECT UserId FROM Login WHERE UserId ="' + logdata.UserId +'"', function (err, result){
                if (err) throw err;
                console.log(result.length);
                if(result.length > 0){  
                    res.send('UserId exists!');
                } else {
                    var sql = 'INSERT into Login SET ? ';
                    mysqlcon.query(sql, logdata, (err, result) => {
                        if(err) throw err;
                    });

                    var sql = 'INSERT into Register SET ? ';
                    mysqlcon.query(sql, data, (err, result) => {
                        if(err) throw err;
                    });
                }
                res.redirect('/login');
            });
        }
            });
});
}