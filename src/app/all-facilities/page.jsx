// import FacilityCard from '@/components/FacilityCard';
// import React from 'react';

// const AllFacilitiesPage = async () => {
//     const res = await fetch('http://localhost:5000/facility')
//     const facilities = await res.json();
    
//     return (
//         <div className='max-w-7xl mx-auto'>
//             <h1>All Facilities</h1>

//             <div className='grid grid-cols-3 gap-5'>
//                 {
//                     facilities.map(facility => <FacilityCard key={facility._id} facility = {facility} />)
//                 }
//             </div>
//         </div>
//     );
// };

// export default AllFacilitiesPage;


// **********************************************************************



'use client';

import React, { useState, useEffect } from 'react';
import FacilityCard from '@/components/FacilityCard'; // Adjust this path to your folder layout

export default function AllFacilitiesPage() {
  const [facilities, setFacilities] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [loading, setLoading] = useState(true);

  // Fetch facilities from backend whenever search or filter states change
  useEffect(() => {
    const fetchFacilities = async () => {
      setLoading(true);
      try {
        // Constructs endpoint query string: e.g., http://localhost:5000/facility?search=stadium&type=football
        const queryParams = new URLSearchParams({
          search: search.trim(),
          type: selectedType
        }).toString();

        const response = await fetch(`http://localhost:5000/facility?${queryParams}`);
        if (!response.ok) throw new Error('Network error');
        const data = await response.json();
        setFacilities(data);
      } catch (error) {
        console.error('Error loading facilities:', error);
      } finally {
        setLoading(false);
      }
    };

    // Debounce fast typing to minimize over-fetching API requests
    const delayDebounceFn = setTimeout(() => {
      fetchFacilities();
    }, 400);

    return () => clearTimeout(delayDebounceFn);
  }, [search, selectedType]);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Explore Sports Facilities
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Find and reserve the perfect court, pitch, or field for your next game.
          </p>
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-8">
          
          {/* Text Input Search Input Field */}
          <div className="relative w-full sm:max-w-md">
            <input
              type="text"
              placeholder="Search by facility name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-4 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            {search && (
              <button 
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm font-medium"
              >
                Clear
              </button>
            )}
          </div>

          {/* Sport Selection Dropdown Filter */}
          <div className="w-full sm:w-48">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all capitalize cursor-pointer"
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

        {/* Content Presentation Section */}
        {loading ? (
          /* Loading Placeholder Skeleton items */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl h-80 animate-pulse border border-gray-100 p-4 space-y-4">
                <div className="bg-gray-200 h-44 w-full rounded-lg" />
                <div className="h-6 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
              </div>
            ))}
          </div>
        ) : facilities.length > 0 ? (
          /* Facility Cards Result Grid View */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility) => (
              <FacilityCard key={facility._id} facility={facility} />
            ))}
          </div>
        ) : (
          /* Zero Records Fallback Container State */
          <div className="text-center py-16 bg-white rounded-xl border border-gray-100 shadow-sm">
            <p className="text-xl font-medium text-gray-600">No matching facilities found</p>
            <p className="text-gray-400 mt-1 text-sm">Try modifying your text search parameters or changing filters.</p>
            <button
              onClick={() => { setSearch(''); setSelectedType('all'); }}
              className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

