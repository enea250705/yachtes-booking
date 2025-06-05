import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion, useInView, useAnimation, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ChevronRight, Anchor, ArrowRight, Ship, Navigation, Compass, Award, Star, Sparkles, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { colors, gradients, glass } from '@/lib/theme';
import { shimmer, fadeInUp, staggerContainer, luxuryHover, scaleIn } from '@/lib/animations';
import ModelCard from '@/components/ui/model-card';

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
    scale: 1.02,
    y: -8,
    rotateY: 5,
    boxShadow: "0 25px 50px rgba(212, 175, 55, 0.25)",
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const shimmerEffect = {
  initial: { x: "-100%", opacity: 0 },
  animate: { 
    x: "100%", 
    opacity: [0, 1, 0],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 3
    }
  }
};

const floatingParticle = {
  animate: {
    y: [-20, 20, -20],
    x: [-10, 10, -10],
    rotate: [0, 180, 360],
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.7, 0.3],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Partner shipyard collection
const shipyardCollection = [
  {
    id: 'evo-yachts',
    name: 'EVO Yachts',
    description: 'Innovation & Contemporary Design',
    thumbnail: '/plus6.png',
    models: 15,
    established: '2006',
    heritage: 'Known for innovative expandable deck designs and contemporary styling.',
    signature: 'Transformable XTension bulwarks technology'
  },
  {
    id: 'maori',
    name: 'MAORI Yachts',
    description: 'Italian Excellence in Luxury Tenders',
    thumbnail: '/LEKKER 45-1.jpg',
    models: 12,
    established: '2008',
    heritage: 'Creators of luxury tender yachts with distinctive Italian styling and performance.',
    signature: 'Advanced composite construction techniques'
  },
  {
    id: 'reborn',
    name: 'Reborn Yachts',
    description: 'Dutch Craftsmanship & Future-Classic Design',
    thumbnail: '/CabinLowres-40R-5.jpg',
    models: 8,
    established: '2015',
    heritage: 'Boutique Dutch yacht builder focused on detail-oriented design and exceptional craftsmanship.',
    signature: 'Completely smooth hull without penetrations'
  },
  {
    id: 'omega',
    name: 'OMEGA Yachts',
    description: 'Performance Engineering Excellence',
    thumbnail: '/38bowriderlowres5.jpg',
    models: 6,
    established: '1995',
    heritage: 'Engineering-focused manufacturer known for high-performance speedboats.',
    signature: 'Racing heritage with performance optimization'
  },
  {
    id: 'lekker',
    name: 'LEKKER Boats',
    description: 'Dutch Design Meets Modern Luxury',
    thumbnail: '/LekkerPage-08.png',
    models: 5,
    established: '2018',
    heritage: 'Specializing in premium day boats with Dutch craftsmanship and timeless design.',
    signature: 'Aluminum construction with complete customization'
  },
  {
    id: 'windy',
    name: 'Windy',
    description: 'Scandinavian Excellence in Sport Cruisers',
    thumbnail: '/250301_Windy_SR40_020.JPG',
    models: 12,
    established: '1966',
    heritage: 'Scandinavian excellence in sport cruisers with superior build quality and handling, representing over 55 years of Nordic maritime tradition.',
    signature: 'Nordic design philosophy with performance focus'
  }
];

// Enhanced shimmer overlay
const shimmerOverlay = {
  initial: { x: "-100%", opacity: 0.5 },
  animate: { 
    x: "100%", 
    opacity: 0.5,
    transition: {
      repeat: Infinity,
      repeatType: "loop" as const,
      duration: 2,
      ease: "linear",
      repeatDelay: 5
    }
  }
};

const YachtCollection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
  const controls = useAnimation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCards, setVisibleCards] = useState(Array(shipyardCollection.length).fill(false));
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Motion values for enhanced effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Handle window resize for mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Mouse tracking for luxury effects
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);
  
  // Start animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      setIsLoaded(true);
    }
  }, [isInView, controls]);
  
  // Enhanced staggered reveal animation with individual card reveals
  useEffect(() => {
    // Select all card wrappers
    const cardWrappers = document.querySelectorAll('.mobile-card-wrapper');
    
    // Create observer for card animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Get the index from data attribute
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          
          // Add the observed class for CSS transitions
          entry.target.classList.add('observed');
          
          // Update the visible cards state
          setVisibleCards(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
          
          // Optional: unobserve after animation is triggered
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.2, // Increased threshold to ensure more of the card is visible
      rootMargin: "0px 0px -10% 0px"
    });
    
    // Observe each card with a delay to ensure initial rendering is complete
    setTimeout(() => {
      cardWrappers.forEach(card => {
        observer.observe(card);
      });
    }, 100);
    
    return () => {
      // Clean up
      cardWrappers.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);
  
  return (
    <motion.section 
      id="collection" 
      ref={sectionRef}
      className="py-32 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-navy-900 dark:via-navy-950 dark:to-navy-900"
      variants={luxuryContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
    >
      {/* Subtle luxury accents */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            variants={floatingParticle}
            animate="animate"
            transition={{ delay: i * 2 }}
          >
            <Sparkles className="h-2 w-2 text-gold-400/20" />
          </motion.div>
        ))}
      </div>

      {/* Elegant gradient overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(1200px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(212, 175, 55, 0.03), transparent 50%)`
        }}
        animate={{
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Premium accent lines */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-px opacity-30"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.5), transparent)' }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-px opacity-30"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.5), transparent)' }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 0.7 }}
      />
      
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          variants={luxuryContainer}
          className="mb-20"
        >
          <motion.div 
            variants={premiumReveal}
            className="text-center mb-6"
          >
            <motion.span 
              className="inline-block px-6 py-2 bg-gradient-to-r from-gold-500/20 to-gold-400/20 backdrop-blur-sm border border-gold-300/30 text-gold-700 dark:text-gold-300 rounded-full text-sm font-medium mb-6 relative overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(212, 175, 55, 0.5)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/20 to-transparent"
                variants={shimmerEffect}
                animate="animate"
              />
              <Crown className="inline w-4 h-4 mr-2" />
              Exclusive Fleet
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
                Partner
              </motion.span>
              {" "}
              <motion.span
                initial={{ opacity: 0, y: 50, rotateX: 90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: 'center bottom' }}
                className="inline-block text-gold-600 dark:text-gold-400"
              >
                Shipyards
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
              Discover our curated selection of premium yacht shipyards, each renowned for their exceptional craftsmanship and distinctive design philosophy that defines maritime luxury.
            </motion.p>
          </motion.div>
        </motion.div>
        
        {/* Enhanced Desktop Cards View */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {shipyardCollection.map((shipyard, index) => (
              <motion.div
                key={shipyard.id}
                variants={premiumReveal}
                transition={{ delay: index * 0.1 }}
                whileHover={magneticHover.hover}
                onHoverStart={() => setHoveredCard(shipyard.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative cursor-pointer"
              >
                <Link to={`/shipyard/${shipyard.id}`} className="block">
                  <motion.div 
                    className="overflow-hidden rounded-xl shadow-lg bg-white dark:bg-navy-900 border border-gray-100 dark:border-navy-800 h-full relative"
                    whileHover={{ 
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                      transition: { duration: 0.5 }
                    }}
                  >
                    {/* Image container */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"
                        whileHover={{ opacity: [0.6, 0.8] }}
                        transition={{ duration: 0.5 }}
                      />
                      <motion.img 
                        src={shipyard.thumbnail} 
                        alt={shipyard.name} 
                        className="w-full h-full object-cover transition-transform duration-700"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.8 }}
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                        <h3 className="text-2xl font-medium text-white mb-2">{shipyard.name}</h3>
                        <p className="text-white/80 text-sm">{shipyard.signature}</p>
                      </div>
                    </div>
                    
                    {/* Content section */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-2">{shipyard.name}</h3>
                      <div className="h-20">
                        <p className="text-navy-800 dark:text-gray-300 text-sm mb-4 line-clamp-3">{shipyard.heritage}</p>
                      </div>
                      
                      <div className="flex items-center justify-between border-t border-gray-100 dark:border-navy-800 pt-4 mt-4">
                        <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">
                          View Collection
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Mobile Stacked Cards - Only shown on mobile */}
        <div className="md:hidden">
          {/* Custom mobile cards layout with push effect */}
          <div className="mobile-cards-container py-5">
            {shipyardCollection.map((shipyard, index) => (
              <div
                key={shipyard.id}
                className={`mobile-card-wrapper ${visibleCards[index] ? 'observed' : ''}`}
                data-index={index}
              >
                <Link to={`/shipyard/${shipyard.id}`} className="block">
                  <div className="mobile-card">
                    <div className="relative h-48 overflow-hidden rounded-t-xl">
                      {/* Background shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent shine-effect"></div>
                      
                      <img 
                        src={shipyard.thumbnail} 
                        alt={shipyard.name}
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                    </div>
                    
                    <div className="p-5 bg-white dark:bg-navy-800/50 rounded-b-xl">
                      <h3 className="text-xl font-playfair font-bold text-navy-900 dark:text-white mb-2 card-title">
                        {shipyard.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 card-description">
                        {shipyard.heritage}
                      </p>
                      
                      <div className="flex items-center justify-between card-footer">
                        <div className="flex items-center">
                          <Award className="w-4 h-4 text-gold-500 mr-2" />
                          <span className="text-sm text-navy-700 dark:text-gray-400">
                            {shipyard.signature}
                          </span>
                        </div>
                        
                        <div className="text-gold-500 flex items-center card-cta">
                          <span className="text-sm font-medium mr-1">Explore</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        
        {/* Browse all button - added more vertical margin (mt-16 mb-8) */}
        <motion.div 
          className="flex justify-center mt-16 mb-8"
          variants={fadeInUp}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Link to="/collection">
              <Button className="bg-gradient-to-r from-navy-900 to-navy-800 dark:from-gold-600 dark:to-gold-500 text-white dark:text-navy-950 rounded-full px-10 py-6 text-lg font-medium relative overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300">
                <span className="flex items-center gap-3 relative z-10">
                  <Star className="w-5 h-5 text-gold-400 dark:text-navy-900" />
                  <span>View All Shipyards</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <motion.div 
                  className="absolute inset-0 w-full h-full opacity-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ 
                    x: ["0%", "100%"], 
                    opacity: [0, 0.7, 0] 
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    repeatType: "loop",
                    repeatDelay: 1
                  }}
                />
              </Button>
            </Link>
            <motion.div 
              className="absolute -inset-1 rounded-full opacity-0 blur-md"
              animate={{ 
                opacity: [0, 0.5, 0],
                boxShadow: [
                  "0 0 0 rgba(0,0,0,0)", 
                  "0 0 30px rgba(212,175,55,0.4)", 
                  "0 0 0 rgba(0,0,0,0)"
                ] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatType: "loop" 
              }}
            />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Enhanced CSS for individual card animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .mobile-cards-container {
            position: relative;
            padding: 50px 10px;
            overflow: visible;
            perspective: 1000px;
          }
          
          .mobile-card-wrapper {
            position: relative;
            margin-bottom: 50px; /* Increased space between cards */
            transform: translateY(60px) scale(0.95);
            opacity: 0;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            border-radius: 12px;
            transition: all 0.7s cubic-bezier(0.23, 1, 0.32, 1);
            transform-style: preserve-3d;
            will-change: transform, opacity;
            z-index: 1;
          }
          
          .mobile-card-wrapper.observed {
            transform: translateY(0) scale(1);
            opacity: 1;
            z-index: 2;
          }
          
          /* Card hover/touch effect */
          .mobile-card-wrapper:active {
            transform: translateY(-15px) scale(1.02);
            z-index: 10;
          }
          
          /* Remove cascading effect */
          /* Each card animates independently */
          
          .mobile-card {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            transform: translateZ(0);
            will-change: transform;
            transition: transform 0.5s, box-shadow 0.5s;
            box-shadow: 0px 5px 15px rgba(0,0,0,0.1);
          }
          
          .mobile-card-wrapper.observed .mobile-card {
            box-shadow: 0px 10px 30px rgba(0,0,0,0.15);
          }
          
          .mobile-card-wrapper:active .mobile-card {
            box-shadow: 0px 15px 40px rgba(0,0,0,0.2);
          }
          
          /* Animate internal elements */
          .card-title, .card-description, .card-footer {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
            transition-delay: 0.1s;
          }
          
          .card-description {
            transition-delay: 0.2s;
          }
          
          .card-footer {
            transition-delay: 0.3s;
          }
          
          .mobile-card-wrapper.observed .card-title,
          .mobile-card-wrapper.observed .card-description,
          .mobile-card-wrapper.observed .card-footer {
            opacity: 1;
            transform: translateY(0);
          }
          
          /* Animated shine effect */
          .shine-effect {
            transform: translateX(-100%) skewX(-15deg);
            animation: none;
            pointer-events: none;
          }
          
          .mobile-card-wrapper.observed .shine-effect {
            animation: shine 3s ease-in-out;
            animation-delay: 0.3s;
          }
          
          @keyframes shine {
            0% {
              transform: translateX(-100%) skewX(-15deg);
              opacity: 0;
            }
            10% {
              opacity: 0.5;
            }
            100% {
              transform: translateX(200%) skewX(-15deg);
              opacity: 0;
            }
          }
          
          /* Ensure dark mode compatibility */
          @media (prefers-color-scheme: dark) {
            .mobile-card {
              background: rgba(16, 24, 64, 0.5);
            }
          }
        `
      }} />
    </motion.section>
  );
};

export default YachtCollection; 