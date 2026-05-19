
// 'use client';

// import Link from 'next/link';
// import React from 'react';
// import { usePathname } from 'next/navigation';
// import { GiShuttlecock } from "react-icons/gi";

// const Navbar = () => {
//     const isLoggedIn = false; // later replace with real auth
//     const pathname = usePathname();

//     const isActive = (path) => pathname === path;

//     const linkClass = (path) =>
//         isActive(path)
//             ? "bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent font-bold"
//             : "text-gray-700 hover:text-emerald-500 transition";

//     return (
//         <nav className="flex justify-around items-center bg-white px-4 py-2 shadow-md">

//             {/* ================= LOGO ================= */}
//             <Link href="/" className="flex items-center gap-3 cursor-pointer group">

//                 <div className="bg-gradient-to-br from-emerald-500 via-green-400 to-teal-500 p-3 rounded-2xl shadow-lg group-hover:scale-105 transition">
//                     <GiShuttlecock className="text-2xl text-white" />
//                 </div>

//                 <div>
//                     <h1 className="text-2xl font-black tracking-tight bg-gradient-to-r from-emerald-400 via-green-400 to-teal-300 bg-clip-text text-transparent">
//                         SportNest
//                     </h1>

//                     <p className="text-[8px] uppercase tracking-[4px] text-gray-400">
//                         Book • Play • Compete
//                     </p>
//                 </div>

//             </Link>

//             {/* ================= NAV LINKS ================= */}
//             <ul className="hidden md:flex items-center gap-6 font-medium text-sm">

//                 <li>
//                     <Link href="/" className={linkClass("/")}>
//                         Home
//                     </Link>
//                 </li>

//                 <li>
//                     <Link href="/all-facilities" className={linkClass("/all-facilities")}>
//                         All Facilities
//                     </Link>
//                 </li>

//                 {/* PRIVATE LINKS */}
//                 {isLoggedIn && (
//                     <>
//                         <li>
//                             <Link href="/my-bookings" className={linkClass("/my-bookings")}>
//                                 My Bookings
//                             </Link>
//                         </li>

//                         <li>
//                             <Link href="/add-facility" className={linkClass("/add-facility")}>
//                                 Add Facility
//                             </Link>
//                         </li>

//                         <li>
//                             <Link href="/manage-facilities" className={linkClass("/manage-facilities")}>
//                                 Manage My Facilities
//                             </Link>
//                         </li>
//                     </>
//                 )}

//             </ul>

//             {/* ================= AUTH SECTION ================= */}
//             <div className="flex items-center gap-3">

//                 {!isLoggedIn && (
//                     <Link
//                         href="/login"
//                         className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-md hover:scale-105 transition"
//                     >
//                         Login
//                     </Link>
//                 )}

//                 {isLoggedIn && (
//                     <div className="relative group">

//                         <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 cursor-pointer" />

//                         {/* Dropdown */}
//                         <div className="absolute right-0 mt-3 hidden group-hover:block bg-white shadow-lg rounded-xl p-3 w-48">

//                             <Link className="block px-3 py-2 hover:bg-gray-100 rounded" href="/my-bookings">
//                                 My Bookings
//                             </Link>

//                             <Link className="block px-3 py-2 hover:bg-gray-100 rounded" href="/add-facility">
//                                 Add Facility
//                             </Link>

//                             <Link className="block px-3 py-2 hover:bg-gray-100 rounded" href="/manage-facilities">
//                                 Manage Facilities
//                             </Link>

//                             <button className="w-full text-left px-3 py-2 hover:bg-red-100 text-red-500 rounded">
//                                 Logout
//                             </button>

//                         </div>
//                     </div>
//                 )}

//             </div>

//         </nav>
//     );
// };

// export default Navbar;



// *************************************************


// 'use client';

// import Link from 'next/link';
// import React from 'react';
// import { usePathname } from 'next/navigation';
// import { GiShuttlecock } from "react-icons/gi";
// import { authClient } from '@/lib/auth-client';

// const Navbar = () => {
//     const pathname = usePathname();

//     // Get logged in user session
//     const { data: session, isPending } = authClient.useSession();

//     const isLoggedIn = !!session?.user;

//     const isActive = (path) => pathname === path;

//     const linkClass = (path) =>
//         isActive(path)
//             ? "bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent font-bold"
//             : "text-gray-700 hover:text-emerald-500 transition";

//     // Prevent flicker while checking auth
//     if (isPending) {
//         return null;
//     }

//     return (
//         <nav className="flex justify-around items-center bg-white px-4 py-2 shadow-md">

