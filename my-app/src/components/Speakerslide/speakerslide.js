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
import akhil from '../Speakers/Speakerimg/akhil-datta.jpeg';
import derek from '../Speakers/Speakerimg/derek.jpeg';
import mukulsh from '../Speakers/Speakerimg/mukul.png'
import shashank from '../Speakers/Speakerimg/shashank.png'
import Subhash from '../Speakers/Speakerimg/Subhash.png'
import vikram from '../Speakers/Speakerimg/vikram.png'
import rakesh from '../Speakers/Speakerimg/rakesh.png'
import shantanu from '../Speakers/Speakerimg/shantanu.png'


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
  // {
  //   img: amitabh,
  //   name: 'Shri Amitabh Pandey',
  //   designation: 'Head-Subsurface, Development, Cairn India Limited',
  // },
  {
    img: omkar,
    name: 'Shri Omkar Nath Gyani',
    designation: 'Director (Operations), ONGC Videsh Limited',
  },
  {
    img: mitra,
    name: 'Shri Niladri Kumar Mitra',
    designation: 'Ex-Director Offshore (ONGC), Chief Adviser McDermott International Limited',
  },
  {
    img: vikas,
    name: 'Shri Vikas Kumar Sharma',
    designation: (
      <>
        Director <br/>(Exploration and Production) <br />
        Oil Industry Safety Directorate <br />
        Ministry of Petroleum and Natural Gas
      </>
    ),
  },
  {
    img: premk,
    name: 'Prem K Bikkina',
    designation: 'Associate Professor and Harold Courson Chair in Petroleum Engineering at Oklahoma State University.',
  },
  {
    img: akhil,
    name: 'Akhil Datta-Gupta',
    designation: 'University Distinguished Professor and Peterson ‘36 Chair Petroleum Engineering, Texas A&MU.',
  },
  {
    img: derek,
    name: 'Prof. Derek Elsworth',
    designation: 'Professor of Energy and Mineral Engineering,PennState University',
  },
  {
    img: mukulsh,
    name: 'MUKUL M. SHARMA',
    designation:'Professor and W. A. "Tex" Moncrief, Jr. Centennial Chair in Petroleum, Geosystems and Chemical Engineering'
  },
  {
    img:shashank,
    name: 'Mr. Shashank Shekhar Jha',
    designation: <>
    Chief Executive Officer and <br/> Whole-Time Director <br/> Artson Engineering Limited <br/> LK(A subsidiary of TATA PROJECTS LIMITED)
    </>
  },
  {
    img: Subhash,
    name: 'Subhash Ayirala',
    designation: <>
      Petroleum Engineering Consultant<br/>aramco
    </>
  },
  {
    img: vikram,
    name: 'Dr. Vikram Vishal',
    designation: <>
      Professor
Department of Earth Sciences, IIT Bombay
<br/>
Adjunct Senior Lecturer
Department of Civil Engineering, Monash University, Australia
    </>
  },
  {
    img: rakesh,
    name: 'Rakesh Godawat',
    designation:
      <>
         Assistant Vice President <br/> Head of Geology & Geophysics and Reservoir <br/> Sun Petrochemicals Private Limited
    </>
  },
  {
    img: shantanu,
    name: 'Shantanu Pandey',
    designation: <>
      Senior Engineer (Reservoir) <br/> Sun Petrochemicals Private Limited
    </>
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
