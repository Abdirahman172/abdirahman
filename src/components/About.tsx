import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AcademicCapIcon, CodeBracketIcon, ChartBarIcon, RocketLaunchIcon, SparklesIcon, FireIcon } from '@heroicons/react/24/outline';
import image from '../images/abdi.jpg';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'Web Development', level: 90, icon: '' },
    { name: 'Data Analysis', level: 85, icon: '' },
    { name: 'Machine Learning', level: 80, icon: '' },
    { name: 'Data Visualization', level: 85, icon: '' },
    { name: 'Database Design', level: 75, icon: '' },
    { name: 'AI Integration', level: 70, icon: '' }
  ];

  const certificates = [
    { title: 'AI Specialist', org: 'Google Cloud', image: 'cert-1', color: 'from-blue-500 to-cyan-400' },
    { title: 'Data Science Pro', org: 'IBM', image: 'cert-2', color: 'from-purple-500 to-pink-400' },
    { title: 'ML Engineer', org: 'Microsoft', image: 'cert-3', color: 'from-green-500 to-emerald-400' },
  ];

  const stats = [
    { number: '20+', label: 'Projects Completed', icon: '' },
    { number: '3+', label: 'Years Learning', icon: '' },
    { number: '10+', label: 'Technologies', icon: '' },
    { number: '100%', label: 'Passionate', icon: '' }
  ];

  return (
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
                  Epic Certifications
                </span>
              </motion.h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {certificates.map((cert, index) => (
                  <motion.div
                    key={cert.image}
                    className="group relative cursor-pointer"
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ delay: 1.9 + index * 0.2, type: "spring" }}
                    whileHover={{ scale: 1.1, y: -10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} rounded-2xl blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                    <div className="relative backdrop-blur-sm bg-gray-900/80 border border-white/10 rounded-2xl p-4 group-hover:border-white/30 transition-all duration-300 overflow-hidden">
                      <div className="aspect-video bg-gradient-to-br from-white/5 to-white/10 rounded-xl mb-4 flex items-center justify-center group-hover:from-white/10 group-hover:to-white/20 transition-colors duration-300">
                        <motion.div
                          className="text-center"
                          whileHover={{ scale: 1.2 }}
                        >
                          <RocketLaunchIcon className="w-12 h-12 text-white/60 group-hover:text-white mx-auto mb-2 transition-colors duration-300" />
                          <p className="text-xs text-white/50">Epic Certificate</p>
                        </motion.div>
                      </div>
                      <motion.h4
                        className="font-black text-white text-lg mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        {cert.title}
                      </motion.h4>
                      <p className="text-cyan-300 font-semibold text-sm">{cert.org}</p>
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
  );
};

export default About;