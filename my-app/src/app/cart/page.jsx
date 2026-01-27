
import { getCartData } from '@/actins/server/cart';
import CartCard from '@/components/Card/CartCard';
import CardSection from '@/components/Home/CardSection';
import React from 'react';

const CartPage = async() => {
 const cartItems = await getCartData()
 const formattedItems = cartItems.map(item=>({...item 
    ,_id:item._id.toString()}))
// console.log(formattedItems)


    return (
        <div className='max-w-7xl mx-auto'>
           <h2 className="text-3xl font-bold">My Cart</h2> 
            <CardSection  cartItems={formattedItems}></CardSection>
        </div>
    );
};

export default CartPage;