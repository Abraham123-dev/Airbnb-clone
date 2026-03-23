import React from 'react';
import { Star, Heart } from 'lucide-react';

const ListingCard = ({ image, location, rating, host, date, price }) => {
  return (
    <div className="flex flex-col gap-2 group cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
      {/* Image Container */}
      <div className="aspect-square w-full relative overflow-hidden rounded-xl bg-gray-100">
        <img 
          src={image} 
          alt={location}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Favorite Button */}
        <button className="absolute top-3 right-3 p-1 rounded-full hover:scale-110 transition-transform active:scale-95">
          <Heart 
            size={24} 
            className="text-white fill-[rgba(0,0,0,0.5)] stroke-white stroke-[2px] hover:fill-brand-primary hover:stroke-brand-primary" 
          />
        </button>

        {/* Badge (Optional) */}
        {rating > 4.9 && (
          <div className="absolute top-3 left-3 bg-white px-2 py-0.5 rounded-md shadow-sm">
            <span className="text-xs font-semibold text-text-primary">Guest favorite</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col gap-0.5 mt-1">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-[15px] leading-tight text-text-primary">{location}</h3>
          <div className="flex items-center gap-1">
            <Star size={12} fill="currentColor" stroke="none" className="text-text-primary" />
            <span className="text-sm font-normal text-text-primary">{rating}</span>
          </div>
        </div>
        <p className="text-text-secondary text-[14px] leading-tight line-clamp-1">{host}</p>
        <p className="text-text-secondary text-[14px] leading-tight">{date}</p>
        <div className="mt-1.5">
          <span className="font-semibold text-[15px] text-text-primary">${price}</span>
          <span className="font-normal text-[15px] text-text-primary"> night</span>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
