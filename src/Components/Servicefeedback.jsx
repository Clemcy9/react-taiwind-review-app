import React, {useState} from 'react'
import Fdbk from './Fdbk'
import Input from './Input'
import Checkbox from './Checkbox'
import Textarea from './Textarea'
import Scale from './Scale'
import Rating from './Rating'

function Servicefeedback() {
    const [value, setValue]=useState(6);
    const handleChange = (e)=>{
    const newValue = parseInt(e.target.value, 10);
    if (newValue >= 1 && newValue <= 10){
          setValue(newValue)
    }};
  return (
    <div >
        <main className='mx-23 h-430 border-2 my-20 mt-10 rounded-xl p-10'>
            <h2 className='text-center text-4xl mb-10'> Training feedback</h2>
            <section className=''>
                {/* <div>
                    <label htmlFor="name">Course</label>
                    <br />
                    <select className="border-1 w-full h-10 rounded-xl p-2 mb-5 " name="" id="">
                        <option value="Select Course">Select Course</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Cyber Security">Cyber Security</option>
                        <option value="Data Analytics">Data Analytics</option>
                    </select>
                </div> */}
                <div>
                    <label htmlFor="name">Course</label>
                    <Fdbk
                     value1 = "Select Course"
                     value2 = "Web Development"
                     value3 = "Cyber Security" 
                     value4 = "Data Analysis" 
                     />
                </div>
                <div>
                    <h4>Instructor's name</h4>
                    <input htmlFor="Instructor's name" className="border-1 w-full h-10 rounded-xl p-2 mb-5 " type="text" placeholder="Jane Doe"  />
                </div>
                <div>
                    <Scale/>
                </div>
                <div>
                    <Input subject = "What is the most valueable aspect of this training for you? " to="what is the most valueable aspect of this training for you?" place="Type here" />
                </div>
                <div>
                    <Input subject = "What is the least valueable aspect of this training for you?" to = "what is the most valueable aspect of this training for you?" place="Type here"/>
                </div>
                <div>
                    <Checkbox title="Did the training provide you with new skills or knowledge?" opinion1= "Yes" opinion2="No" />
                </div>
                <div>
                    <Rating head= "How would you rate the instructor's knowledge of the course " title1="Poor" title2="Excellent" />
                </div>
                <div>
                    <Rating head= "How would you rate the instructor's teaching methods and mannerism? " title1="Poor" title2="Excellent" />
                </div>
                <div>
                    <Checkbox title = "Was the duration of training appropriate for the content covered?" opinion1="Yes" opinion2="No" />
                </div>
                <div>
                    <Checkbox title = "If no, would you prefer it to be longer or shorter?" opinion1="Longer" opinion2="Shorter" />
                </div>
                <div>
                    <Rating head= "How would you rate the training enviroment(eg. internet access, comfort etc)? " title1="Poor" title2="Excellent" />
                </div>
                <div>
                    <Rating head= "How likely are you to recommend this training to a friend? " title1="Not likely" title2="Extremely likely" />
                </div>
                <div>
                    <Textarea title="Do you have any other comments or suggestions for improving this training for future training?"/>
                </div>
            </section>
        </main>
    </div>
  )
}

export default Servicefeedback