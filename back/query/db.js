const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'eastzoo',
    password: '1234',
    database: 'todolist'
})

module.exports = connection;