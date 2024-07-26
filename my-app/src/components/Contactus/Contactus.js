import React from 'react'
import profcontact from '../../images/profnitishhsnvkbklidjb.jpg'
import mailimg from '../../images/email.webp'
import phone from '../../images/phone.png'
import '../Contactus/Contactus.css'

const   Contactus = () => {

    const emailfun = () => {
        window.location.href = "mailto:icphd24@gmail.com";
    }
    const phonefun = () => {
        window.open("tel:+91 94711 91367")
    }
  return (
    <div className='conres'>
    <h1 className='flex items-center justify-center text-3xl font-bold mt-[55px] text-red-600'>Contact Us</h1>

        <div className='flex flex-col items-center md:flex-row justify-center mt-10'>
            <div className='mx-14 mt-8 text-center' >
                <img src='proftknaiya.jpg' alt='contact' className='profimg'></img>

                <ul className=''>
                    <li>Prof. T. K. Naiya</li>
                    <li>Organising Secretary</li>
                    <li>Department of Petroleum Engineering</li>
                    <li>Indian Institute of Technology</li>
                    <li>Indian School of Mines, Dhanbad-826004</li>
                    <li>Jharkhand,India</li>
                </ul>
            </div>

            <div className='mx-14 mt-8 text-center'>
                <img src={mailimg} alt='mail' className='h-[150px]'></img>
                <ul>
                    <li onClick={emailfun} >
                    Email:
                          <br></br>
                          <span className='emailcss'>icphd24@gmail.com</span>
                    </li>
                </ul>
            </div>

            <div className='mx-14 mt-8 px-5 text-center'>
                <img src={phone} alt='phone' className='h-[150px]'></img>
                <ul>
                    <li onClick={phonefun}>Phone: 
                          <br></br>
                          <span className='emailcss'>+91 94711 91367</span>
                     </li>
                </ul>
            </div>
            
        </div>
    </div>
  )
}

export default Contactus;