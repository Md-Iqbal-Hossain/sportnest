
// import { Button } from '@heroui/react';
// import React from 'react';
// import FacilityCard from './FacilityCard';
// import Link from 'next/link';

// const Featured = async () => {
//     const res = await fetch(
//         `${process.env.NEXT_PUBLIC_SERVER_URL}/featured`
//     );

//     const facilities = await res.json();

//     return (
//         <div className='mt-10 max-w-7xl mx-auto px-4'>
            
//             <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                
//                 <div>
//                     <h1 className='text-3xl font-bold'>
//                         Featured Facilities
//                     </h1>

//                     <p className='text-gray-500'>
//                         Manage sports facilities with seamless booking and easy control
//                     </p>
//                 </div>

//                 <Link href="/all-facilities">
//                     <Button
//                         variant="outline"
//                         className="rounded-none border-green-500 border-2 text-green-500"
//                     >
//                         All Facilities
//                     </Button>
//                 </Link>

//             </div>

//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
//                 {
//                     facilities.map((facility) => (
//                         <FacilityCard
//                             key={facility._id}
//                             facility={facility}
//                         />
//                     ))
//                 }
//             </div>

//         </div>
//     );
// };

// export default Featured;




// ****************************

import { Button } from '@heroui/react';
import React from 'react';
import FacilityCard from './FacilityCard';
import Link from 'next/link';

const Featured = async () => {
    let facilities = [];

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/featured`,
            {
                cache: 'no-store'
            }
        );

        if (!res.ok) {
            throw new Error(`Request failed: ${res.status}`);
        }

        facilities = await res.json();

    } catch (error) {
        console.log("Featured Error:", error);
    }

    return (
        <div className='mt-10 max-w-7xl mx-auto px-4'>

            <div className='flex flex-col md:flex-row items-center justify-between gap-4'>

                <div>
                    <h1 className='text-3xl font-bold'>
                        Featured Facilities
                    </h1>

                    <p className='text-gray-500'>
                        Manage sports facilities with seamless booking and easy control
                    </p>
                </div>

                <Link href="/all-facilities">
                    <Button
                        variant="outline"
                        className="rounded-none border-green-500 border-2 text-green-500"
                    >
                        All Facilities
                    </Button>
                </Link>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {
                    facilities?.map((facility) => (
                        <FacilityCard
                            key={facility._id}
                            facility={facility}
                        />
                    ))
                }
            </div>

        </div>
    );
};

export default Featured;