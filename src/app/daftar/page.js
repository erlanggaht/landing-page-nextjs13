'use client'
import Link from 'next/link'
import '../login/login.css'
import style from '../page.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
export default function Register() {

const formik = useFormik({
  initialValues : {
    name : "",
    password : ""
  },
 validationSchema : Yup.object({
  name : Yup.string().max(25).required('data tidak boleh kosong'),
  password : Yup.string().max(10).required('data tidak boleh kosong')
 }),
 onSubmit: values => {

  if(formik.values.name === ""){
    formik.setFieldValue('name', false)
    
  }  
  if (formik.values.password === "") {
    formik.setFieldValue('password', false)
  } 

},
})


const handleForm = (event) => {
  const {target} = event
  formik.setFieldValue(target.name, target.value)
}


  return (
    <>
    <title>Register</title>

    <div id='register'>


{/* {LoadingComp && 
<div id="Loading" className="Loading">
<Loading/>
</div>  } */}

<div id="LoginPage" className="LoginPage">
 <h1 className={style.title} style={{ textAlign: "center",fontSize:"3rem" }}>
    Register
 </h1>
 <div id="form-container">
<div className='formsdiv'>
 <form onSubmit={formik.handleSubmit}>
   <div className="input-username">
   <label >Username :</label>
   <input type="text" id="name" name="name" placeholder="Masukan username"  style={{borderColor: "inherit",borderColor:formik.errors.name ? "red" : 'inherit'}}  onChange= {handleForm} />
   <p className={style.p} style={{padding:'.5rem 1.5rem',color:'red'}}>{formik.errors.name ? formik.errors.name : ""}</p>
   </div>
   <div className="input-password" >
   <label>Password :</label>
   <input type="password" id="password" name="password" placeholder="Masukan password"  style={{borderColor:"inherit",borderColor:formik.errors.password ? "red" : 'inherit'}}  onChange={handleForm}/>
   <p className={style.p} style={{padding:'.5rem 1.5rem',color:'red'}}>{formik.errors.password ? formik.errors.password : ""}</p>

   </div>
   <p className={style.p} style={{color: "blue",fontStyle:"italic",textAlign:"right",padding:"6px 20px"}}></p>
   <div className="button-area">
   <Link href={'/'}>Home</Link><button type="submit" className={style.btnLogin} > Register </button>
   </div>
 </form>
 </div>
 </div>
</div>
</div>
</>
  )
}
