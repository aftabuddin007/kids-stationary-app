import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link href={'/'}className='flex items-center gap-2'>
            <Image alt='logo-kids' src={'/assets/logo.png'} height={40} width={50}>

            </Image>
            <h2 className="text-2xl font-bold text-orange-400">KidsStationary </h2>
        </Link>
    );
};

export default Logo;