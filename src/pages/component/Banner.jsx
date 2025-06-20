import React from 'react'

function Banner() {
  return (
    <div>
        <main class="bg-violet-950 flex justify-between h-87 mt-10 mb-10 pt-8">
            <section class="ml-23 text-white">
                <div class="font-bold text-4xl mb-15 ">Innovate. Connect. Transform</div>
                <div class=" mb-15 w-145.67 text-3xl">Your Tech future with <br /> Netisen ICT</div>
                <div>
                    <button class="bg-green-700 p-2 rounded-xl text-white cursor-pointer">Visit our website to learn more</button>
                </div>
            </section>
            <section class="mr-23">
                <img class="w-520.35 h-70" src="/class-img.png" alt="" />
            </section>
        </main>
    </div>
  )
}

export default Banner