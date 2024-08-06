import React from 'react';
import './sponsor.css';
import rg from '../../images/oilIndia.png';

export const Sponsorspage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center mt-8">
      <div className="flex justify-center items-center mt-8">
        <h1 className="text-red-600 text-3xl md:text-4xl lg:text-5xl mb-6">Sponsors</h1>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col items-center mx-4 md:mx-8 lg:mx-16 mt-8">
          <img src={rg} className="w-32 md:w-40 lg:w-48 p-2" alt="Oil India" />
          <h2 className="text-xl md:text-2xl lg:text-3xl mt-4 text-blue-500">Oil India</h2>
        </div>
      </div>
    </div>
  );
};
