import React, { useState } from 'react';
import { PreferencesForm } from './components/PreferencesForm';
import { DestinationList } from './components/DestinationList';
import { TravelPreferences } from './types';
import { Globe } from 'lucide-react';

function App() {
  const [preferences, setPreferences] = useState<TravelPreferences | null>(null);

  const handlePreferencesSubmit = (newPreferences: TravelPreferences) => {
    setPreferences(newPreferences);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Globe className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">European Travel Advisor</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Discover Your Perfect European Getaway
          </h2>
          <p className="text-lg text-gray-600">
            Tell us your preferences and we'll recommend the perfect European destinations for you
          </p>
        </div>

        <div className="grid lg:grid-cols-[350px,1fr] gap-8">
          <PreferencesForm onSubmit={handlePreferencesSubmit} />
          {preferences && <DestinationList preferences={preferences} />}
        </div>
      </main>
    </div>
  );
}

export default App;