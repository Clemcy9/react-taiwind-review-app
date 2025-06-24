import React from 'react'

function Button({text, variant = 'landing',}) {

  const variants = {
    landing: 'bg-green-600 hover:bg-green-700 text-white',
    submit: 'bg-[#3B027D] hover:bg-[#0D0251] text-white w-46',
    backToHome: 'bg-[#FFFFFF] hover:bg-[#F9F6F3] text-[#3B027D] border'
  }
    
  return (
    <div>
        <button class={`${variants[variant]}  cursor-pointer pr-12 mt-4 items-center h-9 px-9 mr-10  rounded text-mt-2 flex justify-center`} >
           {text} 
        </button >
    </div>
  )
}

export default Button