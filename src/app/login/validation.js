import { setCookie } from 'nookies'



const admin = {
  username : "erlanggaht",
  password : "root",
  token : 'VuBsU1fAzWzhU5spo8bh ',
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
      setCookie(null, 'actived', admin.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })  
      location.href = '/users'
    }

    return;
  }

export {handleSubmit,admin}