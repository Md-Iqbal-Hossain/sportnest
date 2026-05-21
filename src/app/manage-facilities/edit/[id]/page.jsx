'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { FieldError, Input, Label, TextArea, TextField, Button, Card } from '@heroui/react';
import { authClient } from '@/lib/auth-client';

const EditFacilityPage = () => {
    const router = useRouter();
    const { id } = useParams();

    const [facility, setFacility] = useState(null);
    const [loading, setLoading] = useState(true);

    // Load original source payload parameters from database instance on load
    useEffect(() => {
        const fetchFacilityDetails = async () => {
            const { data: tokenData } = await authClient.token();
            console.log(tokenData);
            try {
                const res = await fetch(`http://localhost:5000/facility/${id}`, {
                    headers: {
                        authorization: `Bearer ${tokenData?.token}`
                    }
                });
                const data = await res.json();
                setFacility(data);
            } catch (error) {
                console.error("Error retrieving existing record configurations:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchFacilityDetails();
    }, [id]);

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const updatedFields = Object.fromEntries(formData.entries());

        // Standard array transformations parsing data vectors back safely
        updatedFields.price_per_hour = Number(updatedFields.price_per_hour);
        updatedFields.capacity = Number(updatedFields.capacity);
        updatedFields.available_slots = updatedFields.available_slots.split(',').map(s => s.trim());

        try {
            const { data: tokenData } = await authClient.token();
            console.log(tokenData);
            const res = await fetch(`http://localhost:5000/facility/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${tokenData?.token}`
                },
                body: JSON.stringify(updatedFields)
            });
            const data = await res.json();

            if (data.modifiedCount > 0 || data.matchedCount > 0) {
                alert('Facility details updated successfully!');
                router.push('/manage-facilities');
                router.refresh();
            }
        } catch (error) {
            console.error("Error updating facility parameters:", error);
        }
    };

    if (loading) return <div className="text-center py-20 text-slate-400 text-sm font-semibold">Loading data matrix files...</div>;
    if (!facility) return <div className="text-center py-20 text-rose-500 font-bold">Facility parameters data vector not found.</div>;

    return (
        <div className="mx-auto max-w-4xl px-4 py-12">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">Edit Facility</h1>
            <p className="text-sm text-slate-400 mb-8 font-medium">Modify venue dimensions, schedules, or specifications</p>

            <Card className="p-6 md:p-10 rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-100/40">
                <form onSubmit={handleUpdateSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <TextField name="name" defaultValue={facility.name} isRequired>
                            <Label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Facility Name</Label>
                            <Input className="w-full rounded-xl border px-4 py-3 text-sm text-slate-700 outline-none transition-all hover:border-emerald-400/60 focus:border-emerald-600 focus:bg-white focus:ring-1 focus:ring-emerald-600" />
                            <FieldError />
                        </TextField>

                        <TextField name="facility_type" defaultValue={facility.facility_type} isRequired>
                            <Label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Facility Type</Label>
                            <Input className="w-full rounded-xl border px-4 py-3 text-sm text-slate-700 outline-none transition-all hover:border-emerald-400/60 focus:border-emerald-600 focus:bg-white focus:ring-1 focus:ring-emerald-600" />
                            <FieldError />
                        </TextField>

                        <TextField name="location" defaultValue={facility.location} isRequired>
                            <Label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Location</Label>
                            <Input className="w-full rounded-xl border px-4 py-3 text-sm text-slate-700 outline-none transition-all hover:border-emerald-400/60 focus:border-emerald-600 focus:bg-white focus:ring-1 focus:ring-emerald-600" />
                            <FieldError />
                        </TextField>

                        <TextField name="price_per_hour" type="number" defaultValue={facility.price_per_hour} isRequired>
                            <Label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Price Per Hour</Label>
                            <Input type="number" className="w-full rounded-xl border px-4 py-3 text-sm text-slate-700 outline-none transition-all hover:border-emerald-400/60 focus:border-emerald-600 focus:bg-white focus:ring-1 focus:ring-emerald-600" />
                            <FieldError />
                        </TextField>

                        <TextField name="capacity" type="number" defaultValue={facility.capacity} isRequired>
                            <Label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Capacity</Label>
                            <Input type="number" className="w-full rounded-xl border px-4 py-3 text-sm text-slate-700 outline-none transition-all hover:border-emerald-400/60 focus:border-emerald-600 focus:bg-white focus:ring-1 focus:ring-emerald-600" />
                            <FieldError />
                        </TextField>

                        <TextField name="available_slots" defaultValue={facility.available_slots?.join(', ')} isRequired>
                            <Label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Available Slots</Label>
                            <Input className="w-full rounded-xl border px-4 py-3 text-sm text-slate-700 outline-none transition-all hover:border-emerald-400/60 focus:border-emerald-600 focus:bg-white focus:ring-1 focus:ring-emerald-600" />
                            <FieldError />
                        </TextField>

                        <div className="md:col-span-2">
                            <TextField name="image" defaultValue={facility.image} isRequired>
                                <Label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Image URL</Label>
                                <Input type="url" className="w-full rounded-xl border px-4 py-3 text-sm text-slate-700 outline-none transition-all hover:border-emerald-400/60 focus:border-emerald-600 focus:bg-white focus:ring-1 focus:ring-emerald-600" />
                                <FieldError />
                            </TextField>
                        </div>

                        <div className="md:col-span-2">
                            <TextField name="description" defaultValue={facility.description} isRequired>
                                <Label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Description</Label>
                                <TextArea className="w-full rounded-xl border px-4 py-3 text-sm text-slate-700 outline-none transition-all hover:border-emerald-400/60 focus:border-emerald-600 focus:bg-white focus:ring-1 focus:ring-emerald-600 min-h-[110px]" />
                                <FieldError />
                            </TextField>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 mt-4">
                        <Button type="button" onClick={() => router.push('/manage-facilities')} variant="flat" className="w-1/3 h-12 rounded-xl text-slate-600 font-bold text-sm bg-slate-100 hover:bg-slate-200">
                            Cancel
                        </Button>
                        <Button type="submit" className="w-2/3 h-12 rounded-xl bg-emerald-600 text-sm font-bold text-white shadow-sm hover:bg-emerald-700">
                            Save Variations
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default EditFacilityPage;