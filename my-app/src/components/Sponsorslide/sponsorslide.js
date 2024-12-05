import React from "react";
import Marquee from "react-fast-marquee";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sponsorslide.css";
import sp from "../../images/sunpetro.png";

const titlesponsor = [
  {
    img: `/oilIndia.png`,
    name: 'GOLD Sponsor',
    
  },
  {
    img: `/sunpetro.png`,
    name:'GOLD Sponsor',
  },
  {
    img: `/ongc.png`,
    name:'GOLD Sponsor',
  },
  {
    img: `/ovl.png`,
    name:'SILVER Sponsor',
    size: true,
  },
  {
    img: `/arham.jpg`,
    name: 'SILVER Sponsor',
    size: true,

  },
  {
    img: `/dst.png`,
    name: 'SILVER Sponsor',
    size: true,

  }
]

// const spns = [
//   {
//     img: `/Artson.jpg`,
//   },
//   {
//     img: `/rara.jpeg`,
//     size: true,
//   },
//   {
//     img: `/selan.png`,
//   },
//   {
//     img: `/dcam.png`,
//   },
//   {
//     img: `/manan.png`,
//   },
//   {
//     img: `/antonpaar.png`
//   }
// ]
// const supporter = [
//   {
//     img: `/aries.png`,
//   },
//   {
//     img: `/orbit.png`,
//     size: true,
//   },
//   {
//     img: `/septech.png`,
//   },
//   {
//     img: `/springer.png`,
//   },
//   {
//     img: `/syntron.png`,
//   },
//   {
//     img: `/agaram.png`
//   }
// ]

function Sponsors() {
  return (
    <div className="main">
      <div className="flex justify-center items-center text-3xl font-bold text-red-500">
        Title Sponsors
      </div>

          <Marquee pauseOnClick speed={100} direction="right">
            {titlesponsor.map((d) => (
              <div key={d.name} className="h-200 rounded-2xl px-12 mb-0">
                <div className="rounded-xl flex flex-col justify-center items-center h-56">
                  <img
                    src={d.img}
                    alt={`${d.name} logo`}
                    className={`bg-white p-2 rounded-sm ${d.size ? "max-h[250px] max-w-[250px]" : "h-[150px] w-[150px]"}`}
                  />

                  {d.name && <div className="absolute bottom-0 font-semibold text-gray-500">
                    {d.name}
                  </div>}
                </div>
              </div>
            ))}
          </Marquee>
        

        {/* <div className="flex flex-row justify-center items-center w-[30%]">
          <div>Sponsors</div>
          <div>
          <Marquee pauseOnClick speed={100} direction="right">
            {spns.map((d) => (
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
        </div> */}

        {/* <div className="flex flex-row justify-center items-center w-[30%]">
          <div>Supporters</div>
          <div>
          <Marquee pauseOnClick speed={100} direction="right">
            {supporter.map((d) => (
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
         
        </div> */}

     

    </div>
  );
}

export default Sponsors;
