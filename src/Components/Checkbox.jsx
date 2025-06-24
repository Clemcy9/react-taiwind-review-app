import React from 'react'

function Checkbox({title, opinion1, opinion2}) {
  return (
    <div>
         <div class="mb-4">
            <p> {title} </p>
            <br />
            <div class="flex gap-20">
                 <label htmlFor="" class="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="chioce"  value='Yes'class="hidden"/> {opinion1}
                    <span class="block w-6 h-6 border border-[#00000066] rounded-sm flex items-center justify-center hover:border-blue-500"></span>
                  </label>
            
                  <label htmlFor="" class="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="No" id="" value='Yes'class="hidden"/> {opinion2}
                    <span class="block w-6 h-6 border border-[#00000066] rounded-sm flex items-center justify-center hover:border-blue-500"></span>
                  </label>
            </div>
          </div>
    </div>
  )
}

export default Checkbox