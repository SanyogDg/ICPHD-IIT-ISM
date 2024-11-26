import React from 'react';

export const Sponsorspage = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 mt-10 bg-white mb-5">
      {/* Title Sponsors Section */}
      <div className="text-center">
        <h1 className="text-red-600 text-3xl md:text-5xl lg:text-4xl mb-6 mt-3">Title Sponsors</h1>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 lg:space-x-16">
          <SponsorCard src="/oilIndia.png" alt="Oil India" label="GOLD Sponsor" />
          <SponsorCard src="./sunpetro.png" alt="Sun Petrochemicals" label="GOLD Sponsor" />
          <SponsorCard src="./ongc.png" alt="ONGC" label="GOLD Sponsors" />
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 lg:space-x-16'>
          <SponsorCard src="./ovl.png" alt="OVL" label="SILVER Sponsor" />
          <SponsorCard src="./arham.jpg" alt="Arham" label="SILVER Sponsor" />
          <SponsorCard src="./dst.png" alt="Dept. of Sceince & technology" label="" />
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="text-center">
        <h1 className="text-red-600 text-3xl md:text-4xl lg:text-5xl mb-6">Sponsors</h1>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 lg:space-x-16">
          <SponsorCard src="./Artson.jpg" alt="Artson" />
          <SponsorCard src="./rara.jpeg" alt="RARA Energy" />
          <SponsorCard src="./selan.png" alt="Selan" lgWidth="lg:w-[22rem]" />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 lg:space-x-16">
          <SponsorCard src="./dcam.png" alt="D CAM Engineering" />
          <SponsorCard src="./Manan-Logo.png" alt="Manan Oilfield Services Pvt Ltd." />
          <SponsorCard src="./antonpaar.png" alt="antonpaar" />
        </div>

      </div>

      {/* Supporters Section */}
      <div className="text-center">
        <h1 className="text-red-600 text-3xl md:text-4xl lg:text-5xl">Supporters</h1>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 lg:space-x-16">
          <SponsorCard src="./aries.png" alt="Aries" />
          <SponsorCard src="./orbit.png" alt="Orbit Research" />
          <SponsorCard src="./septech.png" alt="Septech" />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 lg:space-x-16">
          <SponsorCard src="./syntron.png" alt="Syntron" />
          <SponsorCard src="./agram.jpg" alt="agram" />
        </div>

        <div className='border border-gray-700 ml-[2rem] mr-[2rem]'>
          <img src='./apparatus 2.png' alt='Apparatus' />
        </div>


      </div>

      <div>
        <h1 className="text-red-600 text-3xl md:text-4xl lg:text-5xl mb-4">Publication Partner</h1>
        <SponsorCard src="./springer.png" alt="Springer" />
      </div>

    </div>
  );
};

const SponsorCard = ({ src, alt, label, lgWidth }) => (
  <div className="flex flex-col items-center p-4">
    <img
      src={src}
      className={`w-32 h-32 md:w-40 md:h-40 lg:h-48 p-2 object-contain ${lgWidth || 'lg:w-48'}`}
      alt={alt}
    />
    {label && <p className="text-blue-500 mt-2">{label}</p>}
  </div>
);
