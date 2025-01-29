import { memo } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 1000, 
    easing: "ease-in-out", 
    once: true, 
    offset: 100,
});


const App = memo(() => {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
});

export default App
