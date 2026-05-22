
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@heroui/react';
import { GiShuttlecock } from 'react-icons/gi';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-hot-toast';

const BookingForm = ({ facilityName, pricePerHour, availableSlots, facilityImage }) => {
    const [bookingDate, setBookingDate] = useState('');
    const [selectedSlot, setSelectedSlot] = useState('');
    const [duration, setDuration] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { data: session } = authClient.useSession();

    const totalPrice = pricePerHour * duration;

    const handleBookingSubmit = async (e) => {
        e.preventDefault();
        if (!bookingDate || !selectedSlot) return;

        if (!session?.user) {
            toast.error("Please log in to book this facility!");
            return;
        }

        setIsSubmitting(true);

        const bookingData = {
            facilityName,
            facilityImage,
            date: bookingDate,
            timeSlot: selectedSlot,
            duration: Number(duration),
            totalPrice,
            userEmail: session.user.email,
            userName: session.user.name,
            status: 'Pending',
            bookedAt: new Date()
        };

        const {data:tokenData} = await authClient.token()
        console.log(tokenData);
        

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${tokenData?.token}`
                },
                body: JSON.stringify(bookingData),
            });

            if (response.ok) {
                toast.success('Court reservation successfully confirmed!');

                setBookingDate('');
                setSelectedSlot('');
                setDuration(1);
            } else {
                toast.error('Failed to save booking. Please try again.');
            }
        } catch (error) {
            console.error("Booking dispatch error:", error);
            toast.error('Something went wrong connecting to the server.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/50 backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/70">
            <div className="mb-6">
                <h3 className="text-xl font-extrabold tracking-tight text-slate-900">Book This Facility</h3>
                <p className="text-xs text-slate-400 mt-1 font-medium">Secure your court instantly</p>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-5">
                {/* FACILITY DISPLAY */}
                <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                        Facility
                    </label>
                    <input
                        type="text"
                        value={facilityName}
                        disabled
                        className="w-full rounded-xl border border-slate-100 bg-slate-100/70 px-4 py-3 text-sm font-semibold text-slate-500 outline-none cursor-not-allowed"
                    />
                </div>

                {/* BOOKING DATE */}
                <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                        Booking Date
                    </label>
                    <input
                        type="date"
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-700 outline-none transition-all duration-300 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                        required
                    />
                </div>

                {/* TIME SLOT */}
                <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                        Time Slot
                    </label>
                    <div className="relative">
                        <select
                            value={selectedSlot}
                            onChange={(e) => setSelectedSlot(e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-700 outline-none transition-all duration-300 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 appearance-none cursor-pointer"
                            required
                        >
                            <option value="">Select a time slot</option>
                            {availableSlots?.map((slot, index) => (
                                <option key={index} value={slot}>{slot}</option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400">
                            <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* DURATION */}
                <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                        Duration (Hours)
                    </label>
                    <input
                        type="number"
                        min="1"
                        value={duration}
                        onChange={(e) => setDuration(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-700 outline-none transition-all duration-300 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                        required
                    />
                </div>

                {/* PRICING BREAKDOWN */}
                <div className="rounded-2xl bg-gradient-to-br from-emerald-500/[0.03] to-teal-500/[0.03] p-4 border border-emerald-500/10 transition-all duration-300">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                        <span>৳ {pricePerHour}/hr × {duration} hr</span>
                        <span className="font-mono">৳ {totalPrice}</span>
                    </div>
                    <div className="mt-3 flex items-center justify-between border-t border-dashed border-emerald-500/20 pt-3">
                        <span className="text-sm font-bold text-slate-800">Total Price</span>
                        <span className="text-xl font-black text-emerald-500 font-mono">৳ {totalPrice}</span>
                    </div>
                </div>

                {/* CONFIRM BUTTON */}
                <Button
                    type="submit"
                    isLoading={isSubmitting}
                    className="w-full h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:opacity-95 hover:scale-[1.01] active:scale-[0.99]"
                >
                    Confirm Booking
                </Button>

                {/* SEPARATOR LINE */}
                <div className="border-t border-slate-100 my-2 pt-4 flex justify-center">
                    <Link href="/" className="flex items-center gap-2.5 cursor-pointer group">
                        <div className="bg-gradient-to-br from-emerald-500 via-green-400 to-teal-500 p-2 rounded-xl shadow-md group-hover:scale-105 transition duration-300">
                            <GiShuttlecock className="text-lg text-white" />
                        </div>

                        <div>
                            <h1 className="text-xl font-black tracking-tight bg-gradient-to-r from-emerald-500 via-green-500 to-teal-400 bg-clip-text text-transparent">
                                SportNest
                            </h1>
                            <p className="text-[6px] font-bold uppercase tracking-[2.5px] text-slate-400">
                                Book • Play • Compete
                            </p>
                        </div>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default BookingForm;
