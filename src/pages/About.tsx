import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Star, Anchor, Settings, CheckCircle, ShieldCheck, Compass, Briefcase, Users, Crown, Diamond, Sparkles, Award, Gem } from 'lucide-react';
import { Link } from 'react-router-dom';

// Enhanced luxury animation variants
const luxuryContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const premiumReveal = {
  hidden: { 
    opacity: 0, 
    y: 100,
    scale: 0.9,
    rotateX: 15
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: { 
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      type: "spring",
      damping: 25,
      stiffness: 100
    }
  }
};

const magneticHover = {
  hover: {
    y: -15,
    scale: 1.03,
    rotateY: 5,
    boxShadow: "0 30px 60px rgba(212, 175, 55, 0.3)",
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const floatingGem = {
  animate: {
    y: [-15, 15, -15],
    rotate: [0, 180, 360],
    scale: [1, 1.1, 1],
    opacity: [0.4, 0.8, 0.4],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const shimmerAnimation = {
  animate: {
    x: ['-100%', '100%'],
    opacity: [0, 1, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatDelay: 4,
      ease: "easeInOut"
    }
  }
};

const About: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Motion values for enhanced effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    // Enhanced mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const values = [
    {
      icon: <Star className="w-8 h-8 text-gold-400" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in every aspect of our business, from vessel selection to client service.',
      gradient: 'from-gold-500/20 to-gold-600/20'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-gold-400" />,
      title: 'Integrity',
      description: 'Honesty and transparency guide all our interactions, building lasting trust with our clients.',
      gradient: 'from-blue-500/20 to-blue-600/20'
    },
    {
      icon: <Settings className="w-8 h-8 text-gold-400" />,
      title: 'Innovation',
      description: 'We constantly seek new technologies and designs that push the boundaries of yacht craftsmanship.',
      gradient: 'from-emerald-500/20 to-emerald-600/20'
    }
  ];

  const expertiseAreas = [
    {
      icon: <Anchor className="w-8 h-8 text-gold-400" />,
      title: "Yacht Sales",
      description: "Expert guidance in selecting the perfect vessel that aligns with your vision and requirements.",
      link: "/collection",
      stats: "50+ Premium Vessels"
    },
    {
      icon: <Compass className="w-8 h-8 text-gold-400" />,
      title: "Charter Services",
      description: "Curated luxury yacht charter experiences in the world's most prestigious destinations.",
      link: "/rental",
      stats: "25+ Destinations"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-gold-400" />,
      title: "Management & Maintenance",
      description: "Comprehensive yacht management services ensuring your vessel remains in pristine condition.",
      link: "/services",
      stats: "24/7 Support"
    },
    {
      icon: <Users className="w-8 h-8 text-gold-400" />,
      title: "Personal Consultation",
      description: "Tailored advice from industry experts on all aspects of yacht ownership and investment.",
      link: "/contact",
      stats: "Expert Advisors"
    }
  ];

  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 relative overflow-hidden">
      {/* Floating luxury particles */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={floatingGem}
            animate="animate"
            transition={{ delay: i * 0.8 }}
          >
            <Gem className="h-4 w-4 text-gold-400/20" />
          </motion.div>
        ))}
      </div>

      {/* Dynamic mouse-following gradient */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(212, 175, 55, 0.08), transparent 50%)`
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <Navbar />

      {/* Enhanced Hero Section */}
      <motion.div 
        className="relative h-[80vh] min-h-[700px] w-full overflow-hidden flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Parallax background with enhanced effects */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{ 
            backgroundImage: `url(/lekker-45-4.jpg)`,
            y: backgroundY,
            scale: isLoaded ? 1.05 : 1.1
          }}
          animate={{ 
            opacity: isLoaded ? 1 : 0
          }}
          transition={{ duration: 3, ease: "easeOut" }}
        />
        
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/80 to-navy-950/90" />
        
        {/* Animated overlay patterns */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'linear-gradient(45deg, rgba(212, 175, 55, 0.1) 0%, transparent 50%, rgba(212, 175, 55, 0.1) 100%)',
              'linear-gradient(225deg, rgba(212, 175, 55, 0.1) 0%, transparent 50%, rgba(212, 175, 55, 0.1) 100%)',
              'linear-gradient(45deg, rgba(212, 175, 55, 0.1) 0%, transparent 50%, rgba(212, 175, 55, 0.1) 100%)'
            ]
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror"
          }}
        />

        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            variants={luxuryContainer}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="max-w-5xl mx-auto text-center"
          >
            {/* Premium badge */}
            <motion.div 
              variants={premiumReveal}
              className="relative inline-block mb-8"
            >
              <motion.span 
                className="px-6 py-3 bg-gradient-to-r from-gold-600/80 to-gold-400/80 backdrop-blur-md rounded-full text-sm uppercase tracking-wider inline-block font-medium text-navy-950 shadow-[0_5px_15px_rgba(212,175,55,0.3)] border border-gold-300/20"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 8px 25px rgba(212,175,55,0.4)',
                  borderColor: 'rgba(212, 175, 55, 0.5)'
                }}
              >
                <Crown className="inline w-4 h-4 mr-2" />
                Our Story & Values
              </motion.span>
            </motion.div>

            <motion.div variants={premiumReveal}>
              <motion.h1 
                className="text-5xl md:text-7xl font-playfair text-white font-bold mb-8 relative"
                initial={{ opacity: 0, y: 50, rotateX: 90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: 'center bottom' }}
              >
                <motion.span className="inline-block">Crafted With</motion.span>
                <br />
                <motion.span 
                  className="inline-block text-gold-400"
                  initial={{ opacity: 0, y: 50, rotateX: 90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: 'center bottom' }}
                >
                  Excellence
                </motion.span>
                <motion.div 
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 300, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.h1>
            </motion.div>
            
            <motion.p
              variants={premiumReveal}
              className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light"
            >
              Class Yachts has redefined luxury on water, connecting discerning clients with the world's most exceptional vessels through unparalleled expertise and dedication.
            </motion.p>

            {/* Enhanced stats */}
            <motion.div 
              variants={premiumReveal}
              className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12"
            >
              {[
                { number: "18+", label: "Years Excellence" },
                { number: "200+", label: "Happy Clients" },
                { number: "50+", label: "Luxury Vessels" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + (index * 0.2), duration: 0.8 }}
                >
                  <div className="text-3xl md:text-4xl font-playfair text-gold-400 mb-2">{stat.number}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" />
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowRight className="w-8 h-8 text-gold-400 transform rotate-90 opacity-90" />
        </motion.div>
      </motion.div>

      {/* Values Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={luxuryContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={premiumReveal} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair text-white font-bold mb-6 relative inline-block">
                Our Values
                <motion.span 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500"
                />
              </h2>
              <p className="text-lg text-white max-w-3xl mx-auto font-medium">
                The principles that guide our commitment to excellence in everything we do.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-navy-800 to-navy-700 backdrop-blur-sm p-10 rounded-xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)] transition-all duration-500"
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <div className="bg-navy-600 rounded-full w-20 h-20 flex items-center justify-center mb-6 shadow-[0_10px_20px_rgba(0,0,0,0.2)] mx-auto">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-playfair text-white text-center font-bold mb-4">{value.title}</h3>
                  <p className="text-white text-center font-medium">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Expertise Section - New Addition */}
      <section className="py-24 relative bg-navy-900/50">
        <div className="absolute inset-0 bg-[url('/lekker 45-4.jpg')] bg-cover bg-center bg-fixed opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair text-white font-bold mb-6 relative inline-block">
              Our Expertise
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500"
              />
            </h2>
            <p className="text-lg text-white max-w-3xl mx-auto font-medium">
              Comprehensive services tailored to meet the needs of the most discerning yacht enthusiasts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-gradient-to-br from-navy-800/90 to-navy-900/90 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)] transition-all duration-500 group"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-navy-700 to-navy-800 rounded-full w-16 h-16 flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.2)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-500 border border-gold-500/20 group-hover:border-gold-400/50">
                    {area.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-playfair text-white font-bold mb-3 group-hover:text-gold-400 transition-colors duration-300">{area.title}</h3>
                    <p className="text-white/80 mb-4">{area.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About; 