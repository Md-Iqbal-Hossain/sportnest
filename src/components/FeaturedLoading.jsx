import React from 'react';

const FeaturedLoading = () => {
    return (
        <div className="py-20 flex flex-col items-center justify-center">

            <div className="w-16 h-16 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>

            <h2 className="mt-6 text-xl font-semibold text-gray-700">
                Loading...
            </h2>

            <p className="mt-2 text-gray-500">
                Fetching featured facilities
            </p>

        </div>
    );
};

export default FeaturedLoading;