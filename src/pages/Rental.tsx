import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RentalComingSoon from '@/components/RentalComingSoon';

const Rental: React.FC = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950">
      <Navbar />
      <RentalComingSoon />
      <Footer />
    </div>
  );
};

export default Rental; 