import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeUp, staggerContainer } from '../animations/variants';
import SectionWrapper from '../components/SectionWrapper';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const SKILLS = [
    { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
    { name: 'React.js', level: 80, color: 'bg-blue-500' },
    { name: 'HTML5', level: 90, color: 'bg-orange-500' },
    { name: 'CSS3/Tailwind', level: 85, color: 'bg-blue-400' },
    { name: 'Figma (UI/UX)', level: 75, color: 'bg-purple-500' },
    { name: 'SQL', level: 70, color: 'bg-cyan-500' },
    { name: 'Java', level: 65, color: 'bg-red-500' },
    { name: 'Python', level: 70, color: 'bg-green-500' },
  ];

  return (
    <SectionWrapper id="skills">
      <div className="text-center mb-12">
        <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          My <span className="text-primary">Skills</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          Technologies and tools I specialize in
        </motion.p>
      </div>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-800 dark:text-white">
                {skill.name}
              </span>
              <span className="text-primary font-bold">{skill.level}%</span>
            </div>
            
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : {}}
                transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                className={`h-full ${skill.color} rounded-full`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Technologies */}
      <motion.div
        variants={fadeUp}
        className="mt-12"
      >
        <h3 className="text-2xl font-bold mb-6 text-center">Tools & Frameworks</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-700 dark:text-gray-300">Frameworks & Libraries</h4>
            <div className="flex flex-wrap gap-2">
              {['React.js', 'Tailwind CSS', 'React Three Fiber', 'Bootstrap'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-700 dark:text-gray-300">Tools & Platforms</h4>
            <div className="flex flex-wrap gap-2">
              {['Git', 'GitHub', 'VS Code', 'Figma', 'REST APIs', 'AWS', 'Netlify', 'Vercel'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-300 rounded-full text-sm hover:bg-green-100 dark:hover:bg-green-800 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-700 dark:text-gray-300">Languages</h4>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'HTML5', 'CSS3', 'SQL', 'Java', 'C', 'Python'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 rounded-full text-sm hover:bg-purple-100 dark:hover:bg-purple-800 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-700 dark:text-gray-300">Soft Skills</h4>
            <div className="flex flex-wrap gap-2">
              {['Problem Solving', 'Ownership', 'Adaptability', 'Team Collaboration', 'Agile Development'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 rounded-full text-sm hover:bg-orange-100 dark:hover:bg-orange-800 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Skills;