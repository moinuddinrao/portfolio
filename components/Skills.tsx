"use client";

import { easeInOut, motion } from "framer-motion";

import { containerVariants } from "@/animations";
import { certifications, skillCategories } from "@/constants";

export const Skills = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        // Use the imported named easing function as required by Framer Motion types
        ease: easeInOut,
      },
    },
  };

  const skillVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <section id="skills" className="dark:bg-dark-800 bg-gray-50 py-20">
      <div className="container-max section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-6xl"
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-dark-600 dark:text-dark-400 mx-auto max-w-2xl text-lg">
              A comprehensive overview of my technical expertise and the tools I
              use to build amazing applications
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={itemVariants}
            className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  className="card p-6 transition-all duration-300"
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="mb-5 flex items-center">
                    <motion.div
                      className={`h-10 w-10 ${category.color} mr-3 flex items-center justify-center rounded-lg`}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </motion.div>
                    <h3 className="text-dark-800 dark:text-dark-200 text-xl font-semibold">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full px-3 py-1 text-sm font-medium"
                        variants={skillVariants}
                        initial="initial"
                        whileHover="hover"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <div className="card border-primary-500 border-t-4 p-8">
              <h3 className="text-dark-800 dark:text-dark-200 mb-6 text-center text-2xl font-bold">
                Professional Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="bg-primary-600 mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
                    <p className="text-dark-700 dark:text-dark-300">{cert}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
