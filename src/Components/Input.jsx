import React from 'react'

function Input({subject, to, place}) {
  return (
    <div>
        <div>
            <h4>{subject}</h4>
            <input htmlFor={to} className="border-1 w-full h-10 rounded-xl p-2 mb-5 " type="text" placeholder={place}  />
        </div>
    </div>
  )
}

export default Input