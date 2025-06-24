import React, {useState} from 'react'

function Rating( {head, title1, title2}) {
    const [value, setValue]=useState(6);
    const handleChange = (e)=>{
    const newValue = parseInt(e.target.value, 10);
    if (newValue >= 1 && newValue <= 10){
          setValue(newValue)
    }};
  return (
    <div>
        <p class="mb-10 "> {head} </p> 
          <div class="mb-4 gap-4 w-full items-center flex">
              <span class=""> {title1} </span>
                   <div class="relative h-6 bg-[#BEBABA] rounded-lg overflow-hidden text-xs w-full">
          <div class="absolute top-0 left-0 h-full bg-[#137802] transition-all duration-300" style={{ width: `${(value / 10) * 100}%`, borderTopRightRadius: "12px",
            borderBottomRightRadius: "12px", borderTopLeftRadius: value === 10 ? "12px" : "0px", borderBottomLeftRadius: value === 10 ? "12px" : "0px",}}>
        </div>
        </div>
              <span> {title2} </span>
          </div>
    </div>
  )
}

export default Rating