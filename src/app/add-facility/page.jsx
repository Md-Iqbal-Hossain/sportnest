// // 'use client'
// // import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button, Card } from '@heroui/react';
// // import React from 'react';

// // const AddFacilityPage = () => {
// //     const onSubmit = async (e) => {
// //         e.preventDefault()
// //         const formData = new FormData(e.currentTarget)
// //         const facility = Object.fromEntries(formData.entries())

// //         console.log(facility);

// //         const res = await fetch('http://localhost:5000/facility',{
// //           method: 'POST',
// //           headers: {
// //             'content-type': 'application/json'
// //           },
// //           body: JSON.stringify(facility)
// //         })

// //         const data = await res.json()
// //         console.log(data);
        
        
// //     }
// //     return (
// //         <div className='p-5 max-w-7xl mx-auto'>
// //             <h1 className='text-2xl font-bold'>Add Facility</h1>

// //             <Card>
// //                 <form onSubmit={onSubmit}
// //             className="p-10 space-y-8 w-3xl"
// //           >
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //               {/* Destination Name */}
// //               <div className="md:col-span-2">
// //                 <TextField name="destinationName" isRequired>
// //                   <Label>Destination Name</Label>
// //                   <Input placeholder="Bali Paradise" className="rounded-2xl" />
// //                   <FieldError />
// //                 </TextField>
// //               </div>

// //               {/* Country */}
// //               <TextField name="country" isRequired>
// //                 <Label>Country</Label>
// //                 <Input placeholder="Indonesia" className="rounded-2xl" />
// //                 <FieldError />
// //               </TextField>

// //               {/* Category - Updated Select Component */}
// //               <div>
// //                 <Select
// //                   name="category"
// //                   isRequired
// //                   className="w-full"
// //                   placeholder="Select category"
// //                 >
// //                   <Label>Category</Label>
// //                   <Select.Trigger className="rounded-2xl">
// //                     <Select.Value />
// //                     <Select.Indicator />
// //                   </Select.Trigger>
// //                   <Select.Popover>
// //                     <ListBox>
// //                       <ListBox.Item id="Beach" textValue="Beach">
// //                         Beach
// //                         <ListBox.ItemIndicator />
// //                       </ListBox.Item>
// //                       <ListBox.Item id="Mountain" textValue="Mountain">
// //                         Mountain
// //                         <ListBox.ItemIndicator />
// //                       </ListBox.Item>
// //                       <ListBox.Item id="City" textValue="City">
// //                         City
// //                         <ListBox.ItemIndicator />
// //                       </ListBox.Item>
// //                       <ListBox.Item id="Adventure" textValue="Adventure">
// //                         Adventure
// //                         <ListBox.ItemIndicator />
// //                       </ListBox.Item>
// //                       <ListBox.Item id="Cultural" textValue="Cultural">
// //                         Cultural
// //                         <ListBox.ItemIndicator />
// //                       </ListBox.Item>
// //                       <ListBox.Item id="Luxury" textValue="Luxury">
// //                         Luxury
// //                         <ListBox.ItemIndicator />
// //                       </ListBox.Item>
// //                     </ListBox>
// //                   </Select.Popover>
// //                 </Select>
// //               </div>

// //               {/* Price */}
// //               <TextField name="price" type="number" isRequired>
// //                 <Label>Price (USD)</Label>
// //                 <Input
// //                   type="number"
// //                   placeholder="1299"
// //                   className="rounded-2xl"
// //                 />
// //                 <FieldError />
// //               </TextField>

// //               {/* Duration */}
// //               <TextField name="duration" isRequired>
// //                 <Label>Duration</Label>
// //                 <Input
// //                   placeholder="7 Days / 6 Nights"
// //                   className="rounded-2xl"
// //                 />
// //                 <FieldError />
// //               </TextField>

// //               {/* Departure Date */}
// //               <div className="md:col-span-2">
// //                 <TextField name="departureDate" type="date" isRequired>
// //                   <Label>Departure Date</Label>
// //                   <Input type="date" className="rounded-2xl" />
// //                   <FieldError />
// //                 </TextField>
// //               </div>

// //               {/* Image URL - Removed preview */}
// //               <div className="md:col-span-2">
// //                 <TextField name="imageUrl" isRequired>
// //                   <Label>Image URL</Label>
// //                   <Input
// //                     type="url"
// //                     placeholder="https://example.com/bali-paradise.jpg"
// //                     className="rounded-2xl"
// //                   />
// //                   <FieldError />
// //                 </TextField>
// //               </div>

// //               {/* Description */}
// //               <div className="md:col-span-2">
// //                 <TextField name="description" isRequired>
// //                   <Label>Description</Label>
// //                   <TextArea
// //                     placeholder="Describe the travel experience..."
// //                     className="rounded-3xl"
// //                   />
// //                   <FieldError />
// //                 </TextField>
// //               </div>
// //             </div>

// //             {/* Buttons */}

// //             <Button
// //               type="submit"
// //               variant="outline"
// //               className=" rounded-none w-full bg-cyan-500 text-white"
// //             >
// //               Add Facility
// //             </Button>
// //           </form>
// //             </Card>
// //         </div>
// //     );
// // };

