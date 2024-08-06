import React from 'react';
import SpeakerCard from './SpeakerCard';
import pallavi from '../Speakers/Speakerimg/pallvijain.png';
import saloma from "./Speakerimg/saloma.png";
import Kaustav from './Speakerimg/kaustav.png';
import mazumdar from './Speakerimg/mazumdar.png'
import chitwan from './Speakerimg/chitwan.png'
import amitabh from './Speakerimg/amitabh.png'

  
const speakersList = [
  {
    image: `${pallavi}`,
    name: 'Dr. Pallavi Jain Govil',
    designation: 'IAS, Director General of Directorate General of Hydrocarbons (DGH)',
  },
  {
    image: `${saloma}`,
    name: 'Shri Saloma Yomdo',
    designation: 'Director (Exploration & Development), Oil India',
  },
  {
    image:`${Kaustav}` ,
    name: 'Dr. Kaustav Nag',
    designation: 'Additional Director General (Exploration) DGH',
  },
  {
    image: `${mazumdar}`,
    name: 'Shri Sanjay Kumar Mazumder',
    designation: 'Chief Executive Officer (CEO) - ONGC Green Limited (OGL)',
  },
  {
    image: `${chitwan}`,
    name: 'Shri Chitwan Garg',
    designation: 'Division Geounit Manager Digital & Integration, India & Bangladesh, SLB',
  },
  {
    image: `${amitabh}`,
    name: 'Amitabh Pandey',
    designation: 'Head-Subsurface, Development, Cairn India Limited',
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
