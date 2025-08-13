"use client";
import { 
  CheckCircle, LayoutGrid, FilePlus, MessageSquare, BarChart2, ShoppingCart, 
  User, Phone, Settings, LogOut, Mail, Pencil, Trash2, Plus, Search, ChevronDown 
} from "lucide-react";
import Link from "next/link";

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
  { label: 'Market Analytics', href: '/supplier_dashboard/market_analysis', icon: BarChart2 },
  { label: 'Message', href: '/messages', icon: Mail },
  { label: 'Profile', href: '/profile', icon: User },
  { label: 'Contact', href: '/contact', icon: Phone },
  { label: 'Settings', href: '/settings', icon: Settings },
  { label: 'Logout', href: '/logout', icon: LogOut },
];


const inputs = [
  { id: 1, name: "Premium Corn Seeds", category: "Seeds", price: 45.0, stock: 150, status: "In Stock", image: "/corn-seeds.jpg" },
  { id: 2, name: "NPK Fertilizer", category: "Fertilizers", price: 32.5, stock: 8, status: "Low Stock", image: "/npk-fertilizer.jpg" },
  { id: 3, name: "Garden Hoe", category: "Tools", price: 28.0, stock: 45, status: "In Stock", image: "/garden-hoe.jpg" },
  { id: 4, name: "Tomato Seeds", category: "Seeds", price: 12.75, stock: 0, status: "Out of Stock", image: "/tomato-seeds.jpg" },
  { id: 5, name: "Organic Pesticide", category: "Pesticides", price: 22.9, stock: 67, status: "In Stock", image: "/organic-pesticide.jpg" },
  { id: 6, name: "Wheat Seeds", category: "Seeds", price: 38.2, stock: 12, status: "Low Stock", image: "/wheat-seeds.jpg" },
  { id: 7, name: "Watering Can", category: "Tools", price: 15.5, stock: 89, status: "In Stock", image: "/watering-can.jpg" },
  { id: 8, name: "Organic Compost", category: "Fertilizers", price: 19.99, stock: 0, status: "Out of Stock", image: "/organic-compost.jpg" },
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white border-b h-16 flex items-center justify-between px-8 shadow-sm">
        <Logo />
        <button className="bg-green-600 text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-green-700 transition-colors">
          <Plus className="w-4 h-4" />
          Add New Input
        </button>
      </header>

      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r flex flex-col">
          <nav className="flex-1 px-4 py-6 space-y-2">
            {menuItems.map((item, index) => {
              const isActive = item.label === 'My Products';
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

        {/* Main */}
        <main className="flex-1 p-6 bg-gray-50 overflow-auto">
          {/* Search and filters */}
          <div className="flex justify-between items-center mb-6 gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search your product..."
                className="w-full bg-white border border-gray-300 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-3">
              <button className="bg-white border border-gray-300 text-gray-700 rounded-lg py-2.5 px-4 text-sm flex items-center gap-2 hover:bg-gray-50 transition-colors">
                All Categories
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="bg-white border border-gray-300 text-gray-700 rounded-lg py-2.5 px-4 text-sm flex items-center gap-2 hover:bg-gray-50 transition-colors">
                All Stock Levels
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {inputs.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative">
                  <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                    <div className="text-gray-400 text-sm">Product Image</div>
                  </div>
                  <div
                    className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${
                      item.status === "In Stock"
                        ? "bg-green-100 text-green-700"
                        : item.status === "Low Stock"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{item.category}</p>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-lg font-bold text-gray-900">${item.price.toFixed(2)}</p>
                    <p className="text-sm text-gray-600">
                      Stock: <span className={`font-medium ${
                        item.stock === 0
                          ? "text-red-600"
                          : item.stock < 15
                          ? "text-orange-600"
                          : "text-gray-900"
                      }`}>
                        {item.stock}
                      </span>
                    </p>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 bg-gray-100 text-gray-700 px-3 py-2 rounded-md text-sm flex items-center justify-center gap-1 hover:bg-gray-200 transition-colors">
                      <Pencil className="w-4 h-4" />
                      Edit
                    </button>
                    <button className="bg-red-100 text-red-700 p-2 rounded-md hover:bg-red-200 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-8">
            <p className="text-sm text-gray-600">Showing 1 to 8 of 24 products</p>
            <div className="flex items-center gap-2">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                &lt;
              </button>
              <button className="bg-green-600 text-white px-3 py-2 rounded-md text-sm font-medium">1</button>
              <button className="px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors text-sm">2</button>
              <button className="px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors text-sm">3</button>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                &gt;
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
