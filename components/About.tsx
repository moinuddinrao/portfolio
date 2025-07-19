"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { sectionAnimations } from "@/animations";
import {
  aboutHeading,
  aboutParagraph,
  educationAchievements,
} from "@/constants";

export const About = () => {
  // Destructure common animation variants
  const { container: containerVariants, item: itemVariants } =
    sectionAnimations;
  return (
    <section id="about" className="section-gradient-light py-20">
      <div className="container-max section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-6xl"
        >
          <motion.div variants={itemVariants} className="mb-10 text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
              {aboutHeading.title}{" "}
              <span className="gradient-text">{aboutHeading.highlight}</span>
            </h2>
            <p className="text-dark-600 dark:text-dark-400 mx-auto max-w-2xl text-lg">
              {aboutHeading.subtitle}
            </p>
          </motion.div>

          <div className="mb-10 grid items-center gap-12 lg:grid-cols-3">
            <motion.div
              variants={itemVariants}
              className="space-y-6 lg:col-span-2"
            >
              <p className="text-dark-700 dark:text-dark-300 text-lg leading-relaxed">
                {aboutParagraph.text}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative h-[200px] w-[200px]">
                <Image
                  src="/profile.jpg"
                  alt="Moin Ud Din"
                  fill
                  className="dark:border-dark-800 rounded-full border-4 border-white object-cover shadow-lg"
                />
              </div>
            </motion.div>
          </div>

          {/* Education & Achievements */}
          <motion.div variants={itemVariants}>
            <h3 className="text-dark-800 dark:text-dark-200 mb-5 text-center text-xl font-semibold">
              Education & Achievements
            </h3>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {educationAchievements.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="bg-primary-600 mt-2 h-2 w-2 rounded-full"></div>
                  <div>
                    <p className="text-dark-800 dark:text-dark-200 font-medium">
                      {item.title}
                    </p>
                    <p className="text-dark-600 dark:text-dark-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
