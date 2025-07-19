"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

import { navItems, socialLinks } from "@/constants";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark-900 text-dark-100">
      <div className="container-max section-padding">
        {/* Main Footer Content */}
        <div className="border-dark-700 border-b py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="gradient-text mb-4 text-2xl font-bold">
                  Moin Ud Din
                </h3>
                <p className="text-dark-300 mb-6 max-w-md">
                  Full-Stack Software Engineer passionate about creating
                  innovative solutions and building scalable applications.
                  Let&apos;s build something amazing together!
                </p>
                <div className="flex items-center gap-4">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-dark-800 hover:bg-primary-600 group flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-200"
                        aria-label={link.label}
                      >
                        <Icon
                          size={18}
                          className="text-dark-300 group-hover:text-white"
                        />
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
                <ul className="space-y-2">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="text-dark-400 hover:text-primary-400 transition-colors duration-200"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="mb-4 text-lg font-semibold">Get In Touch</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-dark-400 text-sm">Email</p>
                    <a
                      href="mailto:moinuddinrao.dev@gmail.com"
                      className="text-dark-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      moinuddinrao.dev@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-dark-400 text-sm">Location</p>
                    <p className="text-dark-300">Islamabad, Pakistan</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between py-6 md:flex-row">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-dark-400 flex items-center gap-1 text-sm"
          >
            © {currentYear} Moin Ud Din. All rights reserved.
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onClick={scrollToTop}
            className="bg-primary-600 hover:bg-primary-700 group mt-4 flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-200 md:mt-0"
            aria-label="Scroll to top"
          >
            <ArrowUp
              size={18}
              className="text-white transition-transform duration-200 group-hover:-translate-y-1"
            />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
