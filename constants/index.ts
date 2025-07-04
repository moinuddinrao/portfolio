import { Github, Linkedin, Mail } from "lucide-react";

import { HeroContent } from "@/types";

/**
 * Navigation items
 */
export const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

/**
 * Social media links
 */
export const socialLinks = [
  {
    href: "mailto:moinuddinrao.dev@gmail.com",
    icon: Mail,
    label: "Email",
    username: "moinuddinrao.dev@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/moinuddinrao",
    username: "/in/moinuddinrao",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/moinuddinrao",
    username: "@moinuddinrao",
  },
];

/**
 * Hero section content
 * All text and links for the hero section are defined here for easy updates
 */
export const heroContent: HeroContent = {
  greeting: "👋 Welcome to my portfolio",
  name: "Moin Ud Din",
  title: "Full-Stack Software Engineer",
  description:
    "I specialize in developing scalable web applications using JavaScript technologies like React and Node.js. I bring hands-on experience from FinTech and GreenTech domains, delivering efficient, robust, data-intensive applications.",
  ctaPrimary: {
    text: "View My Work",
    href: "#projects",
  },
  ctaSecondary: {
    text: "Download Resume",
    href: "/resume.pdf",
  },
  scrollLabel: "Scroll to about section",
};

/**
 * Configuration for the floating elements in the hero section
 * Each element has position, size, color, and animation properties
 */
export const heroFloatingElements = [
  {
    position: "top-20 left-10",
    size: "w-20 h-20",
    color: "bg-primary-200 dark:bg-primary-800",
    animation: "animate-pulse",
    delay: "",
  },
  {
    position: "bottom-20 right-10",
    size: "w-32 h-32",
    color: "bg-primary-300 dark:bg-primary-700",
    animation: "animate-pulse",
    delay: "delay-1000",
  },
  {
    position: "top-1/2 left-20",
    size: "w-16 h-16",
    color: "bg-primary-400 dark:bg-primary-600",
    animation: "animate-pulse",
    delay: "delay-500",
  },
];
