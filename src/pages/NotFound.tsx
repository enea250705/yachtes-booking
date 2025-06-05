import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home, Anchor, Compass, Star, Crown, Sparkles, Waves, Diamond } from 'lucide-react';

const NotFound: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Premium animation variants
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

  const floatingParticle = {
    animate: {
      y: [-30, 30, -30],
      x: [-15, 15, -15],
      rotate: [0, 180, 360],
      scale: [1, 1.3, 1],
      opacity: [0.3, 0.8, 0.3],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const waveAnimation = {
    animate: {
      d: [
        "M0,192L48,186.7C96,181,192,171,288,181.3C384,192,480,224,576,218.7C672,213,768,171,864,176C960,181,1056,235,1152,245.3C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
        "M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,234.7C672,245,768,235,864,224C960,213,1056,203,1152,208C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ],
      transition: {
        duration: 12,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 relative overflow-hidden flex items-center justify-center">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 via-transparent to-gold-600/15 animate-pulse" />
        
        {/* Premium particle system */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-gold-400/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={floatingParticle}
            animate="animate"
            transition={{ delay: Math.random() * 5 }}
          />
        ))}

        {/* Floating geometric shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute w-3 h-3 bg-gold-400/20 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + i * 8}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.8, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      {/* Luxury Wave Animation */}
      <div className="absolute bottom-0 left-0 right-0 opacity-20">
        <svg viewBox="0 0 1440 320" className="w-full h-32">
          <motion.path
            fill="url(#wave-gradient)"
            variants={waveAnimation}
            animate="animate"
            d="M0,192L48,186.7C96,181,192,171,288,181.3C384,192,480,224,576,218.7C672,213,768,171,864,176C960,181,1056,235,1152,245.3C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFCC26" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#FFCC26" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFCC26" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Content */}
      <motion.div
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={luxuryContainer}
        className="max-w-4xl mx-auto text-center p-8 relative z-10"
      >
        {/* Premium 404 Display */}
        <motion.div variants={premiumReveal} className="mb-12 relative">
          {/* Floating crown decoration */}
          <motion.div 
            className="absolute -top-16 left-1/2 transform -translate-x-1/2"
            animate={{ 
              rotate: [0, 10, -10, 0],
              y: [0, -10, 0] 
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center">
              <Crown className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          
          {/* Luxury 404 Typography */}
          <motion.div className="relative">
            <h1 className="text-8xl md:text-9xl font-playfair mb-4 relative">
              <span className="bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent">
                4
              </span>
              <span className="relative mx-4">
                <span className="bg-gradient-to-r from-white via-gold-200 to-white bg-clip-text text-transparent">
                  0
                </span>
                {/* Compass in the center of 0 */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Compass className="w-16 h-16 text-gold-400" />
                </motion.div>
              </span>
              <span className="bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent">
                4
              </span>
            </h1>
            
            {/* Decorative underline */}
            <motion.div 
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ duration: 2, delay: 1 }}
            />
          </motion.div>
        </motion.div>

        {/* Premium Content Card */}
        <motion.div 
          variants={premiumReveal}
          className="relative p-10 bg-gradient-to-br from-navy-800/60 to-navy-900/80 backdrop-blur-2xl rounded-3xl border border-gold-400/20 mb-12 overflow-hidden group"
        >
          {/* Card background effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-gold-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Floating anchor decoration */}
          <motion.div 
            className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-gold-500/20 to-gold-600/30 rounded-2xl flex items-center justify-center"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <Anchor className="w-6 h-6 text-gold-400" />
          </motion.div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-playfair text-white mb-6">
              Lost at Sea?
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              It seems you've sailed into uncharted waters. This page has drifted away from our luxury fleet, 
              but don't worry – our navigation will guide you back to safe harbors.
            </p>

            {/* Premium features indicators */}
            <div className="flex items-center justify-center gap-8 mb-8">
              {[
                { icon: Star, label: "Premium Navigation" },
                { icon: Diamond, label: "Luxury Experience" },
                { icon: Waves, label: "Safe Waters Ahead" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 1 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-500/20 to-gold-600/30 rounded-xl flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <span className="text-sm text-gray-400">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Premium Action Buttons */}
        <motion.div 
          variants={premiumReveal}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <motion.div
            whileHover={{ y: -5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              onClick={() => window.history.back()}
              variant="outline"
              className="bg-transparent border-2 border-gold-400/50 text-gold-400 hover:bg-gold-400/10 hover:border-gold-400 px-8 py-4 text-lg font-medium backdrop-blur-sm"
            >
              <ArrowLeft className="mr-3 h-5 w-5" />
              Navigate Back
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ y: -5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to="/">
              <Button className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-8 py-4 text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300">
                <Home className="mr-3 h-5 w-5" />
                Return to Fleet
                <Sparkles className="ml-3 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Luxury Status Indicator */}
        <motion.div 
          variants={premiumReveal}
          className="mt-12"
        >
          <motion.div 
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gold-500/20 to-gold-600/20 backdrop-blur-xl rounded-full border border-gold-400/30"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Star className="w-5 h-5 text-gold-400 fill-current" />
            <span className="text-gold-400 font-medium">Premium Navigation Experience</span>
            <Star className="w-5 h-5 text-gold-400 fill-current" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
