
'use client';

import React, { useState, useEffect } from 'react';
import FacilityCard from '@/components/FacilityCard';

export default function AllFacilitiesPage() {
  const [facilities, setFacilities] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFacilities = async () => {
      setLoading(true);
      try {
        const queryParams = new URLSearchParams({
          search: search.trim(),
          type: selectedType
        }).toString();

        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facility?${queryParams}`);
        if (!response.ok) throw new Error('Network error');

        const data = await response.json();
        setFacilities(data);
      } catch (error) {
        console.error('Error loading facilities:', error);
      } finally {
        setLoading(false);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      fetchFacilities();
    }, 400);

    return () => clearTimeout(delayDebounceFn);
  }, [search, selectedType]);

  return (
    <div className="min-h-screen bg-gray-50 px-3 sm:px-6 lg:px-10 py-6 sm:py-8 lg:py-10">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-10 px-2">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
            Explore Sports Facilities
          </h1>

          <p className="mt-2 sm:mt-3 max-w-2xl mx-auto text-sm sm:text-base lg:text-xl text-gray-500">
            Find and reserve the perfect court, pitch, or field for your next game.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between items-stretch sm:items-center bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-100 mb-6 sm:mb-8">

          {/* Search */}
          <div className="relative w-full sm:max-w-md">
            <input
              type="text"
              placeholder="Search by facility name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-4 pr-12 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm sm:text-base"
            />

            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs sm:text-sm"
              >
                Clear
              </button>
            )}
          </div>

          {/* Dropdown */}
          <div className="w-full sm:w-48">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all capitalize cursor-pointer text-sm sm:text-base"
            >
              <option value="all">All Sports</option>
              <option value="football">Football</option>
              <option value="cricket">Cricket</option>
              <option value="badminton">Badminton</option>
              <option value="tennis">Tennis</option>
              <option value="basketball">Basketball</option>
              <option value="volleyball">Volleyball</option>
              <option value="swimming">Swimming</option>
              <option value="gym">Gym</option>
            </select>
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl h-72 sm:h-80 animate-pulse border border-gray-100 p-3 sm:p-4 space-y-3 sm:space-y-4"
              >
                <div className="bg-gray-200 h-40 sm:h-44 w-full rounded-lg" />
                <div className="h-5 sm:h-6 bg-gray-200 rounded w-3/4" />
                <div className="h-3 sm:h-4 bg-gray-200 rounded w-1/2" />
              </div>
            ))}
          </div>
        ) : facilities.length > 0 ? (
          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4 sm:gap-6
          ">
            {facilities.map((facility) => (
              <FacilityCard key={facility._id} facility={facility} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16 bg-white rounded-xl border border-gray-100 shadow-sm px-4">
            <p className="text-lg sm:text-xl font-medium text-gray-600">
              No matching facilities found
            </p>
            <p className="text-gray-400 mt-1 text-xs sm:text-sm">
              Try modifying your search or filters.
            </p>

            <button
              onClick={() => {
                setSearch('');
                setSelectedType('all');
              }}
              className="mt-4 inline-flex items-center px-4 py-2 text-xs sm:text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}