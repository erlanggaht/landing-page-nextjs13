const mysql = require('mysql2')

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "root",
    database : "admin"
})

db.connect((err) => {
    if(err) throw err;
    console.log('Berhasil connect ke database')
})

module.exports = db