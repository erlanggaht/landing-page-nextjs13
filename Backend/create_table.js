const db = require('./db_config')

const create_table = `CREATE TABLE admin (
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(50),
    passoword VARCHAR(50),
    PRIMARY KEY (id)
)`;

db.query(create_table,function (err,result) {
    if(err) throw err;
    console.log('berhasil buat table')
})