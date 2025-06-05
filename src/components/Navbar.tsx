import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Anchor, 
  Sparkles,
  Crown,
  Diamond,
  Star,
  ArrowRight,
  Instagram,
  Twitter,
  Linkedin,
  Facebook
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const { scrollYProgress } = useScroll();
  const navOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Prevent body scroll when mobile menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Simple navigation items
  const navigation = [
    { name: 'Home', href: '/', icon: <Crown className="w-5 h-5" /> },
    { name: 'Shipyards', href: '/collection', icon: <Anchor className="w-5 h-5" /> },
    { name: 'Rental', href: '/rental', icon: <Diamond className="w-5 h-5" /> },
    { name: 'About', href: '/about', icon: <Star className="w-5 h-5" /> },
    { name: 'Contact', href: '/contact', icon: <Sparkles className="w-5 h-5" /> }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const luxuryMobileMenuVariants = {
    hidden: {
      opacity: 0,
      x: '100%',
      scale: 0.95,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const luxuryItemVariants = {
    hidden: { 
      opacity: 0, 
      x: 50,
      y: 20,
      scale: 0.8,
      rotateY: 45
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  const overlayVariants = {
    hidden: { 
      opacity: 0,
      backdropFilter: "blur(0px)"
    },
    visible: { 
      opacity: 1,
      backdropFilter: "blur(20px)",
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.nav
      data-navbar
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-xl shadow-black/5 border-b border-gray-200/50' 
          : 'bg-transparent'
      }`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ opacity: navOpacity }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <motion.div variants={itemVariants} className="flex items-center">
            <Link to="/" className="flex items-center space-x-4 group">
              {/* Desktop logo and text */}
              <div className="hidden sm:flex items-center space-x-3">
                <motion.div
                  className={`p-3 rounded-2xl transition-all duration-500 ${
                    scrolled 
                      ? 'bg-gradient-to-br from-navy-900/95 to-navy-800/95 shadow-xl border border-navy-700/50' 
                      : 'bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20'
                  }`}
                  whileHover={{ 
                    scale: 1.05,
                    rotate: [0, -1, 1, 0],
                    transition: { duration: 0.6 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img 
                    src="/logoclass1.png" 
                    alt="Class Yachts Logo" 
                    className="h-10 w-auto object-contain"
                    style={{
                      filter: scrolled ? 'brightness(1.1) contrast(1.2) drop-shadow(0 2px 4px rgba(0,0,0,0.1))' : 'brightness(1.1) drop-shadow(0 2px 8px rgba(0,0,0,0.3))'
                    }}
                  />
                </motion.div>
                <div className="flex flex-col">
                  <motion.h2 
                    className={`text-lg font-bold transition-all duration-300 ${
                      scrolled ? 'text-navy-900' : 'text-white'
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
              Class Yachts
                  </motion.h2>
                  <motion.p 
                    className={`text-xs tracking-wider uppercase font-medium transition-all duration-300 ${
                      scrolled ? 'text-gray-600' : 'text-gold-300'
                    }`}
                  >
                    Premium Vessels
                  </motion.p>
                </div>
              </div>
              {/* Mobile logo - left positioned */}
              <div className="block sm:hidden">
                <motion.div
                  className={`p-2 rounded-xl transition-all duration-300 ${
                    scrolled ? 'bg-navy-900 shadow-lg' : 'bg-transparent'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img 
                    src="/logoclass1.png" 
                    alt="Class Yachts Logo" 
                    className="h-8 w-auto object-contain"
                    style={{
                      filter: scrolled ? 'brightness(1) contrast(1.2)' : 'brightness(1)'
                    }}
                  />
                </motion.div>
              </div>
            </Link>
          </motion.div>
            
          {/* Desktop Navigation */}
          <motion.div variants={itemVariants} className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navigation.map((item) => (
            <Link 
                  key={item.name}
                  to={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    location.pathname === item.href
                      ? scrolled 
                        ? 'text-gold-600' 
                        : 'text-gold-400'
                      : scrolled 
                        ? 'text-gray-700 hover:text-gold-600' 
                        : 'text-white hover:text-gold-400'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full"
                      layoutId="activeTab"
                      transition={{ duration: 0.3 }}
                    />
                  )}
            </Link>
              ))}
        </div>
          </motion.div>
        
          {/* Enhanced CTA Button */}
          <motion.div variants={itemVariants} className="hidden md:flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button 
                asChild
                className={`relative overflow-hidden bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white border-0 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl shadow-gold-500/25 hover:shadow-gold-500/40 ${
                  scrolled ? 'shadow-lg' : 'shadow-xl'
                }`}
              >
                <Link to="/contact" className="flex items-center space-x-2">
                  <Crown className="w-4 h-4" />
                  <span>Book Consultation</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut"
                    }}
                  />
                </Link>
                </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Mobile menu button */}
          <motion.div variants={itemVariants} className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`relative p-3 rounded-2xl transition-all duration-300 ${
                scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open main menu</span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </motion.div>
              
              {/* Premium button effects */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  boxShadow: isOpen 
                    ? ['0 0 0 0px rgba(212, 175, 55, 0.4)', '0 0 0 10px rgba(212, 175, 55, 0)']
                    : '0 0 0 0px rgba(212, 175, 55, 0)'
                }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Ultra-Luxury Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Premium backdrop with blur */}
            <motion.div 
              className="fixed inset-0 z-[60] bg-gradient-to-br from-navy-900/95 via-black/90 to-navy-950/95"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              style={{ backdropFilter: 'blur(20px)' }}
            />
            
            {/* Luxury floating particles */}
            <motion.div 
              className="fixed inset-0 z-[65] pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {[...Array(20)].map((_, i) => (
              <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-gold-400/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [-20, 20, -20],
                    opacity: [0.2, 1, 0.2],
                    scale: [0.5, 1.5, 0.5]
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>

            {/* Main luxury mobile menu */}
            <motion.div 
              className="fixed inset-0 z-[70] flex justify-end"
              variants={luxuryMobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {/* Premium glass panel */}
              <div className="relative h-full w-full sm:w-96 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-3xl border-l border-white/20 overflow-y-auto">
                
                {/* Luxury background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 via-transparent to-navy-500/10" />
                <motion.div
                  className="absolute inset-0 opacity-30"
                  animate={{
                    background: [
                      'radial-gradient(circle at 20% 20%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)',
                      'radial-gradient(circle at 80% 80%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)',
                      'radial-gradient(circle at 20% 20%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)'
                    ]
                  }}
                  transition={{
                    duration: 8,
                    ease: "easeInOut",
                    repeat: Infinity
                  }}
                />

                {/* Content container with proper padding and scrolling */}
                <div className="relative z-10 min-h-full flex flex-col p-6 sm:p-8">
                  
                  {/* Luxury header */}
                  <motion.div 
                    className="flex items-center justify-between mb-8 sm:mb-12 flex-shrink-0"
                    variants={luxuryItemVariants}
                  >
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <motion.div 
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center shadow-lg shadow-gold-500/25"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >
                        <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" style={{ margin: 'auto' }} />
                      </motion.div>
                      <div>
                        <motion.img 
                          src="/logoclass1.png" 
                          alt="Class Yachts Logo" 
                          className="h-6 sm:h-8 w-auto object-contain mb-1"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                        <p className="text-xs text-gold-300/80 tracking-wider uppercase leading-tight">Premium Vessels</p>
                      </div>
                    </div>
                
                    <motion.button
                      className="p-2 sm:p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                      whileHover={{ scale: 1.05, rotate: 90 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </motion.button>
                  </motion.div>

                  {/* Premium navigation with scrollable area */}
                  <motion.nav className="flex-1 mb-6 sm:mb-8 overflow-y-auto">
                    <div className="space-y-2 sm:space-y-3">
                      {navigation.map((item, index) => (
                        <motion.div 
                          key={item.name}
                          variants={luxuryItemVariants}
                          custom={index}
                        >
                          <Link 
                            to={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`group flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-2xl transition-all duration-500 ${
                              location.pathname === item.href
                                ? 'bg-gradient-to-r from-gold-500/20 to-gold-600/20 border border-gold-400/30 shadow-lg shadow-gold-500/10'
                                : 'hover:bg-white/10 hover:border-white/20 border border-transparent'
                            }`}
                          >
                            <motion.div 
                              className={`p-2 sm:p-3 rounded-xl ${
                                location.pathname === item.href
                                  ? 'bg-gradient-to-br from-gold-500 to-gold-600 text-white'
                                  : 'bg-white/10 text-gold-300 group-hover:bg-gold-500 group-hover:text-white'
                              } transition-all duration-300`}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                              {item.icon}
                            </motion.div>
                            <div className="flex-1">
                              <h3 className={`text-base sm:text-lg font-semibold transition-all duration-300 ${
                                location.pathname === item.href
                                  ? 'text-gold-300'
                                  : 'text-white group-hover:text-gold-300'
                              }`}>
                                {item.name}
                              </h3>
                            </div>
                            <motion.div
                              className={`transition-all duration-300 ${
                                location.pathname === item.href ? 'text-gold-400' : 'text-white/50 group-hover:text-gold-400'
                              }`}
                              animate={{ x: location.pathname === item.href ? [0, 5, 0] : 0 }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                            </motion.div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.nav>

                  {/* Premium CTA and Social - Fixed at bottom */}
                  <motion.div variants={luxuryItemVariants} className="flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mb-4 sm:mb-6"
                    >
                      <Button 
                        asChild
                        className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black font-semibold py-3 sm:py-4 rounded-2xl shadow-xl shadow-gold-500/25 border-0"
                      >
                        <Link to="/contact" onClick={() => setIsOpen(false)}>
                          <Crown className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                          Book Private Consultation
                        </Link>
                      </Button>
                    </motion.div>
                    
                    {/* Premium social links */}
                    <div className="flex justify-center gap-3 sm:gap-4">
                      {[
                        { icon: Instagram, href: 'https://instagram.com', color: 'from-pink-500 to-purple-500' }
                      ].map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}
                          whileHover={{ scale: 1.15, y: -3, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "spring", damping: 15, stiffness: 300 }}
                        >
                          <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Premium edge glow */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-400/50 to-transparent" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

