import React from 'react'
import profcontact from '../../images/profnitishhsnvkbklidjb.jpg'
import mailimg from '../../images/email.webp'
import phone from '../../images/phone.png'
import '../Contactus/Contactus.css'

const Contactus = () => {
  return (
    <div className='conres'>
    <div className='flex align-center justify-center text-3xl font-bold mt-[55px] text-red-600'>Contact Us</div>

        <div className='flex flex-wrap justify-center align-center '>
            <div className='m-14 text-center' >
                <img src={profcontact} alt='contact' className='profimg'></img>

                <ul className=''>
                    <li>Prof. Nitish Kumar Maurya</li>
                    <li>Associate Professor</li>
                    <li>Department of Petroleum Engineering</li>
                    <li>Indian Institute of Technology</li>
                    <li>Indian School of Mines, Dhanbad-826004</li>
                    <li>Jharkhand,India</li>
                </ul>
            </div>

            <div className='m-14 text-center'>
                <img src={mailimg} alt='mail' className='h-[150px]'></img>
                <ul>
                    <li>
                    Email:
                    <br></br>
                    pe@iitism.ac.in
                            
                    </li>
                    <li>
                    neetish@iitism.ac.in
                    </li>
                </ul>
            </div>

            <div className='m-14 px-5 text-center'>
                <img src={phone} alt='phone' className='h-[150px]'></img>
                <ul>
                    <li>Phone: 
                    <br></br>
                    0326-223-5280 (O)</li>
                </ul>
            </div>
            
        </div>
    </div>
  )
}

export default Contactus;