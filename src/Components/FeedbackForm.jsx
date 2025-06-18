import React from 'react'

function FeedbackForm() {
  return (
    <div className=' mt-20 m-auto w-11/12 border border-[#33026C] rounded min-h-full mb-8 p-8'> 
        <h3 className='text-center text-4xl font-medium' >General Feedback</h3>
        <p className='text-center'>Let us know how your overall experience have been</p>

        <form action="#" className=' m-auto min-w-full px-8 ' >
            <label htmlFor="fullName" className='block '>Name</label> 
            <input type="text " placeholder='Jane Doe' id='fullName' className='min-w-full min-h-10 block m-auto rounded border border-black mb-8 pl-2' />

            <label htmlFor="email" className='block'>Email</label>
            <input type="email" placeholder='janedoe@gmail.com' id='email'className='min-w-full min-h-10 block m-auto border border-black mb-8 pl-2' />
            
            <label htmlFor="feedback" className='block'>Your Feedback</label>
            <textarea name="feedback" id="feedback" placeholder='Type here' className='min-w-full min-h-30 block m-auto border border-black pl-2'></textarea>
        </form>
    </div>
  )
}

export default FeedbackForm