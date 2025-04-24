
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface RoomType {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  size: number;
  image: string;
  amenities: string[];
}

const Rooms: React.FC = () => {
  const roomTypes: RoomType[] = [
    {
      id: 'deluxe',
      name: 'Deluxe Room',
      description: 'Spacious room with modern amenities and a beautiful city view.',
      price: 199,
      capacity: 2,
      size: 35,
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      amenities: ['Free WiFi', 'Air Conditioning', 'Mini Bar', 'Flat Screen TV']
    },
    {
      id: 'suite',
      name: 'Executive Suite',
      description: 'Luxury suite with a separate living area and stunning panoramic views.',
      price: 349,
      capacity: 2,
      size: 60,
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      amenities: ['Free WiFi', 'Air Conditioning', 'Mini Bar', 'Flat Screen TV', 'Work Desk', 'Bath Tub']
    },
    {
      id: 'family',
      name: 'Family Room',
      description: 'Perfect for families, this room features two queen beds and extra space.',
      price: 279,
      capacity: 4,
      size: 45,
      image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80',
      amenities: ['Free WiFi', 'Air Conditioning', 'Mini Bar', 'Flat Screen TV', 'Kid-Friendly Amenities']
    },
    {
      id: 'penthouse',
      name: 'Penthouse Suite',
      description: 'Our most luxurious offering with exceptional views, private terrace and personalized service.',
      price: 599,
      capacity: 4,
      size: 120,
      image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      amenities: ['Free WiFi', 'Air Conditioning', 'Full Bar', 'Flat Screen TV', 'Private Terrace', 'Butler Service', 'Jacuzzi']
    }
  ];

  return (
    <section id="rooms" className="section bg-hotel-light-gray">
      <div className="container-custom">
        <h2 className="section-title text-center">
          <span className="gold-underline">Rooms</span> & Suites
        </h2>
        <p className="section-subtitle text-center">
          Choose from our selection of exquisitely designed rooms and suites, each offering a unique experience.
        </p>
        
        <Tabs defaultValue="deluxe" className="w-full mt-12">
          <TabsList className="flex flex-wrap justify-center mb-8 bg-transparent">
            {roomTypes.map((room) => (
              <TabsTrigger 
                key={room.id} 
                value={room.id}
                className="px-6 py-3 data-[state=active]:bg-hotel-navy data-[state=active]:text-white"
              >
                {room.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {roomTypes.map((room) => (
            <TabsContent key={room.id} value={room.id} className="animate-fade-in">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={room.image} 
                      alt={room.name} 
                      className="w-full h-[300px] md:h-[400px] object-cover" 
                    />
                  </div>
                </div>
                <div className="lg:w-1/3">
                  <Card>
                    <CardHeader>
                      <CardTitle className="font-playfair text-2xl">{room.name}</CardTitle>
                      <CardDescription>{room.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between mb-4 font-medium">
                        <div>
                          <p className="text-gray-500">Capacity</p>
                          <p>{room.capacity} Guests</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Size</p>
                          <p>{room.size} m²</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Price</p>
                          <p className="text-hotel-navy">${room.price}/night</p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="font-medium mb-2">Room Amenities:</p>
                        <ul className="grid grid-cols-2 gap-2">
                          {room.amenities.map((amenity, index) => (
                            <li key={index} className="flex items-center">
                              <svg className="w-4 h-4 text-hotel-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                              {amenity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="btn-secondary w-full">Book Now</Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="btn-outline">View All Rooms</Button>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
