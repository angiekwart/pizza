import { useState } from 'react'
import './App.css'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Pizza from './Components/Video'
import Body from './Components/Body'
import Menu from './Components/Menu'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Pizza/>
        <Body/>
        <About/>
        <Menu/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App
