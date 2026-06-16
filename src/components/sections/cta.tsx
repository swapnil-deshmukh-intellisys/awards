"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import styles from "./cta.module.css";

export const CtaSection: React.FC = () => {
  return (
    <section className={styles.cta}>
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Join us in celebrating global excellence and leadership.</h2>
          <p className={styles.subtitle}>
            The Global Awards values the innovations and leadership that shape our world. Submit your nomination or recommend a visionary brand today.
          </p>
          <Button variant="outline" size="lg" className={styles.nominateBtn}>
            Nominate Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
