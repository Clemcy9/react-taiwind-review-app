import React from 'react'
import Card from './Card'

function Cardshouse() {
  return (
    <div>
        <section class="mb-7">
            <div class="text-center font-bold text-2xl">
              <h1>Services feedback</h1>
            </div>
            <div>
              <h4 class="text-center">Let us know what your experience with eny of <br />our services has been</h4>
            </div>
        </section>
        <section className='mx-23 h-250'>
            <main className='grid grid-cols-3 gap-11'>
                <Card image = "students.png" head = "Training" feed="Feedback" mini="Mini.png" />
                <Card image = "Studi.png" head = "Studio" feed="Feedback" mini="Mini.png" />
                <Card image = "Cw.png" head = "Co-working space" feed="Feedback" mini="Mini.png" />
            </main>
            <main class="flex ml-53 gap-11 mt-15">
                <Card image = "Ch.png" head = "Conference Hall" feed="Feedback" mini="Mini.png" />
                <Card image = "Bs.png" head = "Business Solutions" feed="Feedback" mini="Mini.png" />
            </main>
        </section>
    </div>
  )
}

export default Cardshouse