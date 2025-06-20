import React from 'react'

function Footer() {
  return (
    <div>
        <div class="flex bg-gradient-to-r from-[#137802] to-[#23024A] justify-between h-80 mt-30">
            <div class="flex">
                    <img class="w-70 h-20 ml-30 mt-30" src="/Netisense.png" alt="chuck Noris picture"></img>
            </div>
            <div class="mt-20">
                    <p class="flex text-white mb-10"><><img src="/location.png" alt="" /></>&nbsp;133, Atiku Abubakar road, Uyo.</p>
                    <p class="flex text-white"><img src="/email.png" alt=""/>&nbsp;info@netisens.com </p>
                    <p class="flex text-white mt-10"><img src="/phonel.png" alt=""/>&nbsp; +234 911 6875415</p>
            </div>
            <div class="mt-35 mr-30">
                    <img class="" src="/Frame 28.png" alt="" />
            </div>
        </div>
        <hr class="border-t w-full border-gray-300"/>
        <p class="py-6 bg-gradient-to-r from-[#137802] to-[#23024A] text-white h-20 text-center  ">Copyright &copy; 2025 Netisens ICT. All rights reserved</p>
    </div>
  )
}

export default Footer