"use client";
import React from 'react';
import { 
  CheckCircle, LayoutGrid, Heart, MessageSquare, BarChart2, Mail, 
  ShoppingCart, User, Phone, Settings, LogOut, ShoppingBag, 
  Clock, Package, Eye, Star, TrendingUp
} from 'lucide-react';
import Link from 'next/link';

const Logo = () => (
  <span className="font-extrabold text-2xl tracking-tight">
    <span className="text-green-700">Umuhinzi</span><span className="text-black">Link</span>
  </span>
);

const menuItems = [
  { label: 'Dashboard', href: '/buyer_dashboard', icon: CheckCircle },
  { label: 'My Products', href: '/buyer_dashboard/products', icon: LayoutGrid },
  { label: 'Input Request', href: '/buyer_dashboard/requests', icon: Heart },
  { label: 'AI Tips', href: '/buyer_dashboard/ai', icon: MessageSquare },
  { label: 'Market Analytics', href: '/buyer_dashboard/market_analysis', icon: BarChart2 },
  { label: 'Message', href: '/messages', icon: Mail },
  { label: 'Orders', href: '/buyer_dashboard/orders', icon: ShoppingCart },
  { label: 'Profile', href: '/profile', icon: User },
  { label: 'Contact', href: '/contact', icon: Phone },
  { label: 'Settings', href: '/settings', icon: Settings },
  { label: 'Logout', href: '/logout', icon: LogOut },
];

