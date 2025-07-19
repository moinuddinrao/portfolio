"use client";

import { motion } from "framer-motion";
import { Building, ExternalLink } from "lucide-react";

import { sectionAnimations } from "@/animations";
import { experiences, volunteerExperiences } from "@/constants";
import { ExperienceCard } from "./ExperienceCard";

export const Experience = () => {
  // Import animation variants from centralized animations
  const { container: containerVariants, item: itemVariants } =
    sectionAnimations;
  return (
    <section id="experience" className="dark:bg-dark-800 bg-gray-100 py-20">
      <div className="container-max section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-4xl"
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-dark-600 dark:text-dark-400 mx-auto max-w-2xl text-lg">
              My professional journey in software development and the impact
              I&apos;ve made
            </p>
          </motion.div>

          {/* Professional Experience Section */}
          <div className="mb-16">
            <motion.h3
              variants={itemVariants}
              className="text-dark-800 dark:text-dark-200 mb-8 flex items-center gap-2 text-2xl font-bold"
            >
              <Building className="text-primary-600 h-6 w-6" />
              Professional Experience
            </motion.h3>
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} />
              ))}
            </div>
          </div>

          {/* Volunteer Experience */}
          <div>
            <motion.h3
              variants={itemVariants}
              className="text-dark-800 dark:text-dark-200 mb-8 flex items-center gap-2 text-2xl font-bold"
            >
              <ExternalLink className="text-primary-600 h-6 w-6" />
              Volunteer Experience
            </motion.h3>
            <div className="space-y-8">
              {volunteerExperiences.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
