import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './sponsorslide.css';
import Marquee from "react-fast-marquee";

const data = [
  {
    img: `/Sponserslideimg/placeholder-sponser.jpg`,
    name: "Sponser"

  },
  {
    img: `/Sponserslideimg/placeholder-sponser.jpg`,
    name: "Sponser"
  },
  {
    img: `/Sponserslideimg/placeholder-sponser.jpg`,
    name: "Sponser"
  },
  {
    img: `/Sponserslideimg/placeholder-sponser.jpg`,
    name: "Sponser"
  },
  {
    img: `/Sponserslideimg/placeholder-sponser.jpg`,
    name: "Sponser"
  }, {
    img: `/Sponserslideimg/placeholder-sponser.jpg`,
    name: "Sponser"
  }
];



function Sponsers() {
  
  return (
    <div className='main '>
      <div className='flex justify-center align-center text-3xl font-bold text-white '>Our Sponsers</div>
      <div className='mt-5'>
              <Marquee pauseOnClick speed={100} direction='right'>
          {data.map((d) => (
            <div key={d.name} className=' h-200  pt-3 rounded-2xl px-12 mt-0 mb-0'>

              <div className='rounded-xl flex justify-center items-center h-40  '>
                <img src={d.img} alt='sponserimg' className='h-[130px] w-[150px] rounded-xl ' />
              </div>

              <div className='flex flex-col justify-center items-center gap-4 text-xl p-3 font-bold text-white'>
                <p>{d.name}</p>
              </div>

            </div>

          )
          )}
        </Marquee>
      </div>
    </div>   
  );
}

export default Sponsers;
