'use client'
import { createContext, useRef, useState } from 'react'
import Headers from './components/Headers/headers'
import OurProuduct from './components/OurProduct/our-prouduct'
import TryProduct from './components/TryProduct/try-product'
import TwoColumn from './components/TwoColumn/two-column'
import WhoWeAre from './components/WhoWeAre/who-we-are'

export const MainContext = createContext()

export default function Home() {
  
  const ref = useRef()
  
  return (
    <>
    <MainContext.Provider value={ref}>
    <Headers/>
    <OurProuduct/>
    <TwoColumn/>
    <WhoWeAre/>
    <TryProduct/>
    </MainContext.Provider>
    </>
  )
}
