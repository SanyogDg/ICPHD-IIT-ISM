import React from 'react'
import biglogo from '../../images/ismlogobig.png'
import { BsCCircle } from "react-icons/bs";
import '../Footer/Footer.css'
function scroolontop() {
    window.scroll({
        left: 0,
        top: 0,
        behaviour: 'smooth',
    })

}

// const helloo = document.getElementById('deptlink')

// function changecss() {
//     helloo.style.backgroundColor = 'red';
//     helloo.style.padding='9px';
// }

const Footer = () => {
    return (
        <div>

            <div className='flex align-center justify-center bg-red-300'>
                <div className='flex align-center justify-center align-center'>
                    <img src={biglogo} className='h-[150px] bg-red-600  m-2'></img>
                </div>
            </div>
            <div className='bg-blue-700 flex justify-between align-center text-white p-2 h-14 '>
 
                <a href='https://petroleum.iitism.ac.in/' className='connection' ><BsCCircle />
                    Department of Petroleum Engineering,IIT (ISM) Dhanbad, 2024</a>


                <div onClick={scroolontop} className='customicon' >

                    <img src='https://cdn-icons-png.flaticon.com/512/10695/10695916.png' className='h-7 w-7 ml-8 mt-2'></img>
                </div>
            </div>
        </div>
    )
}

export default Footer;