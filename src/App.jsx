// import { useState } from 'react'
import Navigation from './components/navigation'
import Profile from './components/aboutMe'
import './App.css'
import Footer from './components/footer'
import Tools from './components/tools'
import ContactSection from './components/contact'

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Profile></Profile>
      <Tools></Tools>
      <ContactSection></ContactSection>
      <Footer></Footer>
    </>
  )
}

export default App
