import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import styles from "./card.module.css";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "glass" | "bordered";
  animateHover?: boolean;
}

type MotionCardProps = HTMLMotionProps<"div"> & CardProps;

export const Card = React.forwardRef<HTMLDivElement, MotionCardProps>(
  ({ className = "", variant = "default", animateHover = true, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={`${styles.card} ${styles[variant]} ${className}`}
        whileHover={animateHover ? { translateY: -4 } : {}}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";
