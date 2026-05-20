// // import { Button } from '@heroui/react';
// import { Button } from '@heroui/react';
// import Image from 'next/image';
// import Link from 'next/link';
// // import Link from 'next/link';
// import React from 'react';
// import { FaClock } from 'react-icons/fa6';
// import { LuMapPin } from 'react-icons/lu';
// import { RxPeople } from 'react-icons/rx';

// const AllFacilitiesDetailsPage = async ({params}) => {
//     const {id} = await params;

//     const res = await fetch(`http://localhost:5000/facility/${id}`);
//     const facility = await res.json();

//     const {
//         image,
//         name,
//         location,
//         available_slots,
//         capacity,
//         price_per_hour,
//         facility_type,
//         description
//     } = facility;

//     // 🎨 Badge color logic
// const getBadgeColor = (type) => {
//     switch (type?.toLowerCase()) {
//         case "football":
//             return "bg-green-300 text-white";
//         case "cricket":
//             return "bg-blue-300 text-white";
//         case "badminton":
//             return "bg-purple-300 text-white";
//         case "tennis":
//             return "bg-yellow-300 text-black";
//         default:
//             return "bg-gray-300 text-white";
//     }
// };
    
//     return (
//         <div className='max-w-7xl mx-auto'>
//             {/* <Image alt={name} src={image} height={500} width={800} /> */}
//             {/* IMAGE SECTION */}
//                         <div className="relative overflow-hidden">
//                             <Image
//                                 src={image}
//                                 alt={name}
//                                 width={800}
//                                 height={500}
//                                 className="h-[240px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
//                             />
            
//                             {/* DARK OVERLAY */}
//                             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            
//                             {/* FACILITY TYPE BADGE */}
//                             <div className="absolute left-4 top-4">
//                                 <span
//                                     className={`rounded-full px-4 py-1 text-sm font-semibold shadow ${getBadgeColor(
//                                         facility_type
//                                     )}`}
//                                 >
//                                     {facility_type}
//                                 </span>
//                             </div>
            
//                             {/* PRICE BADGE */}
//                             <div className="absolute right-4 top-4">
//                                 <span className="rounded-full bg-green-600 px-4 py-1 text-sm font-semibold text-white shadow-lg">
//                                     ৳ {price_per_hour}/hr
//                                 </span>
//                             </div>
            
//                             {/* TITLE ON IMAGE */}
//                             <div className="absolute bottom-4 left-4 text-white">
//                                 <h2 className="text-2xl font-bold">{name}</h2>
//                             </div>
//                         </div>

//             {/* CONTENT SECTION */}
//                         <div className="space-y-4 p-5">
            
//                             {/* LOCATION + CAPACITY */}
//                             <div className="flex items-center justify-between text-sm text-gray-600">
            
//                                 <div className="flex items-center gap-2">
//                                     <LuMapPin className="text-lg text-red-500" />
//                                     <span>{location}</span>
//                                 </div>
            
//                                 <div className="flex items-center gap-2">
//                                     <RxPeople className="text-lg text-blue-500" />
//                                     <span>Up to {capacity} Players</span>
//                                 </div>
//                             </div>
            
//                             {/* DIVIDER */}
//                             <div className="border-t border-dashed border-gray-200"></div>
            
//                             {/* BOTTOM SECTION */}
//                             <div className="flex items-center justify-between">
            
//                                 {/* SLOTS */}
//                                 <div className="flex items-center gap-2">
//                                     <FaClock className="text-green-600" />
//                                     <span className="text-sm font-medium text-gray-700">
//                                         {available_slots.length} Slots Available
//                                     </span>
//                                 </div>
            
//                                 <div>
//                                     <h1>Overview</h1>
//                                 <p>{description}</p>
//                                 </div>
//                             </div>
//                         </div>
             
            
//         </div>
//     );
// };

// export default AllFacilitiesDetailsPage;



// *****************************************************************************************************************************************************




// import Image from 'next/image';
// import React from 'react';
// import { FaClock, FaTags } from 'react-icons/fa6';
// import { LuMapPin } from 'react-icons/lu';
// import { RxPeople } from 'react-icons/rx';
// import BookingForm from '@/components/BookingForm';

// const AllFacilitiesDetailsPage = async ({ params }) => {
//     const { id } = await params;

