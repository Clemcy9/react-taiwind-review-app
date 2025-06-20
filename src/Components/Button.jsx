import React from 'react'

function Button({text, className}) {
  return (
        <button className={`${className} bg-[#1B9407] p-2.5 gap-2.5 text-xl font-semibold text-white hover:cursor-pointer hover:bg-[hsl(109,100%,32%)] rounded-xl`} >{text}</button>
        // h-[76px] w-[359px]
  )
}

export default Button