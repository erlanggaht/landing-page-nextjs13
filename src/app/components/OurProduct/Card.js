import Image from 'next/image'
import style from '../../page.module.css'
import hackerimg from '../../assests/hacker-undraw.svg'
export default function Card() {
  return (
    <div id='card' className={style.card}>
      <p className={style.p} style={{padding:"1.3rem 2rem",color:"#A0A3AC",wordSpacing:'1px'}}> Doctors &  Healtcare  institutions </p> 
      <Image src={hackerimg} height={'200'} width={'200'} alt="hackerimgdraw" style={{width:'100%',height:"auto",margin:"0rem 0 1.5rem 0"}} />
      <div className={style.contentCard}>
      <h2 className={style.h2}><span style={{color:"#2752c4"}}>E</span>-doctor</h2>
      <p className={style.p} style={{color:"#A0A3AC",margin:"1rem 0",wordSpacing:'2px',lineHeight:'1.2rem'}}>Better handle patient endquires, Review files, receive payment and consult remotly. Share scans securely</p>
      <span style={{fontSize:"1.5rem",color:'#2752c4'}}>&#8594;</span>
      </div>
    </div>
  )
}
