import React, { useState, useEffect } from 'react';

const FilterPanel = ({ filters, setFilters }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  useEffect(() => {
    setLocalFilters(filters); // Sync external filters on mount/change
  }, [filters]);

  const updateLocal = (key, value) => {
    setLocalFilters({ ...localFilters, [key]: value });
  };

  const handleApply = () => {
    setFilters(localFilters);
  };

  return (
    <div className="bg-blue-100 w-[30%] rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Filters</h2>

      <label>Purpose</label>
      <select value={localFilters.purpose} onChange={(e) => updateLocal('purpose', e.target.value)} className="w-full p-2 mb-3">
        <option value="for-sale">Buy</option>
        <option value="for-rent">Rent</option>
      </select>

      <label>Type</label>
      <select value={localFilters.categoryExternalID} onChange={(e) => updateLocal('categoryExternalID', e.target.value)} className="w-full p-2 mb-3">
        <option value="4">Apartment</option>
        <option value="16">Villa</option>
        <option value="3">Townhouse</option>
        <option value="25">Penthouse</option>
      </select>

      <label>Min Price</label>
      <input type="number" value={localFilters.priceMin} onChange={(e) => updateLocal('priceMin', e.target.value)} className="w-full p-2 mb-3" />

      <label>Max Price</label>
      <input type="number" value={localFilters.priceMax} onChange={(e) => updateLocal('priceMax', e.target.value)} className="w-full p-2 mb-3" />

      <label>Bedrooms</label>
      <select value={localFilters.roomsMin} onChange={(e) => updateLocal('roomsMin', e.target.value)} className="w-full p-2 mb-3">
        <option value="">Any</option>
        <option value="1">1+</option>
        <option value="2">2+</option>
        <option value="3">3+</option>
      </select>

      <label>Bathrooms</label>
      <select value={localFilters.bathsMin} onChange={(e) => updateLocal('bathsMin', e.target.value)} className="w-full p-2 mb-3">
        <option value="">Any</option>
        <option value="1">1+</option>
        <option value="2">2+</option>
        <option value="3">3+</option>
      </select>

      <label>Furnishing</label>
      <select value={localFilters.furnishingStatus} onChange={(e) => updateLocal('furnishingStatus', e.target.value)} className="w-full p-2 mb-4">
        <option value="">All</option>
        <option value="furnished">Furnished</option>
        <option value="unfurnished">Unfurnished</option>
        <option value="semi-furnished">Semi-Furnished</option>
      </select>

      <button onClick={handleApply} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        Apply Filters
      </button>
    </div>
  );
};

export default FilterPanel;
