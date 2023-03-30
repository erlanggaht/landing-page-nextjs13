const db = require('./db_config')

const multi_insert = `INSERT INTO admin (name,password) VALUES?`;
const values = [
    ['samsudin','din12345'],
    ['kurey','kuray1']
];

db.query(multi_insert,[values],(err,result) => {
    if(err) throw err;
    console.log('berhasil menambahkan/insert multi data', result.affectedRows)
})