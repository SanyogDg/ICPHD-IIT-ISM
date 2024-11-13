import React from "react";
import Marquee from "react-fast-marquee";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sponsorslide.css";
import sp from "../../images/sunpetro.png";

const data = [
  {
    img: `/oilIndia.png`,
    name: "OIL INDIA",
  },
  {
    img: sp,
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
  },
  {
    img: `/ovl.png`,
    name: "ONGC Videsh Limited",
    size: true,
  },
  {
    img: `/arham.jpg`,
    name: "Arham Oil & Gas",
  },
  {
    img: `/agram.jpg`,
    name: "Agaram Industries",
  },
  {
    img: `/orbit.jpeg`,
    name: "ORBIT",
  },
  {
    img: `/artson.jpg`,
    name: "Artson",
    size: true,
  },
  {
    img: `/rara.jpeg`,
    name: "RARA Energy",
  },
  {
    img: `/selan.png`,
    name: "Selan",
    size: true,
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
            <div className="rounded-xl flex justify-center items-center h-40">
              <img
                src={d.img}
                alt={`${d.name} logo`}
                className={`bg-white p-2 rounded-sm ${d.size ? "" : "h-[150px] w-[150px]"}`}
              />
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default Sponsors;
