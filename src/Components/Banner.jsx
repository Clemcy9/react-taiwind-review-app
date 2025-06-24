import React from 'react'

function Banner() {
  return (
    <div>
        <main className="bg-violet-950 flex justify-between h-87 mt-10 mb-10 pt-8">
            <section className="ml-23 text-white">
                <div className="font-bold text-4xl mb-15 ">Innovate. Connect. Transform</div>
                <div className=" mb-15 w-145.67 text-3xl">Your Tech future with <br /> Netisen ICT</div>
                <div>
                    <button className="bg-green-700 p-2 rounded-xl text-white cursor-pointer">Visit our website to learn more</button>
                </div>
            </section>
            <section className="mr-23">
                <img className="w-520.35 h-70" src="class-img.png" alt="Banner image" />
            </section>
        </main>
    </div>
  )
}

export default Banner