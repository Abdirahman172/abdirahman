import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  PaperAirplaneIcon,
  RocketLaunchIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      label: 'Email',
      value: 'abdirihmanibrahim242@.com',
      href: 'mailto:abdirihmanibrahim242@.com',
      emoji: '',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: PhoneIcon,
      label: 'Phone',
      value: '+60 1113084010',
      href: 'tel:+601113084010',
      emoji: '',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: MapPinIcon,
      label: 'Location',
      value: 'Alor setar, Malaysia',
      href: '#',
      emoji: '📍',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: '', href: 'https://www.linkedin.com/in/abdirahman-ibrahim-osman-391448333/', color: 'from-blue-500 to-cyan-500' },
    { name: 'GitHub', icon: '', href: 'https://github.com/Abdirahman172', color: 'from-gray-700 to-gray-900' },
    //{ name: 'Twitter', icon: '🐦', href: '#', color: 'from-sky-400 to-blue-500' },
    //{ name: 'Instagram', icon: '🌈', href: '#', color: 'from-pink-500 to-purple-500' },
  ];

  // Floating particles for background
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 8 + 4,
  }));

  return (
    <section id="contact" className="relative min-h-screen section-padding bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 overflow-hidden">
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
              Let's Connect
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
            Let's Build{' '}
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
              Together
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
            I'm always interested in new opportunities and collaborations. 
            Whether you have a project in mind or just want to connect, I'd love to hear from you.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          >
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 transition-all duration-500 overflow-hidden">
              {/* Form Header */}
              <motion.div
                className="flex items-center space-x-3 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <ChatBubbleLeftRightIcon className="w-8 h-8 text-cyan-400" />
                </motion.div>
                <motion.h3
                  className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  Send a Message
                </motion.h3>
              </motion.div>
              
              {/* Pure HTML Form with Action */}
              <form 
                action="https://submit-form.com/0Bb9O0KME" 
                method="POST"
                className="space-y-6"
              >
                {/* Name Input */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  <label htmlFor="name" className="block text-sm font-semibold text-cyan-300 mb-3">
                    Your Name
                  </label>
                  <div className="relative group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-4 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 group-hover:border-cyan-300"
                      placeholder="Enter your name"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                      whileHover={{ scale: 1.02 }}
                    />
                  </div>
                </motion.div>

                {/* Email Input */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <label htmlFor="email" className="block text-sm font-semibold text-cyan-300 mb-3">
                    Email Address
                  </label>
                  <div className="relative group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-4 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 group-hover:border-cyan-300"
                      placeholder="Enter your email"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                      whileHover={{ scale: 1.02 }}
                    />
                  </div>
                </motion.div>

                {/* Message Input */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 }}
                >
                  <label htmlFor="message" className="block text-sm font-semibold text-cyan-300 mb-3">
                    Your Message
                  </label>
                  <div className="relative group">
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-4 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none group-hover:border-cyan-300"
                      placeholder="Tell me about your project or just say hello! 👋"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-pink-400/10 to-purple-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                      whileHover={{ scale: 1.02 }}
                    />
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-4 px-6 rounded-2xl font-black shadow-2xl group transition-all duration-500"
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    boxShadow: '0 20px 40px rgba(34, 211, 238, 0.4)'
                  }}
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
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  
                  <div className="flex items-center justify-center space-x-3 relative z-10">
                    <PaperAirplaneIcon className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    <span>Launch Message! 🚀</span>
                    <SparklesIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          >
            {/* Contact Information */}
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 transition-all duration-500 overflow-hidden">
              <motion.h3
                className="text-2xl font-black text-white mb-8 flex items-center space-x-3"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <EnvelopeIcon className="w-7 h-7 text-cyan-400" />
                </motion.div>
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Contact Information
                </span>
              </motion.h3>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="group relative overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-cyan-400 transition-all duration-500 flex items-center space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`} />
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    
                    <motion.div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.emoji}
                    </motion.div>
                    <div>
                      <p className="font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                        {item.label}
                      </p>
                      <p className="text-cyan-200">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 transition-all duration-500 overflow-hidden">
              <motion.h3
                className="text-2xl font-black text-white mb-8 flex items-center space-x-3"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <SparklesIcon className="w-7 h-7 text-yellow-400" />
                </motion.div>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Follow My Journey
                </span>
              </motion.h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="group relative overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-cyan-400 transition-all duration-500 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`} />
                    
                    <motion.div
                      className="text-3xl mb-2"
                      whileHover={{ scale: 1.5, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {social.icon}
                    </motion.div>
                    <motion.span
                      className="font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      {social.name}
                    </motion.span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* CV Download */}
            <motion.div
              className="relative backdrop-blur-sm bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border border-white/10 rounded-3xl p-8 text-center overflow-hidden group hover:border-cyan-400 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.4, duration: 0.6, type: "spring" }}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
              
              <motion.h3
                className="text-2xl font-black text-white mb-4"
                whileHover={{ scale: 1.05 }}
              >
                Download My{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
                  Epic CV
                </span>
              </motion.h3>
              
              <motion.p
                className="text-cyan-100 mb-6 leading-relaxed"
                whileHover={{ x: 5 }}
              >
                Get a detailed overview of my experience, superpowers, and galactic achievements! 🌟
              </motion.p>
              
              <motion.button
                className="relative overflow-hidden bg-white text-gray-900 px-8 py-4 rounded-2xl font-black shadow-2xl group"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: '0 0 40px rgba(255, 255, 255, 0.8)'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => alert('CV download functionality will be implemented with actual PDF file')}
                animate={{ 
                  y: [0, -3, 0],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <div className="flex items-center space-x-3 relative z-10">
                  <RocketLaunchIcon className="w-5 h-5" />
                  <span>Download CV (PDF)</span>
                  <SparklesIcon className="w-5 h-5" />
                </div>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Contact Elements */}
      <motion.div
        className="fixed bottom-8 right-8 z-50 flex flex-col space-y-4"
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 2, type: "spring" }}
      >
        {/* WhatsApp Quick Contact */}
        <motion.a
          href="https://wa.me/60123456789"
          className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-2xl shadow-2xl flex items-center space-x-2"
          whileHover={{ 
            scale: 1.1,
            boxShadow: '0 0 30px rgba(34, 197, 94, 0.8)'
          }}
          whileTap={{ scale: 0.9 }}
          animate={{ 
            y: [0, -5, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <span className="text-xl">💬</span>
          <span className="font-bold">Quick Chat</span>
        </motion.a>

        {/* Email Quick Contact */}
        <motion.a
          href="mailto:abdirahman@example.com"
          className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-4 rounded-2xl shadow-2xl flex items-center space-x-2"
          whileHover={{ 
            scale: 1.1,
            boxShadow: '0 0 30px rgba(34, 211, 238, 0.8)'
          }}
          whileTap={{ scale: 0.9 }}
          animate={{ 
            y: [0, -5, 0],
            rotate: [0, -5, 5, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        >
          <span className="text-xl">📧</span>
          <span className="font-bold">Quick Email</span>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Contact;