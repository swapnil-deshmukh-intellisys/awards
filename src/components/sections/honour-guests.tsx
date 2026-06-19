"use client";

import React, { useState } from "react";
import { Play, X } from "lucide-react";
import styles from "./honour-guests.module.css";

interface GuestMedia {
  title: string;
  bgImageUrl?: string;
  videoUrl?: string;
  videoFileUrl?: string;
}

interface HonourGuestsSectionProps {
  initialGuests?: GuestMedia[];
}

const getEmbedUrl = (url: string) => {
  if (!url) return "";
  if (url.includes("/embed/")) return url;
  
  let videoId = "";
  try {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      videoId = match[2];
    }
  } catch (e) {
    console.error("Failed to parse video URL", e);
  }
  return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : url;
};

export const HonourGuestsSection: React.FC<HonourGuestsSectionProps> = ({ initialGuests }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState("");

  const displayGuests = initialGuests && initialGuests.length > 0 ? initialGuests : [
    {
      title: "A Moment with Dr. Shashi Tharoor",
      videoUrl: "dQw4w9WgXcQ",
      bgImageUrl: "/assets/hero_banner.jpeg",
    },
    {
      title: "A Moment with Shabana Azmi",
      videoUrl: "dQw4w9WgXcQ",
      bgImageUrl: "/assets/typewriter_legacy.png",
    },
  ];

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
          {displayGuests.map((vid, idx) => {
            const hasVideo = vid.videoUrl || vid.videoFileUrl;
            return (
              <div
                key={idx}
                className={styles.videoCard}
                onClick={() => {
                  if (hasVideo) {
                    playVideo(vid.videoFileUrl || vid.videoUrl || "");
                  }
                }}
                style={{ cursor: hasVideo ? "pointer" : "default" }}
              >
                <div
                  className={styles.videoCardBg}
                  style={{ backgroundImage: `url('${vid.bgImageUrl || "/assets/hero_banner.jpeg"}')` }}
                />
                <div className={styles.videoOverlay} />

                <div className={styles.innerContent}>
                  <h3 className={styles.videoCardTitle}>{vid.title}</h3>
                </div>

                {hasVideo && (
                  <div className={styles.playBtn}>
                    <Play fill="#ffffff" stroke="#ffffff" size={24} />
                  </div>
                )}
              </div>
            );
          })}
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
              {activeVideoId.includes("http") || activeVideoId.includes(".mp4") || activeVideoId.includes("/files/") ? (
                activeVideoId.endsWith(".mp4") || activeVideoId.includes("/files/") ? (
                  <video
                    src={activeVideoId}
                    controls
                    autoPlay
                    width="100%"
                    height="100%"
                    style={{ objectFit: "contain" }}
                  />
                ) : (
                  <iframe
                    width="100%"
                    height="100%"
                    src={getEmbedUrl(activeVideoId)}
                    title="Guest of Honour Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )
              ) : (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
                  title="Guest of Honour Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
