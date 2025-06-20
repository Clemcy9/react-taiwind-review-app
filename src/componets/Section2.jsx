import React from 'react'
import Button from './Button'

function Section2() {
  return (
    <div className="mt-15 grid grid-cols-2 gap-4 bg-[#33026C] text-white p-6 rounded ">
        <div className="m-auto">
            <h2 className="text-4xl font-sans font-bold">
              Innovate, Connect, Transform
            </h2>
        <p className="text-white font-medium mt-6 text-2xl">
            Your Tech Future With <br /> Netisens ICT
        </p>

          <Button
            type="submit"
            text="Visit our website to learn more"
            className="mt-6"
          />
        </div>

        <div >
            <img src="/image6.jpg" alt="Feedback" className="w-full h-auto object-cover" />
        </div>
    
    </div>
  )
}

export default Section2