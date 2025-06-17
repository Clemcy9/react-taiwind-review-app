import React from 'react'
import logo from '../assets/Netizens_logo.png'
function Header() {
  return (
    <div >
      <header className='h-14 bg-[#33026C] flex justify-between items-center '>
     <img className='ml-20' src={logo} alt="hgchgchg" /> 
     <button className='bg-[#1B9407] rounded w-32 h-10 text-white mr-20'>Contact us</button>
      </header>

    </div>
  )
}

export default Header;