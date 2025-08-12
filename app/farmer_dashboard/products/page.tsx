// pages/products.tsx
"use client";

import { usePathname } from 'next/navigation';
import { 
  CheckCircle, LayoutGrid, Heart, MessageSquare, BarChart, Gift, Calendar, 
  ClipboardList, Users, Settings, LogOut, Check, Pencil, Trash2, Box, FilePlus, BarChart2, ShoppingCart, User, Phone, Mail 
} from 'lucide-react';
import Link from 'next/link';

const menuItems = [
  { label: 'Dashboard', href: '/farmer_dashboard', icon: CheckCircle },
  { label: 'My Products', href: '/farmer_dashboard/products', icon: LayoutGrid },
  { label: 'Input Request', href: '/farmer_dashboard/requests', icon: FilePlus },
  { label: 'AI Tips', href: '/farmer_dashboard/ai', icon: MessageSquare },
  { label: 'Market Analytics', href: '/farmer_dashboard/market_analysis', icon: BarChart2 },
  { label: 'Message', href: '/messages', icon: Mail },
  { label: 'Orders', href: '/orders', icon: ShoppingCart },
  { label: 'Profile', href: '/profile', icon: User },
  { label: 'Contact', href: '/contact', icon: Phone },
  { label: 'Settings', href: '/settings', icon: Settings },
  { label: 'Logout', href: '/logout', icon: LogOut },
];

const products = [
  { id: 1, name: 'Fresh Tomatoes', image: '/tomatoes.png', status: 'Available', quantity: '50 kg', price: '$3.00/kg', location: 'Kigali' },
  { id: 2, name: 'Green Beans', image: '/green-beans.png', status: 'Available', quantity: '30 kg', price: '$3.00/kg', location: 'Musanze' },
  { id: 3, name: 'Sweet Corn', image: '/sweet-corns.png', status: 'Sold', quantity: '100 pieces', price: '$0.50/piece', location: 'Huye' },
  { id: 4, name: 'Fresh Carrots', image: '/carrots.png', status: 'Available', quantity: '25 kg', price: '$1.80/kg', location: 'Nyagatare' },
  { id: 5, name: 'Fresh Cabbage', image: '/cabbage.png', status: 'Available', quantity: '40 heads', price: '$1.20/head', location: 'Rubavu' },
  { id: 6, name: 'Irish Potatoes', image: '/potatoes.png', status: 'Available', quantity: '80 kg', price: '$0.80/kg', location: 'Ruhengeri' },
];

export default function Products() {
  const pathname = usePathname();

  const Logo = () => (
    <span className="font-extrabold text-2xl tracking-tight">
      <span className="text-green-700">Umuhinzi</span><span className="text-black">Link</span>
    </span>
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white border-b h-16 flex items-center justify-between px-8 shadow-sm">
        <Logo />
        <button className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2">
          + Add New Produce
        </button>
      </header>

      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r flex flex-col fixed left-0 top-16 h-[calc(100vh-4rem)] overflow-y-auto justify-between shadow-sm min-h-full">
          <div>
            <nav className="mt-4 space-y-2 px-4">
              {menuItems.map((m, index) => {
                const isActive = pathname === m.href;
                const showDivider = index === 4 || index === 8; // After Market Analytics and Contact
                return (
                  <div key={m.label}>
                    <Link href={m.href} className="block">
                      <div
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all text-sm font-medium ${
                          isActive
                            ? 'bg-green-600 text-white shadow-sm'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        <m.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                        <span>{m.label}</span>
                      </div>
                    </Link>
                    {showDivider && <div className="border-t border-gray-200 my-2 mx-4"></div>}
                  </div>
                );
              })}
            </nav>
          </div>

          <div className="border-t border-gray-200 p-6 bg-gray-50 mt-2">
            <Link href="/settings" className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100">
              <Settings className="w-5 h-5 text-gray-900" />
              <span className="text-sm">Settings</span>
            </Link>
            <Link href="/logout" className="flex items-center gap-3 p-2 rounded-md hover:bg-red-50 mt-2">
              <LogOut className="w-5 h-5 text-red-600" />
              <span className="text-sm">Logout</span>
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto ml-64">
          {/* Search and Filters */}
          <div className="flex justify-between items-center mb-6">
            <input
              type="text"
              placeholder="Search your produce..."
              className="w-2/3 bg-white border text-gray-600 border-gray-300 rounded-md py-2 px-4 text-sm shadow-sm"
            />
            <div className="flex gap-4">
              <button className="bg-white border border-gray-300 text-gray-800 rounded-md py-2 px-4 text-sm flex items-center gap-1 shadow-sm">
                All Crops <span className="text-gray-500">▼</span>
              </button>
              <button className="bg-white border border-gray-300 text-gray-800 rounded-md py-2 px-4 text-sm flex items-center gap-1 shadow-sm">
                All Status <span className="text-gray-500">▼</span>
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow overflow-hidden relative">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div
                  className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-semibold shadow ${
                    product.status === 'Available'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-200 text-gray-900'
                  }`}
                >
                  {product.status}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-900 mb-1">
                    Quantity: <span className="font-semibold">{product.quantity}</span>
                  </p>
                  <p className="text-sm text-gray-900 mb-1">
                    Price: <span className="font-semibold">{product.price}</span>
                  </p>
                  <p className="text-sm text-gray-900 mb-4">
                    Location: <span className="font-semibold">{product.location}</span>
                  </p>
                  <div className="flex gap-2">
                    <button className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg text-sm font-semibold flex items-center gap-1 hover:bg-blue-200 transition">
                      <Pencil className="w-4 h-4" /> Edit
                    </button>
                    <button className="bg-green-700 text-white px-4 py-1 rounded-lg text-sm font-semibold flex items-center gap-1 hover:bg-green-800 transition">
                      <Check className="w-4 h-4" /> Sold
                    </button>
                    <button className="bg-red-300 text-red-700 p-2 rounded-lg hover:bg-red-200 transition">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button className="text-gray-600">&lt;</button>
            <button className="bg-green-600 text-white px-3 py-1 rounded-md">1</button>
            <button className="text-gray-600">2</button>
            <button className="text-gray-600">3</button>
            <button className="text-gray-600">&gt;</button>
          </div>
        </main>
      </div>
    </div>
  );
}
