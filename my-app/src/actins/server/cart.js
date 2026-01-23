"use server"

import { authOptions } from "@/lib/authOptions"
import { getServerSession } from "next-auth"

const { dbConnect, collections } = require("@/lib/dbConnect")

const cartCollection = dbConnect(collections.CART)
export const handleCart = async({product,inc = true})=>{
    const user = await getServerSession(authOptions) || {}
    if(!user)return {success:false}

// getcart item
const query = {email:user?.email, productId:product?._id}
const isAdded = await cartCollection.findOne(query)
if(isAdded){

}else{
    
}
    return {success:true}
}