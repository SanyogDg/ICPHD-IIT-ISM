import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../images/ism_logo.png'
import {NavLink} from 'react-router-dom'
const Navabar = () => {
  // Navbar color changes when the page is scrolled.
  const [Colornav,setColornav]=useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setColornav(true) : setColornav(false);
    })
  },[]);
// ****
  return (
    <nav className={ `'container' ${Colornav? 'navcoloractive' : ''}` }
    >
        <img src={logo} alt="" className='logo ' />
        <ul className='heading'>
            <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/"><li>Home</li></NavLink>
            <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/registration"><li>Registration</li></NavLink>
            <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/themes"><li>Themes</li></NavLink>
            <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/about"><li>About</li></NavLink>
             <button className={`${Colornav? 'btnactivecolnav':'btn'}`}>Contact Us</button>
        </ul>
    </nav>
  )
}

export default Navabar
