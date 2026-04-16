
'use client';

export default function GlobalError({
    error,
    reset,
}) {
    return (
        <html>
            <body>
                <div className="min-h-screen flex items-center justify-center bg-gray-50">
                    <div className="text-center max-w-md px-6">
                        <div className="text-8xl mb-6">💥</div>
                        <h2 className="text-3xl font-bold mb-3">Critical Error</h2>
                        <p className="text-gray-600 mb-8">
                            Something went seriously wrong. Please refresh the page.
                        </p>

                        <button
                            onClick={reset}
                            className="btn btn-error px-8 py-3 text-lg"
                        >
                            Refresh Page
                        </button>
                    </div>
                </div>
            </body>
        </html>
    );
}