//             {/* LOGO */}
//             <Link href="/" className="flex items-center gap-3 cursor-pointer group">

//                 <div className="bg-gradient-to-br from-emerald-500 via-green-400 to-teal-500 p-3 rounded-2xl shadow-lg group-hover:scale-105 transition">
//                     <GiShuttlecock className="text-2xl text-white" />
//                 </div>

//                 <div>
//                     <h1 className="text-2xl font-black tracking-tight bg-gradient-to-r from-emerald-400 via-green-400 to-teal-300 bg-clip-text text-transparent">
//                         SportNest
//                     </h1>

//                     <p className="text-[8px] uppercase tracking-[4px] text-gray-400">
//                         Book • Play • Compete
//                     </p>
//                 </div>

//             </Link>

//             {/* NAV LINKS */}
//             <ul className="hidden md:flex items-center gap-6 font-medium text-sm">

//                 <li>
//                     <Link href="/" className={linkClass("/")}>
//                         Home
//                     </Link>
//                 </li>

//                 <li>
//                     <Link href="/all-facilities" className={linkClass("/all-facilities")}>
//                         All Facilities
//                     </Link>
//                 </li>

//                 {isLoggedIn && (
//                     <>
//                         <li>
//                             <Link href="/my-bookings" className={linkClass("/my-bookings")}>
//                                 My Bookings
//                             </Link>
//                         </li>

//                         <li>
//                             <Link href="/add-facility" className={linkClass("/add-facility")}>
//                                 Add Facility
//                             </Link>
//                         </li>

//                         <li>
//                             <Link href="/manage-facilities" className={linkClass("/manage-facilities")}>
//                                 Manage My Facilities
//                             </Link>
//                         </li>
//                     </>
//                 )}

//             </ul>

//             {/* AUTH */}
//             <div className="flex items-center gap-3">

//                 {!isLoggedIn ? (
//                     <Link
//                         href="/login"
//                         className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-md hover:scale-105 transition"
//                     >
//                         Login
//                     </Link>
//                 ) : (
//                     <div className="relative group">

//                         {/* User avatar */}
//                         <img
//                             src={session?.user?.image || "/default-avatar.png"}
//                             alt="user"
//                             className="w-10 h-10 rounded-full cursor-pointer"
//                         />

//                         <div className="absolute right-0 mt-3 hidden group-hover:block bg-white shadow-lg rounded-xl p-3 w-48">

//                             <p className="px-3 py-2 text-sm font-semibold">
//                                 {session?.user?.name}
//                             </p>

//                             <Link className="block px-3 py-2 hover:bg-gray-100 rounded" href="/my-bookings">
//                                 My Bookings
//                             </Link>

//                             <Link className="block px-3 py-2 hover:bg-gray-100 rounded" href="/add-facility">
//                                 Add Facility
//                             </Link>

//                             <Link className="block px-3 py-2 hover:bg-gray-100 rounded" href="/manage-facilities">
//                                 Manage Facilities
//                             </Link>

//                             <button
//                                 onClick={() => authClient.signOut()}
//                                 className="w-full text-left px-3 py-2 hover:bg-red-100 text-red-500 rounded"
//                             >
//                                 Logout
//                             </button>

//                         </div>

//                     </div>
//                 )}

//             </div>

//         </nav>
//     );
// };

// export default Navbar;



// *********************************************************



// 'use client';

// import Link from 'next/link';
// import React from 'react';
// import Image from 'next/image';
// import { usePathname } from 'next/navigation';
// import { GiShuttlecock } from "react-icons/gi";
// import { authClient } from '@/lib/auth-client';

// const Navbar = () => {
//     const pathname = usePathname();

//     // Get logged in user session
//     const { data: session, isPending } = authClient.useSession();
//     const isLoggedIn = !!session?.user;

//     const isActive = (path) => pathname === path;

//     const linkClass = (path) =>
//         isActive(path)
//             ? "bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent font-bold"
//             : "text-gray-700 hover:text-emerald-500 transition";

//     // Prevent flicker while checking auth
//     if (isPending) {
//         return null;
//     }

//     return (
//         <nav className="flex justify-around items-center bg-white px-4 py-2 shadow-md">

//             {/* LOGO */}
//             <Link href="/" className="flex items-center gap-3 cursor-pointer group">
//                 <div className="bg-gradient-to-br from-emerald-500 via-green-400 to-teal-500 p-3 rounded-2xl shadow-lg group-hover:scale-105 transition">
//                     <GiShuttlecock className="text-2xl text-white" />
//                 </div>

