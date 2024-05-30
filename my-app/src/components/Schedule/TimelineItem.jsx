import React from 'react';
import styles from './TimelineItem.module.css';

function TimelineItem({ date, description, icon, isFirst }) {
  return (
    <div className={styles.timelineItem}>
      <div className={`${styles.timelineIcon} ${isFirst ? styles.firstItem : ''}`}>
        <i className={icon}></i>
      </div>
      <div className={styles.timelineContent}>
        <div className={styles.date}>{date}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
}

export default TimelineItem;
