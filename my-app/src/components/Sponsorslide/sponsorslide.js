import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './sponsorslide.css';

const data = [
  {
    img: `/Sponserslideimg/sponslid1.jpeg`,
    name: "Name 1"

  },
  {
    img: `/Sponserslideimg/sponslid2.jpeg`,
    name: "Name 2"
  },
  {
    img: `/Sponserslideimg/sponslid3.jpeg`,
    name: "Name 3"
  },
  {
    img: `/Sponserslideimg/sponslid4.jpg`,
    name: "Name 4"
  },
  {
    img: `/Sponserslideimg/sponslid5.jpg`,
    name: "Name 5"
  }, {
    img: `/Sponserslideimg/sponslid6.jpeg`,
    name: "Name 6"
  }
];



function Sponsers() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='w-3/4 m-auto  mt-10'>
      <div className='flex justify-center align-center text-2xl font-bold text-blue-900 '>Our Sponsers</div>
      <div className='mt-5'>
              <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className='bg-blue-950 h-200 text-white pt-10 rounded-xl px-10'>

              <div className='rounded-xl bg-indigo-500 flex justify-center items-center h-56'>
                <img src={d.img} alt='sponserimg' className='h-[200px] w-[205px] rounded-xl ' />
              </div>

              <div className='flex flex-col justify-center items-center gap-4 text-xl p-3 font-bold'>
                <p>{d.name}</p>
              </div>

            </div>

          )
          )}
        </Slider>
      </div>
    </div>   
  );
}

export default Sponsers;
