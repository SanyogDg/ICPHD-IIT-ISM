import React from "react";
import Marquee from "react-fast-marquee";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sponsorslide.css";
import sp from "../../images/sunpetro.png";

const data = [
  {
    img: `/oilIndia.png`,
  },
  {
    img: sp,
  },
  {
    img: `/d_cam.webp`,
    
  },
  {
    img: `/Manan-Logo.png`,
    size: true,
  },
  {
    img: `/ovl.png`,
    size: true,
  },
  {
    img: `/arham.jpg`,
    size:true,
  },
  {
    img: `/agram.jpg`,
  },
  {
    img: `/orbit.jpeg`,
    size:true,

  },
  {
    img: `/Artson.jpg`,
    size: true,
  },
  {
    img: `/rara.jpeg`,
    size:true,
  },
  {
    img: `/selanshort.png`,
    name: "Selan",
    size: true,
    name:"Selan Exploration Techology Limited"
  },
];

function Sponsors() {
  return (
    <div className="main">
      <div className="flex justify-center items-center text-3xl font-bold text-red-500 mb-4">
        Our Sponsors
      </div>
      <Marquee pauseOnClick speed={100} direction="right">
        {data.map((d) => (
          <div key={d.name} className="h-200 pt-3 rounded-2xl px-12 mb-0">
            <div className="rounded-xl flex flex-col justify-center items-center h-40">
              <img
                src={d.img}
                alt={`${d.name} logo`}
                className={`bg-white p-2 rounded-sm ${d.size ? "max-h[250px] max-w-[250px]" : "h-[150px] w-[150px]"}`}
              />
              
              {d.name && <div className="flex">
                    {d.name}
                </div>} 
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default Sponsors;
