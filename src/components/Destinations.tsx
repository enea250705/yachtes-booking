import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const Destinations: React.FC = () => {
  const featuredDestinations = [
    {
      name: "Monaco",
      image: "/v8-1.jpg",
      description: "The iconic luxury destination on the French Riviera, known for its glamorous harbor filled with superyachts and prestigious events."
    },
    {
      name: "Tirana",
      image: "/tirana.jpeg",
      description: "Albania's vibrant capital offers a unique blend of architecture, with easy access to the stunning Albanian Riviera."
    },
    {
      name: "Portofino",
      image: "/r6-1.jpg",
      description: "This charming fishing village on the Italian Riviera is known for its picturesque harbor and pastel-colored buildings."
    },
    {
      name: "Cannes",
      image: "/CabinLowres-40R-1.jpg",
      description: "Famous for its international film festival, Cannes offers beautiful beaches and luxury shopping on the French Riviera."
    }
  ];

  return (
    <motion.section 
      id="destinations" 
      className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      ></motion.div>
      
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      ></motion.div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <motion.div 
              className="inline-block mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm uppercase tracking-widest text-gold-600 font-medium">Exquisite Locations</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-playfair mb-8 text-blue-900 relative inline-block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Charter Destinations
              <motion.span 
                className="absolute -bottom-3 left-0 h-0.5 w-full bg-gradient-to-r from-gold-400 to-gold-600"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
              ></motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Explore the premium destinations available for your luxury yacht charter experience.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Full-width destinations slider */}
      <div className="relative overflow-hidden py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap gap-6 md:gap-4">
            {featuredDestinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 relative group"
                whileHover={{ 
                  y: -10, 
                  transition: { duration: 0.3 } 
                }}
              >
                <motion.div 
                  className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden rounded-lg shadow-lg"
                  whileHover={{ 
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    transition: { duration: 0.5 }
                  }}
                >
                  <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <motion.div className="h-full w-full overflow-hidden">
                    <motion.img 
                      src={destination.image} 
                      alt={destination.name}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
                    <div className="overflow-hidden">
                      <motion.h3 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 + (index * 0.2) }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-playfair text-white mb-4"
                      >
                        {destination.name}
                      </motion.h3>
                    </div>
                    
                    <motion.div 
                      className="h-px w-16 bg-gold-400 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500"
                      initial={{ x: -10, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                    
                    <div className="overflow-hidden">
                      <motion.p 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 + (index * 0.2) }}
                        viewport={{ once: true }}
                        className="text-white/80 text-sm transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                      >
                        {destination.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Gold accent bar */}
      <motion.div 
        className="container mx-auto px-4 mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div 
          className="h-px w-full max-w-md mx-auto bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-50"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.7 }}
        ></motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Destinations; 