import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiCalendar } from 'react-icons/fi';
import { fadeUp, staggerContainer } from '../animations/variants';
import SectionWrapper from '../components/SectionWrapper';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'AWS Cloud Practitioner Essentials',
      issuer: 'AWS Training & Certification',
      date: 'Sep 2025',
      credentialId: 'AWS-CPE-2025',
      link: '#',
      description: 'Cloud fundamentals relevant for scalable web applications'
    },
    {
      id: 2,
      title: 'Mastering Figma: Beginner to Expert UI/UX Design',
      issuer: 'GUVI (HCL Initiative)',
      date: 'Dec 2025',
      credentialId: 'GUVI-FIGMA-2025',
      link: '#',
      description: 'Comprehensive UI/UX design training using Figma'
    },
    {
      id: 3,
      title: 'Certified in Python with AI and Data Science',
      issuer: 'NSIC Technical Services Centre, Chennai',
      date: 'Aug 2024',
      credentialId: 'NSIC-PYTHON-AI-2024',
      link: '#',
      description: 'Python programming with focus on AI and Data Science applications'
    },
    {
      id: 4,
      title: 'Python Project for Beginners',
      issuer: 'Great Learning Academy',
      date: 'Nov 2024',
      credentialId: 'GLA-PYTHON-2024',
      link: '#',
      description: 'Hands-on Python project development for beginners'
    },
    {
      id: 5,
      title: 'HackerRamp WeForShe - Phase 1 Participant',
      issuer: 'Myntra Designs Pvt. Ltd.',
      date: '2024',
      credentialId: 'MYNTRA-WEFORSHE-2024',
      link: '#',
      description: 'Participated in Myntra\'s diversity and inclusion tech initiative'
    }
  ];

  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <SectionWrapper id="certifications" className="bg-gray-50 dark:bg-gray-900/50">
      <div className="text-center mb-12">
        <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Certifications & <span className="text-primary">Credentials</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          Professional certifications and training that validate my technical skills
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            variants={fadeUp}
            custom={index}
            onMouseEnter={() => setHoveredCard(cert.id)}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full"
          >
            {/* Hover Effect Background */}
            <motion.div
              initial={false}
              animate={{
                scale: hoveredCard === cert.id ? 1 : 0,
                opacity: hoveredCard === cert.id ? 1 : 0
              }}
              className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"
            />

            <div className="relative z-10 h-full flex flex-col">
              {/* Badge/Icon */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary p-3 mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-xl">
                    {cert.issuer.includes('AWS') ? '☁️' : 
                     cert.issuer.includes('Figma') || cert.issuer.includes('GUVI') ? '🎨' : 
                     cert.issuer.includes('Python') ? '🐍' : '🏆'}
                  </span>
                </div>
              </div>

              {/* Certification Details */}
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                {cert.title}
              </h3>
              
              <div className="space-y-3 mb-4 flex-grow">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Issuer:</span>
                  <span className="text-sm">{cert.issuer}</span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <FiCalendar className="flex-shrink-0" />
                  <span className="text-sm">{cert.date}</span>
                  <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                    {cert.credentialId}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm flex-grow">
                {cert.description}
              </p>

              {/* Action Button */}
              <div className="mt-auto">
                <motion.a
                  whileHover={{ x: 5 }}
                  href={cert.link}
                  className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors text-sm"
                >
                  <span>View Details</span>
                  <FiExternalLink />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Certifications;