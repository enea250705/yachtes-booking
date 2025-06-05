import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const Gallery: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  
  const galleryImages = [
    {
      id: 1,
      src: '/LEKKER 45-1.jpg',
      alt: 'LEKKER 45 Yacht Performance',
      category: 'Performance'
    },
    {
      id: 2,
      src: '/lekker 45-2.jpg',
      alt: 'LEKKER 45 Interior Design',
      category: 'Interior'
    },
    {
      id: 3,
      src: '/LEKKER 38-1.jpg',
      alt: 'LEKKER 38 Luxury Yacht',
      category: 'Luxury'
    },
    {
      id: 4,
      src: '/LekkerPage-08.png',
      alt: 'Damsko 750 Performance',
      category: 'Performance'
    },
    {
      id: 5,
      src: '/LekkerPage-09.png',
      alt: 'Damsko 750 Design',
      category: 'Design'
    },
    {
      id: 6,
      src: '/plus6.png',
      alt: 'EVO Yacht Innovation',
      category: 'Innovation'
    }
  ];

  const openModal = (src: string) => {
    setSelectedImage(src);
    setIsModalOpen(true);
  };

  return (
    <section id="gallery" className="section bg-hotel-light-gray">
      <div className="container-custom">
        <h2 className="section-title text-center">
          <span className="gold-underline">Hotel</span> Gallery
        </h2>
        <p className="section-subtitle text-center">
          Explore our hotel through our carefully curated collection of images.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => openModal(image.src)}
            >
              <div className="aspect-[4/3]">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full text-white">
                  <p className="font-playfair text-lg">{image.alt}</p>
                  <p className="text-sm text-gray-200">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="btn-outline">View Full Gallery</Button>
        </div>
      </div>
      
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-4xl bg-transparent border-none shadow-none">
          <div className="relative">
            <button 
              className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2"
              onClick={() => setIsModalOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedImage} 
              alt="Gallery" 
              className="w-full h-full object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