//                 <div>
//                     <h1 className="text-2xl font-black tracking-tight bg-gradient-to-r from-emerald-400 via-green-400 to-teal-300 bg-clip-text text-transparent">
//                         SportNest
//                     </h1>
//                     <p className="text-[8px] uppercase tracking-[4px] text-gray-400">
//                         Book • Play • Compete
//                     </p>
//                 </div>
//             </Link>

//             {/* NAV LINKS */}
//             <ul className="hidden md:flex items-center gap-6 font-medium text-sm">
//                 <li>
//                     <Link href="/" className={linkClass("/")}>
//                         Home
//                     </Link>
//                 </li>

//                 <li>
//                     <Link href="/all-facilities" className={linkClass("/all-facilities")}>
//                         All Facilities
//                     </Link>
//                 </li>

//                 {isLoggedIn && (
//                     <>
//                         <li>
//                             <Link href="/my-bookings" className={linkClass("/my-bookings")}>
//                                 My Bookings
//                             </Link>
//                         </li>
//                         <li>
//                             <Link href="/add-facility" className={linkClass("/add-facility")}>
//                                 Add Facility
//                             </Link>
//                         </li>
//                         <li>
//                             <Link href="/manage-facilities" className={linkClass("/manage-facilities")}>
//                                 Manage My Facilities
//                             </Link>
//                         </li>
//                     </>
//                 )}
//             </ul>

//             {/* AUTH */}
//             <div className="flex items-center gap-3">
//                 {!isLoggedIn ? (
//                     <Link
//                         href="/login"
//                         className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-md hover:scale-105 transition"
//                     >
//                         Login
//                     </Link>
//                 ) : (
//                     /* Added 'py-2' padding container here so the hover zone bridges the gap */
//                     <div className="relative group py-2">

//                         {/* User avatar optimized with Next Image */}
//                         <Image
//                             src={session?.user?.image || "/default-avatar.png"}
//                             alt="user profile"
//                             width={40}
//                             height={40}
//                             className="w-10 h-10 rounded-full cursor-pointer border border-gray-100 object-cover"
//                         />

//                         {/* Dropdown Menu */}
//                         <div className="absolute right-0 top-full hidden group-hover:block bg-white shadow-xl rounded-xl p-3 w-48 border border-gray-100 z-50">
//                             <p className="px-3 py-2 text-xs text-gray-400 font-medium border-b border-gray-100 mb-1 truncate">
//                                 Signed in as <br/>
//                                 <span className="text-sm font-semibold text-gray-800">{session?.user?.name}</span>
//                             </p>

//                             <Link className="block px-3 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition" href="/my-bookings">
//                                 My Bookings
//                             </Link>

//                             <Link className="block px-3 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition" href="/add-facility">
//                                 Add Facility
//                             </Link>

//                             <Link className="block px-3 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition" href="/manage-facilities">
//                                 Manage Facilities
//                             </Link>

//                             <button
//                                 onClick={() => authClient.signOut()}
//                                 className="w-full text-left mt-2 px-3 py-2 text-sm font-medium hover:bg-red-50 text-red-500 rounded-lg transition border-t border-gray-50 pt-2"
//                             >
//                                 Logout
//                             </button>
//                         </div>
//                     </div>
//                 )}
//             </div>

//         </nav>
//     );
// };

// export default Navbar;


// **********************************************************



// 'use client';

// import Link from 'next/link';
// import React from 'react';
// import Image from 'next/image';
// import { usePathname } from 'next/navigation';
// import { GiShuttlecock } from "react-icons/gi";
// import { authClient } from '@/lib/auth-client';

// const Navbar = () => {
//     const pathname = usePathname();

//     // Get logged in user session
//     const { data: session, isPending } = authClient.useSession();
//     const isLoggedIn = !!session?.user;

//     const isActive = (path) => pathname === path;

//     const linkClass = (path) =>
//         isActive(path)
//             ? "bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent font-bold"
//             : "text-gray-700 hover:text-emerald-500 transition";

//     // Extract the first letter of the user's name safely
//     const userInitial = session?.user?.name ? session.user.name.charAt(0).toUpperCase() : 'I';

//     // Prevent flicker while checking auth
//     if (isPending) {
//         return null;
//     }

//     return (
//         <nav className="flex justify-around items-center bg-white px-4 py-2 shadow-md">

//             {/* LOGO */}
//             <Link href="/" className="flex items-center gap-3 cursor-pointer group">
//                 <div className="bg-gradient-to-br from-emerald-500 via-green-400 to-teal-500 p-3 rounded-2xl shadow-lg group-hover:scale-105 transition">
//                     <GiShuttlecock className="text-2xl text-white" />
//                 </div>

