import React from 'react'
import Navbar from './pages/components/Navbar'
import Page from './pages/components/Page'
import General from './pages/components/General'
import Banner from './pages/components/Banner'
import Grid from './pages/components/Grid'
import Card from './pages/components/Card'
import Footer from './pages/components/Footer'
import Form from './pages/components/Feedback form/Form'
import LandingPage from './pages/LandingPage'
import FeedBack from './pages/FeedBack'

function App() {
  return (
    <div class= "box-border">
      <Navbar/>
      <Page/>
      <General/>
      <Banner/>
      <Grid/>
      {/* <Card/> */}
      <Footer/>
      <Form/>
      <LandingPage/>
      <FeedBack/>
    </div>
   
  )
}

export default App