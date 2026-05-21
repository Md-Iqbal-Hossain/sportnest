export default function Loading() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">

            {/* Spinner */}
            <div className="w-16 h-16 border-4 border-yellow-200 border-t-yellow-500 rounded-full animate-spin"></div>

            {/* Title */}
            <h2 className="mt-6 text-xl font-semibold text-gray-700">
                Loading your bookings...
            </h2>

            {/* Subtitle */}
            <p className="mt-2 text-gray-500">
                Please wait while we fetch your booking history
            </p>

        </div>
    );
}