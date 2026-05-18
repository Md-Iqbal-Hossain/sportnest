// import Image from 'next/image';
// import React from 'react';
// import { LuMapPin } from 'react-icons/lu';
// import { RxPeople } from 'react-icons/rx';

// const FacilityCard = ({facility}) => {
//     const {image, name, location, available_slots, capacity, 
// price_per_hour, 
// facility_type} = facility;
//     return (
//         <div className='border'>
//             <Image className='' alt={name}
//             src={image}
//             height={400}
//             width={400} />

//             <div className='grid grid-cols-3 gap-5'>
//                 <div>
//                     <h2 className='text-xl font-bold'>{name}</h2>
//                 </div>
//                 <div className='flex items-center gap-1'>
//                     {' '}
//                     <LuMapPin /> <span>{location}</span>
//                 </div>
//                 <div className='flex gap-1 items-center'>
//                     <RxPeople /> {capacity}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FacilityCard;


// ***********************************************************************

import Image from "next/image";
import React from "react";
import { LuMapPin } from "react-icons/lu";
import { RxPeople } from "react-icons/rx";
import { MdSportsSoccer } from "react-icons/md";
import { FaClock } from "react-icons/fa";

const FacilityCard = ({ facility }) => {
  const {
    image,
    name,
    location,
    available_slots,
    capacity,
    price_per_hour,
    facility_type,
  } = facility;

  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={500}
          height={350}
          className="h-[240px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

        {/* Facility Type Badge */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-white/90 px-4 py-1 text-sm font-semibold text-gray-900 shadow">
            {facility_type}
          </span>
        </div>

        {/* Price Badge */}
        <div className="absolute right-4 top-4">
          <span className="rounded-full bg-green-600 px-4 py-1 text-sm font-semibold text-white shadow-lg">
            ৳ {price_per_hour}/hr
          </span>
        </div>

        {/* Bottom Title on Image */}
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-2xl font-bold">{name}</h2>
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-4 p-5">
        
        {/* Location + Capacity */}
        <div className="flex items-center justify-between gap-4 text-sm text-gray-600">
          
          <div className="flex items-center gap-2">
            <LuMapPin className="text-lg text-red-500" />
            <span>{location}</span>
          </div>

          <div className="flex items-center gap-2">
            <RxPeople className="text-lg text-blue-500" />
            <span>{capacity} Players</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-200"></div>

        {/* Bottom Row */}
        <div className="flex items-center justify-between">
          
          {/* Available Slots */}
          <div className="flex items-center gap-2">
            <FaClock className="text-green-600" />
            <span className="text-sm font-medium text-gray-700">
              {available_slots} Slots Available
            </span>
          </div>

          {/* Button */}
          <button className="rounded-xl bg-gray-900 px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-600">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;