import React, { useState } from 'react';
import './speakerslide.css';
import pallavi from '../Speakers/Speakerimg/pallvijain.png';
import saloma from '../Speakers/Speakerimg/saloma.png';
import Kaustav from '../Speakers/Speakerimg/kaustav.png';
import mazumdar from '../Speakers/Speakerimg/mazumdar.jpg';
import chitwan from '../Speakers/Speakerimg/chitwan.png';
import amitabh from '../Speakers/Speakerimg/amitabh.png';
import omkar from '../Speakers/Speakerimg/omkarnath.png';
import vikas from '../Speakers/Speakerimg/vikassharma1.jpg';
import mitra from '../Speakers/Speakerimg/mitra.jpg';
import premk from '../Speakers/Speakerimg/premk.jpeg';



const speakers = [
  {
    img: pallavi,
    name: 'Dr. Pallavi Jain Govil',
    designation: 'IAS, Director General of Directorate General of Hydrocarbons (DGH)',
  },
  {
    img: saloma,
    name: 'Shri Saloma Yomdo',
    designation: 'Director (Exploration & Development), Oil India',
  },
  {
    img: Kaustav,
    name: 'Dr. Kaustav Nag',
    designation: 'Additional Director General (Exploration) DGH',
  },
  {
    img: mazumdar,
    name: 'Shri Sanjay Kumar Mazumder',
    designation: 'Chief Executive Officer (CEO) - ONGC Green Limited (OGL)',
  },
  {
    img: chitwan,
    name: 'Shri Chitwan Garg',
    designation: 'Division Geounit Manager Digital & Integration, India & Bangladesh, SLB',
  },
  {
    img: amitabh,
    name: 'Shri Amitabh Pandey',
    designation: 'Head-Subsurface, Development, Cairn India Limited',
  },
  {
    img: omkar,
    name: 'Shri Omkar Nath Gyani',
    designation: 'Director (Operations), ONGC Videsh Limited.',
  },
  {
    img: mitra,
    name: 'Shri Niladri K Mitra',
    designation: 'Ex-Director Offshore (ONGC), Chief Adviser McDermott International Ltd.',
  },
  {
    img: vikas,
    name: 'Vikas Kumar Sharma',
    designation: (
      <>
        Director (E and P) <br />
        OIL INDUSTRY SAFETY DIRECTORATE  
      </>
    ),
  },
  {
    img: premk,
    name: 'Prem K Bikkina',
    designation: 'Associate Professor and Harold Courson Chair in Petroleum Engineering at Oklahoma State University.',
  }
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
              className={`transition-all duration-300 ${hovered === index ? 'w-36 h-36' : 'w-32 h-32'} object-cover rounded-full`}
            />
            <div className='mt-4 text-center'>
              <p className={`text-lg md:text-xl ${hovered === index ? 'font-semibold' : 'font-normal'}`}>
                {s.name}
              </p>
            </div>
            <div className='mt-2 text-center text-zinc-500'>
              <p className={`text-lg md:text-xl ${hovered === index ? 'font-semibold' : 'font-normal'}`}>
                {s.designation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Speakers;
