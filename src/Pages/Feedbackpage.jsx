import React from 'react'
import Teacher from "../assets/teacher.jpg"

function Feedbackpage() {
  return (
    <div className='flex bg-[#3D0073] text-white justify-around' >
        <div  >
            <h3 className="text-2xl font-medium text-white-700 mb-2">Innovate. Connect. Transform</h3>
            <p className="text-base text-white-700 leading-relaxed mb-6">Your Tech Future with Netisens ICT</p>
            <button className="bg-green-500 hover:bg-green-400 rounded px-2">Visit our website to learn more</button>
        </div>
        <img src={Teacher} alt="nn" className='rounded w-40 h-32' rounded-md  />
    </div>
  )
}

export default Feedbackpage