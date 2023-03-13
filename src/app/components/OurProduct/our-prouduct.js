import style from '../../page.module.css'
import Card from './Card'


export default function OurProuduct() {
  return (
    <div id='our-product' className={style.ourProduct}>
      <h1 className={style.h1} id='titleOurProduct'>Our product</h1>
      <div id='our-product-card' className={style.ourProductCard}> 
      <Card/>
      <Card/>
      <Card/>
      
      </div>
    </div>
  )
}
