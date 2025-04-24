import React from 'react';
import { Wifi, Waves, Sparkles, CarFront, Utensils, Calendar } from 'lucide-react';

interface AmenityProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AmenityCard: React.FC<AmenityProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="text-hotel-gold mb-4">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-hotel-light-gray rounded-full">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-playfair font-medium mb-2 text-hotel-navy">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Amenities: React.FC = () => {
  const amenities = [
    {
      icon: <Wifi size={24} className="text-hotel-navy" />,
      title: 'High-Speed WiFi',
      description: 'Stay connected with complimentary high-speed internet access throughout the hotel.'
    },
    {
      icon: <Waves size={24} className="text-hotel-navy" />,
      title: 'Swimming Pool',
      description: 'Relax and unwind in our temperature-controlled indoor and outdoor swimming pools.'
    },
    {
      icon: <Sparkles size={24} className="text-hotel-navy" />,
      title: 'Luxury Spa',
      description: 'Indulge in a variety of treatments designed to rejuvenate your body and mind.'
    },
    {
      icon: <Utensils size={24} className="text-hotel-navy" />,
      title: 'Gourmet Restaurant',
      description: 'Savor exquisite dishes prepared by our award-winning chefs in our elegant restaurant.'
    },
    {
      icon: <CarFront size={24} className="text-hotel-navy" />,
      title: 'Airport Shuttle',
      description: 'Enjoy complimentary airport transfers for a seamless travel experience.'
    },
    {
      icon: <Calendar size={24} className="text-hotel-navy" />,
      title: 'Event Spaces',
      description: 'Host memorable events in our versatile spaces equipped with the latest technology.'
    }
  ];

  return (
    <section id="amenities" className="section bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">
          <span className="gold-underline">Hotel</span> Amenities
        </h2>
        <p className="section-subtitle text-center">
          Discover our wide range of premium services and facilities designed to make your stay exceptional.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {amenities.map((amenity, index) => (
            <AmenityCard 
              key={index}
              icon={amenity.icon}
              title={amenity.title}
              description={amenity.description}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-hotel-navy rounded-lg overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-playfair text-white mb-4">Exclusive VIP Package</h3>
              <p className="text-gray-300 mb-6">
                Elevate your stay with our exclusive VIP package, including premium services and special amenities designed for the discerning traveler.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center text-white">
                  <svg className="w-5 h-5 text-hotel-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Priority Check-in and Late Check-Out
                </li>
                <li className="flex items-center text-white">
                  <svg className="w-5 h-5 text-hotel-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Complimentary Breakfast and Dinner
                </li>
                <li className="flex items-center text-white">
                  <svg className="w-5 h-5 text-hotel-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Daily Spa Treatment
                </li>
                <li className="flex items-center text-white">
                  <svg className="w-5 h-5 text-hotel-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Personal Concierge Service
                </li>
              </ul>
              <button className="btn-secondary">Learn More</button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80" 
                alt="VIP Experience" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
