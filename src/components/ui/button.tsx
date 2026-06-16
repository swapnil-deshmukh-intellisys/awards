"use client";

import React from "react";
import styles from "./button.module.css";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "glass" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
}

// Omit the standard button props from framer-motion to avoid conflicts, then extend
type MotionButtonProps = HTMLMotionProps<"button"> & ButtonProps;

export const Button = React.forwardRef<HTMLButtonElement, MotionButtonProps>(
  ({ className = "", variant = "primary", size = "md", children, icon, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
        whileHover={{ translateY: -2 }}
        whileTap={{ translateY: 0 }}
        {...props}
      >
        {children}
        {icon && <span className={styles.icon}>{icon}</span>}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
