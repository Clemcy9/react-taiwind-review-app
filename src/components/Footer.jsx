import React from 'react'
import logo from '../assets/Logo.png'
import copyright from '../assets/copyright.png'

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[rgba(19,120,2,1)] to-[rgba(35,2,74,1)]  mt-10 h-51 ">
    <div>
      <img src={logo} alt="Logo" className='w-40 '/>  
    </div>
    <div className='h-10 mt-26 text-center '> 
      <hr className="border-t border-gray-300" />
      <h6 className='text'>Copyright  <br/>  2025 Netizens ICT, All rights reserved
        <img src={copyright} alt="copyright" className='ml-167 w-4 -mt-10.5'  />
      </h6>
    </div>
    </footer>
  )
}

export default Footer
