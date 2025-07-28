import React from 'react';
import Feedbackcard from './Feedbackcard';
import Trainings from '../assets/trainings.png';
import Studio from '../assets/studio.png';
import Cowork from '../assets/coworking.png';
import Conference from '../assets/conference.png';
import Business from '../assets/business.png';

const cardArr = [
  { src: Trainings, 
    name: 'Trainings', 
    to: '/trainings' 
  },
  { src: Studio, 
    name: 'Studio', 
    to: '/studio' 
  },
  { src: Cowork, 
    name: 'Co-working Space', 
    to: '/cowork' 
  },
  { src: Conference,
     name: 'Conference Hall',
      to: '/conference'
  },
  { src: Business, 
    name: 'Business Solutions', 
    to: '/business'
   },
];

function Cardcontainer() {
  return (
    <section className="flex flex-col w-full items-center justify-center mt-16 min-h-screen px-4 md:px-8">
      
      <div className="flex flex-col items-center justify-center w-full max-w-7xl">
        <div className="flex flex-col items-center max-w-[567px] text-center">
          <h3 className="text-3xl md:text-4xl font-bold">Services Feedback</h3>
          <p className="text-lg md:text-2xl font-normal mt-2">
            Let us know what your experience with any one of our services has been.
          </p>
        </div>

        <div className="flex flex-wrap gap-14 mt-8 max-w-6xl w-full justify-center">
          {cardArr.map((card, index) => (
            <Feedbackcard
              key={index}
              name={card.name}
              src={card.src}
              to={card.to}
            />
          ))}
        </div>
      </div>
      
    </section>
  );
}

export default Cardcontainer;
