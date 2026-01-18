import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CodeBracketIcon, CpuChipIcon, RocketLaunchIcon, SparklesIcon } from '@heroicons/react/24/outline';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technicalSkills = [
    { name: 'Web Development', icon: '🌐', level: 90, description: 'Full-stack web applications' },
    { name: 'Data Analysis', icon: '📊', level: 85, description: 'Insights from complex datasets' },
    { name: 'Data Visualization', icon: '📈', level: 80, description: 'Beautiful data stories' },
    { name: 'Database Design', icon: '', level: 85, description: 'Scalable data architecture' },
    { name: 'Machine Learning', icon: '', level: 75, description: 'AI-powered solutions' },
    { name: 'API Development', icon: '🔗', level: 80, description: 'REST & GraphQL APIs' },
  ];

  const languages = [
    { name: 'HTML', icon: '', color: 'from-orange-500 to-red-500', level: 95 },
    { name: 'CSS', icon: '', color: 'from-blue-500 to-cyan-500', level: 90 },
    { name: 'JavaScript', icon: '', color: 'from-yellow-500 to-amber-500', level: 88 },
    { name: 'Python', icon: '', color: 'from-green-500 to-emerald-500', level: 85 },
    { name: 'Java', icon: '', color: 'from-red-500 to-pink-500', level: 80 },
    { name: 'C', icon: '', color: 'from-gray-600 to-gray-800', level: 75 },
    { name: 'MySQL', icon: '', color: 'from-blue-600 to-indigo-600', level: 85 },
    { name: 'SQL', icon: '', color: 'from-indigo-500 to-purple-500', level: 90 },
  ];

  const tools = [
    { name: 'React', icon: '', category: 'Frontend' },
    { name: 'PHP', icon: '', category: 'Backend' },
    //{ name: 'MongoDB', icon: '🍃', category: 'Database' },
    { name: 'TensorFlow', icon: '', category: 'AI/ML' },
    { name: 'Git', icon: '', category: 'Version Control' },
    //{ name: 'Docker', icon: '', category: 'DevOps' },
    //{ name: 'Figma', icon: '', category: 'Design' },
    { name: 'VS Code', icon: '', category: 'Editor' },
  ];

  // Floating particles for background
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 8 + 4,
  }));

  return (
    <section id="skills" className="relative min-h-screen section-padding bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-pink-400"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              repeatType: "reverse",
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
              className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
              whileHover={{ scaleX: 2 }}
            />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-black text-lg uppercase tracking-widest"
              whileHover={{ scale: 1.1 }}
            >
              Superpowers
            </motion.span>
            <motion.div
              className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
              whileHover={{ scaleX: 2 }}
            />
          </motion.div>
          
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Skills &{' '}
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
              Technologies
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
              borderColor: 'rgba(34, 211, 238, 0.3)'
            }}
          >
            A comprehensive overview of my technical arsenal and proficiency levels 
            in various programming languages, frameworks, and cutting-edge technologies.
          </motion.p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          className="mb-20"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <motion.h3
            className="text-3xl font-black text-white mb-12 text-center flex items-center justify-center space-x-3"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <CpuChipIcon className="w-8 h-8 text-cyan-400" />
            </motion.div>
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Core Superpowers
            </span>
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="group relative cursor-pointer"
                variants={{
                  hidden: { y: 50, opacity: 0, scale: 0.8 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      type: "spring",
                    },
                  },
                }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition-all duration-500 overflow-hidden">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  
                  <div className="flex items-center space-x-4 mb-4 relative z-10">
                    <motion.div
                      className="text-3xl"
                      whileHover={{ scale: 1.5, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <div className="flex-1">
                      <motion.h4
                        className="font-bold text-white text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill.name}
                      </motion.h4>
                      <motion.p
                        className="text-cyan-300 text-sm"
                        whileHover={{ x: 5 }}
                      >
                        {skill.description}
                      </motion.p>
                    </div>
                    <motion.span
                      className="text-cyan-400 font-black text-xl"
                      whileHover={{ scale: 1.2 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  
                  {/* Animated Progress Bar */}
                  <div className="w-full backdrop-blur-sm bg-white/10 rounded-full h-3 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full" />
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full relative"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: 1 + index * 0.2, type: "spring" }}
                    >
                      {/* Progress glow */}
                      <div className="absolute inset-0 bg-cyan-400 rounded-full blur-sm opacity-50" />
                    </motion.div>
                  </div>

                  {/* Level indicator dots */}
                  <div className="flex justify-between mt-2">
                    {[0, 25, 50, 75, 100].map((point) => (
                      <div
                        key={point}
                        className={`w-2 h-2 rounded-full ${
                          skill.level >= point ? 'bg-cyan-400' : 'bg-white/20'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-2xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Languages & Frameworks */}
        <motion.div
          className="mb-20"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          <motion.h3
            className="text-3xl font-black text-white mb-12 text-center flex items-center justify-center space-x-3"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2 }}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <CodeBracketIcon className="w-8 h-8 text-yellow-400" />
            </motion.div>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Languages & Frameworks
            </span>
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                className="group relative cursor-pointer"
                variants={{
                  hidden: { y: 30, opacity: 0, scale: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.4,
                      type: "spring",
                    },
                  },
                }}
                whileHover={{ scale: 1.2, rotateY: 180 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="aspect-square backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-4 group-hover:border-cyan-400 transition-all duration-500 overflow-hidden text-center">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  
                  <motion.div
                    className="text-3xl mb-2 relative z-10"
                    whileHover={{ scale: 1.5, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {lang.icon}
                  </motion.div>
                  
                  <motion.h4
                    className="font-semibold text-white text-sm relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    {lang.name}
                  </motion.h4>
                  
                  {/* Animated level bar */}
                  <motion.div
                    className={`w-full h-1 bg-gradient-to-r ${lang.color} rounded-full mt-3 group-hover:h-2 transition-all duration-300 relative overflow-hidden`}
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ delay: 1.5 + index * 0.1, duration: 0.8 }}
                  >
                    <div className="absolute inset-0 bg-white/20 rounded-full" />
                  </motion.div>

                  {/* Level percentage */}
                  <motion.span
                    className="text-cyan-300 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  >
                    {lang.level}%
                  </motion.span>
                </div>

                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${lang.color} rounded-2xl blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10`} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          className="mb-20"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <motion.h3
            className="text-3xl font-black text-white mb-12 text-center flex items-center justify-center space-x-3"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.4 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <SparklesIcon className="w-8 h-8 text-pink-400" />
            </motion.div>
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Tools & Technologies
            </span>
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((tool) => (
              <motion.div
                key={tool.name}
                className="group relative cursor-pointer"
                variants={{
                  hidden: { y: 30, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                    },
                  },
                }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 text-center group-hover:border-cyan-400 transition-all duration-500 overflow-hidden">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  
                  <motion.div
                    className="text-4xl mb-3 relative z-10"
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {tool.icon}
                  </motion.div>
                  
                  <motion.h4
                    className="font-bold text-white text-lg mb-2 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tool.name}
                  </motion.h4>
                  
                  <motion.span
                    className="text-cyan-300 text-sm font-semibold relative z-10"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tool.category}
                  </motion.span>
                </div>

                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-2xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="relative backdrop-blur-sm bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl p-8 text-center border border-white/10 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6, type: "spring" }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
          
          <motion.h3
            className="text-3xl font-black text-white mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">Collaborate</span>?
          </motion.h3>
          
          <motion.p
            className="text-cyan-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
            whileHover={{ x: 5 }}
          >
            I'm always excited to work on challenging projects and learn new technologies. 
            Let's build something amazing together that will blow minds! 
          </motion.p>
          
          <motion.button
            className="relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-black shadow-2xl group"
            whileHover={{ 
              scale: 1.1,
              boxShadow: '0 0 40px rgba(34, 211, 238, 0.8)'
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            animate={{ 
              y: [0, -5, 0],
              boxShadow: [
                '0 10px 25px rgba(34, 211, 238, 0.4)',
                '0 15px 35px rgba(34, 211, 238, 0.6)',
                '0 10px 25px rgba(34, 211, 238, 0.4)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <div className="flex items-center space-x-3 relative z-10">
              <RocketLaunchIcon className="w-5 h-5" />
              <span>Start a Project</span>
              <SparklesIcon className="w-5 h-5" />
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;