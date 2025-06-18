import React from 'react'
import Teacher from "../assets/baner-pic.png"


function Midsection() {
  return (
    <div className='flex bg-[#33026C] text-white justify-between items-start py-8' >
        <div className='h-[294px] w-[573px] mt-6 ml-20 flex flex-col items-center justify-between' >
            <h3 className="text-4xl font-medium text-white-700 mb-2">Innovate. Connect. Transform</h3>
            <p className="text-4xl text-white-700 leading-relaxed mb-6">Your Tech Future with Netisens ICT</p>
            <button className="bg-[#1B9407] h-10 text-white hover:bg-green-400 rounded-xl px-10 ">Visit our website to learn more</button>
        </div>
        <img src={Teacher} alt="netizens class tutor" className='rounded mr-20' rounded-md  />
    </div>
  )
}

export default Midsection