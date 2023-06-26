const mysql = require('mysql2/promise')

module.exports = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"Renginiai"
});