import React from 'react'
import "./registration.css"
import qr from "../../images/qr.jpg"

function Registration() {
  return (
  <>
  <section>
    <div className='photo'>
    <div className='reg-h'>
    {/* <h1>Registration Page</h1> */}
   <h1 className='animate-charcter'>
    <div class="waviy">
    <span style={{'--i': 1}}>R</span>
      <span style={{'--i': 2}}>E</span>
      <span style={{'--i': 3}}>G</span>
      <span style={{'--i': 4}}>I</span>
      <span style={{'--i': 5}}>S</span>
      <span style={{'--i': 6}}>T</span>
      <span style={{'--i': 7}}>R</span>
      <span style={{'--i': 8}}>A</span>
      <span style={{'--i': 9}}>T</span>
      <span style={{'--i': 10}}>I</span>
      <span style={{'--i': 11}}>O</span>
      <span style={{'--i': 12}}>N</span>
      <span style={{'--i': 13}}>-</span>
      <span style={{'--i': 14}}>P</span>
      <span style={{'--i': 15}}>A</span>
      <span style={{'--i': 16}}>G</span>
      <span style={{'--i': 17}}>E</span>
  </div>
  
  </h1>
    </div>
    
    </div>
    
     <div className='reg-hz-line'></div>
    <div className='reg-container'>
  
    <div className='reg-sub-h'><h2>Important Instruction :</h2></div>
<div className='reg-p'> 


<span>(1) Candidates are advised to do payment first and thereafter go through the registration process.</span>
<span>(2) All the participants have to submit the registration fee through NEFT/SWIFT/Wire Transfer or  UPI (Only for Indian Participants).
</span>
<span>(3) Once the payment has been done, the authors need to fill the REGISTRATION FORM for their confirmation.
</span>
<span>(4) Only after filling the registration form, your registration will be COMPLETED.
</span>
<span>(5) Certificate will be issued to the registered participants ONLY.
</span>
<span>(6) Confirmation mail will be send to participants after verfication of the payment. It may take 2 working days for getting confirmation from us.
</span>

</div>
    </div>

    <div className='reg-payment-container'>
      <div className='payment-left'>
        <p> <strong>Account Name:</strong>   International Conference on Petroleum, Hydrogen and Decarbonisation (ICPHD)</p>

        <p> <strong>Account Number:</strong> 120023899184</p>

        <p> <strong>IFSC Code:</strong>  CNRB0008652 </p>

        <p> <strong>MICR Code:</strong>  781015008 </p>

        <p>  <strong>SWIFT Code:</strong> CNRBINBBBFD</p>

        <p> <strong>Bank Name & Branch:</strong>   Canara Bank, IIT ISM</p>

    <button className="my-[1rem] w-[10rem] h-[3rem] text-[1.5rem] font-semibold text-white bg-blue-500 rounded-[2rem] hover:bg-blue-700  hover:scale-110">Submit</button> 
      </div>
      <div className='payment-right'>
     <img src={qr} alt='Not Found !'/>
      </div>
    </div>

    
  </section>
  </>
  )
}

export default Registration
