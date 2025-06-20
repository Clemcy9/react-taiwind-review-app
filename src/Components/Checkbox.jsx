import React from 'react'

function Checkbox() {
  return (
    <div className=' items-center gap-10 my-4'>
        <div className='flex items-center gap-10 my-6'> 
        <label className='flex items-center gap-2'>Yes
            <input type="checkbox" name="yes" value="yes" className='w-8 h-8' />
        </label>
        <label className='flex items-center gap-2'>No
            <input type="checkbox" name="no" value="no" className='w-8 h-8' />
        </label>

        </div>

      <div> 
      <label htmlFor="typehere">If No, please tell us why</label> 
      <input type="text " placeholder='Type here' id='typehere' className=' my-2 min-w-full min-h-10 block rounded border border-black mb-8 pl-2' />
      </div>
    </div>
  )
}

export default Checkbox