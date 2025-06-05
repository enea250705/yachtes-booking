import { Variants } from "framer-motion";

// Fade up animation - used for text, cards, and content blocks
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.1, 0.25, 1.0] 
    }
  }
};

// Staggered container - used to create staggered animations for child elements
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

// Scale in animation - used for images and cards
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.34, 1.56, 0.64, 1] 
    }
  }
};

// Slide in from left - used for content sections
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.1, 0.25, 1.0] 
    }
  }
};

// Slide in from right - used for content sections
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.1, 0.25, 1.0] 
    }
  }
};

// Shimmer effect - used for buttons and important elements
export const shimmer: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: [0, 1, 0], 
    x: [100, 0, -100],
    transition: { 
      repeat: Infinity,
      duration: 3,
      ease: "easeInOut",
      repeatType: "loop"
    } 
  }
};

// Parallax scroll effect for backgrounds
export const parallaxScroll = (scrollY: number, factor = 0.2): string => {
  return `translateY(${scrollY * factor}px)`;
};

// Float animation - subtle floating for cards and elements
export const float: Variants = {
  hidden: { y: 0 },
  visible: {
    y: [0, -15, 0],
    transition: {
      repeat: Infinity,
      duration: 6,
      ease: "easeInOut"
    }
  }
};

// Wave animation - for wave SVG elements
export const wave: Variants = {
  hidden: { 
    pathLength: 0,
    opacity: 0 
  },
  visible: { 
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut"
    }
  }
};

// Luxury hover effect for cards and interactive elements
export const luxuryHover = {
  scale: 1.05,
  y: -10,
  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }
};

// Text reveal animation
export const textReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  })
};

// Badge animation for premium elements
export const badgeAnimation: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  }
};

// Image gallery fade animation
export const galleryFade: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 } 
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3 } 
  }
}; 