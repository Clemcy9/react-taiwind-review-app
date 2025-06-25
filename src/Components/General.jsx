import React, { useState } from 'react'
import Buttons from './Buttons'
import Bg from '../components/Bg'

function General() {
    const [values, setValues] = useState({
        name:'',
        email:'',
        feedback:''
    })
    
    function handleChange(e){
        const {name, value} = e.target
        setValues({...values, [name]:value})
        // console.log(values)

    }

    // function handleChangeName(e){
    //     setName(e.target.value)
    //     // console.log(e.target)
    // }

    // function handleChangeEmail(e){
    //     setEmail(e.target.value)
    // }

    // function handleChangeFeedback(e){
    //     setFeedback(e.target.value)
    // }

    function handleSubmit(e){
        e.preventDefault()
        console.log(`form values are\nname:${values.name}\nemail:${values.email}\nfeedback:${values.feedback}`)
        
    }

  return (
    <form onSubmit={handleSubmit}>
        <main className="border-2 mx-23 mt-10 rounded-xl mb-10 p-10">
            <section class="text-center">
                <div>
                    <h2 className="font-bold text-2xl mb-1.5">General Feedback</h2>
                </div>
                <div>
                    <h4> Let us know what your overall experience has been</h4>
                </div>
            </section>
            <section className="">
                <div>
                    <h4>Name</h4>
                    <input className="border-1 w-full h-10 rounded-xl p-2 mb-5 " type="text" placeholder="Enter your name" name='name' onChange={handleChange} value={values.name}/>
                </div>
                <div>
                    <h4> Email</h4>
                    <input className="border-1 w-full h-10 rounded-xl p-2 mb-5" type="text" placeholder="janedoe@gmail.com" name='email' onChange={handleChange} value={values.email} />
                </div>
                <div>
                    <h4> Your feedback</h4>
                    <textarea className="border-1 w-full rounded-xl p-2 h-80 top-0 mb-7" type="text" placeholder="Type here" name='feedback' onChange={handleChange} value={values.feedback} />
                </div>
            </section>
            <Bg/>
        </main>
    </form>
  )
}

export default General