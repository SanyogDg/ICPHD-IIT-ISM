import React, { useState } from 'react';
import './speakerslide.css';
import pallavi from '../Speakers/Speakerimg/pallvijain.png';
import saloma from '../Speakers/Speakerimg/saloma.png';
import Kaustav from '../Speakers/Speakerimg/kaustav.png';
import mazumdar from '../Speakers/Speakerimg/mazumdar.png';
import chitwan from '../Speakers/Speakerimg/chitwan.png';
import amitabh from '../Speakers/Speakerimg/amitabh.png';

const speakers = [
  {
    img: `${pallavi}`,
    name: 'Dr. Pallavi Jain Govil',
  },
  {
    img: `${saloma}`,
    name: 'Shri Saloma Yomdo',
  },
  {
    img: `${Kaustav}`,
    name: 'Dr. Kaustav Nag',
  },
  {
    img: `${mazumdar}`,
    name: 'Shri Sanjay Kumar Mazumder',
  },
  {
    img: `${chitwan}`,
    name: 'Shri Chitwan Garg',
  },
  {
    img: `${amitabh}`,
    name: 'Amitabh Pandey',
  },
];

function Speakers() {
  const [hovered, setHovered] = useState(null);

  const onHoverEnter = (index) => {
    setHovered(index);
  };
  const onHoverLeave = () => {
    setHovered(null);
  };

  return (
    <div className='bodyspk flex flex-col items-center'>
      <div className='headingspk text-3xl md:text-4xl lg:text-5xl text-blue-800 mb-10 mt-10'>
        Our <br /> Speakers
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {speakers.map((s, index) => (
          <div
            key={index}
            className='flex flex-col items-center'
            onMouseEnter={() => onHoverEnter(index)}
            onMouseLeave={onHoverLeave}
          >
            <img
              src={s.img}
              alt={s.name}
              className={`transition-all duration-300 ${
                hovered === index ? 'w-36 h-36' : 'w-32 h-32'
              } object-cover rounded-full`}
            />
            <div className='mt-4 text-center'>
              <p
                className={`text-lg md:text-xl ${
                  hovered === index ? 'font-bold' : 'font-normal'
                }`}
              >
                {s.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Speakers;
