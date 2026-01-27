"use client";

import { createOrder } from "@/actins/server/order";
import { useSession } from "next-auth/react";
import Error from "next/error";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";

const Checkout = ({ cartItems = [], summaryOnly = false }) => {
  const [items] = useState(cartItems);
    const session = useSession()
  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const totalPrices = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

 
  
if(session?.status === 'loading'){
    return <p>loading.......</p>
}
  // 🚀 Handle Order (PRINT VALUES)
 const handleOrder = async (e) => {
  e.preventDefault();
  const form = e.target;

  const payload = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    payment: form.payment.value,
    address: form.address.value,
    totalPrice: totalPrices,
    items,
    totalItems,
  };

  const result = await createOrder(payload);

  if (result.success) {
    toast.success("Order placed successfully 🎉");
  } else {
    toast.error("Database error ❌");
  }
};


  // ---------------- SUMMARY ----------------
  if (summaryOnly) {
    return (
      <div className="bg-white shadow-xl rounded-lg p-6 sticky top-5">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2 text-center">
          Order Summary
        </h2>

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

        <div className="border-t mt-4 pt-4 space-y-2">
          <div className="flex justify-between">
            <span>Total Items</span>
            <span>{totalItems}</span>
          </div>

          <div className="flex justify-between text-lg font-bold">
            <span>Total Price</span>
            <span>${totalPrices.toFixed(2)}</span>
          </div>
        </div>
      </div>
    );
  }

  // ---------------- CHECKOUT FORM ----------------
  return (
    <div className="bg-white shadow-xl rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-6 border-b pb-2">Billing Details</h2>

      <form className="space-y-4" onSubmit={handleOrder}>
        <div>
          <label className="block text-sm font-semibold mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={session?.data?.user?.name}
           
            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-green-500"
            required
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={session?.data?.user?.email}
            
            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-green-500"
            required
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Phone</label>
          <input
            type="number"
            name="phone"
            
            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Address</label>
          <textarea
            name="address"
            
            rows="3"
            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-green-500"
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">
            Payment Method
          </label>
          <select
            name="payment"
            
            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-green-500"
          >
            <option>Cash on Delivery</option>
            <option>Card Payment</option>
            <option>Mobile Banking</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
