"use client";
import React, { useState } from 'react';
import { User } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Logo = () => (
  <span className="font-extrabold text-2xl tracking-tight">
    <span className="text-green-700">Umuhinzi</span>
    <span className="text-black">Link</span>
  </span>
);

export default function SignUp() {
  const router = useRouter();
  const [selectedUserType, setSelectedUserType] = useState<'farmer' | 'supplier' | 'buyer'>('farmer');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    district: '',
    sector: '',
    businessName: '',
    businessType: '',
    agreeToTerms: false
  });

  const inputClass =
    "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition";

  const handleUserTypeChange = (userType: 'farmer' | 'supplier' | 'buyer') => {
    setSelectedUserType(userType);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, userType: selectedUserType }),
      });
      if (!res.ok) throw new Error(`Error: ${res.status}`);
      const data = await res.json();
      console.log(" Account created:", data);
      localStorage.setItem('userRole', selectedUserType);
      router.push('/signin?from=signup');
    } catch (err) {
      console.error(" Signup failed:", err);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Logo />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Create Your Account</h2>
          <p className="mt-2 text-sm text-gray-600">Create your account and start using our services</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-sm border p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* User type selector */}
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-4">Choose your user type</h4>
              <div className="space-y-3">
                {['farmer', 'supplier', 'buyer'].map((role) => (
                  <label
                    key={role}
                    className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <input
                      type="radio"
                      name="userType"
                      value={role}
                      checked={selectedUserType === role}
                      onChange={() => handleUserTypeChange(role as 'farmer' | 'supplier' | 'buyer')}
                      className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                    />
                    <div className="ml-3 flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                        role === 'farmer' ? 'bg-green-100' :
                        role === 'supplier' ? 'bg-blue-100' : 'bg-purple-100'
                      }`}>
                        <User className={`w-4 h-4 ${
                          role === 'farmer' ? 'text-green-600' :
                          role === 'supplier' ? 'text-blue-600' : 'text-purple-600'
                        }`} />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900 capitalize">{role}</div>
                        <div className="text-xs text-gray-500">
                          {role === 'farmer' && "Sell products, request loans, get advice"}
                          {role === 'supplier' && "Sell agricultural inputs"}
                          {role === 'buyer' && "Buy products from farmers"}
                        </div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Personal Info */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className={inputClass} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className={inputClass} required />
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} className={inputClass} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} className={inputClass} required />
              </div>
            </div>

            {/* Address */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">District *</label>
                <input type="text" name="district" value={formData.district} onChange={handleInputChange} className={inputClass} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sector *</label>
                <input type="text" name="sector" value={formData.sector} onChange={handleInputChange} className={inputClass} required />
              </div>
            </div>

            {/* Business Info */}
            {(selectedUserType === 'supplier' || selectedUserType === 'buyer') && (
              <div className="pt-4 border-t border-gray-200">
                <h4 className="text-sm font-medium text-gray-900 mb-4">Business Information</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Business Name *</label>
                    <input type="text" name="businessName" value={formData.businessName} onChange={handleInputChange} className={inputClass} required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Business Type *</label>
                    <input type="text" name="businessType" value={formData.businessType} onChange={handleInputChange} className={inputClass} required />
                  </div>
                </div>
              </div>
            )}

            {/* Terms */}
            <div className="flex items-start">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500 mt-0.5"
                required
              />
              <label className="ml-2 text-sm text-gray-600">
                I agree to the{' '}
                <Link href="/terms" className="text-green-600 hover:text-green-700">terms and conditions</Link>{' '}
                and{' '}
                <Link href="/privacy" className="text-green-600 hover:text-green-700">privacy policy</Link>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 px-4 rounded-md font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition"
            >
              Sign Up
            </button>

            <div className="text-center">
              <span className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link href="/signin" className="text-green-600 hover:text-green-700 font-medium">Sign In</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
