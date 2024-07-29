import React from 'react'
import './sponsor.css'
import rg from '../../images/oilIndia.png'
export const Sponsorspage = () => {
  return (
    <div className='h-[100vh] flex flex-col items-center justify-center mt-[2rem]'>
      <div className='flex justify-center align-center  mt-[2rem] '>
        <div className='heading text-red-600 text-4xl mb-3 '>Sponsors</div>
      </div>
      <div>
        
      <li className='mx-14 mt-[2rem] flex flex-col items-center justify-center mb-1'>
        {/* <h1 className="text-3xl">Coming Soon !</h1> */}
          <img src={rg} className='h-[90%] w-[200px]  p-2 mt-8' alt="Profile" /> 
         {/* <h1 className="text-3xl mt-1 color-blue-500">Oil India</h1> */}

      </li>

      </div>
    </div>
  )
}
