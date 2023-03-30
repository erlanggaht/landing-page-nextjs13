var db = require("./db_config");

const sql = "CREATE DATABASE admin";
db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Database dibuat!");
});