// import { Button } from '@heroui/react';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
// import Link from 'next/link';
import React from 'react';
import { FaClock } from 'react-icons/fa6';
import { LuMapPin } from 'react-icons/lu';
import { RxPeople } from 'react-icons/rx';

const AllFacilitiesDetailsPage = async ({params}) => {
    const {id} = await params;

    const res = await fetch(`http://localhost:5000/facility/${id}`);
    const facility = await res.json();

    const {
        image,
        name,
        location,
        available_slots,
        capacity,
        price_per_hour,
        facility_type,
        description
    } = facility;
    
    return (
        <div className='max-w-7xl mx-auto'>
            <Image alt={name} src={image} height={500} width={800} />

            {/* CONTENT SECTION */}
                        <div className="space-y-4 p-5">
            
                            {/* LOCATION + CAPACITY */}
                            <div className="flex items-center justify-between text-sm text-gray-600">
            
                                <div className="flex items-center gap-2">
                                    <LuMapPin className="text-lg text-red-500" />
                                    <span>{location}</span>
                                </div>
            
                                <div className="flex items-center gap-2">
                                    <RxPeople className="text-lg text-blue-500" />
                                    <span>Up to {capacity} Players</span>
                                </div>
                            </div>
            
                            {/* DIVIDER */}
                            <div className="border-t border-dashed border-gray-200"></div>
            
                            {/* BOTTOM SECTION */}
                            <div className="flex items-center justify-between">
            
                                {/* SLOTS */}
                                <div className="flex items-center gap-2">
                                    <FaClock className="text-green-600" />
                                    <span className="text-sm font-medium text-gray-700">
                                        {available_slots.length} Slots Available
                                    </span>
                                </div>
            
                                <div>
                                    <h1>Overview</h1>
                                <p>{description}</p>
                                </div>
                            </div>
                        </div>
             
            
        </div>
    );
};

export default AllFacilitiesDetailsPage;