const db = require('./db_config')


function Insert (nama,password,db){

    const insert = `INSERT INTO admin (name,password) VALUES (${nama},${password})`;
    db.query (insert,(err,result) => {
        if(err) throw err;
        console.log('berhasil menambahkan/insert data',{name : nama,password : password})
    })
}

export {Insert}
