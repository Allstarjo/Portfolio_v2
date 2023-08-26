import './App.css'
import Header from '../Components/Header/header'
import Home from '../Components/Home/home'
import About from '../Components/About/About'
import Skills from '../Components/Skills/Skills'
import Qualification from '../Components/Qualification/Qualification'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'
import Scrollup from '../Components/Scrollup/scrollup'
import Work from '../Components/Portfolio/portfolio'


function App() {
  return (
    <>
    <Header/>

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Work />
      <Contact />
    </main>
    
    <Footer />
    <Scrollup />
    </>
  )
}


export default App
