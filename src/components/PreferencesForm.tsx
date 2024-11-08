import React, { useState } from 'react';
import { DollarSign, Calendar, Activity, Thermometer } from 'lucide-react';

interface PreferencesFormProps {
  onSubmit: (preferences: TravelPreferences) => void;
}

interface TravelPreferences {
  budget: number;
  startDate: string;
  endDate: string;
  interests: string[];
  climate: string;
}

export function PreferencesForm({ onSubmit }: PreferencesFormProps) {
  const [preferences, setPreferences] = useState<TravelPreferences>({
    budget: 0,
    startDate: '',
    endDate: '',
    interests: [],
    climate: 'moderate'
  });

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === '' ? 0 : Math.max(0, Number(e.target.value));
    setPreferences(prev => ({ ...prev, budget: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(preferences);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
          <DollarSign className="w-4 h-4" />
          Budget
        </label>
        <input
          type="number"
          min="0"
          value={preferences.budget || ''}
          onChange={handleBudgetChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your budget"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Start Date
          </label>
          <input
            type="date"
            value={preferences.startDate}
            onChange={e => setPreferences(prev => ({ ...prev, startDate: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            End Date
          </label>
          <input
            type="date"
            value={preferences.endDate}
            onChange={e => setPreferences(prev => ({ ...prev, endDate: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
          <Activity className="w-4 h-4" />
          Interests
        </label>
        <select
          multiple
          value={preferences.interests}
          onChange={e => setPreferences(prev => ({
            ...prev,
            interests: Array.from(e.target.selectedOptions, option => option.value)
          }))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="culture">Culture & History</option>
          <option value="nature">Nature & Outdoors</option>
          <option value="food">Food & Cuisine</option>
          <option value="adventure">Adventure Sports</option>
          <option value="relaxation">Relaxation & Wellness</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
          <Thermometer className="w-4 h-4" />
          Preferred Climate
        </label>
        <select
          value={preferences.climate}
          onChange={e => setPreferences(prev => ({ ...prev, climate: e.target.value }))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="tropical">Tropical</option>
          <option value="moderate">Moderate</option>
          <option value="cold">Cold</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Find Recommendations
      </button>
    </form>
  );
}