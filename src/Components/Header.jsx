import React from 'react'
import Logo from '../assets/Netizens_logo.png'
import Button from './Button';

function Header() {
  return (
      <header className='w-screen max-w-full overflow-x-hidden h-23 bg-[#33026C] flex justify-between  items-center '>
        <img className='ml-20' src={Logo} alt=" Netisens logo" /> 
        <Button text="Contact us" className='mr-20'/>
        
      </header>
  )
}
//<button className='bg-[#1B9407] rounded-xl w-32 h-10 text-white mr-20'>Contact us</button>
export default Header;