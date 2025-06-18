import React from 'react'
import Header from '../Components/Header';
import Main from '../Components/Article';
import FeedbackForm from '../Components/FeedbackForm';
import Midsection from '../Components/Midsection';

function Landingpage() {
  return (
    <div>
      <Header />
      <Main />
      <FeedbackForm />
      <Midsection />
    </div>
  )
}

export default Landingpage;