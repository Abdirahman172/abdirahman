import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, SparklesIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home', emoji: '' },
    { name: 'About', href: '#about', emoji: '' },
    { name: 'Skills', href: '#skills', emoji: '' },
    { name: 'Projects', href: '#projects', emoji: '' },
    { name: 'Contact', href: '#contact', emoji: '' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  // Floating particles for navbar background
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'backdrop-blur-xl bg-gradient-to-r from-purple-900/80 via-blue-900/80 to-pink-900/80 shadow-2xl border-b border-white/10' 
          : 'backdrop-blur-md bg-gradient-to-r from-purple-900/40 via-blue-900/40 to-pink-900/40'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      {/* Animated Background Elements */}
      {isScrolled && (
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute top-0 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400"
              style={{
                left: `${particle.x}%`,
                width: 2,
                height: 2,
              }}
              animate={{
                y: [0, 60, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
              }}
            />
          ))}
        </div>
      )}

      <div className="container-max relative z-10">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Animated Logo */}
          <motion.div
            className="flex items-center space-x-3 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#home')}
          >
            <motion.div
              className="relative"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span className="text-3xl">🌟</span>
              <motion.div
                className="absolute -inset-2 bg-cyan-400 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                animate={{ rotate: [0, 180] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            <motion.div
              className="flex flex-col"
              whileHover={{ x: 5 }}
            >
              <motion.span
                className="font-black text-xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
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
              <motion.span
                className="text-cyan-300 text-xs font-semibold"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Tech Innovator
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-2 rounded-xl font-semibold transition-all duration-300 group ${
                    isActive 
                      ? 'text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Active indicator background */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-xl"
                      layoutId="activeNav"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  {/* Hover background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  />

                  <div className="flex items-center space-x-2 relative z-10">
                    <motion.span
                      className="text-lg"
                      animate={isActive ? { rotate: [0, 360] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {item.emoji}
                    </motion.span>
                    <span className="whitespace-nowrap">{item.name}</span>
                  </div>

                  {/* Active indicator dot */}
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 w-1 h-1 bg-cyan-400 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                    />
                  )}
                </motion.button>
              );
            })}

            {/* Special CTA Button */}
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="ml-4 relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-xl font-bold shadow-2xl group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                y: [0, -3, 0],
                boxShadow: [
                  '0 10px 25px rgba(34, 211, 238, 0.3)',
                  '0 15px 35px rgba(34, 211, 238, 0.5)',
                  '0 10px 25px rgba(34, 211, 238, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <div className="flex items-center space-x-2 relative z-10">
                <RocketLaunchIcon className="w-4 h-4" />
                <span>Hire Me!</span>
              </div>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative p-3 rounded-2xl backdrop-blur-sm bg-white/10 border border-white/20 hover:border-cyan-400 transition-all duration-300 group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            animate={isMobileMenuOpen ? { rotate: 180 } : { rotate: 0 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -180, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  exit={{ rotate: 180, scale: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <XMarkIcon className="h-6 w-6 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 180, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  exit={{ rotate: -180, scale: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Bars3Icon className="h-6 w-6 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 backdrop-blur-xl bg-gradient-to-b from-purple-900/90 via-blue-900/90 to-pink-900/90 border-t border-white/10 shadow-2xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, type: "spring" }}
          >
            {/* Mobile menu background particles */}
            <div className="absolute inset-0 overflow-hidden">
              {Array.from({ length: 12 }, (_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-pink-400"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: Math.random() * 3 + 1,
                    height: Math.random() * 3 + 1,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: Math.random() * 4 + 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 px-4 py-6 space-y-2">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`group relative w-full text-left px-4 py-4 rounded-2xl transition-all duration-300 overflow-hidden ${
                      isActive 
                        ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30' 
                        : 'bg-white/5 border border-white/10 hover:border-cyan-400'
                    }`}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    
                    <div className="flex items-center space-x-3 relative z-10">
                      <motion.span
                        className="text-2xl"
                        whileHover={{ scale: 1.5, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {item.emoji}
                      </motion.span>
                      <span className={`text-lg font-semibold ${
                        isActive 
                          ? 'bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent' 
                          : 'text-white'
                      }`}>
                        {item.name}
                      </span>
                      
                      {isActive && (
                        <motion.div
                          className="ml-auto"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500 }}
                        >
                          <SparklesIcon className="w-5 h-5 text-yellow-400" />
                        </motion.div>
                      )}
                    </div>
                  </motion.button>
                );
              })}

              {/* Mobile CTA Button */}
              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="w-full relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-4 rounded-2xl font-bold shadow-2xl group mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <div className="flex items-center justify-center space-x-2 relative z-10">
                  <RocketLaunchIcon className="w-5 h-5" />
                  <span className="text-lg">Let's Work Together! </span>
                </div>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Indicator */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
        style={{
          width: `${((navItems.findIndex(item => item.href.substring(1) === activeSection) + 1) / navItems.length) * 100}%`
        }}
        transition={{ duration: 0.5, type: "spring" }}
      />
    </motion.nav>
  );
};

export default Navigation;