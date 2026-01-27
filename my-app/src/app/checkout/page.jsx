import { getCartData } from '@/actins/server/cart';
import Checkout from '@/components/Home/Checkout';
import React from 'react';

const CheckOutPage = async () => {
  const cartItems = await getCartData();

  const formattedItems = cartItems.map(item => ({
    ...item,
    _id: item._id.toString()
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">Checkout</h2>

      {/* 2 Column Layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* LEFT — Checkout Form */}
        <div className="w-full lg:w-2/3">
          <Checkout cartItems={formattedItems} />
        </div>

        {/* RIGHT — Order Summary */}
        <div className="w-full lg:w-1/3">
          <Checkout cartItems={formattedItems} summaryOnly />
        </div>

      </div>
    </div>
  );
};

export default CheckOutPage;
