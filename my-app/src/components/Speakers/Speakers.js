import React from 'react'
import "./Speakers.css"

import dp from "../Speakers/Speakerimg/dp.jpg"
import gd from "../Speakers/Speakerimg/GD.jpg"
import hs from "../Speakers/Speakerimg/HS.jpg"
import kkp from "../Speakers/Speakerimg/KKP.jpg"
import sm from "../Speakers/Speakerimg/SM.jpg"
import sv from "../Speakers/Speakerimg/SV.jpg"
import rg from "../Speakers/Speakerimg/Rakesh-godawar.jpeg"
function Speakers(){
    return (
        <>
               <div className='h-[70vh] flex-col items-center justify-center'>
               <div className='flex justify-center align-center  mt-[4rem] '>
                    <div className='heading text-red-600 text-4xl mb-3 '>Planetary Speakers</div>
                </div>
      <li className='mx-14 mt-6 flex flex-col items-center justify-center'>
        <img src={rg} className='h-[200px] w-[200px] rounded-full p-2' alt="Profile" />
        <h1 className="text-xl">Prof. Rakesh Godawat</h1>
        <p className="place">AVP - G & G and Reservoir at Sun Petrochemicals Pvt. Ltd.</p>
      </li>
    </div>
            {/* <div className='frecss '>
                


                <div className=''>
                <div className='flex justify-center align-center  mt-[4rem] '>
                    <div className='heading text-red-600 text-4xl mb-3 '>Planetary Speakers</div>
                </div>
                    <ul className='flex justify-center align-center ml-14 mobile frecss'>
                        <li className='mx-14 mt-6 text-center'><img src={dp} className='h-[200px] w-[200px] rounded-[50%] p-2'></img>
                            <h1 className="text-xl ">Prof. Suddhasatwa Basu</h1>
                            <p className="place">IIT Delhi, India</p>
                        </li>
                        <li className='mx-14 mt-6 text-center'><img src={gd} className='h-[200px] w-[200px] rounded-[50%] p-2'></img>
                            <h1 className="text-xl ">Prof. G D Yadav</h1>
                            <p className="place">ICT Mumbai, India</p>
                        </li>
                        <li className='mx-14 mt-6 text-center'><img src={hs} className='h-[200px] w-[200px] rounded-[50%] p-2'></img>
                            <h1 className="text-xl ">Prof. Hemanta Sarma</h1>
                            <p className="place">University of Calgary, Canada</p>
                        </li>
                    </ul>
                </div>


                <div className=''>
                    <ul className='flex justify-center align-center mt-10 mobile frecss'>
                        <li className='mx-14 mt-6 text-center'><img src={kkp} className='h-[200px] w-[200px] rounded-[50%] p-2'></img>
                            <h1 className="text-xl ">Prof. K. K. Pant</h1>
                            <p className="place">IIT Roorkee, India</p>
                        </li>
                        <li className='mx-14 mt-6 text-center'><img src={sm} className='h-[200px] w-[200px] rounded-[50%] p-2'></img>
                            <h1 className="text-xl ">Prof. Srikant Mishra</h1>
                            <p className="place">Texas A&M University, USA</p>
                        </li>
                        <li className='mx-14 mt-6 text-center'><img text-center src={sv} className='h-[200px] w-[200px] rounded-[50%] p-2'></img>
                            <h1 className="text-xl ">Prof. Shalivahan</h1>
                            <p className="place">IIPE Visakhapatnam, India</p>
                        </li>
                    </ul>
                </div>

            </div>

            
            <div className='mt-5'>
            <div className='hcss '>
                <div className='headingkl text-4xl text-blue-800 '><h1>Keynote Lecture</h1></div>
            </div>
                <ul className='flex justify-center align-center ml-14 mobile frecss'>
                    <li className='mx-14 mt-6 text-center'><img src={dp} className='h-[200px] w-[200px] rounded-[50%] p-2'></img>
                        <h1 className="text-xl ">Prof. Suddhasatwa Basu</h1>
                        <p className="place">IIT Delhi, India</p>
                    </li>
                    <li className='mx-14 mt-6 text-center'><img src={gd} className='h-[200px] w-[200px] rounded-[50%] p-2'></img>
                        <h1 className="text-xl ">Prof. G D Yadav</h1>
                        <p className="place">ICT Mumbai, India</p>
                    </li>
                    <li className='mx-14 mt-6 text-center'><img src={hs} className='h-[200px] w-[200px] rounded-[50%] p-2'></img>
                        <h1 className="text-xl ">Prof. Hemanta Sarma</h1>
                        <p className="place">University of Calgary, Canada</p>
                    </li>
                </ul>
            </div>

            <div className='mb-14 '>
                <ul className='flex justify-center align-center mt-10 mobile frecss'>
                    <li className='mx-14 mt-6 text-center'><img src={kkp} className='h-[200px] w-[200px] rounded-[50%] p-2'></img>
                        <h1 className="text-xl ">Prof. K. K. Pant</h1>
                        <p className="place">IIT Roorkee, India</p>
                    </li>
                    <li className='mx-14 mt-6 text-center'><img src={sm} className='h-[200px] w-[200px] rounded-[50%] p-2'></img>
                        <h1 className="text-xl ">Prof. Srikant Mishra</h1>
                        <p className="place">Texas A&M University, USA</p>
                    </li>
                    <li className='mx-14 mt-6 text-center'><img text-center src={sv} className='h-[200px] w-[200px] rounded-[50%] p-2'></img>
                        <h1 className="text-xl ">Prof. Shalivahan</h1>
                        <p className="place">IIPE Visakhapatnam, India</p>
                    </li>
                </ul>
            </div> */}

    

        </>
    )
}

export default Speakers