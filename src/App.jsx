import Navigation from './components/navigation'
import Profile from './components/aboutMe'
import './App.css'
import Footer from './components/footer'
import Tools from './components/tools'
import ContactSection from './components/contact'

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Profile />
        <Tools />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
