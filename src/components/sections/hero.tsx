import React from "react";
import Image from "next/image";
import styles from "./hero.module.css";

export const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.bannerContainer}>
        <Image
          src="/assets/hero_banner.jpeg"
          alt="Global Awards Ceremony Banner"
          fill
          sizes="100vw"
          priority
          className={styles.bannerImage}
        />
        <div className={styles.bannerOverlay} />
      </div>
    </section>
  );
};
