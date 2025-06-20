import React from 'react'
import Header from '../Components/Header';
import Main from '../Components/Article';
import FeedbackForm from '../Components/FeedbackForm';
import Midsection from '../Components/Midsection';
import Cardcontainer from '../Components/Cardcontainer';
import Footer from '../Components/Footer';

function Landingpage() {
  return (
    <div>
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