"use client"

import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartButton = ({product}) => {
 const isLogin = false
 const router = useRouter()
 const path = usePathname()
 const add2Cart = ()=>{
    if(isLogin)
        alert(product._id)
    else{

            router.push(`/login?callbackUrl=${path}`)
        }
    }


    return (
        <div>
            <button onClick={add2Cart} className="btn btn-warning btn-lg gap-2 text-slate-900 font-bold border-none hover:bg-yellow-900">
                            <FaShoppingCart className="text-xl" /> Add to Cart
                          </button>
        </div>
    );
};

export default CartButton;