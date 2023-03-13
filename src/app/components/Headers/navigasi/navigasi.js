'use client'
import { useEffect, useRef, useState } from "react";
import style from "../../../page.module.css";

export default function Navigasi() {
  const ref = useRef()
  const refArrow = useRef()
  const [arrow,setArrow] = useState(false)
  
 
  const matchmediaTablet = window.matchMedia('(max-width:800px)') 
  const matchmediaMobile = window.matchMedia('(max-width:688px)') 


  useEffect(()=>{
  
      if(matchmediaTablet.matches) {
        const a = ref.current
        a.style.cssText = `
        position:absolute;top:-9999px;left:-9999px
        `
        
  
      }
  
   
  },[])

  useEffect(() => {
    if(matchmediaMobile.matches) {
      const a = ref.current
      a.style.cssText = `
      position:absolute;top:-9999px;left:-9999px;transition : ease-in-out .2s
      `
      refArrow.current.style.transform = 'rotate(90deg)'
    }
  },[]) 
  function refHandle (){
    setArrow(true)
    if(matchmediaMobile.matches) {
      ref.current.style.cssText = `position:inline;color:#555;padding:10px;border-radius:0 0 3px 3px;transition : ease-in-out .2s`
      refArrow.current.style.cssText = 'transform : rotate(0deg);transition : ease-in-out .2s'

    }
    else {
      ref.current.style.cssText = `position:absolute;top:87px;left:45px;background:#fff;color:#555;padding:10px;border-radius:0 0 3px 3px;transition : ease-in-out .2s`
      refArrow.current.style.cssText = 'transform : rotate(90deg);transition : ease-in-out .2s'
    }
 
  }

  function resetRef () {
    
    setArrow(false)
    ref.current.style.cssText = `position:absolute;top:-9999px;left:-9999px;transition : ease-in-out .2s
    `
    refArrow.current.style.cssText = 'transform : rotate(0deg);transition : ease-in-out .1s'
   
  }

  return (
    <div id="navigasi" className={style.navigasi}>
      <div id="title-menuNav" className={style.titlemenuNav}>
        <span className={style.title}>Erlanggaht.</span>
        <div id="listMenu" className={style.listMenu} ref={refArrow} onClick={() => arrow === false ? refHandle() : resetRef() }>
        {matchmediaTablet.matches ? <span className={style.arrowMobile} style={{fontSize:"1.4rem",display:"inline-block",fontWeight:"bolder"}}>{'>'}</span> : ""}
        </div>
        <div id="listMenu" className={style.listMenu} ref={ref}>
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
