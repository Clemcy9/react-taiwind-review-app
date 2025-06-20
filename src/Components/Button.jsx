import React from 'react'

function Button(props) {

    
  return (
    <div>
        <button class="bg-green-600 hover:bg-green-700 text-white cursor-pointer pr-12 mt-4 items-center h-9 px-9 mr-10  rounded text-mt-2 flex justify-center" >
           {props.text} 
        </button >
    </div>
  )
}

export default Button