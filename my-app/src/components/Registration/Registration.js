import React, { useState } from "react";
import "./registration.css";
// import Footer from '../Footer/Footer'
import Prices from "./Prices";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
  integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
  crossorigin="anonymous"
></link>;


function Registration() {


  return (
    <>
     
      <div className="respcss">
        <div className="wrapper">
          <div className="reg-h">
            <div>
              <h1>Registration Is On!</h1>
              <p>"Fueling Connections: Register Now for PetroCon 2024!"</p>
            </div>
          </div>
        </div>

        {/* <div className='reg-hz-line'></div> */}
        <div className="reg-container">
          <div className="reg-sub-h">
            <h2>Important Instruction :</h2>
          </div>
          <div className="reg-p">
            <span>
              (1) Candidates are advised to do payment first and thereafter go
              through the registration process.
            </span>
            <span>
              (2) All the participants have to submit the registration fee online to IIT (ISM)
Dhanbad using the given Link.

            </span>
            <ol style={{ listStyleType: "upper-roman", paddingLeft:"65px", color:"#504d4d" }}>
 <li>Select “conference/course fee” from the payment category dropdown menu.
</li>
<li> Select “others” from the program name options.
</li>
<li>Specify "ICPHD2024" as the conference/course title.</li>
</ol>
            <span>
              (3) Once the payment has been done, the authors need to fill the
              REGISTRATION FORM for their confirmation.
            </span>
            <span>
              (4) Only after filling the registration form, your registration
              will be COMPLETED.
            </span>
            <span>
              (5) Certificate will be issued to the registered participants
              ONLY.
            </span>
            <span>
              (6) Confirmation mail will be send to participants after
              verfication of the payment. It may take 2 working days for getting
              confirmation from us.
            </span>
          </div>
        </div>

        <div className="reg-payment-container">
          <div className="payment-left">

            {/* <p>
              {" "}
              <strong>Account Name:</strong> International Conference on
              Petroleum, <br /> Hydrogen and Decarbonisation (ICPHD)
            </p>

            <p>
              {" "}
              <strong>Account Number:</strong> 120023899184
            </p>

            <p>
              {" "}
              <strong>IFSC Code:</strong> CNRB0008652{" "}
            </p>

            <p>
              {" "}
              <strong>MICR Code:</strong> 781015008{" "}
            </p>

            <p>
              {" "}
              <strong>SWIFT Code:</strong> CNRBINBBBFD
            </p>

            <p>
              {" "}
              <strong>Bank Name & Branch:</strong> Canara Bank, IIT ISM
            </p> */}
            <a
      className="my-[1rem] w-[10rem] h-[3rem] text-[1.5rem] font-semibold text-white bg-blue-500 rounded-[2rem] flex items-center justify-center hover:bg-blue-700 hover:scale-110"
      href="https://forms.gle/buhdgEMuuqzxA9Rq7"
     
      target="_blank"
      rel="noopener noreferrer"
    >
      Register
    </a>


          </div>
          <div className="payment-right">
          <a
      className="my-[1rem] w-[10rem] h-[3rem] text-[1.5rem] font-semibold text-white bg-red-500 rounded-[2rem] flex items-center justify-center hover:bg-red-700 hover:scale-110"
      // href="https://forms.gle/buhdgEMuuqzxA9Rq7"
      href="https://eps.eshiksa.net/DirectFeesv3/IIT_Dhanbad/index"
      target="_blank"
      rel="noopener noreferrer"
    >
      Pay Fee
    </a>
          </div>
        </div>

        <Prices />
        <div className="reg-notes">
          <h2>Notes</h2>
          <hr className="reg-notes-hr"></hr>
          <div className="reg-notes-p">
            <span>
              (1) The Registration fee includes, registration kit and access to
              conference venue.
            </span>{" "}
            <br />
            <span>(2) The Registration fee is Non-refundable.</span> <br />
            <span>
              (3) Spot Registration can be done with 10% additional fee.
              However, you must register to confirm you participation.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
