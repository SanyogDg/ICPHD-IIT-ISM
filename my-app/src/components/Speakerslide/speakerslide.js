import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import './speakerslide.css'
import pallavi from '../Speakers/Speakerimg/pallvijain.png'
import saloma from "../Speakers/Speakerimg/saloma.png"
import Kaustav from '../Speakers/Speakerimg/kaustav.png';
import mazumdar from '../Speakers/Speakerimg/mazumdar.png'
import chitwan from '../Speakers/Speakerimg/chitwan.png'
import amitabh from '../Speakers/Speakerimg/amitabh.png'


const speakers = [
    {
        img: `${pallavi}`,
        name:"Prof. Rakesh Godawat",
    },
    {
        img: `${saloma}`,
        name: 'Prof. Suddhasatwa Basu'
    },
    {
        img: `${Kaustav}`,
        name: 'Prof. G D Yadav'
    },
    {
        img: `${mazumdar}`,
        name: 'Prof. Hemanta Kumar Sarma'
    },
    {
        img: `${chitwan}`,
        name: 'Prof. K. K. Pant'
    },
    {
        img: `${amitabh}`,
        name: 'Prof. Shalivahan'
    },
    
];



function Speakers() {
    
    const [Hovered, setHovered] = useState(false);
    const onhoverEnter=() => {
        setHovered(true);
    }
    const onhoverLeave = () => {
        setHovered(false);
    }

    return (
        <div className='bodyspk flex justify-center align-center'>
            <div className='headingspk text-3xl text-blue-800 mb-10  flex align-center justify-center mt-10 ml-2 mr-2 pr-2'>
                Executive <br /> Speakers
            </div>
            {/* <Marquee pauseOnHover speed={10} > */}
                {speakers.map((s) => (
                    <div key={s} className={Hovered? 'imghovered' : 'normalimg'}>
                        <div><img src={s.img} alt='image' className={Hovered? 'imglarge':'imgsmall'} onMouseEnter={onhoverEnter}  onMouseLeave={onhoverLeave}></img></div>
                        <div className={Hovered?'paraactive':'paranonactive'} onMouseEnter={onhoverEnter}  onMouseLeave={onhoverLeave}><p>{s.name}</p></div>
                    </div>
                ))}
            {/* </Marquee> */}
        </div>
    )
}
// mt-5 flex align-center justify-center font-bold text-xlmb-12

export default Speakers;