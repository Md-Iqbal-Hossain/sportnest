'use client';

import React from 'react';
import { FaBolt, FaShieldAlt, FaCalendarCheck, FaUsers } from 'react-icons/fa';

const features = [
    {
        title: "Instant Booking",
        description: "Book your favorite sports facility in seconds with real-time availability.",
        icon: <FaBolt className="text-green-600 text-3xl" />
    },
    {
        title: "Secure Payments",
        description: "Safe and reliable payment system with full transaction security.",
        icon: <FaShieldAlt className="text-green-600 text-3xl" />
    },
    {
        title: "Easy Scheduling",
        description: "Choose your preferred time slots without any hassle or confusion.",
        icon: <FaCalendarCheck className="text-green-600 text-3xl" />
    },
    {
        title: "Community Access",
        description: "Join a growing sports community and connect with players near you.",
        icon: <FaUsers className="text-green-600 text-3xl" />
    }
];

const WhyChooseUs = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 mt-20">

            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900">
                    Why Choose SportNest?
                </h2>
                <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                    A smarter way to book sports facilities with speed, safety, and simplicity
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {features.map((item, index) => (
                    <div
                        key={index}
                        className="group bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2"
                    >

                        {/* Icon */}
                        <div className="mb-4">
                            {item.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold text-gray-800">
                            {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-gray-500 mt-2">
                            {item.description}
                        </p>

                    </div>
                ))}

            </div>
        </div>
    );
};

export default WhyChooseUs;