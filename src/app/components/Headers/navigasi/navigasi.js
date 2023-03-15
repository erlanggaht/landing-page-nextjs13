'use client'
import { useRef, useState} from "react";
import style from "../../../page.module.css";

export default function Navigasi() {
  const ref = useRef()
  const [navMenu,setNavMenu] = useState(false)

  function MenuHandle() {
    setNavMenu(!navMenu ? true : false)

  }

  return (
    <div id="navigasi" className={style.navigasi}>
      <div id="title-menuNav" className={style.titlemenuNav}>
        <span className={style.title}>Erlanggaht.</span>
        <div id="listMenu" className={style.listMenu}>
          <span className={style.arrowMobile} style={{fontSize:"1.3rem",display:"inline-block",fontWeight:"bolder",transform:`rotate(${navMenu ? '0deg' : '90deg'})`}} onClick={() => MenuHandle()}> {'>'}</span> 
        </div>
        <div id="listMenu" className={!navMenu ? style.navigasiHidden : style.listMenu} ref={ref}>
          <span className={style.menu}>Home</span>
          <span className={style.menu}>About</span>
          <span className={style.menu}>Contact</span>
        </div>
      </div>
      <div id="call-log-reg" className={style.CallLogReg}>
        <span id="callUs" className={style.callUs}>Call us</span>
        <button className={style.btnRegister}>Register</button>
        <button className={style.btnLogin}>Login</button>

      </div>
    </div>
  );
}
