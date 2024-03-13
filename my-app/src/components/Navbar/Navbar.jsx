import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../images/ism_logo.png'
const Navabar = () => {
  // Navbar color changes when the page is scrolled.
  const [Colornav,setColornav]=useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 725 ? setColornav(true) : setColornav(false);
    })
  },[]);
// ****
  return (
    <nav className={ `'container' ${Colornav? 'coloractive' : ''}` }
    >
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
