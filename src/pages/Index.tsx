import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import About from '@/components/About';
import YachtCollection from '@/components/YachtCollection';
import FeaturedYachts from '@/components/FeaturedYachts';
import Services from '@/components/Services';
import Destinations from '@/components/Destinations';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

// Luxury animation variants
const pageTransition = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const sectionVariants = {
  hidden: { 
    opacity: 0, 
    y: 100,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  }
};

const luxuryReveal = {
  hidden: { 
    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    opacity: 0
  },
  visible: { 
    clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
    opacity: 1,
    transition: { 
      duration: 1.6,
      ease: [0.77, 0, 0.175, 1],
      delay: 0.2
    }
  }
};

const Index: React.FC = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      className="min-h-screen relative"
      initial="hidden"
      animate="visible"
      variants={pageTransition}
    >
      {/* Luxury animated background overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none -z-10 h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/20 via-transparent to-gold-900/10" />
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)'
            ]
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.div>

      <motion.div className="relative z-50" variants={sectionVariants}>
        <Navbar />
      </motion.div>

      <motion.div className="relative z-10" variants={luxuryReveal}>
        <Hero />
      </motion.div>

      <motion.div 
        className="relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <About />
      </motion.div>

      <motion.div 
        className="relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <YachtCollection />
      </motion.div>

      <motion.div 
        className="relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <FeaturedYachts />
      </motion.div>

      <motion.div 
        className="relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Services />
      </motion.div>

      <motion.div 
        className="relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Destinations />
      </motion.div>

      <motion.div 
        className="relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Testimonials />
      </motion.div>

      <motion.div 
        className="relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Contact />
      </motion.div>

      <motion.div 
        className="relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <Footer />
      </motion.div>
    </motion.div>
  );
};

export default Index;