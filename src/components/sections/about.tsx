"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "../ui/section-header";
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
  const displaySubtitle = initialAbout?.subtitle || "Celebrating corporate excellence, pioneering innovations, and outstanding leadership achievements worldwide.";
  const displayParagraphs = initialAbout?.paragraphs || [
    "The Global Awards is a prestigious platform dedicated to recognizing, honoring, and amplifying the achievements of businesses and corporate leaders. In a rapidly evolving economic landscape, we aim to shine a bright spotlight on organizations and individuals who have made exceptional contributions across technology, sustainability, leadership, and startup ecosystems.",
    "Our awards seek to highlight both established industry giants and emerging startups, providing them with global recognition, credibility, and networking support. We believe that celebrating these successes inspires the next generation of business leaders and drives meaningful progress.",
    "Through a rigorous and transparent evaluation process judged by a distinguished panel of industry experts, corporate leaders, and seasoned analysts, we ensure that the most inspiring and high-impact accomplishments are celebrated on our global stage."
  ];
  const displayImage = initialAbout?.image || "/assets/business_award_trophy.png";

  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.grid}`}>
        
        {/* Left Column - Text Content */}
        <div className={styles.textContent}>
          <SectionHeader 
            title={displayTitle} 
            subtitle={displaySubtitle}
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {displayParagraphs.map((para, index) => (
              <p key={index} className={styles.paragraph}>
                {para}
              </p>
            ))}
          </motion.div>
        </div>

        {/* Right Column - Visual/Image Layout */}
        <div className={styles.visualContent}>
          <motion.div 
            className={styles.imageContainer}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.imageWrapper}>
              <Image 
                src={displayImage} 
                alt={`${displayTitle} - Visual representation`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.typewriterImage}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
