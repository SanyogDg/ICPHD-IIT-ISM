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
import Subhash from './Speakerimg/Subhash.png'
import vikram from './Speakerimg/vikram.png'
import rakesh from './Speakerimg/rakesh.png'
import shantanu from './Speakerimg/shantanu.jpg'
import srikant from './Speakerimg/srikant.png'
import meshal from './Speakerimg/meshal.jpeg'
import adwait from './Speakerimg/adwait.jpeg'
import samrendra from './Speakerimg/samrendra.png'
import ranjan from './Speakerimg/ranjan.jpeg'
import linga from './Speakerimg/linga.png'
import anugrah from './Speakerimg/anugrah.png'
import kallol from './Speakerimg/kallol.jpeg'
import karle from './Speakerimg/karle.jpeg'
import shyamal from './Speakerimg/shyamal.jpeg'

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
    name: 'Prof. Prem K Bikkina',
    designation: 'Associate Professor and Harold Courson Chair in Petroleum Engineering at Oklahoma State University.',
  },
  {
    image: akhil,
    name: 'Prof. Akhil Datta-Gupta',
    designation: 'Regents Professor, University Distinguished Professor and Peterson ‘36 Chair Petroleum Engineering, Texas A&MU.',
  },
  {
    image: derek,
    name: 'Prof. Derek Elsworth',
    designation: 'Professor of Energy and Mineral Engineering,PennState University',
  },
  {
    image: mukul,
    name: 'Prof. Mukul M. Sharma',
    designation: 'Professor and W. A. "Tex" Moncrief, Jr. Centennial Chair in Petroleum, Geosystems and Chemical Engineering'
  },
  {
    image: shashank,
    name: 'Shri Shashank Shekhar Jha',
    designation: 'Chief Executive Officer and Whole-Time Director Artson Engineering Limited (A subsidiary of TATA PROJECTS LIMITED)'
  },
  {
    image: Subhash,
    name: 'Shri Subhash Ayirala',
    designation: <>
      Petroleum Engineering Consultant<br />aramco
    </>
  },
  {
    image: vikram,
    name: 'Prof. Vikram Vishal',
    designation: <>
      Professor
      Department of Earth Sciences, IIT Bombay
      <br />
      Adjunct Senior Lecturer
      Department of Civil Engineering, Monash University, Australia
    </>
  },
  {
    image: rakesh,
    name: 'Shri Rakesh Godawat',
    designation:
      <>
        Assistant Vice President <br /> Head of Geology & Geophysics and Reservoir <br /> Sun Petrochemicals Private Limited
      </>
  },
  {
    image: shantanu,
    name: 'Shri Shantanu Pandey',
    designation: <>
      Senior Executive Engineer <br /> Sun Petrochemicals Private Limited
    </>
  },
  {
    image: srikant,
    name: 'Prof. Srikanta Mishra',
    designation: <>
      Research Professor
      <br/> Department of Petroleum Engineering
<br/>Texas A&M University, College Station, TX, USA
    </>
  },
  {
    image: meshal,
    name: 'Mr. Meshal Algharaib',
    designation: <>
      Director at Enhanced Oil Recovery Center 
   
<br/> Kuwait University
    </>
  },
  {
    image: adwait,
    name: 'Mr. Adwait Chawathe',
    designation: <>
     Karachaganak Asset Manager & BU Lower Carbon Champion
   
<br/> Chevron
    </>
  },
  {
    image: samrendra,
    name: 'Mr. Samarendra Roychaudhury',
    designation: <>
    Director - Strategy and Business Development at
   
<br/> Selan Exploration Technology Limited
    </>
  }
  ,
  {
    image: ranjan,
    name: 'Shri. Amitabh Ranjan',
    designation: <>
    Registrar at 
<br/> Indian Institute of Public Administration
  
    </>
  },
  {
    image: linga,
    name: 'Prof. Praveen Linga',
    designation: <>
    Professor at 
<br/> National University of Singapore
  
    </>
  },
  {
    image: anugrah,
    name: 'Prof. Anugrah Singh',
    designation: <>
Professor of Chemical Engineering at
<br/> IIT Guwahati
  
    </>
  },
  {
    image: kallol,
    name: 'Mr. Kallol Saha',
    designation: <>
 Director at 
<br/> Upstream and Low-Carbon M&A @ S&P Global
  
    </>
  },
  {
    image: karle,
    name: 'Mr. Arun Karle',
    designation: <>
 President, Askara Group
  
    </>
  },
  {
    image: shyamal,
    name: 'Mr. Shyamal Bhattacharya',
    designation: <>
Former Director Operations,
<br/>ONGC Videsh
Independent E & P Consultant
  
    </>
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
