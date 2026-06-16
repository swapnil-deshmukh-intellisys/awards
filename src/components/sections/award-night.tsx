"use client";

import React, { useState } from "react";
import { Play, X } from "lucide-react";
import { Button } from "../ui/button";
import styles from "./award-night.module.css";

export const AwardNightSection: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="award-night" className={styles.awardNight}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Global Awards - Award Night</h2>
          <div className={styles.divider} />
        </div>

        {/* Video Player Card Preview */}
        <div className={styles.videoContainer}>
          <div className={styles.videoPreview} style={{ backgroundImage: `url('/assets/hero_banner.jpeg')` }}>
            <div className={styles.videoOverlay} />
            <div className={styles.innerContent}>
              <span className={styles.liveBadge}>LIVE</span>
              <h3 className={styles.videoTitle}>AWARD CEREMONY</h3>

              <button
                className={styles.playButton}
                onClick={() => setIsVideoOpen(true)}
                aria-label="Play Award Video"
              >
                <Play fill="#ffffff" stroke="#ffffff" size={32} className={styles.playIcon} />
              </button>

              <div className={styles.shareRow}>
                <span className={styles.shareBtn}>Share</span>
                <span className={styles.watchBtn}>Watch Later</span>
              </div>
            </div>
          </div>
        </div>


      </div>

      {/* Video Modal Popup */}
      {isVideoOpen && (
        <div className={styles.modal} onClick={() => setIsVideoOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setIsVideoOpen(false)}>
              <X size={28} />
            </button>
            <div className={styles.iframeWrapper}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Global Awards Ceremony Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
