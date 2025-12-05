import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { XMarkIcon, ArrowTopRightOnSquareIcon, CodeBracketIcon, RocketLaunchIcon, SparklesIcon, EyeIcon } from '@heroicons/react/24/outline';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AIU Somali Students Hub',
      description: 'A comprehensive platform connecting Somali students at Albukhary International University',
      shortDesc: 'Student networking platform with real-time chat and resource sharing',
      techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Express'],
      image: 'project-1',
      category: 'web',
      features: [
        'Real-time messaging and chat rooms',
        'Resource sharing and study groups',
        'Event management and notifications',
        'Student directory and networking',
        'Academic support and mentorship matching'
      ],
      challenges: 'Building a scalable real-time communication system while ensuring data privacy',
      outcome: 'Successfully connected 200+ students with 95% user satisfaction rate',
      github: '#',
      live: '#',
      emoji: ''
    },
    {
      id: 2,
      title: 'Zero Hunger Platform',
      description: 'Web application addressing food security and sustainable agriculture goals',
      shortDesc: 'Platform for food waste reduction and hunger relief coordination',
      techStack: ['Python', 'Django', 'PostgreSQL', 'Bootstrap', 'Redis'],
      image: 'project-2',
      category: 'web',
      features: [
        'Food donation tracking system',
        'Volunteer management and coordination',
        'Impact analytics and reporting',
        'Mobile-responsive interface',
        'Integration with local food banks'
      ],
      challenges: 'Coordinating multiple stakeholders and ensuring food safety compliance',
      outcome: 'Helped redistribute 10,000+ meals and reduced food waste by 30%',
      github: '#',
      live: '#',
      emoji: ''
    },
    {
      id: 3,
      title: 'Car Rental Management System',
      description: 'Complete management system for car rental operations with booking and inventory tracking',
      shortDesc: 'Full-featured car rental management with automated booking',
      techStack: ['Java', 'MySQL', 'JavaFX', 'Maven', 'Spring'],
      image: 'project-3',
      category: 'desktop',
      features: [
        'Vehicle inventory management',
        'Customer booking system',
        'Payment processing integration',
        'Maintenance scheduling',
        'Reporting and analytics dashboard'
      ],
      challenges: 'Managing complex booking conflicts and vehicle availability states',
      outcome: 'Increased operational efficiency by 40% and reduced booking errors',
      github: '#',
      live: '#',
      emoji: ''
    },
    {
      id: 4,
      title: 'Market Basket Analysis',
      description: 'Machine learning project analyzing customer purchasing patterns for retail insights',
      shortDesc: 'ML-powered customer behavior analysis for retail optimization',
      techStack: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
      image: 'project-4',
      category: 'data',
      features: [
        'Association rule mining',
        'Customer segmentation analysis',
        'Purchase pattern visualization',
        'Recommendation system',
        'Interactive data exploration tools'
      ],
      challenges: 'Processing large datasets efficiently while maintaining accuracy',
      outcome: 'Identified key product associations leading to 15% increase in cross-sales',
      github: '#',
      live: '#',
      emoji: ''
    },
    {
      id: 5,
      title: 'AI-Powered Chat Assistant',
      description: 'Intelligent chatbot using natural language processing for customer support',
      shortDesc: 'NLP-powered virtual assistant with contextual understanding',
      techStack: ['Python', 'TensorFlow', 'NLTK', 'FastAPI', 'React'],
      image: 'project-5',
      category: 'ai',
      features: [
        'Natural language understanding',
        'Contextual conversation memory',
        'Multi-language support',
        'Sentiment analysis',
        'Integration with knowledge base'
      ],
      challenges: 'Training accurate NLP models with limited domain-specific data',
      outcome: 'Reduced customer support response time by 85% and improved satisfaction',
      github: '#',
      live: '#',
      emoji: ''
    },
    {
      id: 6,
      title: 'Blockchain Voting System',
      description: 'Secure and transparent digital voting platform using blockchain technology',
      shortDesc: 'Decentralized voting system with enhanced security and transparency',
      techStack: ['Solidity', 'Web3.js', 'React', 'Node.js', 'Ethereum'],
      image: 'project-6',
      category: 'web3',
      features: [
        'Immutable vote recording',
        'Real-time results tracking',
        'Voter identity verification',
        'Smart contract automation',
        'Transparent audit trail'
      ],
      challenges: 'Ensuring security while maintaining user-friendly experience',
      outcome: 'Successfully deployed for university elections with 100% audit accuracy',
      github: '#',
      live: '#',
      emoji: ''
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects', emoji: '' },
    { id: 'web', name: 'Web Dev', emoji: '' },
    { id: 'data', name: 'Data Science', emoji: '' },
    { id: 'ai', name: 'AI/ML', emoji: '' },
    { id: 'web3', name: 'Web3', emoji: '' },
    { id: 'desktop', name: 'Desktop', emoji: '' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Floating particles for background
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 8 + 4,
  }));

  return (
    <section id="projects" className="relative min-h-screen section-padding bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 overflow-hidden">
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
              Epic Creations
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
            Featured{' '}
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
              Projects
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
            A showcase of my recent work in web development, data science, AI, and software engineering. 
            Each project represents a unique challenge and innovative solution.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`group relative overflow-hidden px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                filter === category.id
                  ? 'text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Active background */}
              {filter === category.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 border border-cyan-400/50 rounded-2xl"
                  layoutId="activeFilter"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              {/* Hover background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              />

              <div className="flex items-center space-x-2 relative z-10">
                <motion.span
                  className="text-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {category.emoji}
                </motion.span>
                <span>{category.name}</span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
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
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Project Card */}
              <div
                className="relative overflow-hidden rounded-3xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-cyan-400 transition-all duration-500"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image/Emoji Header */}
                <div className="relative aspect-video bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div
                      className="text-6xl"
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ duration: 5, repeat: Infinity }}
                    >
                      {project.emoji}
                    </motion.div>
                  </motion.div>
                  
                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 to-purple-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.div
                      className="text-center text-white"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                    >
                      <EyeIcon className="w-12 h-12 mx-auto mb-2" />
                      <p className="font-bold text-lg">View Details</p>
                    </motion.div>
                  </motion.div>

                  {/* Category Badge */}
                  <motion.div
                    className="absolute top-4 left-4 px-3 py-1 backdrop-blur-sm bg-black/50 rounded-full text-white text-sm font-semibold"
                    whileHover={{ scale: 1.1 }}
                  >
                    {categories.find(cat => cat.id === project.category)?.name}
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <motion.h3
                    className="text-xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p
                    className="text-gray-300 mb-4 leading-relaxed"
                    whileHover={{ x: 5 }}
                  >
                    {project.shortDesc}
                  </motion.p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 backdrop-blur-sm bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-sm rounded-full font-medium hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + techIndex * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <motion.div
                    className="flex items-center justify-between pt-4 border-t border-white/10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.button
                      className="text-cyan-400 font-semibold flex items-center space-x-2 hover:space-x-3 transition-all duration-300 group"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span>Explore</span>
                      <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                    </motion.button>
                    
                    <div className="flex items-center space-x-3">
                      <motion.a
                        href={project.github}
                        className="p-2 backdrop-blur-sm bg-white/5 rounded-lg hover:bg-cyan-500/20 transition-colors duration-300"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <CodeBracketIcon className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        className="p-2 backdrop-blur-sm bg-white/5 rounded-lg hover:bg-purple-500/20 transition-colors duration-300"
                        whileHover={{ scale: 1.2, rotate: -360 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <RocketLaunchIcon className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-3xl blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10" />
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
            Like what you see? Let's build something amazing together! 
          </motion.p>
          <motion.button
            onClick={() => {
              const element = document.querySelector('#contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-black shadow-2xl flex items-center space-x-3 mx-auto group"
            whileHover={{ 
              scale: 1.1,
              boxShadow: '0 0 40px rgba(34, 211, 238, 0.8)'
            }}
            whileTap={{ scale: 0.95 }}
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
            <span></span>
            <span>Start a Project</span>
            <span></span>
          </motion.button>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.4, type: "spring" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative p-8 border-b border-white/10">
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-3 backdrop-blur-sm bg-white/10 rounded-2xl hover:bg-red-500/20 transition-colors duration-300 group"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <XMarkIcon className="w-6 h-6 text-white group-hover:text-red-400" />
                </motion.button>
                
                <div className="pr-16">
                  <div className="flex items-center space-x-3 mb-4">
                    <motion.span
                      className="text-3xl"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 5, repeat: Infinity }}
                    >
                      {selectedProject.emoji}
                    </motion.span>
                    <motion.h3
                      className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {selectedProject.title}
                    </motion.h3>
                  </div>
                  <motion.p
                    className="text-gray-200 text-lg leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {selectedProject.description}
                  </motion.p>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 space-y-8">
                {/* Tech Stack */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h4 className="font-black text-white text-xl mb-4 flex items-center space-x-2">
                    <CodeBracketIcon className="w-6 h-6 text-cyan-400" />
                    <span>Technologies Used</span>
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.techStack.map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-cyan-300 rounded-xl font-semibold"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h4 className="font-black text-white text-xl mb-4 flex items-center space-x-2">
                    <SparklesIcon className="w-6 h-6 text-yellow-400" />
                    <span>Key Features</span>
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedProject.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-3 p-3 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 hover:border-cyan-400 transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                      >
                        <motion.div
                          className="w-2 h-2 bg-cyan-400 rounded-full mt-2"
                          whileHover={{ scale: 1.5 }}
                        />
                        <span className="text-gray-200">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Challenges & Outcome */}
                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <h4 className="font-black text-white text-xl mb-4">Challenges & Solutions</h4>
                    <p className="text-gray-200 leading-relaxed backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                      {selectedProject.challenges}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <h4 className="font-black text-white text-xl mb-4">Results & Impact</h4>
                    <p className="text-gray-200 leading-relaxed backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                      {selectedProject.outcome}
                    </p>
                  </motion.div>
                </div>

                {/* Action Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <motion.a
                    href={selectedProject.github}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-4 rounded-2xl font-bold text-center group"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <CodeBracketIcon className="w-5 h-5" />
                      <span>View Code</span>
                    </div>
                  </motion.a>
                  <motion.a
                    href={selectedProject.live}
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-4 rounded-2xl font-bold text-center group"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <RocketLaunchIcon className="w-5 h-5" />
                      <span>Live Demo</span>
                    </div>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;