import React from 'react';
import styles from './Cstyle.module.css';

function Cards({ members }) {
  return (
    <div className={styles.cardscontainer}>
      {members.map((member, index) => (
        <aside key={index} className={styles['profile-card']}>
          <div className={styles['mask-shadow']}></div>
          <header className={styles.header}>
            <h1 className={styles['profile-title']}>{member.name}</h1>
            <h2 className={styles['profile-subtitle']}>{member.por}</h2>
          </header>
          <div className={styles['profile-bio']}>
            <p>{member.position}</p>
          </div>
        </aside>
      ))}
    </div>
  );
}

export default Cards;
