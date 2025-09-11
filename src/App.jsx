// import { useState } from 'react'
import Navigation from './components/navigation'
import Profile from './components/aboutMe'
import './App.css'
import Footer from './components/footer'
import Tools from './components/tools'
import Project from './components/project'
import ContactSection from './components/contact'

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Profile></Profile>
      <Tools></Tools>
      {/* <Project></Project> */}
      <ContactSection></ContactSection>
      <Footer></Footer>
    </>
  )
}

export default App
