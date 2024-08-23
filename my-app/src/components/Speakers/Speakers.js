import React from 'react';
import SpeakerCard from './SpeakerCard';

import pallavi from '../Speakers/Speakerimg/pallvijain.png';
import saloma from "./Speakerimg/saloma.png";
import Kaustav from './Speakerimg/kaustav.png';
import mazumdar from './Speakerimg/mazoomdaro.jpg'
import chitwan from './Speakerimg/chitwan.png'
import amitabh from './Speakerimg/amitabh.png'
import omkar from './Speakerimg/omkarnath.png';
import vikas from './Speakerimg/vikassharma1.jpg';
import mitra from './Speakerimg/mitra.jpg';
import premk from './Speakerimg/premk.jpeg'
import akhil from './Speakerimg/akhil-datta.jpeg'
import derek from './Speakerimg/derek.jpeg'
import mukul from './Speakerimg/mukul.png'
import shashank from './Speakerimg/shashank.png'


const speakersList = [
  {
    image: pallavi,
    name: 'Dr. Pallavi Jain Govil',
    designation: 'IAS, Director General of Directorate General of Hydrocarbons (DGH)',
  },
  {
    image: saloma,
    name: 'Shri Saloma Yomdo',
    designation: 'Director (Exploration & Development), Oil India',
  },
  {
    image: Kaustav,
    name: 'Dr. Kaustav Nag',
    designation: 'Additional Director General (Exploration) DGH',
  },
  {
    image: mazumdar,
    name: 'Shri Sanjay Kumar Mazumder',
    designation: 'Chief Executive Officer (CEO) - ONGC Green Limited (OGL)',
  },
  {
    image: chitwan,
    name: 'Shri Chitwan Garg',
    designation: 'Division Geounit Manager Digital & Integration, India & Bangladesh, SLB',
  },
  // {
  //   image: amitabh,
  //   name: 'Amitabh Pandey',
  //   designation: 'Head-Subsurface, Development, Cairn India Limited',
  // },
  {
    image: omkar,
    name: 'Shri Omkar Nath Gyani',
    designation: 'Director (Operations), ONGC Videsh Limited',
  },
  {
    image: mitra,
    name: 'Shri Niladri Kumar Mitra',
    designation: 'Ex-Director Offshore (ONGC), Chief Adviser McDermott International Limited',
  },
  {
    image: vikas,
    name: 'Shri Vikas Kumar Sharma',
    designation: (
      <>
        Director (E and P) <br />
        Oil Industry Safety Directorate <br />
        Ministry of Petroleum and Natural Gas
      </>
    ),
  },
  {
    image: premk,
    name: 'Prem K Bikkina',
    designation: 'Associate Professor and Harold Courson Chair in Petroleum Engineering at Oklahoma State University.',
  },
  {
    image: akhil,
    name: 'Akhil Datta-Gupta',
    designation: 'Regents Professor, University Distinguished Professor and Peterson ‘36 Chair Petroleum Engineering, Texas A&MU.',
  },
  {
    image: derek,
    name: 'Prof. Derek Elsworth',
    designation: 'Professor of Energy and Mineral Engineering,PennState University',
  },
  {
    image:mukul,
    name: 'MUKUL M. SHARMA',
    designation:'Professor and W. A. "Tex" Moncrief, Jr. Centennial Chair in Petroleum, Geosystems and Chemical Engineering'
  },
  {
    image:shashank,
    name: 'Mr. Shashank Shekhar Jha',
    designation:'Chief Executive Officer and Whole-Time Director Artson Engineering Limited (A subsidiary of TATA PROJECTS LIMITED)'
  }
];

function Speakers() {
  return (
    <>
      <div className='flex flex-col items-center mt-[9rem] mb-8'>
        <div className='text-center mt-4 mb-8'>
          <h1 className='text-red-600 text-4xl font-bold'>Our Speakers</h1>
        </div>
        <div className='flex justify-center w-full px-4 mt-[1rem]'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-screen-lg'>
            {speakersList.map((speaker, index) => (
              <SpeakerCard
                key={index}
                image={speaker.image}
                name={speaker.name}
                designation={speaker.designation}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Speakers;
