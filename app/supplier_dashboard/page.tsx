import React from 'react';
import { 
  CheckCircle, LayoutGrid, FilePlus, MessageSquare, BarChart2, ShoppingCart, 
  User, Phone, Settings, LogOut, Mail, TrendingDown, Users, Package, TrendingUp,  
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


export default function Dashboard() {
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
          {/* Welcome banner */}
          <div className="bg-green-600 text-white p-6 rounded-lg mb-6">
            <h1 className="text-2xl font-bold mb-2">Welcome back, Agri Supply Co.!</h1>
            <p className="text-green-100">Manage your agricultural inputs and connect with farmers across Rwanda</p>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Listed Inputs</p>
                  <h2 className="text-2xl font-bold text-gray-900">42</h2>
                  <p className="text-green-600 text-sm font-medium">+5 this week</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Farmer Requests</p>
                  <h2 className="text-2xl font-bold text-gray-900">18</h2>
                  <p className="text-orange-600 text-sm font-medium">8 pending</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Active Orders</p>
                  <h2 className="text-2xl font-bold text-gray-900">12</h2>
                  <p className="text-blue-600 text-sm font-medium">4 shipping</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Total Earnings</p>
                  <h2 className="text-2xl font-bold text-gray-900">$25.4</h2>
                  <p className="text-green-600 text-sm font-medium">+12% this month</p>
                </div>
              </div>
            </div>
          </div>

          {/* New Farmer Requests */}
          <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-900">New Farmer Requests</h2>
              <button className="text-green-600 text-sm font-medium hover:text-green-700 cursor-pointer">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Farmer</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Item Requested</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Quantity</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Type</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                          MU
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Marie Uwimana</p>
                          <p className="text-xs text-gray-500">Kigali, Rwanda</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-900">NPK Fertilizer 25kg</td>
                    <td className="py-4 px-4 text-gray-900">5 bags</td>
                    <td className="py-4 px-4">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">Credit</span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex gap-2">
                        <button className="bg-green-100 text-green-700 px-3 py-1 rounded-md text-xs font-medium hover:bg-green-200 cursor-pointer">
                          Approve
                        </button>
                        <button className="bg-red-100 text-red-700 px-3 py-1 rounded-md text-xs font-medium hover:bg-red-200 cursor-pointer">
                          Decline
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                          JB
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Jean Baptiste</p>
                          <p className="text-xs text-gray-500">Musanze, Rwanda</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-900">Maize Seeds 10kg</td>
                    <td className="py-4 px-4 text-gray-900">3 bags</td>
                    <td className="py-4 px-4">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">Purchase</span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex gap-2">
                        <button className="bg-green-100 text-green-700 px-3 py-1 rounded-md text-xs font-medium hover:bg-green-200">
                          Approve
                        </button>
                        <button className="bg-red-100 text-red-700 px-3 py-1 rounded-md text-xs font-medium hover:bg-red-200">
                          Decline
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Inventory and Orders  */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Inventory Status */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-900">Inventory Status</h2>
                <button className="text-green-600 text-sm font-medium hover:text-green-700 cursor-pointer">+ Add Product</button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-green-600 rounded"></div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">NPK Fertilizer</p>
                      <p className="text-xs text-gray-500">25kg bags</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">45 units</p>
                    <p className="text-xs text-green-600 font-medium">In Stock</p>
                  </div>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-yellow-600 rounded"></div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Pesticide Spray</p>
                      <p className="text-xs text-gray-500">1L bottles</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">8 units</p>
                    <p className="text-xs text-red-600 font-medium">Low Stock</p>
                  </div>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-blue-600 rounded"></div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Hand Hoe</p>
                      <p className="text-xs text-gray-500">Steel tools</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">23 units</p>
                    <p className="text-xs text-green-600 font-medium">In Stock</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-900">Recent Orders</h2>
                <button className="text-green-600 text-sm font-medium hover:text-green-700 cursor-pointer">View All Orders</button>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <div>
                    <p className="font-medium text-gray-900">#ORD-001</p>
                    <p className="text-xs text-gray-500">NPK Fertilizer - 3 bags</p>
                    <p className="text-xs text-gray-500">by Emmanuel Nkusi</p>
                  </div>
                  <div className="text-right">
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-medium">Processing</span>
                    <p className="text-sm font-bold text-gray-900 mt-1">₱45,000</p>
                  </div>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <div>
                    <p className="font-medium text-gray-900">#ORD-002</p>
                    <p className="text-xs text-gray-500">Maize Seeds - 2 bags</p>
                    <p className="text-xs text-gray-500">by Alice Mukamana</p>
                  </div>
                  <div className="text-right">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">Shipped</span>
                    <p className="text-sm font-bold text-gray-900 mt-1">₱28,000</p>
                  </div>
                </div>
                <div className="flex justify-between items-center py-3">
                  <div>
                    <p className="font-medium text-gray-900">#ORD-003</p>
                    <p className="text-xs text-gray-500">Hand Hoe - 1 unit</p>
                    <p className="text-xs text-gray-500">by Patrick Habimana</p>
                  </div>
                  <div className="text-right">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">Completed</span>
                    <p className="text-sm font-bold text-gray-900 mt-1">₱12,500</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
