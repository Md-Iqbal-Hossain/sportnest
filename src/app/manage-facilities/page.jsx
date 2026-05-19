// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { Button } from '@heroui/react';
// import { IoAddCircleOutline } from 'react-icons/io5';

// const ManageFacilitiesPage = () => {
//     // Mimicking the exact database empty-state condition from your UI illustration image
//     const [facilities, setFacilities] = useState([]);

//     return (
//         <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 bg-slate-50/30 min-h-screen">
//             {/* COMPONENT HEADER BACKPLANE PANEL */}
//             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
//                 <div>
//                     <h1 className="text-3xl font-bold tracking-tight text-slate-900">
//                         Manage My Facilities
//                     </h1>
//                     <p className="text-sm text-slate-500 mt-1">
//                         Edit or remove your listed venues
//                     </p>
//                 </div>

//                 {/* Secondary upper absolute fallback call-to-action control element */}
//                 <Link href="/add-facility">
//                     <Button 
//                         className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-5 h-11 transition-all duration-200 shadow-sm shadow-emerald-600/10 hover:scale-[1.01]"
//                         startContent={<IoAddCircleOutline className="text-lg" />}
//                     >
//                         Add New
//                     </Button>
//                 </Link>
//             </div>

//             {/* CONDITIONAL RENDER INTERACTION DESK */}
//             {facilities.length === 0 ? (
//                 <div className="w-full rounded-2xl border border-slate-200/60 bg-white p-12 md:p-20 shadow-sm flex flex-col items-center justify-center text-center">

//                     {/* SVG/Asset container matching the layout structure of your system graphics image */}
//                     <div className="relative mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-transform duration-300 hover:scale-105">
//                         <svg 
//                             className="w-16 h-16 text-slate-400" 
//                             fill="none" 
//                             stroke="currentColor" 
//                             viewBox="0 0 24 24"
//                         >
//                             <path 
//                                 strokeLinecap="round" 
//                                 strokeLinejoin="round" 
//                                 strokeWidth="1.5" 
//                                 d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
//                             />
//                         </svg>
//                         <div className="absolute -top-1 -right-1 flex h-4 w-4">
//                             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
//                             <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
//                         </div>
//                     </div>

//                     <h3 className="text-xl font-bold text-slate-800 tracking-tight">
//                         No facilities listed yet
//                     </h3>

//                     <p className="text-sm text-slate-400 mt-2 max-w-sm font-medium leading-relaxed">
//                         Add your first facility to start receiving bookings and managing court reservation timelines.
//                     </p>

//                     <Link href="/add-facility" className="mt-8">
//                         <Button 
//                             className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-8 h-12 transition-all duration-200 shadow-md shadow-emerald-600/10 hover:scale-[1.02] active:scale-[0.98]"
//                         >
//                             Add Facility
//                         </Button>
//                     </Link>

//                 </div>
//             ) : (
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {/* Facility control lists would maps and populate arrays sequentially here */}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ManageFacilitiesPage;




// ************************************************


'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Card } from '@heroui/react';
import { IoAddCircleOutline } from 'react-icons/io5';
import { FiEdit3, FiTrash2 } from 'react-icons/fi';
import { LuMapPin } from 'react-icons/lu';
import { FaTags } from 'react-icons/fa6';
import { RxPeople } from 'react-icons/rx';
import { BsFillTrash2Fill } from 'react-icons/bs';

