"use client";

import React, { useState, useEffect } from "react";
import { User } from "lucide-react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

const Logo = () => (
  <span className="font-extrabold text-2xl tracking-tight">
    <span className="text-green-700">Umuhinzi</span>
    <span className="text-black">Link</span>
  </span>
);

export default function BusinessSignUpForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedUserType, setSelectedUserType] = useState("supplier");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    district: "",
    sector: "",
    businessName: "",
    businessType: "",
    agreeToTerms: false,
  });

  useEffect(() => {
    const type = searchParams.get("type");
    if (type === "supplier" || type === "buyer" || type === "farmer") {
      setSelectedUserType(type);
    }
  }, [searchParams]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("userRole", selectedUserType);
    router.push("/signin?from=signup");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        {/* Logo */}
        <div className="flex justify-center">
          <Logo />
        </div>

        {/* Header */}
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create Your Business Account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Sign up as a {selectedUserType}
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <input
              name="firstName"
              type="text"
              required
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
              className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
            <input
              name="lastName"
              type="text"
              required
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
              className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
            <input
              name="phoneNumber"
              type="tel"
              required
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
            <input
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
            <input
              name="district"
              type="text"
              required
              value={formData.district}
              onChange={handleInputChange}
              placeholder="District"
              className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
            <input
              name="sector"
              type="text"
              required
              value={formData.sector}
              onChange={handleInputChange}
              placeholder="Sector"
              className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
            <input
              name="businessName"
              type="text"
              required
              value={formData.businessName}
              onChange={handleInputChange}
              placeholder="Business Name"
              className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
            <input
              name="businessType"
              type="text"
              required
              value={formData.businessType}
              onChange={handleInputChange}
              placeholder="Business Type"
              className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>

          {/* Terms */}
          <div className="flex items-center">
            <input
              name="agreeToTerms"
              type="checkbox"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              required
            />
            <label
              htmlFor="agreeToTerms"
              className="ml-2 block text-sm text-gray-900"
            >
              I agree to the{" "}
              <Link
                href="/terms"
                className="text-green-600 hover:text-green-500"
              >
                terms and conditions
              </Link>
            </label>
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <User className="mr-2 h-5 w-5" />
              Sign Up
            </button>
          </div>
        </form>

        {/* Link to sign in */}
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="font-medium text-green-600 hover:text-green-500"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
