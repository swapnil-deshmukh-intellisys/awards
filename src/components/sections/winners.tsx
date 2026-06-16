"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./winners.module.css";

interface Winner {
  id: string | number;
  name: string;
  role: string;
  company: string;
  image: string;
}

interface WinnersSectionProps {
  initialWinners?: Winner[];
}

const defaultWinners: Winner[] = [
  {
    id: 1,
    name: "SARAH JENKINS",
    role: "Entrepreneur of the Year",
    company: "EcoVibe Technologies",
    image: "/assets/profile_female_1.png",
  },
  {
    id: 2,
    name: "DR. ARIS VASEL",
    role: "Technology Innovator",
    company: "Quantum Computing Labs",
    image: "/assets/profile_female_1.png", // Reusing profile_female_1 for high quality visual alignment
  },
  {
    id: 3,
    name: "ELENA ROSTOVA",
    role: "Lifetime Achievement in Leadership",
    company: "AeroSpace Global",
    image: "/assets/profile_female_2.png", // Using the senior author portrait
  },
];

export const WinnersSection: React.FC<WinnersSectionProps> = ({ initialWinners }) => {
  const displayWinners = initialWinners && initialWinners.length > 0 ? initialWinners : defaultWinners;
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const card = container.firstElementChild as HTMLElement;
      const cardWidth = card ? card.offsetWidth + 32 : 320; // card width + gap (2rem = 32px)
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="winners" className={styles.winners}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Global Awards - 2026 Winners</h2>
          <div className={styles.divider} />
        </div>

        <div className={styles.grid} ref={scrollRef}>
          {displayWinners.map((winner, index) => (
            <motion.div
              key={winner.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card variant="bordered" className={styles.winnerCard} animateHover>
                <div className={styles.imageWrapper}>
                  <Image
                    src={winner.image}
                    alt={winner.name}
                    width={320}
                    height={350}
                    className={winner.id === 2 ? styles.flippedImage : styles.winnerImage}
                  />
                  <div className={styles.winnerBadge}>
                    <Award size={16} className={styles.badgeIcon} />
                    <span>WINNER</span>
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.winnerName}>{winner.name}</h3>
                  <p className={styles.winnerRole}>{winner.role}</p>
                  <p className={winner.id === 3 ? styles.winnerBookSpecial : styles.winnerBook}>
                    Company/Org: <strong>{winner.company}</strong>
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className={styles.controls}>
          <button onClick={() => scroll("left")} className={styles.controlBtn} aria-label="Previous">
            <ChevronLeft size={24} />
          </button>
          <button onClick={() => scroll("right")} className={styles.controlBtn} aria-label="Next">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};
