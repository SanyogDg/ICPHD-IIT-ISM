import React from 'react';

const SpeakerCard = ({ image, name, designation }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 max-w-xs mx-auto transform transition-transform duration-300 hover:scale-105 animate-vertical-move">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full mx-auto transition-transform duration-300 hover:scale-110"
      />
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold transition-colors duration-300 hover:text-blue-500">{name}</h2>
        <p className="text-gray-600">{designation}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;