// // export default AddFacilityPage;


// // *******************************

// 'use client'

// import React from 'react';
// import {
//   FieldError,
//   Input,
//   Label,
//   TextArea,
//   TextField,
//   Button,
//   Card
// } from '@heroui/react';

// const AddFacilityPage = () => {

//   // example logged in user
//   // later replace with your real auth user
//   const user = {
//     email: 'user@gmail.com'
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData(e.currentTarget);

//     const facility = Object.fromEntries(formData.entries());

//     // extra fields
//     facility.price_per_hour = Number(facility.price_per_hour);
//     facility.capacity = Number(facility.capacity);

//     facility.available_slots = facility.available_slots
//       .split(',')
//       .map(slot => slot.trim());

//     facility.owner_email = user.email;

//     facility.booking_count = 0;

//     console.log(facility);

//     try {
//       const res = await fetch('http://localhost:5000/facility', {
//         method: 'POST',
//         headers: {
//           'content-type': 'application/json'
//         },
//         body: JSON.stringify(facility)
//       });

//       const data = await res.json();

//       console.log(data);

//       if (data.insertedId) {
//         alert('Facility Added Successfully!');
//         e.target.reset();
//       }

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="p-5 max-w-5xl mx-auto">

//       <h1 className="text-3xl font-bold mb-8">
//         Add Facility
//       </h1>

//       <Card className="p-8">

//         <form
//           onSubmit={onSubmit}
//           className="space-y-8"
//         >

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//             {/* Facility Name */}
//             <TextField name="name" isRequired>
//               <Label>Facility Name</Label>
//               <Input
//                 placeholder="Elite Football Turf"
//                 className="rounded-xl"
//               />
//               <FieldError />
//             </TextField>

//             {/* Facility Type */}
//             <TextField name="facility_type" isRequired>
//               <Label>Facility Type</Label>
//               <Input
//                 placeholder="Football / Badminton / Cricket"
//                 className="rounded-xl"
//               />
//               <FieldError />
//             </TextField>

//             {/* Location */}
//             <TextField name="location" isRequired>
//               <Label>Location</Label>
//               <Input
//                 placeholder="Dhaka, Bangladesh"
//                 className="rounded-xl"
//               />
//               <FieldError />
//             </TextField>

//             {/* Price Per Hour */}
//             <TextField
//               name="price_per_hour"
//               type="number"
//               isRequired
//             >
//               <Label>Price Per Hour</Label>

//               <Input
//                 type="number"
//                 placeholder="1200"
//                 className="rounded-xl"
//               />

//               <FieldError />
//             </TextField>

//             {/* Capacity */}
//             <TextField
//               name="capacity"
//               type="number"
//               isRequired
//             >
//               <Label>Capacity</Label>

//               <Input
//                 type="number"
//                 placeholder="20"
//                 className="rounded-xl"
//               />

//               <FieldError />
//             </TextField>

//             {/* Available Slots */}
//             <TextField name="available_slots" isRequired>
//               <Label>Available Slots</Label>

//               <Input
//                 placeholder="9AM-11AM, 3PM-5PM"
//                 className="rounded-xl"
//               />

//               <FieldError />
//             </TextField>

//             {/* Image URL */}
//             <div className="md:col-span-2">
//               <TextField name="image" isRequired>

//                 <Label>Image URL</Label>

//                 <Input
//                   type="url"
//                   placeholder="https://example.com/image.jpg"
//                   className="rounded-xl"
//                 />

//                 <FieldError />
//               </TextField>
//             </div>

//             {/* Description */}
//             <div className="md:col-span-2">

//               <TextField
//                 name="description"
//                 isRequired
//               >

//                 <Label>Description</Label>

//                 <TextArea
//                   placeholder="Write facility details..."
//                   className="rounded-2xl"
//                 />

//                 <FieldError />
//               </TextField>

//             </div>

//           </div>

//           <Button
//             type="submit"
//             className="w-full bg-cyan-500 text-white rounded-xl"
//           >
//             Add Facility
//           </Button>

//         </form>

//       </Card>

//     </div>
//   );
// };

// export default AddFacilityPage;




// *****************************************************

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

