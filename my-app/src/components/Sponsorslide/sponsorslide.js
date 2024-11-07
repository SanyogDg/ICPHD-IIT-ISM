import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sponsorslide.css";
import Marquee from "react-fast-marquee";
import sp from "../.././images/sunpetro.png";


const data = [
  {
    img: `/oilIndia.png`,
    name: "OIL INDIA",
  },
  {
    img: `${sp}`,
    name: "Sun Petrochemicals",
  },
  {
    img: `/d_cam.webp`,
    name: "D CAM Engineering",
  },
  {
    img: `/Manan-Logo.png`,
    name: "Manan Oilfield Services Pvt Ltd.",
    size: true,
  }, {
    img: `/ovl.png`,
    name: "ONGC Videsh Limited",
    size: true,

  }
  
];

function Sponsers() {
  return (
    <div className="main ">
      <div className="flex justify-center align-center text-3xl font-bold text-red-500 ">
        Our Sponser
      </div>
      <div className="">
        <Marquee pauseOnClick speed={100} direction="right">
          {data.map((d) => (
            <div
              key={d.name}
              className=" h-200  pt-3 rounded-2xl px-12 mt-0 mb-0"
            >
              <div className=" rounded-xl flex justify-center items-center h-40  ">
                <img
                  src={d.img}
                  alt="sponserimg"
                  className={`bg-white p-2 rounded-sm imgset ${d.size ? "" : "h-[150px] w-[150px]"
                    }`}
                />

              </div>

              {/* <div className="flex flex-col justify-center items-center gap-4 text-xl p-3 font-bold text-blue-500">
                <p>{d.name}</p>
              </div> */}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Sponsers;
