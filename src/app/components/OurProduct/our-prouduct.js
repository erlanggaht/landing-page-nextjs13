import style from '../../page.module.css'
import Card from './Card'


export default function OurProuduct() {
  return (
    <div id='our-product' className={style.ourProduct}>
      <h1 className={style.h1} id='titleOurProduct'>Project</h1>
      <div id='our-product-card' className={style.ourProductCard}> 
      <Card title={'Youtube Downloader'} description ={'Website download video youtube gratis mudah'} link={'https://youtdownloader.vercel.app/'}/>
      <Card  title={'Quran Web'} description ={'Website baca al-quran online'} link={'https://erlanggaht.github.io/webQuran/'}/>
      <Card  title={'Navigasi Web Sederhana'} description ={'Code HTML CSS navigasi sederhana'} link={'https://erlanggaht.github.io/project-testing/Project%20Navigasi/'}/>
      
      </div>
    </div>
  )
}
