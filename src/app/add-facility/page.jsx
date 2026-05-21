
'use client';

import React from 'react';
import {
    FieldError,
    Input,
    Label,
    TextArea,
    TextField,
    Button,
    Card
} from '@heroui/react';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';

const AddFacilityPage = () => {

    const user = {
        email: 'user@gmail.com'
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const facility = Object.fromEntries(formData.entries());

        facility.price_per_hour = Number(facility.price_per_hour);
        facility.capacity = Number(facility.capacity);

        facility.available_slots = facility.available_slots
            .split(',')
            .map(slot => slot.trim());

        facility.owner_email = user.email;
        facility.booking_count = 0;

        try {
            const { data: tokenData } = await authClient.token();

            const res = await fetch('http://localhost:5000/facility', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${tokenData?.token}`
                },
                body: JSON.stringify(facility)
            });

            const data = await res.json();

            if (data.insertedId) {
                toast.success('Facility Added Successfully!');
                e.target.reset();
            } else {
                toast.error('Failed to add facility!');
            }

        } catch (error) {
            console.error(error);
            toast.error('Server error! Please try again.');
        }
    };

    return (
        <div className="w-full min-h-screen bg-slate-50/10 px-4 sm:px-6 md:px-10 lg:px-12 py-8 sm:py-10 md:py-12 flex justify-center">

            <div className="w-full max-w-4xl">

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6 sm:mb-8">
                    Add Facility
                </h1>

                <Card className="w-full p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl border border-slate-200/60 bg-white shadow-xl shadow-slate-100/40">

                    <form onSubmit={onSubmit} className="space-y-5 sm:space-y-6">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

                            {/* Facility Name */}
                            <TextField name="name" isRequired className="w-full">
                                <Label className="text-[10px] sm:text-[11px] font-bold uppercase text-slate-400 mb-2">
                                    Facility Name
                                </Label>
                                <Input placeholder="Elite Football Turf" />
                                <FieldError />
                            </TextField>

                            {/* Facility Type */}
                            <TextField name="facility_type" isRequired className="w-full">
                                <Label className="text-[10px] sm:text-[11px] font-bold uppercase text-slate-400 mb-2">
                                    Facility Type
                                </Label>
                                <Input placeholder="Football / Badminton / Cricket" />
                                <FieldError />
                            </TextField>

                            {/* Location */}
                            <TextField name="location" isRequired className="w-full">
                                <Label className="text-[10px] sm:text-[11px] font-bold uppercase text-slate-400 mb-2">
                                    Location
                                </Label>
                                <Input placeholder="Dhaka, Bangladesh" />
                                <FieldError />
                            </TextField>

                            {/* Price */}
                            <TextField name="price_per_hour" type="number" isRequired className="w-full">
                                <Label className="text-[10px] sm:text-[11px] font-bold uppercase text-slate-400 mb-2">
                                    Price Per Hour
                                </Label>
                                <Input type="number" placeholder="1200" />
                                <FieldError />
                            </TextField>

                            {/* Capacity */}
                            <TextField name="capacity" type="number" isRequired className="w-full">
                                <Label className="text-[10px] sm:text-[11px] font-bold uppercase text-slate-400 mb-2">
                                    Capacity
                                </Label>
                                <Input type="number" placeholder="20" />
                                <FieldError />
                            </TextField>

                            {/* Slots */}
                            <TextField name="available_slots" isRequired className="w-full">
                                <Label className="text-[10px] sm:text-[11px] font-bold uppercase text-slate-400 mb-2">
                                    Available Slots
                                </Label>
                                <Input placeholder="9AM-11AM, 3PM-5PM" />
                                <FieldError />
                            </TextField>

                            {/* Image */}
                            <div className="sm:col-span-2">
                                <TextField name="image" isRequired>
                                    <Label className="text-[10px] sm:text-[11px] font-bold uppercase text-slate-400 mb-2">
                                        Image URL
                                    </Label>
                                    <Input type="url" placeholder="https://image.com/photo.jpg" />
                                    <FieldError />
                                </TextField>
                            </div>

                            {/* Description */}
                            <div className="sm:col-span-2">
                                <TextField name="description" isRequired>
                                    <Label className="text-[10px] sm:text-[11px] font-bold uppercase text-slate-400 mb-2">
                                        Description
                                    </Label>
                                    <TextArea placeholder="Facility description..." />
                                    <FieldError />
                                </TextField>
                            </div>

                        </div>

                        {/* Submit */}
                        <Button
                            type="submit"
                            className="w-full h-11 sm:h-12 md:h-14 rounded-xl bg-gradient-to-br from-teal-600 via-green-400 to-lime-400 text-white font-bold text-sm sm:text-base"
                        >
                            Add Facility
                        </Button>

                    </form>

                </Card>
            </div>
        </div>
    );
};

export default AddFacilityPage;