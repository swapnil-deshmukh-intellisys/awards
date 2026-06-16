"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Facebook, Twitter, Instagram, Linkedin } from "../ui/icons";
import styles from "./footer.module.css";
import { Button } from "../ui/button";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerTop}`}>
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              GLOBAL <span className={styles.accentText}>AWARDS</span>
            </Link>
            <p className={styles.description}>
              Honoring outstanding business achievements, innovation, and leadership worldwide.
              Celebrating companies, entrepreneurs, and visionary brands that shape our global
              economy and inspire future growth.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialIcon} aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li><Link href="#about">About the Awards</Link></li>
              <li><Link href="#categories">Award Categories</Link></li>
              <li><Link href="#nominees">2026 Nominees</Link></li>
              <li><Link href="#winners">Winners Hall of Fame</Link></li>
              <li><Link href="#jury">Jury Members</Link></li>
              <li><Link href="#media">Media & Gallery</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Contact Us</h4>
            <ul className={styles.contactList}>
              <li>
                <MapPin size={18} className={styles.contactIcon} />
                <span>328B Gera Imperium Rise, Hinjawadi Phase II, Pune 411057</span>
              </li>
              <li>
                <Phone size={18} className={styles.contactIcon} />
                <span>+918888989840</span>
              </li>
              <li>
                <Mail size={18} className={styles.contactIcon} />
                <span>nominations@globalawards.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className={styles.newsletterCol}>
            <h4 className={styles.colTitle}>Newsletter</h4>
            <p className={styles.newsletterDesc}>
              Subscribe to receive updates on nominations, deadlines, and event news.
            </p>
            <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.input}
                required
              />
              <Button type="submit" variant="primary" className={styles.subscribeBtn}>
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={`container ${styles.bottomContainer}`}>
          <p>&copy; {new Date().getFullYear()} Global Awards. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
