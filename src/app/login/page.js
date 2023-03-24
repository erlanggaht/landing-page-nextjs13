'use client'
import { useState } from "react";
import style from "../page.module.css";
import "./login.css";
import {handleSubmit,admin} from "./validation";
 


export default function Page() {

  
  const [username,setUsername] = useState()
  const [password,setPassword] = useState()
  const [validationInput,setValidationInput] = useState({
    massage : "",
    success : Boolean
  })
  return (
    <>
        <title>Login</title>
    <div id="LoginPage" className="LoginPage">
      <h1 className={style.title} style={{ textAlign: "center",fontSize:"3rem" }}>
         Login
      </h1>
      <div id="form-container">
    <div className='formsdiv'>
      <form>
        <div className="input-username">
        <label >Username :</label>
        <input type="text" id="name" name="name" placeholder="Masukan username" required onChange={(e) => setUsername(e.target.value.toUpperCase())} style={{borderColor:!validationInput.success ? "red" : ""}}/>
        
        </div>
        <div className="input-password" >
        <label>Password :</label>
        <input type="password" id="password" name="password" placeholder="Masukan password" required onChange={(e) => setPassword(e.target.value.toUpperCase())} style={{borderColor:!validationInput.success ? "red" : ""}} />
        </div>
        <p className={style.p} style={{color:validationInput.success ? "blue":"red",fontStyle:"italic",textAlign:"right",padding:"6px 20px"}}>{validationInput.message}</p>
        <div className="button-area">
        <button type="submit" className={style.btnLogin} onClick={(e) => handleSubmit(e,username,password,setValidationInput)}> Login </button>
        </div>
      </form>
      </div>
      </div>
    </div>

    </>
      );
}

