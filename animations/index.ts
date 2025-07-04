import { AnimationVariants } from "@/types";
import { Variants } from "framer-motion";

/**
 * Standard container animation variants
 * Used for parent elements that contain animated children
 * Creates a staggered animation effect for child elements
 */
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

/**
 * Standard item animation variants
 * Used for individual elements that animate in from below
 * Provides a smooth fade-in and slide-up effect
 */
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/**
 * Standard animation variants for section components
 * Combines container and item variants for easy import
 */
export const sectionAnimations: AnimationVariants = {
  container: containerVariants,
  item: itemVariants,
};

/**
 * Hover animation variants for interactive elements
 * Can be applied to buttons, cards, and other interactive components
 */
/**
 * Timeline item animation variants
 * Used for experience timeline items that animate in from the left
 * Provides a smooth fade-in and slide-in effect
 */
export const timelineItemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
