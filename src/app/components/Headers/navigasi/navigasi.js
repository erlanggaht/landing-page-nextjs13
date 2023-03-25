'use client'
import Link from "next/link";
import { destroyCookie } from "nookies";
import { useRef} from "react";
import style from "../../../page.module.css";
import  {redirect} from 'next/navigation'

export default function Navigasi({activeLogin}) {
  const ref = useRef()
  
  function handleLogout() {
    destroyCookie(null,'actived')
    redirect('/login')
  }

  return (
    <div id="navigasi" className={style.navigasi}>
      <div id="title-menuNav" className={style.titlemenuNav}>
        <Link href={'/'}><span className={style.title}>Erlanggaht.</span></Link>
        <div id="listMenu" className={style.listMenu}>
          <span id='arrowMenu'className={style.arrowMobile} style={{fontSize:"1rem",display:"inline-block",fontWeight:"bolder",textShadow:"1px 2px #ccc"}} > &#10148; </span> 
        </div>
        <div id="listMenu" className={'navigasi-menu'} ref={ref}>
          <div id={'menu'}>
          <span className={style.menu}>Home</span>
          <span className={style.menu}>About</span>
          <span className={style.menu}>Contact</span>
          </div>
        </div>
      </div>
      <div id="call-log-reg" className={style.CallLogReg}>
        <span id="callUs" className={style.callUs}>Call us</span>
        <button className={style.btnRegister}>Register</button>
        {activeLogin ? <button className={style.btnLogin} onClick={() => handleLogout()}>Logout</button>:  <Link href={'/login'}><button className={style.btnLogin}>Login</button></Link>
}
      


      </div>
    </div>
  );
}
