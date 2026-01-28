"use server";

import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { clearCart, getCartData } from "./cart";

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
   const insertResult = await orderCollection.insertOne(newOrder);

  if (insertResult.insertedId) {
    await clearCart();
    return { success: true, orderId: insertResult.insertedId };
  }

  return { success: false };
};



