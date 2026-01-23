"use client"

import { handleCart } from '@/actins/server/cart';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { toast } from 'react-toastify';

const CartButton = ({product}) => {
const session = useSession()
 const router = useRouter()
 const path = usePathname()
 const isLogin  = session?.status === "authenticated"
 const add2Cart = async ()=>{
    if(isLogin)
    {
       const result = await handleCart({product,inc:true})
       if(result.success){
        toast.success("product added successfully")
       }
    }
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