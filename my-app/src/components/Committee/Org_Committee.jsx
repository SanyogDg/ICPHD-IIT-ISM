import React from 'react'
import styles from './OrgC.module.css'
import Cards from './Cards'
function Org_Committee() {


  let members =[{
    name:"Prof. Prem Vrat",
    por:"Cheif Patron",
    position:"Chairman, IIT (ISM) Dhanbad"
  },
  {
    name: "Prof. J.K.Pattanayak",
    por:"Patron",
    position:"Officiating Director, IIT(ISM) Dhanbad"
  },
  {
    name: "Prof. Keka Ojha",
    por:"Chairperson and Convener",
    position:"(HOD/PE), IIT (ISM) Dhanbad"
  },
  {
    name: "Prof. Archana",
    por:"Co-Convener",
  },
  {
    name: "Prof. N.K.Maurya",
    por:"Co-Convener",
  },
  {
    name: "Prof. T.K.Naiya",
    por: "Organising Secretary",
  },
  {
    name: "Prof. Vinay Kumar Rajak",
    por:"Joint Secretary",
  },
  {
    name: "Prof. Pawan Gupta",
    por:"Treasurer",
  },
  {
    name: "Prof. Mohammed Hamid Siddique",
    por:"Joint Treasurer",
  },
  {
    name: "Prof. Sayantan Ghosh",
    por:"Joint Secretary(Communication)",
  },
  {
    name: "Prof. Rajeev Upadhyay",
    por: "Joint Secretary(Outreach)",
  },
  {
    name: "Prof. Chanfan Sahu",
    por: "Joint Secretary(Outreach)",
  },


]
  return (
    <>
   
    <div className={styles.container}>
    <h2 className={styles.heading}>Organizing Committee</h2>
    <div >
  <Cards members = {members}/>
    </div>
    </div>
 
    </>
  )
}

export default Org_Committee