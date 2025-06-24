import React, {useState} from 'react'

function Scale() {
    const [value, setValue]=useState(6);
    const handleChange = (e)=>{
    const newValue = parseInt(e.target.value, 10);
    if (newValue >= 1 && newValue <= 10){
          setValue(newValue)
    }};
  return (
    <div>
        <p class="mb-5">On a Scale of 1-10 how would you rate our training?</p> 
        <div class="relative h-6 bg-[#BEBABA] rounded-lg overflow-hidden text-xs">
          <div class="absolute top-0 left-0 h-full bg-[#137802] transition-all duration-300" style={{ width: `${(value / 10) * 100}%`, borderTopRightRadius: "12px",
            borderBottomRightRadius: "12px", borderTopLeftRadius: value === 10 ? "12px" : "0px", borderBottomLeftRadius: value === 10 ? "12px" : "0px",}}>
        </div>
        </div>
        <div class="flex gap-24.5 mb-4 ml-10 relative" >
          <p>0</p>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
        </div>
    </div>
  )
}

export default Scale