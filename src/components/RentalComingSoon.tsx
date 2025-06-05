import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Calendar, Clock, Anchor, Star, Crown, Diamond, Sparkles, Waves } from 'lucide-react';
import { shimmer, fadeInUp, staggerContainer, float } from '@/lib/animations';

const RentalComingSoon: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 py-32 text-white min-h-screen flex items-center">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-gold-600/10 animate-pulse" />
        
        {/* Floating geometric shapes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold-400/30 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
        
        {/* Premium particle system */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-gold-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Enhanced Wave Animation */}
      <div className="absolute inset-0 opacity-20">
        <svg 
          viewBox="0 0 1440 320" 
          className="absolute bottom-0 left-0 w-full"
          preserveAspectRatio="none"
        >
          <motion.path 
            d="M0,192L48,186.7C96,181,192,171,288,181.3C384,192,480,224,576,218.7C672,213,768,171,864,176C960,181,1056,235,1152,245.3C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="url(#wave-gradient)"
            animate={{
              y: [0, 15, 0],
              transition: {
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
          />
          <motion.path 
            d="M0,256L48,245.3C96,235,192,213,288,208C384,203,480,213,576,229.3C672,245,768,267,864,250.7C960,235,1056,181,1152,181.3C1248,181,1344,235,1392,261.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="url(#wave-gradient-2)"
            animate={{
              y: [0, -10, 0],
              transition: {
                duration: 12,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFCC26" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#FFCC26" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFCC26" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFCC26" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#FFCC26" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#FFCC26" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          {/* Premium Header Section */}
          <motion.div variants={fadeInUp} className="text-center mb-20">
            {/* Luxury Status Badge */}
            <motion.div 
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-gold-500/20 to-gold-600/20 backdrop-blur-xl border border-gold-400/30 mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Diamond size={18} className="mr-3 text-gold-400" />
              <span className="text-gold-400 font-medium tracking-wide">Exclusive Development</span>
              <Sparkles size={18} className="ml-3 text-gold-400" />
            </motion.div>
            
            {/* Main Title with Enhanced Typography */}
            <motion.h1 
              className="text-5xl md:text-7xl font-playfair mb-8 relative"
              variants={fadeInUp}
            >
              <span className="bg-gradient-to-r from-white via-gold-200 to-white bg-clip-text text-transparent">
                Luxury Yacht
              </span>
              <br />
              <span className="bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent">
                Charters
              </span>
              
              {/* Decorative underline */}
              <motion.div 
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"
                initial={{ width: 0 }}
                animate={{ width: "80%" }}
                transition={{ duration: 2, delay: 1 }}
              />
            </motion.h1>
            
            {/* Enhanced Subtitle */}
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed"
              variants={fadeInUp}
            >
              We're crafting an unparalleled luxury charter experience that will redefine maritime excellence. 
              <span className="text-gold-400 font-medium"> Prepare for something extraordinary.</span>
            </motion.p>
          </motion.div>

          {/* Premium Cards Grid */}
          <motion.div 
            variants={staggerContainer}
            className="grid gap-8 mb-20 max-w-4xl mx-auto"
          >
            {/* Main Charter Card */}
            <motion.div 
              variants={fadeInUp}
              className="group"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative p-10 bg-gradient-to-br from-navy-800/60 to-navy-900/80 backdrop-blur-2xl rounded-3xl border border-gold-400/20 hover:border-gold-400/40 transition-all duration-500 overflow-hidden">
                {/* Card background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-gold-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating crown icon */}
                <motion.div 
                  className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center"
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Crown className="w-6 h-6 text-white" />
                </motion.div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-playfair text-white mb-6">
                    Exclusive Charter Services
                  </h3>
                  
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    Our team is meticulously designing charter experiences that will set new standards in luxury maritime travel. Every detail is being crafted to exceed expectations.
                  </p>
                  
                  {/* Premium features list */}
                  <div className="space-y-4">
                    {[
                      "World-class yacht fleet curation",
                      "Bespoke itinerary planning",
                      "White-glove concierge services",
                      "Exclusive destination access"
                    ].map((feature, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                      >
                        <div className="w-2 h-2 bg-gold-400 rounded-full" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Call to Action Section */}
          <motion.div 
            variants={fadeInUp}
            className="text-center"
          >
            <motion.div 
              className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-gold-500/20 to-gold-600/20 backdrop-blur-xl rounded-full border border-gold-400/30"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Waves className="w-6 h-6 text-gold-400" />
              <span className="text-gold-400 font-medium text-lg tracking-wide">
                Luxury Awaits on the Horizon
              </span>
              <Sparkles className="w-6 h-6 text-gold-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RentalComingSoon; 