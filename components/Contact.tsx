"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useRef, useState } from "react";

import { sectionAnimations } from "@/animations";
import {
  availabilityStatus,
  contactForm,
  contactHeading,
  contactInfo,
  socialLinks,
} from "@/constants";
import { ContactFormData } from "@/types";

export const Contact = () => {
  // Form state management
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Loading and success/error states
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  // Form reference
  const formRef = useRef<HTMLFormElement>(null);

  // Destructure animations for cleaner JSX
  const { container: containerVariants, item: itemVariants } =
    sectionAnimations;

  /**
   * Handle form input changes
   * @param e - Input change event
   */
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * Handle form submission
   * @param e - Form submission event
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          success: true,
          message: contactForm.successMessage,
        });

        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus({
          success: false,
          message: contactForm.errorMessage,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus({
        success: false,
        message: contactForm.errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="dark:bg-dark-900 bg-white py-20">
      <div className="container-max section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-6xl"
        >
          {/* Section Heading */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
              Get In{" "}
              <span className="gradient-text">
                {contactHeading.titleHighlight}
              </span>
            </h2>
            <p className="text-dark-600 dark:text-dark-400 mx-auto max-w-2xl text-lg">
              {contactHeading.subtitle}
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <h3 className="text-dark-800 dark:text-dark-200 mb-8 text-2xl font-bold">
                Let&apos;s Connect
              </h3>

              <div className="mb-8 space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="bg-primary-100 dark:bg-primary-900/30 flex h-12 w-12 items-center justify-center rounded-lg">
                        <Icon className="text-primary-600 h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-dark-500 dark:text-dark-400 text-sm">
                          {info.label}
                        </p>
                        <p className="text-dark-800 dark:text-dark-200 font-medium">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-dark-800 dark:text-dark-200 mb-4 text-lg font-semibold">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.slice(1, 3).map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group card p-4 transition-all duration-300 hover:scale-105"
                      >
                        <Icon className="text-primary-600 mb-2 h-6 w-6" />
                        <p className="text-dark-800 dark:text-dark-200 text-sm font-medium">
                          {social.label}
                        </p>
                        <p className="text-dark-500 dark:text-dark-400 text-xs">
                          {social.username}
                        </p>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Availability Status */}
              <motion.div variants={itemVariants} className="card mt-8 p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-green-500"></div>
                  <span className="text-dark-800 dark:text-dark-200 text-lg font-semibold">
                    {availabilityStatus.status}
                  </span>
                </div>
                <p className="text-dark-600 dark:text-dark-400 text-sm">
                  {availabilityStatus.message}
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="card p-8">
                <h3 className="text-dark-800 dark:text-dark-200 mb-6 text-2xl font-bold">
                  Send Message
                </h3>

                {/* Show success or error message after form submission */}
                {submitStatus && (
                  <div
                    className={`mb-6 rounded-md p-4 ${
                      submitStatus.success
                        ? "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                        : "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-dark-700 dark:text-dark-300 mb-2 block text-sm font-medium"
                      >
                        {contactForm.nameLabel}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="border-dark-300 dark:border-dark-600 focus:ring-primary-500 dark:bg-dark-700 text-dark-800 dark:text-dark-200 w-full rounded-lg border bg-white px-4 py-3 transition-colors duration-200 focus:border-transparent focus:ring-2"
                        placeholder={contactForm.namePlaceholder}
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="text-dark-700 dark:text-dark-300 mb-2 block text-sm font-medium"
                      >
                        {contactForm.emailLabel}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border-dark-300 dark:border-dark-600 focus:ring-primary-500 dark:bg-dark-700 text-dark-800 dark:text-dark-200 w-full rounded-lg border bg-white px-4 py-3 transition-colors duration-200 focus:border-transparent focus:ring-2"
                        placeholder={contactForm.emailPlaceholder}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="text-dark-700 dark:text-dark-300 mb-2 block text-sm font-medium"
                    >
                      {contactForm.subjectLabel}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="border-dark-300 dark:border-dark-600 focus:ring-primary-500 dark:bg-dark-700 text-dark-800 dark:text-dark-200 w-full rounded-lg border bg-white px-4 py-3 transition-colors duration-200 focus:border-transparent focus:ring-2"
                      placeholder={contactForm.subjectPlaceholder}
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-dark-700 dark:text-dark-300 mb-2 block text-sm font-medium"
                    >
                      {contactForm.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="border-dark-300 dark:border-dark-600 focus:ring-primary-500 dark:bg-dark-700 text-dark-800 dark:text-dark-200 w-full resize-none rounded-lg border bg-white px-4 py-3 transition-colors duration-200 focus:border-transparent focus:ring-2"
                      placeholder={contactForm.messagePlaceholder}
                      disabled={isSubmitting}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary group flex w-full items-center justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        {contactForm.submitButton}
                        <Send
                          size={18}
                          className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
