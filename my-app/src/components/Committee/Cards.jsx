import React from 'react'

import styles from './Cstyle.module.css'
import dp from '../../images/jk-patnayak.jpg'


function Cards({members}) {
  return (
    <>

    {/* Another type of card */}

   {/* //  <div className={styles.card}>
//  <div className={styles.imgc}><img src={dp} alt="Avatar" className={styles.img}/></div>
//   <div className={styles.container1}>
//     <h4><b>{member.name}</b></h4> 
//     <p>{member.por}</p> 
//     <p>{member.position}</p> 
//   </div>
//  </div> */}
   

    <div className={styles.cardscontainer}>
    {members.map(member =>(
  
<aside className={styles['profile-card']}>
<div className={styles['mask-shadow']}></div>
<header className={styles.header}>
  <a href="https://tutsplus.com">
    <img
      src={dp}
      alt="404 error"
      className={styles['profile-image']}
    />
  </a>
  <h1 className={styles['profile-title']}>{member.name}</h1>
  <h2 className={styles['profile-subtitle']}>{member.por}</h2>
</header>
<div className={styles['profile-bio']}>
  <p>{member.position}</p>
</div>
</aside>
   

    ))}
    </div>
    </>
  )
}

export default Cards