import { Destination } from '../types';

export const europeanDestinations: Destination[] = [
  {
    id: 'e1',
    name: 'Mediterranean Coast',
    location: 'Southern Europe',
    description: 'Crystal-clear waters, charming coastal villages, and fresh Mediterranean cuisine make this destination perfect for beach lovers and food enthusiasts.',
    imageUrl: 'https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?auto=format&fit=crop&q=80',
    rating: 4.8,
    priceRange: 'moderate',
    climate: 'temperate',
    activities: ['Beach Life', 'Coastal Hiking', 'Wine Tasting', 'Local Markets'],
    bestFor: ['couple', 'family'],
    reviews: 2150,
    basePricePerDay: 150
  },
  {
    id: 'e2',
    name: 'Alpine Adventure',
    location: 'Central Europe',
    description: 'Majestic mountain peaks, pristine lakes, and traditional chalets offer year-round activities from skiing to summer hiking.',
    imageUrl: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&q=80',
    rating: 4.9,
    priceRange: 'luxury',
    climate: 'cold',
    activities: ['Skiing', 'Mountain Hiking', 'Spa & Wellness', 'Alpine Sports'],
    bestFor: ['family', 'solo'],
    reviews: 1840,
    basePricePerDay: 200
  },
  {
    id: 'e3',
    name: 'Historic Countryside',
    location: 'Western Europe',
    description: 'Rolling hills dotted with medieval castles, vineyards, and charming villages perfect for history buffs and wine enthusiasts.',
    imageUrl: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80',
    rating: 4.7,
    priceRange: 'moderate',
    climate: 'temperate',
    activities: ['Castle Tours', 'Wine Tasting', 'Cycling', 'Local Cuisine'],
    bestFor: ['couple', 'family'],
    reviews: 1650,
    basePricePerDay: 120
  }
];