export default function BuyerDashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white border-b h-16 flex items-center px-8 shadow-sm">
        <Logo />
      </header>
      
      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r flex flex-col fixed left-0 top-16 h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="flex-1 px-4 py-6 space-y-2">
            {menuItems.map((item, index) => {
              const isActive = item.label === 'Dashboard';
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

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto ml-64">
          {/* Welcome Banner */}
          <div className="bg-green-600 text-white p-6 rounded-lg mb-6">
            <h1 className="text-2xl font-bold mb-2">Welcome back, Buyer Chance!</h1>
            <p className="text-green-100">Manage your agricultural inputs and connect with farmers across Rwanda</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Total Purchases</p>
                  <h2 className="text-2xl font-bold text-gray-900">247</h2>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Active Orders</p>
                  <h2 className="text-2xl font-bold text-gray-900">12</h2>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Pending Offers</p>
                  <h2 className="text-2xl font-bold text-gray-900">8</h2>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Saved Items</p>
                  <h2 className="text-2xl font-bold text-gray-900">34</h2>
                </div>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-red-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Market Trends Chart */}
          <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Market Trends</h3>
              <TrendingUp className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {/* Chart bars */}
              <div className="flex items-end justify-between h-32 border-b border-gray-100 pb-2">
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex space-x-1">
                    <div className="w-4 bg-teal-500 rounded-t" style={{height: '60px'}}></div>
                    <div className="w-4 bg-teal-400 rounded-t" style={{height: '50px'}}></div>
                  </div>
                  <span className="text-xs text-gray-600">Monday</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex space-x-1">
                    <div className="w-4 bg-teal-500 rounded-t" style={{height: '80px'}}></div>
                    <div className="w-4 bg-teal-400 rounded-t" style={{height: '70px'}}></div>
                  </div>
                  <span className="text-xs text-gray-600">Tuesday</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex space-x-1">
                    <div className="w-4 bg-teal-500 rounded-t" style={{height: '100px'}}></div>
                    <div className="w-4 bg-teal-400 rounded-t" style={{height: '40px'}}></div>
                  </div>
                  <span className="text-xs text-gray-600">Wednesday</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex space-x-1">
                    <div className="w-4 bg-teal-500 rounded-t" style={{height: '90px'}}></div>
                    <div className="w-4 bg-teal-400 rounded-t" style={{height: '60px'}}></div>
                  </div>
                  <span className="text-xs text-gray-600">Thursday</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex space-x-1">
                    <div className="w-4 bg-teal-500 rounded-t" style={{height: '70px'}}></div>
                    <div className="w-4 bg-teal-400 rounded-t" style={{height: '65px'}}></div>
                  </div>
                  <span className="text-xs text-gray-600">Friday</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex space-x-1">
                    <div className="w-4 bg-teal-500 rounded-t" style={{height: '85px'}}></div>
                    <div className="w-4 bg-teal-400 rounded-t" style={{height: '75px'}}></div>
                  </div>
                  <span className="text-xs text-gray-600">Saturday</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex space-x-1">
                    <div className="w-4 bg-teal-500 rounded-t" style={{height: '95px'}}></div>
                    <div className="w-4 bg-teal-400 rounded-t" style={{height: '80px'}}></div>
                  </div>
                  <span className="text-xs text-gray-600">Sunday</span>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-teal-500 rounded"></div>
                  <span className="text-gray-600">Online Sales</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-teal-400 rounded"></div>
                  <span className="text-gray-600">Offline Sales</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Produce */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Recommended Produce</h3>
              <Link href="/buyer_dashboard/products" className="text-green-600 text-sm hover:text-green-700">View All</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Premium Maize */}
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                  <div className="text-6xl">🌽</div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Premium Maize</h4>
                  <p className="text-sm text-gray-600 mb-2">by Jean Baptiste</p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold text-gray-900">500 RWF/kg</span>
                    <span className="text-sm text-gray-500">50kg available</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-green-700 transition-colors">
                      Contact
                    </button>
                    <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                      <Star className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Organic Beans */}
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <div className="text-6xl">🫘</div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Organic Beans</h4>
                  <p className="text-sm text-gray-600 mb-2">by Marie Claire</p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold text-gray-900">800 RWF/kg</span>
                    <span className="text-sm text-gray-500">30kg available</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-green-700 transition-colors">
                      Contact
                    </button>
                    <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                      <Star className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Irish Potatoes */}
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                  <div className="text-6xl">🥔</div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Irish Potatoes</h4>
                  <p className="text-sm text-gray-600 mb-2">by Patrick Nzeyimana</p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold text-gray-900">350 RWF/kg</span>
                    <span className="text-sm text-gray-500">100kg available</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-green-700 transition-colors">
                      Contact
                    </button>
                    <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                      <Star className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
              <Link href="/buyer_dashboard/orders" className="text-green-600 text-sm hover:text-green-700">View All</Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Order ID</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Product</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Farmer</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Amount</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-gray-900">#ORD-001</td>
                    <td className="py-4 px-4 text-gray-900">Maize (25kg)</td>
                    <td className="py-4 px-4 text-gray-900">Jean Baptiste</td>
                    <td className="py-4 px-4 text-gray-900">12,500 RWF</td>
                    <td className="py-4 px-4">
                      <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-medium">Pending</span>
                    </td>
                    <td className="py-4 px-4">
                      <button className="text-green-600 hover:text-green-700 text-sm font-medium">View</button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-gray-900">#ORD-002</td>
                    <td className="py-4 px-4 text-gray-900">Beans (15kg)</td>
                    <td className="py-4 px-4 text-gray-900">Marie Claire</td>
                    <td className="py-4 px-4 text-gray-900">7,500 RWF</td>
                    <td className="py-4 px-4">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">Delivered</span>
                    </td>
                    <td className="py-4 px-4">
                      <button className="text-green-600 hover:text-green-700 text-sm font-medium">View</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium text-gray-900">#ORD-003</td>
                    <td className="py-4 px-4 text-gray-900">Potatoes (40kg)</td>
                    <td className="py-4 px-4 text-gray-900">Patrick Nzeyimana</td>
                    <td className="py-4 px-4 text-gray-900">16,000 RWF</td>
                    <td className="py-4 px-4">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">In Transit</span>
                    </td>
                    <td className="py-4 px-4">
                      <button className="text-green-600 hover:text-green-700 text-sm font-medium">Track</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
            <p>Contact Support: SMS Help: +250 123 456 789 &nbsp;&nbsp;&nbsp;&nbsp; © 2024 UmuhinziLink. All rights reserved.</p>
          </div>
        </main>
      </div>
    </div>
  );
}