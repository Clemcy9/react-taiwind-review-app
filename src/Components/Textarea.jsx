import React from 'react'

function Textarea({title}) {
  return (
    <div>
        <div className='mt-10'>
            <h4> {title} </h4>
            <textarea className="border-1 w-full rounded-xl p-2 h-80 top-0 mb-7" type="text" placeholder="Type here"  />
        </div>
    </div>
  )
}

export default Textarea