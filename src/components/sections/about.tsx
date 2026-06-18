"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./about.module.css";

interface AboutContent {
  title: string;
  subtitle: string;
  paragraphs: string[];
  image: string;
}

interface AboutSectionProps {
  initialAbout?: AboutContent;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ initialAbout }) => {
  const displayTitle = initialAbout?.title || "About the Awards";
  const displayKicker = initialAbout?.subtitle || '"Every word you write is a step towards your legacy."';
  const displayParagraphs = initialAbout?.paragraphs || [
    "Celebrating corporate excellence, pioneering innovations, and outstanding leadership achievements worldwide. The Global Awards is a prestigious platform dedicated to recognizing achievements of businesses.",
    "Through a rigorous evaluation process judged by a distinguished panel of industry experts, we ensure the most high-impact accomplishments are celebrated."
  ];
  const displayImage = initialAbout?.image || "/assets/typewriter_legacy.png";

  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.grid}`}>
        
        {/* Left Column - Text Content */}
        <motion.div 
          className={styles.textContent}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>{displayTitle}</h2>
          <div className={styles.divider}></div>
          <div className={styles.contentBody}>
            <p className={styles.kicker}>{displayKicker}</p>
            {displayParagraphs.map((para, index) => (
              <p key={index} className={styles.paragraph}>
                {para}
              </p>
            ))}
          </div>
          <button className={styles.button}>Read Full Mission</button>
        </motion.div>

        {/* Right Column - Visual/Image Layout */}
        <motion.div 
          className={styles.visualContent}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className={styles.yellowOffset}></div>
          <div className={styles.imageCard}>
            <div className={styles.imageWrapper}>
              <Image 
                src={displayImage} 
                alt={`${displayTitle} - Visual representation`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.typewriterImage}
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

