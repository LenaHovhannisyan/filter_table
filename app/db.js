const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'test1234',
    database: 'table_db'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

module.exports = connection;
