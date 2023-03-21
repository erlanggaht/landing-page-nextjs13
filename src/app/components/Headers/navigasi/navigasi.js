'use client'
import Link from "next/link";
import { useRef, useState} from "react";
import style from "../../../page.module.css";

export default function Navigasi() {
  const ref = useRef()
  const [navMenu,setNavMenu] = useState(false)

  function MenuHandle() {
    setNavMenu(!navMenu ? true : false)

    var matchMedia = window.matchMedia('(max-width:884px)')

  

    function windowScroll () {
     window.onscroll = () =>  {
        setNavMenu(false)
       }
      
    }
    if(matchMedia.matches) {
      !navMenu ? windowScroll() : ""       
    } else {
      return
    }
  }



  return (
    <div id="navigasi" className={style.navigasi}>
      <div id="title-menuNav" className={style.titlemenuNav}>
        <span className={style.title}>Erlanggaht.</span>
        <div id="listMenu" className={style.listMenu}>
          <span className={style.arrowMobile} style={{fontSize:"1rem",display:"inline-block",fontWeight:"bolder",transform:`rotate(${navMenu ? '0deg' : '90deg'})`,textShadow:"1px 2px #ccc"}} onClick={() => MenuHandle()} > {!navMenu ? 'menu' : ""} &#10148; </span> 
        </div>
        <div id="listMenu" className={!navMenu ? style.navigasiHidden : style.listMenu} ref={ref}>
          <div id={!navMenu ? '' : 'menu'}>
          <span className={style.menu}>Home</span>
          <span className={style.menu}>About</span>
          <span className={style.menu}>Contact</span>
          </div>
        </div>
      </div>
      <div id="call-log-reg" className={style.CallLogReg}>
        <span id="callUs" className={style.callUs}>Call us</span>
        <button className={style.btnRegister}>Register</button>
        <Link href={'/login'}><button className={style.btnLogin}>Login</button></Link>

      </div>
    </div>
  );
}
