import { motion } from "framer-motion";
import { Building, Calendar, MapPin } from "lucide-react";

import { timelineItemVariants } from "@/animations";
import { ExperienceItem } from "@/types";

/**
 * Renders a single experience item as a card in the timeline
 * @param experience - The experience item data
 */
export const ExperienceCard = ({
  experience,
}: {
  experience: ExperienceItem;
}) => (
  <motion.div variants={timelineItemVariants} className="relative">
    {/* Timeline line */}
    <div className="bg-primary-200 dark:bg-primary-800 absolute top-12 bottom-0 left-6 w-0.5"></div>

    {/* Timeline dot */}
    <div className="bg-primary-600 dark:border-dark-900 absolute top-8 left-4 h-4 w-4 rounded-full border-4 border-white shadow-lg"></div>

    <div className="card ml-16 p-6 transition-all duration-300 hover:shadow-xl">
      <div className="mb-4 flex flex-col md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-dark-800 dark:text-dark-200 mb-1 text-xl font-bold">
            {experience.title}
          </h3>
          <div className="mb-2 flex items-center gap-2">
            <Building className="text-primary-600 h-4 w-4" />
            <span className="text-primary-600 text-lg font-semibold">
              {experience.company}
            </span>
            <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded px-2 py-1 text-xs font-medium">
              {experience.type}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-1 md:items-end">
          <div className="text-dark-600 dark:text-dark-400 flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span className="text-sm font-medium">{experience.period}</span>
          </div>
          <div className="text-dark-600 dark:text-dark-400 flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{experience.location}</span>
          </div>
        </div>
      </div>

      <p className="text-dark-700 dark:text-dark-300 mb-4">
        {experience.description}
      </p>

      <div className="mb-4">
        <h4 className="text-dark-800 dark:text-dark-200 mb-2 font-semibold">
          Key Achievements:
        </h4>
        <ul className="space-y-2">
          {experience.achievements.map(
            (achievement: string, achIndex: number) => (
              <li key={achIndex} className="flex items-start gap-2">
                <div className="bg-primary-600 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"></div>
                <span className="text-dark-700 dark:text-dark-300 text-sm">
                  {achievement}
                </span>
              </li>
            ),
          )}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech: string, techIndex: number) => (
          <span
            key={techIndex}
            className="dark:bg-dark-700 text-dark-700 dark:text-dark-300 rounded bg-gray-100 px-2 py-1 text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);
