import React from "react";
import { motion } from "framer-motion";
import styles from "./section-header.module.css";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  theme?: "light" | "dark";
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  align = "left",
  className = "",
  theme = "light",
}) => {
  return (
    <div className={`${styles.container} ${styles[align]} ${styles[theme]} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.accentLine} />
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </motion.div>
    </div>
  );
};
