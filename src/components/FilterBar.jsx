import React, { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { Button } from './ui/Button';

const FilterBar = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000 });
  const [isOpen, setIsOpen] = useState(false);

  const handleApply = () => {
    onFilterChange({ priceRange });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 border border-gray-300 rounded-xl px-4 py-3 text-sm font-medium hover:border-black transition-colors"
      >
        <SlidersHorizontal size={16} />
        Filters
      </button>

      {isOpen && (
        <div className="absolute top-14 right-0 w-80 bg-white rounded-2xl shadow-floating border border-gray-100 p-6 z-50 animate-in fade-in zoom-in-95 duration-200">
          <h3 className="font-semibold text-lg mb-4 text-text-primary">Price range</h3>
          <p className="text-sm text-text-secondary mb-4 italic">Nightly prices before fees and taxes</p>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="border border-gray-200 rounded-xl p-3 flex-1 focus-within:ring-2 focus-within:ring-black">
              <label className="text-[10px] text-text-secondary uppercase font-bold tracking-tight">Min Price</label>
              <div className="flex items-center mt-1">
                <span className="text-sm font-medium pr-1">$</span>
                <input 
                  type="number" 
                  value={priceRange.min || ''}
                  placeholder="0"
                  onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value === '' ? '' : Number(e.target.value) })}
                  className="w-full outline-none text-sm font-medium pr-2 bg-transparent"
                />
              </div>
            </div>
            <span className="text-gray-400 font-bold">—</span>
            <div className="border border-gray-200 rounded-xl p-3 flex-1 focus-within:ring-2 focus-within:ring-black">
              <label className="text-[10px] text-text-secondary uppercase font-bold tracking-tight">Max Price</label>
              <div className="flex items-center mt-1">
                <span className="text-sm font-medium pr-1">$</span>
                <input 
                  type="number" 
                  value={priceRange.max || ''}
                  placeholder="2000"
                  onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value === '' ? '' : Number(e.target.value) })}
                  className="w-full outline-none text-sm font-medium pr-2 bg-transparent"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-5 border-t border-gray-100">
            <button 
              onClick={() => {
                const defaultRange = { min: 0, max: 2000 };
                setPriceRange(defaultRange);
                onFilterChange({ priceRange: defaultRange });
              }}
              className="text-sm font-bold underline hover:text-black transition-colors"
            >
              Clear all
            </button>
            <Button size="sm" onClick={handleApply}>Show places</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBar;
