import React from 'react' 
import DropdownSeclect from '../Components/DropdownSeclect'
import RangeInput from '../Components/RangeInput'
import Checkbox from '../Components/Checkbox'

function Studioform() {
  return (
    <div className='mx-20'>
      <h2 className='text-center font-medium my-12 text-3xl text-[#3B027D]'>Studio</h2>
      <DropdownSeclect />
      <RangeInput />
      <Checkbox />
      <RangeInput />
      <Checkbox />
      <RangeInput />
      <RangeInput />
      <RangeInput />
      <RangeInput />
      <label htmlFor="feedback" className='block text-xl my-4 font-normal'>Do you have any other comments or suggestions for improving this service?</label>
      <textarea name="feedback" id="feedback" placeholder='Type here' className='min-w-full min-h-30 block m-auto rounded border border-black p-5'></textarea>
      {/* <Button text="Contact us" className='mr-20'/> */}
    </div>

  )
}

export default Studioform