"use server"

import { authOptions } from "@/lib/authOptions"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"

const { dbConnect, collections } = require("@/lib/dbConnect")

const cartCollection = dbConnect(collections.CART)
export const handleCart = async({product,inc = true})=>{
    const session = await getServerSession(authOptions)
const user = session?.user;
    console.log(user)
    if(!user)return {success:false}

// getcart item
const query = {email:user?.email, productId:product?._id}
const isAdded = await cartCollection.findOne(query)
if(isAdded){
    const updatedData = {
        $inc:{
            quantity:tnc?1:-1
        }
    };
    const result  = await cartCollection.updateOne(query,updatedData)
    return {success:Boolean(result.modifiedCount) }
}else{
    const newData = {
        productId:product?._id,
        email:user?.email,
        title:product.title,
        quantity:1,
        image:product.image,
        price:product.price-(product.price * product.discount ) / 100,
        username:user?.name,
    }
    const result =await cartCollection.insertOne(newData)
    return {success:result.acknowledged}
}
    return {success:true}
}


export const getCartData = async ()=>{
    const {user}=  (await getServerSession(authOptions))||{};
    if(!user)return [];
    const query = {email:user?.email};
    const result = await cartCollection.find(query).toArray()
    return result;

}

export const deleteCartItem = async(id)=>{
    const {user}=  (await getServerSession(authOptions))||{};
    if(!user)return {success:false}
    if(id?.length !=24){
        return {success:false}
    }
    const query = {_id:new ObjectId(id)}

    const result = await cartCollection.deleteOne(query)
    return {success:Boolean(result.deletedCount)}

}