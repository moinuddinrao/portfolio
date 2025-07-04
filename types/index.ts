/**
 * Type definitions for the portfolio website
 * Contains interfaces and types for components, constants, and animations
 */
/**
 * Type definitions for the portfolio website
 * Contains interfaces and types for components, constants, and animations
 */

import { Variants } from "framer-motion";

// Animation types
export interface AnimationVariants {
  container: Variants;
  item: Variants;
}

// Hero section types
export interface HeroContent {
  greeting: string;
  name: string;
  title: string;
  description: string;
  ctaPrimary: {
    text: string;
    href: string;
  };
  ctaSecondary: {
    text: string;
    href: string;
  };
  scrollLabel: string;
}
