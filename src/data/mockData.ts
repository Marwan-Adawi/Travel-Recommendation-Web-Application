import { Destination } from '../types';

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Kyoto Gardens',
    location: 'Kyoto, Japan',
    description: 'Experience the perfect blend of traditional culture and modern comfort in Japan\'s ancient capital.',
    imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80',
    rating: 4.8,
    priceRange: 'moderate',
    climate: 'temperate',
    activities: ['Cultural Tours', 'Temple Visits', 'Tea Ceremonies'],
    bestFor: ['family', 'couple'],
    reviews: 1250,
  },
  {
    id: '2',
    name: 'Amalfi Coast',
    location: 'Amalfi, Italy',
    description: 'Discover dramatic coastlines, charming villages, and world-class cuisine along Italy\'s most beautiful shores.',
    imageUrl: 'https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?auto=format&fit=crop&q=80',
    rating: 4.9,
    priceRange: 'luxury',
    climate: 'temperate',
    activities: ['Beach', 'Hiking', 'Food Tours'],
    bestFor: ['couple', 'family'],
    reviews: 980,
  },
  {
    id: '3',
    name: 'Banff National Park',
    location: 'Alberta, Canada',
    description: 'Experience the majestic Canadian Rockies with pristine lakes, wildlife, and endless outdoor adventures.',
    imageUrl: 'https://images.unsplash.com/photo-1561134643-568a208fb573?auto=format&fit=crop&q=80',
    rating: 4.7,
    priceRange: 'moderate',
    climate: 'cold',
    activities: ['Hiking', 'Skiing', 'Wildlife Viewing'],
    bestFor: ['family', 'solo'],
    reviews: 1560,
  },
];