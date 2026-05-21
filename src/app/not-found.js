// import React from 'react';

// const NotFoundPage = () => {
//     return (
//         <div>
//             404 not found
//         </div>
//     );
// };

// export default NotFoundPage;


// ****************************
'use client';

import Link from 'next/link';
import React from 'react';
import { IoHomeSharp } from 'react-icons/io5';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-6">

            <div className="text-center max-w-md">

                {/* 404 */}
                <h1 className="text-8xl font-extrabold text-green-500">
                    404
                </h1>

                {/* Friendly message */}
                <h2 className="mt-4 text-3xl font-bold text-gray-800">
                    Oops! Page not found
                </h2>

                <p className="mt-3 text-gray-600">
                    The page you are looking for doesn’t exist or may have been moved.
                </p>

                {/* Back Home Button */}
                <Link href="/" className="inline-block mt-8">
                    <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700 hover:scale-105 transition duration-300 shadow-lg">
                        <IoHomeSharp />
                        Back Home
                    </button>
                </Link>

            </div>

        </div>
    );
};

export default NotFoundPage;