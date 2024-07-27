import React from 'react'
import './sponsor.css'
import rg from '../../images/oilIndia.png'
export const Sponsorspage = () => {
  return (
    <div className='h-[70vh] flex-col items-center justify-center mt-28'>
      <div className='flex justify-center align-center  mt-[4rem] '>
        <div className='heading text-red-600 text-4xl mb-3 '>Sponsors</div>
      </div>
      <div>
        
      <li className='mx-14 mt-6 flex flex-col items-center justify-center'>
        {/* <h1 className="text-3xl">Coming Soon !</h1> */}
          <img src={rg} className='h-[100%] w-[200px]  p-2' alt="Profile" /> 
         <h1 className="text-3xl mt-5">Oil India</h1>

      </li>

      </div>
    </div>
  )
}
