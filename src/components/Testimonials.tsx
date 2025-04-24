
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  location: string;
  rating: number;
  image: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ content, author, location, rating, image }) => {
  return (
    <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="pt-6">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${i < rating ? 'text-hotel-gold fill-hotel-gold' : 'text-gray-300'}`}
            />
          ))}
        </div>
        <p className="mb-6 text-gray-600">{content}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t pt-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
            <img
              src={image}
              alt={author}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-medium">{author}</p>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      content: "The Vista Oasis exceeded all our expectations. The rooms were impeccably clean, the staff was attentive, and the amenities were top-notch. We'll definitely return for our next vacation.",
      author: "Emma Thompson",
      location: "London, UK",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
    },
    {
      content: "As a business traveler, I appreciate the seamless check-in process and the reliable WiFi. The meeting facilities were excellent, and the location is perfect for accessing corporate offices.",
      author: "Michael Chen",
      location: "Hong Kong",
      rating: 4,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
    },
    {
      content: "We celebrated our anniversary at Vista Oasis and it was magical. The staff arranged a special dinner for us and the spa experience was incredibly relaxing. A perfect romantic getaway!",
      author: "Sarah Miller",
      location: "New York, USA",
      rating: 5,
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80"
    }
  ];

  return (
    <section id="testimonials" className="section bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">
          <span className="gold-underline">Guest</span> Testimonials
        </h2>
        <p className="section-subtitle text-center">
          Hear what our guests have to say about their experiences at Vista Oasis.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              location={testimonial.location}
              rating={testimonial.rating}
              image={testimonial.image}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center font-medium text-hotel-navy hover:text-hotel-gold transition-colors"
          >
            Read more reviews on TripAdvisor
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
