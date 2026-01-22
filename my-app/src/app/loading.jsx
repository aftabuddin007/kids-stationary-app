"use client";

import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/60 backdrop-blur-md">
      {/* Top Progress Bar Animation */}
      <div className="fixed top-0 left-0 h-1 w-full bg-slate-100 overflow-hidden">
        <div className="h-full bg-orange-600 animate-progress-loading origin-left"></div>
      </div>

      {/* Center Logo/Spinner Area */}
      <div className="relative flex items-center justify-center">
        {/* Outer Ring */}
        <div className="w-20 h-20 border-4 border-slate-200 border-t-orange-600 rounded-full animate-spin"></div>
        
        {/* Inner Pulsing Core */}
        <div className="absolute w-12 h-12 bg-slate-900 rounded-full animate-pulse flex items-center justify-center">
            <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Loading</span>
        </div>
      </div>

      {/* Text Detail */}
      <div className="mt-6 text-center">
        <h2 className="text-lg font-bold text-slate-800 tracking-tight">Processing Request</h2>
        <p className="text-sm text-slate-400">Please wait a moment...</p>
      </div>
    </div>
  );
};

export default Loading;