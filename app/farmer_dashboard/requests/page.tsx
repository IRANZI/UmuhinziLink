import React from 'react';
import { 
  LayoutGrid, Box, FilePlus, MessageSquare, BarChart2, ShoppingCart, 
  User, Phone, Settings, LogOut, CheckCircle, Clock, DollarSign, Mail 
} from 'lucide-react';
import Link from 'next/link';

const Dashboard = () => {
  const requests = [
    { id: "#CR001", item: "Maize Seeds", quantity: "50kg", date: "Jan 15, 2024", status: "Approved" },
    { id: "#CR002", item: "NPK Fertilizer", quantity: "25kg", date: "Jan 20, 2024", status: "Pending" },
    { id: "#CR003", item: "Pesticide", quantity: "5L", date: "Jan 18, 2024", status: "Rejected" },
  ];

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

  const statusStyles = {
    Approved: "text-green-700 bg-green-100",
    Pending: "text-yellow-700 bg-yellow-100",
    Rejected: "text-red-700 bg-red-100",
  };

  const Logo = () => (
    <span className="font-extrabold text-2xl tracking-tight">
      <span className="text-green-700">Umuhinzi</span>
      <span className="text-black">Link</span>
    </span>
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white border-b h-16 flex items-center px-8 shadow-sm">
        <Logo />
      </header>
      <div className="flex flex-1 min-h-0">

        {/* Sidebar */}
        <aside className="w-64 bg-white border-r flex flex-col fixed left-0 top-16 h-[calc(100vh-4rem)] overflow-y-auto justify-between shadow-sm min-h-full">
          <div>
            <nav className="mt-4 space-y-2 px-4">
              {menuItems.map((m, index) => {
                const isActive = m.label === 'Input Request';
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
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto ml-64">
          {/* Page Title & Subtitle */}
          <header className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-xl font-bold mb-1 text-gray-900">Input Credit Requests</h1>
              <p className="text-gray-500 text-sm">Manage your credit requests for seeds, fertilizers, and other inputs</p>
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded shadow flex items-center gap-2">
              <span className="text-lg ">+</span> Request New Credit
            </button>
          </header>

         {/* Summary Cards */}
<div className="grid grid-cols-3 gap-6 mb-6">
  {/* Total Requests */}
  <div className="bg-white border rounded-lg p-5 flex items-center">
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 mr-4">
      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
        <path d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.828a2 2 0 00-.586-1.414l-3.828-3.828A2 2 0 0010.172 2H6zm2 0v4a2 2 0 002 2h4" />
      </svg>
    </div>
    <div>
      <p className="text-sm text-gray-600">Total Requests</p>
      <p className="text-lg font-bold text-gray-900">{requests.length}</p>
    </div>
  </div>

  {/* Approved */}
  <div className="bg-white border rounded-lg p-5 flex items-center">
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 mr-4">
      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <div>
      <p className="text-sm text-gray-600">Approved</p>
      <p className="text-lg font-bold text-green-600">
        {requests.filter(req => req.status === "Approved").length}
      </p>
    </div>
  </div>

  {/* Pending */}
  <div className="bg-white border rounded-lg p-5 flex items-center">
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-100 mr-4">
      <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
        <circle cx="10" cy="10" r="8" />
      </svg>
    </div>
    <div>
      <p className="text-sm text-gray-600">Pending</p>
      <p className="text-lg font-bold text-yellow-600">
        {requests.filter(req => req.status === "Pending").length}
      </p>
    </div>
  </div>
</div>


          {/* Table */}
          <section className="bg-white rounded shadow overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Request ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items Requested</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Request Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {requests.map((request, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{request.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{request.item}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{request.quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{request.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusStyles[request.status as keyof typeof statusStyles]}`}>
                        {request.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button className="text-blue-600 hover:underline">View</button>
                      {request.status === "Pending" && <button className="ml-4 text-red-600 hover:underline">Cancel</button>}
                      {request.status === "Rejected" && <button className="ml-4 text-yellow-600 hover:underline">Resubmit</button>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
