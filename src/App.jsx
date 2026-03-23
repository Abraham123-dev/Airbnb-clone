import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import CategoryBar from './components/CategoryBar';
import ListingCard from './components/ListingCard';
import FilterBar from './components/FilterBar';

const PROPERTIES = [
  {
    id: '1',
    title: 'Luxury Villa with Infinity Pool',
    location: 'Santorini, Greece',
    rating: 4.95,
    price: 850,
    categories: ['amazing-pools', 'luxe'],
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
    categories: ['cabins', 'countryside'],
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
    categories: ['trending'],
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
    categories: ['beachfront', 'luxe'],
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
    categories: ['countryside'],
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
    categories: ['trending', 'countryside'],
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
    categories: ['amazing-pools', 'luxe'],
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
    categories: ['trending'],
    images: [
      'https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80'
    ],
    details: { bedrooms: 2, baths: 2 },
    sqft: 1100
  },
  {
    id: '9',
    title: 'Central Soho Loft',
    location: 'Soho, London',
    rating: 4.79,
    price: 550,
    categories: ['trending'],
    images: [
      'https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80'
    ],
    details: { bedrooms: 2, baths: 2 },
    sqft: 1100
  },
  {
    id: '10',
    title: 'Bamboo Treehouse',
    location: 'Ubud, Bali',
    rating: 4.96,
    price: 220,
    categories: ['cabins', 'trending'],
    images: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80'
    ],
    details: { bedrooms: 1, baths: 1 },
    sqft: 500
  },
  {
    id: '11',
    title: 'Desert Sun Dome',
    location: 'Joshua Tree, CA',
    rating: 4.89,
    price: 310,
    categories: ['desert'],
    images: [
      'https://images.unsplash.com/photo-1445013021642-872c5b013d67?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80'
    ],
    details: { bedrooms: 1, baths: 1 },
    sqft: 800
  },
  {
    id: '12',
    title: 'Historic French Chateau',
    location: 'Loire Valley, France',
    rating: 4.97,
    price: 1500,
    categories: ['historical', 'luxe'],
    images: [
      'https://images.unsplash.com/photo-1505843513577-22bb7d21ef45?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80'
    ],
    details: { bedrooms: 8, baths: 6 },
    sqft: 6500
  },
  {
    id: '13',
    title: 'Serene Lakefront Cabin',
    location: 'Banff, Canada',
    rating: 4.92,
    price: 380,
    categories: ['lake', 'cabins'],
    images: [
      'https://images.unsplash.com/photo-1449156001407-3932e6040188?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80'
    ],
    details: { bedrooms: 3, baths: 2 },
    sqft: 1600
  },
  {
    id: '14',
    title: 'Arctic Mirror House',
    location: 'Tromsø, Norway',
    rating: 4.99,
    price: 600,
    categories: ['tiny-homes', 'arctic'],
    images: [
      'https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1449156001407-3932e6040188?auto=format&fit=crop&w=800&q=80'
    ],
    details: { bedrooms: 1, baths: 1 },
    sqft: 400
  },
  {
    id: '15',
    title: 'Private Cove Island',
    location: 'Exuma, Bahamas',
    rating: 5.0,
    price: 2500,
    categories: ['island', 'beachfront'],
    images: [
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80'
    ],
    details: { bedrooms: 2, baths: 2 },
    sqft: 1200
  },
  {
    id: '16',
    title: 'Highland Castle',
    location: 'Inverness, Scotland',
    rating: 4.88,
    price: 950,
    categories: ['castles', 'historical'],
    images: [
      'https://images.unsplash.com/photo-1505843513577-22bb7d21ef45?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80'
    ],
    details: { bedrooms: 6, baths: 4 },
    sqft: 4800
  },
  {
    id: '17',
    title: 'Modern Jungle Retreat',
    location: 'Uluwatu, Bali',
    rating: 4.94,
    price: 420,
    categories: ['amazing-pools', 'trending'],
    images: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80'
    ],
    details: { bedrooms: 3, baths: 3 },
    sqft: 2000
  }
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filters, setFilters] = useState({ 
    priceRange: { min: 0, max: 2000 } 
  });

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const filteredProperties = PROPERTIES.filter(property => {
    const matchesCategory = selectedCategory 
      ? property.categories.includes(selectedCategory) 
      : true;
    const min = filters.priceRange.min === '' ? 0 : filters.priceRange.min;
    const max = filters.priceRange.max === '' ? Infinity : filters.priceRange.max;
    const matchesPrice = property.price >= min && property.price <= max;
    
    return matchesCategory && matchesPrice;
  });

  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-text-primary">
        <Header />
        
        {/* Sub-header Filter Area */}
        <div className="fixed top-20 left-0 right-0 z-40 bg-white border-b border-ui-border">
          <div className="max-w-[1440px] mx-auto px-6 h-24 flex items-center justify-between gap-8">
            <div className="flex-1 overflow-hidden">
               <CategoryBar selected={selectedCategory} onSelect={setSelectedCategory} />
            </div>
            <div className="flex-shrink-0 mb-[-8px]">
               <FilterBar onFilterChange={handleFilterChange} />
            </div>
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
              <p className="text-text-secondary">Try adjusting your filters or category to find what you're looking for.</p>
              <button 
                onClick={() => {
                   setSelectedCategory(null);
                   handleFilterChange({ priceRange: { min: 0, max: 2000 } });
                }}
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
