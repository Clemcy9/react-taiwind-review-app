import React, {useState} from 'react'

function TrainingFeedback() {

  const [value, setValue]=useState(2);

  const handleChange = (e)=>{
  const newValue = parseInt(e.target.value, 10);
  if (newValue >= 1 && newValue <= 10){
        setValue(newValue)
  }

  };
  return (
    <div>
        <form action="" class="p-35">
            <div class="mb-20">
              <h2 class="text-center font-bold text-3xl text-[#3B027D]">Training Feedback</h2>
            </div>
            <div class="mb-4 ml-10">
                <label htmlFor="name">Course</label>
                <br />
                <select class="w-full border rounded-md h-10" name="" id="">
                  <option value="Select Course">Select Course</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Cyber Security">Cyber Security</option>
                  <option value="Data Analytics">Data Analytics</option>
                </select>
            </div>
            <div class="mb-4 ml-10">
            <label htmlFor="name">Instructor's Name</label>
            <br />
            <input type="text" name="text" id="" placeholder='Jane Doe'class="w-full px-2 py-2 border rounded-md"/>
        </div> 
        <br />
        <p class="mb-4 ml-10">On a Scale of 1-10 how would you rate our training?</p> 
        <div class="relative h-6 bg-[#BEBABA] rounded-lg overflow-hidden text-xs ml-10">
          <div class="absolute top-0 left-0 h-full bg-[#137802] transition-all duration-300" style={{ width: `${(value / 10) * 100}%`, borderTopRightRadius: "12px",
            borderBottomRightRadius: "12px", borderTopLeftRadius: value === 10 ? "12px" : "0px", borderBottomLeftRadius: value === 10 ? "12px" : "0px",}}>
        </div>
        </div>
        <div class="flex gap-27.5 mb-4 ml-10 relative">
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
        <br />
         <div class="mb-4 ml-10">
            <label htmlFor="name">What was the most valuable aspect of the training for you?</label>
            <br />
            <input type="text" name="text" id="" placeholder='Type here'class="w-full px-2 py-2 border rounded-md"/>
        </div> 
        <br />
        <div class="mb-4 ml-10">
            <label htmlFor="name">What was the least valuable aspect of the training for you?</label>
            <br />
            <input type="text" name="text" id="" placeholder='Type here'class="w-full px-2 py-2 border rounded-md"/>
        </div> 
        <br />
        <div class="mb-4 ml-10">
            <p>Did the training provide you with new skills or knowledge?</p>
            <br />
            <div class="flex gap-20 items-center">
                 <label htmlFor="" class="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="chioce"  value='Yes'class="hidden"/>Yes
                    <span class="block w-6 h-6 border border-[#00000066] rounded-sm flex items-center justify-center hover:border-blue-500"></span>
                  </label>
            
                  <label htmlFor="" class="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="No" id="" value='Yes'class="hidden"/>No
                    <span class="block w-6 h-6 border border-[#00000066] rounded-sm flex items-center justify-center hover:border-blue-500"></span>
                  </label>
            </div>
          </div>
          <br />
          <p class="mb-4 ml-10">How would you rate the instructor's knowledge of the course</p> 
          <div class="mb-4 ml-9 gap-4 w-full items-center flex">
              <span class="">Poor</span>
                   <div class="relative h-6 bg-[#BEBABA] rounded-lg overflow-hidden text-xs w-full">
          <div class="absolute top-0 left-0 h-full bg-[#137802] transition-all duration-300" style={{ width: `${(value / 10) * 100}%`, borderTopRightRadius: "12px",
            borderBottomRightRadius: "12px", borderTopLeftRadius: value === 10 ? "12px" : "0px", borderBottomLeftRadius: value === 10 ? "12px" : "0px",}}>
        </div>
        </div>
              <span>Excellent</span>
          </div>
          <br />
          <p class="mb-4 ml-10">How would you rate the instructor's teaching methods and overall mannerism</p> 
          <div class="mb-4 ml-9 gap-4 w-full items-center flex">
              <span class="">Poor</span>
                   <div class="relative h-6 bg-[#BEBABA] rounded-lg overflow-hidden text-xs w-full">
          <div class="absolute top-0 left-0 h-full bg-[#137802] transition-all duration-300" style={{ width: `${(value / 10) * 100}%`, borderTopRightRadius: "12px",
            borderBottomRightRadius: "12px", borderTopLeftRadius: value === 10 ? "12px" : "0px", borderBottomLeftRadius: value === 10 ? "12px" : "0px",}}>
        </div>
        </div>
              <span>Excellent</span>
          </div>
          <br />
          <div class="mb-4 ml-10">
            <p>Was the training duration appropriate for the content covered?</p>
            <br />
            <div class="flex gap-20 items-center">
                 <label htmlFor="" class="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="chioce"  value='Yes'class="hidden"/>Yes
                    <span class="block w-6 h-6 border border-[#00000066] rounded-sm flex items-center justify-center hover:border-blue-500"></span>
                  </label>
            
                  <label htmlFor="" class="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="No" id="" value='Yes'class="hidden"/>No
                    <span class="block w-6 h-6 border border-[#00000066] rounded-sm flex items-center justify-center hover:border-blue-500"></span>
                  </label>
            </div>
          </div>
          <br />
          <div class="mb-4 ml-10">
            <p>If No, would you prefer it to be longer or shorter?</p>
            <br />
            <div class="flex gap-20 items-center">
                 <label htmlFor="" class="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="chioce"  value='Yes'class="hidden"/>Longer
                    <span class="block w-6 h-6 border border-[#00000066] rounded-sm flex items-center justify-center hover:border-blue-500"></span>
                  </label>
            
                  <label htmlFor="" class="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="No" id="" value='Yes'class="hidden"/>Shorter
                    <span class="block w-6 h-6 border border-[#00000066] rounded-sm flex items-center justify-center hover:border-blue-500"></span>
                  </label>
            </div>
          </div>
          <br />
          <p class="mb-4 ml-10">How would you rate the training environment methods (eg.internet access, comfort etc.)?</p> 
          <div class="mb-4 ml-9 gap-4 w-full items-center flex">
              <span class="">Poor</span>
                   <div class="relative h-6 bg-[#BEBABA] rounded-lg overflow-hidden text-xs w-full">
          <div class="absolute top-0 left-0 h-full bg-[#137802] transition-all duration-300" style={{ width: `${(value / 10) * 100}%`, borderTopRightRadius: "12px",
            borderBottomRightRadius: "12px", borderTopLeftRadius: value === 10 ? "12px" : "0px", borderBottomLeftRadius: value === 10 ? "12px" : "0px",}}>
        </div>
        </div>
              <span>Excellent</span>
          </div>
          <br />
          <p class="mb-4 ml-10">How likely are you recommend this training to a friend?</p> 
          <div class="mb-4 ml-9 gap-4 w-full items-center flex">
              <span class="">Not likely</span>
                   <div class="relative h-6 bg-[#BEBABA] rounded-lg overflow-hidden text-xs w-full">
          <div class="absolute top-0 left-0 h-full bg-[#137802] transition-all duration-300" style={{ width: `${(value / 10) * 100}%`, borderTopRightRadius: "12px",
            borderBottomRightRadius: "12px", borderTopLeftRadius: value === 10 ? "12px" : "0px", borderBottomLeftRadius: value === 10 ? "12px" : "0px",}}>
        </div>
        </div>
              <span class="text-sm white">Extremely likely</span>
          </div>
        </form>
    </div>
  )
}

export default TrainingFeedback