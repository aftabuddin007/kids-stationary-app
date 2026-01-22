"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUser, FaArrowRight, FaMapMarkerAlt, FaCity, FaMapPin } from 'react-icons/fa';
import { postUser } from '@/actins/server/auth';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
    const router = useRouter()
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postcode: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
    // console.log("Registration Data:", formData);
    const result = await postUser(formData)
    if(result.acknowledged){
        alert("success")
        router.push('/login')

    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 py-12">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden relative z-10">
        
        {/* Header */}
        <div className="bg-primary p-8 text-center text-white">
          <h1 className="text-3xl font-bold tracking-tight">Join Kids Stationary</h1>
          <p className="text-primary-content/80 text-sm mt-2">Create your account for faster checkout!</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          
          {/* Section 1: Basic Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest border-b pb-2">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label"><span className="label-text font-bold">Full Name</span></label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-4 text-slate-400" />
                  <input type="text" placeholder="John Doe" className="input input-bordered w-full pl-11 rounded-xl bg-slate-50" required 
                    onChange={(e) => setFormData({...formData, name: e.target.value})} />
                </div>
              </div>
              <div className="form-control">
                <label className="label"><span className="label-text font-bold">Email Address</span></label>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-4 text-slate-400" />
                  <input type="email" placeholder="john@example.com" className="input input-bordered w-full pl-11 rounded-xl bg-slate-50" required 
                    onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Address Details */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest border-b pb-2">Shipping Address</h3>
            <div className="form-control">
              <label className="label"><span className="label-text font-bold">Street Address</span></label>
              <div className="relative">
                <FaMapMarkerAlt className="absolute left-4 top-4 text-slate-400" />
                <input type="text" placeholder="House no, Road no, Area..." className="input input-bordered w-full pl-11 rounded-xl bg-slate-50" required 
                  onChange={(e) => setFormData({...formData, address: e.target.value})} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label"><span className="label-text font-bold">City</span></label>
                <div className="relative">
                  <FaCity className="absolute left-4 top-4 text-slate-400" />
                  <input type="text" placeholder="Dhaka" className="input input-bordered w-full pl-11 rounded-xl bg-slate-50" required 
                    onChange={(e) => setFormData({...formData, city: e.target.value})} />
                </div>
              </div>
              <div className="form-control">
                <label className="label"><span className="label-text font-bold">Postcode</span></label>
                <div className="relative">
                  <FaMapPin className="absolute left-4 top-4 text-slate-400" />
                  <input type="text" placeholder="1212" className="input input-bordered w-full pl-11 rounded-xl bg-slate-50" required 
                    onChange={(e) => setFormData({...formData, postcode: e.target.value})} />
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Password */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest border-b pb-2">Security</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control relative">
                <label className="label"><span className="label-text font-bold">Password</span></label>
                <FaLock className="absolute left-4 bottom-4 text-slate-400" />
                <input type={showPassword ? "text" : "password"} placeholder="••••••••" className="input input-bordered w-full pl-11 rounded-xl bg-slate-50" required 
                  onChange={(e) => setFormData({...formData, password: e.target.value})} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 bottom-4 text-slate-400">
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className="form-control relative">
                <label className="label"><span className="label-text font-bold">Confirm Password</span></label>
                <FaLock className="absolute left-4 bottom-4 text-slate-400" />
                <input type={showPassword ? "text" : "password"} placeholder="••••••••" className="input input-bordered w-full pl-11 rounded-xl bg-slate-50" required 
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} />
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-full rounded-xl text-white font-bold text-lg gap-2 mt-4 shadow-lg hover:scale-[1.01] transition-all">
            Create My Account <FaArrowRight />
          </button>

          <p className="text-center text-sm text-slate-500">
            Already have an account? <Link href="/login" className="text-primary font-bold hover:underline">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}