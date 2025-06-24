import React from 'react'

function Greenbtn(green) {
  return (
    <div>
        <button className='p-4 border-2 border-white text-white bg-violet-950 rounded-4xl w-30 hover:cursor-pointer'>
            {green.text}
        </button>
    </div>
  )
}

export default Greenbtn