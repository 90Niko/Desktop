const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var connection = mysql.createConnection({
    host: 'localhost',
    user: ' root',
    password: '1990Naiko.',
    database: 'employeedb'
});

connection.connect((err) => {
    if (err)
        console.log('Connected to the MySQL server.')
    else
        console.log('Connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});

app.listen(3000, () => console.log('Express server is running at port no : 3000'));

app.get('/employees', (req, res) => {
    connection.query('SELECT * FROM employee', (err, rows, fields) => {
        if (!err)
            console.log(rows);
        else
            console.log(err);
    })
});