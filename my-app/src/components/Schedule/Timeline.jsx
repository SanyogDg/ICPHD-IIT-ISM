import React from 'react';
import TimelineItem from './TimelineItem';
import styles from './Timeline.module.css';

const events = [
  { date: '1st Sept 2024', description: 'Abstract Submission Starts', icon: 'fas fa-times-circle' },
  { date: '30th Sep 2024', description: 'Abstract Submission Closes', icon: 'fas fa-sign-in-alt' },
  { date: '30th Oct 2024', description: 'Notification of Acceptance', icon: 'fas fa-file-alt' },
  { date: '1st Nov 2024', description: 'Registration Starts', icon: 'fas fa-bell' },
  { date: '30th Nov 2024', description: 'Registration Ends', icon: 'fas fa-door-closed' }
];

function Timeline() {
  return (
    <div className={styles.timelineContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Conference Schedule</h1>
      </header>
      <div className={styles.timeline}>
        {events.map((event, index) => (
          <TimelineItem 
            key={index}
            date={event.date}
            description={event.description}
            icon={event.icon}
            isFirst={index === 0}
          />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
