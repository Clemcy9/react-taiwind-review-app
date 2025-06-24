import React from 'react'

function Buttons(btn) {
  return (
    <div>
        <button class= " p-1 rounded-3xl w-33 mr-25 bg-green-700 text-white cursor-pointer hover:z-10" >
            {btn.text}
        </button>
    </div>
  )
}

export default Buttons