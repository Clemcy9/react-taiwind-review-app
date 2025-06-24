import React from 'react'

function Card({image, head, feed, mini} ) {
  return (
    <main>
        <div className="border-1 w-[387px] h-[400px] rounded-md p-5">
            <img className='mb-5' src={image} alt="" />
            <h3 className='mb-5'> {head} </h3>
            <div className="flex border-1 items-center p-2 w-[337px] h-[60] rounded-md justify-between ">
                <div className="cursor-pointer"> {feed} </div>
                <div className="cursor-pointer"> <img src={mini} alt="" /> </div>
            </div>
        </div>
        {/* <div class="border-1 w-[387px] h-[400px] rounded-md p-5">
            <img className='mb-5' src={image} alt="" />
            <h3 className='mb-5'> {head} </h3>
            <div className="flex border-1 items-center p-2 w-[337px] h-[60] rounded-md justify-between ">
                <div className="cursor-pointer"> {feed} </div>
                <div className="cursor-pointer"> <img src={mini} alt="" /> </div>
            </div>
        </div> */}
    </main>
  )
}

export default Card