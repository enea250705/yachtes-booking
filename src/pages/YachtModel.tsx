import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronRight, Anchor, Ship, Calendar, Users, Maximize, ExternalLink, Check, Layers, LifeBuoy, Wind, Droplet, Gauge, ChevronDown, Compass, Sofa, Cpu, ScanBarcode, ArrowLeft, Sparkles, Star, CheckCircle, Award, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { shipyardsData, ShipyardData, YachtModel } from '@/data/shipyards';
import { shipyardsExtendedData } from '@/data/shipyardsExtended';

// Define interface for shipyard extended data model
interface ExtendedYachtModel {
  id: string;
  name: string;
  thumbnail: string;
  shortDesc: string;
  fullDesc: string;
  specs: {
    length: string;
    beam: string;
    draft: string;
    displacement: string;
    fuel: string;
    water: string;
    maxSpeed: string;
    cruisingSpeed: string;
    range: string;
    engines: string;
    guests: number;
    cabins: number;
    crew: number;
  };
  gallery: string[];
  features: Record<string, string[]>;
  materials: string[];
}

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

const YachtModelPage: React.FC = () => {
  const { modelId } = useParams<{ modelId: string }>();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [modelData, setModelData] = useState<YachtModel | null>(null);
  const [shipyardData, setShipyardData] = useState<ShipyardData | null>(null);
  const [extendedModelData, setExtendedModelData] = useState<ExtendedYachtModel | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [activeFeatureCategory, setActiveFeatureCategory] = useState('Exterior');
  const [scrollY, setScrollY] = useState(0);
  
  // Add state for image gallery modal
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [activeModalImage, setActiveModalImage] = useState(0);
  
  // Refs for parallax effect
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // Transform values for parallax
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Function to handle image gallery navigation
  const navigateGallery = (direction: 'next' | 'prev') => {
    if (!gallery || gallery.length === 0) return;
    
    if (direction === 'next') {
      setActiveModalImage((prev) => (prev + 1) % gallery.length);
    } else {
      setActiveModalImage((prev) => (prev - 1 + gallery.length) % gallery.length);
    }
  };

  useEffect(() => {
    // Scroll to top on page load/refresh/navigation
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // SEO Enhancement - Update document title with yacht model name
    if (modelData) {
      document.title = `${modelData.name} | Luxury Yacht by ${shipyardData?.name || 'Vista Oasis'}`;
      
      // Add meta description for SEO
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', 
        `Discover the luxurious ${modelData.name} yacht by ${shipyardData?.name || 'Vista Oasis'}. ${modelData.shortDesc}`
      );
      
      // Add structured data for SEO
      const structuredData = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": `${modelData.name} Yacht`,
        "description": modelData.shortDesc,
        "brand": {
          "@type": "Brand",
          "name": shipyardData?.name || 'Vista Oasis'
        },
        "offers": {
          "@type": "Offer",
          "url": window.location.href,
          "priceCurrency": "USD",
          "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
          "availability": "https://schema.org/InStock"
        },
        "image": gallery?.[0] || modelData.thumbnail
      };
      
      let jsonLdScript = document.querySelector('#yacht-jsonld');
      if (!jsonLdScript) {
        jsonLdScript = document.createElement('script');
        jsonLdScript.id = 'yacht-jsonld';
        (jsonLdScript as HTMLScriptElement).type = 'application/ld+json';
        document.head.appendChild(jsonLdScript);
      }
      jsonLdScript.textContent = JSON.stringify(structuredData);
    }
    
    // Find the model in all shipyards
    let foundModel: YachtModel | null = null;
    let foundShipyard: ShipyardData | null = null;

    if (modelId) {
      console.log("Looking for model with ID:", modelId);
      
      // Loop through all shipyards to find the model
      Object.values(shipyardsData).forEach(shipyard => {
        const model = shipyard.models.find(m => m.id === modelId);
        if (model) {
          console.log(`Found model ${model.name} in shipyard ${shipyard.name}`);
          foundModel = model;
          foundShipyard = shipyard;
          
          // Check if extended data exists
          if (shipyardsExtendedData[shipyard.id]) {
            const extendedShipyard = shipyardsExtendedData[shipyard.id];
            const extendedModel = extendedShipyard.models.find(m => m.id === modelId);
            if (extendedModel) {
              console.log(`Found extended data for model ${extendedModel.name}`);
              setExtendedModelData(extendedModel);
            }
          }
        }
      });

      if (foundModel && foundShipyard) {
        setModelData(foundModel);
        setShipyardData(foundShipyard);
      } else {
        console.error(`Model with ID ${modelId} not found in any shipyard`);
      }
    }

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [modelId]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    
    // Set default category when Features tab is selected
    if (tab === 'features' && modelData?.features) {
      // Get the first category key from the features object
      const firstCategory = Object.keys(modelData.features)[0];
      setActiveFeatureCategory(firstCategory || 'Technical Specifications');
    }
  };

  if (!modelData || !shipyardData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-navy-950 to-navy-900">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-20">
          <h1 className="text-3xl md:text-4xl font-playfair font-semibold text-blue-900 mb-3">Yacht Model Not Found</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-900 to-blue-600 mb-6"></div>
          <p className="mt-4 text-slate-600 text-lg">The yacht model you're looking for (ID: {modelId}) doesn't exist or has been removed.</p>
          <Link 
            to="/collection" 
            className="mt-8 inline-flex items-center text-blue-700 font-medium hover:text-blue-900 group"
          >
            <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <span>Return to Shipyards</span>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Ensure gallery exists
  const gallery = modelData.gallery || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 to-navy-900 overflow-hidden">
      <Navbar />
      
      {/* Completely redesigned hero section with enhanced responsiveness */}
      <div ref={heroRef} className="relative min-h-[100vh] w-full overflow-hidden pb-20 sm:pb-24 md:pb-32">
        {/* Full-screen background image with parallax effect */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${gallery?.[0] || modelData.thumbnail})`, 
            y: bgY,
            scale: scale,
            opacity: opacityHero
          }}
          initial={{ scale: 1.15, opacity: 0.3 }}
          animate={{ 
            scale: isLoaded ? 1 : 1.15, 
            opacity: isLoaded ? 1 : 0.3,
            transition: { duration: 2.2, ease: [0.25, 0.1, 0.25, 1.0] }
          }}
        />
        
        {/* Multi-layered gradient overlay for optimal text readability across devices */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-navy-900/40 to-navy-950/90 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-transparent to-navy-950/80 z-0"></div>
        
        {/* Animated shimmer overlay for luxury effect */}
          <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          animate={{ 
            x: [100, 0, -100],
            opacity: [0, 0.08, 0], 
          }}
          transition={{ 
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
            repeatType: "loop"
          }}
        />
        
        {/* Enhanced grain texture for depth */}
        <div className="absolute inset-0 opacity-[0.15] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] z-0"></div>
        
        {/* Responsive navigation breadcrumb */}
        <div className="absolute top-20 sm:top-24 md:top-28 left-4 sm:left-6 lg:left-8 z-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Link 
                to={`/shipyard/${shipyardData.id}`}
              className="inline-flex items-center text-white/80 hover:text-white transition-colors group backdrop-blur-sm bg-white/5 px-3 py-2 sm:px-4 sm:py-2 rounded-full border border-white/10 text-sm sm:text-base"
            >
              <ArrowLeft className="mr-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:-translate-x-1 transition-transform" />
              <span className="hidden sm:inline">{shipyardData.name}</span>
              <span className="sm:hidden">Back</span>
              </Link>
            </motion.div>
        </div>
        
        {/* Main content with improved mobile layout and spacing */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 sm:px-6 pt-20 sm:pt-24 md:pt-28 lg:pt-32">
          <div className="container mx-auto text-center max-w-6xl">
            {/* Shipyard badge - enhanced for mobile */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6 sm:mb-8 lg:mb-10"
            >
              <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-navy-800/50 backdrop-blur-lg rounded-full text-xs sm:text-sm uppercase tracking-wider hover:bg-navy-800/70 transition-all duration-300 border border-gold-500/30 group cursor-pointer">
                <Ship className="w-3 h-3 sm:w-4 sm:h-4 mr-2 opacity-90 group-hover:animate-pulse text-gold-400" />
                <span className="text-white font-medium">{shipyardData.name}</span>
                <div className="ml-3 w-2 h-2 bg-gold-400 rounded-full animate-pulse"></div>
              </div>
            </motion.div>
            
            {/* Yacht type badge - responsive sizing */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-3 sm:mb-4 lg:mb-6 inline-block"
            >
              <div className="text-xs sm:text-sm uppercase tracking-[0.2em] bg-gold-500/20 text-gold-300 rounded-full px-3 py-1 sm:px-4 sm:py-2 backdrop-blur-sm border border-gold-500/40 font-medium">
                Luxury Yacht
              </div>
            </motion.div>
            
            {/* Model name - dramatically improved responsive typography */}
            <motion.h1 
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-playfair mb-3 sm:mb-4 lg:mb-6 text-center text-white drop-shadow-2xl max-w-5xl mx-auto leading-[1.1] tracking-tight"
            >
              {modelData.name}
            </motion.h1>
            
            {/* Enhanced decorative separator with animation */}
            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100px", opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="h-0.5 sm:h-1 bg-gradient-to-r from-gold-400/0 via-gold-400 to-gold-400/0 mx-auto mb-3 sm:mb-4 lg:mb-6 rounded-full"
            />
            
            {/* Model subname with enhanced styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mb-4 sm:mb-6 lg:mb-8 text-center"
            >
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-gold-300 font-light tracking-wide">
                {modelData.name.split(' ')[0]} • {modelData.length.split(' ')[0]}
              </span>
            </motion.div>
            
            {/* Description with improved mobile readability */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto font-light mb-6 sm:mb-8 lg:mb-10 text-center text-white/95 leading-relaxed px-2"
            >
              {modelData.shortDesc}
            </motion.p>
            
            {/* Key specifications with enhanced mobile layout */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mb-6 sm:mb-8 lg:mb-10"
            >
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-8 max-w-4xl mx-auto">
                {/* Length */}
                <div className="flex flex-col items-center text-center group">
                  <motion.div 
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-2 border border-gold-500/30 group-hover:border-gold-400/60 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Maximize className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gold-400" />
                  </motion.div>
                  <span className="text-xs uppercase tracking-wide text-white/90 mb-1 font-medium">Length</span>
                  <span className="text-xs sm:text-sm lg:text-base font-semibold text-white">{modelData.length}</span>
              </div>
              
                {/* Guests */}
                <div className="flex flex-col items-center text-center group">
                  <motion.div 
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-2 border border-gold-500/30 group-hover:border-gold-400/60 transition-all duration-303"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gold-400" />
                  </motion.div>
                  <span className="text-xs uppercase tracking-wide text-white/90 mb-1 font-medium">Guests</span>
                  <span className="text-xs sm:text-sm lg:text-base font-semibold text-white">{modelData.specs.guests}</span>
              </div>
              
                {/* Max Speed */}
                <div className="flex flex-col items-center text-center group">
                  <motion.div 
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-2 border border-gold-500/30 group-hover:border-gold-400/60 transition-all duration-303"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Gauge className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gold-400" />
                  </motion.div>
                  <span className="text-xs uppercase tracking-wide text-white/90 mb-1 font-medium">Max Speed</span>
                  <span className="text-xs sm:text-sm lg:text-base font-semibold text-white">{modelData.specs.maxSpeed}</span>
              </div>
              
                {/* Cabins */}
                <div className="flex flex-col items-center text-center group">
                  <motion.div 
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-2 border border-gold-500/30 group-hover:border-gold-400/60 transition-all duration-303"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <Layers className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gold-400" />
                  </motion.div>
                  <span className="text-xs uppercase tracking-wide text-white/90 mb-1 font-medium">Cabins</span>
                  <span className="text-xs sm:text-sm lg:text-base font-semibold text-white">{modelData.specs.cabins}</span>
                </div>
              </div>
            </motion.div>
            
            {/* Action buttons with improved mobile layout */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6 px-4 sm:px-0"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
              <Button 
                  className="w-full sm:w-auto bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-900 px-5 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300 group shadow-xl shadow-gold-500/30 hover:shadow-2xl hover:shadow-gold-500/40 border border-gold-400/20"
                onClick={() => window.scrollTo({ top: 700, behavior: 'smooth' })}
              >
                  <span>Discover Experience</span>
                  <ChevronDown className="ml-2 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 group-hover:translate-y-1 transition-transform" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-5 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-full text-sm sm:text-base lg:text-lg transition-all duration-300 group font-medium"
                  onClick={() => setShowGalleryModal(true)}
                >
                  <span>View Gallery</span>
                  <Maximize className="ml-2 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
          </div>
        </div>
        
        {/* Floating navigation dots (hidden on mobile) */}
        <div className="absolute right-6 lg:right-8 top-1/2 transform -translate-y-1/2 z-20 hidden lg:flex flex-col space-y-3">
          {['Hero', 'Specs', 'Gallery', 'Details'].map((section, index) => (
          <motion.div 
              key={section}
              className="w-3 h-3 rounded-full border-2 border-white/30 cursor-pointer hover:border-gold-400 transition-colors group relative"
              whileHover={{ scale: 1.2 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8 + index * 0.1 }}
            >
              <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                <span className="text-white text-sm bg-navy-800/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  {section}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Specifications Strip */}
      <div className="relative -mt-8 sm:-mt-12 md:-mt-16 z-10 container mx-auto px-4 mb-12 sm:mb-16">
        <div className="bg-gradient-to-r from-navy-800/90 via-navy-700/90 to-navy-800/90 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            {extendedModelData?.specs && (
              <>
                <div className="flex flex-col items-center text-center p-4 sm:p-6 lg:p-8 border-r border-b md:border-b-0 border-white/10">
                  <div className="bg-navy-800/80 rounded-full p-2 sm:p-3 mb-3 sm:mb-4">
                    <Maximize className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-gold-400" />
                  </div>
                  <h3 className="text-white font-medium text-base sm:text-lg lg:text-xl mb-1">Length</h3>
                  <p className="text-blue-100 text-sm sm:text-base lg:text-lg font-light">{extendedModelData.specs.length}</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 sm:p-6 lg:p-8 border-b md:border-b-0 md:border-r border-white/10">
                  <div className="bg-navy-800/80 rounded-full p-2 sm:p-3 mb-3 sm:mb-4">
                    <Droplet className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-gold-400" />
                  </div>
                  <h3 className="text-white font-medium text-base sm:text-lg lg:text-xl mb-1">Draft</h3>
                  <p className="text-blue-100 text-sm sm:text-base lg:text-lg font-light">{extendedModelData.specs.draft}</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 sm:p-6 lg:p-8 border-r border-b lg:border-b-0 border-white/10">
                  <div className="bg-navy-800/80 rounded-full p-2 sm:p-3 mb-3 sm:mb-4">
                    <Wind className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-gold-400" />
                  </div>
                  <h3 className="text-white font-medium text-base sm:text-lg lg:text-xl mb-1">Range</h3>
                  <p className="text-blue-100 text-sm sm:text-base lg:text-lg font-light">{extendedModelData.specs.range}</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 sm:p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-white/10">
                  <div className="bg-navy-800/80 rounded-full p-2 sm:p-3 mb-3 sm:mb-4">
                    <Gauge className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-gold-400" />
                  </div>
                  <h3 className="text-white font-medium text-base sm:text-lg lg:text-xl mb-1">Max Speed</h3>
                  <p className="text-blue-100 text-sm sm:text-base lg:text-lg font-light">{extendedModelData.specs.maxSpeed}</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 sm:p-6 lg:p-8 border-r border-white/10">
                  <div className="bg-navy-800/80 rounded-full p-2 sm:p-3 mb-3 sm:mb-4">
                    <Sofa className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-gold-400" />
                  </div>
                  <h3 className="text-white font-medium text-base sm:text-lg lg:text-xl mb-1">Cabins</h3>
                  <p className="text-blue-100 text-sm sm:text-base lg:text-lg font-light">{extendedModelData.specs.cabins}</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 sm:p-6 lg:p-8">
                  <div className="bg-navy-800/80 rounded-full p-2 sm:p-3 mb-3 sm:mb-4">
                    <Users className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-gold-400" />
                  </div>
                  <h3 className="text-white font-medium text-base sm:text-lg lg:text-xl mb-1">Guests</h3>
                  <p className="text-blue-100 text-sm sm:text-base lg:text-lg font-light">{extendedModelData.specs.guests}</p>
                </div>
              </>
            )}
            {!extendedModelData?.specs && (
              <>
                <div className="flex flex-col items-center text-center p-4 sm:p-6 lg:p-8 border-r border-b md:border-b-0 border-white/10">
                  <div className="bg-navy-800/80 rounded-full p-2 sm:p-3 mb-3 sm:mb-4">
                    <Maximize className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-gold-400" />
                  </div>
                  <h3 className="text-white font-medium text-base sm:text-lg lg:text-xl mb-1">Length</h3>
                  <p className="text-blue-100 text-sm sm:text-base lg:text-lg font-light">{modelData.length}</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 sm:p-6 lg:p-8 border-b md:border-b-0 md:border-r border-white/10">
                  <div className="bg-navy-800/80 rounded-full p-2 sm:p-3 mb-3 sm:mb-4">
                    <Ship className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-gold-400" />
                  </div>
                  <h3 className="text-white font-medium text-base sm:text-lg lg:text-xl mb-1">Shipyard</h3>
                  <p className="text-blue-100 text-sm sm:text-base lg:text-lg font-light">{shipyardData.name}</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 sm:p-6 lg:p-8 border-r border-white/10">
                  <div className="bg-navy-800/80 rounded-full p-2 sm:p-3 mb-3 sm:mb-4">
                    <Gauge className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-gold-400" />
                  </div>
                  <h3 className="text-white font-medium text-base sm:text-lg lg:text-xl mb-1">Max Speed</h3>
                  <p className="text-blue-100 text-sm sm:text-base lg:text-lg font-light">{modelData.specs.maxSpeed}</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 sm:p-6 lg:p-8">
                  <div className="bg-navy-800/80 rounded-full p-2 sm:p-3 mb-3 sm:mb-4">
                    <Sofa className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-gold-400" />
                  </div>
                  <h3 className="text-white font-medium text-base sm:text-lg lg:text-xl mb-1">Cabins</h3>
                  <p className="text-blue-100 text-sm sm:text-base lg:text-lg font-light">{modelData.specs.cabins}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        {/* Gallery Section - Enhanced with premium styling */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex flex-col items-center mb-12">
            <div className="inline-block mb-6">
              <div className="bg-gold-400/20 rounded-full p-3">
                <Sparkles className="h-8 w-8 text-gold-400" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-white mb-6">
              Gallery
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Experience the exceptional design and craftsmanship of the {modelData.name}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {gallery.map((image, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group overflow-hidden rounded-xl shadow-lg cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-gold-500/10 relative border border-white/10 hover:border-gold-400/30"
                onClick={() => {
                  setActiveModalImage(index);
                  setShowGalleryModal(true);
                }}
                whileHover={{ y: -8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500 z-10"></div>
                <img 
                  src={image} 
                  alt={`${modelData.name} view ${index + 1}`} 
                  className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading={index > 2 ? "lazy" : "eager"}
                />
                <div className="absolute inset-0 bg-navy-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white bg-gradient-to-t from-navy-900/90 via-navy-900/60 to-transparent z-20">
                  <h3 className="text-lg sm:text-xl font-medium mb-1">{modelData.name} - View {index + 1}</h3>
                  <div className="w-0 h-0.5 bg-gold-400 transition-all duration-500 group-hover:w-24 mb-2"></div>
                  <p className="text-white/90 text-sm">Click to expand</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <Maximize className="h-4 w-4 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Image modal for full view */}
          {showGalleryModal && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
            >
              <div 
                className="absolute inset-0 bg-black/90 backdrop-blur-sm" 
                onClick={() => setShowGalleryModal(false)}
              ></div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative z-10 w-full max-w-6xl mx-auto bg-transparent rounded-xl overflow-hidden"
              >
                <div className="flex justify-between items-center absolute top-4 right-4 left-4 z-20">
                  <div className="text-white bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">{activeModalImage + 1} / {gallery.length}</span>
                  </div>
                  <button 
                    onClick={() => setShowGalleryModal(false)}
                    className="bg-black/40 backdrop-blur-sm p-2 rounded-full text-white hover:bg-black/60 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="relative h-[80vh] overflow-hidden">
                  <img 
                    src={gallery[activeModalImage]} 
                    alt={`${modelData.name} gallery image ${activeModalImage + 1}`} 
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                
                <div className="absolute left-4 right-4 bottom-4 flex justify-between items-center">
                  <button 
                    onClick={() => navigateGallery('prev')}
                    className="bg-black/40 backdrop-blur-sm p-3 rounded-full text-white hover:bg-black/60 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <div className="flex space-x-2 overflow-x-auto px-4 py-3 max-w-full bg-black/40 backdrop-blur-sm rounded-full">
                    {gallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveModalImage(idx)}
                        className={`w-12 h-12 rounded-full flex-shrink-0 overflow-hidden border-2 transition-all ${
                          idx === activeModalImage ? 'border-gold-400 scale-110' : 'border-transparent opacity-70'
                        }`}
                      >
                        <img 
                          src={img} 
                          alt={`Thumbnail ${idx + 1}`} 
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </button>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => navigateGallery('next')}
                    className="bg-black/40 backdrop-blur-sm p-3 rounded-full text-white hover:bg-black/60 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>

        {/* Yacht Details */}
        <Tabs defaultValue="overview" onValueChange={handleTabChange} className="w-full mb-24">
          {/* Compact Tab Buttons - Mobile Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center mb-8 sm:mb-10 w-full"
          >
            <TabsList className="grid w-full max-w-2xl grid-cols-3 gap-2 sm:gap-3 px-2 sm:px-4 bg-transparent">
              <TabsTrigger 
                value="overview" 
                className="rounded-lg py-3 sm:py-4 text-sm sm:text-base font-semibold text-white bg-gradient-to-br from-navy-600/80 to-navy-900/80 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-gold-500/20 hover:-translate-y-1 data-[state=active]:bg-gradient-to-br data-[state=active]:from-white data-[state=active]:to-gold-50 data-[state=active]:text-navy-900 data-[state=active]:border-gold-200 data-[state=active]:shadow-xl transition-all duration-300"
              >
                <span className="flex items-center justify-center">
                  <Ship className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                  <span>OVERVIEW</span>
                </span>
              </TabsTrigger>
              <TabsTrigger 
                value="specifications" 
                className="rounded-lg py-3 sm:py-4 text-sm sm:text-base font-semibold text-white bg-gradient-to-br from-navy-600/80 to-navy-900/80 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-gold-500/20 hover:-translate-y-1 data-[state=active]:bg-gradient-to-br data-[state=active]:from-white data-[state=active]:to-gold-50 data-[state=active]:text-navy-900 data-[state=active]:border-gold-200 data-[state=active]:shadow-xl transition-all duration-300"
              >
                <span className="flex items-center justify-center">
                  <ScanBarcode className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                  <span>SPECS</span>
                </span>
              </TabsTrigger>
              <TabsTrigger 
                value="features" 
                className="rounded-lg py-3 sm:py-4 text-sm sm:text-base font-semibold text-white bg-gradient-to-br from-navy-600/80 to-navy-900/80 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-gold-500/20 hover:-translate-y-1 data-[state=active]:bg-gradient-to-br data-[state=active]:from-white data-[state=active]:to-gold-50 data-[state=active]:text-navy-900 data-[state=active]:border-gold-200 data-[state=active]:shadow-xl transition-all duration-300"
              >
                <span className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                  <span>FEATURES</span>
                </span>
              </TabsTrigger>
            </TabsList>
          </motion.div>
          
          {/* Overview Tab Content */}
          <TabsContent value="overview" className="animate-fade-in">
                <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto"
            >
              <div className="lg:w-1/2">
                    <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative mt-8"
                >
                  <div className="absolute -top-6 -left-6 w-24 h-24 border-l-2 border-t-2 border-gold-400/70"></div>
                  <img 
                    src={gallery[0] || modelData.thumbnail} 
                    alt={modelData.name} 
                    className="w-full h-auto object-cover rounded-lg shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-gold-400/70"></div>
                </motion.div>
                
                  <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mt-12 p-6 bg-navy-800/40 backdrop-blur-sm rounded-lg border border-white/10"
                >
                  <h3 className="text-xl font-medium text-white mb-6 flex items-center">
                    <Award className="w-5 h-5 mr-3 text-gold-400" />
                    About {shipyardData.name}
                  </h3>
                  <p className="text-white leading-relaxed">
                    {shipyardData.description}
                      </p>
                  <Link 
                    to={`/shipyard/${shipyardData.id}`}
                    className="inline-flex items-center mt-6 text-gold-400 hover:text-gold-300 group"
                  >
                    <span>View all {shipyardData.name} models</span>
                    <ChevronRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                        </motion.div>
                      </div>
                  
              <div className="lg:w-1/2">
                  <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-white mb-6 flex items-center">
                    <span className="bg-gold-400/20 rounded-full p-2 mr-4">
                      <Ship className="h-6 w-6 text-gold-400" />
                    </span>
                    The {modelData.name} Experience
                  </h2>
                  
                  <p className="text-white text-lg leading-relaxed mb-8">
                    {extendedModelData?.fullDesc || modelData.shortDesc}
                  </p>
                  
                  {modelData.description && modelData.description.map((paragraph, idx) => (
                    <p key={idx} className="text-white mb-6 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                  </motion.div>
                </div>
            </motion.div>
              </TabsContent>
            
          <AnimatePresence mode="wait">
            {activeTab === 'specifications' && (
              <TabsContent value="specifications" className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-xl p-8 md:p-10 shadow-xl shadow-navy-900/5 border border-gold-50"
                >
                  <h3 className="text-2xl sm:text-3xl font-playfair font-semibold text-navy-900 mb-6 relative">
                    Technical Specifications
                    <motion.div 
                      className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-gold-600 to-gold-400"
                      initial={{ width: 0 }}
                      animate={{ width: "4rem" }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    ></motion.div>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-8">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="bg-gold-50/50 rounded-xl p-6 border border-gold-100 hover:shadow-lg transition-all duration-300"
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <h4 className="text-lg font-semibold text-navy-800 mb-6 flex items-center">
                        <Ship className="mr-3 h-5 w-5 text-gold-700" />
                        Dimensions & Capacity
                      </h4>
                      <ul className="space-y-4 sm:space-y-6">
                        <motion.li 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.4 }}
                          className="flex justify-between items-center border-b border-gold-100 pb-3 group hover:bg-gold-50 px-2 rounded-lg transition-colors duration-300"
                        >
                          <span className="text-slate-700 group-hover:text-navy-800 transition-colors duration-300">Length</span>
                          <span className="font-medium text-navy-900 bg-gold-50 px-3 py-1 rounded-md">{modelData.length}</span>
                        </motion.li>
                        <motion.li 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.5 }}
                          className="flex justify-between items-center border-b border-gold-100 pb-3 group hover:bg-gold-50 px-2 rounded-lg transition-colors duration-300"
                        >
                          <span className="text-slate-700 group-hover:text-navy-800 transition-colors duration-300">Cabins</span>
                          <span className="font-medium text-navy-900 bg-gold-50 px-3 py-1 rounded-md">{modelData.specs.cabins}</span>
                        </motion.li>
                        <motion.li 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.6 }}
                          className="flex justify-between items-center border-b border-gold-100 pb-3 group hover:bg-gold-50 px-2 rounded-lg transition-colors duration-300"
                        >
                          <span className="text-slate-700 group-hover:text-navy-800 transition-colors duration-300">Guests</span>
                          <span className="font-medium text-navy-900 bg-gold-50 px-3 py-1 rounded-md">{modelData.specs.guests}</span>
                        </motion.li>
                        <motion.li 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.7 }}
                          className="flex justify-between items-center border-b border-gold-100 pb-3 group hover:bg-gold-50 px-2 rounded-lg transition-colors duration-300"
                        >
                          <span className="text-slate-700 group-hover:text-navy-800 transition-colors duration-300">Beam</span>
                          <span className="font-medium text-navy-900 bg-gold-50 px-3 py-1 rounded-md">5.2 m / 17 ft</span>
                        </motion.li>
                        <motion.li 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.8 }}
                          className="flex justify-between items-center border-b border-gold-100 pb-3 group hover:bg-gold-50 px-2 rounded-lg transition-colors duration-300"
                        >
                          <span className="text-slate-700 group-hover:text-navy-800 transition-colors duration-300">Draft</span>
                          <span className="font-medium text-navy-900 bg-gold-50 px-3 py-1 rounded-md">1.6 m / 5.2 ft</span>
                        </motion.li>
                      </ul>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="bg-gold-50/50 rounded-xl p-6 border border-gold-100 hover:shadow-lg transition-all duration-300"
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <h4 className="text-lg font-semibold text-navy-800 mb-6 flex items-center">
                        <Gauge className="mr-3 h-5 w-5 text-gold-700" />
                        Performance & Power
                      </h4>
                      <ul className="space-y-4 sm:space-y-6">
                        <motion.li 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.5 }}
                          className="flex justify-between items-center border-b border-gold-100 pb-3 group hover:bg-gold-50 px-2 rounded-lg transition-colors duration-300"
                        >
                          <span className="text-slate-700 group-hover:text-navy-800 transition-colors duration-300">Engines</span>
                          <span className="font-medium text-navy-900 bg-gold-50 px-3 py-1 rounded-md">{modelData.specs.engines || 'Twin engines'}</span>
                        </motion.li>
                        <motion.li 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.6 }}
                          className="flex justify-between items-center border-b border-gold-100 pb-3 group hover:bg-gold-50 px-2 rounded-lg transition-colors duration-300"
                        >
                          <span className="text-slate-700 group-hover:text-navy-800 transition-colors duration-300">Maximum Speed</span>
                          <span className="font-medium text-navy-900 bg-gold-50 px-3 py-1 rounded-md">{modelData.specs.maxSpeed}</span>
                        </motion.li>
                        <motion.li 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.7 }}
                          className="flex justify-between items-center border-b border-gold-100 pb-3 group hover:bg-gold-50 px-2 rounded-lg transition-colors duration-300"
                        >
                          <span className="text-slate-700 group-hover:text-navy-800 transition-colors duration-300">Cruising Speed</span>
                          <span className="font-medium text-navy-900 bg-gold-50 px-3 py-1 rounded-md">22 knots</span>
                        </motion.li>
                        <motion.li 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.8 }}
                          className="flex justify-between items-center border-b border-gold-100 pb-3 group hover:bg-gold-50 px-2 rounded-lg transition-colors duration-300"
                        >
                          <span className="text-slate-700 group-hover:text-navy-800 transition-colors duration-300">Fuel Capacity</span>
                          <span className="font-medium text-navy-900 bg-gold-50 px-3 py-1 rounded-md">3,500 L / 925 gal</span>
                        </motion.li>
                        <motion.li 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.9 }}
                          className="flex justify-between items-center border-b border-gold-100 pb-3 group hover:bg-gold-50 px-2 rounded-lg transition-colors duration-300"
                        >
                          <span className="text-slate-700 group-hover:text-navy-800 transition-colors duration-300">Range</span>
                          <span className="font-medium text-navy-900 bg-gold-50 px-3 py-1 rounded-md">300 nm</span>
                        </motion.li>
                      </ul>
                    </motion.div>
                  </div>
                  
                  {/* Additional Specifications */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-10 bg-gold-50/50 rounded-xl p-6 border border-gold-100 hover:shadow-lg transition-all duration-300"
                  >
                    <h4 className="text-lg font-semibold text-navy-800 mb-6 flex items-center">
                      <Cpu className="mr-3 h-5 w-5 text-gold-700" />
                      Technology & Equipment
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-navy-800 mb-3">Navigation</h5>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-gold-700 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">Advanced GPS Navigation System</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-gold-700 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">Radar with Collision Avoidance</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-gold-700 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">Autopilot System</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-navy-800 mb-3">Entertainment</h5>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-gold-700 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">Premium Sound System</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-gold-700 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">Satellite TV & Wi-Fi</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-gold-700 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">Smart Home Integration</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </TabsContent>
            )}
            
            {activeTab === 'features' && (
              <TabsContent value="features" className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-xl p-8 md:p-10 shadow-xl shadow-navy-900/5 border border-gold-50"
                >
                  <h3 className="text-2xl sm:text-3xl font-playfair font-semibold text-navy-900 mb-6 relative">
                    Features & Amenities
                    <motion.div 
                      className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-gold-600 to-gold-400"
                      initial={{ width: 0 }}
                      animate={{ width: "4rem" }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    ></motion.div>
                  </h3>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-wrap gap-4 mb-10 mt-8"
                  >
                    {modelData.features && Object.keys(modelData.features).map((category, index) => (
                      <motion.button 
                        key={category}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                        className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                          activeFeatureCategory === category 
                            ? 'bg-gradient-to-r from-gold-600 to-gold-400 text-white shadow-lg shadow-gold-500/20 scale-105' 
                            : 'bg-gold-50 text-slate-700 hover:bg-gold-100 border border-gold-100'
                        }`}
                        onClick={() => setActiveFeatureCategory(category)}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {category}
                      </motion.button>
                    ))}
                  </motion.div>
                  
                  {/* Feature list for selected category */}
                  {modelData.features && modelData.features[activeFeatureCategory] && (
                    <motion.div
                      key={activeFeatureCategory}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="bg-gold-50/70 p-6 rounded-xl border border-gold-100"
                    >
                      <h4 className="text-xl font-semibold text-navy-900 mb-4">{activeFeatureCategory} Features</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {modelData.features[activeFeatureCategory].map((feature, index) => (
                          <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 * index }}
                            className="flex items-start space-x-2"
                          >
                            <CheckCircle className="h-5 w-5 text-gold-600 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </TabsContent>
            )}
          </AnimatePresence>
        </Tabs>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-r from-gold-900 via-gold-800 to-gold-900 rounded-xl p-10 sm:p-12 md:p-16 text-white text-center shadow-2xl shadow-gold-900/20 mb-24 overflow-hidden relative"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-200 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-200 to-transparent"></div>
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 mx-auto rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-8 border border-gold-300/20"
            >
              <Anchor className="h-8 w-8 text-gold-300" />
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-semibold mb-6">Experience the {modelData.name}</h2>
            
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-gold-400 to-gold-200 mx-auto mb-8"
            />
            
            <p className="text-lg sm:text-xl text-gold-100 max-w-3xl mx-auto mb-10">
              Contact our yacht specialists for detailed information or to arrange a private viewing of this exceptional vessel.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center bg-white text-navy-900 hover:bg-gold-50 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl shadow-navy-900/20 hover:shadow-navy-900/30 group"
              >
                <Anchor className="mr-2 h-5 w-5 text-gold-600 transition-transform group-hover:rotate-12" />
                <span>Contact Specialist</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Related Models with Premium Styling */}
      <div className="bg-gradient-to-b from-gold-50 to-white py-20 sm:py-24 md:py-32 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-200 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gold-100 rounded-full opacity-50 blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-playfair font-semibold text-white mb-4 text-center">
              More from {shipyardData.name}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-900 to-gold-600 mb-6"></div>
            <p className="text-white text-center max-w-3xl">
              Discover other exceptional models from the {shipyardData.name} collection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {shipyardData.models
              .filter(model => model.id !== modelId)
              .slice(0, 3)
              .map((model, index) => (
                <motion.div
                  key={model.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 * index }}
                  className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl shadow-gold-900/10 hover:shadow-gold-900/20 transition-all duration-500 transform hover:-translate-y-2 group border border-gold-50"
                >
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-gold-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <img 
                      src={model.thumbnail} 
                      alt={model.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-gold-900 text-xs px-3 py-1 rounded-full shadow-lg z-20">
                      {model.length.split(' ')[0]}
                    </div>
                  </div>
                  
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl font-playfair font-semibold text-gold-900 mb-3 group-hover:text-gold-700 transition-colors duration-300">{model.name}</h3>
                    <p className="text-slate-700 text-sm mb-6">{model.shortDesc}</p>
                    
                    <div className="flex justify-between mb-6">
                      <div className="flex items-center text-slate-700 text-sm">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{model.specs.guests} guests</span>
                      </div>
                      <div className="flex items-center text-slate-700 text-sm">
                        <Gauge className="w-4 h-4 mr-1" />
                        <span>{model.specs.maxSpeed.split(' ')[0]}</span>
                      </div>
                    </div>
                    
                    <Link 
                      to={`/model/${model.id}`} 
                      className="inline-flex items-center text-gold-900 font-medium hover:text-gold-700 group"
                    >
                      <span>View details</span>
                      <ChevronRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>
          
          {/* View All Link */}
          <div className="text-center mt-12">
            <Link 
              to={`/shipyard/${shipyardData.id}`}
              className="inline-flex items-center justify-center px-8 py-3 bg-gold-200 hover:bg-gold-300 text-white rounded-full transition-all duration-300 border border-gold-300 font-medium"
            >
              <span>View all {shipyardData.name} models</span>
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Back to Collection */}
      <div className="container mx-auto px-4 py-16 text-center">
        <Link 
          to={`/shipyard/${shipyardData.id}`}
          className="inline-flex items-center text-white font-medium hover:text-gold-200 group"
        >
          <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
          <span>Back to {shipyardData.name} collection</span>
        </Link>
      </div>
      
      <Footer />
    </div>
  );
};

// Add CSS for shadow glow effect
const styleElement = document.createElement('style');
styleElement.textContent = `
  .shadow-glow {
    box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
  }
  .shadow-glow-gold {
    box-shadow: 0 0 15px rgba(234, 179, 8, 0.5);
  }
`;
document.head.appendChild(styleElement);

export default YachtModelPage; 
                  