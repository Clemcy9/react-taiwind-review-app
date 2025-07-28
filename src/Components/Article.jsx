import React from 'react';
import InfoGraphic from '../assets/infographics.png';

function Article() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 mt-10 px-10 md:px-20">
      
      <div className="md:max-w-[668px] mt-6 md:mt-10">
        <h1 className="text-3xl md:text-5xl font-bold text-[#33026C]">
          AT NETIZENS ICT <br /> WE VALUE YOUR FEEDBACK
        </h1>
        <p className="text-xl md:text-2xl mt-6">
          Tell us how satisfied you are with our services and how we can serve you better
        </p>
      </div>

      <div className="md:max-w-[578px] w-full">
        <img src={InfoGraphic} alt="info graphics" className="w-full h-auto" />
      </div>

    </div>
  );
}

export default Article;
