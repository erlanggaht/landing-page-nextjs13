'use client'

const admin = {
    username : "erlanggaht",
    password : "root"
  }

function handleSubmit (e,username,password,setValidationInput) {
    e.preventDefault();
    
    if(username === undefined || password === undefined ) {
        setValidationInput({message:'input tidak boleh kosong',success:false})
        return false
    }

    if (username !== admin.username || password !== admin.password) {
      setValidationInput({message:'akun tidak terdaftar!',success:false})
    } else {
      setValidationInput({message:'berhasil masuk..',success:true})
      location.href = '/users'
    }
  }



export {handleSubmit}