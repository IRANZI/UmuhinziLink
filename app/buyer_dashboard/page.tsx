"use client";

import React from "react";
import {
  CheckCircle,
  Heart,
  Mail,
  ShoppingCart,
  User,
  Phone,
  Settings,
  LogOut,
  Package,
  Clock,
  LayoutGrid,
  FilePlus,
} from "lucide-react";
import Link from "next/link";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const menuItems = [
  { label: "Dashboard", href: "/buyer_dashboard", icon: CheckCircle },
  { label: "My Purchase", href: "/buyer_dashboard/purchases", icon: LayoutGrid },
  { label: "Browse Product", href: "/buyer_dashboard/product", icon: FilePlus },
  { label: "Saved Items", href: "/buyer_dashboard/saved", icon: Heart },
  { label: "Message", href: "/messages", icon: Mail },
  { label: "Profile", href: "/profile", icon: User },
  { label: "Contact", href: "/contact", icon: Phone },
  { label: "Settings", href: "/settings", icon: Settings },
  { label: "Logout", href: "/logout", icon: LogOut },
];

const stats = [
  { title: "Total Purchases", value: 247, icon: ShoppingCart, color: "bg-green-100 text-green-700" },
  { title: "Active Orders", value: 12, icon: Package, color: "bg-blue-100 text-blue-700" },
  { title: "Pending Offers", value: 8, icon: Clock, color: "bg-yellow-100 text-yellow-700" },
  { title: "Saved Items", value: 34, icon: Heart, color: "bg-red-100 text-red-700" },
];

const produce = [
  { name: "Premium Maize", price: "500 RWF/kg", available: "50kg available", farmer: "Jean Baptiste", image: "/maize.png" },
  { name: "Organic Beans", price: "800 RWF/kg", available: "30kg available", farmer: "Marie Claire", image: "/green-beans.png" },
  { name: "Irish Potatoes", price: "350 RWF/kg", available: "100kg available", farmer: "Patrick Ndayimana", image: "/potatoes.png" },
];

const orders = [
  { id: "#ORD-001", product: "Maize (25kg)", farmer: "Jean Baptiste", amount: "12,500 RWF", status: "Pending" },
  { id: "#ORD-002", product: "Beans (15kg)", farmer: "Marie Claire", amount: "12,000 RWF", status: "Delivered" },
  { id: "#ORD-003", product: "Potatoes (40kg)", farmer: "Patrick Ndahimana", amount: "14,000 RWF", status: "In Transit" },
];

const Logo = () => (
  <span className="font-extrabold text-2xl tracking-tight">
    <span className="text-green-700">Umuhinzi</span>
    <span className="text-black">Link</span>
  </span>
);

export default function BuyerDashboard() {
  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      { label: "Online Sales", data: [20, 25, 22, 18, 24, 30, 28], backgroundColor: "#3b82f6" },
      { label: "Offline Sales", data: [15, 18, 20, 14, 19, 24, 21], backgroundColor: "#10b981" },
    ],
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header above everything */}
      <header className="sticky top-0 z-30 bg-white border-b h-16 flex items-center px-8 shadow-sm">
        <Logo />
      </header>

      {/* Sidebar + Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r flex flex-col">
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {menuItems.map((item, index) => {
              const isActive = item.label === "Dashboard";
              const Icon = item.icon;
              const showDivider = index === 4 || index === 8;
              return (
                <div key={item.label}>
                  <Link href={item.href} className="block">
                    <div
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all text-sm font-medium
                        ${
                          isActive
                            ? "bg-green-600 text-white shadow-sm"
                            : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${
                          isActive ? "text-white" : "text-gray-500"
                        }`}
                      />
                      <span>{item.label}</span>
                    </div>
                  </Link>
                  {showDivider && <div className="border-t border-gray-200 my-2 mx-4"></div>}
                </div>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {/* Green Welcome Bar */}
        <div className="bg-green-600 rounded-2xl mt-0 text-white px-6 py-8 shadow-sm mb-4">
          <h1 className="text-lg font-semibold mb-2">Welcome back, Buyer Chance!</h1>
          <p className="text-sm opacity-90">
            Manage your agricultural purchases and connect with farmers across Rwanda
          </p>
        </div>
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.title} className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4">
                  <div className={`p-3 rounded-full ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">{stat.title}</p>
                    <p className="text-lg font-bold text-gray-800">{stat.value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Chart */}
          <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
            <h2 className="font-semibold mb-4 text-gray-600">Market Trends</h2>
            <div className="h-64">
              <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>

          {/* Recommended Produce */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-gray-600">Recommended Produce</h2>
              <a href="#" className="text-green-600 text-sm">View All</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {produce.map((item) => (
                <div key={item.name} className="bg-white rounded-lg shadow-sm border overflow-hidden">
                  <img src={item.image} alt={item.name} className="h-40 w-full object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">by {item.farmer}</p>
                    <p className="text-green-600 font-bold">{item.price} <span className="text-sm font-medium text-gray-500 ml-64"> {item.available}</span></p>
                    <p ></p>
                    
                    <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                      Contact
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-gray-600" >Recent Orders</h2>
              <a href="#" className="text-green-600 text-sm">View All</a>
            </div>
            <table className="w-full text-sm text-gray-600">
              <thead>
                <tr className="border-b">
                  <th className="py-2 text-left">Order ID</th>
                  <th className="py-2 text-left">Product</th>
                  <th className="py-2 text-left">Farmer</th>
                  <th className="py-2 text-left">Amount</th>
                  <th className="py-2 text-left">Status</th>
                  <th className="py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b">
                    <td className="py-2">{order.id}</td>
                    <td className="py-2">{order.product}</td>
                    <td className="py-2">{order.farmer}</td>
                    <td className="py-2">{order.amount}</td>
                    <td className="py-2">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          order.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : order.status === "Delivered"
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-2 text-green-600 cursor-pointer">View</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <footer className="text-xs text-gray-500 mt-6">
            Contact Support: SMS Habla - +250 123 456 789
            <span className="float-right">
              © 2024 UmuhinziLink, All rights reserved.
            </span>
          </footer>
        </main>
      </div>
    </div>
  );
}
