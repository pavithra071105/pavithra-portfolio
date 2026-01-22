import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import { fadeUp, staggerContainer } from '../animations/variants';
import SectionWrapper from '../components/SectionWrapper';

const Experience = () => {
  const EXPERIENCE = [
    {
      id: 1,
      role: 'Full Stack Developer Intern',
      company: 'Luisant Software Solution',
      location: 'Coimbatore',
      duration: 'Aug 2025 - Dec 2025',
      description: 'Contributed to the development of a Project Management System with focus on user interface design and scalable architecture in an agile environment.',
      achievements: [
        'Developed React-based frontend to enhance task visibility and improve user workflow',
        'Collaborated with backend developers to integrate REST APIs ensuring smooth data flow',
        'Participated in code reviews and followed best practices for clean, maintainable code',
        'Focused on scalable architecture and user-centric design principles'
      ]
    },
    {
      id: 2,
      role: 'UI/UX Design Intern',
      company: 'Internship Experience (4 months)',
      location: 'Remote',
      duration: 'Apr 2025 - Jul 2025',
      description: 'Completed a comprehensive UI/UX internship focusing on user-centered design principles and modern interface development.',
      achievements: [
        'Designed intuitive user interfaces using Figma for web applications',
        'Created wireframes and prototypes for responsive web applications',
        'Learned to translate designs into clean, reusable frontend code',
        'Gained hands-on experience in usability testing and design iteration'
      ]
    }
  ];

  return (
    <SectionWrapper id="experience">
      <div className="text-center mb-12">
        <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Work <span className="text-primary">Experience</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          My professional journey in web development and UI/UX design
        </motion.p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-accent md:block hidden" />

        {EXPERIENCE.map((exp, index) => (
          <motion.div
            key={exp.id}
            variants={fadeUp}
            custom={index}
            className={`relative mb-12 md:flex items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-gray-900 z-10 md:block hidden" />

            {/* Content */}
            <div
              className={`md:w-5/12 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
              }`}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Duration */}
                <div className="flex items-center gap-2 text-primary mb-2">
                  <FiCalendar />
                  <span className="font-medium">{exp.duration}</span>
                </div>

                {/* Role and Company */}
                <h3 className="text-xl font-bold mb-1 text-gray-800 dark:text-white">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                  <FiBriefcase />
                  <span>{exp.company}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-4">
                  <FiMapPin />
                  <span>{exp.location}</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Key Contributions:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1 flex-shrink-0">▸</span>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;