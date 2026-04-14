// src/app/error.jsx
'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center max-w-md px-6">
                <div className="text-8xl mb-6">😵</div>

                <h2 className="text-3xl font-bold mb-3">Something went wrong!</h2>
                <p className="text-gray-600 mb-8">
                    We encountered an unexpected error. Please try again.
                </p>

                <button
                    onClick={reset}
                    className="btn btn-primary px-8 py-3 text-lg"
                >
                    Try Again
                </button>

                <p className="text-xs text-gray-500 mt-10">
                    Error ID: {error.digest || "Unknown"}
                </p>
            </div>
        </div>
    );
}