"use client";

import React, { useState, useEffect } from "react";
import styles from "./countdown.module.css";

export const CountdownSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Target date: December 20, 2026
    const targetDate = new Date("December 20, 2026 00:00:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calculate immediately on mount
    calculateTimeLeft();

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format single digits with leading zero
  const formatNumber = (num: number) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <section className={styles.countdownSection}>
      <div className={`container ${styles.content}`}>
        <h3 className={styles.kicker}>Mumbai International Convention Centre</h3>
        <h2 className={styles.title}>Countdown to Award Event</h2>
        
        <div className={styles.timerGrid}>
          <div className={styles.timeBlock}>
            <span className={styles.number}>{formatNumber(timeLeft.days)}</span>
            <span className={styles.label}>Days</span>
          </div>
          
          <span className={styles.separator}>/</span>
          
          <div className={styles.timeBlock}>
            <span className={styles.number}>{formatNumber(timeLeft.hours)}</span>
            <span className={styles.label}>Hours</span>
          </div>
          
          <span className={styles.separator}>/</span>
          
          <div className={styles.timeBlock}>
            <span className={styles.number}>{formatNumber(timeLeft.minutes)}</span>
            <span className={styles.label}>Mins</span>
          </div>
          
          <span className={styles.separator}>/</span>
          
          <div className={styles.timeBlock}>
            <span className={styles.number}>{formatNumber(timeLeft.seconds)}</span>
            <span className={styles.label}>Secs</span>
          </div>
        </div>
      </div>
    </section>
  );
};
