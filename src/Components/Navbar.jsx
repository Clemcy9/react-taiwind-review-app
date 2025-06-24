import React from 'react'
import Buttons from './Buttons'





function Navbar() {
    const Me = "Holla Holla"
  return (
    <div>
        <nav className = "bg-violet-950 h-17 flex justify-between p-4 items-center w-full">
            <div className =" ml-25">
                <img className="cursor-pointer" src="/Netisen logo.png" alt="" />
            </div>
            <div>
                <Buttons text="Contact Us" />
            </div>
        </nav>
    </div>
  )
}

export default Navbar