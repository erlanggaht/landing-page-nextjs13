const db = require('./db_config')

const show  = `SELECT * FROM admin`;

db.query(show,(err,result)=>{
    if(err)throw err;
    console.log(`name \t password`)
    result.forEach(res => console.log(`${res.name} \t ${res.password}`))
})