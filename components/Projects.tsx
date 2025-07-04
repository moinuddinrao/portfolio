"use client";

import { motion } from "framer-motion";

import { sectionAnimations } from "@/animations";
import { getCategoryColor, getCategoryIcon, projects } from "@/constants";

export const Projects = () => {
  const { container: containerVariants, item: itemVariants } =
    sectionAnimations;

  return (
    <section id="projects" className="dark:bg-dark-800 bg-gray-50 py-20">
      <div className="container-max section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-7xl"
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-dark-600 dark:text-dark-400 mx-auto max-w-2xl text-lg">
              A showcase of my work across different domains, demonstrating
              technical expertise and problem-solving skills
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => {
              const CategoryIcon = getCategoryIcon(project.category);
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card group dark:bg-dark-700 overflow-hidden rounded-xl bg-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                >
                  {/* Category Header */}
                  <div className="from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 relative flex h-48 items-center justify-center bg-gradient-to-br">
                    <CategoryIcon className="text-primary-600 dark:text-primary-400 mb-1 h-14 w-14" />
                    <span className="text-primary-700 dark:text-primary-300 text-sm font-medium">
                      {project.category}
                    </span>

                    <span
                      className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold text-white ${getCategoryColor(project.category)}`}
                    >
                      {project.category}
                    </span>
                  </div>

                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-dark-800 dark:text-dark-200 mb-2 text-lg font-semibold">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-dark-600 dark:text-dark-400 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <ul className="mb-4 space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="bg-primary-600 h-1.5 w-1.5 rounded-full" />
                          <span className="text-dark-600 dark:text-dark-400 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies*/}
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded px-2 py-1 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
