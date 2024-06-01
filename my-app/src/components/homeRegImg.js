import {Link} from 'react-router-dom'
export default function homeImg()
{
    function openPDF(){
        const fileUrl = '/Brochure.pdf'; 
        window.open(fileUrl, '_blank');
      };
    return(
        <div className="w-[100vw] h-[100vh]  bg-[url('./images/bgmain6.png')]
        bg-no-repeat bg-cover bg-center ">
            <div className="bgImg w-[100vw] h-[100vh] flex flex-row justify-center items-center ">

            <div className="w-[50vw] flex flex-col items-center opacity-100">

                <div className="text-[2rem] font-bold text-white text-center opacity-100"> Fueling Your Journey with Quality Petroleum Solutions
                </div>

                <div className="text-[1.2rem] font-semibold text-brown-500 text-center text-white">  
                Register now to access exclusive offers, expert advice, and personalized services tailored to your specific requirements.
                </div>
                
                    <div className='flex align-center justify-center p-4'>  
                     <button className="my-[1rem] w-[10rem] h-[3rem] text-[1.5rem] font-semibold text-white bg-blue-500 rounded-[2rem] hover:bg-blue-700  hover:scale-110" onClick={openPDF}>Brochure</button> 
                    <Link to={"/registration"}> <button className="my-[1rem] mx-[1rem] w-[10rem] h-[3rem] text-[1.5rem] font-semibold text-white bg-blue-500 rounded-[2rem] hover:bg-blue-700  hover:scale-110">Register</button> </Link>
                </div>
                    
                    
            </div>
            </div>
       </div>
    );
}
