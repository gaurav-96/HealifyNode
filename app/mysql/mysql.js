var mysql = require('mysql');

var pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'zomato',
    database:'healify'
});

exports.pool = pool;
