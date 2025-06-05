import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-white pt-16 pb-8 border-t border-gold-400/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-2xl font-playfair mb-4">Class Yachts</h3>
            <p className="mb-6 text-gray-300">Discover the pinnacle of maritime luxury with our exclusive collection of premium yachts from the world's most prestigious shipyards since 2015.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gold-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Contact */}
          <div>
            <h3 className="text-xl font-playfair mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="mr-2 text-gold-400" size={18} />
                <span className="text-gray-300">+355 69 604 7159</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 text-gold-400" size={18} />
                <span className="text-gray-300">info@classyachts.eu</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-navy-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Class Yachts. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link to="/privacy" className="text-gray-400 hover:text-gold-400 text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-gold-400 text-sm">Terms of Service</Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-gold-400 text-sm">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
