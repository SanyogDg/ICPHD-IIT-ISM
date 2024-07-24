import React from 'react';
import './Banner.css'; // Import the CSS file
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-text">
        <h1 className="banner-heading">
          International Conference on Petroleum, Hydrogen & DecarboniZation
        </h1>
        <div className="banner-info">
          <FaMapMarkerAlt className="banner-info-icon" />
          <span>IIT Dhanbad</span>
        </div>
        <div className="banner-info" style={{ marginTop: '0.25rem' }}>
          <FaCalendarAlt className="banner-info-icon" />
          <span>November 2024</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
