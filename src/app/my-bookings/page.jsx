
'use client';

import React, { useEffect, useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { Card, Spinner, Button } from '@heroui/react';
import { GiShuttlecock } from 'react-icons/gi';
import { LuCalendarDays, LuClock } from 'react-icons/lu';
import Image from 'next/image';
import { TrashBin } from '@gravity-ui/icons';
import { toast } from 'react-hot-toast';

const MyBookingsPage = () => {
    const [bookings, setBookings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isCancelling, setIsCancelling] = useState(null);

    const { data: session, isPending: isAuthPending } = authClient.useSession();

    useEffect(() => {
        const fetchUserBookings = async () => {
            if (!session?.user?.email) return;

            const { data: tokenData } = await authClient.token()
            console.log(tokenData);

            try {
                const response = await fetch(
                    `http://localhost:5000/booking/${session.user.email}`,
                    {
                        headers: {
                            authorization: `Bearer ${tokenData?.token}`
                        }
                    }
                );
                if (response.ok) {
                    const data = await response.json();
                    setBookings(data);
                }
            } catch (error) {
                console.error("Error loading user bookings:", error);
            } finally {
                setIsLoading(false);
            }
        };

        if (!isAuthPending) {
            if (session?.user) {
                fetchUserBookings();
            } else {
                setIsLoading(false);
            }
        }
    }, [session, isAuthPending]);

    const handleCancel = async (bookingId) => {
        if (!confirm("Are you sure you want to cancel this booking?")) return;

        setIsCancelling(bookingId);
        try {
            const { data: tokenData } = await authClient.token()
            console.log(tokenData);
            const response = await fetch(`http://localhost:5000/booking/${bookingId}`, {
                method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${tokenData?.token}`
            }
            });

            if (response.ok) {
                setBookings((prev) => prev.filter((item) => item._id !== bookingId));

                toast.success("Booking cancelled successfully!");
            } else {

                toast.error("Failed to cancel booking. Please try again.");
            }
        } catch (error) {
            console.error("Cancellation transmission error:", error);
            toast.error("An error occurred. Connection failed.");
        } finally {
            setIsCancelling(null);
        }
    };

    if (isAuthPending || isLoading) {
        return (
            <div className="flex h-64 items-center justify-center">
                <Spinner color="emerald" label="Loading reservation statements..." />
            </div>
        );
    }

    if (!session?.user) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-12 text-center">
                <h1 className="text-2xl font-bold text-slate-800">Access Restricted</h1>
                <p className="text-slate-500 mt-2">Please sign in to see your booking ledger status records.</p>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            {/* Header section */}
            <div className="mb-10 border-b border-slate-100 pb-6">
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">My Bookings</h1>
                <p className="text-sm text-slate-400 mt-1 font-medium">View and manage your complete booking schedule</p>
            </div>

            {bookings.length === 0 ? (
                <div className="text-center py-20 border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50/50">
                    <div className="inline-flex p-4 rounded-2xl bg-white text-slate-400 mb-4 shadow-sm">
                        <GiShuttlecock className="text-4xl text-emerald-500" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-700">No Reservations Yet</h3>
                    <p className="text-sm text-slate-400 max-w-xs mx-auto mt-1">
                        Any courts or facilities you secure will show up right here on your schedule timeline.
                    </p>
                </div>
            ) : (
                <div className="space-y-5">
                    {bookings.map((booking) => (
                        <Card
                            key={booking._id}
                            className="border border-slate-200/60 bg-white shadow-sm hover:shadow-md hover:border-slate-300/80 transition duration-300 rounded-2xl overflow-hidden p-0"
                        >
                            <div className="flex flex-col sm:flex-row items-stretch w-full min-h-[140px]">
                                <div className="w-full sm:w-48 h-44 sm:h-auto bg-slate-100 relative shrink-0 overflow-hidden">
                                    {booking.facilityImage || booking.image ? (
                                        <Image
                                            src={booking.facilityImage || booking.image}
                                            alt={booking.facilityName || "Facility Image"}
                                            fill
                                            sizes="(max-w-640px) 100vw, 192px"
                                            priority
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-300 bg-slate-50/50">
                                            <GiShuttlecock className="text-4xl" />
                                        </div>
                                    )}
                                </div>

                                <div className="flex-1 p-5 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                    <div className="space-y-3">
                                        <div>
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-yellow-600 bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 rounded-full shadow-sm mb-1.5 inline-block">
                                                {booking.status || 'Confirmed'}
                                            </span>
                                            <h2 className="text-xl font-bold text-slate-800 tracking-tight">
                                                {booking.facilityName}
                                            </h2>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-600">
                                            <div className="flex items-center gap-1.5 text-xs font-medium">
                                                <LuCalendarDays className="text-slate-400 text-sm" />
                                                <span>{booking.date}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-xs font-medium">
                                                <LuClock className="text-slate-400 text-sm" />
                                                <span>{booking.timeSlot || `${booking.duration} hr`}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex md:flex-col sm:flex-row items-center md:items-end justify-between md:justify-center gap-4 border-t md:border-t-0 border-slate-100 pt-4 md:pt-0 shrink-0">
                                        <div className="md:text-right">
                                            <span className="text-xs text-slate-400 block font-medium">Total Price</span>
                                            <span className="text-2xl font-black text-slate-900 font-mono tracking-tight">
                                                ৳{booking.totalPrice}
                                            </span>
                                        </div>

                                        <Button
                                            size="md"
                                            isLoading={isCancelling === booking._id}
                                            onClick={() => handleCancel(booking._id)}
                                            className="inline-flex items-center justify-center gap-2 font-bold text-xs tracking-wider uppercase rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200/50 hover:border-rose-300/80 px-5 py-2.5 transition-all duration-200 shadow-sm active:scale-[0.98] w-full sm:w-auto min-w-[130px]"
                                        >
                                            <TrashBin className="text-sm shrink-0" />
                                            <span>Cancel</span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyBookingsPage;