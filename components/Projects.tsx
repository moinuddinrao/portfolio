"use client";

import { motion } from "framer-motion";

import { sectionAnimations } from "@/animations";
import { getCategoryColor, getCategoryIcon, projects } from "@/constants";

export const Projects = () => {
  const { container: containerVariants, item: itemVariants } =
    sectionAnimations;

  return (
    <section id="projects" className="section-gradient-neutral py-20">
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
            <p className="text-dark-600 dark:text-dark-300 mx-auto max-w-2xl text-lg">
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
                  className="card group overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                >
                  {/* Category Header */}
                  <div className="from-primary-100 to-primary-200 dark:from-dark-700 dark:to-dark-600 relative flex h-48 items-center justify-center bg-gradient-to-br">
                    <div className="flex flex-col items-center">
                      <CategoryIcon className="text-primary-600 dark:text-primary-400 mb-2 h-14 w-14" />
                      <span className="text-primary-700 dark:text-primary-300 text-sm font-medium">
                        {project.category}
                      </span>
                    </div>

                    <span
                      className={`absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-semibold text-white shadow-sm ${getCategoryColor(project.category)}`}
                    >
                      {project.category}
                    </span>
                  </div>

                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-dark-800 dark:text-dark-100 mb-2 text-lg font-semibold">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-dark-600 dark:text-dark-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <ul className="mb-4 space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="bg-primary-600 dark:bg-primary-500 h-1.5 w-1.5 rounded-full" />
                          <span className="text-dark-600 dark:text-dark-300 text-sm">
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
                          className="bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300 dark:ring-primary-500/30 rounded px-2 py-1 text-xs font-medium dark:ring-1"
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
