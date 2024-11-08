import React from 'react';
import { Star, MapPin, ThermometerSun, Users } from 'lucide-react';
import { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={destination.imageUrl}
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium">{destination.rating}</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900">{destination.name}</h3>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            destination.priceRange === 'budget' ? 'bg-green-100 text-green-800' :
            destination.priceRange === 'moderate' ? 'bg-blue-100 text-blue-800' :
            'bg-purple-100 text-purple-800'
          }`}>
            {destination.priceRange.charAt(0).toUpperCase() + destination.priceRange.slice(1)}
          </span>
        </div>

        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{destination.location}</span>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">{destination.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {destination.activities.slice(0, 3).map((activity) => (
            <span
              key={activity}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
            >
              {activity}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <ThermometerSun className="w-4 h-4" />
            <span>{destination.climate}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>{destination.bestFor.join(', ')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}