//     // Fetch details safely from backend server
//     const res = await fetch(`http://localhost:5000/facility/${id}`, { cache: 'no-store' });
//     const facility = await res.json();

//     const {
//         image,
//         name,
//         location,
//         available_slots = [],
//         capacity,
//         price_per_hour,
//         facility_type,
//         description
//     } = facility;

//     return (
//         <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
//             {/* Split layout: Two-column grid layout for Details and Form */}
//             <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 items-start">
                
//                 {/* LEFT 2 COLUMNS: Facility Meta Information */}
//                 <div className="lg:col-span-2 space-y-6">
                    
//                     {/* CARD & IMAGE SECTION */}
//                     <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
//                         <div className="relative h-[400px] w-full overflow-hidden">
//                             <Image
//                                 src={image}
//                                 alt={name}
//                                 fill
//                                 priority
//                                 className="object-cover"
//                             />
//                             {/* Gradient Overlay for Text Readability */}
//                             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            
//                             {/* Sport Tag */}
//                             <span className="absolute left-4 top-4 rounded-full bg-emerald-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-md">
//                                 {facility_type}
//                             </span>
//                         </div>

//                         {/* Title and Badge grid section */}
//                         <div className="p-6">
//                             <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-6">
//                                 {name}
//                             </h1>

//                             {/* 2x2 Clean Minimal Info Display widgets */}
//                             <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
//                                 <div className="rounded-2xl bg-gray-50 p-4 border border-gray-100">
//                                     <div className="flex items-center gap-2 text-gray-400 mb-1">
//                                         <LuMapPin className="text-sm text-red-400" />
//                                         <span className="text-[10px] uppercase font-bold tracking-wider">Location</span>
//                                     </div>
//                                     <p className="text-sm font-semibold text-gray-800">{location}</p>
//                                 </div>

//                                 <div className="rounded-2xl bg-gray-50 p-4 border border-gray-100">
//                                     <div className="flex items-center gap-2 text-gray-400 mb-1">
//                                         <RxPeople className="text-sm text-blue-400" />
//                                         <span className="text-[10px] uppercase font-bold tracking-wider">Capacity</span>
//                                     </div>
//                                     <p className="text-sm font-semibold text-gray-800">Up to {capacity} players</p>
//                                 </div>

//                                 <div className="rounded-2xl bg-gray-50 p-4 border border-gray-100">
//                                     <div className="flex items-center gap-2 text-gray-400 mb-1">
//                                         <FaTags className="text-sm text-amber-400" />
//                                         <span className="text-[10px] uppercase font-bold tracking-wider">Rate</span>
//                                     </div>
//                                     <p className="text-sm font-semibold text-gray-800">৳ {price_per_hour}/hr</p>
//                                 </div>

//                                 <div className="rounded-2xl bg-gray-50 p-4 border border-gray-100">
//                                     <div className="flex items-center gap-2 text-gray-400 mb-1">
//                                         <FaClock className="text-sm text-emerald-400" />
//                                         <span className="text-[10px] uppercase font-bold tracking-wider">Availability</span>
//                                     </div>
//                                     <p className="text-sm font-semibold text-gray-800">{available_slots.length} Slots</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* ABOUT/OVERVIEW DESCRIPTION SECTION */}
//                     <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
//                         <h3 className="text-lg font-bold text-gray-900 mb-3">About this facility</h3>
//                         <p className="text-sm leading-relaxed text-gray-600 font-normal">
//                             {description || "No specific descriptions provided for this dynamic spot yet. Experience premium infrastructure, stellar field tracking, and highly rated professional lighting setups."}
//                         </p>
//                     </div>
//                 </div>

//                 {/* RIGHT 1 COLUMN: Sticky Interactive Booking Form Container */}
//                 <div className="lg:sticky lg:top-6">
//                     <BookingForm 
//                         facilityName={name} 
//                         pricePerHour={price_per_hour} 
//                         availableSlots={available_slots} 
//                     />
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default AllFacilitiesDetailsPage;


// ***********************************************************************


import Image from 'next/image';
import React from 'react';
import { FaClock, FaTags } from 'react-icons/fa6';
import { LuMapPin } from 'react-icons/lu';
import { RxPeople } from 'react-icons/rx';
import BookingForm from '@/components/BookingForm';

