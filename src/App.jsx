import React from 'react';
import PropertyPage from './components/PropertyPage';
import './index.css'
const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-center text-3xl pt-8">Avilable Properties</h1>
      <PropertyPage />
    </div>
  );
};

export default App;
