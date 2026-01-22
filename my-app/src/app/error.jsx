"use client"; // Error components must be Client Components

import { useEffect } from 'react';
import { FaExclamationTriangle, FaRedo, FaHome, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service like Sentry
    console.error("Critical UI Error:", error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full text-center">
        
        {/* Icon Area */}
        <div className="mb-6 flex justify-center">
          <div className="p-5 bg-red-50 rounded-full border-2 border-red-100">
            <FaExclamationTriangle className="text-red-500 text-5xl" />
          </div>
        </div>

        {/* Content */}
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
          Something went wrong!
        </h1>
        <p className="text-slate-500 mb-8 leading-relaxed">
          We encountered a technical issue while loading this page. 
          This is usually temporary. Please try again or contact us if the problem persists.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => reset()}
            className="btn btn-primary btn-lg gap-2 bg-orange-600 border-none hover:bg-orange-700 text-white shadow-lg"
          >
            <FaRedo className="text-sm" /> Try Re-loading Page
          </button>
          
          <div className="grid grid-cols-2 gap-3">
            <Link 
              href="/" 
              className="btn btn-outline border-slate-200 text-slate-600 hover:bg-slate-50 gap-2"
            >
              <FaHome /> Home
            </Link>
            <a 
              href="https://wa.me/YOUR_NUMBER"
              className="btn btn-outline border-green-200 text-green-600 hover:bg-green-50 gap-2"
            >
              <FaWhatsapp /> Support
            </a>
          </div>
        </div>

        {/* Technical Hint (Subtle) */}
        <div className="mt-10 p-4 bg-slate-50 rounded-lg border border-slate-100">
          <p className="text-[10px] text-slate-400 font-mono break-all">
            Error ID: {error.digest || "Internal_Server_Error"}
          </p>
        </div>
      </div>
    </div>
  );
}