const AllFacilitiesDetailsPage = async ({ params }) => {
    const { id } = await params;

    // Server-side data compilation
    const res = await fetch(`http://localhost:5000/facility/${id}`, { cache: 'no-store' });
    const facility = await res.json();

    const {
        image,
        name,
        location,
        available_slots = [],
        capacity,
        price_per_hour,
        facility_type,
        description
    } = facility;

    return (
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 bg-gray-50/30 min-h-screen animate-fade-in">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 items-start">
                
                {/* CONTROLLER SECTION LEFT */}
                <div className="lg:col-span-2 space-y-8">
                    
                    {/* CARD & HERO SECTION */}
                    <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
                        <div className="relative h-[440px] w-full overflow-hidden group">
                            <Image
                                src={image}
                                alt={name}
                                fill
                                priority
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            {/* Cinematic vignette gradient filter masking */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-900/20 to-transparent"></div>
                            
                            {/* Animated floating sport category chip */}
                            <span className="absolute left-6 top-6 rounded-full bg-white/90 backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gray-800 shadow-lg border border-white/20 transition-all duration-300 hover:bg-emerald-500 hover:text-white">
                                {facility_type}
                            </span>
                        </div>

                        {/* Text and information panel wrappers */}
                        <div className="p-8">
                            <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-8">
                                {name}
                            </h1>

                            {/* 4 Premium Micro-Dashboard Informational Widgets */}
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                                <div className="rounded-2xl bg-gray-50/60 p-4 border border-gray-100/80 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-gray-100/70 hover:scale-[1.03] bg-gray-100">
                                    <div className="flex items-center gap-2 text-gray-400 mb-1.5 ">
                                        <LuMapPin className="text-sm text-red-500" />
                                        <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Location</span>
                                    </div>
                                    <p className="text-sm font-bold text-gray-800">{location}</p>
                                </div>

                                <div className="rounded-2xl bg-gray-50/60 p-4 border border-gray-100/80 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-gray-100/70 hover:scale-[1.03] bg-gray-100">
                                    <div className="flex items-center gap-2 text-gray-400 mb-1.5">
                                        <RxPeople className="text-sm text-blue-500" />
                                        <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Capacity</span>
                                    </div>
                                    <p className="text-sm font-bold text-gray-800">Up to {capacity} Players</p>
                                </div>

                                <div className="rounded-2xl bg-gray-50/60 p-4 border border-gray-100/80 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-gray-100/70 hover:scale-[1.03] bg-gray-100">
                                    <div className="flex items-center gap-2 text-gray-400 mb-1.5">
                                        <FaTags className="text-sm text-amber-500" />
                                        <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Rate</span>
                                    </div>
                                    <p className="text-sm font-bold text-gray-800">৳ {price_per_hour}/hr</p>
                                </div>

                                <div className="rounded-2xl bg-gray-50/60 p-4 border border-gray-100/80 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-gray-100/70 hover:scale-[1.03] bg-gray-100">
                                    <div className="flex items-center gap-2 text-gray-400 mb-1.5">
                                        <FaClock className="text-sm text-emerald-500" />
                                        <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Slots</span>
                                    </div>
                                    <p className="text-sm font-bold text-gray-800">{available_slots.length} Available</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* OVERVIEW COMPONENT CONTAINER DESCRIPTION */}
                    <div className="rounded-3xl border border-gray-100 p-8 shadow-sm transition-all duration-300 hover:shadow-md">
                        <h3 className="text-lg font-extrabold text-gray-900 tracking-tight mb-4">Facility Overview</h3>
                        <p className="text-sm leading-relaxed text-gray-600 font-normal">
                            {description || "Experience standard high-tier sporting setups engineered with match grade infrastructure layouts. Open slots refresh automatically on scheduled reservation cancellations."}
                        </p>
                    </div>
                </div>

                {/* FIXED STICKY SYSTEM POSITIONED FORM CONTAINER RIGHT */}
                <div className="lg:sticky lg:top-8">
                    <BookingForm 
                        facilityName={name} 
                        pricePerHour={price_per_hour} 
                        availableSlots={available_slots}
                        facilityImage={facility.image}
                    />
                </div>

            </div>
        </div>
    );
};

export default AllFacilitiesDetailsPage;