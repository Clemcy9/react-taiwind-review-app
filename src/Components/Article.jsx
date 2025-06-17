import React from 'react'
import InfoGraphic from '../assets/infographics.png'

function Article() {
  return (
    <div className='flex flex-wrap items-center justify-between ' >
        <div className='ml-20 max-w-lg'>
         <h1 className='text-4xl font-bold text-[#33026C] '>AT NETIZENS ICT <br/> WE VALUE YOUR FEEDBACK</h1>
         <p className='mt-6 max-w-lg'>Tell us how satisified you are with our services and how can we serve you better</p>
         </div>
       
       <div className='mr-20 max-w-md mt-10 md:mt-0'>
        <img src={InfoGraphic} alt="info graohics"/>
       </div>
       
    </div>
  )
}

export default Article