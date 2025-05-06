// src/components/PropertyCard.jsx

import React from 'react';

const PropertyCard = ({ properties }) => {
  return (
    <div className="text-black w-[70%] grid grid-cols-3 gap-[2vw] bg-blue-100 overflow-y-scroll p-[2vw] h-[81vh] rounded-[1vw]">
      {properties.map((property) => (
        <div key={property.id} className="bg-white p-4 rounded shadow-md">
          <img
            src={property.coverPhoto?.url}
            alt="property"
            className="w-full h-[12vw] object-cover rounded"
          />
          <h3 className="text-lg mt-2">{property.title?.slice(0, 40)}...</h3>
          <p className="text-sm text-gray-700">AED {property.price}</p>
          <p className="text-xs text-gray-500">
            🛏 {property.rooms} | 🛁 {property.baths} | 📐 {property.area.toFixed(0)} sqft
          </p>
        </div>
      ))}
    </div>
  );
};

export default PropertyCard;
