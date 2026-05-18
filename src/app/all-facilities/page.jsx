import FacilityCard from '@/components/FacilityCard';
import React from 'react';

const AllFacilitiesPage = async () => {
    const res = await fetch('http://localhost:5000/facility')
    const facilities = await res.json();
    
    return (
        <div className='max-w-7xl mx-auto'>
            <h1>All Facilities</h1>

            <div className='grid grid-cols-3 gap-5'>
                {
                    facilities.map(facility => <FacilityCard key={facility._id} facility = {facility} />)
                }
            </div>
        </div>
    );
};

export default AllFacilitiesPage;