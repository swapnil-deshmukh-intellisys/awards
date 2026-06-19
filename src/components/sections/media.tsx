"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { Button } from "../ui/button";
import styles from "./media.module.css";

interface GalleryImage {
  title?: string;
  imageUrl: string;
}

interface MediaSectionProps {
  initialGallery?: GalleryImage[];
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

export const MediaSection: React.FC<MediaSectionProps> = ({ initialGallery }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState("");

  const displayGallery = initialGallery && initialGallery.length > 0 ? initialGallery : [
    { imageUrl: "/assets/hero_banner.jpeg", title: "Award Night Event 1" },
    { imageUrl: "/assets/typewriter_legacy.png", title: "Award Night Event 2" },
    { imageUrl: "/assets/hero_banner.jpeg", title: "Award Night Event 3" },
  ];

  const playVideo = (videoId: string) => {
    setActiveVideoId(videoId);
    setIsVideoOpen(true);
  };

  return (
    <section id="gallery" className={styles.media}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Award Night 2026</h2>
          <div className={styles.divider} />
        </div>

        {/* Gallery Grid */}
        <div className={styles.galleryGrid}>
          {displayGallery.map((item, index) => (
            <motion.div
              key={index}
              className={styles.galleryCard}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={item.imageUrl}
                alt={item.title || `Award Night Event ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={index === 1 ? styles.flippedImage : styles.galleryImage}
              />
            </motion.div>
          ))}
        </div>

        {/* Carousel indicator dots */}
        <div className={styles.carouselDots}>
          <span className={`${styles.dot} ${styles.active}`} />
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>

        {/* Testimonials Video Row */}
        <div className={styles.videoRow}>
          <div className={styles.videoCard} onClick={() => playVideo("dQw4w9WgXcQ")}>
            <div className={styles.videoCardOverlay} />
            <div className={styles.videoCardBg} style={{ backgroundImage: "url('/assets/hero_banner.jpeg')" }} />
            <div className={styles.videoCardInfo}>
              <p className={styles.videoCardTitle}>Testimonial by Guest</p>
            </div>
            <div className={styles.videoPlayBtn}>
              <Play fill="#ffffff" stroke="#ffffff" size={20} />
            </div>
          </div>

          <div className={styles.videoCard} onClick={() => playVideo("dQw4w9WgXcQ")}>
            <div className={styles.videoCardOverlay} />
            <div className={styles.videoCardBg} style={{ backgroundImage: "url('/assets/typewriter_legacy.png')" }} />
            <div className={styles.videoCardInfo}>
              <p className={styles.videoCardTitle}>Testimonial by Jury</p>
            </div>
            <div className={styles.videoPlayBtn}>
              <Play fill="#ffffff" stroke="#ffffff" size={20} />
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className={styles.actionRow}>
          <Button variant="primary" size="md" className={styles.viewAllBtn}>
            View All Media
          </Button>
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
                title="Testimonial Video"
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
