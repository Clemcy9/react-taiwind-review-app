import React from 'react'

function General() {
  return (
    <div>
        <main class="border-2 mx-23 mt-10 rounded-xl mb-25 p-10">
            <section class="text-center">
                <div>
                    <h2 class="font-bold text-2xl mb-1.5">General Feedback</h2>
                </div>
                <div>
                    <h4> Let us know what your overall experience has been</h4>
                </div>
            </section>
            <section class="">
                <div>
                    <h4>Name</h4>
                    <input class="border-1 w-full h-10 rounded-xl p-2 mb-5 " type="text" placeholder="Enter your name"  />
                </div>
                <div>
                    <h4> Email</h4>
                    <input class="border-1 w-full h-10 rounded-xl p-2 mb-5" type="text" placeholder="janedoe@gmail.com"  />
                </div>
                <div>
                    <h4> Your feedback</h4>
                    <textarea class="border-1 w-full rounded-xl p-2 h-80 top-0 mb-7" type="text" placeholder="Type here"  />
                </div>
            </section>
        </main>
    </div>
  )
}

export default General