const ManageFacilitiesPage = () => {
    const [facilities, setFacilities] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch facilities assigned to current mock user database profile
    const fetchFacilities = async () => {
        try {
            const res = await fetch('http://localhost:5000/facility');
            const data = await res.json();
            setFacilities(data);
        } catch (error) {
            console.error("Error pulling database items:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFacilities();
    }, []);

    // Hot Action Delete Handler Pipeline
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to permanently delete this facility?");
        if (!confirmDelete) return;

        try {
            const res = await fetch(`http://localhost:5000/facility/${id}`, {
                method: 'DELETE'
            });
            const data = await res.json();

            if (data.deletedCount > 0) {
                // Instantly filter view matrix without forcing full page layout cycles
                setFacilities(prev => prev.filter(fac => fac._id !== id));
            } else {
                alert("Could not complete target entry elimination process.");
            }
        } catch (error) {
            console.error("Error executing layout delete pipeline:", error);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen text-sm font-semibold text-slate-500">
                Loading workspace dashboards...
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 min-h-screen bg-slate-50/20">
            {/* MANAGEMENT DASHBOARD HEADER SUBPANEL */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Manage My Facilities</h1>
                    <p className="text-sm text-slate-400 mt-1 font-medium">Edit or remove your listed venues</p>
                </div>
                <Link href="/add-facility">
                    <Button
                        className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-5 h-11 transition-all"
                        startContent={<IoAddCircleOutline className="text-lg" />}
                    >
                        Add New
                    </Button>
                </Link>
            </div>

            {/* CONDITIONAL RENDER ENGINE */}
            {facilities.length === 0 ? (
                <div className="w-full rounded-2xl border border-slate-200/60 bg-white p-16 flex flex-col items-center justify-center text-center">
                    <div className="p-4 rounded-2xl bg-slate-50 text-slate-400 mb-4">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">No facilities listed yet</h3>
                    <p className="text-xs text-slate-400 mt-1 max-w-xs font-medium">Add your first facility to start receiving active reservations.</p>
                    <Link href="/add-facility" className="mt-6">
                        <Button className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-6 h-10">
                            Add Facility
                        </Button>
                    </Link>
                </div>
            ) : (
                <div className="space-y-4">
                    {/* PLUG IN MATRIX DISPLAY MAPPING MATCHING SCREENSHOT CONFIGURATIONS */}
                    {facilities.map((facility) => (
                        <Card
                            key={facility._id}
                            className="p-4 rounded-2xl border border-slate-200/60 bg-gray-50 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all hover:shadow-md"
                        >
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
                                {/* ASSET IMAGING BOX */}
                                <div className="relative h-20 w-24 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-100">
                                    <Image
                                        src={facility.image || "https://images.unsplash.com/photo-1574629810360-7efbbe195018"}
                                        alt={facility.name}
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                </div>

                                {/* DATA RUNS CONTAINER PANEL */}
                                <div className="space-y-1.5">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <h3 className="text-lg font-bold text-slate-800 tracking-tight">{facility.name}</h3>
                                        <span className="rounded-full bg-lime-400 text-[10px] font-bold uppercase tracking-wider text-emerald-600 px-2 py-0.5">
                                            {facility.facility_type}
                                        </span>
                                    </div>

                                    {/* HORIZONTAL MINI METRIC PILLS */}
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium text-slate-400">
                                        <span className="flex items-center gap-1">
                                            <LuMapPin className="text-slate-400" /> {facility.location}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FaTags className="text-slate-400" /> ৳ {facility.price_per_hour}/hr
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <RxPeople className="text-slate-400" /> Up to {facility.capacity} players
                                        </span>
                                        <span className="rounded-full bg-blue-500/60 text-[10px] font-bold text-white px-2 py-0.5 mt-0.5 sm:mt-0">
                                            {facility.booking_count || 0} Bookings
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* USER CONTROL ROW ACTIONS (EDIT & DELETE TARGET MODAL RIGGING) */}
                            <div className="flex sm:flex-col items-center justify-end gap-2 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-none border-slate-100">
                                <Link href={`/manage-facilities/edit/${facility._id}`} className="w-full sm:w-auto">
                                    <Button
                                        variant="solid"
                                        className="w-full sm:w-20 h-8 rounded-xl bg-stone-200 text-green-800 border border-emerald-600 font-semibold text-[11px] gap-1 hover:bg-green-100 hover:border-emerald-700 transition-all duration-300 shadow-sm hover:shadow-md"
                                        startContent={<FiEdit3 size={13} />}
                                    >
                                        Edit
                                    </Button>
                                </Link>
                                <Button
                                    variant="solid"
                                    onClick={() => handleDelete(facility._id)}
                                    className="w-full sm:w-20 h-8 rounded-xl bg-red-50 text-red-600 border border-red-200 font-semibold text-[11px] gap-1 hover:bg-red-100 transition-all duration-300"
                                    startContent={<BsFillTrash2Fill size={12} />}
                                >
                                    Delete
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ManageFacilitiesPage;