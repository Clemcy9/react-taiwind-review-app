import React from 'react'




function Navbar() {
  return (
    <div>
        <nav class = "bg-violet-950 h-17 flex justify-between p-4 items-center w-full">
            <div class =" ml-25">
                <img class="cursor-pointer" src="/Netisen-logo.png" alt="" />
            </div>
            <div>
                <button class= " p-1 rounded-3xl w-33 mr-25 bg-green-700 text-white cursor-pointer hover:z-10" > Contact Us</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar