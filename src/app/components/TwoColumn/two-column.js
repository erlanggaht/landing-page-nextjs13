import style from '../../page.module.css'
export default function TwoColumn() {
  return (
    <div id='twoColumn' className={style.twoColumn}>
        <div id='oneColumnContent' className={style.oneColumnContent}>
        <span id='numberColumn1' className={style.numberColumn} style={{color:"#2752C4",fontSize:"3.5rem"}}>63</span> <span id='spanComponent1' className={style.spanComponent}>The number of countries where  doctors and patients love us</span>        
        </div>
        <div id='twoColumnContent' className={style.twoColumnContent}>
        <span id='numberColumn2' className={style.numberColumn} style={{color:"#71F1D7",fontSize:"7rem"}}>&#8734;</span> <span id='spanComponent2'  className={style.spanComponent}>Amount of data securely stored, curated and transmitted.</span>        
        </div>

    </div>
  )
}
