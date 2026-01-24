"use client";
import { Trash2, Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function CartCard({ cartItem, onDelete }) {
  const [quantity, setQuantity] = useState(cartItem.quantity || 1);

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleDelete = () => {
    if (confirm("Are you sure you want to remove this item from cart?")) {
      onDelete(cartItem.productId);
    }
  };

  const totalPrice = (cartItem.price * quantity).toFixed(2);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
      <div className="p-4">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-4 px-4">
                  <img
                    src={cartItem.image}
                    alt={cartItem.title}
                    className="w-[50px] h-[50px] object-cover rounded"
                  />
                </td>

                <td className="py-4 px-4 font-medium">{cartItem.title}</td>

                <td className="py-4 px-4 font-semibold">
                  ${cartItem.price.toFixed(2)}
                </td>

                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleDecrement}
                      disabled={quantity <= 1}
                      className="w-7 h-7 flex items-center justify-center rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
                    >
                      <Minus className="w-3 h-3" />
                    </button>

                    <span className="w-8 text-center font-semibold">
                      {quantity}
                    </span>

                    <button
                      onClick={handleIncrement}
                      className="w-7 h-7 flex items-center justify-center rounded bg-gray-100 hover:bg-gray-200"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </td>

                <td className="py-4 px-4 font-bold">${totalPrice}</td>

                <td className="py-4 px-4">
                  <button
                    onClick={handleDelete}
                    className="flex items-center gap-2 px-3 py-2 text-red-600 hover:bg-red-50 rounded"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span className="text-sm font-medium">Delete</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
