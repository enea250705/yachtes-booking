import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Anchor, Navigation, Compass, Users, Clock, ArrowDown, Sparkles } from 'lucide-react';

// Enhanced Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 1.2, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 1, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.5
    }
  }
};

const blurIn = {
  hidden: { opacity: 0, filter: "blur(20px)" },
  visible: { 
    opacity: 1, 
    filter: "blur(0px)",
    transition: { 
      duration: 1.5, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const luxuryFloat = {
  hidden: { opacity: 0, y: 100, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.5,
      ease: [0.25, 0.1, 0.25, 1],
      type: "spring",
      damping: 15,
      stiffness: 100
    }
  }
};

const sparkleAnimation = {
  animate: {
    scale: [1, 1.2, 1],
    rotate: [0, 180, 360],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Motion values for magnetic effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);
  
  // Static data for yacht specifications
  const yachtSpecifications = [
    { icon: <Clock className="h-5 w-5" />, label: "Timeless Design", value: "Innovative elegance meets functionality" },
    { icon: <Navigation className="h-5 w-5" />, label: "Superior Navigation", value: "State-of-the-art control systems" },
    { icon: <Compass className="h-5 w-5" />, label: "Precision Engineering", value: "Uncompromising quality standards" },
    { icon: <Users className="h-5 w-5" />, label: "Expert Craftsmanship", value: "Hand-finished by master artisans" }
  ];
  
  useEffect(() => {
    // Set a delay to trigger animations after component mounts
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    // Mouse tracking for magnetic effects
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);
  
  return (
    <div className="relative h-screen min-h-[800px] w-full overflow-hidden pt-20 md:pt-0">
      {/* Floating sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gold-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={sparkleAnimation}
            animate="animate"
            transition={{ delay: i * 0.3 }}
          >
            <Sparkles className="h-4 w-4" />
          </motion.div>
        ))}
      </div>

      {/* Luxury particle effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(212, 175, 55, 0.15) 0%, transparent 50%)'
        }}
        animate={{
          '--mouse-x': `${mousePosition.x / window.innerWidth * 100}%`,
          '--mouse-y': `${mousePosition.y / window.innerHeight * 100}%`,
        } as any}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/LEKKER 45-1.jpg"
        >
          <source src="/homepage.mp4" type="video/mp4" />
          <div className="absolute inset-0 bg-cover bg-center bg-[url('/LEKKER 45-1.jpg')]" />
        </video>
        
        {/* Video overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-900/60 to-navy-950/90"></div>
        
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'linear-gradient(45deg, rgba(212, 175, 55, 0.05) 0%, transparent 50%, rgba(212, 175, 55, 0.05) 100%)',
              'linear-gradient(225deg, rgba(212, 175, 55, 0.05) 0%, transparent 50%, rgba(212, 175, 55, 0.05) 100%)',
              'linear-gradient(45deg, rgba(212, 175, 55, 0.05) 0%, transparent 50%, rgba(212, 175, 55, 0.05) 100%)'
            ]
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror"
          }}
        />
      </div>
      
      {/* Content with enhanced animations */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 pt-20 md:pt-0">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div 
            variants={blurIn}
            className="relative inline-block mb-4 sm:mb-8"
          >
            <motion.span 
              className="px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-gold-600/80 to-gold-400/80 backdrop-blur-md rounded-full text-xs sm:text-sm uppercase tracking-wider inline-block font-medium text-navy-950 shadow-[0_5px_15px_rgba(212,175,55,0.3)] border border-gold-300/20"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 8px 25px rgba(212,175,55,0.4)',
                borderColor: 'rgba(212, 175, 55, 0.5)'
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                  backgroundSize: '50% 100%'
                }}
                className="absolute inset-0 rounded-full"
              />
              Premium Yacht Collection
            </motion.span>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-3xl sm:text-5xl md:text-7xl font-bold font-playfair mb-4 sm:mb-6 text-white drop-shadow-lg relative flex flex-col items-center"
          >
            <motion.div 
              className="inline-block"
              initial={{ y: 50, opacity: 0, rotateX: 90 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'center bottom' }}
            >
              <motion.img 
                src="/logoclass1.png" 
                alt="Class Yachts Logo" 
                className="h-12 sm:h-16 md:h-24 w-auto object-contain drop-shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <motion.div 
              className="absolute -bottom-2 sm:-bottom-4 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"
              initial={{ width: 0, opacity: 0, scaleX: 0 }}
              animate={{ width: 160, opacity: 1, scaleX: 1 }}
              transition={{ delay: 1.2, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-base sm:text-xl md:text-2xl max-w-3xl mx-auto font-light mb-6 sm:mb-8 text-white/90"
          >
            Experience the pinnacle of maritime craftsmanship with our exclusive collection 
            of world-class yachts for discerning connoisseurs.
          </motion.p>
          
          {/* Enhanced CTA button with magnetic effect */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            variants={fadeInUp}
          >
            <motion.div 
              variants={fadeInRight}
              className="relative group"
            >
              <Link to="/collection" className="inline-block">
                <Button className="bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-navy-950 px-4 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium relative overflow-hidden group">
                  <span className="flex items-center gap-2 relative z-10">
                    <motion.div
                      animate={{ rotate: [0, 12, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                    <Anchor className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:rotate-12 duration-300" />
                    </motion.div>
                    <span>Explore Collection</span>
                  </span>
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-gold-400/0 via-white/20 to-gold-400/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut"
                    }}
                  />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Enhanced Yacht Specifications with luxury animations */}
          <motion.div
            variants={luxuryFloat}
            className="mt-10 sm:mt-16 max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-12">
              {yachtSpecifications.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 1.5 + (index * 0.1),
                    type: "spring",
                    damping: 20,
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: '0 10px 30px rgba(212,175,55,0.2)',
                    borderColor: 'rgba(212, 175, 55, 0.4)'
                  }}
                  className="bg-navy-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-3 sm:p-4 flex flex-col items-center cursor-pointer transition-all duration-300"
                >
                  <motion.div 
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gold-500/20 flex items-center justify-center mb-2 sm:mb-3"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {spec.icon}
                  </motion.div>
                  <h4 className="text-gold-400 text-xs sm:text-sm font-medium mb-1">{spec.label}</h4>
                  <p className="text-white/80 text-[10px] sm:text-xs text-center">{spec.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-gold-400/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-gold-400 rounded-full mt-2"
          />
        </motion.div>
        <motion.p
          className="text-gold-400/70 text-xs mt-2 hidden sm:block"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll to explore
        </motion.p>
      </motion.div>
      
      {/* Static yacht silhouette at bottom with enhanced animation */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-5xl"
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ 
          opacity: isLoaded ? 0.15 : 0, 
          y: isLoaded ? 0 : 50,
          scale: isLoaded ? 1 : 0.8
        }}
        transition={{ duration: 1.5, delay: 1, type: "spring", damping: 20 }}
      >
        <div className="aspect-[16/3] bg-contain bg-center bg-no-repeat" 
             style={{ backgroundImage: "url('/images/yacht-silhouette.png')" }}></div>
      </motion.div>
    </div>
  );
};

export default Hero;

