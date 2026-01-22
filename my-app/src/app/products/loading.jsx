import ProductCardSkeleton from '@/components/Card/ProductSkeletonCard';
import React from 'react';

const Loading = () => {
    // Define the number of skeletons to show statically
    const count = 10; 

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(count)].map((_, index) => (
                    <ProductCardSkeleton key={index} />
                ))}
            </div>
        </div>
    );
};

export default Loading;