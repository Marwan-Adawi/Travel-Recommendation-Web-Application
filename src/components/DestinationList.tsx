import React from 'react';
import DestinationCard from './DestinationCard';
import { Destination, TravelPreferences } from '../types';
import { europeanDestinations } from '../data/europeanDestinations';
import { calculateTripBudget } from '../utils/budgetCalculator';

interface DestinationListProps {
  preferences: TravelPreferences;
}

export function DestinationList({ preferences }: DestinationListProps) {
  const filteredDestinations = europeanDestinations
    .filter(dest => {
      // Climate preference match
      if (preferences.climate && dest.climate !== preferences.climate) return false;
      
      // Budget match (calculated based on travel style and duration)
      const tripBudget = calculateTripBudget({
        basePricePerDay: dest.basePricePerDay,
        travelers: preferences.travelStyle === 'family' ? 3 : 1,
        duration: preferences.duration,
        travelStyle: preferences.budget
      });
      
      // Filter based on budget ranges
      if (preferences.budget === 'budget' && tripBudget > preferences.duration * 100) return false;
      if (preferences.budget === 'luxury' && tripBudget < preferences.duration * 200) return false;

      return true;
    })
    .sort((a, b) => {
      // Sort by match with interests
      const aMatchCount = a.activities.filter(activity => 
        preferences.interests.includes(activity.toLowerCase())).length;
      const bMatchCount = b.activities.filter(activity => 
        preferences.interests.includes(activity.toLowerCase())).length;
      return bMatchCount - aMatchCount;
    });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredDestinations.map(destination => (
        <DestinationCard 
          key={destination.id} 
          destination={destination}
          preferences={preferences}
        />
      ))}
      {filteredDestinations.length === 0 && (
        <div className="col-span-full text-center py-8">
          <p className="text-gray-500 text-lg">
            No destinations found matching your preferences. Try adjusting your filters.
          </p>
        </div>
      )}
    </div>
  );
}