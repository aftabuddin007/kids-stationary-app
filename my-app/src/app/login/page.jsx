"use client";
import { signIn } from "next-auth/react"
import React, { useState } from 'react';
import Link from 'next/link';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUser, FaArrowRight } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc'; // Import Google Icon
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
    // console.log("Login Attempt:", formData);
    try{
 const result = await signIn("credentials",{email:formData.email,
      password:formData.password,
      name:formData.name,
      redirect:false})
    
    if(result?.ok) {
router.push('/')
  alert("Login successful");

    }
   
  
} catch(error) {
  console.log(error);
}
  };

  const handleGoogleSignIn = () => {
    console.log("Redirecting to Google Auth...");
    // Logic for Firebase or NextAuth Google provider goes here
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      {/* Playful Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-pink-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>

      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden relative z-10">
        {/* Top Header */}
        <div className="bg-primary p-8 text-center text-white">
          <h1 className="text-3xl font-bold tracking-tight text-white">Welcome Back!</h1>
          <p className="text-primary-content/80 text-sm mt-2">Log in to your Kids Stationary account</p>
        </div>

        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold text-slate-700">Full Name</span>
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaUser className="text-slate-400 group-focus-within:text-primary transition-colors" />
                </div>
                <input 
                  type="text" 
                  placeholder="Type your name" 
                  className="input input-bordered w-full pl-11 rounded-xl bg-slate-50 focus:bg-white border-slate-200 transition-all focus:outline-primary"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold text-slate-700">Email Address</span>
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaEnvelope className="text-slate-400 group-focus-within:text-primary transition-colors" />
                </div>
                <input 
                  type="email" 
                  placeholder="example@mail.com" 
                  className="input input-bordered w-full pl-11 rounded-xl bg-slate-50 focus:bg-white border-slate-200 transition-all focus:outline-primary"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="form-control w-full">
              <div className="flex justify-between items-center">
                <label className="label">
                  <span className="label-text font-bold text-slate-700">Password</span>
                </label>
                <Link href="/forgot-password" size="xs" className="text-xs font-bold text-orange-600 hover:underline">
                  Forgot Password?
                </Link>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaLock className="text-slate-400 group-focus-within:text-primary transition-colors" />
                </div>
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••" 
                  className="input input-bordered w-full pl-11 pr-11 rounded-xl bg-slate-50 focus:bg-white border-slate-200 transition-all focus:outline-primary"
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-primary transition-colors"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button type="submit" className="btn btn-primary w-full rounded-xl text-white font-bold text-lg gap-2 shadow-lg shadow-primary/20 hover:scale-[1.01] active:scale-[0.98] transition-all">
              Login <FaArrowRight className="text-sm" />
            </button>
          </form>

          {/* Divider */}
          <div className="divider text-slate-400 text-xs my-6 uppercase font-bold tracking-widest">OR CONTINUE WITH</div>

          {/* Google Button */}
          <button 
            type="button"
            onClick={handleGoogleSignIn}
            className="btn btn-outline w-full rounded-xl border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-600 font-bold gap-3 transition-all flex items-center justify-center shadow-sm"
          >
            <FcGoogle className="text-2xl" />
            Login with Google
          </button>

          {/* Sign Up Link */}
          <div className="text-center mt-8">
            <p className="text-slate-500 text-sm">
              Don't have an account? {' '}
              <Link href="/register" className="text-primary font-bold hover:underline">
                Sign Up Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}