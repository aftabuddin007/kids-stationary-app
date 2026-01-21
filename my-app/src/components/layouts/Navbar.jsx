"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import Logo from './Logo';
import { TbLogin2 } from "react-icons/tb";
import { FaCartPlus } from "react-icons/fa";


const Navbar = () => {
const pathname = usePathname();

 const navLinkClass = (path) =>
    pathname === path
      ? 'text-[#f5bf42] underline font-bold'
      : 'hover:text-[#f5bf42] hover:underline';



    return (
        <div>
             <div className="bg-base-100">
     <div className="navbar   max-w-7xl mx-auto">
      {/* Left */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            <li>
              <Link href="/" className={navLinkClass('/')}>Home</Link>
            </li>
            <li>
              <Link href="/products" className={navLinkClass('/products')}>
                Products
              </Link>
            </li>
            <li>
              <Link href="/blog" className={navLinkClass('/products')}>
                Blog
              </Link>
            </li>
            
             <li>
              <Link href="/contact" className={navLinkClass('/addProduct')}>
               Contact
              </Link>
            </li>

           
          </ul>
        </div>

        <Logo></Logo>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/" className={navLinkClass('/')}>Home</Link>
          </li>
          <li>
            <Link href="/products" className={navLinkClass('/products')}>
              Products
            </Link>
          </li>
          <li>
            <Link href="/blog" className={navLinkClass('/products')}>
              Blog
            </Link>
          </li>
          
             <li>
              <Link href="/contact" className={navLinkClass('/addProduct')}>
               Contact
              </Link>
            </li>

           
        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end flex gap-4">
        <Link href={'/cart'} className='btn'><FaCartPlus />   </Link>
      <Link href={'/login'}  className="btn btn-primary btn-outline"><TbLogin2 /> Login</Link>
       
      </div>
    </div>
   </div>
        </div>
    );
};

export default Navbar;