"use client";
import React, { useState } from "react";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Logo = () => (
  <span className="font-extrabold text-2xl tracking-tight">
    <span className="text-green-700">Umuhinzi</span>
    <span className="text-black">Link</span>
  </span>
);

export default function SignIn() {
  const router = useRouter();
  const [signInMethod, setSignInMethod] = useState("phone");
  const [formData, setFormData] = useState({
    phoneNumber: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);

  const inputClass =
    "w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const redirectToDashboard = (userRole: string) => {
    switch (userRole) {
      case "farmer":
        router.push("/farmer_dashboard");
        break;
      case "supplier":
        router.push("/supplier_dashboard");
        break;
      case "buyer":
        router.push("/buyer_dashboard");
        break;
      default:
        router.push("/farmer_dashboard");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let payload: Record<string, string> = {};
      if (signInMethod === "phone") {
        payload.phoneNumber = formData.phoneNumber;
      } else {
        payload.email = formData.email;
      }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/signin`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        throw new Error("Sign in failed");
      }

      const data = await res.json();

      // Saved token & role
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      if (data.role) {
        localStorage.setItem("userRole", data.role);
        redirectToDashboard(data.role);
      } else {
        redirectToDashboard("farmer");
      }
    } catch (error) {
      console.error("Error signing in:", error);
      alert("Sign in failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Logo />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Welcome Back!
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to your account
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-sm border p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Sign In
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Choose how you want to sign in
              </p>
            </div>

            {/* Method switch */}
            <div className="flex rounded-lg border overflow-hidden">
              <button
                type="button"
                onClick={() => setSignInMethod("phone")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 text-sm font-medium transition-colors cursor-pointer ${
                  signInMethod === "phone"
                    ? "bg-gray-100 text-gray-900 border-r"
                    : "bg-white text-gray-600 hover:bg-gray-50 border-r"
                }`}
              >
                <Phone className="w-4 h-4" />
                Phone
              </button>
              <button
                type="button"
                onClick={() => setSignInMethod("email")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 text-sm font-medium transition-colors cursor-pointer ${
                  signInMethod === "email"
                    ? "bg-gray-100 text-gray-900"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Mail className="w-4 h-4" />
                Email
              </button>
            </div>

            {/* Input fields */}
            {signInMethod === "phone" ? (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className={inputClass}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={inputClass}
                  placeholder="Enter your email address"
                  required
                />
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-3 px-4 rounded-md font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors cursor-pointer"
            >
              {loading
                ? "Signing in..."
                : signInMethod === "phone"
                ? "Send OTP"
                : "Sign In"}
            </button>

            {/* Switch to signup */}
            <div className="text-center">
              <span className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  className="text-green-600 hover:text-green-700 font-medium cursor-pointer"
                >
                  Sign Up
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
