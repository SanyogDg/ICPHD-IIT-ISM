import React, { useState } from "react";
import "./registration.css";
import qr from "../../images/qr.jpg";
// import Footer from '../Footer/Footer'
import Prices from "./Prices";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
  integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
  crossorigin="anonymous"
></link>;


function Registration() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
     {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Register</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter name" />
              </div>

              <div className="form-group">
                <label htmlFor="place">Place</label>
                <input type="text" id="place" name="place" placeholder="Enter place" />
              </div>

              <div className="form-group">
                <label htmlFor="number">Number</label>
                <input type="text" id="number" name="number" placeholder="Enter number" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter email" />
              </div>

              <div className="form-group">
                <label htmlFor="paymentId">Payment ID</label>
                <input type="text" id="paymentId" name="paymentId" placeholder="Enter payment ID" />
              </div>

              <div className="form-group">
                <label htmlFor="screenshot">Upload Screenshot</label>
                <input type="file" id="screenshot" name="screenshot" />
              </div>

              <div className="form-actions">
                <button type="button" onClick={handleCloseModal}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
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
              (2) All the participants have to submit the registration fee
              through NEFT/SWIFT/Wire Transfer or UPI (Only for Indian
              Participants).
            </span>
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

            <p>
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
            </p>

            <button className="my-[1rem] w-[10rem] h-[3rem] text-[1.5rem] font-semibold text-white bg-blue-500 rounded-[2rem] hover:bg-blue-700  hover:scale-110" onClick={handleOpenModal}>
              Register
            </button>


          </div>
          <div className="payment-right">
            <img src={qr} alt="Not Found !" />
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
              (3) Spot Registration can be done with 20% additional fee.
              However, you must register to confirm you participation.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
