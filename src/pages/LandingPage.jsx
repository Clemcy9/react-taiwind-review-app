import React from 'react'
import Navbar from '../Components/Navbar'
import IntroSection from '../Components/IntroSection'
import Form from '../Components/Form'
import HeroSection from '../Components/HeroSection'
import HouseOfCards from '../Components/HouseOfCards'
import Footer from '../Components/Footer'

function LandingPage() {
  return (
    <div>
        <Navbar/>
        <IntroSection/>
        <Form/>
        <HeroSection/>
        <HouseOfCards/>
        <Footer/>
    </div>
  )
}

export default LandingPage