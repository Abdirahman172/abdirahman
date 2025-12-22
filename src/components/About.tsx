import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AcademicCapIcon, CodeBracketIcon, ChartBarIcon, RocketLaunchIcon, SparklesIcon, FireIcon, XMarkIcon, ArrowsPointingOutIcon } from '@heroicons/react/24/outline';
import image from '../images/abdi.jpg';
import deanlist_sem1 from '../images/deanlist_sem1.jpeg';
import deanlist_sem2 from '../images/deanlist_sem2.jpeg';
import deanlist_sem3 from '../images/deanlist_sem3.jpeg';
import deanlist_sem6 from '../images/deanlist_sem6.jpeg';
import lc from '../images/lc.jpeg';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCert, setSelectedCert] = useState(null);
  const [modalHover, setModalHover] = useState(false);

  const skills = [
    { name: 'Web Development', level: 90, icon: '' },
    { name: 'Data Analysis', level: 85, icon: '' },
    { name: 'Machine Learning', level: 80, icon: '' },
    { name: 'Data Visualization', level: 85, icon: '' },
    { name: 'Database Design', level: 75, icon: '' },
    { name: 'AI Integration', level: 70, icon: '' }
  ];

  const certificates = [
    { 
      title: "Dean's List Semester 1", 
      org: 'Dean of Computing and Informatics', 
      image: deanlist_sem1, 
      color: 'from-blue-500 to-cyan-400',
      description: 'Awarded for outstanding academic achievement with GPA above 3.5 in Semester 1.'
    },
    { 
      title: "Dean's List Semester 2", 
      org: 'Dean of Computing and Informatics', 
      image: deanlist_sem2, 
      color: 'from-purple-500 to-pink-400',
      description: 'Recognized for academic excellence maintaining GPA above 3.5 in Semester 2.'
    },
    { 
      title: "Dean's List Semester 3", 
      org: 'Dean of Computing and Informatics', 
      image: deanlist_sem3, 
      color: 'from-green-500 to-emerald-400',
      description: 'Continued academic excellence with consistent GPA above 3.5 in Semester 3.'
    },
    { 
      title: "Dean's List Semester 6", 
      org: 'Dean of Computing and Informatics', 
      image: deanlist_sem6, 
      color: 'from-orange-500 to-red-400',
      description: 'Sustained outstanding performance with GPA above 3.5 in advanced semester.'
    },
    { 
      title: 'English Programme Completion', 
      org: 'Language Center, AIU', 
      image: lc, 
      color: 'from-yellow-500 to-amber-400',
      description: 'Successfully completed the Pre-University English Programme with distinction.'
    }
  ];

  const stats = [
    { number: '20+', label: 'Projects Completed', icon: '' },
    { number: '3+', label: 'Years Learning', icon: '' },
    { number: '10+', label: 'Technologies', icon: '' },
    { number: '100%', label: 'Passionate', icon: '' }
  ];

  return (
    <>
      <section id="about" className="relative min-h-screen section-padding bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Particles */}
          {Array.from({ length: 25 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-pink-400"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: Math.random() * 4 + 1,
                height: Math.random() * 4 + 1,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, 50, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}

          {/* Animated Blobs */}
          <motion.div
            className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 100, 0],
            }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{
              scale: [1.2, 1, 1.2],
              y: [0, -50, 0],
            }}
            transition={{ duration: 12, repeat: Infinity }}
          />

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        </div>

        <div className="container-max relative z-10">
          <motion.div
            ref={ref}
            className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, type: "spring" }}
          >
            {/* Left Side - 3D Image Card */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -100, rotateY: 90 }}
              animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ duration: 1.2, type: "spring", delay: 0.3 }}
            >
              <motion.div
                className="relative cursor-grab active:cursor-grabbing"
                whileHover={{ y: -20, rotateZ: 5 }}
                whileTap={{ scale: 0.95 }}
                drag
                dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
                dragElastic={0.1}
              >
                {/* Main Image Container */}
                <div className="relative aspect-[4/5] bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-pink-400/20 rounded-3xl shadow-2xl backdrop-blur-lg border border-white/20 overflow-hidden">
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-[2px] rounded-3xl bg-gray-900 overflow-hidden">
                    {/* Background Image */}
                    <motion.img 
                      src={image}
                      alt="Profile"
                      className="w-full h-full object-cover"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      whileHover={{ scale: 1.15 }}
                    />
                    
                    {/* Dark Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent" />
                    
                    {/* Text Content */}
                    <div className="absolute inset-0 flex items-end justify-center z-10 p-8">
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="text-center w-full"
                      >
                        <p className="text-cyan-300 font-bold text-2xl mb-2 drop-shadow-lg">
                          Tech Innovator
                        </p>
                        <p className="text-gray-300 text-base drop-shadow-md">
                          Drag me around! 
                        </p>
                      </motion.div>
                    </div>
                  </div>

                  {/* Floating Tech Badges */}
                  <motion.div
                    className="absolute top-6 left-6 w-14 h-14 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-xs shadow-lg z-20"
                    animate={{ 
                      y: [0, -20, 0],
                      rotate: [0, 360]
                    }}
                    transition={{ 
                      y: { duration: 3, repeat: Infinity },
                      rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                    }}
                  >
                    AI
                  </motion.div>
                  
                  <motion.div
                    className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg z-20"
                    animate={{ 
                      y: [0, 15, 0],
                      scale: [1, 1.3, 1]
                    }}
                    transition={{ 
                      y: { duration: 4, repeat: Infinity, delay: 2 },
                      scale: { duration: 2, repeat: Infinity }
                    }}
                  >
                    DS
                  </motion.div>
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-3xl blur-xl opacity-20 -z-10" />
              </motion.div>

              {/* Stats Grid */}
              <motion.div
                className="grid grid-cols-2 gap-4 mt-8"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-4 text-center group hover:border-cyan-400 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1 + index * 0.1, type: "spring" }}
                  >
                    <motion.div
                      className="text-2xl mb-2"
                      whileHover={{ scale: 1.5, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {stat.icon}
                    </motion.div>
                    <motion.div
                      className="text-2xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
                      whileHover={{ scale: 1.1 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              className="space-y-10"
              initial={{ opacity: 0, x: 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.5, type: "spring" }}
            >
              <div className="space-y-8">
                <motion.div
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  <motion.div
                    className="flex items-center space-x-3"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div
                      className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                      whileHover={{ scaleX: 2 }}
                    />
                    <motion.span
                      className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-black text-lg uppercase tracking-widest"
                      whileHover={{ scale: 1.1 }}
                    >
                      About Me
                    </motion.span>
                  </motion.div>
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <SparklesIcon className="w-6 h-6 text-yellow-400" />
                  </motion.div>
                </motion.div>

                <motion.h2
                  className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9, duration: 0.8 }}
                >
                  Passionate About{' '}
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
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
                    Technology
                  </motion.span>
                </motion.h2>

                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.1, duration: 0.8 }}
                >
                  <motion.p
                    className="text-xl text-gray-200 leading-relaxed backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10"
                    whileHover={{ 
                      scale: 1.01,
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      borderColor: 'rgba(34, 211, 238, 0.3)'
                    }}
                  >
                    Final-year Computer Science student specializing in Data Science at 
                    Albukhary International University (AIU). I'm passionate about leveraging 
                    technology to solve real-world problems through innovative web development 
                    and data-driven solutions.
                  </motion.p>

                  <motion.div
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-400/20"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <FireIcon className="w-8 h-8 text-orange-400" />
                    </motion.div>
                    <p className="text-cyan-200 font-semibold">
                      Currently exploring: AI Integration & Advanced Machine Learning
                    </p>
                  </motion.div>
                </motion.div>
              </div>

              {/* Skills Grid */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.3, duration: 0.8 }}
              >
                <motion.h3
                  className="text-2xl font-black text-white flex items-center space-x-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  >
                    <CodeBracketIcon className="w-7 h-7 text-cyan-400" />
                  </motion.div>
                  <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                    Core Superpowers
                  </span>
                </motion.h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="group relative overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-cyan-400 transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1.5 + index * 0.1, duration: 0.6 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                      
                      <div className="flex items-center justify-between mb-3 relative z-10">
                        <div className="flex items-center space-x-3">
                          <motion.span
                            className="text-2xl"
                            whileHover={{ scale: 1.5, rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            {skill.icon}
                          </motion.span>
                          <span className="text-white font-semibold">{skill.name}</span>
                        </div>
                        <span className="text-cyan-300 font-bold">{skill.level}%</span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="w-full bg-white/10 rounded-full h-2 relative overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ delay: 1.8 + index * 0.1, duration: 1.5, type: "spring" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Certificates Section */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.7, duration: 0.8 }}
              >
                <motion.h3
                  className="text-2xl font-black text-white flex items-center space-x-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <AcademicCapIcon className="w-7 h-7 text-yellow-400" />
                  </motion.div>
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    Academic Achievements
                  </span>
                  <motion.span
                    className="text-xs bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text font-bold px-2 py-1 rounded-full border border-cyan-400/30"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Click to Expand!
                  </motion.span>
                </motion.h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {certificates.map((cert, index) => (
                    <motion.div
                      key={cert.title}
                      className="group relative cursor-pointer"
                      initial={{ opacity: 0, y: 30, scale: 0.8 }}
                      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                      transition={{ delay: 1.9 + index * 0.2, type: "spring" }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCert(cert)}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} rounded-2xl blur-md opacity-60 group-hover:opacity-80 transition-opacity duration-300`} />
                      <div className="relative backdrop-blur-sm bg-gray-900/90 border border-white/10 rounded-2xl p-4 group-hover:border-white/30 transition-all duration-300 overflow-hidden h-full">
                        <div className="aspect-video bg-gradient-to-br from-white/5 to-white/10 rounded-xl mb-4 flex items-center justify-center overflow-hidden group-hover:from-white/10 group-hover:to-white/20 transition-colors duration-300 relative">
                          <motion.img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          />
                          <motion.div
                            className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            whileHover={{ scale: 1.2, rotate: 180 }}
                          >
                            <ArrowsPointingOutIcon className="w-4 h-4 text-white" />
                          </motion.div>
                        </div>
                        <motion.h4
                          className="font-black text-white text-lg mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300"
                          whileHover={{ scale: 1.03 }}
                        >
                          {cert.title}
                        </motion.h4>
                        <p className="text-cyan-300 font-semibold text-sm mb-2">{cert.org}</p>
                        <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
                        
                        {/* Hover Enlarge Indicator */}
                        <motion.div
                          className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            rotate: [0, 10, -10, 0]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        >
                          <div className="text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full font-bold">
                            Click to Enlarge
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Call to Action */}
        <motion.div
          className="absolute bottom-8 right-8"
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
          transition={{ delay: 2.5, type: "spring" }}
        >
          <motion.button
            onClick={() => {
              const element = document.querySelector('#projects');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-full font-black shadow-2xl flex items-center space-x-2"
            whileHover={{ 
              scale: 1.1,
              boxShadow: '0 0 40px rgba(34, 211, 238, 0.8)'
            }}
            whileTap={{ scale: 0.9 }}
            animate={{ 
              y: [0, -10, 0],
              boxShadow: [
                '0 0 20px rgba(34, 211, 238, 0.6)',
                '0 0 40px rgba(34, 211, 238, 0.8)',
                '0 0 20px rgba(34, 211, 238, 0.6)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span></span>
            <span>See My Work!</span>
          </motion.button>
        </motion.div>
      </section>

      {/* Crazy Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            {/* Animated Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Crazy Background Particles */}
              {Array.from({ length: 50 }, (_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: Math.random() * 10 + 2,
                    height: Math.random() * 10 + 2,
                    background: `linear-gradient(45deg, 
                      ${Math.random() > 0.5 ? '#22d3ee' : '#a855f7'},
                      ${Math.random() > 0.5 ? '#ec4899' : '#06b6d4'}
                    )`,
                  }}
                  animate={{
                    y: [0, -100, 0],
                    x: [0, 100, 0],
                    rotate: [0, 360],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: Math.random() * 5 + 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </motion.div>

            {/* Modal Content */}
            <motion.div
              className="relative w-full max-w-6xl bg-gray-900/90 backdrop-blur-2xl border-2 border-white/20 rounded-3xl overflow-hidden shadow-2xl"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ 
                scale: 1, 
                rotate: 0,
                y: modalHover ? [0, -10, 10, -5, 5, 0] : 0
              }}
              transition={{ 
                scale: { type: "spring", stiffness: 200, damping: 20 },
                rotate: { type: "spring", stiffness: 200, damping: 20 }
              }}
              whileHover={{ 
                scale: 1.02,
                borderColor: 'rgba(34, 211, 238, 0.5)',
                boxShadow: '0 0 60px rgba(34, 211, 238, 0.5)'
              }}
              onHoverStart={() => setModalHover(true)}
              onHoverEnd={() => setModalHover(false)}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-20 animate-pulse" />
              
              {/* Inner Container */}
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl overflow-hidden">
                {/* Header */}
                <div className="relative p-6 border-b border-white/10 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
                  <div className="flex items-center justify-between">
                    <motion.div
                      className="flex items-center space-x-3"
                      animate={{ x: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <AcademicCapIcon className="w-8 h-8 text-yellow-400" />
                      <h2 className="text-2xl font-black text-white">{selectedCert.title}</h2>
                    </motion.div>
                    
                    <motion.button
                      onClick={() => setSelectedCert(null)}
                      className="p-2 hover:bg-white/10 rounded-full transition-colors"
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <XMarkIcon className="w-6 h-6 text-white" />
                    </motion.button>
                  </div>
                  <p className="text-cyan-300 font-semibold mt-2">{selectedCert.org}</p>
                </div>

                {/* Content */}
                <div className="p-8 grid lg:grid-cols-2 gap-8">
                  {/* Image Container */}
                  <motion.div
                    className="relative"
                    animate={modalHover ? {
                      scale: [1, 1.05, 1],
                      rotate: [0, 1, -1, 0]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${selectedCert.color} rounded-2xl blur-xl opacity-30`} />
                    <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-2 border border-white/10 overflow-hidden">
                      <motion.img
                        src={selectedCert.image}
                        alt={selectedCert.title}
                        className="w-full h-auto rounded-xl"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        drag
                        dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
                        dragElastic={0.2}
                      />
                      
                      {/* Floating Badge */}
                      <motion.div
                        className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg"
                        animate={{ 
                          y: [0, -10, 0],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        CERTIFIED
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Details */}
                  <div className="space-y-6">
                    <motion.div
                      className="space-y-4"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                        Certificate Details
                      </h3>
                      
                      <div className="space-y-3">
                        <motion.div
                          className="p-4 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 rounded-xl border border-cyan-400/20"
                          whileHover={{ scale: 1.02, x: 5 }}
                        >
                          <p className="text-gray-300 leading-relaxed">{selectedCert.description}</p>
                        </motion.div>
                        
                        <motion.div
                          className="grid grid-cols-2 gap-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          <motion.div
                            className="p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-white/10 text-center"
                            whileHover={{ scale: 1.05, y: -3 }}
                          >
                            <div className="text-cyan-400 text-sm font-semibold mb-1">Recognition</div>
                            <div className="text-white font-bold">Academic Excellence</div>
                          </motion.div>
                          
                          <motion.div
                            className="p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-white/10 text-center"
                            whileHover={{ scale: 1.05, y: -3 }}
                          >
                            <div className="text-cyan-400 text-sm font-semibold mb-1">Award Type</div>
                            <div className="text-white font-bold">Dean's List</div>
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                      className="flex space-x-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <motion.button
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-xl font-bold text-center"
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: '0 0 30px rgba(34, 211, 238, 0.5)'
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Download Certificate
                      </motion.button>
                      
                      <motion.button
                        className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-bold text-center"
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)'
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Share Achievement
                      </motion.button>
                    </motion.div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-white/10 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
                  <motion.div
                    className="text-center text-gray-400 text-sm"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Drag the image to view different angles • Click outside to close
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default About;