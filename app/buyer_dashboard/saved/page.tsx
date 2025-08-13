"use client";

import { useState } from "react";
import {
  LayoutGrid,
  FilePlus,
  MessageSquare,
  BarChart2,
  Mail,
  ShoppingCart,
  User as UserIcon,
  Phone,
  Settings,
  LogOut,
  MapPin,
  Heart,
  MessageCircle,
  CheckCircle,
  GridIcon
} from "lucide-react";
import Link from "next/link";

const menuItems = [
  { label: "Dashboard", href: "/buyer_dashboard", icon: CheckCircle },
  { label: "My Purchase", href: "/buyer_dashboard/purchases", icon: GridIcon },
  { label: "Browse product", href: "/buyer_dashboard/product", icon: FilePlus },
  { label: "Saved items", href: "/buyer_dashboard/saved", icon: MessageSquare },
  { label: "Message", href: "/messages", icon: Mail },
  { label: "Profile", href: "/profile", icon: UserIcon },
  { label: "Contact", href: "/contact", icon: Phone },
  { label: "Settings", href: "/settings", icon: Settings },
  { label: "Logout", href: "/logout", icon: LogOut },
];


const products = [
  { name: "Fresh Tomatoes", price: "$3.50/kg", available: "250 kg", farmer: "John Mutesi", location: "Kigali", image: "/tomatoes.jpg" },
  { name: "Organic Carrots", price: "$2.80/kg", available: "180 kg", farmer: "Marie Uwimana", location: "Musanze", image: "/carrots.jpg" },
  { name: "Fresh Spinach", price: "$4.20/kg", available: "95 kg", farmer: "David Nkurunziza", location: "Huye", image: "/spinach.jpg" },
  { name: "Sweet Bananas", price: "$1.90/kg", available: "320 kg", farmer: "Grace Mukamana", location: "Rubavu", image: "/bananas.jpg" },
  { name: "Irish Potatoes", price: "$1.50/kg", available: "500 kg", farmer: "Paul Habimana", location: "Nyabihu", image: "/potatoes.jpg" },
  { name: "Premium Avocados", price: "$5.80/kg", available: "75 kg", farmer: "Alice Nyirazana", location: "Karongi", image: "/avocados.jpg" },
];

export default function Dashboard() {
  const [sortBy, setSortBy] = useState("Newest");

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white border-b h-16 flex items-center px-8 shadow-sm">
        <span className="font-extrabold text-2xl tracking-tight">
          <span className="text-green-700">Umuhinzi</span>
          <span className="text-black">Link</span>
        </span>
      </header>

      <div className="flex flex-1 min-h-0">
         {/* Sidebar */}
        <aside className="w-64 bg-white border-r flex flex-col fixed left-0 top-16 h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="flex-1 px-4 py-6 space-y-2">
            {menuItems.map((item, index) => {
              const isActive = item.label === 'Saved items';
              const Icon = item.icon;
              const showDivider = index === 4 || index === 8; // After Market Analytics and Contact
              return (
                <div key={item.label}>
                  <Link href={item.href} className="block">
                    <div
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all text-sm font-medium
                        ${isActive
                          ? "bg-green-600 text-white shadow-sm"
                          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                    >
                      <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-gray-500"}`} />
                      <span>{item.label}</span>
                    </div>
                  </Link>
                  {showDivider && <div className="border-t border-gray-200 my-2 mx-4"></div>}
                </div>
              );
            })}
          </nav>
        </aside>

        {/* Main content */}
        <div className="flex-1 flex flex-col ml-64 ">
          {/* Sort Bar */}
          <div className="bg-white border-b px-6 py-4 flex justify-end items-center">
            <label className="text-sm text-gray-600 mr-2 ">Sort by:</label>
            <select
              className="border border-gray-300 rounded-lg py-2 px-3 text-sm"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          {/* Products */}
          <main className="flex-1 overflow-auto p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p) => (
                <div key={p.name} className="bg-white rounded-lg shadow-sm border overflow-hidden text-gray-900">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">{p.name}</h3>
                        <p className="text-green-600 font-bold text-sm">{p.price}</p>
                      </div>
                      <button>
                        <Heart className="w-5 h-5 text-red-500" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Available: {p.available}</p>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <UserIcon className="w-4 h-4 mr-1" /> {p.farmer}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-1" /> {p.location}
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <button className="bg-green-600 text-white px-4 py-1 rounded text-sm">
                        Buy Now
                      </button>
                      <button className="border p-2 rounded">
                        <MessageCircle className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
