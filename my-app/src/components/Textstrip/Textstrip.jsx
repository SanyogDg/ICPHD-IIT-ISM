import React, { useState } from 'react';
import Marquee from 'react-marquee-slider';
import './Textstrip.css';
import { useNavigate } from 'react-router-dom';
const Textstrip = () => {
    const [hovered, setIsHovered] = useState(false);
    function openPDF() {
        const fileUrl = './icphd2024.pdf';
        window.open(fileUrl, '_blank');
    };
    const navigating = useNavigate();
    const gotoregister = () => {
        navigating('./registration');
    }
    return (
        <>
            <div className="textstrip-container" onMouseEnter={()=>{setIsHovered(true)}} onMouseLeave={()=>{setIsHovered(false)}}>
                <Marquee velocity={hovered? 0:80} pauseOnHover={true}>
                    <div className='submit'>*Selected papers will be published in a special Issue of Springer Nature Journal*</div>
                    <div className='brochure'><span onClick={openPDF}>*Click to download Brochure*</span></div>
                    <div className='registercss'><span onClick={gotoregister}>*Click to Register*</span></div>
                </Marquee>
            </div>
        </>
    );
}

// <Marquee behavior="scroll"
//                     scrollamount="15"
//                     onMouseOver={() => this.stop()}
//                     onMouseOut={() => this.start()}>
//                     <span className="textstrip">
//                         <span className="separator">|</span>Abstract submission open till 15th November 2024.
//                     </span>
//                     <span className="textstrip" onClick={openPDF}>
//                         <span className="separator">|</span>Click to download Brochure
//                     </span>
//                     <span className="textstrip">
//                         <span className="separator">|</span><Link to={"/registration"}>Click to Register</Link>
//                     </span>
//                 </Marquee>

export default Textstrip;
