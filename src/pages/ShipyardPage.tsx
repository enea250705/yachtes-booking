import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  ChevronRight, Map, Anchor, Ship, Award, Calendar, Users, Maximize, 
  ExternalLink, Gauge, Star, Check, Globe, ArrowRight, ArrowDown, 
  Mail, Phone, Sparkles, Shield, Sailboat, Wind, ChevronDown, Trophy, Book
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { shipyardsData, ShipyardData } from '@/data/shipyards';
import { shipyardsExtendedData } from '@/data/shipyardsExtended';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const shimmer = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: [0, 0.05, 0], 
    x: [50, 0, -50],
    transition: { 
      repeat: Infinity,
      duration: 5,
      ease: "easeInOut",
      repeatType: "loop" as const
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

const ShipyardPage: React.FC = () => {
  const { shipyardId } = useParams<{ shipyardId: string }>();
  const [isLoaded, setIsLoaded] = useState(false);
  const [shipyard, setShipyard] = useState<ShipyardData | null>(null);
  const [extendedShipyard, setExtendedShipyard] = useState<typeof shipyardsExtendedData[string] | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { ref: sectionRef, inView } = useScrollAnimation();
  const modelsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // For parallax effect
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // Transform values for parallax
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    if (shipyardId && shipyardsData[shipyardId]) {
      setShipyard(shipyardsData[shipyardId]);
      
      // Check if extended data exists
      if (shipyardsExtendedData[shipyardId]) {
        setExtendedShipyard(shipyardsExtendedData[shipyardId]);
      }
      
      // Set the first model as selected by default
      if (shipyardsData[shipyardId].models.length > 0) {
        setSelectedModel(shipyardsData[shipyardId].models[0].id);
      }
      
      // SEO Enhancement - Update document title with shipyard name
      document.title = `${shipyardsData[shipyardId].name} | Luxury Yachts | Vista Oasis`;
      
      // Add meta description for SEO
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', 
        `Discover luxury yachts by ${shipyardsData[shipyardId].name}. ${shipyardsData[shipyardId].headline}`
      );
      
      // Add structured data for SEO
      const structuredData = {
        "@context": "https://schema.org/",
        "@type": "Organization",
        "name": shipyardsData[shipyardId].name,
        "description": shipyardsData[shipyardId].description,
        "url": window.location.href,
        "logo": extendedShipyard?.logo || shipyardsData[shipyardId].image,
        "image": shipyardsData[shipyardId].image,
        "foundingDate": extendedShipyard?.established,
        "sameAs": [
          "https://www.facebook.com/vistaoasis",
          "https://www.instagram.com/vistaoasis",
          "https://www.linkedin.com/company/vistaoasis"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressCountry": extendedShipyard?.location || "United States",
          "streetAddress": extendedShipyard?.headquarters
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "offerCount": shipyardsData[shipyardId].models.length,
          "offers": shipyardsData[shipyardId].models.map(model => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": model.name,
              "description": model.shortDesc,
              "image": model.thumbnail
            }
          }))
        }
      };
      
      let jsonLdScript = document.querySelector('#shipyard-jsonld');
      if (!jsonLdScript) {
        jsonLdScript = document.createElement('script');
        jsonLdScript.id = 'shipyard-jsonld';
        (jsonLdScript as HTMLScriptElement).type = 'application/ld+json';
        document.head.appendChild(jsonLdScript);
      }
      jsonLdScript.textContent = JSON.stringify(structuredData);
    }

    return () => clearTimeout(timer);
  }, [shipyardId, extendedShipyard]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const getSelectedModelData = () => {
    if (!shipyard || !selectedModel) return null;
    return shipyard.models.find(model => model.id === selectedModel) || null;
  };

  const handleModelChange = (modelId: string) => {
    setSelectedModel(modelId);
    setActiveImageIndex(0); // Reset the active image when changing models
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  
  const scrollToModels = () => {
    modelsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const selectedModelData = getSelectedModelData();

  if (!shipyard) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-navy-950 to-navy-900">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-20">
          <h1 className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-3">Shipyard Not Found</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mb-6"></div>
          <p className="mt-4 text-blue-100 text-lg">The shipyard you're looking for (ID: {shipyardId}) doesn't exist or has been removed.</p>
          <Link 
            to="/collection" 
            className="mt-8 inline-flex items-center text-gold-400 font-medium hover:text-gold-300 group"
          >
            <ArrowRight className="mr-2 h-5 w-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Shipyards</span>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 to-navy-900 overflow-hidden">
      <Navbar />
      
      {/* Modern Hero Section with Centered Content */}
      <div ref={heroRef} className="relative h-[100vh] w-full overflow-hidden flex flex-col items-center justify-center">
        {/* Background image with overlay */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${shipyard.image})`, 
            y: bgY,
            scale: scale,
            opacity: opacityHero
          }}
          initial={{ scale: 1.1, opacity: 0.5 }}
          animate={{ 
            scale: isLoaded ? 1 : 1.1, 
            opacity: isLoaded ? 1 : 0.5,
            transition: { duration: 1.8, ease: [0.25, 0.1, 0.25, 1.0] }
          }}
        />
        
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/70 to-navy-900/50 z-0"></div>
        
        {/* Grain texture overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] z-0"></div>
        
        {/* Back to Collection button */}
        <div className="absolute top-28 sm:top-32 left-0 right-0 flex justify-center z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link 
              to="/collection" 
              className="px-6 py-2 bg-navy-800/40 backdrop-blur-md rounded-full text-sm uppercase tracking-wider inline-block hover:bg-navy-800/60 transition-all duration-300 border border-gold-500/20 group"
            >
              <span className="flex items-center text-white">
                <ArrowRight className="w-4 h-4 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
                Back to Collection
              </span>
            </Link>
          </motion.div>
        </div>
        
        {/* Main centered content */}
        <motion.div
          className="relative container mx-auto px-4 z-10 text-center max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Brand logo/icon */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mb-6 sm:mb-8 relative"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-gold-600 to-gold-400 p-0.5 mx-auto">
              <div className="w-full h-full rounded-full bg-navy-900/80 backdrop-blur-sm flex items-center justify-center">
                <Sailboat className="h-10 w-10 sm:h-12 sm:w-12 text-gold-400" />
              </div>
            </div>
            <motion.div
              className="absolute inset-0 rounded-full -z-10"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.15, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                repeatType: "loop"
              }}
              style={{
                background: 'radial-gradient(circle, rgba(234,179,8,0.3) 0%, rgba(234,179,8,0) 70%)'
              }}
            />
          </motion.div>
          
          {/* Shipyard name */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold font-playfair mb-4 sm:mb-6 text-white drop-shadow-lg"
          >
            {shipyard.name}
          </motion.h1>
          
          {/* Decorative line */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-1 bg-gradient-to-r from-gold-400/0 via-gold-400 to-gold-400/0 mx-auto mb-6 sm:mb-8"
          />
          
          {/* Headline text */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto font-light mb-10 sm:mb-12 text-white/90"
          >
              {shipyard.headline}
          </motion.p>
          
          {/* Action buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Button 
              className="w-full sm:w-auto bg-gold-500 hover:bg-gold-600 text-navy-900 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium transition-all duration-300 group shadow-xl shadow-gold-500/20"
              onClick={scrollToModels}
            >
              <span>Explore Models</span>
              <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <Button 
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base transition-all duration-300 group"
              onClick={scrollToAbout}
            >
              <span>About {shipyard.name}</span>
              <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div 
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-center justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div 
              className="w-1.5 h-1.5 bg-gold-400 rounded-full"
              animate={{ 
                y: [0, 12, 0],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* About Section */}
      <section ref={aboutRef} className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-10 sm:mb-16">
              <div className="inline-block mb-4 sm:mb-6">
                <div className="bg-gold-400/20 rounded-full p-2 sm:p-3">
                  <Anchor className="h-6 w-6 sm:h-8 sm:w-8 text-gold-400" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-semibold text-white mb-4 sm:mb-6">
                About {shipyard.name}
              </h2>
              <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-4 sm:mb-6"></div>
              <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-6 sm:mb-10">
                {extendedShipyard?.fullDescription?.slice(0, 160) || shipyard.description}...
              </p>
            </div>
            
            <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-16">
              <div className="lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 text-blue-100">
                      {extendedShipyard?.fullDescription || shipyard.description}
                    </p>
                    
                  {extendedShipyard?.story && (
                      <div className="mb-8">
                      <h3 className="text-2xl font-medium text-white mb-4 flex items-center">
                        <span className="bg-gold-400/10 rounded-full p-1 mr-3">
                          <Book className="h-5 w-5 text-gold-400" />
                        </span>
                          Our Story
                        </h3>
                      <p className="text-blue-100 leading-relaxed">
                          {extendedShipyard.story}
                        </p>
                      </div>
                    )}
                    
                  {/* Specialties Section */}
                  {extendedShipyard?.specialties && extendedShipyard.specialties.length > 0 && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="mt-6 sm:mt-10"
                    >
                      <h3 className="text-xl sm:text-2xl font-medium text-white mb-4 sm:mb-6 flex items-center">
                        <span className="bg-gold-400/10 rounded-full p-1 mr-2 sm:mr-3">
                          <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-gold-400" />
                        </span>
                        Our Specialties
                          </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                          {extendedShipyard.specialties.map((specialty, index) => (
                          <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            viewport={{ once: true }}
                            className="flex items-start p-3 sm:p-4 bg-navy-800/30 backdrop-blur-sm rounded-lg border border-white/10 hover:border-gold-400/30 transition-all duration-300 hover:transform hover:-translate-y-1"
                          >
                            <div className="bg-gold-400/20 rounded-full p-1 mr-2 sm:mr-3 mt-0.5">
                              <Check className="w-3 h-3 sm:w-4 sm:h-4 text-gold-400" />
                            </div>
                            <div>
                              <span className="text-white text-sm sm:text-base">{specialty}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  
                  {/* Values Section */}
                  {extendedShipyard?.values && extendedShipyard.values.length > 0 && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="mt-6 sm:mt-10"
                    >
                      <h3 className="text-xl sm:text-2xl font-medium text-white mb-4 sm:mb-6 flex items-center">
                        <span className="bg-gold-400/10 rounded-full p-1 mr-2 sm:mr-3">
                          <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-gold-400" />
                        </span>
                        Our Values
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                          {extendedShipyard.values.map((value, index) => (
                          <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            viewport={{ once: true }}
                            className="p-3 sm:p-4 bg-navy-800/30 backdrop-blur-sm rounded-lg border border-white/10 hover:border-gold-400/30 transition-all duration-300 hover:transform hover:-translate-y-1"
                          >
                            <div className="flex items-center mb-2">
                              <div className="bg-gold-400/20 rounded-full p-1 sm:p-2 mr-2 sm:mr-3">
                                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-gold-400" />
                              </div>
                              <h4 className="font-medium text-white text-sm sm:text-base">{value.title}</h4>
                            </div>
                            <p className="text-blue-100 pl-7 sm:pl-10 text-sm sm:text-base">{value.description}</p>
                          </motion.div>
                          ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </div>
              
              <div className="lg:w-1/2">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative"
                >
                  <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-16 h-16 sm:w-24 sm:h-24 border-l-2 border-t-2 border-gold-400/70"></div>
                  <img 
                    src={extendedShipyard?.featuredImage || shipyard.image} 
                    alt={shipyard.name} 
                    className="w-full h-auto object-cover rounded-lg shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 border-r-2 border-b-2 border-gold-400/70"></div>
                </motion.div>
                
                {extendedShipyard?.website && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mt-8 sm:mt-12 p-4 sm:p-6 bg-navy-800/40 backdrop-blur-sm rounded-lg border border-white/10"
                  >
                    <h3 className="text-lg sm:text-xl font-medium text-white mb-3 sm:mb-4 flex items-center">
                      <span className="bg-gold-400/10 rounded-full p-1 mr-2 sm:mr-3">
                        <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-gold-400" />
                      </span>
                      Contact Information
                    </h3>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-center">
                        <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-gold-400 mr-2 sm:mr-3 flex-shrink-0" />
                        <a href={`https://${extendedShipyard.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-gold-400 transition-colors text-sm sm:text-base truncate">
                          {extendedShipyard.website}
                        </a>
                      </div>
                      {extendedShipyard?.headquarters && (
                        <div className="flex items-center">
                          <Map className="h-4 w-4 sm:h-5 sm:w-5 text-gold-400 mr-2 sm:mr-3 flex-shrink-0" />
                          <span className="text-blue-100 text-sm sm:text-base">{extendedShipyard.headquarters}</span>
                        </div>
                      )}
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-gold-400 mr-2 sm:mr-3 flex-shrink-0" />
                        <a href="mailto:info@vistaoasis.com" className="text-blue-100 hover:text-gold-400 transition-colors text-sm sm:text-base">
                          info@vistaoasis.com
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-gold-400 mr-2 sm:mr-3 flex-shrink-0" />
                        <a href="tel:+18001234567" className="text-blue-100 hover:text-gold-400 transition-colors text-sm sm:text-base">
                          
                        </a>
                      </div>
                    </div>
                  </motion.div>
                    )}
                  </div>
                </div>
          </motion.div>
        </div>
      </section>

      {/* Models Section */}
      <section ref={modelsRef} className="py-12 sm:py-20 bg-gradient-to-b from-navy-900/50 to-navy-950/80">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-10 sm:mb-16"
          >
            <div className="inline-block mb-4 sm:mb-6">
              <div className="bg-gold-400/20 rounded-full p-2 sm:p-3">
                <Ship className="h-6 w-6 sm:h-8 sm:w-8 text-gold-400" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-semibold text-white mb-4 sm:mb-6">
              {shipyard.name} Fleet
                  </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-4 sm:mb-6"></div>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              Explore our collection of exceptional vessels, each crafted with precision and uncompromising quality.
                  </p>
          </motion.div>
                
                {shipyard.models.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {shipyard.models.map((model, index) => (
                <motion.div
                  key={model.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ y: -8 }}
                  className="h-full"
                >
                      <Link 
                        to={`/model/${model.id}`}
                    className="block bg-navy-800/40 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-white/10 hover:border-gold-400/30 h-full flex flex-col"
                      >
                    <div className="h-60 sm:h-80 relative overflow-hidden">
                          <img 
                            src={model.thumbnail} 
                            alt={model.name} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            loading={index > 2 ? "lazy" : "eager"}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent opacity-70"></div>
                      <div className="absolute inset-0 bg-navy-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                        <h3 className="text-xl sm:text-2xl font-playfair font-medium text-white mb-2">{model.name}</h3>
                        <div className="w-0 h-0.5 bg-gold-400 transition-all duration-500 group-hover:w-20 sm:group-hover:w-24"></div>
                      </div>
                      
                      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/10 backdrop-blur-md rounded-full py-1 px-2 sm:px-3 text-white text-xs font-medium">
                        {model.length}
                      </div>
                          </div>
                    <div className="p-4 sm:p-6 flex-grow flex flex-col items-center sm:items-start">
                      <p className="text-blue-100 mb-5 sm:mb-6 flex-grow text-sm sm:text-base text-center sm:text-left w-full">{model.shortDesc}</p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2 mb-5 sm:mb-6 border-t border-white/10 pt-4 w-full">
                        <div className="flex flex-col items-center text-center text-xs text-blue-200">
                          <Maximize className="w-4 h-4 mb-1 text-gold-400/70" />
                          <span className="font-medium">{model.length.split(' ')[0]}</span>
                          <span className="text-[10px] text-blue-300/50 uppercase">Length</span>
                        </div>
                        <div className="flex flex-col items-center text-center text-xs text-blue-200">
                          <Users className="w-4 h-4 mb-1 text-gold-400/70" />
                          <span className="font-medium">{model.specs.guests}</span>
                          <span className="text-[10px] text-blue-300/50 uppercase">Guests</span>
                            </div>
                        <div className="flex flex-col items-center text-center text-xs text-blue-200">
                          <Ship className="w-4 h-4 mb-1 text-gold-400/70" />
                          <span className="font-medium">{model.specs.cabins}</span>
                          <span className="text-[10px] text-blue-300/50 uppercase">Cabins</span>
                            </div>
                        <div className="flex flex-col items-center text-center text-xs text-blue-200">
                          <Gauge className="w-4 h-4 mb-1 text-gold-400/70" />
                          <span className="font-medium">{model.specs.maxSpeed.split(' ')[0]}</span>
                          <span className="text-[10px] text-blue-300/50 uppercase">Knots</span>
                            </div>
                          </div>
                      <div className="flex items-center justify-center w-full sm:justify-start text-gold-400 font-medium group-hover:text-gold-300 text-sm sm:text-base border-t border-white/10 pt-4 sm:border-0 sm:pt-0">
                        <span>Explore Details</span>
                            <ChevronRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                </motion.div>
                    ))}
                  </div>
                ) : (
            <div className="text-center p-6 sm:p-10 bg-navy-800/50 backdrop-blur-sm rounded-lg shadow-lg border border-white/10">
              <Ship className="h-10 w-10 sm:h-12 sm:w-12 text-blue-300/50 mx-auto mb-4" />
              <p className="text-base sm:text-lg text-blue-100">No models are currently available for this shipyard.</p>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-blue-200/80">Please contact us for more information about {shipyard.name} vessels.</p>
                  </div>
                )}
          </div>
      </section>
          
          {/* Call to Action */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gradient-to-r from-gold-900 via-gold-800 to-gold-900 rounded-xl p-8 sm:p-10 md:p-16 text-white text-center shadow-2xl shadow-gold-900/20 overflow-hidden relative"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-200 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-200 to-transparent"></div>
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 sm:mb-8 border border-gold-300/20"
              >
                <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-gold-300" />
              </motion.div>
              
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-semibold mb-4 sm:mb-6">
              Interested in {shipyard.name} Vessels?
            </h3>
              
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "60px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-gold-400 to-gold-200 mx-auto mb-6 sm:mb-8"
              />
              
              <p className="text-base sm:text-lg text-gold-100 max-w-3xl mx-auto mb-8 sm:mb-10">
              Our yacht specialists can guide you through the entire process, from model selection to customization options and delivery.
            </p>
              
            <Link 
              to="/contact" 
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-navy-900 hover:bg-gold-50 rounded-full text-sm sm:text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl shadow-navy-900/20 hover:shadow-navy-900/30 group"
            >
                <span>Contact Our Experts</span>
                <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ShipyardPage; 