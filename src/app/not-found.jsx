// src/app/not-found.jsx
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-gray-200">404</h1>
                <h2 className="text-4xl font-semibold mt-6">Page Not Found</h2>
                <p className="text-gray-600 mt-3 mb-8">
                    Sorry, the page you&apos;re looking for doesn&apos;t exist.
                </p>
                <Link href="/" className="btn btn-primary">
                    Go Back Home
                </Link>
            </div>
        </div>
    );
}