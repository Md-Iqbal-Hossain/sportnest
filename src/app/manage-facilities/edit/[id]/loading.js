export default function Loading() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">

            {/* Spinner */}
            <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>

            {/* Title */}
            <h2 className="mt-6 text-xl font-semibold text-slate-700">
                Loading facility data...
            </h2>

            {/* Subtitle */}
            <p className="mt-2 text-sm text-slate-500 text-center max-w-md">
                Fetching existing facility details for editing
            </p>

        </div>
    );
}