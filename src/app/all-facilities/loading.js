export default function Loading() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">

            <div className="w-16 h-16 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>

            <h2 className="mt-6 text-xl font-semibold text-gray-700">
                Loading facilities...
            </h2>

            <p className="mt-2 text-gray-500">
                Please wait while we fetch all facilities
            </p>

        </div>
    );
}