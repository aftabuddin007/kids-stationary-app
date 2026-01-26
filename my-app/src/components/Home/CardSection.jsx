"use client"

import { useMemo, useState } from "react";
import CartCard from "../Card/CartCard";

const CardSection = ({cartItems=[]}) => {

const [items,setItems] = useState(cartItems)
const totalItems = useMemo(()=>items.reduce((acm ,item)=>acm+item.quantity,0),[items])

const removeItem = (id)=>{
    setItems(prevItems=>prevItems.filter(item=>item._id != id))
}

const updateQuantity=(id,q)=>{
    setItems(prevItems=>prevItems.map(item=>item._id == id ? {...item,quantity:q}:item))
}




    return (
        <div>
            <p className="">{items.length} Items Found</p>
           <div className="flex">
                <div className="flex-3">`
            {items.map((cartItem)=><CartCard key={cartItem._id.toString()} cartItem={{...cartItem,_id:cartItem._id.toString()}} removeItem={removeItem} updateQuantity={updateQuantity}></CartCard>)}


                </div>
                <div className="flex-1 text-center">
                    {totalItems}
                </div>
            </div> 
        </div>
    );
};

export default CardSection;