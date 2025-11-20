import React, { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Aboutt from './components/Aboutt.jsx'
import Faq from './components/Faq.jsx'
import Blue from './components/Blue.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {

   useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('.main'),
      smooth: true,
      multiplier: 1,
      lerp: 0.2
    });

    return () => {
      scroll.destroy(); 
    };
  }, []);


  return (
    <div >
      <CustomCursor/>
        <Home/>
        <About/>
         <Services/>
         <Aboutt/>
         <Faq/>
         <Blue/>
         <Contact/>
        <Footer/>
    </div>
  )
}

export default App