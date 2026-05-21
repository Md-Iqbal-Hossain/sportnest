
'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { GiShuttlecock } from "react-icons/gi";
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-hot-toast';
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Navbar = () => {

    const pathname = usePathname();
    const { data: session, isPending } = authClient.useSession();

    const [mobileOpen, setMobileOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const isLoggedIn = !isPending && !!session?.user;

    const isActive = (path) => pathname === path;

    const linkClass = (path) =>
        isActive(path)
            ? "text-emerald-500 font-bold"
            : "text-gray-700 hover:text-emerald-500 transition";

    const userInitial = session?.user?.name
        ? session.user.name.charAt(0).toUpperCase()
        : 'U';

    const handleLogout = async () => {
        try {
            await authClient.signOut();
            toast.success("Logged out successfully!");
            setTimeout(() => window.location.href = "/", 800);
        } catch (err) {
            toast.error("Logout failed");
        }
    };

    if (isPending) {
        return (
            <nav className="flex justify-between items-center px-4 py-3 shadow-md">
                <div className="h-6 w-24 bg-gray-200 animate-pulse rounded"></div>
                <div className="h-8 w-8 bg-gray-200 animate-pulse rounded-full"></div>
            </nav>
        );
    }

    return (
        <div className="bg-white shadow-md">

            <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">

                {/* LOGO */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-emerald-500 via-green-400 to-teal-500 p-3 rounded-2xl">
                        <GiShuttlecock className="text-2xl text-white" />
                    </div>
                    <div>
                        <h1 className="text-xl font-black text-emerald-500">
                            SportNest
                        </h1>
                        <p className="text-[8px] text-gray-400 uppercase">
                            Book • Play • Compete
                        </p>
                    </div>
                </Link>

                {/* DESKTOP MENU */}
                <ul className="hidden md:flex gap-6 text-sm font-medium">
                    <li><Link href="/" className={linkClass("/")}>Home</Link></li>
                    <li><Link href="/all-facilities" className={linkClass("/all-facilities")}>All Facilities</Link></li>

                    {isLoggedIn && (
                        <>
                            <li><Link href="/my-bookings" className={linkClass("/my-bookings")}>My Bookings</Link></li>
                            <li><Link href="/add-facility" className={linkClass("/add-facility")}>Add Facility</Link></li>
                            <li><Link href="/manage-facilities" className={linkClass("/manage-facilities")}>Manage Facility</Link></li>
                        </>
                    )}
                </ul>

                {/* RIGHT SIDE */}
                <div className="flex items-center gap-3">

                    {/* MOBILE BUTTON */}
                    <button
                        className="md:hidden text-2xl"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? <HiX /> : <HiOutlineMenu />}
                    </button>

                    {!isLoggedIn ? (
                        <Link
                            href="/login"
                            className="px-4 py-2 bg-emerald-500 text-white rounded-xl"
                        >
                            Login
                        </Link>
                    ) : (
                        <div className="relative">

                            {/* AVATAR */}
                            <div
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="cursor-pointer"
                            >
                                {session?.user?.image ? (
                                    <Image
                                        src={session.user.image}
                                        alt="user"
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                ) : (
                                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-500 text-white font-bold">
                                        {userInitial}
                                    </div>
                                )}
                            </div>

                            {/* DROPDOWN */}
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-52 bg-white shadow-lg rounded-xl border p-2 z-50">

                                    {/* USER INFO HEADER */}
                                    <div className="px-3 py-2 border-b mb-2">
                                        <p className="text-xs text-gray-400">Signed in as</p>
                                        <p className="text-sm font-semibold text-gray-800 truncate">
                                            {session?.user?.name}
                                        </p>
                                    </div>

                                    <Link href="/my-bookings" className="block p-2 hover:bg-gray-100 rounded">
                                        My Bookings
                                    </Link>

                                    <Link href="/add-facility" className="block p-2 hover:bg-gray-100 rounded">
                                        Add Facility
                                    </Link>

                                    <Link href="/manage-facilities" className="block p-2 hover:bg-gray-100 rounded">
                                        Manage Facility
                                    </Link>

                                    <button
                                        onClick={handleLogout}
                                        className="w-full text-left p-2 text-red-500 hover:bg-red-50 rounded"
                                    >
                                        Logout
                                    </button>

                                </div>
                            )}
                        </div>
                    )}
                </div>

            </nav>

            {/* MOBILE MENU */}
            {mobileOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2">
                    <Link href="/" className="block">Home</Link>
                    <Link href="/all-facilities" className="block">All Facilities</Link>
                    {isLoggedIn && (
                        <>
                            <Link href="/my-bookings" className="block">My Bookings</Link>
                            <Link href="/add-facility" className="block">Add Facility</Link>
                            <Link href="/manage-facilities" className="block">Manage Facility</Link>
                        </>
                    )}
                </div>
            )}

        </div>
    );
};

export default Navbar;