//                 <div>
//                     <h1 className="text-2xl font-black tracking-tight bg-gradient-to-r from-emerald-400 via-green-400 to-teal-300 bg-clip-text text-transparent">
//                         SportNest
//                     </h1>
//                     <p className="text-[8px] uppercase tracking-[4px] text-gray-400">
//                         Book • Play • Compete
//                     </p>
//                 </div>
//             </Link>

//             {/* NAV LINKS */}
//             <ul className="hidden md:flex items-center gap-6 font-medium text-sm">
//                 <li>
//                     <Link href="/" className={linkClass("/")}>
//                         Home
//                     </Link>
//                 </li>

//                 <li>
//                     <Link href="/all-facilities" className={linkClass("/all-facilities")}>
//                         All Facilities
//                     </Link>
//                 </li>

//                 {isLoggedIn && (
//                     <>
//                         <li>
//                             <Link href="/my-bookings" className={linkClass("/my-bookings")}>
//                                 My Bookings
//                             </Link>
//                         </li>
//                         <li>
//                             <Link href="/add-facility" className={linkClass("/add-facility")}>
//                                 Add Facility
//                             </Link>
//                         </li>
//                         <li>
//                             <Link href="/manage-facilities" className={linkClass("/manage-facilities")}>
//                                 Manage My Facilities
//                             </Link>
//                         </li>
//                     </>
//                 )}
//             </ul>

//             {/* AUTH */}
//             <div className="flex items-center gap-3">
//                 {!isLoggedIn ? (
//                     <Link
//                         href="/login"
//                         className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-md hover:scale-105 transition"
//                     >
//                         Login
//                     </Link>
//                 ) : (
//                     <div className="relative group py-2">

//                         {/* AVATAR WRAPPER */}
//                         <div className="cursor-pointer">
//                             {session?.user?.image ? (
//                                 <Image
//                                     src={session.user.image}
//                                     alt="user profile"
//                                     width={40}
//                                     height={40}
//                                     className="w-10 h-10 rounded-full border border-gray-100 object-cover"
//                                 />
//                             ) : (
//                                 /* Dynamic Initial Fallback Matching Your Design Palette */
//                                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-white font-bold text-lg flex items-center justify-center shadow-sm select-none hover:opacity-90 transition">
//                                     {userInitial}
//                                 </div>
//                             )}
//                         </div>

//                         {/* Dropdown Menu */}
//                         <div className="absolute right-0 top-full hidden group-hover:block bg-white shadow-xl rounded-xl p-3 w-48 border border-gray-100 z-50">
//                             <p className="px-3 py-2 text-xs text-gray-400 font-medium border-b border-gray-100 mb-1 truncate">
//                                 Signed in as <br/>
//                                 <span className="text-sm font-semibold text-gray-800">{session?.user?.name}</span>
//                             </p>

//                             <Link className="block px-3 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition" href="/my-bookings">
//                                 My Bookings
//                             </Link>

//                             <Link className="block px-3 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition" href="/add-facility">
//                                 Add Facility
//                             </Link>

//                             <Link className="block px-3 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition" href="/manage-facilities">
//                                 Manage Facilities
//                             </Link>

//                             <button
//                                 onClick={() => authClient.signOut()}
//                                 className="w-full text-left mt-2 px-3 py-2 text-sm font-medium hover:bg-red-50 text-red-500 rounded-lg transition border-t border-gray-50 pt-2"
//                             >
//                                 Logout
//                             </button>
//                         </div>
//                     </div>
//                 )}
//             </div>

//         </nav>
//     );
// };

// export default Navbar;


// *********************************************************
'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { GiShuttlecock } from "react-icons/gi";
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-hot-toast';

