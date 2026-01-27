"use client";

import { useMemo, useState } from "react";

const Checkout = ({ cartItems = [], summaryOnly = false }) => {
  const [items] = useState(cartItems);

  // 🧮 Totals Calculation
  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const totalPrices = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  // 🧾 Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    payment: "Cash on Delivery",
  });

  // ✏️ Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 🚀 Submit Order
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!items.length) return alert("Cart is empty");

    const orderData = {
      customer: formData,
      items,
      totalItems,
      totalPrice: totalPrices,
      status: "pending",
      createdAt: new Date(),
    };

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      const data = await res.json();

      if (data.success) {
        alert("Order placed successfully 🎉");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      alert("Server error");
    }
  };

  // ================= SUMMARY (RIGHT SIDE) =================
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

  // ================= CHECKOUT FORM (LEFT SIDE) =================
  return (
    <div className="bg-white shadow-xl rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-6 border-b pb-2">Billing Details</h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-semibold mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
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
            value={formData.payment}
            onChange={handleChange}
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
