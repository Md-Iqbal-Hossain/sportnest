
import Image from 'next/image';
import React from 'react';
import { FaClock, FaTags } from 'react-icons/fa6';
import { LuMapPin } from 'react-icons/lu';
import { RxPeople } from 'react-icons/rx';
import BookingForm from '@/components/BookingForm';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';

const AllFacilitiesDetailsPage = async ({ params }) => {
    const { id } = await params;
    const {token} = await auth.api.getToken({
        headers: await headers()
    })
    

    // Server-side data compilation
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facility/${id}`,{
        headers:{
            authorization: `Bearer ${token}`
        }
    }, { cache: 'no-store' });
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

                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-900/20 to-transparent"></div>
                            

                            <span className="absolute left-6 top-6 rounded-full bg-white/90 backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gray-800 shadow-lg border border-white/20 transition-all duration-300 hover:bg-emerald-500 hover:text-white">
                                {facility_type}
                            </span>
                        </div>

                        {/* Text and information panel wrappers */}
                        <div className="p-8">
                            <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-8">
                                {name}
                            </h1>

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
