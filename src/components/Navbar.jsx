
'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { GiShuttlecock } from "react-icons/gi";

const Navbar = () => {
    const isLoggedIn = false; // later replace with real auth
    const pathname = usePathname();

    const isActive = (path) => pathname === path;

    const linkClass = (path) =>
        isActive(path)
            ? "bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent font-bold"
            : "text-gray-700 hover:text-emerald-500 transition";

    return (
        <nav className="flex justify-around items-center bg-white px-4 py-2 shadow-md">

            {/* ================= LOGO ================= */}
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

            {/* ================= NAV LINKS ================= */}
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

                {/* PRIVATE LINKS */}
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
                                Manage Facilities
                            </Link>
                        </li>
                    </>
                )}

            </ul>

            {/* ================= AUTH SECTION ================= */}
            <div className="flex items-center gap-3">

                {!isLoggedIn && (
                    <Link
                        href="/login"
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-md hover:scale-105 transition"
                    >
                        Login
                    </Link>
                )}

                {isLoggedIn && (
                    <div className="relative group">

                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 cursor-pointer" />

                        {/* Dropdown */}
                        <div className="absolute right-0 mt-3 hidden group-hover:block bg-white shadow-lg rounded-xl p-3 w-48">

                            <Link className="block px-3 py-2 hover:bg-gray-100 rounded" href="/my-bookings">
                                My Bookings
                            </Link>

                            <Link className="block px-3 py-2 hover:bg-gray-100 rounded" href="/add-facility">
                                Add Facility
                            </Link>

                            <Link className="block px-3 py-2 hover:bg-gray-100 rounded" href="/manage-facilities">
                                Manage Facilities
                            </Link>

                            <button className="w-full text-left px-3 py-2 hover:bg-red-100 text-red-500 rounded">
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
