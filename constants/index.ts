import { Github, Linkedin, Mail } from "lucide-react";

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
