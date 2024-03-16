import React from 'react'
import './Aboutus.css'
import about_img from "../../images/ism_logo.png"

const Aboutus = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} alt='' className='about-img'/>
      </div>
      <div className='about-right'>
        <h3>ABOUT UNIVERSITY</h3>
        <h2>SOMETHING SOMETHING</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, iure!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium necessitatibus mollitia fuga tempora accusamus similique reprehenderit commodi harum quas. Cumque.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, culpa.</p>
      </div>
    </div>
  )
}

export default Aboutus
