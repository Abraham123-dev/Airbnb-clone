import React, { useState } from 'react';
import { Heart, Star, ChevronLeft, ChevronRight, Bed, Bath, Ruler } from 'lucide-react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

const ListingCard = ({ property, showSpecs }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const nextImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

    return (
    <Link to={`/property/${property.id}`} className="group block w-full cursor-pointer">
      <div 
        className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-200 mb-3"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Carousel */}
        <img 
          src={property.images[currentImageIndex]} 
          alt={property.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Favorite Button */}
        <button 
          onClick={toggleFavorite}
          className="absolute top-3 right-3 z-10 transition-transform active:scale-90"
        >
          <Heart 
            size={24} 
            className={clsx(
              "stroke-white stroke-[2px]",
              isFavorite ? "fill-brand-primary stroke-brand-primary" : "fill-black/50"
            )} 
          />
        </button>

        {/* Navigation Arrows */}
        {isHovered && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 p-1.5 rounded-full shadow-md hover:bg-white hover:scale-110 transition-all disabled:opacity-0"
              disabled={currentImageIndex === 0}
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 p-1.5 rounded-full shadow-md hover:bg-white hover:scale-110 transition-all"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}

        {/* Pagination Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {property.images.slice(0, 5).map((_, idx) => (
            <div 
              key={idx}
              className={clsx(
                "h-1.5 rounded-full transition-all shadow-sm",
                idx === currentImageIndex ? "w-1.5 bg-white" : "w-1.5 bg-white/50"
              )}
            />
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-text-primary truncate pr-2">{property.location}</h3>
          <div className="flex items-center gap-1 text-sm flex-shrink-0">
            <Star size={14} fill="currentColor" className="text-black" />
            <span>{property.rating}</span>
          </div>
        </div>
        
        <p className="text-text-secondary text-sm truncate">{property.title}</p>
        
        {/* Real Estate Specs */}
        {showSpecs && (
          <div className="flex items-center gap-3 text-sm text-text-secondary my-0.5">
            <div className="flex items-center gap-1">
              <Bed size={14} />
              <span>{property.details.bedrooms} bd</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath size={14} />
              <span>{property.details.baths} ba</span>
            </div>
            {property.sqft && (
              <div className="flex items-center gap-1">
                <Ruler size={14} />
                <span>{property.sqft.toLocaleString()} sqft</span>
              </div>
            )}
          </div>
        )}

        <div className="flex items-baseline gap-1 mt-1">
          <span className="font-semibold text-text-primary text-lg">${property.price}</span>
          <span className="text-text-primary">night</span>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;