import React, { useState } from 'react'
import styles from './OrgC.module.css'
import Cards from './Cards'

function Org_Committee() {

 

  const members = [
    { name: "Prof. Prem Vrat", por: "Chief Patron", position: "Chairman, IIT (ISM) Dhanbad" },
    { name: "Prof. Sukumar Mishra", por: "Patron", position: "Director, IIT (ISM) Dhanbad" },
    { name: "Prof. Keka Ojha", por: "Chairperson and Convener", position: "(HOD/PE), IIT (ISM) Dhanbad" },
    { name: "Prof. Archana", por: "Co-Convener" },
    { name: "Prof. N.K. Maurya", por: "Co-Convener" },
    { name: "Prof. T.K. Naiya", por: "Organising Secretary" },
    { name: "Prof. Vinay Kumar Rajak", por: "Joint Secretary" },
    { name: "Prof. Pawan Gupta", por: "Treasurer" },
    { name: "Prof. Md. Hamid Siddique", por: "Joint Treasurer" },
    { name: "Prof. Sayantan Ghosh", por: "Joint Secretary(Communication)" },
    { name: "Prof. Rajeev Upadhyay", por: "Joint Secretary(Outreach)" },
    { name: "Prof. Chandan Sahu", por: "Joint Secretary(Outreach)" },
    { name: "Dr. Sumit Kumar", por: "Assistant Professor at IIT Guwahati" },
    { name: "Dr. Pankaj Tiwari", por: "Associate Professor at IIT Guwahati" },

    { name: "Prof. Ashutosh Kumar" },
    { name: "Prof. Ajay Mandal" },
    { name: "Prof. Chandan Guria" },
    { name: "Prof. Vikas Mahto" },
    { name: "Prof. Ajay Suri" },
    { name: "Prof. Raj Kiran" },
    { name: "Mr. A. K. Rai" }
  ];

  return (
    <>
   
    <div className={styles.container}>
      <h2 className={styles.heading}>Organizing Committee</h2>
      <Cards members={members} />
    </div>
 
    </>
  )
}

export default Org_Committee