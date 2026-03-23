import React, { useRef } from 'react';
import { Umbrella, Tent, Flame, Sparkles, Gem, Castle, Trees, Tractor, Palmtree, ChevronLeft, ChevronRight } from 'lucide-react';
import { CATEGORIES } from '../data';
import { clsx } from 'clsx';

const iconMap = {
  Umbrella, Tent, Flame, Sparkles, Gem, Castle, Trees, Tractor, Palmtree
};

const CategoryBar = ({ selected, onSelect }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300;
      current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative flex items-center w-full bg-white pt-2">
      <button 
        onClick={() => scroll('left')}
        className="hidden md:flex absolute left-0 z-10 bg-white border border-gray-300 rounded-full p-1.5 shadow-sm hover:scale-105 transition-transform translate-y-[-12px]"
      >
        <ChevronLeft size={16} />
      </button>

      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto no-scrollbar w-full px-2 scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {CATEGORIES.map((cat) => {
          const Icon = iconMap[cat.icon] || Sparkles;
          const isSelected = selected === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={clsx(
                "flex flex-col items-center gap-2 min-w-[64px] pb-3 transition-all border-b-2 group hover:opacity-100",
                isSelected 
                  ? "border-black text-black opacity-100" 
                  : "border-transparent text-text-secondary opacity-70 hover:border-gray-200"
              )}
            >
              <Icon size={24} strokeWidth={isSelected ? 2 : 1.5} />
              <span className={clsx("text-xs font-medium whitespace-nowrap", isSelected && "font-semibold")}>
                {cat.label}
              </span>
            </button>
          );
        })}
      </div>

      <button 
        onClick={() => scroll('right')}
        className="hidden md:flex absolute right-0 z-10 bg-white border border-gray-300 rounded-full p-1.5 shadow-sm hover:scale-105 transition-transform translate-y-[-12px]"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
};

export default CategoryBar;
