import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  Anchor, 
  Shield, 
  Settings, 
  Compass, 
  Crown, 
  Waves, 
  MapPin, 
  Clock,
  Star,
  Award,
  Users,
  Globe,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Premium parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        duration: 1
    }
  }
};

  const itemVariants = {
  hidden: { 
    opacity: 0, 
      y: 60,
      scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
    }
  }
};

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      rotateY: -15,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      rotateY: 0,
      scale: 1,
    transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  const services = [
    {
      icon: <Anchor className="w-8 h-8" />,
      title: "Luxury Charter",
      description: "Experience the ultimate in maritime luxury with our exclusive charter services. From intimate getaways to grand celebrations, we curate unforgettable journeys.",
      features: ["Premium Fleet", "Expert Crew", "Bespoke Itineraries", "24/7 Concierge"],
      image: "/lekker 45-1.jpg",
      gradient: "from-blue-600 to-navy-800"
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Yacht Sales",
      description: "Discover your perfect vessel with our curated collection of the world's finest yachts. Expert guidance through every step of your acquisition journey.",
      features: ["Global Network", "Expert Valuation", "Legal Support", "After-Sale Care"],
      image: "/lekker 45-2.jpg",
      gradient: "from-gold-500 to-amber-600"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Custom Design",
      description: "Transform your vision into reality with our bespoke yacht design services. From concept to completion, we craft vessels that reflect your unique style.",
      features: ["Custom Design", "Premium Materials", "Expert Craftsmanship", "Project Management"],
      image: "/lekker 45-4.jpg",
      gradient: "from-purple-600 to-indigo-700"
    }
  ];

  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Presence",
      description: "Worldwide network spanning 40+ countries"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance wherever you are"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Award Winning",
      description: "Industry recognition for excellence"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Seasoned professionals with decades of experience"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-slate-50">
      
      {/* Premium background effects */}
      <div className="absolute inset-0 pointer-events-none">
          <motion.div
          className="absolute inset-0 opacity-10"
          style={{ y }}
        >
          <div className="absolute top-1/3 left-1/6 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-gradient-to-r from-gold-400 to-orange-500 rounded-full blur-3xl" />
          </motion.div>

        {/* Animated particles */}
        <motion.div className="absolute inset-0" style={{ opacity }}>
          {[...Array(12)].map((_, i) => (
      <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full"
        style={{
                left: `${10 + (i * 8)}%`,
                top: `${20 + (i % 3) * 25}%`,
        }}
        animate={{
                y: [-30, 30, -30],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.8, 1.2, 0.8]
        }}
        transition={{
                duration: 5 + i,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
          ))}
        </motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
            >
              <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-navy-500/10 to-gold-500/10 border border-navy-400/30 rounded-full mb-6"
          >
            <Compass className="w-5 h-5 text-navy-600" />
            <span className="text-navy-700 font-medium tracking-wider uppercase text-sm">Premium Services</span>
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 mb-6 leading-tight"
          >
            <span className="block">Exceptional</span>
            <span className="block bg-gradient-to-r from-gold-600 to-gold-400 bg-clip-text text-transparent">
              Maritime Services
            </span>
              </motion.h2>
              
              <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              >
            From luxury charters to custom yacht design, we deliver unparalleled 
            services that exceed the expectations of the world's most discerning yacht enthusiasts.
              </motion.p>
            </motion.div>
            
        {/* Premium Services Grid */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-24"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative bg-white rounded-3xl shadow-xl shadow-black/5 overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-black/10 transition-all duration-500">
                
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-80`} />
                  
                  {/* Service Icon */}
                  <motion.div
                    className="absolute top-6 left-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-white">
                      {service.icon}
              </div>
                  </motion.div>

                  {/* Premium badge */}
                  <div className="absolute top-6 right-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                    <Star className="w-4 h-4 text-white fill-current" />
                  </div>
                  </div>

                {/* Service Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                    ))}
                  </div>
                </div>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-navy-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  style={{ pointerEvents: 'none' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium Features Section */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-gold-500/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <motion.div
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gold-500/20 border border-gold-400/30 rounded-full mb-6"
                  variants={itemVariants}
                >
                  <Waves className="w-5 h-5 text-gold-300" />
                  <span className="text-gold-200 font-medium tracking-wider uppercase text-sm">Why Choose Us</span>
                </motion.div>
                
                <motion.h3
                  variants={itemVariants}
                  className="text-3xl lg:text-4xl font-bold text-white mb-4"
                >
                  Unmatched <span className="text-gold-400">Excellence</span>
                </motion.h3>
                
                <motion.p
                  variants={itemVariants}
                  className="text-gray-300 text-lg max-w-2xl mx-auto"
                >
                  Experience the difference that decades of expertise and unwavering commitment to quality makes
                </motion.p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="text-center group"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h4 className="text-white font-semibold text-lg mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
              
              {/* Premium CTA */}
              <motion.div
                variants={itemVariants}
                className="text-center mt-12"
              >
                <Button className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black font-semibold px-8 py-4 rounded-full shadow-lg shadow-gold-500/25 hover:shadow-xl hover:shadow-gold-500/30 transition-all duration-300 group">
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Premium Process Section */}
        <motion.div
          className="mt-24"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              Our <span className="text-gold-600">Process</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A seamless journey from initial consultation to ongoing support
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Understand your unique needs and preferences through detailed consultation",
                icon: <Users className="w-6 h-6" />
              },
              {
                step: "02",
                title: "Customization",
                description: "Tailor our services to match your specific requirements and expectations",
                icon: <Settings className="w-6 h-6" />
              },
              {
                step: "03",
                title: "Execution",
                description: "Deliver exceptional results with meticulous attention to detail",
                icon: <Award className="w-6 h-6" />
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative text-center group"
              >
                <motion.div
                  className="relative z-10 bg-white rounded-2xl p-8 shadow-lg shadow-black/5 border border-gray-100 group-hover:shadow-xl group-hover:shadow-black/10 transition-all duration-500"
                  whileHover={{ y: -5 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold-100 to-gold-200 rounded-2xl mb-4 group-hover:from-gold-200 group-hover:to-gold-300 transition-all duration-300">
                    {process.icon}
                  </div>
                  
                  <div className="text-4xl font-bold text-gold-600 mb-2">
                    {process.step}
                  </div>
                  
                  <h4 className="text-xl font-semibold text-navy-900 mb-3">
                    {process.title}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {process.description}
                  </p>
                </motion.div>
                
                {/* Connection line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-gold-300 to-gold-500 z-0" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 