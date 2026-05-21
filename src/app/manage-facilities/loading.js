export default function Loading() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4">

            {/* Spinner */}
            <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>

            {/* Title */}
            <h2 className="mt-6 text-xl font-semibold text-slate-700">
                Loading your facilities...
            </h2>

            {/* Subtitle */}
            <p className="mt-2 text-sm text-slate-500 text-center max-w-md">
                Fetching your management dashboard and facility data from server
            </p>

        </div>
    );
}