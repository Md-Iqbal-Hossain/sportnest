
import Image from "next/image";
import React from "react";
import { LuMapPin } from "react-icons/lu";
import { RxPeople } from "react-icons/rx";
import { FaClock } from "react-icons/fa";
import { Button } from "@heroui/react";
import Link from "next/link";
import { motion } from "framer-motion";

//  Badge color logic
const getBadgeColor = (type) => {
    switch (type?.toLowerCase()) {
        case "football":
            return "bg-green-300 text-white";
        case "cricket":
            return "bg-blue-300 text-white";
        case "badminton":
            return "bg-purple-300 text-white";
        case "tennis":
            return "bg-yellow-300 text-black";
        default:
            return "bg-gray-300 text-white";
    }
};

const FacilityCard = ({ facility }) => {
    const {
        _id,
        image,
        name,
        location,
        available_slots,
        capacity,
        price_per_hour,
        facility_type,
    } = facility;

    return (
        <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* IMAGE SECTION */}
            <div className="relative overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    width={500}
                    height={350}
                    className="h-[240px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* FACILITY TYPE BADGE */}
                <div className="absolute left-4 top-4">
                    <span
                        className={`rounded-full px-4 py-1 text-sm font-semibold shadow ${getBadgeColor(
                            facility_type
                        )}`}
                    >
                        {facility_type}
                    </span>
                </div>

                {/* PRICE BADGE */}
                <div className="absolute right-4 top-4">
                    <span className="rounded-full bg-green-600 px-4 py-1 text-sm font-semibold text-white shadow-lg">
                        ৳ {price_per_hour}/hr
                    </span>
                </div>

                {/* TITLE ON IMAGE */}
                <div className="absolute bottom-4 left-4 text-white">
                    <h2 className="text-2xl font-bold">{name}</h2>
                </div>
            </div>

            {/* CONTENT SECTION */}
            <div className="space-y-4 p-5">

                {/* LOCATION + CAPACITY */}
                <div className="flex items-center justify-between text-sm text-gray-600">

                    <div className="flex items-center gap-2">
                        <LuMapPin className="text-lg text-red-500" />
                        <span>{location}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <RxPeople className="text-lg text-blue-500" />
                        <span>Up to {capacity} Players</span>
                    </div>
                </div>

                {/* DIVIDER */}
                <div className="border-t border-dashed border-gray-200"></div>

                {/* BOTTOM SECTION */}
                <div className="flex items-center justify-between">

                    {/* SLOTS */}
                    <div className="flex items-center gap-2">
                        <FaClock className="text-green-600" />
                        <span className="text-sm font-medium text-gray-700">
                            {available_slots.length} Slots Available
                        </span>
                    </div>

                    {/* BUTTON */}
                    <Link href={`/all-facilities/${_id}`}>
                        <Button className="flex w-[110px] items-center justify-center rounded-xl bg-gray-600 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-600">
                        Book Now
                    </Button></Link>
                </div>
            </div>
        </div>
    );
};

export default FacilityCard;