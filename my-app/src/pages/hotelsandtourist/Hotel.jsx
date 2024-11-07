import React, { useState } from 'react';
import './hotel.css';
import { FaEarthAmericas } from "react-icons/fa6";
import { MdWaterDamage } from 'react-icons/md';
import { FaWater, FaPlaceOfWorship, FaMountain, FaCity } from 'react-icons/fa';
export const Hotel = () => {
  const [isHotel, setIsHotel] = useState(true);

  const hotels = [
    {
      img: './raddison.png',
      name: 'Grand Mirage Dhanbad Member Of Radisson Individuals',
      directions: 'https://www.radissonhotels.com/en-us/hotels/radisson-individuals-grand-mirage-dhanbad',
    },
    {
      img: './cocoon.png',
      name: 'Cocoon Luxury Business Hotel',
      directions: 'https://www.cocoonhotel.in/',
    },
    {
      img: './coalcapital.png',
      name: 'Hotel Coal Capital',
      directions: 'https://www.tripadvisor.in/Hotel_Review-g1011999-d21174490-Reviews-Hotel_Coal_Capital-Dhanbad_Dhanbad_District_Jharkhand.html',
    },
    {
      img: './mastiff.png',
      name: 'Mastiff',
      directions: 'https://www.mastiffhotels.com/dhanbad/',
    },
    {
      img: './vivana.png',
      name: 'Vivana-The Business',
      directions: 'https://www.thehotelvivana.com/',
    },
    {
      img: './sonotel.png',
      name: 'Sonotel Hotels Dhanbad Pvt. Ltd',
      directions: 'https://sonotelhotels.com/',
    },
  ];
  const touristSpots = [
    {
      name: "Maithon Dam",
      description: "Visit the Maithon Dam, just outside of Dhanbad. Enjoy the view, watch the sunset while strolling through nature, or take a peaceful boat ride with friends or family.",
      icon: <MdWaterDamage />
    },
    {
      name: "Bhatinda Falls",
      description: "Surrounded by large boulders and rocks, these waterfalls near Dhanbad offer an ideal picnicking spot. Enjoy the tranquil, green surroundings for a peaceful escape.",
      icon: <FaWater />
    },
    {
      name: "Deoghar",
      description: "A popular religious and cultural destination, Deoghar features temples like Baidyanath Temple and Basukinath Temple. The nearby Tapovan Caves and Hills offer scenic natural beauty.",
      icon: <FaPlaceOfWorship />
    },
    {
      name: "Parasnath Hill",
      description: "Perfect for trekking enthusiasts, Parasnath Hill offers trails leading to the Jain temple at the top, an important pilgrimage spot with cultural and religious significance.",
      icon: <FaMountain />
    },
    {
      name: "Bokaro Steel City",
      description: "An industrial hub and the fourth largest city in Jharkhand, Bokaro offers a variety of attractions, making it a popular destination for both tourism and business.",
      icon: <FaCity />
    }
  ];
  
  
  function TouristCard({ name, description, icon }) {
    return (
      <div className="card bg-gray-100 p-4 rounded-lg shadow-md max-w-sm mx-auto">
        <div className="flex items-center mb-4">
          <div className="icon bg-gray-200 rounded-full p-2 mr-3">
            {icon}
          </div>
          <h2 className="text-xl font-semibold">{name}</h2>
        </div>
        <p className="text-gray-700">{description}</p>
      </div>
    );
  }
  
  return (
    <div className='main'>
      <div className='btns'>
        <button
          onClick={() => setIsHotel(true)}
          className={isHotel ? 'butnl butnac' : 'butnl'}
        >
          Hotels
        </button>
        <button
          onClick={() => setIsHotel(false)}
          className={!isHotel ? 'butnr butnac' : 'butnr'}
        >
          Must Visit
        </button>
      </div>

      <div className='hotel-contain'>
        {isHotel ? (
          <div className='hotel-list'>
            {hotels.map((hotel, index) => (
              <div key={index} className='hotel-item'>
                <img src={hotel.img} alt={hotel.name} className='hotel-img' />
                <h3 className='hotel-name'>{hotel.name}</h3>
                <div className='flex flex-row justify-center items-center text-xl'>
                <a href={hotel.directions} target='_blank' rel='noopener noreferrer' className='hotel-link'>
                Visit <FaEarthAmericas />
                </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="app p-4 space-y-4">
      {touristSpots.map((spot, index) => (
        <TouristCard 
          key={index} 
          name={spot.name} 
          description={spot.description} 
          icon={spot.icon} 
        />
      ))}
    </div>

        )}
      </div>
    </div>
  );
};
