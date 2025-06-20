import React from 'react'
import Cards from './Cards'

function HouseOfCards() {
  return (
    <div>
        <h1 class="text-center mt-30 font-bold text-3xl">Services Feedback</h1>
        <p class="text-center mt-3">Let us know what your experience with any one of</p>
        <p class="text-center">our services has been.</p>
        <div class="flex mr-5 p-12">
            <Cards image="first.png" text="Trainings"/>
            <Cards image="Second.png" text="Studio"/>
            <Cards image="Third.png" text="Co-working Space"/> 
        </div>
        <div class="w-220 flex ml-75 m-5">
            <Cards image="fouth.png" text="Conference Hall"/>
            <Cards image="fifth.png" text="Business Solutions"/>
        </div>
    </div>
  )
}

export default HouseOfCards