import React from 'react';
import products from '@/components/layouts/data/toys.json'
import ProductCard from '../Card/ProductCard';
const Products = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <h2 className="font-bold text-center text-4xl mb-10">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    products.map(product=><ProductCard product={product} key={product.title}></ProductCard>)
                }
            </div>

        </div>
    );
};

export default Products;