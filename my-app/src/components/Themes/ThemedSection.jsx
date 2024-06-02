import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './ThemedSection.css';

const ThemedSection = ({ image, heading, content, reverse }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`themed-section ${reverse ? 'reverse' : ''}`}>
      <motion.div
        className="themed-section-image"
        initial={{ x: reverse ? -100 : 100, opacity: 0 }}
        animate={{ x: inView ? 0 : reverse ? -100 : 100, opacity: inView ? 1 : 0 }}
        exit={{ x: reverse ? -100 : 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src={image} alt="Theme" />
      </motion.div>
      <motion.div
        className="themed-section-content"
        initial={{ x: reverse ? 100 : -100, opacity: 0 }}
        animate={{ x: inView ? 0 : reverse ? 100 : -100, opacity: inView ? 1 : 0 }}
        exit={{ x: reverse ? 100 : -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>{heading}</h2>
        <p>{content}</p>
      </motion.div>
    </div>
  );
};

export default ThemedSection;
