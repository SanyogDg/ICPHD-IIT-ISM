import React from 'react'

import styles from './Cstyle.module.css'
// import dp from '../../images/jk-patnayak.jpg'


function Cards({members}) {
  return (
    <>

    <div className={styles.cardscontainer}>
    {members.map(member =>(
  
<aside className={styles['profile-card']}>
<div className={styles['mask-shadow']}></div>
<header className={styles.header}>
  {/* <a href="https://tutsplus.com">
    <img
      src={dp}
      alt="404 error"
      className={styles['profile-image']}
    />
  </a> */}
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