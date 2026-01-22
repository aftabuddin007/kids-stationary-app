import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';import { TbLogin2 } from "react-icons/tb";


const AuthButton = () => {
const session = useSession();




    return (
        <div>
            {session.status == "authenticated"?<>
            <button onClick={()=>signOut()} className="btn btn-primary">Logout</button>
            </>:<>
            <Link href={'/login'}  className="btn btn-primary btn-outline"><TbLogin2 /> Login</Link>
            </>}

             
        </div>
    );
};

export default AuthButton;