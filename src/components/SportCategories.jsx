
'use client';

import React from 'react';
import {
    GiSoccerBall,
    GiCricketBat,
    GiTennisBall,
    GiShuttlecock,
    GiBasketballBasket,
    GiVolleyballBall,
    GiWeightLiftingUp
} from "react-icons/gi";
import { FaSwimmingPool } from "react-icons/fa";

const categories = [
    {
        name: "Football",
        icon: <GiSoccerBall />,
        description: "Play 11v11 matches on premium turf"
    },
    {
        name: "Cricket",
        icon: <GiCricketBat />,
        description: "Book nets and full ground matches"
    },
    {
        name: "Tennis",
        icon: <GiTennisBall />,
        description: "Hard court and clay court booking"
    },
    {
        name: "Badminton",
        icon: <GiShuttlecock />,
        description: "Indoor courts for quick matches"
    },
    {
        name: "Basketball",
        icon: <GiBasketballBasket />,
        description: "Outdoor & indoor courts available"
    },
    {
        name: "Volleyball",
        icon: <GiVolleyballBall />,
        description: "Beach & indoor volleyball courts"
    },
    {
        name: "Swimming",
        icon: <FaSwimmingPool />,
        description: "Pool lanes for training & leisure"
    },
    {
        name: "Gym",
        icon: <GiWeightLiftingUp />,
        description: "Fitness & strength training facilities"
    }
];

const SportCategories = () => {
    return (
        <div className="relative max-w-7xl mx-auto px-4 mt-20">

            {/* Background Glow */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-50 via-white to-green-50 blur-3xl opacity-60"></div>

            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900">
                    Explore Sport Categories
                </h2>
                <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                    Discover and book your favorite sports facilities instantly with a smooth and modern experience
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {categories.map((cat, index) => (
                    <div
                        key={index}
                        className="group relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2"
                    >

                        {/* Icon Circle */}
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-3xl mb-4 group-hover:scale-110 transition">
                            {cat.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold text-gray-800">
                            {cat.name}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-gray-500 mt-2">
                            {cat.description}
                        </p>

                        {/* Hover Glow Border */}
                        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-400 transition"></div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default SportCategories;