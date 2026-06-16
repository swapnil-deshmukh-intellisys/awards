"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "../ui/section-header";
import styles from "./jury.module.css";

interface JuryMember {
  id: string | number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface JurySectionProps {
  initialJury?: JuryMember[];
}

const defaultJuryMembers: JuryMember[] = [
  {
    id: 1,
    name: "Dr. Sarah Jenkins",
    role: "Venture Capitalist & Author",
    bio: "Dr. Sarah Jenkins is a leading venture capitalist and advocate for inclusive leadership, focusing on tech scaling, impact investing, and corporate governance.",
    image: "/assets/profile_female_1.png",
  },
  {
    id: 2,
    name: "David Vance",
    role: "Chief Growth Officer",
    bio: "David Vance is a corporate growth strategist and former Fortune 500 executive, with over 20 years of experience leading global digital transformation.",
    image: "/assets/profile_female_1.png", // Reusing profile_female_1 flipped for David Vance
  },
  {
    id: 3,
    name: "Dr. Marcus Thorne",
    role: "Business Strategy Advisor",
    bio: "Dr. Marcus Thorne is a distinguished professor of economics and strategic advisor to global enterprises, author of 'The Agile Future'.",
    image: "/assets/profile_female_2.png", // Using the senior author portrait
  },
];

export const JurySection: React.FC<JurySectionProps> = ({ initialJury }) => {
  const displayJury = initialJury && initialJury.length > 0 ? initialJury : defaultJuryMembers;

  return (
    <section id="jury" className={styles.jury}>
      <div className={`container ${styles.container}`}>
        <SectionHeader 
          title="Jury Members - 2026" 
          subtitle="Meet the distinguished panel of industry leaders, business experts, and analysts who evaluated this season's nominations."
          align="center"
        />

        <div className={styles.grid}>
          {displayJury.map((member, index) => (
            <motion.div
              key={member.id}
              className={styles.juryCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={280}
                  height={280}
                  className={member.id === 2 ? styles.flippedImage : styles.memberImage}
                />
              </div>
              
              <div className={styles.cardContent}>
                <span className={styles.memberRole}>{member.role}</span>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberBio}>{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className={styles.carouselDots}>
          <span className={`${styles.dot} ${styles.active}`} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
      </div>
    </section>
  );
};
