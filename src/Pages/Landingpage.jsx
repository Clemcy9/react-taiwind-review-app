import React from 'react'
import Header from '../Components/Header';
import Main from '../Components/Article';
import FeedbackForm from '../Components/FeedbackForm';
import Midsection from '../Components/Midsection';
import Cardcontainer from '../Components/Cardcontainer';
import Footer from '../Components/Footer';
import ScrollToTop from '../Components/ScrollToTop';

function Landingpage() {
  return (
    <div>
      <ScrollToTop/>
      <Header />
      <Main />
      <FeedbackForm />
      <Midsection />
      <Cardcontainer/>
      <Footer/>
    </div>
  )
}

export default Landingpage;