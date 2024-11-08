export interface TravelPreferences {
  budget: 'budget' | 'moderate' | 'luxury';
  travelStyle: 'family' | 'solo' | 'couple';
  interests: string[];
  climate: 'tropical' | 'temperate' | 'cold';
  duration: number;
}

export interface Destination {
  id: string;
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  rating: number;
  priceRange: string;
  climate: string;
  activities: string[];
  bestFor: string[];
  reviews: number;
  basePricePerDay: number;
}

export interface UserProfile {
  preferences: TravelPreferences;
  savedDestinations: string[];
}