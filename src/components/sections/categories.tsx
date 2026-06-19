"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../ui/section-header";
import { Play, X } from "lucide-react";
import styles from "./categories.module.css";

interface Category {
  id: string | number;
  title: string;
  bgGradient: string;
  label: string;
}

interface Glimpse {
  title: string;
  tag?: string;
  mediaType: string;
  imageUrl?: string;
  videoUrl?: string;
  videoFileUrl?: string;
}

interface CategoriesSectionProps {
  initialGlimpses?: Glimpse[];
}

const defaultCategories: Category[] = [
  { id: 1, title: "Innovation", bgGradient: "linear-gradient(135deg, #2c1a04 0%, #5c3a1a 100%)", label: "Pioneering Products & Solutions" },
  { id: 2, title: "Leadership", bgGradient: "linear-gradient(135deg, #1b263b 0%, #415a77 100%)", label: "Executive & Entrepreneurial Excellence" },
  { id: 3, title: "Sustainability", bgGradient: "linear-gradient(135deg, #4a154b 0%, #6b114d 100%)", label: "Green Business & ESG Initiatives" },
  { id: 4, title: "Startups", bgGradient: "linear-gradient(135deg, #132a13 0%, #31572c 100%)", label: "Promising New Ventures" },
  { id: 5, title: "Enterprise", bgGradient: "linear-gradient(135deg, #49111c 0%, #800f2f 100%)", label: "Outstanding Corporate Performance" },
  { id: 6, title: "Global Impact", bgGradient: "linear-gradient(135deg, #2d3748 0%, #4a5568 100%)", label: "Cross-Border Business & Expansion" },
];

const categoryImageMap: { [key: string]: string } = {
  "innovation": "/assets/images/Innovation.png",
  "leadership": "/assets/images/Leadership.png",
  "sustainability": "/assets/images/Sustainability.png",
  "startups": "/assets/images/Startups.png",
  "enterprise": "/assets/images/enterprise.png",
  "global impact": "/assets/images/Global_Impact.png",
};

const getCategoryImage = (title: string) => {
  const normalizedTitle = title.toLowerCase().trim();
  return categoryImageMap[normalizedTitle] || "";
};

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

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ initialGlimpses }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState("");
  
  const displayCategories = defaultCategories;
  const displayGlimpses = initialGlimpses && initialGlimpses.length > 0 ? initialGlimpses : [
    {
      title: "2026 Highlights",
      tag: "Highlights",
      mediaType: "video",
      videoUrl: "dQw4w9WgXcQ",
      imageUrl: "/assets/hero_banner.jpeg"
    },
    {
      title: "The Future of Innovation",
      tag: "Panel",
      mediaType: "video",
      videoUrl: "dQw4w9WgXcQ",
      imageUrl: "/assets/business_award_trophy.png"
    }
  ];

  const playVideo = (videoId: string) => {
    setActiveVideoId(videoId);
    setIsVideoOpen(true);
  };

  return (
    <section id="categories" className={styles.categories}>
      <div className="container">
        <SectionHeader
          title="Award Categories"
          subtitle="Explore the prestigious categories recognizing outstanding business innovation and leadership."
          align="center"
        />

        {/* 6 Category Grid */}
        <div className={styles.grid}>
          {displayCategories.map((category, index) => {
            const imgUrl = getCategoryImage(category.title);
            return (
              <motion.div
                key={category.id}
                className={styles.categoryCard}
                style={{ background: category.bgGradient }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ scale: 1.03 }}
              >
                {imgUrl && (
                  <div
                    className={styles.cardBg}
                    style={{ backgroundImage: `url('${imgUrl}')` }}
                  />
                )}
                <div className={styles.cardOverlay} />
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{category.title}</h3>
                  <p className={styles.cardLabel}>{category.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Glimpses of Global Awards */}
        <div className={styles.glimpses}>
          <div className={styles.glimpsesText}>
            <h3 className={styles.glimpsesTitle}>Glimpses of Global Awards</h3>
            <p className={styles.glimpsesDesc}>
              Witness the magic of our past ceremonies. Check out highlights, panel discussions, and key moments from the Global Awards.
            </p>
          </div>

          <div className={styles.glimpsesVideos}>
            {displayGlimpses.map((glimpse, index) => {
              const hasVideo = glimpse.mediaType === "video" && (glimpse.videoUrl || glimpse.videoFileUrl);
              const cardBg = glimpse.imageUrl || "/assets/hero_banner.jpeg";
              return (
                <div
                  key={index}
                  className={styles.videoCard}
                  onClick={() => {
                    if (hasVideo) {
                      playVideo(glimpse.videoFileUrl || glimpse.videoUrl || "");
                    }
                  }}
                  style={{ cursor: hasVideo ? "pointer" : "default" }}
                >
                  <div className={styles.videoCardOverlay} />
                  <div className={styles.videoCardBg} style={{ backgroundImage: `url('${cardBg}')` }} />
                  <div className={styles.videoCardInfo}>
                    {glimpse.tag && <span className={styles.videoTag}>{glimpse.tag}</span>}
                    <p className={styles.videoCardTitle}>{glimpse.title}</p>
                  </div>
                  {hasVideo && (
                    <div className={styles.videoPlayBtn}>
                      <Play fill="#ffffff" stroke="#ffffff" size={16} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
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
                    title="Glimpse Video"
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
                  title="Glimpse Video"
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
