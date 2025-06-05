import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Sparkles } from 'lucide-react';

const luxuryContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.3,
      delayChildren: 0.2
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

const imageHover = {
  hover: {
    scale: 1.05,
    rotateY: 5,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const FeaturedYachts: React.FC = () => {
  return (
    <motion.section 
      className="py-32 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-navy-900 dark:via-navy-950 dark:to-navy-900"
      variants={luxuryContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
    >
      {/* Elegant floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5
            }}
          >
            <Sparkles className="h-2 w-2 text-gold-400/30" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          variants={luxuryContainer}
          className="mb-16"
        >
          <motion.div 
            variants={premiumReveal}
            className="text-center mb-12"
          >
            <motion.span 
              className="inline-block px-6 py-3 bg-gradient-to-r from-gold-500/20 to-gold-400/20 backdrop-blur-sm border border-gold-300/30 text-gold-700 dark:text-gold-300 rounded-full text-sm font-medium mb-8 relative overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(212, 175, 55, 0.5)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/20 to-transparent"
                animate={{
                  x: ['-100%', '100%'],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut"
                }}
              />
              <Crown className="inline w-4 h-4 mr-2" />
              Featured Collections
            </motion.span>
            
            <motion.h2 
              className="text-4xl md:text-6xl font-playfair mb-6 text-navy-900 dark:text-white relative inline-block"
              variants={premiumReveal}
            >
              <motion.span
                initial={{ opacity: 0, y: 50, rotateX: 90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: 'center bottom' }}
                className="inline-block"
              >
                Crafting Elegance with
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 50, rotateX: 90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: 'center bottom' }}
                className="inline-block text-gold-600 dark:text-gold-400"
              >
                a Sustainable Vision
              </motion.span>
              <motion.span 
                className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-gold-500 to-gold-400 dark:from-gold-400 dark:to-gold-600"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "100%", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
              variants={premiumReveal}
            >
              Discover exceptional vessels that combine timeless elegance with sustainable innovation, 
              crafted by prestigious shipyards in the heart of the Mediterranean.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Featured Yacht Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Salpa Featured Image */}
          <motion.div
            variants={premiumReveal}
            whileHover={imageHover.hover}
            className="group relative cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <motion.img 
                src="/Salpa_Classy_RY.png" 
                alt="Salpa - Crafting Elegance with a Sustainable Vision" 
                className="w-full h-auto object-cover transition-transform duration-700"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.8 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Luxury overlay on hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-gold-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 1.2, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </motion.div>

          {/* Santasevera Featured Image */}
          <motion.div
            variants={premiumReveal}
            whileHover={imageHover.hover}
            className="group relative cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <motion.img 
                src="/Class_RY_Santasevera.png" 
                alt="Santasevera - Crafting Elegance with a Sustainable Vision" 
                className="w-full h-auto object-cover transition-transform duration-700"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.8 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Luxury overlay on hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-gold-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 1.2, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Premium brand badge */}
        <motion.div 
          className="flex justify-center mt-16"
          variants={premiumReveal}
        >
          <motion.div
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 tracking-wide uppercase">
              Exclusive Locations
            </div>
            <div className="text-lg font-light text-navy-900 dark:text-gold-400 tracking-wider">
              Tirana • Monaco • Cannes • Portofino
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeaturedYachts; 
 