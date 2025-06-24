import React from 'react'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import General from '../components/General'
import Banner from '../components/Banner'
import Cardshouse from '../components/Cardshouse'
import Footer from '../components/Footer'

function Landingpage() {
  return (
    <div>
        <Navbar/>
        <Menu/>
        <General/>
        <Banner/>
        <Cardshouse/>
        <Footer/>
    </div>
  )
}

export default Landingpage