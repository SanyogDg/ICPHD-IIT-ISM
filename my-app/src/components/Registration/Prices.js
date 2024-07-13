import React from 'react'
import "./registration.css"
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"></link>

function Prices() {
  return (
    <>
  <h1 className='price-h'>Registration fees</h1>
  <hr className='price-hr'></hr>
  {/* <div className='price-sub-h'>Fees includes 18% GST</div> */}
  <table id='customers'>
    <tr>
        <th>Category</th>
        <th>Prices</th>
    </tr>
    <tr>
        <td>Industrial Participants</td>
        <td>INR 15,000 (300 USD)</td>
    </tr>
    <tr>
        <td>Start-up Company, Exhibitors and R&D Labs</td>
        <td>INR 10,000 (150 USD)</td>
    </tr>
    <tr>
        <td>Academic Institution</td>
        <td>INR 8,000 (120 USD)</td>
    </tr>
    <tr>
        <td>Post-Doc, PhD & PG Students</td>
        <td>INR 4,000 (60 USD)</td>
    </tr>
    <tr>
        <td>Undergraduate Student</td>
        <td>INR 2,000 (30 USD)</td>
    </tr>
   
  </table>
    </>
  )
}

export default Prices