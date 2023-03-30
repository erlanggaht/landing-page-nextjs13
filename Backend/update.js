const db = require('./db_config')

const update = `UPDATE admin SET name='waluyo' WHERE id=2`;

db.query(update,(err,result) => {
    if(err)throw err;
    console.log(result)
    console.log(`data berhasil di ubah ${result.affectedRows}`)
})