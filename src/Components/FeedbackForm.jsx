import React from 'react'

function FeedbackForm() {
  return (
    <div className='ml-20 mt-20 w-11/12 border border-[#33026C] rounded h-100'> 
        <h3 className='text-center text-4xl font-medium' >General Feedback</h3>
        <p className='text-center text-xl'>Let us know how your overall experience have been</p>

        <form action="" className='flex flex-col w-full justify-center gap-x-10'>
            <label htmlFor="">Name</label> 
            <input type="text " className='w-4/5' placeholder='Jane Doe' />

            <label htmlFor="">Email</label>
            <input type="email" placeholder='janedoe@gmail.com' />
            
            <label htmlFor="">Your Feedback</label>
            <input type="textarea" placeholder='Type here' />
            
        </form>
    </div>
  )
}

export default FeedbackForm