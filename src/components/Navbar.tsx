
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);

      // Get all sections
      const sections = ['about', 'rooms', 'amenities', 'location', 'gallery', 'contact'];
      
      // Find the current section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Add a buffer of 100px to make the detection more natural
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  const getLinkClasses = (link: string) => {
    const baseClasses = "transition-colors";
    const desktopClasses = activeLink === link 
      ? "text-hotel-gold font-medium" 
      : "text-hotel-navy hover:text-hotel-gold";
    return `${baseClasses} ${desktopClasses}`;
  };

  const getMobileLinkClasses = (link: string) => {
    const baseClasses = "transition-colors py-2";
    const mobileClasses = activeLink === link 
      ? "text-hotel-gold font-medium" 
      : "text-hotel-navy hover:text-hotel-gold";
    return `${baseClasses} ${mobileClasses}`;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container-custom flex justify-between items-center">
        <a href="/" className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold font-playfair text-hotel-navy">Vista Oasis</h1>
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-hotel-navy p-2"
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" onClick={() => handleLinkClick('about')} className={getLinkClasses('about')}>About</a>
          <a href="#rooms" onClick={() => handleLinkClick('rooms')} className={getLinkClasses('rooms')}>Rooms</a>
          <a href="#amenities" onClick={() => handleLinkClick('amenities')} className={getLinkClasses('amenities')}>Amenities</a>
          <a href="#location" onClick={() => handleLinkClick('location')} className={getLinkClasses('location')}>Location</a>
          <a href="#gallery" onClick={() => handleLinkClick('gallery')} className={getLinkClasses('gallery')}>Gallery</a>
          <a href="#contact" onClick={() => handleLinkClick('contact')} className={getLinkClasses('contact')}>Contact</a>
          <Button className="btn-primary">Book Now</Button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen opacity-100 border-t' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a href="#about" onClick={() => handleLinkClick('about')} className={getMobileLinkClasses('about')}>About</a>
            <a href="#rooms" onClick={() => handleLinkClick('rooms')} className={getMobileLinkClasses('rooms')}>Rooms</a>
            <a href="#amenities" onClick={() => handleLinkClick('amenities')} className={getMobileLinkClasses('amenities')}>Amenities</a>
            <a href="#location" onClick={() => handleLinkClick('location')} className={getMobileLinkClasses('location')}>Location</a>
            <a href="#gallery" onClick={() => handleLinkClick('gallery')} className={getMobileLinkClasses('gallery')}>Gallery</a>
            <a href="#contact" onClick={() => handleLinkClick('contact')} className={getMobileLinkClasses('contact')}>Contact</a>
            <Button className="btn-primary w-full">Book Now</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
