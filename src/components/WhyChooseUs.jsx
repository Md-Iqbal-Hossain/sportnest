
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaShieldAlt, FaCalendarCheck, FaUsers } from 'react-icons/fa';

const features = [
    {
        title: "Instant Booking",
        description: "Book your favorite sports facility in seconds with real-time availability.",
        icon: <FaBolt />
    },
    {
        title: "Secure Payments",
        description: "Safe and reliable payment system with full transaction security.",
        icon: <FaShieldAlt />
    },
    {
        title: "Easy Scheduling",
        description: "Choose your preferred time slots without any hassle or confusion.",
        icon: <FaCalendarCheck />
    },
    {
        title: "Community Access",
        description: "Join a growing sports community and connect with players near you.",
        icon: <FaUsers />
    }
];

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const WhyChooseUs = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 mt-24">

            {/* HEADER */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-14"
            >
                <h2 className="text-4xl font-extrabold text-gray-900">
                    Why Choose <span className="text-emerald-500">SportNest?</span>
                </h2>
                <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                    A smarter way to book sports facilities with speed, safety, and simplicity
                </p>
            </motion.div>

            {/* GRID */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {features.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={{
                            scale: 1.05,
                            rotate: 0.5,
                            boxShadow: "0px 10px 30px rgba(16, 185, 129, 0.15)"
                        }}
                        className="relative group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm overflow-hidden"
                    >
                        {/* Glow background effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                        {/* ICON */}
                        <div className="relative z-10 mb-4">
                            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 text-2xl group-hover:scale-110 transition">
                                {item.icon}
                            </div>
                        </div>

                        {/* TITLE */}
                        <h3 className="relative z-10 text-lg font-bold text-gray-800">
                            {item.title}
                        </h3>

                        {/* DESCRIPTION */}
                        <p className="relative z-10 text-sm text-gray-500 mt-2 leading-relaxed">
                            {item.description}
                        </p>

                        {/* bottom accent line */}
                        <div className="absolute bottom-0 left-0 w-0 h-1 bg-emerald-500 group-hover:w-full transition-all duration-500"></div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default WhyChooseUs;