const Navbar = () => {
    const pathname = usePathname();

    // Get logged in user session
    const { data: session, isPending } = authClient.useSession();

    // Explicitly guarantee user context is loaded and valid
    const isLoggedIn = !isPending && !!session?.user;

    const isActive = (path) => pathname === path;

    const linkClass = (path) =>
        isActive(path)
            ? "bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent font-bold"
            : "text-gray-700 hover:text-emerald-500 transition";

    // Extract the first letter of the user's name safely
    const userInitial = session?.user?.name ? session.user.name.charAt(0).toUpperCase() : 'I';

    // Prevent markup layout flicker while checking authentication
    if (isPending) {
        return (
            <nav className="flex justify-around items-center bg-white px-4 py-2 shadow-md min-h-[60px]">
                <div className="animate-pulse bg-gray-200 h-6 w-24 rounded"></div>
                <div className="animate-pulse bg-gray-200 h-6 w-48 rounded hidden md:block"></div>
                <div className="animate-pulse bg-gray-200 h-8 w-16 rounded"></div>
            </nav>
        );
    }

    return (
        <nav className="flex justify-around items-center bg-white px-4 py-2 shadow-md">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3 cursor-pointer group">
                <div className="bg-gradient-to-br from-emerald-500 via-green-400 to-teal-500 p-3 rounded-2xl shadow-lg group-hover:scale-105 transition">
                    <GiShuttlecock className="text-2xl text-white" />
                </div>

                <div>
                    <h1 className="text-2xl font-black tracking-tight bg-gradient-to-r from-emerald-400 via-green-400 to-teal-300 bg-clip-text text-transparent">
                        SportNest
                    </h1>
                    <p className="text-[8px] uppercase tracking-[4px] text-gray-400">
                        Book • Play • Compete
                    </p>
                </div>
            </Link>

            {/* NAV LINKS */}
            <ul className="hidden md:flex items-center gap-6 font-medium text-sm">
                <li>
                    <Link href="/" className={linkClass("/")}>
                        Home
                    </Link>
                </li>

                <li>
                    <Link href="/all-facilities" className={linkClass("/all-facilities")}>
                        All Facilities
                    </Link>
                </li>

                {isLoggedIn && (
                    <>
                        <li>
                            <Link href="/my-bookings" className={linkClass("/my-bookings")}>
                                My Bookings
                            </Link>
                        </li>
                        <li>
                            <Link href="/add-facility" className={linkClass("/add-facility")}>
                                Add Facility
                            </Link>
                        </li>
                        <li>
                            <Link href="/manage-facilities" className={linkClass("/manage-facilities")}>
                                Manage My Facilities
                            </Link>
                        </li>
                    </>
                )}
            </ul>

            {/* AUTH SECTION */}
            <div className="flex items-center gap-3">
                {!isLoggedIn ? (
                    <Link
                        href="/login"
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-md hover:scale-105 transition"
                    >
                        Login
                    </Link>
                ) : (
                    <div className="relative group py-2">

                        {/* AVATAR WRAPPER */}
                        <div className="cursor-pointer">
                            {session?.user?.image ? (
                                <Image
                                    src={session.user.image}
                                    alt="user profile"
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 rounded-full border border-gray-100 object-cover"
                                />
                            ) : (
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-white font-bold text-lg flex items-center justify-center shadow-sm select-none hover:opacity-90 transition">
                                    {userInitial}
                                </div>
                            )}
                        </div>

                        {/* Dropdown Menu */}
                        <div className="absolute right-0 top-full hidden group-hover:block bg-white shadow-xl rounded-xl p-3 w-48 border border-gray-100 z-50">
                            <p className="px-3 py-2 text-xs text-gray-400 font-medium border-b border-gray-100 mb-1 truncate">
                                Signed in as <br />
                                <span className="text-sm font-semibold text-gray-800">{session?.user?.name}</span>
                            </p>

                            <Link className="block px-3 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition" href="/my-bookings">
                                My Bookings
                            </Link>

                            <Link className="block px-3 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition" href="/add-facility">
                                Add Facility
                            </Link>

                            <Link className="block px-3 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition" href="/manage-facilities">
                                Manage Facilities
                            </Link>

                            {/* <button
                                onClick={async () => {
                                    await authClient.signOut();
                                    window.location.reload(); // Hard clear auth client cache states
                                }}
                                className="w-full text-left mt-2 px-3 py-2 text-sm font-medium hover:bg-red-50 text-red-500 rounded-lg transition border-t border-gray-50 pt-2"
                            >
                                Logout
                            </button> */}

                            <button
                                onClick={async () => {
                                    try {
                                        // 1. Trigger the auth sign out
                                        await authClient.signOut();

                                        // 2. Show the success toast immediately
                                        toast.success("Logged out successfully! See you soon.");

                                        // 3. Wait 1 second so they can see the animation, then redirect or refresh
                                        setTimeout(() => {
                                            // Sending them to home page and forcing a clean state reload
                                            window.location.href = "/";
                                        }, 1000);

                                    } catch (error) {
                                        toast.error("Something went wrong during logout.");
                                        console.error(error);
                                    }
                                }}
                                className="w-full text-left mt-2 px-3 py-2 text-sm font-medium hover:bg-red-50 text-red-500 rounded-lg transition border-t border-gray-50 pt-2"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                )}
            </div>

        </nav>
    );
};

export default Navbar;