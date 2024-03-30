import React from 'react';
import Marquee from 'react-fast-marquee';
import './speakerslide.css'
import dp from '../Speakers/Speakerimg/dp.jpg'
import gd from '../Speakers/Speakerimg/GD.jpg'
import hs from '../Speakers/Speakerimg/HS.jpg'
import kkp from '../Speakers/Speakerimg/KKP.jpg'
import oip from '../Speakers/Speakerimg/OIP.jpeg'
import sm from '../Speakers/Speakerimg/SM.jpg'


const speakers = [
    {
        img: dp,
        name: 'Prof. Suddhasatwa Basu'
    },
    {
        img: gd,
        name: 'Prof. G D Yadav'
    },
    {
        img: hs,
        name: 'Prof. Hemanta Kumar Sarma'
    },
    {
        img: kkp,
        name: 'Prof. K. K. Pant'
    },
    {
        img: oip,
        name: 'Prof. Shalivahan'
    },
    {
        img: sm,
        name: 'Prof. Srikant Mishra'
    },
];

function Speakers() {
    return(
        <div className='bodyspk'>
            <div className='headingspk flex justify-center align-center text-3xl text-blue-800 mb-10'>Executive Speakers</div>
            <Marquee pauseOnHover speed={180} >
                {speakers.map((s)=>(
                    <div className='px-4 '>
                    <div><img src={s.img} alt='image' className='h-[400px] w-[450px] rounded-[4%]'></img></div>
                    <div className='mt-5 flex align-center justify-center font-bold text-xlmb-12'><p>{s.name}</p></div>
                    </div>
                ))}
            </Marquee>
        </div>
    )
}

export default Speakers;