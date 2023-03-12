import Image from "next/image";
import style from "../../../page.module.css";
import programmerUndraw from '../../../assests/programmer-undraw.svg'
export default function MainContent() {
  return (
    <div id="main-content" className={style.mainContent}>
      <div id="content" className={style.content}>
        <h1 style={{width:"70%",letterSpacing:"0px",color:"#182957",fontSize:'2.3rem'}}>Simplifying access to specialized healthcare</h1>
        <p style={{margin:"1rem 0",width:"60%",textAlign:"justify",fontSize:".9rem",color:"#A0A3AC"}}>
          We build an <span style={{color : "#2752C4",fontSize:".9rem",width:"100vw"}}>E - toolbox</span> to link patients and doctors in a new and
          modern way to improve their effinciency
        </p>
        <button className={style.btnLearnMore} style={{margin:'1rem 0'}}> Learn more <span style={{paddingLeft:'.7rem',fontSize:"1rem",fontWeight:"normal"}}>{'>'}</span> </button>
      </div>
      <div id="image-content">
        <Image src={programmerUndraw} height="200" width='200' style={{width:'auto',height:"auto"}} alt={'image-undraw-programer'} className={style.imgcontent}/>
      </div>
      <p style={{padding:"1rem 0"}}><span style={{color : "#2752C4",fontSize:".9rem",width:"100vw"}}> <span style={{transform:"rotate(90deg)",display:"inline-block"}}>&#10148;</span> Scroll down</span> to read more </p>
    </div>
  );
}
