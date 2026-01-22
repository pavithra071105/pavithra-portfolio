import { motion } from 'framer-motion';
import { FiArrowDown, FiMail, FiDownload } from 'react-icons/fi';
import { fadeIn, fadeUp, staggerContainer } from '../animations/variants';
import ParticlesBackground from '../components/ParticlesBackground';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to handle resume download
  const handleResumeDownload = () => {
    // Add your resume download logic here
    // Example: window.open('/resume.pdf', '_blank');
    console.log('Downloading resume...');
    // Uncomment and update with your actual resume link:
    // window.open('/PAVITHRA_resume.pdf', '_blank');
  };

  // Function to handle contact click
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* 3D Background */}
      <ParticlesBackground />
      
      <div className="container mx-auto px-6 lg:px-8 z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
          {/* Left Column - Content */}
          <div className="relative z-20 pt-12 lg:pt-0">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-8 max-w-2xl"
            >
              {/* Main Heading */}
              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight"
              >
                <span className="block text-white mb-2">
                  Web Developer specializing in
                </span>
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  React.js & UI/UX Design
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.div
                variants={fadeUp}
                className="flex items-center gap-3"
              >
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-lg md:text-xl text-green-400 font-medium">
                  Available for opportunities
                </span>
              </motion.div>

              {/* Description */}
              <motion.p
                variants={fadeUp}
                className="text-lg md:text-xl text-gray-300 leading-relaxed"
              >
                Passionate about building scalable web applications with a focus on 
                user-centered design, clean code, and modern frontend technologies. 
                Special interest in fintech and digital payment solutions.
              </motion.p>

              {/* Key Highlights */}
              <motion.div
                variants={fadeUp}
                className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4"
              >
                <div className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-2xl font-bold text-blue-400">9+</div>
                  <div className="text-sm text-gray-300 mt-1">Months Internship</div>
                </div>
                <div className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-2xl font-bold text-cyan-400">2+</div>
                  <div className="text-sm text-gray-300 mt-1">Real Projects</div>
                </div>
                <div className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-2xl font-bold text-purple-400">100%</div>
                  <div className="text-sm text-gray-300 mt-1">Code Quality</div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row gap-4 pt-8"
              >
                {/* Contact Me Button */}
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleContactClick}
                  className="group relative px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-600/40 flex items-center justify-center gap-3 text-lg overflow-hidden"
                >
                  {/* Hover effect background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Button content */}
                  <span className="relative z-10 flex items-center gap-3">
                    <FiMail className="w-5 h-5" />
                    Let's Connect
                  </span>
                </motion.button>
                
                {/* Download Resume Button */}
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleResumeDownload}
                  className="group relative px-10 py-4 border-2 border-white/60 text-white font-medium rounded-full hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center justify-center gap-3 text-lg backdrop-blur-sm"
                >
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300"></div>
                  
                  {/* Button content */}
                  <span className="relative z-10 flex items-center gap-3">
                    <FiDownload className="w-5 h-5" />
                    Get My CV
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - 3D Elements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[400px] lg:h-[500px] flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* Main centered element - Tech Stack Visual */}
              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto rounded-full bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 backdrop-blur-sm border border-white/20 shadow-2xl overflow-hidden"
              >
                {/* Subtle pattern inside */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-3/4 h-3/4">
                    {/* Tech stack floating elements */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0"
                    >
                      {/* React.js */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-400/30">
                        <span className="text-blue-400 font-bold text-sm">⚛️</span>
                      </div>
                      
                      {/* Figma */}
                      <div className="absolute bottom-1/2 right-0 transform translate-x-1/2 w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-400/30">
                        <span className="text-purple-400 font-bold text-sm">🎨</span>
                      </div>
                      
                      {/* JavaScript */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center border border-yellow-400/30">
                        <span className="text-yellow-400 font-bold text-sm">JS</span>
                      </div>
                      
                      {/* CSS */}
                      <div className="absolute bottom-1/2 left-0 transform -translate-x-1/2 w-10 h-10 bg-blue-400/20 rounded-full flex items-center justify-center border border-blue-300/30">
                        <span className="text-blue-300 font-bold text-sm">CSS</span>
                      </div>
                    </motion.div>
                    
                    {/* Central element with React symbol */}
                    <div className="absolute inset-12 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="w-20 h-20 border-2 border-blue-400/30 rounded-full flex items-center justify-center"
                      >
                        <div className="text-3xl text-blue-300">⚛️</div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating tags */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -left-4 top-8 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10"
              >
                <span className="text-sm text-cyan-300">UI/UX Design</span>
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute -right-4 bottom-12 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10"
              >
                <span className="text-sm text-blue-300">React.js</span>
              </motion.div>
            </div>
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
            onClick={scrollToAbout}
            aria-label="Scroll down"
            className="group flex flex-col items-center space-y-2"
          >
            <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
              Explore My Work
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <FiArrowDown className="w-7 h-7 text-gray-500 group-hover:text-white transition-colors duration-300" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;