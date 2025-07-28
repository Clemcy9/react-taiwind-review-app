import React from 'react';
import Teacher from "../assets/baner-pic.png";

function Midsection() {
  return (
    <section className="flex flex-col-reverse md:flex-row bg-[#33026C] w-full text-white items-center justify-between mt-20 px-6 md:px-16 py-10 gap-10 md:gap-0">
      
      <div className="flex flex-col items-start gap-6 max-w-lg">
        <h3 className="text-3xl md:text-4xl font-semibold w-full">
          Innovate. Connect. Transform
        </h3>
        <p className="text-xl md:text-3xl font-medium leading-relaxed">
          Your Tech Future with Netisens ICT
        </p>
        <button
          type="button"
          className="bg-[#1B9407] h-16 px-6 text-xl font-semibold text-white rounded-xl hover:bg-[hsl(109,100%,32%)] whitespace-nowrap"
        >
          Visit our website to learn more
        </button>
      </div>

      <img
        src={Teacher}
        alt="Netisens class tutor"
        className="w-full max-w-md rounded"
      />

    </section>
  );
}

export default Midsection;
