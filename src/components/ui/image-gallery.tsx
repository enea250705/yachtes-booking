import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface ImageGalleryProps {
  images: string[];
  className?: string;
  aspectRatio?: 'square' | 'video' | 'auto';
  effect?: 'slide' | 'fade' | 'coverflow';
  autoplay?: boolean;
  fullscreenEnabled?: boolean;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  className = '',
  aspectRatio = 'auto',
  effect = 'slide',
  autoplay = false,
  fullscreenEnabled = true
}) => {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Get aspect ratio class
  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case 'square':
        return 'aspect-square';
      case 'video':
        return 'aspect-video';
      default:
        return '';
    }
  };

  // Handle fullscreen toggle
  const toggleFullscreen = (image: string | null) => {
    setFullscreenImage(image);
    // Prevent body scroll when fullscreen is open
    if (image) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  return (
    <>
      <div 
        className={`relative overflow-hidden rounded-xl ${getAspectRatioClass()} ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Swiper
          modules={[Navigation, Pagination, EffectFade, Autoplay]}
          effect={effect === 'fade' ? 'fade' : undefined}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            type: 'bullets',
          }}
          loop={true}
          autoplay={autoplay ? {
            delay: 5000,
            disableOnInteraction: false
          } : false}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
          className="h-full w-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="h-full w-full">
              <div className={`relative h-full w-full overflow-hidden ${getAspectRatioClass()}`}>
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-1000 ease-out hover:scale-105"
                />
                {/* Image counter overlay */}
                <div className="absolute bottom-4 right-4 z-10 flex h-8 items-center rounded-full bg-black/60 px-3 text-xs text-white backdrop-blur-md">
                  <span>{currentIndex + 1}</span>
                  <span className="mx-1">/</span>
                  <span>{images.length}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation buttons */}
        <motion.button
          className="swiper-button-prev absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
          transition={{ duration: 0.3 }}
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </motion.button>
        
        <motion.button
          className="swiper-button-next absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
          transition={{ duration: 0.3 }}
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </motion.button>

        {/* Fullscreen button */}
        {fullscreenEnabled && (
          <motion.button
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={() => toggleFullscreen(images[currentIndex])}
            aria-label="View fullscreen"
          >
            <Expand size={18} />
          </motion.button>
        )}

        {/* Custom pagination */}
        <div className="swiper-pagination absolute bottom-4 left-1/2 z-10 -translate-x-1/2 transform space-x-1.5"></div>
      </div>

      {/* Fullscreen image modal */}
      <AnimatePresence>
        {fullscreenImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => toggleFullscreen(null)}
          >
            <motion.button
              className="absolute right-6 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              onClick={() => toggleFullscreen(null)}
              aria-label="Close fullscreen"
            >
              <X size={24} />
            </motion.button>
            
            <motion.img
              src={fullscreenImage}
              alt="Fullscreen image"
              className="max-h-[90vh] max-w-[90vw] object-contain"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageGallery; 