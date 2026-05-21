
import Link from "next/link";

const Banner = () => {
    return (
        <section className="relative min-h-[70vh] md:h-[80vh] flex items-center justify-center bg-[url('/assets/Banner.jpg')] bg-cover bg-center">

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="hidden sm:flex absolute top-20 left-4 md:left-10 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-xs items-center gap-2">
                ⭐ 4.9 Rating
            </div>

            <div className="hidden sm:block absolute top-28 right-4 md:right-10 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-xs">
                🔥 Trusted by 10k+ Users
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center text-white max-w-3xl px-4 sm:px-6 flex flex-col items-center gap-5 sm:gap-6">

                {/* Title */}
                <h1 className="text-3xl sm:text-5xl md:text-7xl font-black leading-tight">
                    Book Your <br />
                    Next{" "}
                    <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                        Sports Facility
                    </span>
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-lg md:text-2xl text-gray-200 max-w-xl">
                    Discover and book football turfs, badminton courts, and more — anytime, anywhere.
                </p>

                <Link
                    href="/all-facilities"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-lg hover:scale-105 active:scale-95 transition"
                >
                    Explore Facilities
                </Link>

            </div>

        </section>
    );
};

export default Banner;