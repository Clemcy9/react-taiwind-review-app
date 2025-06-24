import React from 'react'

function Midbtns(butt) {
  return (
    <div>
        <button className='p-2 border-2 border-none text-violet-800 rounded-4xl hover:underline cursor-pointer'>
            {butt.text}
        </button>
    </div>
  )
}

export default Midbtns