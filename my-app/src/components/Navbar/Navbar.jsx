import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../images/ism_logo.png'
import {NavLink} from 'react-router-dom'
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
            <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/"><li>Home</li></NavLink>
            <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/registration"><li>Registration</li></NavLink>
            <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/themes"><li>Themes</li></NavLink>
            <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/about"><li>About</li></NavLink>
        </ul>
    </nav>
  )
}

export default Navabar
