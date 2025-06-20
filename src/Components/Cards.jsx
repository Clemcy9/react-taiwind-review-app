import React from 'react'

function Cards({text, image}) {
  return (
    <div class="border w-full h-93 ml-20 mt-10 rounded-md">
        <img src={image}  className='mt-2 w-full p-4'/>
        <p class="ml-3 text-purple-900">{text}</p>
        <br />
        <button class="border border rounded-md text-base w-62 h-10 text-purple-900 relative ml-3 text-left px-2 mb-30 hover:bg-[#CCD1CF] cursor-pointer">
            Give Feedback <span class="ml-20">⮞</span>
        </button>
    </div>
  )
}

export default Cards