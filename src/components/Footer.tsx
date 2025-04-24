
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Footer: React.FC = () => {
  const { toast } = useToast();
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscription Confirmed",
      description: "Thank you for subscribing to our newsletter.",
    });
  };
  
  return (
    <footer className="bg-hotel-navy text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-2xl font-playfair mb-4">Vista Oasis</h3>
            <p className="mb-6 text-gray-300">Experience luxury and comfort at our award-winning hotel, providing exceptional service and unforgettable experiences since 1992.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-hotel-gold">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-hotel-gold">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-hotel-gold">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-hotel-gold">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Contact */}
          <div>
            <h3 className="text-xl font-playfair mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="mr-2 text-hotel-gold" size={18} />
                <span className="text-gray-300">123 Luxury Avenue, Downtown, City 10001</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 text-hotel-gold" size={18} />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 text-hotel-gold" size={18} />
                <span className="text-gray-300">info@vistaoasis.com</span>
              </div>
            </div>
          </div>
          
          {/* Column 3 - Quick Links */}
          <div>
            <h3 className="text-xl font-playfair mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-hotel-gold transition-colors">About Us</a></li>
              <li><a href="#rooms" className="text-gray-300 hover:text-hotel-gold transition-colors">Rooms & Suites</a></li>
              <li><a href="#amenities" className="text-gray-300 hover:text-hotel-gold transition-colors">Amenities</a></li>
              <li><a href="#location" className="text-gray-300 hover:text-hotel-gold transition-colors">Location</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-hotel-gold transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-hotel-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-xl font-playfair mb-4">Newsletter</h3>
            <p className="mb-4 text-gray-300">Subscribe to receive exclusive offers and updates.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="bg-white/10 border-gray-700 text-white placeholder:text-gray-400"
                required
              />
              <Button type="submit" className="bg-hotel-gold hover:bg-opacity-90 text-hotel-navy">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Vista Oasis. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-hotel-gold text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-hotel-gold text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-hotel-gold text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
