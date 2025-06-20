import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiTwitterXLine } from 'react-icons/ri'; // X (Twitter)

function Footer() {
  return (
    <div className='bg-[linear-gradient(to_right,_#137802,_#23024A)]'>
      <div className="w-[90%] mx-auto mt-10">
        <div className="flex justify-between p-4.5">
          
          <div>
            <a href="/" className="inline-block">
              <img 
                src="/image.png" 
                alt="Logo" 
                className="h-10 w-auto outline-style: none; shadow hover:opacity-80 transition duration-300" 
              />
            </a>
          </div>

          <div className="space-y-2 text-white">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-lg" />
              <span>113, Atiku Abubakar Road, Uyo.</span>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail className="text-lg" />
              <span>info@netizen.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-lg" />
              <span>+234 911 687 5415</span>
            </div>
          </div>

          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-red-500 text-white"><FaYoutube /></a>
            <a href="#" className="hover:text-blue-400 text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-sky-400 text-white"><RiTwitterXLine /></a>
            <a href="#" className="hover:text-blue-500 text-white"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-green-600 text-white">Netizen ICT</a>
          </div>

        </div>

        <div className="border-t border-gray-400 w-full" />

        <div>
          <p className="text-center text-sm text-white mt-10">
            &copy; 2025 Netisens ICT. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
