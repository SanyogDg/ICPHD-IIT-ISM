import { Link } from 'react-router-dom';
import './homeregimg.css';

export default function homeImg() {

    function openPDF(fileName) {
        const fileUrl = `./${fileName}.pdf`;
        window.open(fileUrl, '_blank');
    };

    return (
        <div className="w-[100vw] hecss bg-[url('./images/bgmain6.png')]
        bg-no-repeat bg-cover bg-center min-h-screen min-w-screen relative">
            <div className="bgImg w-[100vw] h-[100vh] flex flex-row justify-center items-center hecss ">

                <div className='w-[50vw] flex flex-col mt-14 items-center opacity-100 respCon'>

                    <div className='text-[2rem] font-bold text-white text-center opacity-100 resph'> ICPHD'2024 <br /> Sustainability through energy transition.
                    </div>

                    <div className='flex align-center justify-center p-4 respB'>
                        <button
                            className="m-2 p-8 md:p-4  flex justify-start items-center h-[3rem] text-[1.2rem] md:text-[1.4rem] font-semibold text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-[2rem] animate-pulse shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                            onClick={() => openPDF('./ICPHD_Technical_Session')}>
                            Technical Schedule
                        </button>
                    </div>

                    <div className='flex align-center justify-center  respB'>
                        <button
                            className=" my-[1rem] w-[10rem] h-[3rem] text-[1.5rem] font-semibold text-white bg-blue-500 rounded-[2rem] animate-color-load"
                            onClick={() => openPDF('icphd2024')}>
                            Brochure
                        </button>
                        <Link to={"/registration"}>
                            <button className=" my-[1rem] mx-[1rem] w-[10rem] h-[3rem] text-[1.5rem] font-semibold text-white bg-blue-500 rounded-[2rem] animate-color-load">
                                Register
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
