import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import './speakerslide.css'
import dp from '../Speakers/Speakerimg/dp.jpg'
import gd from '../Speakers/Speakerimg/GD.jpg'
import hs from '../Speakers/Speakerimg/HS.jpg'
import kkp from '../Speakers/Speakerimg/KKP.jpg'
import oip from '../Speakers/Speakerimg/OIP.jpeg'
import sm from '../Speakers/Speakerimg/SM.jpg'
import rg from "../Speakers/Speakerimg/Rakesh-godawar.jpeg"
import { name } from 'tar/lib/types';


const speakers = [
    {
        img: rg,
        name:"Prof. Rakesh Godawat",
    }
    // {
    //     img: dp,
    //     name: 'Prof. Suddhasatwa Basu'
    // },
    // {
    //     img: gd,
    //     name: 'Prof. G D Yadav'
    // },
    // {
    //     img: hs,
    //     name: 'Prof. Hemanta Kumar Sarma'
    // },
    // {
    //     img: kkp,
    //     name: 'Prof. K. K. Pant'
    // },
    // {
    //     img: oip,
    //     name: 'Prof. Shalivahan'
    // },
    // {
    //     img: sm,
    //     name: 'Prof. Srikant Mishra'
    // },
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