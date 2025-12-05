import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', icon: '', href: '' },
    { name: 'GitHub', icon: '', href: '#' },
    //{ name: 'Twitter', icon: '🔥', href: '#' },
    { name: 'Email', icon: '', href: 'mailto:abdirahman@example.com' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Floating particles for background
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 8 + 4,
  }));

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 overflow-hidden">
      {/* Animated Background Elements */}
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
              x: [0, 30, 0],
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
          className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="container-max relative z-10">
        {/* Main Footer Content */}
        <motion.div
          className="py-16 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand Section */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="text-4xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  
                </motion.div>
                <div>
                  <motion.h3
                    className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.02 }}
                  >
                    Abdirahman Ibrahim Osman
                  </motion.h3>
                  <motion.p
                    className="text-cyan-300 font-semibold text-sm"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Data Science & Web Development
                  </motion.p>
                </div>
              </motion.div>
              
              <motion.p
                className="text-gray-200 leading-relaxed text-lg backdrop-blur-sm bg-white/5 rounded-2xl p-4 border border-white/10"
                whileHover={{ 
                  scale: 1.01,
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderColor: 'rgba(34, 211, 238, 0.3)'
                }}
              >
                Computer Science student passionate about creating innovative solutions 
                through technology, data science, and web development.
              </motion.p>

              {/* Tech Stack */}
              <motion.div
                className="pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-cyan-300 font-semibold mb-3">⚡ Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Python', 'ML', 'AI', 'Node.js', 'TensorFlow'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-cyan-200 text-sm font-medium"
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: 'rgba(192, 132, 252, 0.3)'
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h4
                className="text-xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                 Quick Links
              </motion.h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Home', emoji: '' },
                  { name: 'About', emoji: '' },
                  { name: 'Skills', emoji: '' },
                  { name: 'Projects', emoji: '' },
                  { name: 'Contact', emoji: '' },
                  { name: 'Download CV', emoji: '' }
                ].map((link, index) => (
                  <motion.button
                    key={link.name}
                    onClick={() => link.name === 'Download CV' 
                      ? alert('CV download functionality will be implemented') 
                      : scrollToSection(link.name.toLowerCase())
                    }
                    className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-left hover:border-cyan-400 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.05,
                      y: -2,
                      backgroundColor: 'rgba(34, 211, 238, 0.1)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    <div className="flex items-center space-x-2 relative z-10">
                      <motion.span
                        className="text-lg"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {link.emoji}
                      </motion.span>
                      <span className="text-gray-200 font-medium group-hover:text-cyan-300 transition-colors duration-300">
                        {link.name}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Contact & Social */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.h4
                className="text-xl font-black bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                Connect With Me
              </motion.h4>
              
              {/* Contact Info */}
              <motion.div
                className="space-y-3 backdrop-blur-sm bg-white/5 rounded-2xl p-4 border border-white/10"
                whileHover={{ scale: 1.02 }}
              >
                {[
                  { icon: '📧', text: 'abdirihmanibrahim242@gmail.com' },
                  { icon: '📍', text: 'Alor seter, Malaysia' },
                  { icon: '🎓', text: 'Albukhary International University' }
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    className="flex items-center space-x-3 group"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <motion.span
                      className="text-xl"
                      whileHover={{ scale: 1.5, rotate: 10 }}
                    >
                      {item.icon}
                    </motion.span>
                    <span className="text-gray-200 group-hover:text-cyan-300 transition-colors duration-300">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Social Links */}
              <div className="pt-4">
                <p className="text-cyan-300 font-semibold mb-4">Follow My Journey</p>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className="group relative overflow-hidden bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center hover:border-cyan-400 transition-all duration-300"
                      whileHover={{ 
                        scale: 1.1,
                        y: -3,
                        backgroundColor: 'rgba(34, 211, 238, 0.2)'
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                      <motion.div
                        className="text-2xl mb-1 relative z-10"
                        whileHover={{ 
                          scale: 1.5,
                          rotate: [0, -10, 10, 0]
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {social.icon}
                      </motion.div>
                      <span className="text-gray-200 text-sm font-medium relative z-10 group-hover:text-cyan-300 transition-colors duration-300">
                        {social.name}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Animated Border */}
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <motion.div
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.02 }}
            >
              <motion.p
                className="text-gray-300 text-sm font-medium backdrop-blur-sm bg-white/5 rounded-full px-4 py-2 border border-white/10"
                animate={{ 
                  background: [
                    'rgba(255,255,255,0.05)',
                    'rgba(34, 211, 238, 0.1)',
                    'rgba(255,255,255,0.05)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                © {currentYear} Abdirahman Ibrahim Osman. All rights reserved.
              </motion.p>
            </motion.div>
            
            <div className="flex items-center space-x-6">
              <motion.span
                className="text-gray-300 text-sm font-medium flex items-center space-x-2 backdrop-blur-sm bg-white/5 rounded-full px-4 py-2 border border-white/10"
                whileHover={{ scale: 1.05 }}
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  
                </motion.span>
                <span>Made with passion using React & Tailwind</span>
              </motion.span>
              
              <motion.button
                onClick={scrollToTop}
                className="relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-600 text-white p-3 rounded-full shadow-2xl"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  boxShadow: '0 0 30px rgba(34, 211, 238, 0.8)'
                }}
                whileTap={{ scale: 0.9 }}
                title="Back to top"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000" />
                <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating CTA */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <motion.button
          onClick={() => scrollToSection('contact')}
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-full font-bold shadow-2xl flex items-center space-x-2"
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
          <span>Let's Talk!</span>
        </motion.button>
      </motion.div>
    </footer>
  );
};

export default Footer;