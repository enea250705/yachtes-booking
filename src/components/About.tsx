
import React from 'react';
import { Button } from '@/components/ui/button';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Column */}
          <div className="md:w-1/2 overflow-hidden rounded-lg">
            <div className="relative aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80" 
                alt="Hotel Lobby" 
                className="object-cover w-full h-full rounded-lg shadow-lg transform transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
          
          {/* Content Column */}
          <div className="md:w-1/2">
            <h2 className="section-title">
              <span className="gold-underline">About</span> Vista Oasis
            </h2>
            <p className="text-gray-600 mb-6">
              Founded in 1992, Vista Oasis has established itself as a premier destination for travelers seeking luxury and comfort in the heart of the city. Our hotel combines elegant architecture with modern amenities to create an unforgettable experience for our guests.
            </p>
            <p className="text-gray-600 mb-6">
              With a commitment to exceptional service and attention to detail, we have earned a reputation for excellence in the hospitality industry. Our dedicated staff works tirelessly to ensure every guest feels welcomed and valued throughout their stay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="border-l-4 border-hotel-gold pl-4">
                <p className="text-3xl font-playfair text-hotel-navy">150+</p>
                <p className="text-gray-500">Luxury Rooms</p>
              </div>
              <div className="border-l-4 border-hotel-gold pl-4">
                <p className="text-3xl font-playfair text-hotel-navy">15+</p>
                <p className="text-gray-500">Years of Excellence</p>
              </div>
              <div className="border-l-4 border-hotel-gold pl-4">
                <p className="text-3xl font-playfair text-hotel-navy">24/7</p>
                <p className="text-gray-500">Customer Service</p>
              </div>
            </div>
            <Button className="btn-outline">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
