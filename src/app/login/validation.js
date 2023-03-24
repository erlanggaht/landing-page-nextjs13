'use client'
const randomstring = require('randomstring')
const admin = {
    username : "erlanggaht",
    password : "root"
  }

function handleSubmit (e,username,password,setValidationInput) {
    e.preventDefault();
    
    if(username === undefined || password === undefined ) {
        setValidationInput({message:'input tidak boleh kosong',success:false})
    }

    else if (username !== admin.username.toUpperCase() || password !== admin.password.toUpperCase()) {

      setValidationInput({message:'akun tidak terdaftar!',success:false})

      return;
    } else {
      setValidationInput({message:'berhasil masuk..',success:true})
      location.href = '/users'
    }

    return;
  }



export {handleSubmit,admin}