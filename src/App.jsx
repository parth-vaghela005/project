import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './Pages/HeroSection'
import Offers from './Pages/Offers'
import Ecosystem from './Pages/Ecosystem'
import AppDemo from './Pages/AppDemo'
import BlockParty from './Pages/BlockParty'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Offers/>
    <Ecosystem/>
    <AppDemo/>
    <BlockParty/>
  {/* <HeroSection/> */}
    </>
  )
}

export default App
