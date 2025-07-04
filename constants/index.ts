import {
  BarChartHorizontal,
  Code,
  Code2,
  Component,
  Database,
  ExternalLink,
  GitBranch,
  Github,
  Globe,
  Linkedin,
  Mail,
  Palette,
  Server,
  Wrench,
  Zap,
} from "lucide-react";

import { AboutParagraph, EducationAchievement, HeroContent } from "@/types";

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

/**
 * About section
 */
export const aboutHeading = {
  title: "About",
  highlight: "Me",
  subtitle:
    "Passionate about solving problems and creating innovative solutions",
};

/**
 * About section paragraph
 * This is a brief introduction about the person, their interests, and what they do
 */
export const aboutParagraph: AboutParagraph = {
  text: "I'm passionate about clean code, user experience, and staying up-to-date with the latest technologies. When I'm not coding, you'll find me contributing to open-source projects or mentoring fellow developers.",
};

/**
 * Education & notable achievements list
 */
export const educationAchievements: EducationAchievement[] = [
  {
    title: "Bachelor of Science in Computer Sciences",
    description: "Air University, Islamabad (2019-2023)",
  },
  {
    title: "Certificate of Appreciation",
    description: "Craft Your Career workshop, IEEE CUI (2023)",
  },
  {
    title: "Campus Ambassador",
    description: "Devsinc (2023)",
  },
  {
    title: "Award of Excellence",
    description: "President, Air University Blood Donor Society (2023)",
  },
  {
    title: "1st Place - Speed Programming Competition",
    description: "CodeAir 1.0 (2022)",
  },
  {
    title: "Award of Excellence",
    description:
      "President, Air University Computing & Innovation Society (2023)",
  },
];

/**
 * Skill categories with icons, skills, and colors
 * Each category has a title, icon, list of skills, and a background color
 */
export const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"],
    color: "bg-blue-500",
  },
  {
    title: "Frontend",
    icon: Globe,
    skills: [
      "React.js",
      "Next.js",
      "Redux",
      "Context API",
      "TanStack React Query",
    ],
    color: "bg-green-500",
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "RESTful API",
      "Prisma",
      "Sequelize ORM",
    ],
    color: "bg-purple-500",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL"],
    color: "bg-orange-500",
  },
  {
    title: "UI/UX",
    icon: Palette,
    skills: [
      "TailwindCSS",
      "Ant Design",
      "Bootstrap",
      "Chakra UI",
      "Shadcn UI",
      "Material UI",
    ],
    color: "bg-pink-500",
  },
  {
    title: "Data Visualization",
    icon: BarChartHorizontal,
    skills: ["Recharts", "Ant Design Charts"],
    color: "bg-indigo-500",
  },
  {
    title: "Version Control",
    icon: GitBranch,
    skills: ["Git", "GitHub", "BitBucket"],
    color: "bg-gray-500",
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Postman", "Jira", "Slack", "ClickUp"],
    color: "bg-red-500",
  },
  {
    title: "Services",
    icon: Component,
    skills: ["Google Maps", "Clerk", "Stripe"],
    color: "bg-yellow-500",
  },
];

/**
 * Professional certifications
 * List of certifications with titles and platforms
 */
export const certifications = [
  "The Complete Web Development Bootcamp - Udemy (2021)",
  "Meta Front-End Developer Professional Certification - Coursera (2022)",
  "IBM Full Stack Software Developer Professional Certification - Coursera (2023)",
];

/**
 * Work experiences
 * Each experience includes title, company, location, period, type, description, achievements, and technologies used
 */
export const experiences = [
  {
    title: "Software Engineer",
    company: "Aawaz AI",
    location: "Pakistan",
    period: "05/2024 - Present",
    type: "Full-time",
    description:
      "Leading full-stack development and architecture for AI-powered applications in fintech domain.",
    achievements: [
      "[Credit Scoring] Led front-end architecture for credit scoring platform serving SMEs",
      "[Credit Scoring] Designed interactive data visualizations using Recharts for financial analytics",
      "[Credit Scoring] Implemented 4-level nested tables with advanced filtering for financial reports",
      "[Credit Scoring] Optimized caching for data-heavy modules improving performance by 40%",
      "[Credit Scoring] Collaborated with ML engineers to streamline data pipelines",
      "[Merchant Analytics] Visualized top-performing delivery zones using Google Maps",
      "[Merchant Analytics] Built data-driven menu suggestion engine for restaurant partners",
      "[AI Business Mentor] Built real-time AI mentor chatbot interface with document generation support",
      "[Adverse Media Screening] Developed dashboards for multilingual risk screening and AML event topology",
      "[Psychometric Assessment] Delivered MBTI-based personality assessment platform with dynamic logic",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Ant Design",
      "TailwindCSS",
      "Recharts",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TanStack Query",
    ],
  },
  {
    title: "Jr. Software Engineer",
    company: "1011 Technologies",
    location: "Pakistan",
    period: "06/2023 - 05/2024",
    type: "Full-time",
    description:
      "Full-stack development for various client projects across different domains.",
    achievements: [
      "[Talent Platform] Built location-based freelance platform with Google Maps integration and job matching",
      "[AI Image SaaS Platform] Developed responsive AI SaaS product with advanced image editing features",
      "[Social Media Platform] Revamped frontend and supported development of discussion forums and admin dashboard",
      "[Housekeeping Booking Platform] Developed user-friendly web interfaces and backend for cleaner hiring system",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "Google Maps API",
      "Stripe",
      "Clerk",
      "Cloudinary",
    ],
  },
];

/**
 * Volunteer experiences
 * These are unpaid roles that showcase contributions to open source or community projects
 */
