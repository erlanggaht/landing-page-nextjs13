import Footer from './components/Footer/footer'
import Headers from './components/Headers/headers'
import OurProuduct from './components/OurProduct/our-prouduct'
import TryProduct from './components/TryProduct/try-product'
import TwoColumn from './components/TwoColumn/two-column'
import WhoWeAre from './components/WhoWeAre/who-we-are'


export default function Home() {
  return (
    <>
    <Headers/>
    <OurProuduct/>
    <TwoColumn/>
    <WhoWeAre/>
    <TryProduct/>
    <Footer/>
    </>
  )
}
