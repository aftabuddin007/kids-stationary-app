import React from 'react';
import Image from 'next/image'; // Optional: Use standard <img> if domains aren't configured
import { FaStar, FaShoppingCart, FaRegHeart } from 'react-icons/fa';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  const { title,_id, image, price, discount, ratings, reviews, sold } = product;

  // Calculate Discounted Price
  const discountedPrice = Math.round(price - (price * discount) / 100);

  return (
    <div className="card bg-base-100 w-full shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-base-200">
      {/* Image Section */}
      <figure className="relative h-64 w-full bg-gray-100 overflow-hidden group">
        <Image
            width={200}
            height={200}
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-3 right-3 badge badge-error text-white font-bold shadow-sm">
            -{discount}% OFF
          </div>
        )}
      </figure>

      {/* Body Section */}
      <div className="card-body p-5">
        {/* Title */}
        <h2 className="card-title text-lg leading-tight font-bold text-base-content line-clamp-1" title={title}>
          {title}
        </h2>

        {/* Rating and Sold Count Row */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400 text-sm" />
            <span className="font-bold text-sm">{ratings}</span>
            <span className="text-xs text-gray-500">({reviews})</span>
          </div>
          <div className="badge badge-ghost badge-sm text-xs text-gray-500">
            {sold} Sold
          </div>
        </div>

        {/* Price Section */}
        <div className="mt-3 flex items-end gap-2">
          <span className="text-2xl font-bold text-primary">৳{discountedPrice}</span>
          {discount > 0 && (
            <span className="text-sm text-gray-400 line-through mb-1">
              ৳{price}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="card-actions justify-end mt-4">
          <Link href={`/products/${_id}`} className="btn btn-primary btn-sm w-full flex items-center gap-2 text-white shadow-md hover:scale-105 transition-transform">
            <FaShoppingCart /> View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;