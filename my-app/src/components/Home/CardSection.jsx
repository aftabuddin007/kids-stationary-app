"use client";

import { useMemo, useState } from "react";
import CartCard from "../Card/CartCard";
import Link from "next/link";

const CardSection = ({ cartItems = [] }) => {
  const [items, setItems] = useState(cartItems);

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const totalPrices = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item._id != id));
  };

  const updateQuantity = (id, q) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item._id == id ? { ...item, quantity: q } : item))
    );
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <p className="mb-4 text-lg font-medium">{items.length} Items Found</p>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* 🛒 CART ITEMS - LEFT ON LARGE, TOP ON MOBILE */}
        <div className="flex-3">
          {items.map((cartItem) => (
            <CartCard
              key={cartItem._id.toString()}
              cartItem={{ ...cartItem, _id: cartItem._id.toString() }}
              removeItem={removeItem}
              updateQuantity={updateQuantity}
            />
          ))}
        </div>

        {/* 🧾 SUMMARY CARD - RIGHT ON LARGE, BOTTOM ON MOBILE */}
        <div className="w-full lg:w-1/3 mx-auto lg:mx-0">
          <div className="bg-white shadow-xl rounded-lg p-6 sticky ">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2 text-center">
              Order Summary
            </h2>

            {/* Product List */}
            <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
              {items.map((item) => (
                <div
                  key={item._id}
                  className="flex justify-between items-center text-sm border-b pb-2"
                >
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-gray-500">
                      ${item.price} × {item.quantity}
                    </p>
                  </div>
                  <p className="font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="border-t mt-4 pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Total Items</span>
                <span>{totalItems}</span>
              </div>

              <div className="flex justify-between text-lg font-bold">
                <span>Total Price</span>
                <span>${totalPrices.toFixed(2)}</span>
              </div>

              <Link 
              
              href={'/checkout'}
             disabled={!items.length}
               className="w-full mt-4 btn bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-semibold transition cursor-pointer">
                Confirm Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
