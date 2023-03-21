import './globals.css'
import {Roboto} from "next/font/google"
import Navigasi from './components/Headers/navigasi/navigasi'
import Footer from './components/Footer/footer'
const roboto = Roboto({ subsets: ['latin'],weight:['100','300','400','500','700'] })


export const metadata = {
  title: 'LandingPage Erlanggaht',
  description: 'Nextjs Framework',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navigasi/>
        {children}
        <Footer/>

      </body>
    </html>
  )
}
