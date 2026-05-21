// import React from 'react';

// const MyBookingsPage = () => {
//     return (
//         <div className='max-w-7xl mx-auto'>
//             <h1 className='text-3xl font-bold'>My Bookings</h1>
//             <p>View and organize your complete booking history</p>  

//         </div>
//     );
// };

// export default MyBookingsPage;


// **************************************

// 'use client';

// import React, { useEffect, useState } from 'react';
// import { authClient } from '@/lib/auth-client';
// import { Card, Spinner } from '@heroui/react'; // Removed CardBody
// import { GiShuttlecock } from 'react-icons/gi';

// const MyBookingsPage = () => {
//     const [bookings, setBookings] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);

//     // Grab live user authentication context data
//     const { data: session, isPending: isAuthPending } = authClient.useSession();

//     useEffect(() => {
//         const fetchUserBookings = async () => {
//             if (!session?.user?.email) return;

//             try {
//                 const response = await fetch(`http://localhost:5000/booking/${session.user.email}`);
//                 if (response.ok) {
//                     const data = await response.json();
//                     setBookings(data);
//                 }
//             } catch (error) {
//                 console.error("Error loading user bookings:", error);
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         if (!isAuthPending) {
//             if (session?.user) {
//                 fetchUserBookings();
//             } else {
//                 setIsLoading(false); // Stop loading if guest
//             }
//         }
//     }, [session, isAuthPending]);

//     if (isAuthPending || isLoading) {
//         return (
//             <div className="flex h-64 items-center justify-center">
//                 <Spinner color="emerald" label="Loading reservation statements..." />
//             </div>
//         );
//     }

//     if (!session?.user) {
//         return (
//             <div className="max-w-7xl mx-auto px-4 py-12 text-center">
//                 <h1 className="text-2xl font-bold text-slate-800">Access Restricted</h1>
//                 <p className="text-slate-500 mt-2">Please sign in to see your booking ledger status records.</p>
//             </div>
//         );
//     }

//     return (
//         <div className="max-w-7xl mx-auto px-4 py-8">
//             <div className="mb-8">
//                 <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">My Bookings</h1>
//                 <p className="text-sm text-slate-400 mt-1 font-medium">View and organize your complete booking history</p>
//             </div>

//             {bookings.length === 0 ? (
//                 <div className="text-center py-16 border-2 border-dashed border-slate-100 rounded-3xl bg-slate-50/30">
//                     <div className="inline-flex p-4 rounded-2xl bg-slate-100 text-slate-400 mb-3">
//                         <GiShuttlecock className="text-3xl" />
//                     </div>
//                     <h3 className="text-base font-bold text-slate-700">No Reservations Yet</h3>
//                     <p className="text-xs text-slate-400 max-w-xs mx-auto mt-1">
//                         Any courts or facilities you secure will show up right here on your schedule timeline.
//                     </p>
//                 </div>
//             ) : (
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {bookings.map((booking) => (
//                         <Card 
//                             key={booking._id} 
//                             className="border border-slate-100 bg-white shadow-xl shadow-slate-200/40 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-slate-200/60 transition duration-300 p-6 space-y-4"
//                         >
//                             {/* Card Header Badge block Layout */}
//                             <div className="flex justify-between items-start">
//                                 <div>
//                                     <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-500 bg-emerald-50 px-2.5 py-1 rounded-full">
//                                         Pending
//                                     </span>
//                                     <h2 className="text-xl font-bold text-slate-800 mt-2.5 truncate max-w-[200px]">
//                                         {booking.facilityName}
//                                     </h2>
//                                 </div>
//                                 <div className="text-right">
//                                     <span className="text-xs text-slate-400 block font-medium">Total Price</span>
//                                     <span className="text-lg font-black text-slate-800 font-mono">৳{booking.totalPrice}</span>
//                                 </div>
//                             </div>

//                             <div className="border-t border-dashed border-slate-100 my-1"></div>

//                             {/* Content Body Field Metadata Info values */}
//                             <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs">
//                                 <div>
//                                     <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
//                                         Date
//                                     </span>
//                                     <span className="font-semibold text-slate-700">
//                                         {booking.date}
//                                     </span>
//                                 </div>
//                                 <div>
//                                     <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
//                                         Time Window
//                                     </span>
//                                     <span className="font-semibold text-slate-700">
//                                         {booking.timeSlot}
//                                     </span>
//                                 </div>
//                                 <div>
//                                     <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
//                                         Duration
//                                     </span>
//                                     <span className="font-semibold text-slate-700">
//                                         {booking.duration} {booking.duration === 1 ? 'Hour' : 'Hours'}
//                                     </span>
//                                 </div>
//                                 <div>
//                                     <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
//                                         Booked Under
//                                     </span>
//                                     <span className="font-semibold text-slate-700 truncate block max-w-[120px]">
//                                         {booking.userName}
//                                     </span>
//                                 </div>
//                             </div>
//                         </Card>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default MyBookingsPage;


// ***********************************************



// 'use client';

// import React, { useEffect, useState } from 'react';
// import { authClient } from '@/lib/auth-client';
// import { Card, Spinner, Button } from '@heroui/react';
// import { GiShuttlecock } from 'react-icons/gi';

// const MyBookingsPage = () => {
//     const [bookings, setBookings] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [isCancelling, setIsCancelling] = useState(null); // Tracks ID of currently deleting booking

//     const { data: session, isPending: isAuthPending } = authClient.useSession();

//     useEffect(() => {
//         const fetchUserBookings = async () => {
//             if (!session?.user?.email) return;

//             try {
//                 const response = await fetch(`http://localhost:5000/booking/${session.user.email}`);
//                 if (response.ok) {
//                     const data = await response.json();
//                     setBookings(data);
//                 }
//             } catch (error) {
//                 console.error("Error loading user bookings:", error);
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         if (!isAuthPending) {
//             if (session?.user) {
//                 fetchUserBookings();
//             } else {
//                 setIsLoading(false);
//             }
//         }
//     }, [session, isAuthPending]);

//     // Handle interactive booking cancellation event
//     const handleCancel = async (bookingId) => {
//         if (!confirm("Are you sure you want to cancel this booking?")) return;

//         setIsCancelling(bookingId);
//         try {
//             const response = await fetch(`http://localhost:5000/booking/${bookingId}`, {
//                 method: 'DELETE',
//             });

//             if (response.ok) {
//                 // Instantly remove booking from local UI state stack
//                 setBookings((prev) => prev.filter((item) => item._id !== bookingId));
//             } else {
//                 alert("Failed to cancel booking. Please try again.");
//             }
//         } catch (error) {
//             console.error("Cancellation transmission error:", error);
//         } finally {
//             setIsCancelling(null);
//         }
//     };

//     if (isAuthPending || isLoading) {
//         return (
//             <div className="flex h-64 items-center justify-center">
//                 <Spinner color="emerald" label="Loading reservation statements..." />
//             </div>
//         );
//     }

//     if (!session?.user) {
//         return (
//             <div className="max-w-7xl mx-auto px-4 py-12 text-center">
//                 <h1 className="text-2xl font-bold text-slate-800">Access Restricted</h1>
//                 <p className="text-slate-500 mt-2">Please sign in to see your booking ledger status records.</p>
//             </div>
//         );
//     }

//     return (
//         <div className="max-w-7xl mx-auto px-4 py-8">
//             <div className="mb-8">
//                 <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">My Bookings</h1>
//                 <p className="text-sm text-slate-400 mt-1 font-medium">View and organize your complete booking history</p>
//             </div>

//             {bookings.length === 0 ? (
//                 <div className="text-center py-16 border-2 border-dashed border-slate-100 rounded-3xl bg-slate-50/30">
//                     <div className="inline-flex p-4 rounded-2xl bg-slate-100 text-slate-400 mb-3">
//                         <GiShuttlecock className="text-3xl" />
//                     </div>
//                     <h3 className="text-base font-bold text-slate-700">No Reservations Yet</h3>
//                     <p className="text-xs text-slate-400 max-w-xs mx-auto mt-1">
//                         Any courts or facilities you secure will show up right here on your schedule timeline.
//                     </p>
//                 </div>
//             ) : (
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {bookings.map((booking) => (
//                         <Card 
//                             key={booking._id} 
//                             className="border border-slate-100 bg-white shadow-xl shadow-slate-200/40 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-slate-200/60 transition duration-300 flex flex-col justify-between p-0"
//                         >
//                             <div>
//                                 {/* Facility Image Wrapper */}
//                                 <div className="h-44 w-full bg-slate-100 relative overflow-hidden">
//                                     {booking.facilityImage || booking.image ? (
//                                         <img 
//                                             src={booking.facilityImage || booking.image} 
//                                             alt={booking.facilityName} 
//                                             className="w-full h-full object-cover"
//                                         />
//                                     ) : (
//                                         <div className="w-full h-full flex items-center justify-center text-slate-300 bg-slate-50">
//                                             <GiShuttlecock className="text-5xl" />
//                                         </div>
//                                     )}
//                                     {/* Absolute Status Badge overlay */}
//                                     <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full shadow-sm">
//                                         {booking.status || 'Confirmed'}
//                                     </span>
//                                 </div>

//                                 {/* Main Text Body Fields Content */}
//                                 <div className="p-5 space-y-4">
//                                     <div className="flex justify-between items-start gap-2">
//                                         <h2 className="text-xl font-bold text-slate-800 tracking-tight line-clamp-1">
//                                             {booking.facilityName}
//                                         </h2>
//                                         <div className="text-right shrink-0">
//                                             <span className="text-lg font-black text-slate-800 font-mono">৳{booking.totalPrice}</span>
//                                         </div>
//                                     </div>

//                                     <div className="border-t border-dashed border-slate-100"></div>

//                                     <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs">
//                                         <div>
//                                             <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
//                                                 Booking Date
//                                             </span>
//                                             <span className="font-semibold text-slate-700">
//                                                 {booking.date}
//                                             </span>
//                                         </div>
//                                         <div>
//                                             <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
//                                                 Time Slot
//                                             </span>
//                                             <span className="font-semibold text-slate-700">
//                                                 {booking.timeSlot}
//                                             </span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Card Footer Actions Container Block */}
//                             <div className="px-5 pb-5 pt-1">
//                                 <Button
//                                     size="sm"
//                                     variant="flat"
//                                     color="danger"
//                                     className="w-full font-bold text-xs tracking-wide rounded-xl py-5"
//                                     isLoading={isCancelling === booking._id}
//                                     onClick={() => handleCancel(booking._id)}
//                                 >
//                                     Cancel Booking
//                                 </Button>
//                             </div>
//                         </Card>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default MyBookingsPage;



// ***************************************************************

// 'use client';

// import React, { useEffect, useState } from 'react';
// import { authClient } from '@/lib/auth-client';
// import { Card, Spinner, Button } from '@heroui/react';
// import { GiShuttlecock } from 'react-icons/gi';
// import { LuCalendarDays, LuClock } from 'react-icons/lu';
// import Image from 'next/image';
// import { TrashBin } from '@gravity-ui/icons';

// const MyBookingsPage = () => {
//     const [bookings, setBookings] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [isCancelling, setIsCancelling] = useState(null); // Tracks ID of currently deleting booking

//     const { data: session, isPending: isAuthPending } = authClient.useSession();

//     useEffect(() => {
//         const fetchUserBookings = async () => {
//             if (!session?.user?.email) return;

//             try {
//                 const response = await fetch(`http://localhost:5000/booking/${session.user.email}`);
//                 if (response.ok) {
//                     const data = await response.json();
//                     setBookings(data);
//                 }
//             } catch (error) {
//                 console.error("Error loading user bookings:", error);
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         if (!isAuthPending) {
//             if (session?.user) {
//                 fetchUserBookings();
//             } else {
//                 setIsLoading(false);
//             }
//         }
//     }, [session, isAuthPending]);

//     // Handle interactive booking cancellation event
//     const handleCancel = async (bookingId) => {
//         if (!confirm("Are you sure you want to cancel this booking?")) return;

//         setIsCancelling(bookingId);
//         try {
//             const response = await fetch(`http://localhost:5000/booking/${bookingId}`, {
//                 method: 'DELETE',
//             });

//             if (response.ok) {
//                 // Instantly remove booking from local UI state stack
//                 setBookings((prev) => prev.filter((item) => item._id !== bookingId));
//             } else {
//                 alert("Failed to cancel booking. Please try again.");
//             }
//         } catch (error) {
//             console.error("Cancellation transmission error:", error);
//         } finally {
//             setIsCancelling(null);
//         }
//     };

//     if (isAuthPending || isLoading) {
//         return (
//             <div className="flex h-64 items-center justify-center">
//                 <Spinner color="emerald" label="Loading reservation statements..." />
//             </div>
//         );
//     }

//     if (!session?.user) {
//         return (
//             <div className="max-w-7xl mx-auto px-4 py-12 text-center">
//                 <h1 className="text-2xl font-bold text-slate-800">Access Restricted</h1>
//                 <p className="text-slate-500 mt-2">Please sign in to see your booking ledger status records.</p>
//             </div>
//         );
//     }

//     return (
//         <div className="max-w-5xl mx-auto px-4 py-10">
//             {/* Header section */}
//             <div className="mb-10 border-b border-slate-100 pb-6">
//                 <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">My Bookings</h1>
//                 <p className="text-sm text-slate-400 mt-1 font-medium">View and manage your complete booking schedule</p>
//             </div>

//             {bookings.length === 0 ? (
//                 <div className="text-center py-20 border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50/50">
//                     <div className="inline-flex p-4 rounded-2xl bg-white text-slate-400 mb-4 shadow-sm">
//                         <GiShuttlecock className="text-4xl text-emerald-500" />
//                     </div>
//                     <h3 className="text-lg font-bold text-slate-700">No Reservations Yet</h3>
//                     <p className="text-sm text-slate-400 max-w-xs mx-auto mt-1">
//                         Any courts or facilities you secure will show up right here on your schedule timeline.
//                     </p>
//                 </div>
//             ) : (
//                 /* One card per row full-width container layout list */
//                 <div className="space-y-5">
//                     {bookings.map((booking) => (
//                         <Card
//                             key={booking._id}
//                             className="border border-slate-200/60 bg-white shadow-sm hover:shadow-md hover:border-slate-300/80 transition duration-300 rounded-2xl overflow-hidden p-0"
//                         >
//                             <div className="flex flex-col sm:flex-row items-stretch w-full min-h-[140px]">

//                                 {/* 1. Left Section: Facility Image Asset Container */}
//                                 <div className="w-full sm:w-48 h-44 sm:h-auto bg-slate-100 relative shrink-0 overflow-hidden">
//                                     {booking.facilityImage || booking.image ? (
//                                         <Image
//                                             src={booking.facilityImage || booking.image}
//                                             alt={booking.facilityName || "Facility Image"}
//                                             fill
//                                             sizes="(max-w-640px) 100vw, 192px"
//                                             priority
//                                             className="object-cover"
//                                         />
//                                     ) : (
//                                         <div className="w-full h-full flex items-center justify-center text-slate-300 bg-slate-50/50">
//                                             <GiShuttlecock className="text-4xl" />
//                                         </div>
//                                     )}
//                                 </div>

//                                 {/* 2. Center & Right Section: Combined Flex Container */}
//                                 <div className="flex-1 p-5 flex flex-col md:flex-row md:items-center justify-between gap-6">

//                                     {/* Text Description Fields */}
//                                     <div className="space-y-3">
//                                         <div>
//                                             <span className="text-[10px] font-bold uppercase tracking-wider text-yellow-600 bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 rounded-full shadow-sm mb-1.5 inline-block">
//                                                 {booking.status || 'Confirmed'}
//                                             </span>
//                                             <h2 className="text-xl font-bold text-slate-800 tracking-tight">
//                                                 {booking.facilityName}
//                                             </h2>
//                                         </div>

//                                         {/* Inline Metadata Badges Grid */}
//                                         <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-600">
//                                             <div className="flex items-center gap-1.5 text-xs font-medium">
//                                                 <LuCalendarDays className="text-slate-400 text-sm" />
//                                                 <span>{booking.date}</span>
//                                             </div>
//                                             <div className="flex items-center gap-1.5 text-xs font-medium">
//                                                 <LuClock className="text-slate-400 text-sm" />
//                                                 {/* Displays complete window frame cleanly (e.g. 10:00 AM - 12:00 PM) */}
//                                                 <span>{booking.timeSlot || `${booking.duration} hr`}</span>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* 3. Right Section: Price & Styled Cancel Button Action layout */}
//                                     <div className="flex md:flex-col sm:flex-row items-center md:items-end justify-between md:justify-center gap-4 border-t md:border-t-0 border-slate-100 pt-4 md:pt-0 shrink-0">
//                                         <div className="md:text-right">
//                                             <span className="text-xs text-slate-400 block font-medium">Total Price</span>
//                                             <span className="text-2xl font-black text-slate-900 font-mono tracking-tight">
//                                                 ৳{booking.totalPrice}
//                                             </span>
//                                         </div>

//                                         <Button
//                                             size="md"
//                                             isLoading={isCancelling === booking._id}
//                                             onClick={() => handleCancel(booking._id)}
//                                             className="inline-flex items-center justify-center gap-2 font-bold text-xs tracking-wider uppercase rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200/50 hover:border-rose-300/80 px-5 py-2.5 transition-all duration-200 shadow-sm active:scale-[0.98] w-full sm:w-auto min-w-[130px]"
//                                         >
//                                             <TrashBin className="text-sm shrink-0" />
//                                             <span>Cancel</span>
//                                         </Button>
//                                     </div>

//                                 </div>
//                             </div>
//                         </Card>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default MyBookingsPage;

// **********************************************************************************************




'use client';

import React, { useEffect, useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { Card, Spinner, Button } from '@heroui/react';
import { GiShuttlecock } from 'react-icons/gi';
import { LuCalendarDays, LuClock } from 'react-icons/lu';
import Image from 'next/image';
import { TrashBin } from '@gravity-ui/icons';
import { toast } from 'react-hot-toast'; // 1. Imported toast helper

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
                // const response = await fetch(`http://localhost:5000/booking/${session.user.email}`);
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

    // Handle interactive booking cancellation event
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
                // Instantly remove booking from local UI state stack
                setBookings((prev) => prev.filter((item) => item._id !== bookingId));
                // 2. Success Toast Alert
                toast.success("Booking cancelled successfully!");
            } else {
                // 3. Error Toast Alert (Replacing native prompt alert)
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