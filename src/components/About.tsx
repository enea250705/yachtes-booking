import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView, useAnimation } from 'framer-motion';
import { 
  Award, 
  Anchor, 
  Users, 
  Globe, 
  Shield, 
  Star, 
  ChevronRight,
  Diamond,
  Trophy,
  Compass,
  Calendar,
  Crown,
  Sparkles,
  ArrowRight,
  Quote
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const About: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Enhanced premium parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 2]);

  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

// Enhanced luxury animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 1.2
    }
  }
};

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95,
      rotateX: 45
    },
  visible: { 
    opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
    transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
    }
  }
};

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateY: 45
    },
  visible: { 
    opacity: 1, 
      scale: 1,
    rotateY: 0,
    transition: { 
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
    }
    },
    hover: {
      scale: 1.05,
      rotateY: -5,
      z: 50,
    transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
    }
  }
};

  // Enhanced achievements data
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      number: "50+",
      label: "Awards Won",
      description: "International maritime excellence",
      color: "from-gold-400 to-gold-600"
    },
    {
      icon: <Crown className="w-8 h-8" />,
      number: "25",
      label: "Years Legacy",
      description: "Crafting maritime masterpieces",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "500+",
      label: "Elite Clients",
      description: "Trust our expertise worldwide",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: "40+",
      label: "Countries",
      description: "Global presence and service",
      color: "from-emerald-400 to-emerald-600"
    }
  ];
  
  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50">
      
      {/* Enhanced premium background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          ref={parallaxRef}
          className="absolute inset-0 opacity-5"
          style={{ y, rotate }}
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-navy-400 to-navy-600 rounded-full blur-3xl" />
          <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full blur-2xl" />
        </motion.div>
        
        {/* Enhanced floating decorative elements */}
        <motion.div
          className="absolute inset-0"
          style={{ opacity }}
        >
          {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
              className="absolute"
            style={{
                left: `${10 + (i * 8)}%`,
                top: `${20 + (i % 3) * 30}%`,
            }}
            >
      <motion.div
                className="w-2 h-2 bg-gold-300/20 rounded-full"
        animate={{
                  y: [-20, 20, -20],
                  opacity: [0.2, 0.5, 0.2],
                  scale: [1, 1.5, 1]
        }}
        transition={{
                  duration: 4 + i,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
            </motion.div>
          ))}
      </motion.div>
      
        {/* Premium geometric patterns */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          animate={{ 
            backgroundImage: [
              'repeating-linear-gradient(45deg, rgba(212,175,55,0.1) 0px, transparent 1px, transparent 10px, rgba(212,175,55,0.1) 11px)',
              'repeating-linear-gradient(135deg, rgba(212,175,55,0.1) 0px, transparent 1px, transparent 10px, rgba(212,175,55,0.1) 11px)',
              'repeating-linear-gradient(45deg, rgba(212,175,55,0.1) 0px, transparent 1px, transparent 10px, rgba(212,175,55,0.1) 11px)'
            ]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Enhanced Section Header */}
        <motion.div
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gold-500/10 to-gold-600/10 border border-gold-400/30 rounded-full mb-6 backdrop-blur-sm"
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Anchor className="w-5 h-5 text-gold-600" />
            </motion.div>
            <span className="text-gold-700 font-medium tracking-wider uppercase text-sm">About Excellence</span>
            <Sparkles className="w-4 h-4 text-gold-500" />
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 mb-6 leading-tight"
              >
            <span className="block">Crafting Maritime</span>
            <motion.span 
              className="block bg-gradient-to-r from-gold-600 to-gold-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity
              }}
              style={{
                backgroundSize: "200% 200%"
              }}
            >
              Masterpieces
            </motion.span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            For over two decades, we've been pushing the boundaries of yacht design and craftsmanship, 
            creating floating works of art that redefine the very essence of luxury.
          </motion.p>
              </motion.div>

        {/* Enhanced Premium Achievement Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardVariants}
              whileHover="hover"
              onHoverStart={() => setActiveCard(index)}
              onHoverEnd={() => setActiveCard(null)}
            >
              <motion.div
                className="relative p-8 bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200/50 shadow-xl shadow-black/5 overflow-hidden"
                style={{ 
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Premium gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                {/* Premium icon with 3D effect */}
                <motion.div 
                  className="relative z-10 text-center"
                  animate={activeCard === index ? {
                    rotateY: [0, 360],
                    scale: [1, 1.1, 1]
                  } : {}}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <motion.div 
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl text-white mb-4 shadow-lg`}
                    whileHover={{ scale: 1.1, rotateY: 180 }}
                    style={{
                      transformStyle: "preserve-3d"
                    }}
                  >
                    {achievement.icon}
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="text-center relative z-10"
                  animate={activeCard === index ? { y: [-5, 5, -5] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    className="text-3xl sm:text-4xl font-bold text-navy-900 mb-2"
                    animate={{
                      scale: activeCard === index ? [1, 1.05, 1] : 1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {achievement.number}
                  </motion.div>
                  <div className="text-lg font-semibold text-gray-800 mb-2">
                    {achievement.label}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>
          </motion.div>
          
                {/* Premium hover overlay */}
          <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
