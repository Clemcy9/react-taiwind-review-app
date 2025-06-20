import React from 'react'

function Form() {
  return (
    <form class="ml-10 mr-10 border border-purple-900 rounded-md p-20 pl-2 h-190"> 
        <div class="mb-5">
             <h1 class="text-center font-bold text-3xl">General Feedback</h1>
             <br />
             <p class="text-center">Let us know what your overall exprience has been</p>
        </div>
        <br />
        <div class="mb-4 ml-10">
            <label htmlFor="name">Name</label>
            <br />
            <input type="text" name="text" id="" placeholder='Jane Doe'class="w-full px-2 py-2 border rounded-md"/>
        </div>
        <br />
        <div class="mb-4 ml-10">
            <label htmlFor="name">Email</label>
            <br />
            <input type="email" name="email" id="" placeholder='janedoe@gmail.com'class="w-full px-2 py-2 border rounded-md"/>
        </div>
        <br />
        <div class="mb-4 ml-10">
            <label htmlFor="name">Your Feedback</label>
            <br />
            <textarea name="" id="" placeholder='Type here' class="w-full border rounded-md h-70 px-2 py-2"></textarea>
        </div>

        
    </form>
  )
}

export default Form