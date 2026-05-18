
'use client';

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn
} from "react-icons/fa6";
import { GiShuttlecock } from "react-icons/gi";

const Footer = () => {

  const isLoggedIn = false; // later replace with real auth

  const cardStyle =
    "bg-gray-900 p-6 rounded-2xl border border-gray-800 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10";

  const socialIcon =
    "w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 hover:bg-emerald-500 hover:scale-110 transition-all duration-300";

  return (
    <footer className="bg-gray-950 mt-20 text-gray-400">

      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* ================= LOGO ================= */}
        <div className="text-center mb-14 flex flex-col items-center">

          <Link href="/" className="flex items-center gap-3 group justify-center">

            {/* ICON */}
            <div className="bg-gradient-to-br from-emerald-500 via-green-400 to-teal-500 p-3 rounded-2xl shadow-lg group-hover:scale-105 transition">
              <GiShuttlecock className="text-2xl text-white" />
            </div>

            {/* TEXT */}
            <div className="text-left">
              <h1 className="text-2xl font-black tracking-tight bg-gradient-to-r from-emerald-400 via-green-400 to-teal-300 bg-clip-text text-transparent">
                SportNest
              </h1>

              <p className="text-[8px] uppercase tracking-[4px] text-gray-400">
                Book • Play • Compete
              </p>
            </div>

          </Link>

          <p className="mt-4 text-sm text-gray-500 max-w-md">
            Your trusted platform for instant sports facility booking and a seamless playing experience.
          </p>

        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* ================= CONTACT ================= */}
          <div className={cardStyle}>
            <h3 className="text-white font-semibold mb-4">Contact</h3>

            <div className="space-y-2 text-sm">
              <p>📧 support@sportnest.com</p>
              <p>📞 +880 1234-567890</p>
              <p>📍 Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div className={cardStyle}>
            <h3 className="text-white font-semibold mb-4">Quick Access</h3>

            <div className="space-y-3 text-sm">

              <Link href="/" className="block hover:text-emerald-400 transition">
                Home
              </Link>

              <Link href="/all-facilities" className="block hover:text-emerald-400 transition">
                All Facilities
              </Link>

              {/* PRIVATE LINKS */}
              {isLoggedIn && (
                <>
                  <Link href="/my-bookings" className="block hover:text-emerald-400 transition">
                    My Bookings
                  </Link>

                  <Link href="/add-facility" className="block hover:text-emerald-400 transition">
                    Add Facility
                  </Link>

                  <Link href="/manage-facilities" className="block hover:text-emerald-400 transition">
                    Manage My Facilities
                  </Link>
                </>
              )}

              {/* AUTH */}
              {!isLoggedIn ? (
                <Link href="/login" className="block hover:text-emerald-400 transition">
                  Login
                </Link>
              ) : (
                <button className="text-left hover:text-red-400 transition">
                  Logout
                </button>
              )}

            </div>
          </div>

          {/* ================= SOCIAL ================= */}
          <div className={cardStyle}>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>

            <div className="flex gap-4">

              <a href="#" className={socialIcon}>
                <FaFacebookF />
              </a>

              <a href="#" className={socialIcon}>
                <FaInstagram />
              </a>

              <a href="#" className={socialIcon}>
                <FaXTwitter />
              </a>

              <a href="#" className={socialIcon}>
                <FaLinkedinIn />
              </a>

            </div>

          </div>

        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-14 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">

          <p>
            © 2026 <span className="text-emerald-400 font-semibold">SportNest</span>.
            All rights reserved.
          </p>

          <p className="mt-2">
            Book • Play • Compete ⚽🏸🏏
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;