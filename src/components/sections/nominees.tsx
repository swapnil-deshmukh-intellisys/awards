"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../ui/section-header";
import { Card } from "../ui/card";
import { ArrowRight } from "lucide-react";
import styles from "./nominees.module.css";
import { Button } from "../ui/button";

const mockNominees = [
  { id: 1, name: "Aarav Mehta", role: "CEO, TechVision", category: "Technology Leadership", imageColor: "#374151" },
  { id: 2, name: "Vikram Malhotra", role: "Founder, EcoSolutions", category: "Sustainability Award", imageColor: "#1f2937" },
  { id: 3, name: "Ananya Sen", role: "CMO, GlobalBrand", category: "Women Leadership", imageColor: "#4b5563" },
  { id: 4, name: "Rohan Joshi", role: "CEO, InnovateX", category: "Startup of the Year", imageColor: "#111827" },
];

export const NomineesSection: React.FC = () => {
  return (
    <section id="nominees" className={styles.nominees}>
      <div className="container">
        <div className={styles.headerRow}>
          <SectionHeader 
            title="Featured Nominees" 
            subtitle="Meet the extraordinary individuals and organizations shortlisted for the 2026 awards."
            theme="dark"
          />
          <Button variant="outline" className={styles.viewAllBtn} icon={<ArrowRight size={18} />}>
            View All Nominees
          </Button>
        </div>

        <div className={styles.grid}>
          {mockNominees.map((nominee, index) => (
            <motion.div
              key={nominee.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card variant="default" className={styles.nomineeCard}>
                <div 
                  className={styles.imagePlaceholder} 
                  style={{ backgroundColor: nominee.imageColor }}
                />
                <div className={styles.cardContent}>
                  <span className={styles.categoryBadge}>{nominee.category}</span>
                  <h3 className={styles.nomineeName}>{nominee.name}</h3>
                  <p className={styles.nomineeRole}>{nominee.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
