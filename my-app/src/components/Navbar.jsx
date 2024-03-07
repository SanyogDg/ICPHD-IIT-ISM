import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
      <nav className='container'>
        <img src={logo} alt="" className='logo' />
        <ul>
            <li>Home</li>
            <li>Registrations</li>
            <li>Speakers and Venue</li>
            <li>Sponsorships</li>
            <li><button className='btn'>Contact Us</button></li>
        </ul>
      </nav>
  )
}

export default Navbar
