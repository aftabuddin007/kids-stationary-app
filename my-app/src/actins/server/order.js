"use server";

import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { clearCart, getCartData } from "./cart";
import { sendInvoiceEmail } from "@/lib/sendEmail";

const { dbConnect, collections } = require("@/lib/dbConnect");

const orderCollection = dbConnect(collections.ORDER)
export const createOrder = async(payload)=>{
    const {user} = (await getServerSession(authOptions))||{};
    if(!user) return{success:false}

    const cart = await getCartData();
    if(!cart.length === 0) return {success:false,message:'Cart is empty'}
const newOrder = {
   
    createdAt:new Date().toISOString(),
    items:cart,
    ...payload,


}
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

   const insertResult = await orderCollection.insertOne(newOrder);

  if (insertResult.insertedId) {
    await clearCart();
    return { success: true, orderId: insertResult.insertedId };
  }
   await sendInvoiceEmail({
      userEmail: user.email,
      orderId: insertResult.insertedId.toString(),
      items: cart,
      total,
      name: user.name || "Customer",
    });

    return { success: true, orderId: result.insertedId };




  return { success: false };
};



