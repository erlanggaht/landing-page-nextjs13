const db = require('./db_config')

const delete_q = 'DELETE FROM admin WHERE id=3'

db.query(delete_q,(err,result) => {
    if(err) throw err;
    console.log(result);
    console.log('data berhasil dihapus', result.affectedRows)
})