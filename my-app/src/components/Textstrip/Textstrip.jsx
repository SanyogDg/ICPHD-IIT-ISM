import React from 'react';
import Marquee from 'react-marquee-slider';
import './Textstrip.css';
import { Link } from 'react-router-dom';

const Textstrip = () => {
    function openPDF() {
        const fileUrl = './icphd2024.pdf';
        window.open(fileUrl, '_blank');
    };

    return (
        <>
            <div className="textstrip-container">
                <Marquee behavior="scroll"
        scrollamount="15"
        onMouseOver={() => this.stop()}
        onMouseOut={() => this.start()}>
                    <span className="textstrip" onClick={openPDF}>
                        <span className="separator">|</span>Click to download Brochure
                    </span>
                    <span className="textstrip">
                        <span className="separator">|</span> {/* Gap between items */}
                        <Link to={"/registration"}>Click to Register</Link>
                    </span>
                </Marquee>
                <Marquee behavior="scroll"
        scrollamount="15"
        onMouseOver={() => this.stop()}
        onMouseOut={() => this.start()}>

                    {[<span className="textstrip">
                        <span className="separator">|</span>Abstract submission open till 15th November 2024.
                    </span>]}
                </Marquee>
            </div>
        </>
    );
}

export default Textstrip;
