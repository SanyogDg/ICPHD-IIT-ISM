import React from 'react';
import './sponsor.css';
// import rg from '../../images/oilIndia.png';

export const Sponsorspage = () => {
  return (
    <div className=" flex flex-col items-center justify-center h-[100vh]">
      <div className="flex justify-center items-center mt-8">
        <h1 className="text-red-600 text-3xl md:text-4xl lg:text-5xl mb-6">Sponsors</h1>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 lg:space-x-16  mt-8"  >

        <div className="flex flex-col items-center p-4">
          <img src={`/oilIndia.png`} className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 p-2 object-contain" alt="Oil India" />
          <h2 className="text-xl md:text-2xl lg:text-3xl mt-4 text-blue-500">Oil India</h2>
        </div>

        <div className="flex flex-col items-center p-4">
          <img src='./sunpetro.png' className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 p-2 object-contain" alt="Sun Petrochemicals" />
          <h2 className="text-xl md:text-2xl lg:text-3xl mt-4 text-blue-500">Sun Petrochemicals</h2>
        </div>
        <div className="flex flex-col items-center p-4">
          <img src='./d_cam.webp' className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 p-2 object-contain" alt="Sun Petrochemicals" />
          <h2 className="text-xl md:text-2xl lg:text-3xl mt-4 text-blue-500">D CAM Engineering</h2>
        </div>
      

      </div>
      <div className="flex flex-col items-center p-4 justify-center">
          <img src='./Manan-Logo.png' className=" md:w-40 md:h-40 lg:w-48 lg:h-48 p-2 object-contain" alt="Manan Oilfield Services Pvt Ltd." />
          <h2 className="text-xl md:text-2xl lg:text-3xl mt-4 text-blue-500">Manan Oilfield Services Pvt Ltd.</h2>
        </div>
     
    </div>
  );
};
