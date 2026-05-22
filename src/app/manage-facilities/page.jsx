
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
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';

const ManageFacilitiesPage = () => {
    const [facilities, setFacilities] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchFacilities = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facility`);
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

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to permanently delete this facility?");
        if (!confirmDelete) return;

        try {
            const { data: tokenData } = await authClient.token();

            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facility/${id}`, {
                method: 'DELETE',
                headers: {
                    'authorization': `Bearer ${tokenData?.token}`
                }
            });

            const data = await res.json();

            if (data.deletedCount > 0) {

                setFacilities(prev => prev.filter(fac => fac._id !== id));

                toast.success("Facility deleted successfully!");
            } else {
                toast.error("Could not complete target entry elimination process.");
            }

        } catch (error) {
            console.error("Error executing layout delete pipeline:", error);
            toast.error("Server error while deleting!");
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

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Manage My Facilities</h1>
                    <p className="text-sm text-slate-400 mt-1 font-medium">Edit or remove your listed venues</p>
                </div>

                <Link href="/add-facility">
                    <Button
                        className="rounded-xl bg-gradient-to-br from-teal-600 via-green-400 to-lime-400 hover:bg-emerald-700 text-white font-semibold text-sm px-5 h-11 transition-all"
                        startContent={<IoAddCircleOutline className="text-lg" />}
                    >
                        Add New
                    </Button>
                </Link>
            </div>

            {facilities.length === 0 ? (
                <div className="w-full rounded-2xl border border-slate-200/60 bg-white p-16 flex flex-col items-center justify-center text-center">
                    <div className="p-4 rounded-2xl bg-slate-50 text-slate-400 mb-4">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">No facilities listed yet</h3>
                    <p className="text-xs text-slate-400 mt-1 max-w-xs font-medium">
                        Add your first facility to start receiving active reservations.
                    </p>
                    <Link href="/add-facility" className="mt-6">
                        <Button className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-6 h-10">
                            Add Facility
                        </Button>
                    </Link>
                </div>
            ) : (
                <div className="space-y-4">

                    {facilities.map((facility) => (
                        <Card
                            key={facility._id}
                            className="p-4 rounded-2xl border border-slate-200/60 bg-gray-50 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all hover:shadow-md"
                        >

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">

                                <div className="relative h-20 w-24 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-100">
                                    <Image
                                        src={facility.image || "https://images.unsplash.com/photo-1574629810360-7efbbe195018"}
                                        alt={facility.name}
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <h3 className="text-lg font-bold text-slate-800 tracking-tight">{facility.name}</h3>
                                        <span className="rounded-full bg-lime-400 text-[10px] font-bold uppercase tracking-wider text-emerald-600 px-2 py-0.5">
                                            {facility.facility_type}
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium text-slate-400">
                                        <span className="flex items-center gap-1">
                                            <LuMapPin /> {facility.location}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FaTags /> ৳ {facility.price_per_hour}/hr
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <RxPeople /> Up to {facility.capacity} players
                                        </span>
                                        <span className="rounded-full bg-blue-500/60 text-[10px] font-bold text-white px-2 py-0.5 mt-0.5 sm:mt-0">
                                            {facility.booking_count || 0} Bookings
                                        </span>
                                    </div>
                                </div>

                            </div>

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