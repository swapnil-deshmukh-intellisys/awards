"use client";

import React, { useState } from "react";
import { Play, X } from "lucide-react";
import styles from "./honour-guests.module.css";

const videos = [
  {
    id: "dQw4w9WgXcQ",
    title: "A Moment with Dr. Shashi Tharoor",
    bgImage: "/assets/hero_banner.jpeg",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "A Moment with Shabana Azmi",
    bgImage: "/assets/typewriter_legacy.png",
  },
];

export const HonourGuestsSection: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState("");

  const playVideo = (videoId: string) => {
    setActiveVideoId(videoId);
    setIsVideoOpen(true);
  };

  return (
    <section id="honour-guests" className={styles.guests}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>A Moment with our guests of honour</h2>
          <div className={styles.divider} />
        </div>

        <div className={styles.grid}>
          {videos.map((vid, idx) => (
            <div key={idx} className={styles.videoCard} onClick={() => playVideo(vid.id)}>
              <div className={styles.videoCardBg} style={{ backgroundImage: `url('${vid.bgImage}')` }} />
              <div className={styles.videoOverlay} />

              <div className={styles.innerContent}>
                <h3 className={styles.videoCardTitle}>{vid.title}</h3>
              </div>

              <div className={styles.playBtn}>
                <Play fill="#ffffff" stroke="#ffffff" size={24} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
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
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
                title="Guest of Honour Video"
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
