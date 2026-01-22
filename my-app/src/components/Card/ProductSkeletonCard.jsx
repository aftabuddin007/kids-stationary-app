import React from 'react';

const ProductCardSkeleton = () => {
  return (
    <div className="card bg-base-100 w-full shadow-xl border border-base-200 animate-pulse">
      
      {/* Image Placeholder */}
      <div className="h-64 w-full bg-base-300 rounded-t-2xl"></div>

      {/* Body Section */}
      <div className="card-body p-5">
        
        {/* Title Placeholder */}
        <div className="h-6 bg-base-300 rounded w-3/4 mb-2"></div>

        {/* Rating and Sold Row Placeholder */}
        <div className="flex items-center justify-between mt-2 mb-4">
          <div className="h-4 bg-base-300 rounded w-1/4"></div> {/* Rating */}
          <div className="h-4 bg-base-300 rounded w-1/5"></div> {/* Sold */}
        </div>

        {/* Price Section Placeholder */}
        <div className="flex items-end gap-2 mb-6">
          <div className="h-8 bg-base-300 rounded w-1/3"></div> {/* Main Price */}
          <div className="h-4 bg-base-300 rounded w-1/6 mb-1"></div> {/* Discount Price */}
        </div>

        {/* Button Placeholder */}
        <div className="card-actions justify-end mt-auto">
          <div className="h-10 bg-base-300 rounded w-full"></div>
        </div>
        
      </div>
    </div>
  );
};

export default ProductCardSkeleton;