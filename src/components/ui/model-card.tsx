import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, Anchor, ChevronRight } from 'lucide-react';
import { colors } from '@/lib/theme';

interface ModelCardProps {
  id: string;
  name: string;
  thumbnail: string;
  shortDescription: string;
  shipyardId: string;
  specs?: {
    length?: string;
    guests?: number;
    cabins?: number;
  };
  year?: string;
  className?: string;
}

const ModelCard: React.FC<ModelCardProps> = ({
  id,
  name,
  thumbnail,
  shortDescription,
  shipyardId,
  specs,
  year,
  className = ''
}) => {
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl dark:bg-gray-900 ${className}`}
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Image container with overlay */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={thumbnail}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 transition-opacity duration-300"></div>
        
        {/* View model overlay that appears on hover */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-navy-900/30 backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <Link 
            to={`/model/${id}`} 
            className="flex items-center rounded-full bg-white/10 px-5 py-3 text-white backdrop-blur-md hover:bg-white/20"
          >
            <Eye size={18} className="mr-2" />
            <span>View Model</span>
          </Link>
        </motion.div>
        
        {/* Optional year tag */}
        {year && (
          <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-navy-800 backdrop-blur-sm">
            {year}
          </div>
        )}
      </div>
      
      {/* Content section */}
      <div className="p-5">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="font-playfair text-xl font-medium text-navy-900 dark:text-white">{name}</h3>
          <Link 
            to={`/shipyard/${shipyardId}`}
            className="flex items-center text-xs text-navy-600 hover:text-navy-800 dark:text-gray-400 dark:hover:text-white"
          >
            <Anchor size={12} className="mr-1" />
            <span>{shipyardId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</span>
          </Link>
        </div>
        
        <p className="mb-4 line-clamp-2 text-sm text-gray-600 dark:text-gray-300">
          {shortDescription}
        </p>
        
        {/* View details link */}
        <Link 
          to={`/model/${id}`}
          className="inline-flex items-center text-sm font-medium text-navy-800 transition-colors hover:text-gold-600 dark:text-gold-400 dark:hover:text-gold-300"
        >
          <span>View Details</span>
          <motion.div
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight size={16} className="ml-1" />
          </motion.div>
        </Link>
      </div>
      
      {/* Gold accent line at the bottom */}
      <div 
        className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-700 group-hover:w-full"
        style={{ 
          background: `linear-gradient(to right, ${colors.gold[400]}, ${colors.gold[600]})` 
        }}
      ></div>
    </motion.div>
  );
};

export default ModelCard; 