import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[65vh] flex flex-col items-center justify-center text-center px-4 py-16 space-y-6">
      <div className="space-y-2">
        <span className="badge-trust">404 Error</span>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          The page or resource you are looking for does not exist or may have been moved.
        </p>
      </div>

      <div className="flex items-center justify-center gap-3 pt-2">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-800 text-white text-xs font-semibold hover:bg-emerald-900 transition-all shadow-sm"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
