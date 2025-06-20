import React from 'react'

function FeedbackForm() {
  return (
    <div className='flex flex-col items-center mt-20 m-auto w-8/9 border-[#33026C] rounded-xl min-h-full   px-6 py-10 gap-10 border-2'> 
      <div className='w-[567px] h-[87px] gap-3'>
        <h3 className='text-center text-[40px] font-medium' >General Feedback</h3>
        <p className='text-center text-2xl font-normal'>Let us know how your overall experience have been</p>
      </div>

      <div className='w-[1189px] p-10 gap-12'>
        <form action="#" className=' m-auto min-w-full  ' >
            <label htmlFor="fullName" className='block text-2xl font-normal'>Name</label> 
            <input type="text " placeholder='Jane Doe' id='fullName' className='min-w-full min-h-10 block m-auto rounded-xl border border-black mb-8 pl-3' />

            <label htmlFor="email" className='block text-2xl font-normal'>Email</label>
            <input type="email" placeholder='janedoe@gmail.com' id='email'className='min-w-full min-h-10 block m-auto rounded-xl border border-black mb-8 pl-3' />
            
            <label htmlFor="feedback" className='block text-2xl font-normal'>Your Feedback</label>
            <textarea name="feedback" id="feedback" placeholder='Type here' className='min-w-full min-h-30 block m-auto rounded-xl border border-black p-5'></textarea>
        </form>
      </div>
    </div>
  )
}

export default FeedbackForm