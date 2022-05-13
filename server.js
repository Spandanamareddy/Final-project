const bodyParser = require('body-parser');
const express = require('express');
const mysqlcon = require('./connection');
const ejs = require("ejs");
var path = require('path');

var register = require('./server/models/register')
register.create();
var login = require('./server/models/login')
login.create();
var payment = require('./server/models/payment')
payment.create();
var products = require('./server/models/products')
products.create();
products.add();
var cart = require('./server/models/cart')
cart.create();

const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

global.thisuser = "*";

require('./server/routes/cart')(app);
require('./server/routes/login')(app);
require('./server/routes/payment')(app);
require('./server/routes/products')(app);
require('./server/routes/register')(app);

//-------------homepage-----------
app.get('/homepage', (req, res) => {
    if(thisuser !== '*')
    res.render('homepage');
    else
    res.redirect('/login');
});

app.get('/account', (req, res) => {
    res.render('account');
})

app.listen(3000, function() {
    console.log('server started on port 3000');
});