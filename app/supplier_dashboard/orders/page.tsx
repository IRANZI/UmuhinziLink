"use client";
import React from 'react';
import { 
  CheckCircle, LayoutGrid, FilePlus, MessageSquare, BarChart2, ShoppingCart, 
  User, Phone, Settings, LogOut, Mail, 
  DollarSign, Eye, Truck, X, Check,Plus,Clock,CheckCircle2,Search,MoreHorizontal
} from 'lucide-react';
import Link from 'next/link';

const Logo = () => (
  <span className="font-extrabold text-2xl tracking-tight">
    <span className="text-green-700">Umuhinzi</span><span className="text-black">Link</span>
  </span>
);

const menuItems = [
  { label: 'Dashboard', href: '/supplier_dashboard', icon: CheckCircle },
  { label: 'My Inputs', href: '/supplier_dashboard/products', icon: LayoutGrid },
  { label: 'Farmer Request', href: '/supplier_dashboard/requests', icon: FilePlus },
  { label: 'Orders', href: '/supplier_dashboard/orders',icon: ShoppingCart },
  { label: 'Message', href: '/messages', icon: Mail },
  { label: 'Profile', href: '/profile', icon: User },
  { label: 'Contact', href: '/contact', icon: Phone },
  { label: 'Settings', href: '/settings', icon: Settings },
  { label: 'Logout', href: '/logout', icon: LogOut },
];



export default function OrdersPage() {
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
              const isActive = item.label === 'Orders';
              const Icon = item.icon;
              const showDivider = index === 3 || index === 8; 
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
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Orders</h1>
              <p className="text-gray-600">Manage your order requests for seeds, fertilizers, and other inputs</p>
            </div>
            <button className="bg-green-600 text-white cursor-pointer font-medium py-2.5 px-4 rounded-lg flex items-center gap-2 hover:bg-green-700 transition-colors">
              <Plus className="w-4 h-4" />
              New Order
            </button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Pending Orders</p>
                  <h2 className="text-2xl font-bold text-gray-900">42</h2>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Truck className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">In Progress</p>
                  <h2 className="text-2xl font-bold text-gray-900">28</h2>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Completed</p>
                  <h2 className="text-2xl font-bold text-gray-900">178</h2>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Total Revenue</p>
                  <h2 className="text-2xl font-bold text-gray-900">$24,580</h2>
                </div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex justify-between items-center mb-6 gap-4">
            <div className="flex gap-2">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium">All</button>
              <button className="text-gray-600 px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">Pending</button>
              <button className="text-gray-600 px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">In Progress</button>
              <button className="text-gray-600 px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">Completed</button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search by Order ID or Customer Name"
                className="bg-white border border-gray-300 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-80"
              />
            </div>
          </div>

          {/* Order */}
          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Order ID</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Product</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Customer</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Quantity</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Order Date</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-gray-900">#ORD-2024-001</td>
                    <td className="py-4 px-4 text-gray-900">Organic Tomatoes</td>
                    <td className="py-4 px-4 text-gray-900">Sarah Johnson</td>
                    <td className="py-4 px-4 text-gray-900">50 kg</td>
                    <td className="py-4 px-4 text-gray-900">Jan 15, 2024</td>
                    <td className="py-4 px-4">
                      <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-medium">Pending</span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex gap-2">
                        <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-green-600 hover:bg-green-50 rounded-md transition-colors">
                          <CheckCircle className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-gray-600 hover:bg-gray-50 rounded-md transition-colors">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-gray-900">#ORD-2024-002</td>
                    <td className="py-4 px-4 text-gray-900">Fresh Lettuce</td>
                    <td className="py-4 px-4 text-gray-900">Mike Chen</td>
                    <td className="py-4 px-4 text-gray-900">25 kg</td>
                    <td className="py-4 px-4 text-gray-900">Jan 14, 2024</td>
                    <td className="py-4 px-4">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">In Progress</span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex gap-2">
                        <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-green-600 hover:bg-green-50 rounded-md transition-colors">
                          <CheckCircle className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-gray-600 hover:bg-gray-50 rounded-md transition-colors">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium text-gray-900">#ORD-2024-003</td>
                    <td className="py-4 px-4 text-gray-900">Bell Peppers</td>
                    <td className="py-4 px-4 text-gray-900">Emma Davis</td>
                    <td className="py-4 px-4 text-gray-900">30 kg</td>
                    <td className="py-4 px-4 text-gray-900">Jan 13, 2024</td>
                    <td className="py-4 px-4">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">Completed</span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex gap-2">
                        <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-md  cursor-pointer transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-green-600 hover:bg-green-50 cursor-pointer rounded-md transition-colors">
                          <CheckCircle className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-gray-600 hover:bg-gray-50 cursor-pointer rounded-md transition-colors">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-between cursor-pointer items-center mt-6">
            <p className="text-sm text-gray-600">Showing 1 to 10 of 249 results</p>
            <div className="flex items-center gap-2">
              <button className="p-2 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors">
                &lt;
              </button>
              <button className="bg-green-600 text-white px-3 py-2 cursor-pointer rounded-md text-sm font-medium">1</button>
              <button className="px-3 py-2 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors text-sm">2</button>
              <button className="px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors  cursor-pointer text-sm">3</button>
              <button className="p-2 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors">
                &gt;
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
