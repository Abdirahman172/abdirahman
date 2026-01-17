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
import googleDataAnalytics from '../images/google-data-analytics.png';
import courseraML from '../images/coursera-ml.png';
import awsCloud from '../images/aws-cloud.png';

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
      org: 'Dean of Computing and Informatics, AIU', 
      image: deanlist_sem1, 
      color: 'from-blue-500 to-cyan-400',
      description: 'Awarded for outstanding academic achievement in Semester 1. This recognition reflects exceptional performance in foundational computer science courses including Programming Fundamentals, Mathematics for Computing, and Digital Logic Design.',
      period: 'September 2021 - January 2022',
      subjects: ['Programming Fundamentals', 'Mathematics for Computing', 'Digital Logic Design', 'English Communication'],
      achievement: 'Top 15% of the cohort',
      type: 'academic'
    },
    { 
      title: "Dean's List Semester 2", 
      org: 'Dean of Computing and Informatics, AIU', 
      image: deanlist_sem2, 
      color: 'from-purple-500 to-pink-400',
      description: 'Recognized for academic excellence in Semester 2. Demonstrated consistent high performance in advanced programming concepts, data structures, and web development fundamentals.',
      period: 'February 2022 - June 2022',
      subjects: ['Object-Oriented Programming', 'Data Structures & Algorithms', 'Web Development', 'Database Systems'],
      achievement: 'Top 12% of the cohort',
      type: 'academic'
    },
    { 
      title: "Dean's List Semester 3", 
      org: 'Dean of Computing and Informatics, AIU', 
      image: deanlist_sem3, 
      color: 'from-green-500 to-emerald-400',
      description: 'Continued academic excellence in Semester 3. Excelled in software engineering principles, advanced algorithms, and system analysis while maintaining leadership in group projects.',
      period: 'September 2022 - January 2023',
      subjects: ['Software Engineering', 'Advanced Algorithms', 'System Analysis & Design', 'Computer Networks'],
      achievement: 'Top 10% of the cohort',
      type: 'academic'
    },
    { 
      title: "Dean's List Semester 6", 
      org: 'Dean of Computing and Informatics, AIU', 
      image: deanlist_sem6, 
      color: 'from-orange-500 to-red-400',
      description: 'Sustained outstanding performance in advanced semester coursework. Demonstrated mastery in data science, machine learning, and advanced software development while contributing to research projects.',
      period: 'September 2023 - January 2024',
      subjects: ['Machine Learning', 'Data Mining', 'Advanced Database Systems', 'Software Project Management'],
      achievement: 'Top 8% of the cohort',
      type: 'academic'
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
      type: 'academic'
    },
    { 
      title: 'Google Data Analytics Professional Certificate', 
      org: 'Google Career Certificates via Coursera', 
      image: googleDataAnalytics, 
      color: 'from-blue-600 to-green-500',
      description: 'Completed comprehensive data analytics program covering data collection, cleaning, analysis, and visualization. Gained hands-on experience with industry-standard tools and techniques used by professional data analysts.',
      period: 'January 2024 - June 2024',
      level: 'Professional',
      skills: ['Data Analysis', 'SQL', 'Tableau', 'R Programming', 'Data Visualization', 'Statistical Analysis'],
      achievement: 'Professional Certification',
      type: 'professional'
    },
    { 
      title: 'Machine Learning Specialization', 
      org: 'Stanford University via Coursera', 
      image: courseraML, 
      color: 'from-indigo-600 to-blue-500',
      description: 'Completed advanced machine learning specialization covering supervised learning, unsupervised learning, and neural networks. Implemented algorithms from scratch and worked on real-world ML projects.',
      period: 'March 2024 - August 2024',
      level: 'Advanced',
      skills: ['Machine Learning', 'Python', 'TensorFlow', 'Neural Networks', 'Deep Learning', 'Algorithm Implementation'],
      achievement: 'Specialization Certificate',
      type: 'professional'
    },
    { 
      title: 'AWS Cloud Practitioner Essentials', 
      org: 'Amazon Web Services', 
      image: awsCloud, 
      color: 'from-orange-500 to-yellow-500',
      description: 'Gained foundational knowledge of AWS cloud services, architecture, security, and pricing. Learned to identify AWS services for common use cases and understand cloud computing benefits.',
      period: 'September 2024 - November 2024',
      level: 'Foundation',
      skills: ['Cloud Computing', 'AWS Services', 'Cloud Architecture', 'Security', 'Cost Management'],
      achievement: 'Foundation Certificate',
      type: 'professional'
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
          {/* Header Section */}
          <motion.div
            ref={ref}
            className="text-center mb-16"
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
                className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                whileHover={{ scaleX: 2 }}
              />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-black text-lg uppercase tracking-widest"
                whileHover={{ scale: 1.1 }}
              >
                About Me
              </motion.span>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <SparklesIcon className="w-6 h-6 text-yellow-400" />
              </motion.div>
              <motion.div
                className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                whileHover={{ scaleX: 2 }}
              />
            </motion.div>

            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
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

            <motion.p
              className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
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
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column - Profile & Stats */}
            <motion.div
              className="lg:col-span-4 space-y-8"
              initial={{ opacity: 0, x: -100, rotateY: 90 }}
              animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ duration: 1.2, type: "spring", delay: 0.3 }}
            >
              {/* Profile Image */}
              <motion.div
                className="relative"
                whileHover={{ y: -10, rotateZ: 2 }}
                whileTap={{ scale: 0.95 }}
                drag
                dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
                dragElastic={0.1}
              >
                <div className="relative aspect-[4/5] bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-pink-400/20 rounded-3xl shadow-2xl backdrop-blur-lg border border-white/20 overflow-hidden">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-[2px] rounded-3xl bg-gray-900 overflow-hidden">
                    <motion.img 
                      src={image}
                      alt="Profile"
                      className="w-full h-full object-cover"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      whileHover={{ scale: 1.1 }}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent" />
                    
                    <div className="absolute inset-0 flex items-end justify-center z-10 p-6">
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="text-center w-full"
                      >
                        <p className="text-cyan-300 font-bold text-xl mb-2 drop-shadow-lg">
                          Tech Innovator
                        </p>
                        <p className="text-gray-300 text-sm drop-shadow-md">
                          Drag me around! 
                        </p>
                      </motion.div>
                    </div>
                  </div>

                  {/* Floating Tech Badges */}
                  <motion.div
                    className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-xs shadow-lg z-20"
                    animate={{ 
                      y: [0, -15, 0],
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
                    className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg z-20"
                    animate={{ 
                      y: [0, 12, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      y: { duration: 4, repeat: Infinity, delay: 2 },
                      scale: { duration: 2, repeat: Infinity }
                    }}
                  >
                    DS
                  </motion.div>

                  <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-3xl blur-xl opacity-20 -z-10" />
                </div>
              </motion.div>

              {/* Stats Grid */}
              <motion.div
                className="grid grid-cols-2 gap-4"
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

              {/* Current Focus */}
              <motion.div
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-orange-400 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <FireIcon className="w-8 h-8 text-orange-400" />
                  </motion.div>
                  <h3 className="text-white font-bold text-lg">Currently Exploring</h3>
                </div>
                <p className="text-cyan-200 font-semibold">
                  AI Integration & Advanced Machine Learning
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Skills, Leadership, Certificates */}
            <motion.div
              className="lg:col-span-8 space-y-12"
              initial={{ opacity: 0, x: 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.5, type: "spring" }}
            >
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

              {/* Leadership Section */}
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

              {/* Leadership Section */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                <motion.h3
                  className="text-2xl font-black text-white flex items-center space-x-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    👑
                  </motion.div>
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    Leadership & Teaching Experience
                  </span>
                </motion.h3>

                <div className="space-y-6">
                  {/* First Row - Two Cards */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <motion.div
                      className="group relative overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-400 transition-all duration-300 h-full"
                      whileHover={{ scale: 1.02, y: -2 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1.7, duration: 0.6 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                      
                      <div className="flex flex-col h-full relative z-10">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <motion.div
                              className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0"
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              <span className="text-white font-bold text-lg">🎓</span>
                            </motion.div>
                            <div className="min-w-0 flex-1">
                              <h4 className="text-white font-bold text-lg leading-tight">AIU Somali Students President</h4>
                              <p className="text-yellow-300 font-semibold text-sm">Albukhary International University</p>
                            </div>
                          </div>
                          <div className="text-right flex-shrink-0 ml-4">
                            <span className="text-yellow-400 font-bold text-sm whitespace-nowrap">July 2025 - Present</span>
                            <div className="text-green-400 text-xs font-semibold">Current Position</div>
                          </div>
                        </div>

                        <p className="text-gray-300 leading-relaxed mb-4 flex-grow">
                          Leading and representing the Somali student community at AIU, organizing cultural events, 
                          academic support programs, and fostering integration between Somali students and the broader 
                          university community. Responsible for student welfare, advocacy, and community building initiatives.
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {['Student Advocacy', 'Event Management', 'Community Building', 'Cultural Integration', 'Academic Support'].map((skill, index) => (
                            <motion.span
                              key={skill}
                              className="px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 text-yellow-300 rounded-full text-sm font-medium"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={inView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ delay: 1.8 + index * 0.1 }}
                              whileHover={{ scale: 1.1, y: -2 }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="group relative overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-400 transition-all duration-300 h-full"
                      whileHover={{ scale: 1.02, y: -2 }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1.9, duration: 0.6 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                      
                      <div className="flex flex-col h-full relative z-10">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <motion.div
                              className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0"
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              <span className="text-white font-bold text-lg">🌍</span>
                            </motion.div>
                            <div className="min-w-0 flex-1">
                              <h4 className="text-white font-bold text-lg leading-tight">Director of International Relations</h4>
                              <p className="text-purple-300 font-semibold text-sm">African Students Association (AFSA)</p>
                            </div>
                          </div>
                          <div className="text-right flex-shrink-0 ml-4">
                            <span className="text-purple-400 font-bold text-sm whitespace-nowrap">December 2024 - Present</span>
                            <div className="text-green-400 text-xs font-semibold">Current Position</div>
                          </div>
                        </div>

                        <p className="text-gray-300 leading-relaxed mb-4 flex-grow">
                          Managing international relations and partnerships for the African Students Association, coordinating 
                          cross-cultural programs, and promoting African heritage and diversity. Leading strategic initiatives 
                          for international student engagement, diplomatic relations, and global networking opportunities.
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {['International Relations', 'Diplomatic Coordination', 'Cross-Cultural Programs', 'Strategic Partnerships', 'Global Networking'].map((skill, index) => (
                            <motion.span
                              key={skill}
                              className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-300 rounded-full text-sm font-medium"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={inView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ delay: 2.0 + index * 0.1 }}
                              whileHover={{ scale: 1.1, y: -2 }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Second Row - Single Card Centered */}
                  <div className="flex justify-center">
                    <motion.div
                      className="group relative overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-400 transition-all duration-300 w-full max-w-2xl"
                      whileHover={{ scale: 1.02, y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 2.1, duration: 0.6 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                      
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <motion.div
                              className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0"
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              <span className="text-white font-bold text-lg">👨‍🏫</span>
                            </motion.div>
                            <div className="min-w-0 flex-1">
                              <h4 className="text-white font-bold text-lg leading-tight">Java Programming Instructor</h4>
                              <p className="text-blue-300 font-semibold text-sm">Online Teaching Platform</p>
                            </div>
                          </div>
                          <div className="text-right flex-shrink-0 ml-4">
                            <span className="text-blue-400 font-bold text-sm whitespace-nowrap">2 Months (Part-time)</span>
                            <div className="text-cyan-400 text-xs font-semibold">2x per week</div>
                          </div>
                        </div>

                        <p className="text-gray-300 leading-relaxed mb-4">
                          Delivered comprehensive Java programming instruction through online lectures, covering fundamental 
                          concepts to advanced Object-Oriented Programming (OOP) principles. Taught Java syntax, data structures, 
                          classes, objects, inheritance, polymorphism, and best coding practices to aspiring developers.
                        </p>

                        <div className="flex flex-wrap gap-2 justify-center">
                          {['Java Fundamentals', 'Object-Oriented Programming', 'Online Teaching', 'Curriculum Development', 'Student Mentoring'].map((skill, index) => (
                            <motion.span
                              key={skill}
                              className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 text-blue-300 rounded-full text-sm font-medium"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={inView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ delay: 2.2 + index * 0.1 }}
                              whileHover={{ scale: 1.1, y: -2 }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
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
            <span>🚀</span>
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
                      
                      <div className="space-y-4">
                        <motion.div
                          className="p-4 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 rounded-xl border border-cyan-400/20"
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
                            <div className="text-cyan-400 text-sm font-semibold mb-1">Period</div>
                            <div className="text-white font-bold">{selectedCert.period || 'Academic Year'}</div>
                          </motion.div>
                          
                          <motion.div
                            className="p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-white/10 text-center"
                            whileHover={{ scale: 1.05, y: -3 }}
                          >
                            <div className="text-cyan-400 text-sm font-semibold mb-1">Achievement</div>
                            <div className="text-white font-bold">{selectedCert.achievement || 'Excellence'}</div>
                          </motion.div>

                          {selectedCert.level && (
                            <motion.div
                              className="p-4 bg-gradient-to-br from-green-800/30 to-emerald-800/30 rounded-xl border border-green-400/20 text-center"
                              whileHover={{ scale: 1.05, y: -3 }}
                            >
                              <div className="text-green-400 text-sm font-semibold mb-1">Proficiency Level</div>
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
                                  className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-cyan-300 rounded-full text-sm font-medium"
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
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-xl font-bold text-center flex items-center justify-center space-x-2"
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: '0 0 30px rgba(34, 211, 238, 0.5)'
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>📄</span>
                        <span>View Certificate</span>
                      </motion.button>
                      
                      <motion.button
                        className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-bold text-center flex items-center justify-center space-x-2"
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)'
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

export default About;