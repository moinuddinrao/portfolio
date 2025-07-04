/**
 * Type definitions for the portfolio website
 * Contains interfaces and types for components, constants, and animations
 */
/**
 * Type definitions for the portfolio website
 * Contains interfaces and types for components, constants, and animations
 */

import { Variants } from "framer-motion";
import { LucideIcon } from "lucide-react";

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

// About section types
export interface AboutParagraph {
  text: string;
}

export interface EducationAchievement {
  title: string;
  description: string;
}

// Experience types
export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

// Contact types
export interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
