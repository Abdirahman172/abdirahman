import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon, SparklesIcon } from '@heroicons/react/24/outline';
import phot from '../images/hero.jpg';
import cv from '../images/Abdirahmancv.pdf';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Remove the alert and openCV function, replace with direct download
  // The cv import is already the URL to the PDF file

  // Floating particles data
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 5,
    delay: Math.random() * 5,
  }));

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-purple-900 via-blue-900 to-pink-800 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-pink-600/20"
          animate={{
            background: [
              'linear-gradient(45deg, #ff0080, #00ff88, #0080ff)',
              'linear-gradient(45deg, #0080ff, #ff0080, #00ff88)',
              'linear-gradient(45deg, #00ff88, #0080ff, #ff0080)',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
        
        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-yellow-400 to-pink-400"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              scale: [1, 1.5, 1],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}

        {/* Animated Blobs */}
        <motion.div
          className="absolute top-1/4 -left-20 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 -right-20 w-96 h-96 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-1/2 w-80 h-80 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          >
            <div className="space-y-6">
              <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
              >
                <motion.div
                  className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"
                  whileHover={{ scaleX: 2 }}
                />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold text-sm uppercase tracking-widest"
                  whileHover={{ scale: 1.1 }}
                >
                  Welcome to my portfolio
                </motion.span>
              </motion.div>

              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1, type: "spring" }}
              >
                Hi, I'm{' '}
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse"
                  animate={{
                    backgroundPosition: ['0%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                >
                  Abdirahman
                </motion.span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <motion.p
                  className="text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400 font-bold leading-relaxed"
                  whileHover={{ scale: 1.02 }}
                >
                  Data Science & Web Development Portfolio
                </motion.p>

                <motion.p
                  className="text-gray-200 leading-relaxed max-w-lg text-lg mt-4 backdrop-blur-sm bg-white/5 rounded-2xl p-4 border border-white/10"
                  whileHover={{ scale: 1.01, backgroundColor: 'rgba(255,255,255,0.1)' }}
                >
                  Computer Science student specializing in Data Science, passionate about creating 
                  innovative solutions through web development and machine learning.
                </motion.p>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                {/* CV Download Button - Updated to use anchor tag */}
                <motion.a
                  href={cv}
                  download="Abdirahman_CV.pdf"
                  className="relative overflow-hidden group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl text-center no-underline"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <span className="flex items-center justify-center space-x-2 relative z-10">
                    <span>Download CV</span>
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowDownIcon className="w-5 h-5" />
                    </motion.div>
                  </span>
                </motion.a>

                <motion.button
                  onClick={scrollToContact}
                  className="relative overflow-hidden bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-2xl font-bold text-lg backdrop-blur-sm"
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: 'rgba(34, 211, 238, 0.1)',
                    boxShadow: '0 0 30px rgba(34, 211, 238, 0.5)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.button>
              </motion.div>
            </div>

            {/* Language Skills */}
            <motion.div
              className="pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <motion.p 
                className="text-sm text-cyan-300 mb-4 flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <SparklesIcon className="w-4 h-4 mr-2" />
                Languages I speak:
              </motion.p>
              <div className="flex flex-wrap gap-3">
                {['Somali (native)', 'Arabic', 'English'].map((lang, index) => (
                  <motion.span
                    key={lang}
                    className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:border-cyan-400 transition-all duration-300 cursor-pointer"
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: 'rgba(34, 211, 238, 0.2)',
                      y: -2
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 + index * 0.1 }}
                  >
                    {lang}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - 3D Image Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 100, rotateY: 90 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.2, type: "spring", delay: 0.6 }}
          >
            <motion.div
              className="relative cursor-grab active:cursor-grabbing"
              whileHover={{ y: -10, rotateZ: 2 }}
              whileTap={{ scale: 0.95 }}
              drag
              dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
              dragElastic={0.1}
            >
              {/* Main Image Container */}
              <div className="relative aspect-square bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-pink-400/20 rounded-3xl shadow-2xl backdrop-blur-lg border border-white/20 overflow-hidden">
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-[2px] rounded-3xl bg-gray-900" />
                
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="text-center space-y-6 p-8 w-full h-full flex flex-col items-center justify-center">
                    {/* Profile Picture Container - Half the size of the square box and stable */}
                    <div className="w-1/2 h-1/2 flex items-center justify-center">
                      <motion.div
                        className="w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img 
                          src={phot} 
                          alt="Abdirahman" 
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </div>
                    
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <p className="text-cyan-300 font-bold text-xl mb-2">
                        Abdirahman Ibrahim
                      </p>
                      <p className="text-gray-400 text-sm">
                        Hover & Drag to interact!
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Floating Tech Elements */}
                <motion.div
                  className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg"
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    y: { duration: 4, repeat: Infinity },
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                  }}
                >
                  AI
                </motion.div>
                
                <motion.div
                  className="absolute bottom-6 left-6 w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg"
                  animate={{ 
                    y: [0, 15, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    y: { duration: 3, repeat: Infinity, delay: 1 },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                >
                  DS
                </motion.div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-3xl blur-xl opacity-20 -z-10" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          className="w-8 h-14 border-2 border-cyan-400 rounded-full flex justify-center backdrop-blur-sm bg-white/5"
          whileHover={{ scale: 1.2, borderColor: '#f472b6' }}
        >
          <motion.div
            className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-pink-400 rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;