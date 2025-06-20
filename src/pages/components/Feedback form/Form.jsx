import React from 'react'

function Form() {
  return (
    <div>
        <main>
            <h1 class="text-4xl text-center mt-20"> Training Feedback</h1>
        </main>
        <section class=" mx-23 mt-10 rounded-xl mb-1 p-10">
            <div>
                <h4>Course</h4>
                <input class="border-1 w-full h-10 rounded-xl p-2 mb-5 " type="text" placeholder="Web Development"  />
            </div>
            <div>
                <h4>Instructor's Name</h4>
                <input class="border-1 w-full h-10 rounded-xl p-2 mb-5 " type="text" placeholder="John Doe"  />
            </div>
            {/* <div>
                <h4>On a Scale of 1-10 how would you rate our training?</h4>
                <div class="flex flex-col">
                    <img className='w-full rounded shadow' src="/Line.png" alt="" />
                    <img className='w-full rounded shadow' src="/Line2.png" alt="" />
                </div>
                <img src="/Numbers.png" alt="" />
            </div> */}
            <div class="mb-5">
                <h4>What's the most valueable part of the training for you?</h4>
                <input class="border-1 w-full h-10 rounded-xl p-2 mb-5 " type="text" placeholder="type here"  />
            </div>
            <div class="mb-5">
                <h4>What's the least valueable part of the training for you?</h4>
                <input class="border-1 w-full h-10 rounded-xl p-2 mb-5 " type="text" placeholder="type here"  />
            </div>
            <div class="mb-5">
                <h4>Did the trainind provide you with new skills?</h4>
                <div class="flex "> 
                    <div class="flex">
                        <div>Yes</div>
                        <div class="ml-2"> <input type="checkbox" /></div>
                    </div>
                    <div class="flex ml-15">
                        <div>No</div>
                        <div class="ml-2"> <input type="checkbox" /></div>
                    </div>
                </div>
            </div>
            <div></div>
            <div></div>
            <div class="mb-5">
                 <h4>Was the training period adequate for the content covered?</h4>
                <div class="flex "> 
                    <div class="flex">
                        <div>Yes</div>
                        <div class="ml-2"> <input  type="checkbox" /></div>
                    </div>
                    <div class="flex ml-15">
                        <div>No</div>
                        <div class="ml-2"> <input type="checkbox" /></div>
                    </div>
                </div>
            </div>
            <div class="mb-5">
                 <h4>If no, would you prefer it to be longer or shorter?</h4>
                <div class="flex "> 
                    <div class="flex">
                        <div  class=""> Longer</div>
                        <div> <input class="ml-2" type="checkbox" /></div>
                    </div>
                    <div class="flex ml-15">
                        <div>Shorter</div>
                        <div> <input class="ml-2" type="checkbox" /></div>
                    </div>
                </div>
            </div>
            <div></div>
            <div></div>
            <div class="mb-5">
                <h4>Do you have any comments or suggestions for improving this training for future trainings?</h4>
                 <textarea class="border-1 w-full rounded-xl p-2 h-50 top-0 mb-7" type="text" placeholder="Type here"  />
            </div>
        </section>
        <section class="text-center">
            <div class="mb-5 ">
                <button class="bg-violet-950 text-white  p-2 rounded-3xl w-40 cursor-pointer mb-5"> Submit</button>
            </div>
            <div class="mb-5">
                <button class="bg-white text-violet-950  p-2 rounded-3xl w-40 cursor-pointer border-1 mb-5">Back to home</button>
            </div>
        </section>
    </div>
  )
}

export default Form