const AddFacilityPage = () => {

    // Dummy user fallback state compilation block
    const user = {
        email: 'user@gmail.com'
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const facility = Object.fromEntries(formData.entries());

        // Standard numeric mutation configurations
        facility.price_per_hour = Number(facility.price_per_hour);
        facility.capacity = Number(facility.capacity);

        facility.available_slots = facility.available_slots
            .split(',')
            .map(slot => slot.trim());

        facility.owner_email = user.email;
        facility.booking_count = 0;

        console.log("Compiling Payload Matrix Data: ", facility);

        const { data: tokenData } = await authClient.token()
                    console.log(tokenData);

        try {
            const res = await fetch('http://localhost:5000/facility', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${tokenData?.token}`
                },
                body: JSON.stringify(facility)
            });

            const data = await res.json();
            console.log("Server response confirmation block: ", data);

            if (data.insertedId) {
                alert('Facility Added Successfully!');
                e.target.reset();
            }

        } catch (error) {
            console.error("Critical operational pipeline layout fault: ", error);
        }
    };

    return (
        <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 bg-slate-50/10 min-h-screen">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-8">
                Add Facility
            </h1>

            <Card className="p-6 md:p-10 rounded-2xl border border-slate-200/60 bg-white shadow-xl shadow-slate-100/40">
                <form onSubmit={onSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Facility Name */}
                        <TextField name="name" isRequired className="w-full">
                            <Label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                                Facility Name
                            </Label>
                            <Input
                                placeholder="Elite Football Turf"
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition-all duration-300 hover:border-emerald-400/60 hover:bg-slate-50/50 focus:border-emerald-600 focus:bg-white focus:ring-1 focus:ring-emerald-600"
                            />
                            <FieldError className="text-xs text-rose-500 mt-1 font-medium" />
                        </TextField>

                        {/* Facility Type */}
                        <TextField name="facility_type" isRequired className="w-full">
                            <Label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                                Facility Type
                            </Label>
                            <Input
                                placeholder="Football / Badminton / Cricket"
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition-all duration-300 hover:border-emerald-400/60 hover:bg-slate-50/50 focus:border-emerald-600 focus:bg-white focus:ring-1 focus:ring-emerald-600"
                            />
                            <FieldError className="text-xs text-rose-500 mt-1 font-medium" />
                        </TextField>

                        {/* Location */}
                        <TextField name="location" isRequired className="w-full">
                            <Label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                                Location
                            </Label>
                            <Input
                                placeholder="Dhaka, Bangladesh"
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition-all duration-300 hover:border-emerald-400/60 hover:bg-slate-50/50 focus:border-emerald-600 focus:bg-white focus:ring-1 focus:ring-emerald-600"
                            />
                            <FieldError className="text-xs text-rose-500 mt-1 font-medium" />
                        </TextField>

                        {/* Price Per Hour */}
                        <TextField name="price_per_hour" type="number" isRequired className="w-full">
                            <Label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                                Price Per Hour
                            </Label>
                            <Input
                                type="number"
                                placeholder="1200"
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition-all duration-300 hover:border-emerald-400/60 hover:bg-slate-50/50 focus:border-emerald-600 focus:bg-white focus:ring-1 focus:ring-emerald-600"
                            />
                            <FieldError className="text-xs text-rose-500 mt-1 font-medium" />
                        </TextField>

                        {/* Capacity */}
                        <TextField name="capacity" type="number" isRequired className="w-full">
                            <Label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                                Capacity (Players)
                            </Label>
                            <Input
                                type="number"
                                placeholder="20"
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition-all duration-300 hover:border-emerald-400/60 hover:bg-slate-50/50 focus:border-emerald-600 focus:bg-white focus:ring-1 focus:ring-emerald-600"
                            />
                            <FieldError className="text-xs text-rose-500 mt-1 font-medium" />
                        </TextField>

                        {/* Available Slots */}
                        <TextField name="available_slots" isRequired className="w-full">
                            <Label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                                Available Slots
                            </Label>
                            <Input
                                placeholder="9AM-11AM, 3PM-5PM"
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition-all duration-300 hover:border-emerald-400/60 hover:bg-slate-50/50 focus:border-emerald-600 focus:bg-white focus:ring-1 focus:ring-emerald-600"
                            />
                            <FieldError className="text-xs text-rose-500 mt-1 font-medium" />
                        </TextField>

                        {/* Image URL */}
                        <div className="md:col-span-2">
                            <TextField name="image" isRequired className="w-full">
                                <Label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                                    Image URL
                                </Label>
                                <Input
                                    type="url"
                                    placeholder="https://example.com/image.jpg"
                                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition-all duration-300 hover:border-emerald-400/60 hover:bg-slate-50/50 focus:border-emerald-600 focus:bg-white focus:ring-1 focus:ring-emerald-600"
                                />
                                <FieldError className="text-xs text-rose-500 mt-1 font-medium" />
                            </TextField>
                        </div>

                        {/* Description */}
                        <div className="md:col-span-2">
                            <TextField name="description" isRequired className="w-full">
                                <Label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                                    Description
                                </Label>
                                <TextArea
                                    placeholder="Provide premium descriptions detailing field surface specifications and structural configurations..."
                                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition-all duration-300 hover:border-emerald-400/60 hover:bg-slate-50/50 focus:border-emerald-600 focus:bg-white focus:ring-1 focus:ring-emerald-600 min-h-[110px]"
                                />
                                <FieldError className="text-xs text-rose-500 mt-1 font-medium" />
                            </TextField>
                        </div>

                    </div>

                    {/* CONFIRMATION SUBMISSION BUTTON ARMED WITH SOLID PALETTE EMERALD COLOR ACTIONS */}
                    <Button
                        type="submit"
                        className="w-full h-12 rounded-xl bg-gradient-to-br from-teal-600 via-green-400 to-lime-400 text-sm font-bold text-white shadow-sm shadow-emerald-600/10 transition-all duration-200 hover:bg-emerald-700 active:scale-[0.99] mt-4"
                    >
                        Add Facility
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default AddFacilityPage;