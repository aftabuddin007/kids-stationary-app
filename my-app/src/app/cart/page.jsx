import { getCartData } from '@/actins/server/cart';
import React from 'react';

const CartPage = async() => {
 const cart = await getCartData()
console.log(cart)


    return (
        <div className='text-center'>
            {cart.length}
        </div>
    );
};

export default CartPage;