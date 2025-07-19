"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { navItems, socialLinks } from "@/constants";

import { ThemeToggle } from "./ThemeToggle";

export const Navigation = () => {
  // State to manage mobile menu visibility and scroll state
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Effect to handle scroll event and update scrolled state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine which section is currently in view
      const sections = navItems.map(item => item.href.substring(1));

      // Find which section is currently in view
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Consider a section in view if its top is near the top of the viewport
          // or if we're at the bottom of the page and it's the last section
          if (
            (rect.top <= 150 && rect.bottom >= 150) ||
            (window.innerHeight + window.scrollY >=
              document.body.offsetHeight - 100 &&
              section === sections[sections.length - 1])
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check for active section
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "dark:bg-dark-900/90 bg-white/90 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-max section-padding">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Image */}
          <a href="#home" className="gradient-text text-2xl font-bold">
            <Image src="/logo.svg" alt="Logo" width={40} height={40} />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors duration-200 ${
                  activeSection === item.href.substring(1)
                    ? "text-primary-600 dark:text-primary-400 font-semibold"
                    : "text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Social Links and Theme Toggle */}
          <div className="hidden items-center space-x-4 md:flex">
            {socialLinks.map(link => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  aria-label={link.label}
                >
                  <Icon size={20} />
                </a>
              );
            })}
            <div className="border-dark-200 dark:border-dark-600 border-l pl-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="flex items-center space-x-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark-600 dark:text-dark-300 hover:text-primary-600 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="dark:bg-dark-900 border-dark-200 dark:border-dark-700 absolute top-16 left-0 w-full border-t bg-white shadow-lg md:hidden">
            <div className="section-padding py-4">
              {navItems.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 font-medium transition-colors duration-200 ${
                    activeSection === item.href.substring(1)
                      ? "text-primary-600 dark:text-primary-400 font-semibold"
                      : "text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="border-dark-200 dark:border-dark-700 mt-4 flex items-center justify-between border-t pt-4">
                <div className="flex items-center space-x-4">
                  {socialLinks.map(link => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                        aria-label={link.label}
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
