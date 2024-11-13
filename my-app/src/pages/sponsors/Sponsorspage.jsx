import React from 'react';

export const Sponsorspage = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 mt-8">
      {/* Title Sponsors Section */}
      <div className="text-center">
        <h1 className="text-red-600 text-3xl md:text-4xl lg:text-5xl mb-6">Title Sponsors</h1>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 lg:space-x-16">
          <SponsorCard src="/oilIndia.png" alt="Oil India" label="Silver Sponsors" />
          <SponsorCard src="./sunpetro.png" alt="Sun Petrochemicals" label="Silver Sponsors" />
          <SponsorCard src="./arham.jpg" alt="Arham Oil & Gas" label="Bronze Sponsors" />
          <SponsorCard src="./ovl.png" alt="OVL" label="Bronze Sponsors" />
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="text-center">
        <h1 className="text-red-600 text-3xl md:text-4xl lg:text-5xl mb-6">Sponsors</h1>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 lg:space-x-16">
          <SponsorCard src="./d_cam.webp" alt="D CAM Engineering" />
          <SponsorCard src="./Artson.jpg" alt="Artson" />
          <SponsorCard src="./rara.jpeg" alt="RARA Energy" />
          <SponsorCard src="./selan.png" alt="Selan" lgWidth="lg:w-[22rem]" />
          <SponsorCard src="./Manan-Logo.png" alt="Manan Oilfield Services Pvt Ltd." />
        </div>
      </div>

      {/* Supporters Section */}
      <div className="text-center">
        <h1 className="text-red-600 text-3xl md:text-4xl lg:text-5xl mb-6">Supporters</h1>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 lg:space-x-16">
          <SponsorCard src="./agram.jpg" alt="Agaram Industries" />
          <SponsorCard src="./orbit.jpeg" alt="ORBIT" />
        </div>
      </div>
    </div>
  );
};

// Reusable SponsorCard component with custom large screen width
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
