import React from 'react'
import Buttons from './Buttons'
import Midbtns from './Midbtns'
import Greenbtn from './Greenbtn'

function Feedbackbtn() {
  return (
    <div className='text-center'>
        <section className='mb-10'>
            <Greenbtn text = "Submit" />
        </section>
        <section className='mb-10'>
            <Midbtns className="border-2" text = "Back to home" />
        </section>
    </div>
  )
}

export default Feedbackbtn