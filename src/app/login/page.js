'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import style from "../page.module.css";
import "./login.css";
import {admin, handleSubmit} from "./validation";
import {parseCookies} from 'nookies'
import { redirect } from "next/navigation";
import Loading from "../components/Loading/loading";
export default function Page() {
  const [username,setUsername] = useState()
  const [password,setPassword] = useState()
  const [LoadingComp,setLoadingComp] = useState(false)
  const [validationInput,setValidationInput] = useState({
    massage : "",
    success : Boolean
  })
  
  const cookies = parseCookies()
  if(cookies.actived === admin.token) {
    useEffect(() => setActiveLogin(true),[])
    redirect('/users')
  } 

  return (
    <>

<title>Login</title>


     {LoadingComp && 
    <div id="Loading" className="Loading">
    <Loading/>
    </div>  }
   
    <div id="LoginPage" className="LoginPage">
      <h1 className={style.title} style={{ textAlign: "center",fontSize:"3rem" }}>
         Login
      </h1>
      <div id="form-container">
    <div className='formsdiv'>
      <form>
        <div className="input-username">
        <label >Username :</label>
        <input type="text" id="name" name="name" placeholder="Masukan username" required onChange={(e) => setUsername(e.target.value.toUpperCase())} style={{borderColor:!validationInput.success ? "red" : "inherit"}}/>
        
        </div>
        <div className="input-password" >
        <label>Password :</label>
        <input type="password" id="password" name="password" placeholder="Masukan password" required onChange={(e) => setPassword(e.target.value.toUpperCase())} style={{borderColor:!validationInput.success ? "red" : "imherit"}} />
        </div>
        <p className={style.p} style={{color:validationInput.success ? "blue":"red",fontStyle:"italic",textAlign:"right",padding:"6px 20px"}}>{validationInput.message}</p>
        <div className="button-area">
        <Link href={'/'}>Home</Link><button type="submit" className={style.btnLogin} onClick={(e) => handleSubmit(e,username,password,setValidationInput)}> Login </button>
        </div>
      </form>
      </div>
      </div>
    </div>

    </>
      );
}

