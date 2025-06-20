import React from 'react'
import Button from './Button'

function HeroSection() {
  return (
    <div class="bg-[#33026C] justify-between flex mt-20 h-80 font-bold">
        <div class="mt-20 ml-20">
            <h1 class="text-white font-bold text-3xl">Innovate. Connect. Transform</h1><br />
            <p class="text-white">Your Tech Future with <br /> Netisens</p>
            <br />
            <Button text="Visit our website to learn more"/>
        </div>
        <div>
            <img src="/nsika.png" alt="Nsika's Picture" class="h-50 mt-16 mr-11 w-120" />
        </div>
    </div>
  )
}

export default HeroSection