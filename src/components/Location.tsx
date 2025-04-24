
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="location" className="section bg-hotel-light-gray">
      <div className="container-custom">
        <h2 className="section-title text-center">
          <span className="gold-underline">Our</span> Location
        </h2>
        <p className="section-subtitle text-center">
          Strategically located in the heart of the city, offering easy access to major attractions and business districts.
        </p>
        
        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          <div className="lg:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-playfair font-medium mb-4 text-hotel-navy">Perfectly Situated</h3>
              <p className="text-gray-600 mb-6">
                Vista Oasis is located in the heart of the downtown area, offering convenient access to shopping, dining, and entertainment options. The hotel is just 20 minutes from the international airport and within walking distance of major tourist attractions.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <MapPin className="text-hotel-gold mr-2 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">123 Luxury Avenue, Downtown, City 10001</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-12">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-hotel-gold rounded-full mr-2"></div>
                    <div>
                      <p className="font-medium">Airport</p>
                      <p className="text-gray-600">20 min drive</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-hotel-gold rounded-full mr-2"></div>
                    <div>
                      <p className="font-medium">City Center</p>
                      <p className="text-gray-600">5 min walk</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-hotel-gold rounded-full mr-2"></div>
                    <div>
                      <p className="font-medium">Beach</p>
                      <p className="text-gray-600">15 min drive</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <h4 className="font-medium text-xl mb-2">Nearby Attractions:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-hotel-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  National Museum (0.5 km)
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-hotel-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Central Park (1.2 km)
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-hotel-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Shopping District (0.3 km)
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-hotel-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Opera House (1.5 km)
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-hotel-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Business District (0.8 km)
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-hotel-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Train Station (1.0 km)
                </li>
              </ul>
              
              <Button className="btn-primary">Get Directions</Button>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg h-full">
              {/* Map image placeholder - Would be replaced with interactive map */}
              <img 
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                alt="Hotel Location Map" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
