import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import { fadeIn, fadeUp, staggerContainer } from '../animations/variants';
import SectionWrapper from '../components/SectionWrapper';

const About = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('skills');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SectionWrapper id="about" className="relative bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Web Developer passionate about fintech and digital payment solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Stats/Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Stats Container */}
            <div className="mb-10 lg:mb-0">
              <div className="space-y-6">
                {[
                  { value: '5+', label: 'Months Internship' },
                  { value: '2', label: 'Real-world Projects' },
                  { value: '100%', label: 'Code Quality Focus' }
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className="flex items-center space-x-4"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-gray-700 dark:text-gray-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Simple decorative element */}
            <div className="hidden lg:block absolute -bottom-8 -right-8 w-40 h-40 bg-primary/5 rounded-full blur-xl"></div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.h3
              variants={fadeUp}
              className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white"
            >
              Web Developer with User-Centered Design
            </motion.h3>
            
            <motion.p
              variants={fadeUp}
              className="text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              Web Developer with a strong foundation in user-centered design, responsive interfaces, 
              and modern frontend technologies. Passionate about building scalable and intuitive 
              web applications, with a keen interest in fintech and digital payment solutions.
            </motion.p>
            
            <motion.p
              variants={fadeUp}
              className="text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              Hands-on experience designing intuitive user interfaces using Figma and building 
              interactive web applications with React.js. Skilled in translating wireframes and 
              prototypes into clean, reusable code while ensuring usability, accessibility, and 
              performance.
            </motion.p>
            
            <motion.p
              variants={fadeUp}
              className="text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              Completed a 5-month Full-Stack Internship and a 4-month UI/UX Internship, 
              contributing to real-world projects in agile teams with a focus on scalable 
              web development.
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full flex justify-center"
        >
          <motion.button
            onClick={scrollToNext}
            aria-label="Scroll down"
            className="group flex flex-col items-center space-y-2"
          >
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors duration-300">
              Explore Skills
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <FiArrowDown className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-primary transition-colors duration-300" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;