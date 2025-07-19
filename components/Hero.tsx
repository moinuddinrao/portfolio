"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, ExternalLink } from "lucide-react";

import { sectionAnimations } from "@/animations";
import { heroContent, heroFloatingElements } from "@/constants";

export const Hero = () => {
  // Destructure animations for cleaner JSX
  const { container: containerVariants, item: itemVariants } =
    sectionAnimations;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20 sm:pt-0"
    >
      {/* Background Pattern */}
      <div className="from-primary-50 to-primary-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 absolute inset-0 bg-gradient-to-br via-white">
        {/* Light mode overlay */}
        <div className="to-primary-50/30 absolute inset-0 bg-gradient-to-tr from-gray-50/50 dark:hidden"></div>

        {/* Dark mode overlay with subtle pattern */}
        <div className="absolute inset-0 hidden dark:block">
          <div className="from-dark-900/90 via-dark-800/50 to-dark-700/30 absolute inset-0 bg-gradient-to-tr"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>
      </div>

      <div className="container-max section-padding relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          {/* Greeting Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300 dark:ring-primary-500/50 mb-4 inline-block rounded-full px-4 py-2 text-sm font-medium dark:ring-1">
              {heroContent.greeting}
            </span>
          </motion.div>

          {/* Name Heading */}
          <motion.h1
            variants={itemVariants}
            className="mb-6 text-4xl font-bold md:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">{heroContent.name}</span>
          </motion.h1>

          {/* Professional Title */}
          <motion.h2
            variants={itemVariants}
            className="text-dark-600 dark:text-dark-300 mb-8 text-xl font-light md:text-2xl lg:text-3xl"
          >
            {heroContent.title}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-dark-600 dark:text-dark-300 mx-auto mb-12 max-w-3xl text-lg leading-relaxed md:text-xl"
          >
            {heroContent.description}
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="mb-16 flex flex-col items-center justify-center gap-6 sm:flex-row"
          >
            <a
              href={heroContent.ctaPrimary.href}
              className="btn-primary group inline-flex items-center gap-2"
            >
              {heroContent.ctaPrimary.text}
              <ExternalLink
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>

            <a
              href={heroContent.ctaSecondary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary group inline-flex items-center gap-2"
            >
              {heroContent.ctaSecondary.text}
              <Download
                size={18}
                className="transition-transform duration-200 group-hover:translate-y-1"
              />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <a
              href="#about"
              className="group text-dark-500 hover:text-primary-600 dark:text-dark-400 dark:hover:text-primary-400 transition-colors duration-200"
              aria-label={heroContent.scrollLabel}
            >
              <div className="hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-full p-2 transition-all duration-300">
                <ArrowDown
                  size={24}
                  className="animate-bounce-slow transition-transform duration-200 group-hover:translate-y-1"
                />
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements - Decorative background elements */}
      {heroFloatingElements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.position} ${element.size} ${element.color} rounded-full opacity-30 dark:opacity-20 ${element.animation} ${element.delay} blur-sm`}
        ></div>
      ))}
    </section>
  );
};