export const volunteerExperiences = [
  {
    title: "Software Engineer",
    company: "kolum.earth",
    location: "Germany (Remote)",
    period: "11/2023 - 02/2024",
    type: "Volunteer",
    description: "Developed EU CBAM compliance portal for carbon reporting.",
    achievements: [
      "Led complete front-end development for CBAM reporting platform",
      "Implemented server-side pagination and advanced error handling",
      "Conducted daily client demos and incorporated feedback iteratively",
      "Ensured type safety using advanced TypeScript concepts",
    ],
    technologies: [
      "TypeScript",
      "React.js",
      "Nest.js",
      "MongoDB",
      "Prisma",
      "TailwindCSS",
      "TanStack Query",
    ],
  },
];

/**
 * Maps project category names to their corresponding Lucide icons
 * @param category - The project category name
 * @returns The appropriate Lucide icon component
 */
export const getCategoryIcon = (category: string) => {
  switch (category) {
    case "FinTech":
      return Database;
    case "Analytics":
      return Code;
    case "GreenTech":
      return Globe;
    case "AI/ML":
      return Zap;
    case "SaaS":
      return ExternalLink;
    case "EdTech":
      return Code;
    default:
      return Code;
  }
};

/**
 * Maps project category names to their corresponding background color classes
 * @param category - The project category name
 * @returns Tailwind CSS class for the category's background color
 */
export const getCategoryColor = (category: string) => {
  switch (category) {
    case "FinTech":
      return "bg-green-500";
    case "Analytics":
      return "bg-blue-500";
    case "GreenTech":
      return "bg-emerald-500";
    case "AI/ML":
      return "bg-purple-500";
    case "SaaS":
      return "bg-orange-500";
    case "EdTech":
      return "bg-indigo-500";
    default:
      return "bg-gray-500";
  }
};

/**
 * List of featured projects with details
 * Each project includes title, description, image, category, technologies, and features
 */
export const projects = [
  {
    category: "FinTech",
    title: "Credit Scoring System",
    description:
      "A comprehensive data-driven credit scoring platform for SMEs with powerful analytics, ML integration, and financial reporting capabilities.",
    image: "/api/placeholder/600/400",
    technologies: [
      "React.js",
      "TypeScript",
      "Ant Design",
      "TailwindCSS",
      "Recharts",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    features: [
      "Interactive data visualizations with Recharts",
      "4-level nested tables with advanced filtering",
      "ML integration for automated analytics",
      "PDF export functionality for reports",
      "Auto-logout with react-idle-timer",
    ],
  },
  {
    category: "Analytics",
    title: "Merchant Analytics Platform",
    description:
      "Web app helping merchants analyze delivery zones, track menu performance, and receive data-driven suggestions for menu optimization.",
    image: "/api/placeholder/600/400",
    technologies: [
      "React.js",
      "TypeScript",
      "Ant Design",
      "Google Maps",
      "Node.js",
      "PostgreSQL",
      "Sequelize",
    ],
    features: [
      "Interactive delivery zone mapping with polygons",
      "Menu performance analysis across mealtimes",
      "Comparative analysis with sortable tables",
      "Menu addition suggestion engine",
      "Optimized API calls and caching",
    ],
  },
  {
    title: "EU CBAM Compliance Portal",
    description:
      "Carbon Border Adjustment Mechanism reporting platform for EU companies to manage operators, installations, and generate CBAM reports.",
    image: "/api/placeholder/600/400",
    category: "GreenTech",
    technologies: [
      "TypeScript",
      "React.js",
      "Ant Design",
      "TailwindCSS",
      "Nest.js",
      "MongoDB",
      "Prisma",
    ],
    features: [
      "Complete CBAM reporting workflow",
      "Server-side pagination and error handling",
      "Advanced TypeScript for type safety",
      "Daily client demos and feedback integration",
      "Automated emissions calculations",
    ],
  },
  {
    title: "AI Business Mentor",
    description:
      "AI-powered chatbot providing strategic business insights, personalized guidance, and actionable steps for entrepreneurs.",
    image: "/api/placeholder/600/400",
    category: "AI/ML",
    technologies: [
      "React.js",
      "TypeScript",
      "Ant Design",
      "TailwindCSS",
      "Django",
      "TanStack Query",
    ],
    features: [
      "Real-time AI-driven business guidance",
      "Interactive onboarding tour",
      "Document generation and downloads",
      "LLM integration optimization",
      "Business plan and pitch generation",
    ],
  },
  {
    title: "AI Image SaaS Platform",
    description:
      "Comprehensive image processing platform with AI features including restoration, recoloring, object removal, and background removal.",
    image: "/api/placeholder/600/400",
    category: "SaaS",
    technologies: [
      "Next.js",
      "TypeScript",
      "Shadcn UI",
      "TailwindCSS",
      "MongoDB",
      "Clerk",
      "Cloudinary",
      "Stripe",
    ],
    features: [
      "Multiple AI image processing capabilities",
      "Secure authentication with Clerk",
      "Credit-based payment system with Stripe",
      "Advanced image search functionality",
      "Responsive modern design",
    ],
  },
  {
    title: "Psychometric Assessment Platform",
    description:
      "MBTI-based personality assessment platform that evaluates traits, determines personality types, and suggests potential careers.",
    image: "/api/placeholder/600/400",
    category: "EdTech",
    technologies: [
      "React.js",
      "TypeScript",
      "Ant Design",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    features: [
      "Dynamic question switching interface",
      "MBTI personality type determination",
      "Personality trait visualization",
      "Strengths and weaknesses analysis",
      "Career suggestions based on results",
    ],
  },
];
