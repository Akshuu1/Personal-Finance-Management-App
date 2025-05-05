// src/App.jsx
import React from 'react';
import PropertyPage from './components/PropertyPage';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-center text-3xl font-bold pt-8">🏠 Property Listings</h1>
      <PropertyPage />
    </div>
  );
};

export default App;
