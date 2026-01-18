import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AcademicCapIcon, XMarkIcon, ArrowsPointingOutIcon, TrophyIcon, StarIcon } from '@heroicons/react/24/outline';
import deanlist_sem1 from '../images/deanlist_sem1.jpeg';
import deanlist_sem2 from '../images/deanlist_sem2.jpeg';
import deanlist_sem3 from '../images/deanlist_sem3.jpeg';
import deanlist_sem6 from '../images/deanlist_sem6.jpeg';
import lc from '../images/Lc-Bx9Ok-cf.jpeg';

const Certificates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCert, setSelectedCert] = useState(null);
  const [modalHover, setModalHover] = useState(false);

  const certificates = [
    { 
      title: "Dean's List Semester 1", 
      org: 'Dean of Computing and Informatics, AIU', 
      image: deanlist_sem1, 
      color: 'from-blue-500 to-cyan-400',
      description: 'Awarded for outstanding academic achievement with GPA above 3.5 in Semester 1. This recognition reflects exceptional performance in foundational computer science courses including Programming Fundamentals, Mathematics for Computing, and Digital Logic Design.',
      period: 'September 2021 - January 2022',
      gpa: '3.67',
      subjects: ['Programming Fundamentals', 'Mathematics for Computing', 'Digital Logic Design', 'English Communication'],
      achievement: 'Top 15% of the cohort',
      category: 'Academic Excellence'
    },
    { 
      title: "Dean's List Semester 2", 
      org: 'Dean of Computing and Informatics, AIU', 
      image: deanlist_sem2, 
      color: 'from-purple-500 to-pink-400',
      description: 'Recognized for academic excellence maintaining GPA above 3.5 in Semester 2. Demonstrated consistent high performance in advanced programming concepts, data structures, and web development fundamentals.',
      period: 'February 2022 - June 2022',
      gpa: '3.72',
      subjects: ['Object-Oriented Programming', 'Data Structures & Algorithms', 'Web Development', 'Database Systems'],
      achievement: 'Top 12% of the cohort',
      category: 'Academic Excellence'
    },
    { 
      title: "Dean's List Semester 3", 
      org: 'Dean of Computing and Informatics, AIU', 
      image: deanlist_sem3, 
      color: 'from-green-500 to-emerald-400',
      description: 'Continued academic excellence with consistent GPA above 3.5 in Semester 3. Excelled in software engineering principles, advanced algorithms, and system analysis while maintaining leadership in group projects.',
      period: 'September 2022 - January 2023',
      gpa: '3.78',
      subjects: ['Software Engineering', 'Advanced Algorithms', 'System Analysis & Design', 'Computer Networks'],
      achievement: 'Top 10% of the cohort',
      category: 'Academic Excellence'
    },
    { 
      title: "Dean's List Semester 6", 
      org: 'Dean of Computing and Informatics, AIU', 
      image: deanlist_sem6, 
      color: 'from-orange-500 to-red-400',
      description: 'Sustained outstanding performance with GPA above 3.5 in advanced semester coursework. Demonstrated mastery in data science, machine learning, and advanced software development while contributing to research projects.',
      period: 'September 2023 - January 2024',
      gpa: '3.85',
      subjects: ['Machine Learning', 'Data Mining', 'Advanced Database Systems', 'Software Project Management'],
      achievement: 'Top 8% of the cohort',
      category: 'Academic Excellence'
    },
    { 
      title: 'English Programme Completion Certificate', 
      org: 'Language Center, Albukhary International University', 
      image: lc, 
      color: 'from-yellow-500 to-amber-400',
      description: 'Successfully completed the comprehensive Pre-University English Programme with distinction. Achieved advanced proficiency in academic English, research writing, and presentation skills essential for university-level studies.',
      period: 'March 2021 - August 2021',
      level: 'Advanced (C1)',
      skills: ['Academic Writing', 'Research Methodology', 'Presentation Skills', 'Critical Thinking'],
      achievement: 'Distinction Grade (85%+)',
      category: 'Language Proficiency'
    }
  ];

  const stats = [
    { number: '5', label: 'Certificates Earned', icon: '🏆' },
    { number: '3.75', label: 'Average GPA', icon: '📊' },
    { number: '4', label: 'Dean\'s List Awards', icon: '🌟' },
    { number: '100%', label: 'Commitment', icon: '💪' }
  ];

  return (
    <>
      <section id="certificates" className="relative min-h-screen section-padding bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Particles */}
          {Array.from({ length: 30 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-yellow-400 to-orange-400"
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
            className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 100, 0],
            }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
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
          {/* Header Section */}
          <motion.div
            ref={ref}
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <motion.div
              className="flex items-center justify-center space-x-4 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.div
                className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                whileHover={{ scaleX: 2 }}
              />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 font-black text-lg uppercase tracking-widest"
                whileHover={{ scale: 1.1 }}
              >
                Academic Achievements
              </motion.span>
              <motion.div
                className="w-16 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"
                whileHover={{ scaleX: 2 }}
              />
            </motion.div>
            
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Academic{' '}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400"
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
                Achievements
              </motion.span>
            </motion.h2>
            
            <motion.p
              className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              whileHover={{ 
                scale: 1.01,
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderColor: 'rgba(251, 191, 36, 0.3)'
              }}
            >
              A comprehensive showcase of academic achievements, certifications, and recognitions earned throughout my educational journey at Albukhary International University.
            </motion.p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 text-center group hover:border-yellow-400 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1, type: "spring" }}
              >
                <motion.div
                  className="text-3xl mb-3"
                  whileHover={{ scale: 1.5, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  className="text-3xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certificates Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="group relative cursor-pointer h-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCert(cert)}
              >
                {/* Certificate Card */}
                <div className="relative overflow-hidden rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-yellow-400 transition-all duration-500 flex flex-col h-full shadow-lg">
                  {/* Certificate Image */}
                  <div className="relative w-full h-64 bg-gradient-to-br from-yellow-500/20 via-orange-500/20 to-red-500/20 overflow-hidden flex-shrink-0">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />

                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-yellow-500/40 to-orange-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.div
                        className="text-center text-white"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                      >
                        <ArrowsPointingOutIcon className="w-12 h-12 mx-auto mb-2" />
                        <p className="font-bold">View Details</p>
                      </motion.div>
                    </motion.div>

                    {/* Category Badge */}
                    <motion.div
                      className="absolute top-3 left-3 px-3 py-1 backdrop-blur-sm bg-black/50 rounded-full text-white text-xs font-semibold"
                      whileHover={{ scale: 1.1 }}
                    >
                      {cert.category}
                    </motion.div>
                  </div>

                  {/* Certificate Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                      {cert.title}
                    </h3>
                    
                    <p className="text-yellow-300 font-semibold text-xs mb-3 line-clamp-1">{cert.org}</p>
                    
                    <p className="text-gray-300 leading-relaxed text-sm mb-4">
                      {cert.category}
                    </p>
                    
                    <p className="text-gray-400 leading-relaxed text-sm flex-grow line-clamp-3">
                      {cert.description.substring(0, 150)}...
                    </p>
                    
                    <motion.div
                      className="mt-4 text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <button className="text-yellow-400 hover:text-yellow-300 font-semibold text-sm transition-colors">
                        View Details →
                      </button>
                    </motion.div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-2xl blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-gray-300 text-lg mb-6"
              whileHover={{ scale: 1.05 }}
            >
              Impressed by my academic journey? Let's discuss how my skills can benefit your projects! 
            </motion.p>
            <motion.button
              onClick={() => {
                const element = document.querySelector('#contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-black shadow-2xl flex items-center space-x-3 mx-auto group"
              whileHover={{ 
                scale: 1.1,
                boxShadow: '0 0 40px rgba(251, 191, 36, 0.8)'
              }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                y: [0, -5, 0],
                boxShadow: [
                  '0 10px 25px rgba(251, 191, 36, 0.4)',
                  '0 15px 35px rgba(251, 191, 36, 0.6)',
                  '0 10px 25px rgba(251, 191, 36, 0.4)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span>🎓</span>
              <span>Get In Touch</span>
              <span>✨</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
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
              {/* Background Particles */}
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
                      ${Math.random() > 0.5 ? '#fbbf24' : '#f59e0b'},
                      ${Math.random() > 0.5 ? '#f97316' : '#ea580c'}
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
                borderColor: 'rgba(251, 191, 36, 0.5)',
                boxShadow: '0 0 60px rgba(251, 191, 36, 0.5)'
              }}
              onHoverStart={() => setModalHover(true)}
              onHoverEnd={() => setModalHover(false)}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 opacity-20 animate-pulse" />
              
              {/* Inner Container */}
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl overflow-hidden">
                {/* Header */}
                <div className="relative p-6 border-b border-white/10 bg-gradient-to-r from-yellow-900/20 via-orange-900/20 to-red-900/20">
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
                  <p className="text-yellow-300 font-semibold mt-2">{selectedCert.org}</p>
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
                        className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg"
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
                      <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                        Certificate Details
                      </h3>
                      
                      <div className="space-y-4">
                        <motion.div
                          className="p-4 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-xl border border-yellow-400/20"
                          whileHover={{ scale: 1.02, x: 5 }}
                        >
                          <p className="text-gray-300 leading-relaxed">{selectedCert.description}</p>
                        </motion.div>
                        
                        {/* Enhanced Details Grid */}
                        <motion.div
                          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          <motion.div
                            className="p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-white/10 text-center"
                            whileHover={{ scale: 1.05, y: -3 }}
                          >
                            <div className="text-yellow-400 text-sm font-semibold mb-1">Period</div>
                            <div className="text-white font-bold">{selectedCert.period}</div>
                          </motion.div>
                          
                          <motion.div
                            className="p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-white/10 text-center"
                            whileHover={{ scale: 1.05, y: -3 }}
                          >
                            <div className="text-yellow-400 text-sm font-semibold mb-1">Achievement</div>
                            <div className="text-white font-bold">{selectedCert.achievement}</div>
                          </motion.div>

                          {selectedCert.gpa && (
                            <motion.div
                              className="p-4 bg-gradient-to-br from-green-800/30 to-emerald-800/30 rounded-xl border border-green-400/20 text-center"
                              whileHover={{ scale: 1.05, y: -3 }}
                            >
                              <div className="text-green-400 text-sm font-semibold mb-1">GPA Achieved</div>
                              <div className="text-white font-bold text-lg">{selectedCert.gpa}</div>
                            </motion.div>
                          )}

                          {selectedCert.level && (
                            <motion.div
                              className="p-4 bg-gradient-to-br from-blue-800/30 to-cyan-800/30 rounded-xl border border-blue-400/20 text-center"
                              whileHover={{ scale: 1.05, y: -3 }}
                            >
                              <div className="text-blue-400 text-sm font-semibold mb-1">Proficiency Level</div>
                              <div className="text-white font-bold">{selectedCert.level}</div>
                            </motion.div>
                          )}
                        </motion.div>

                        {/* Subjects/Skills Section */}
                        {(selectedCert.subjects || selectedCert.skills) && (
                          <motion.div
                            className="space-y-3"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                          >
                            <h4 className="text-lg font-bold text-white flex items-center space-x-2">
                              <motion.span
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                              >
                                📚
                              </motion.span>
                              <span>{selectedCert.subjects ? 'Key Subjects' : 'Skills Developed'}</span>
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {(selectedCert.subjects || selectedCert.skills)?.map((item, index) => (
                                <motion.span
                                  key={item}
                                  className="px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 text-yellow-300 rounded-full text-sm font-medium"
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.7 + index * 0.1 }}
                                  whileHover={{ scale: 1.1, y: -2 }}
                                >
                                  {item}
                                </motion.span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                      className="flex flex-col sm:flex-row gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <motion.button
                        className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 rounded-xl font-bold text-center flex items-center justify-center space-x-2"
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: '0 0 30px rgba(251, 191, 36, 0.5)'
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>📄</span>
                        <span>View Certificate</span>
                      </motion.button>
                      
                      <motion.button
                        className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-bold text-center flex items-center justify-center space-x-2"
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: '0 0 30px rgba(249, 115, 22, 0.5)'
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>🎓</span>
                        <span>Verify Achievement</span>
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

export default Certificates;