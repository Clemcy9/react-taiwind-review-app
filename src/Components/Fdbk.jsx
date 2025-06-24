import React from 'react'

function Fdbk({value1, value2, value3, value4}) {
  return (
    <div>
            <section className=''>
                <div>
                    <label htmlFor="name"></label>
                    <select className="border-1 w-full h-10 rounded-xl p-2 mb-5 " name="" id="">
                        <option value="Select Course"> {value1} </option>
                        <option value="option1">{value2}</option>
                        <option value="option2">{value3}</option>
                        <option value="option3">{value4}</option>
                    </select>
                </div>
                
            </section>
    </div>
  )
}

export default Fdbk