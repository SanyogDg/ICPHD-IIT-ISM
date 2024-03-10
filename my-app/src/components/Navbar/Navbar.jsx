import React from 'react'
import './Navbar.css'
import logo from '../../images/ism_logo.png'
const Navabar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo' />
        <ul>
            <li>Home</li>
            <li>Registrations</li>
            <li>Themes</li>
            <li>About us</li>
            <li><button className='btn'>Contact Us</button></li>
        </ul>
    </nav>
  )
}

export default Navabar
