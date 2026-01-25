"use client"

import { useState } from "react";
import CartCard from "../Card/CartCard";

const CardSection = ({cartItem=[]}) => {

const [items,setItems] = useState(cartItem)


    return (
        <div>
            <p className="">{items.length}Items Found</p>
           <div className="flex">
                <div className="flex-3">`
            {items.map((cartItem)=><CartCard key={cartItem._id} cartItem={cartItem}></CartCard>)}


                </div>
                <div className="flex-1"></div>
            </div> 
        </div>
    );
};

export default CardSection;