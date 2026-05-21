'use client';

import React from 'react';
import { MdErrorOutline } from 'react-icons/md';

const ErrorPage = ({ error, reset }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-orange-100 px-6">

            <div className="max-w-md text-center bg-white p-8 rounded-3xl shadow-xl">

                {/* Error Icon */}
                <div className="flex justify-center mb-5">
                    <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
                        <MdErrorOutline className="text-5xl text-red-500" />
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-3xl font-bold text-gray-800">
                    Something went wrong
                </h1>

                {/* Friendly message */}
                <p className="mt-3 text-gray-600 leading-relaxed">
                    We encountered an unexpected error while loading this page.
                    Please try again.
                </p>

                {/* Optional error message for development */}
                {error?.message && (
                    <p className="mt-4 text-sm text-red-500 bg-red-50 p-3 rounded-lg overflow-auto">
                        {error.message}
                    </p>
                )}

                {/* Retry button */}
                <button
                    onClick={() => reset()}
                    className="mt-8 px-6 py-3 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 hover:scale-105 transition duration-300 shadow-lg"
                >
                    Try Again
                </button>

            </div>

        </div>
    );
};

export default ErrorPage;