
import { getCartData } from '@/actins/server/cart';
import CartCard from '@/components/Card/CartCard';
import React from 'react';

const CartPage = async() => {
 const cart = await getCartData()
// console.log(cart[0])


    return (
        <div className='max-w-7xl mx-auto'>
           <h2 className="text-3xl font-bold">My Cart</h2> 
            <div className="flex">
                <div className="flex-3">`
            {cart.map((cartItem)=><CartCard key={cartItem._id} cartItem={cartItem}></CartCard>)}


                </div>
                <div className="flex-1"></div>
            </div>
        </div>
    );
};

export default CartPage;