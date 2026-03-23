import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import ListingCard from './components/ListingCard';
import FilterBar from './components/FilterBar';

const PROPERTIES = [
  {
    id: '1',
    title: 'Luxury Villa with Infinity Pool',
    location: 'Santorini, Greece',
    rating: 4.95,
    price: 850,
    images: [
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542318238-439133b3ca8e?auto=format&fit=crop&w=800&q=80'
    ],
    details: { bedrooms: 4, baths: 3 },
    sqft: 2500
  },
  {
    id: '2',
    title: 'Modern Cabin in the Woods',
    location: 'Aspen, Colorado',
    rating: 4.88,
    price: 320,
    images: [
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?auto=format&fit=crop&w=800&q=80'
    ],
    details: { bedrooms: 2, baths: 1 },
    sqft: 1200
  },
  {
    id: '3',
    title: 'Minimalist Tokyo Apartment',
    location: 'Shibuya, Tokyo',
    rating: 4.98,
    price: 150,
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80'
    ],
    details: { bedrooms: 1, baths: 1 },
    sqft: 650
  },
  {
    id: '4',
    title: 'Beachfront Penthouse',
    location: 'Malibu, California',
    rating: 4.92,
    price: 1200,
    images: [
      'https://images.unsplash.com/photo-1512915922686-57c11f9ad6b3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1505692433770-36f19f51681d?auto=format&fit=crop&w=800&q=80'
    ],
    details: { bedrooms: 3, baths: 3 },
    sqft: 1800
  },
  {
    id: '5',
    title: 'Rustic Italian Farmhouse',
    location: 'Tuscany, Italy',
    rating: 4.85,
    price: 280,
    images: [
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80'
    ],
    details: { bedrooms: 5, baths: 4 },
    sqft: 3500
  },
  {
    id: '6',
    title: 'Modern Glass House',
    location: 'Reykjavik, Iceland',
    rating: 4.99,
    price: 450,
    images: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1449156001407-3932e6040188?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80'
    ],
    details: { bedrooms: 2, baths: 2 },
    sqft: 1400
  },
  {
    id: '7',
    title: 'Traditional Balinese Villa',
    location: 'Ubud, Bali',
    rating: 4.91,
    price: 180,
    images: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1528642466248-acc436417730?auto=format&fit=crop&w=800&q=80'
    ],
    details: { bedrooms: 3, baths: 3 },
    sqft: 2200
  },
  {
    id: '8',
    title: 'London Central Loft',
    location: 'Soho, London',
    rating: 4.79,
    price: 550,
    images: [
      'https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80'
    ],
    details: { bedrooms: 2, baths: 2 },
    sqft: 1100
  }
];

function App() {
  const [filters, setFilters] = useState({ 
    priceRange: { min: 0, max: 2000 } 
  });

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const filteredProperties = PROPERTIES.filter(property => {
    const min = filters.priceRange.min === '' ? 0 : filters.priceRange.min;
    const max = filters.priceRange.max === '' ? Infinity : filters.priceRange.max;
    return property.price >= min && property.price <= max;
  });

  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-text-primary">
        <Header />
        
        {/* Sub-header Filter Area */}
        <div className="fixed top-20 left-0 right-0 z-40 bg-white border-b border-ui-border py-4">
          <div className="max-w-[1440px] mx-auto px-6 flex justify-between items-center">
            <div className="flex gap-8 overflow-x-auto no-scrollbar py-2">
              {['Amazing pools', 'Cabins', 'Beachfront', 'Luxe', 'Views', 'Countryside', 'Tiny homes', 'Castles'].map((cat) => (
                <button key={cat} className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity whitespace-nowrap group">
                  <div className="w-6 h-6 bg-gray-100 rounded-md group-hover:bg-gray-200 transition-colors" />
                  <span className="text-xs font-medium">{cat}</span>
                </button>
              ))}
            </div>
            <FilterBar onFilterChange={handleFilterChange} />
          </div>
        </div>
        
        {/* Main Content Area */}
        <main className="pt-48 pb-10 px-6 max-w-[1440px] mx-auto">
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 gap-y-10">
              {filteredProperties.map((property, index) => (
                <div 
                  key={property.id} 
                  className="animate-in fade-in slide-in-from-bottom-2 duration-500 fill-mode-both" 
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <ListingCard property={property} showSpecs={true} />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <h2 className="text-2xl font-semibold mb-2">No properties found</h2>
              <p className="text-text-secondary">Try adjusting your filters to find what you're looking for.</p>
              <button 
                onClick={() => handleFilterChange({ priceRange: { min: 0, max: 2000 } })}
                className="mt-4 font-semibold underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </main>
      </div>
    </Router>
  );
}

export default App;
